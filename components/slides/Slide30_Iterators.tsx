import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { motion } from "framer-motion";
import { AwakeningDots } from "../deck/Backgrounds";

function RevealHighlight({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      className="relative inline-flex overflow-hidden text-blue-400 font-bold bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] whitespace-nowrap"
    >
      <motion.span
        aria-hidden
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "120%", opacity: [0, 0.35, 0] }}
        transition={{ delay: delay + 0.12, duration: 0.9, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-blue-300/35 to-transparent"
      />
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}

export function Slide30_Iterators() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AwakeningDots />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto px-8 md:px-16 items-center gap-12">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm tracking-widest uppercase bg-black/50 backdrop-blur-md">
              Creadores
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8"
          >
            En la era de la IA,
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-6 text-2xl md:text-4xl text-blue-100/80 font-light leading-relaxed"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>quien</span>
              <RevealHighlight delay={1.05}>
                juega y aprende
              </RevealHighlight>
              <span>más rápido,</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>llega</span>
              <RevealHighlight delay={1.22}>
                más lejos.
              </RevealHighlight>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual (Orb) */}
        <div className="relative flex items-center justify-center h-full w-full">
          {/* Background "CREADORES" Text (Vertical/Subtle) */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5 rotate-90 md:rotate-0 md:right-0 md:left-auto">
            <span className="text-[15vh] md:text-[20vh] font-bold text-white leading-none whitespace-nowrap">
              CREA
            </span>
          </div>

          {/* Orbit System */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] perspective-[1000px]">
             {/* Outer Ring */}
            <motion.div
              initial={{ opacity: 0, rotateX: 60, rotateZ: 0 }}
              animate={{ opacity: 0.3, rotateX: 60, rotateZ: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-400/30 border-dashed"
            />
            
            {/* Inner Ring */}
            <motion.div
              initial={{ opacity: 0, rotateX: 60, rotateZ: 0, scale: 0.7 }}
              animate={{ opacity: 0.5, rotateX: 60, rotateZ: -360, scale: 0.7 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-blue-400/50"
            />

            {/* Central Planet */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-600 shadow-[0_0_80px_rgba(37,99,235,0.5)] flex items-center justify-center z-10"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-800 to-blue-400 opacity-90" />
              <div className="absolute -inset-1 rounded-full bg-blue-400/20 blur-md" />
            </motion.div>

            {/* Orbiting Satellite */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </motion.div>
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
