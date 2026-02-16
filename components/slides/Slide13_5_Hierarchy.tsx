import React, { useEffect, useState } from "react";
import { SlideShell } from "@/components/deck/SlideShell";
import { SlideHeading } from "@/components/deck/SlideHeading";
import { motion, useSpring, useTransform } from "framer-motion";

function Counter({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) {
  const spring = useSpring(0, { bounce: 0, duration: 2500 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    // Small delay to ensure the element is visible before counting starts
    const t = setTimeout(() => {
      spring.set(value);
    }, 600);
    return () => clearTimeout(t);
  }, [spring, value]);

  return (
    <span className="tabular-nums flex items-center justify-center gap-1">
      <span className="text-xl opacity-50">{direction === "up" ? "↑" : "↓"}</span>
      <motion.span>{display}</motion.span>%
    </span>
  );
}

// Parent container that orchestrates the columns
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger the two main columns
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
      staggerChildren: 0.15, // Stagger items within the column
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
      type: "spring" as const,
      stiffness: 70,
      damping: 12,
    },
  },
};

export function Slide13_5_Hierarchy() {
  return (
    <SlideShell>
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto px-6">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <SlideHeading className="mb-12 text-center relative z-20">
          Jerarquías <span className="text-blue-500">Aplanadas</span>
        </SlideHeading>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative z-20"
        >
          {/* ─── Left Column: The Data (Span 5) ─── */}
          <motion.div variants={columnVariants} className="space-y-8">
            {/* HBR Card */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl relative overflow-hidden group hover:border-zinc-700 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-blue-400"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-blue-400 mb-2 font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Harvard Business Review
              </h3>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6">
                Estudio: 50,000+ devs
              </p>
              <p className="text-2xl text-zinc-200 font-light leading-relaxed">
                "La IA generativa no solo automatiza tareas. <br />
                <span className="text-white font-semibold bg-gradient-to-r from-blue-500/20 to-transparent px-1 rounded inline-block mt-2">
                  Está aplanando las jerarquías.
                </span>
                "
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/50 flex flex-col items-center justify-center text-center hover:bg-zinc-800/60 transition-colors group"
              >
                <span className="text-zinc-500 text-xs uppercase tracking-widest mb-3 group-hover:text-zinc-400 transition-colors">
                  Tiempo de Código
                </span>
                <span className="text-green-400 font-mono font-bold text-5xl">
                  <Counter value={5} direction="up" />
                </span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="bg-zinc-900/40 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/50 flex flex-col items-center justify-center text-center hover:bg-zinc-800/60 transition-colors group"
              >
                <span className="text-zinc-500 text-xs uppercase tracking-widest mb-3 group-hover:text-zinc-400 transition-colors">
                  Gestión
                </span>
                <span className="text-red-400 font-mono font-bold text-5xl">
                  <Counter value={10} direction="down" />
                </span>
              </motion.div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg leading-relaxed border-l-2 border-zinc-800 pl-6 italic text-center"
            >
              La IA otorga a los individuos la autonomía para gestionar y ejecutar trabajos que antes requerían supervisión.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
