"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";

/* ─── Braille Spinner ─── */
const FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

function Spinner({ className = "text-blue-400" }: { className?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % FRAMES.length), 80);
    return () => clearInterval(id);
  }, []);
  return <span className={className}>{FRAMES[i]}</span>;
}

/* ─── Typed Text (character by character) ─── */
function TypedText({
  text,
  startAt,
  className = "",
  onDone,
}: {
  text: string;
  startAt: number;
  className?: string;
  onDone?: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), startAt * 1000);
    return () => clearTimeout(t);
  }, [startAt]);

  useEffect(() => {
    if (!visible || count >= text.length) {
      if (visible && count >= text.length) onDone?.();
      return;
    }
    const t = setTimeout(() => setCount((c) => c + 1), 22 + Math.random() * 28);
    return () => clearTimeout(t);
  }, [visible, count, text.length, onDone]);

  if (!visible) return null;
  return (
    <div className={className}>
      {text.slice(0, count)}
      {count < text.length && (
        <span className="inline-block w-[7px] h-[14px] bg-zinc-400 ml-[1px] animate-pulse align-middle" />
      )}
    </div>
  );
}

/* ─── Delayed Line ─── */
function DLine({
  at,
  children,
  className = "",
}: {
  at: number;
  children: React.ReactNode;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), at * 1000);
    return () => clearTimeout(t);
  }, [at]);
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Spinner Phase: shows spinner → resolves to final text ─── */
function SpinnerPhase({
  startAt,
  resolveAt,
  spinText,
  resolvedText,
  spinClass = "text-blue-400",
  resolvedClass = "text-green-400",
}: {
  startAt: number;
  resolveAt: number;
  spinText: string;
  resolvedText: string;
  spinClass?: string;
  resolvedClass?: string;
}) {
  const [state, setState] = useState<"hidden" | "spin" | "done">("hidden");

  useEffect(() => {
    const t1 = setTimeout(() => setState("spin"), startAt * 1000);
    const t2 = setTimeout(() => setState("done"), resolveAt * 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [startAt, resolveAt]);

  if (state === "hidden") return null;
  if (state === "spin")
    return (
      <div className={spinClass}>
        <Spinner className={spinClass} /> {spinText}
      </div>
    );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={resolvedClass}
    >
      {resolvedText}
    </motion.div>
  );
}

/* ─── Progress Bar ─── */
function ProgressBar({
  startAt,
  duration,
  className = "",
}: {
  startAt: number;
  duration: number;
  className?: string;
}) {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), startAt * 1000);
    return () => clearTimeout(t);
  }, [startAt]);

  useEffect(() => {
    if (!show) return;
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      const pct = Math.min(elapsed / duration, 1);
      setProgress(pct);
      if (pct >= 1) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [show, duration]);

  if (!show) return null;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-48 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <span className="text-zinc-600 text-xs tabular-nums">
        {Math.round(progress * 100)}%
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════ */
/*                  MAIN SLIDE                     */
/* ═══════════════════════════════════════════════ */

export function Slide16_Coders() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal as new content appears
  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const obs = new MutationObserver(scrollToBottom);
    obs.observe(el, { childList: true, subtree: true, characterData: true });
    return () => obs.disconnect();
  }, [scrollToBottom]);

  return (
    <SlideShell className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto px-4">
        {/* ── Heading ── */}
        <SlideHeading className="mb-3 text-center">
          Self-Healing <span className="text-blue-500">Code</span>
        </SlideHeading>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-500 text-lg text-center mb-6"
        >
          Escribe. Prueba. <span className="text-green-400 font-semibold">Se corrige solo.</span>
        </motion.p>

        {/* ── Terminal ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/60"
        >
          {/* Title bar */}
          <div className="h-9 bg-zinc-900/80 border-b border-zinc-800 flex items-center px-3 gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-zinc-600 text-xs font-mono">
              ~/project — zsh
            </span>
          </div>

          {/* Terminal content */}
          <div
            ref={scrollRef}
            className="p-5 font-mono text-[13px] leading-[1.7] overflow-y-auto space-y-[2px]"
            style={{
              height: "420px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* ═══ Phase 1: Command ═══ */}
            <TypedText
              startAt={0.8}
              text={'$ "Arregla los 3 tests que están fallando en el módulo de auth"'}
              className="text-zinc-300"
            />

            {/* ═══ Phase 2: Scanning ═══ */}
            <DLine at={2.8} className="h-3" />
            <SpinnerPhase
              startAt={3.0}
              resolveAt={4.8}
              spinText="Scanning project files..."
              resolvedText="✓ Scanned 847 files in 1.2s"
            />
            <ProgressBar startAt={3.0} duration={1.8} className="mt-1 mb-1" />
            <DLine at={5.1} className="text-zinc-500">
              {"  → Found 3 failing test suites"}
            </DLine>

            {/* ═══ Phase 3: Diagnosis ═══ */}
            <DLine at={5.6} className="h-3" />
            <SpinnerPhase
              startAt={5.8}
              resolveAt={7.0}
              spinText="Diagnosing root causes..."
              resolvedText="✓ Identified 3 issues across 3 files"
              spinClass="text-yellow-400"
              resolvedClass="text-yellow-400"
            />

            <DLine at={7.4} className="h-3" />
            <DLine at={7.5} className="text-red-400">
              {"  ✗ src/auth/validate.ts:42"}
            </DLine>
            <DLine at={7.5} className="text-red-400/50 pl-6">
              {"NullReferenceException: Cannot read 'id' of undefined"}
            </DLine>
            <DLine at={8.0} className="text-red-400">
              {"  ✗ src/auth/session.ts:18"}
            </DLine>
            <DLine at={8.0} className="text-red-400/50 pl-6">
              {"Type 'string' is not assignable to type 'Session'"}
            </DLine>
            <DLine at={8.5} className="text-red-400">
              {"  ✗ src/middleware/cors.ts:7"}
            </DLine>
            <DLine at={8.5} className="text-red-400/50 pl-6">
              {"Missing 'Authorization' in Access-Control-Allow-Headers"}
            </DLine>

            {/* ═══ Phase 4: Auto-Fixing (THE STAR) ═══ */}
            <DLine at={9.2} className="h-3" />

            {/* ── Fix 1: validate.ts (2.5s spinner) ── */}
            <SpinnerPhase
              startAt={9.5}
              resolveAt={12.0}
              spinText="Fixing src/auth/validate.ts..."
              resolvedText="✓ Fixed src/auth/validate.ts (2 changes)"
            />
            <DLine at={12.3} className="text-zinc-600 pl-4">
              <span className="text-green-600">+</span> if (!user?.id) return
              null; <span className="text-zinc-700">// null safety guard</span>
            </DLine>
            <DLine at={12.6} className="text-zinc-600 pl-4">
              <span className="text-yellow-600">~</span> return type: Promise
              {"<"}User | null{">"}
            </DLine>

            {/* ── Fix 2: session.ts (2s spinner) ── */}
            <DLine at={13.2} className="h-3" />
            <SpinnerPhase
              startAt={13.5}
              resolveAt={15.5}
              spinText="Fixing src/auth/session.ts..."
              resolvedText="✓ Fixed src/auth/session.ts (1 change)"
            />
            <DLine at={15.8} className="text-zinc-600 pl-4">
              <span className="text-yellow-600">~</span> Replaced string cast →
              Session.fromToken()
            </DLine>

            {/* ── Fix 3: cors.ts (1.8s spinner) ── */}
            <DLine at={16.3} className="h-3" />
            <SpinnerPhase
              startAt={16.5}
              resolveAt={18.3}
              spinText="Fixing src/middleware/cors.ts..."
              resolvedText="✓ Fixed src/middleware/cors.ts (1 change)"
            />
            <DLine at={18.6} className="text-zinc-600 pl-4">
              <span className="text-green-600">+</span> allowedHeaders: [
              ...existing, &apos;Authorization&apos;]
            </DLine>

            {/* ═══ Phase 5: Re-run Tests ═══ */}
            <DLine at={19.3} className="h-3" />
            <DLine at={19.5} className="text-zinc-300">
              $ pnpm test --run
            </DLine>
            <DLine at={20.0} className="h-2" />
            <SpinnerPhase
              startAt={20.2}
              resolveAt={22.2}
              spinText="Running 142 tests across 23 suites..."
              resolvedText="✓ All 23 test suites passed"
              spinClass="text-blue-400"
              resolvedClass="text-green-400"
            />
            <ProgressBar startAt={20.2} duration={2.0} className="mt-1 mb-1" />

            <DLine at={22.5} className="text-green-400/60 pl-4">
              ✓ auth/validate.test.ts ·· 23 passed
            </DLine>
            <DLine at={22.7} className="text-green-400/60 pl-4">
              ✓ auth/session.test.ts ·· 18 passed
            </DLine>
            <DLine at={22.9} className="text-green-400/60 pl-4">
              ✓ middleware/cors.test.ts ·· 12 passed
            </DLine>
            <DLine at={23.1} className="text-green-400/60 pl-4">
              ✓ 20 more suites ·· 89 passed
            </DLine>

            {/* ═══ Phase 6: Summary ═══ */}
            <DLine at={23.8} className="h-3" />
            <DLine at={24.0} className="text-white font-semibold">
              {"  Tests:    "}
              <span className="text-green-400">142 passed</span>, 0 failed
            </DLine>
            <DLine at={24.3} className="text-zinc-500">
              {"  Duration: 2.4s"}
            </DLine>

            {/* ═══ Phase 7: Success ═══ */}
            <DLine at={25.0} className="h-3" />
            <DLine
              at={25.3}
              className="text-green-400 font-bold text-sm"
            >
              ✓ All issues resolved. 3 files modified. 0 human intervention.
            </DLine>

            {/* Blinking cursor at the end */}
            <DLine at={26.0} className="text-zinc-300">
              ${" "}
              <span className="inline-block w-[7px] h-[14px] bg-zinc-400 ml-[1px] animate-pulse align-middle" />
            </DLine>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
