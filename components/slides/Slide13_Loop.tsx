import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { Cpu, Code2, Zap } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "IA más Inteligente",
    desc: "Modelos con mayor razonamiento",
    icon: <Cpu className="w-8 h-8" />,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "shadow-blue-500/20",
  },
  {
    id: 2,
    title: "Mejor Ingeniería",
    desc: "La IA optimiza su propio código",
    icon: <Code2 className="w-8 h-8" />,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    glow: "shadow-indigo-500/20",
  },
  {
    id: 3,
    title: "Entrenamiento Veloz",
    desc: "Nuevas arquitecturas descubiertas",
    icon: <Zap className="w-8 h-8" />,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "shadow-violet-500/20",
  },
];

export function Slide13_Loop() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto z-10">
        <SlideHeading size="large" className="mb-8 md:mb-16 text-center">
          El Bucle: <span className="text-blue-500">Explosión de Inteligencia</span>
        </SlideHeading>

        <div className="relative w-[600px] h-[500px] flex items-center justify-center">
          {/* Connecting Lines (Triangle) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 500">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            
            {/* Path connecting the 3 nodes */}
            {/* Top (300, 160) -> Bottom Right (480, 340) -> Bottom Left (120, 340) -> Close */}
            <motion.path
              d="M 300 160 L 480 340 L 120 340 Z"
              fill="none"
              stroke="url(#line-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            
            {/* Flowing Particles */}
            <circle r="4" fill="#60a5fa">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 300 160 L 480 340 L 120 340 Z"
              />
            </circle>
             <circle r="4" fill="#818cf8">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin="1s"
                path="M 300 160 L 480 340 L 120 340 Z"
              />
            </circle>
             <circle r="4" fill="#a78bfa">
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin="2s"
                path="M 300 160 L 480 340 L 120 340 Z"
              />
            </circle>
          </svg>

          {/* Central Core */}
          <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl absolute inset-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 blur-md opacity-50 animate-pulse" />
            </motion.div>
          </div>

          {/* Nodes */}
          {/* Node 1: Top */}
          <Node 
            item={steps[0]} 
            className="top-0 left-1/2 -translate-x-1/2" 
            delay={0}
          />

          {/* Node 2: Bottom Right */}
          <Node 
            item={steps[1]} 
            className="bottom-10 right-0" 
            delay={0.8}
          />

          {/* Node 3: Bottom Left */}
          <Node 
            item={steps[2]} 
            className="bottom-10 left-0" 
            delay={1.6}
          />
        </div>
      </div>
    </SlideShell>
  );
}

function Node({ item, className, delay }: { item: typeof steps[0], className: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: "backOut" }}
      className={`absolute w-64 p-5 rounded-2xl border backdrop-blur-sm ${item.bg} ${item.border} ${className} shadow-lg ${item.glow}`}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className={`p-3 rounded-full bg-black/40 border border-white/10 ${item.color}`}>
          {item.icon}
        </div>
        <div>
          <h3 className={`text-lg font-bold ${item.color} mb-1`}>{item.title}</h3>
          <p className="text-sm text-zinc-400 font-mono leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
