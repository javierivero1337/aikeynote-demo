import React from "react";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideHeading } from "@/components/deck/SlideHeading";
import { motion } from "framer-motion";

// Parent container that orchestrates the columns
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// Column container that orchestrates its items
const columnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  },
};

export function Slide13_6_PowerDynamic() {
  return (
    <SlideShell>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto px-6">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <SlideHeading className="mb-12 text-center relative z-20">
          Dinámica de <span className="text-purple-500">Poder</span>
        </SlideHeading>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative z-20"
        >
          {/* ─── Right Column: The Shift (Span 6) ─── */}
          <motion.div variants={columnVariants} className="space-y-8">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-white font-mona mb-8 flex items-center justify-center gap-3"
            >
              El cambio de paradigma
              <span className="text-xs font-normal text-zinc-500 font-mono border border-zinc-800 px-2 py-0.5 rounded-full bg-zinc-900">
                SHIFT
              </span>
            </motion.h3>

            <div className="space-y-6">
              {/* Replaceable Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 0.98, opacity: 0.8 }}
                className="group p-6 rounded-xl border border-zinc-800/60 bg-zinc-900/20 transition-all duration-300 hover:border-red-900/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-red-400/60 font-mono text-sm uppercase tracking-widest group-hover:text-red-400 transition-colors">
                    Reemplazable
                  </h4>
                </div>
                <p className="text-zinc-500 text-lg group-hover:text-zinc-400 transition-colors">
                  Si tu valor reside únicamente en la{" "}
                  <span className="text-zinc-400 group-hover:text-zinc-300 font-medium decoration-red-500/30 underline decoration-wavy underline-offset-4">
                    gestión de tareas
                  </span>
                  .
                </p>
              </motion.div>

              {/* Indispensable Card - The Hero */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.4)" }}
                className="relative group p-8 rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-900 to-black shadow-2xl shadow-green-900/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h4 className="text-green-400 font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    Indispensable
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  </h4>
                </div>
                <p className="text-zinc-300 text-xl relative z-10 leading-relaxed">
                  Si tu valor reside en{" "}
                  <span className="text-white font-semibold border-b border-green-500/50 pb-0.5">
                    desarrollar personas
                  </span>
                  , crear estrategias y resolver problemas que la IA no puede.
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-10 mt-6">
              <p className="text-xl text-zinc-200 italic font-light border-l-4 border-purple-500 pl-8 py-4 bg-gradient-to-r from-purple-900/10 to-transparent rounded-r-lg">
                "La pregunta no es '¿Me quitará la IA mi puesto?', sino{" "}
                <span className="text-purple-400 font-medium block mt-2">
                  '¿Qué partes de mi rol puedo evolucionar más allá de la IA?'"
                </span>
              </p>
              <div className="mt-6 flex justify-end items-center gap-2 opacity-60">
                <div className="h-px w-8 bg-zinc-700" />
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
                  Gagan Sharma (@Philosopar)
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
