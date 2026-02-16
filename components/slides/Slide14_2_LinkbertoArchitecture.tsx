import React, { useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PHASES = [
  {
    id: "explorar",
    title: "EXPLORE PHASE:",
    icon: "🔍",
    desc: "Access & Filter",
    details: [
      "Access mongo.sfdccases",
      "Filter: Date, Queue, CSAT",
      "Retrieve matching IDs",
    ],
    color: "border-zinc-700 text-zinc-300",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]",
    content: (
      <div className="space-y-6 font-mono text-sm leading-relaxed">
        <div>
          <h4 className="text-pink-400 font-bold mb-2">1. Analysis Phase</h4>
          <p className="text-zinc-400 mb-4">
            <span className="text-blue-300">Data Context:</span> You are analyzing data representing the output of the following query.
            <br />
            <span className="text-yellow-400 font-bold">IMPORTANT:</span> USE THE ENTIRE DATA SET that results from the query, do not exclude any row from the results. This gives you the full conversation transcript (all_emails) and the customer's csat_comment for each low-CSAT case.
          </p>
        </div>
        
        <div className="bg-[#0f172a] p-4 rounded-lg border border-zinc-800 font-mono text-xs overflow-x-auto">
          <span className="text-purple-400">SELECT</span><br/>
          &nbsp;&nbsp;sc.sfdc_id,<br/>
          &nbsp;&nbsp;sc.csat_comment,<br/>
          &nbsp;&nbsp;array_agg(sem.text_body) <span className="text-purple-400">AS</span> email_threads<br/>
          <span className="text-purple-400">FROM</span> mongo.sfdccases sc<br/>
          <span className="text-purple-400">JOIN</span> mongo.sfdcemailmessages sem <span className="text-purple-400">ON</span> sc.sfdc_id = sem.parent_id<br/>
          <span className="text-purple-400">WHERE</span><br/>
          &nbsp;&nbsp;sc.csat_rating <span className="text-purple-400">IN</span> ('2','1')<br/>
          &nbsp;&nbsp;<span className="text-purple-400">AND</span> latest_queue = 'Consumer Support T1'<br/>
          &nbsp;&nbsp;<span className="text-purple-400">AND</span> sc.csat_date {'>='} date_add('day', -7, date_trunc('week', current_date))<br/>
          &nbsp;&nbsp;<span className="text-purple-400">AND</span> sc.csat_date &lt; date_trunc('week', current_date)<br/>
          <span className="text-purple-400">GROUP BY</span> sc.sfdc_id, sc.csat_comment
        </div>
      </div>
    )
  },
  {
    id: "entender",
    title: "UNDERSTAND PHASE:",
    icon: "🧠",
    desc: "Deep Analysis",
    details: [
      "Match emails",
      "Analyze conversation flow",
      "Identify friction & tone",
    ],
    color: "border-blue-900/50 text-blue-200",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]",
    content: (
      <div className="space-y-6 font-mono text-sm leading-relaxed">
        <div>
          <h4 className="text-pink-400 font-bold mb-2">Execution</h4>
          <p className="text-zinc-400">
            For each case, meticulously review the <span className="text-white italic">entire</span> transcript and CSAT comment to identify the <span className="text-white italic">true</span> root cause.
          </p>
        </div>

        <div className="pl-4 border-l-2 border-blue-500/30 space-y-4">
          <p className="text-zinc-300">
            <span className="text-blue-400 font-bold">Look beyond "purchase issue."</span> Find the <span className="italic">specific</span> friction point. Prime your analysis to look for nuanced failures common to checkout systems like ours, such as:
          </p>
          
          <ul className="space-y-3">
            <li className="text-zinc-400">
              <span className="text-pink-400 font-bold">Product:</span> UI/UX confusion (e.g., fees, slippage), wallet connectivity failures, KYC/ID verification friction, stuck transactions, specific payment rail declines (e.g., bank blocking crypto), or product delivery failures.
            </li>
            <li className="text-zinc-400">
              <span className="text-pink-400 font-bold">People:</span> Agent knowledge gaps (e.g., misunderstanding blockchain), incorrect troubleshooting, poor tone, empathetic failures, or giving up too early.
            </li>
            <li className="text-zinc-400">
              <span className="text-pink-400 font-bold">Process:</span> Slow first-response or resolution times, incorrect escalations, policy constraints (e.g., "we can't help with that"), or broken macros/tooling.
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "sintetizar",
    title: "SYNTHESIZE & ANSWER:",
    icon: "💎",
    desc: "Actionable Insights",
    details: [
      "Group by category",
      "Quantify frequency",
      "Generate recommendations",
    ],
    color: "border-blue-500 text-white",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
    content: (
      <div className="space-y-6 font-mono text-sm leading-relaxed">
        <div>
          <h4 className="text-pink-400 font-bold mb-2">2. Synthesis Phase</h4>
          <p className="text-zinc-400 mb-2">After analyzing all individual cases, consolidate your findings.</p>
          <ol className="list-decimal pl-4 space-y-2 text-zinc-400">
            <li><span className="text-blue-300">Categorize:</span> Group all identified root causes into specific, granular categories (e.g., "KYC Friction - Document Upload Failure").</li>
            <li><span className="text-blue-300">Quantify:</span> Tally the frequency of each category to create a quantitative overview.</li>
            <li><span className="text-blue-300">Cluster:</span> Map your granular categories to the high-level <span className="text-white">People</span>, <span className="text-white">Process</span>, and <span className="text-white">Product</span> framework.</li>
            <li><span className="text-blue-300">Prioritize:</span> Identify the top 3-5 most impactful drivers of dissatisfaction.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-pink-400 font-bold mb-2">3. Reporting Phase</h4>
          <p className="text-zinc-400 mb-2">Present your findings in a clear, structured report.</p>
          <ul className="list-disc pl-4 space-y-2 text-zinc-400">
            <li>
              <span className="text-blue-300">Executive Summary:</span> Issue Category, Frequency, Root Cause Framework.
            </li>
            <li>
              <span className="text-blue-300">Deep-Dive Analysis:</span> Problem (with quotes), Impact (why it hurt CX), Root Cause, Actionable Recommendations.
            </li>
            <li>
              <span className="text-blue-300">Strategic Conclusion:</span> Summary of the most critical, high-impact changes.
            </li>
          </ul>
        </div>
      </div>
    )
  },
];

export function Slide14_2_LinkbertoArchitecture() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SlideShell>
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto z-10 relative px-6">
        <SlideHeading size="lg" className="mb-16 text-center">
          Internal <span className="text-blue-500">Instructions</span>
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-zinc-800 hidden md:block -z-10" />

          {PHASES.map((phase, i) => (
            <motion.div
              layoutId={`card-container-${phase.id}`}
              key={phase.id}
              onClick={() => setSelectedId(phase.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 + 0.5, duration: 0.6 }}
              className={`
                relative bg-zinc-950/80 backdrop-blur-md p-6 rounded-xl border ${phase.color}
                flex flex-col h-full min-h-[320px] cursor-pointer group
                transition-all duration-500 hover:bg-zinc-900 ${phase.glow} hover:-translate-y-2
              `}
            >
              <motion.div 
                layoutId={`icon-${phase.id}`}
                className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-2xl mb-6 shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"
              >
                {phase.icon}
              </motion.div>
              
              <motion.h3 layoutId={`title-${phase.id}`} className="text-xl font-bold font-mono tracking-wider mb-2">
                {phase.title.split(":")[0]}
              </motion.h3>
              <motion.p layoutId={`desc-${phase.id}`} className="text-sm text-zinc-500 uppercase tracking-widest mb-6">
                {phase.desc}
              </motion.p>
              
              <ul className="space-y-3 mt-auto">
                {phase.details.map((detail, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.3 + 0.8 + idx * 0.1 }}
                    className="flex items-start gap-2 text-sm font-mono opacity-80"
                  >
                    <span className="text-blue-500 mt-1">›</span>
                    {detail}
                  </motion.li>
                ))}
              </ul>

              {/* Step Number Background */}
              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 pointer-events-none select-none group-hover:text-white/10 transition-colors duration-500">
                0{i + 1}
              </div>
              
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-blue-400 font-mono">
                Click to view prompt →
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="w-full max-w-4xl bg-[#0B1120] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[85vh]"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0f172a]">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      layoutId={`icon-${selectedId}`}
                      className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-lg"
                    >
                      {PHASES.find((p) => p.id === selectedId)?.icon}
                    </motion.div>
                    <div>
                      <motion.h3 layoutId={`title-${selectedId}`} className="text-lg font-bold font-mono tracking-wider text-blue-400">
                        {PHASES.find((p) => p.id === selectedId)?.title}
                      </motion.h3>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(null);
                    }}
                    className="p-2 hover:bg-zinc-800 rounded-full transition-colors group"
                  >
                    <X className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="p-8 overflow-y-auto bg-[#0B1120] text-zinc-300"
                >
                  {PHASES.find((p) => p.id === selectedId)?.content}
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
}
