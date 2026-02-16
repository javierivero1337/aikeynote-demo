import React from "react";
import dynamic from "next/dynamic";
import { SlideShell } from "../deck/SlideShell";
import { motion } from "framer-motion";

const GrainWave = dynamic(() => import("../GrainWave"), { ssr: false });

export function Slide31_Advice() {
  return (
    <SlideShell className="relative overflow-hidden">
      {/* GrainWave Background */}
      <div className="absolute inset-0 z-0">
        <GrainWave
          startColor="#3b82f6"
          endColor="#6366f1"
          backgroundColor="#000000"
          speed={0.4}
          waveCount={30}
          waveAmplitude={0.7}
          waveFrequency={3}
          lineThickness={0.15}
          grainIntensity={40}
          brightness={0.8}
          speedVariation={0.005}
          waveWidth={3.5}
          scale={0.6}
        />
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto flex flex-col justify-center px-8 md:px-16">
        
        {/* The "Old Way" - Fading out */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 pl-2"
        >
           <span className="text-zinc-500 text-sm md:text-base font-mono tracking-widest uppercase mb-3 block">
             El Viejo Modelo
           </span>
           <div className="relative inline-block">
             <span className="text-3xl md:text-4xl text-zinc-600 font-serif italic">
               Carrera Estable
             </span>
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
               className="absolute top-1/2 left-0 h-[1px] bg-red-500/60 -rotate-2"
             />
           </div>
        </motion.div>

        {/* The "New Way" - Hero Text */}
        <div className="flex flex-col gap-2 md:gap-4">
          {["Constructores", "Aprendices", "Adaptables"].map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.5 + (i * 0.15), duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mix-blend-overlay">
                {word}
              </h2>
              <h2 className="text-6xl md:text-8xl font-bold text-white/90 tracking-tighter leading-none absolute top-0 left-0">
                {word}<span className="text-blue-500">.</span>
              </h2>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16 max-w-xl pl-2"
        >
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
            No optimices para la estabilidad. <br/>
            Optimiza para la <span className="text-white font-medium">resiliencia</span>.
          </p>
        </motion.div>

      </div>
    </SlideShell>
  );
}
