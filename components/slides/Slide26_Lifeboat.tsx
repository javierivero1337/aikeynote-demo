import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { motion } from "framer-motion";
import Aurora from "../Aurora";
import BlurText from "../BlurText";

export function Slide26_Lifeboat() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60">
        <Aurora 
          colorStops={["#00d2ff", "#3a7bd5", "#00d2ff"]} 
          speed={0.5} 
          amplitude={1.2}
        />
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
            <span className="px-3 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-sm tracking-widest uppercase bg-black/50 backdrop-blur-md">
              Mentalidad
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              <BlurText
                text="El Bote Salvavidas"
                delay={50}
                animateBy="words"
                direction="top"
                className="block"
                as="span"
              />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-6 text-2xl md:text-3xl text-cyan-100/80 font-light"
          >
            <p className="leading-relaxed">
              Objetivo: Cambiar el <span className="text-red-400 font-medium">miedo</span> por
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-cyan-400 font-bold bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                agencia
              </span>
              <span className="text-cyan-200">y</span>
              <span className="text-cyan-400 font-bold bg-cyan-500/10 px-4 py-2 rounded-lg border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                oportunidad.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual (Abstract Core) */}
        <div className="relative flex items-center justify-center h-full w-full">
          {/* Background Text (Vertical/Subtle) */}
          <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-5 rotate-90 md:rotate-0 md:right-0 md:left-auto">
            <span className="text-[15vh] md:text-[20vh] font-bold text-white leading-none whitespace-nowrap">
              BUILD
            </span>
          </div>

          {/* Constructed Core System */}
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] perspective-[1000px]">
             {/* Rotating Cube Frame */}
            <motion.div
              initial={{ opacity: 0, rotateX: 45, rotateY: 45 }}
              animate={{ opacity: 0.4, rotateX: 405, rotateY: 405 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-cyan-400/30"
              style={{ transformStyle: "preserve-3d" }}
            >
               {/* Inner decorative lines for "structure" feel */}
               <div className="absolute inset-4 border border-cyan-500/20" />
            </motion.div>
            
            {/* Protective Shield Ring */}
            <motion.div
              initial={{ opacity: 0, rotateX: 70, rotateZ: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, rotateX: 70, rotateZ: -360, scale: 0.8 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-cyan-500/20 border-dotted"
            />

            {/* Central Stable Core (Pyramid/Diamond shape abstract) */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center z-10"
            >
              {/* Diamond Shape using rotation */}
              <div className="w-full h-full bg-cyan-900/40 backdrop-blur-xl border border-cyan-400/50 rotate-45 shadow-[0_0_60px_rgba(6,182,212,0.4)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
                {/* Inner glowing core */}
                <div className="w-1/2 h-1/2 bg-cyan-400 rounded-full blur-xl animate-pulse" />
              </div>
            </motion.div>

            {/* Floating particles/debris being repelled (optional vibe) */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
               <div className="absolute top-10 left-1/2 w-2 h-2 bg-cyan-200 rounded-full opacity-50" />
               <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-cyan-500 rounded-full opacity-30" />
            </motion.div>
          </div>
        </div>

      </div>
    </SlideShell>
  );
}
