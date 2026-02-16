import React, { useState, useEffect, useCallback } from "react";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideHeading } from "@/components/deck/SlideHeading";
import { motion } from "framer-motion";
import { X, Terminal, Database, FileText, Cpu } from "lucide-react";

const PROMPT_SECTIONS = [
  {
    id: "persona",
    title: "Persona & Context",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    summary: "Expert Analyst embedded in Support Team.",
    code: `### **Persona**
You are an expert-level **Qualitative Data Analyst** embedded within the **Consumer Support Team**. You are a master at transforming raw support conversation data into systemic, actionable insights.

### **Context**
* **Our Product:** "Link Checkout," used for purchasing crypto, web services, and other products.
* **Our Customers:** Users attempting to complete a purchase.
* **The "Generic" Problem:** We already know all cases are "purchase issues." This insight is useless.
* **Your Audience:** An expert-level internal team. They need to understand the *specific, nuanced drivers* behind failures. Generic summaries are unacceptable.
* **Your Goal:** To perform a deep-dive analysis on low-CSAT cases and pinpoint the *true root causes* of dissatisfaction, classifying them into **People**, **Process**, or **Product** failures.`,
  },
  {
    id: "task",
    title: "Core Task & Workflow",
    icon: <FileText className="w-5 h-5 text-green-400" />,
    summary: "Deep dive into low-CSAT cases.",
    code: `### **Core Task: Low-CSAT Deep Dive**
You will analyze a dataset of last week's low-satisfaction (1 or 2-star CSAT) support cases. Your mission is to identify, quantify, and report on the specific drivers of this dissatisfaction, providing concrete recommendations.

---
### **Workflow**
Your analysis will follow a strict three-phase process: Analysis, Synthesis, and Reporting.`,
  },
  {
    id: "analysis",
    title: "Analysis Phase",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    summary: "SQL Query & Root Cause Identification.",
    code: `#### **1. Analysis Phase**
**Data Context:** You are analyzing data representing the output of the following query.

-- SQL Query
SELECT
  c.case_id,
  c.satisfaction_comment,
  array_agg(m.message_body) AS conversation_threads
FROM support.cases c
JOIN support.messages m ON c.case_id = m.case_id
WHERE
  c.csat_rating IN ('2','1')
  AND c.queue = 'Support T1'
  AND c.rated_at >= date_add('day', -7, date_trunc('week', current_date))
  AND c.rated_at < date_trunc('week', current_date)
GROUP BY c.case_id, c.satisfaction_comment

**Execution:**
* **Look beyond "purchase issue."** Find the *specific* friction point.
* **Product:** UI/UX confusion, wallet connectivity, KYC/ID friction.
* **People:** Agent knowledge gaps, poor tone, empathetic failures.
* **Process:** Slow response, incorrect escalations, policy constraints.`,
  },
  {
    id: "reporting",
    title: "Synthesis & Reporting",
    icon: <Terminal className="w-5 h-5 text-orange-400" />,
    summary: "Categorize, Quantify, and Recommend.",
    code: `#### **2. Synthesis Phase**
1. **Categorize:** Group root causes (e.g., "KYC Friction - Document Upload Failure").
2. **Quantify:** Tally frequency.
3. **Cluster:** Map to People, Process, Product.
4. **Prioritize:** Top 3-5 most impactful drivers.

---
#### **3. Reporting Phase**
* **A. Executive Summary:** Issue Category, Frequency, Root Cause.
* **B. Deep-Dive Analysis:**
  * **Problem:** Nuanced description with quotes/IDs.
  * **Impact:** Customer experience impact.
  * **Root Cause:** People/Process/Product.
  * **Actionable Recommendations:** Specific, concrete steps.
* **C. Strategic Conclusion:** Critical changes for CSAT improvement.`,
  },
];

/* ── Styled Markdown Renderer ───────────────────────────────── */

function renderInline(text: string): React.ReactNode[] {
  const result: React.ReactNode[] = [];
  const regex = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(
        <span key={key++}>{text.slice(lastIndex, match.index)}</span>
      );
    }
    result.push(
      <span key={key++} className="text-zinc-100 font-semibold">
        {match[1]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(<span key={key++}>{text.slice(lastIndex)}</span>);
  }

  return result;
}

function StyledPromptContent({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1 text-[11px] leading-[1.7] text-zinc-400">
      {lines.map((line, i) => {
        const trimmed = line.trim();

        /* Empty line → spacer */
        if (!trimmed) return <div key={i} className="h-1" />;

        /* ### / #### Headers */
        if (trimmed.startsWith("###")) {
          const text = trimmed.replace(/^#{3,4}\s*/, "").replace(/\*\*/g, "");
          return (
            <div
              key={i}
              className="text-blue-400 font-bold text-[11px] uppercase tracking-widest mt-3 mb-1 pb-1 border-b border-zinc-800/60"
            >
              {text}
            </div>
          );
        }

        /* --- Separator */
        if (trimmed === "---") {
          return <div key={i} className="border-t border-zinc-800/40 my-2" />;
        }

        /* SQL / code-like lines */
        if (
          /^(SELECT|FROM|JOIN|WHERE|AND\s|GROUP|ORDER|--|IN\s)/.test(trimmed)
        ) {
          return (
            <div
              key={i}
              className="font-mono text-[10px] text-emerald-400/70 pl-2 border-l-2 border-emerald-500/20"
            >
              {trimmed}
            </div>
          );
        }

        /* Indented sub-bullets (  * or  -) */
        if (/^\s{2,}[*-]\s/.test(line)) {
          const bulletContent = trimmed.replace(/^[*-]\s/, "");
          return (
            <div key={i} className="flex gap-1.5 ml-3">
              <span className="text-fuchsia-400 shrink-0 mt-px">*</span>
              <span>{renderInline(bulletContent)}</span>
            </div>
          );
        }

        /* Top-level bullets (* or -) */
        if (/^[*-]\s/.test(trimmed)) {
          const bulletContent = trimmed.replace(/^[*-]\s/, "");
          return (
            <div key={i} className="flex gap-1.5">
              <span className="text-fuchsia-400 shrink-0 mt-px">*</span>
              <span>{renderInline(bulletContent)}</span>
            </div>
          );
        }

        /* Numbered items */
        if (/^\d+\.\s/.test(trimmed)) {
          const num = trimmed.match(/^(\d+)\./)?.[1];
          const rest = trimmed.replace(/^\d+\.\s/, "");
          return (
            <div key={i} className="flex gap-1.5">
              <span className="text-blue-400 font-mono shrink-0 mt-px">
                {num}.
              </span>
              <span>{renderInline(rest)}</span>
            </div>
          );
        }

        /* Regular text */
        return <div key={i}>{renderInline(trimmed)}</div>;
      })}
    </div>
  );
}

/* ── Flip Card ──────────────────────────────────────────────── */

function FlipCard({
  section,
  isFlipped,
  onFlip,
  onClose,
}: {
  section: (typeof PROMPT_SECTIONS)[number];
  isFlipped: boolean;
  onFlip: () => void;
  onClose: () => void;
}) {
  return (
    <div
      data-flip-card
      className="h-[320px]"
      style={{
        perspective: "1200px",
        zIndex: isFlipped ? 50 : 1,
        position: "relative",
      }}
    >
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
          scale: isFlipped ? 1.45 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* ── Front Face ── */}
        <div
          onClick={() => !isFlipped && onFlip()}
          className="absolute inset-0 bg-[#0b1221] border border-zinc-800/60 p-5 rounded-2xl cursor-pointer hover:border-blue-500/30 transition-all group overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative flex items-center gap-3 mb-5">
            <div className="p-2.5 bg-zinc-950/80 rounded-lg border border-zinc-800/60 group-hover:border-blue-500/30 transition-colors">
              {section.icon}
            </div>
          </div>

          <h3 className="relative text-base font-bold text-zinc-100 mb-2 leading-tight">
            {section.title}
          </h3>
          <p className="relative text-zinc-500 text-xs leading-relaxed">
            {section.summary}
          </p>

          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-zinc-700 group-hover:text-blue-400/60 transition-colors">
            click to flip
          </div>
        </div>

        {/* ── Back Face ── */}
        <div
          className="absolute inset-0 bg-[#0b1221] border border-zinc-700/40 rounded-2xl overflow-hidden flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-2.5 right-2.5 z-10 p-1 hover:bg-zinc-800/80 rounded-full transition-colors"
          >
            <X className="w-3.5 h-3.5 text-zinc-500" />
          </button>

          {/* Scrollable content */}
          <div className="p-4 pt-3 overflow-y-auto flex-1">
            <StyledPromptContent content={section.code} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Slide ───────────────────────────────────────────────────── */

export function Slide20_Hierarchy() {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const closeFlipped = useCallback(() => setFlippedId(null), []);

  /* Close when clicking outside any card */
  useEffect(() => {
    if (!flippedId) return;

    function handlePointerDown(e: PointerEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-flip-card]")) return;
      setFlippedId(null);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [flippedId]);

  return (
    <SlideShell>
      <div className="flex flex-col items-center justify-center h-full w-full max-w-[1400px] mx-auto px-10 relative z-10">
        <SlideHeading className="mb-10 text-center">
          The <span className="text-blue-500">System Prompt</span>
        </SlideHeading>

        <div className="grid grid-cols-4 gap-5 w-full">
          {PROMPT_SECTIONS.map((section) => (
            <FlipCard
              key={section.id}
              section={section}
              isFlipped={flippedId === section.id}
              onFlip={() => setFlippedId(section.id)}
              onClose={closeFlipped}
            />
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
