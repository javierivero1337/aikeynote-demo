import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { GridDistortion } from "../deck/Backgrounds";

const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block">
      {/* Main Text */}
      <motion.span 
        className="relative z-10 text-blue-500"
        animate={{
          filter: ["blur(0px)", "blur(1px)", "blur(0px)", "blur(2px)", "blur(0px)"],
          opacity: [1, 0.8, 1, 0.9, 1],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: Math.random() * 2 + 1
        }}
      >
        {text}
      </motion.span>
      
      {/* Cyan Glitch Layer */}
      <motion.span
        className="absolute top-0 left-0 -z-10 text-cyan-400 opacity-50 mix-blend-screen"
        animate={{
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: Math.random() * 3
        }}
      >
        {text}
      </motion.span>

      {/* Red Glitch Layer */}
      <motion.span
        className="absolute top-0 left-0 -z-10 text-red-500 opacity-50 mix-blend-screen"
        animate={{
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
          repeatDelay: Math.random() * 3 + 0.5
        }}
      >
        {text}
      </motion.span>
    </span>
  );
};

export function Slide03_Sesgo() {
  return (
    <SlideShell className="relative">
      <GridDistortion />
      <div className="relative z-10 w-full">
        <SlideHeading className="mb-8">
          El Sesgo de <GlitchText text="Normalidad" />
        </SlideHeading>
        
        <div className="space-y-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="border-l-2 border-zinc-800 pl-6"
          >
            <p className="text-2xl text-zinc-300 italic">
              "Acumular papel higiénico parecía de locos."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-zinc-400"
          >
            Pero en <span className="text-white font-bold">tres semanas</span>, el mundo cambió y la vida se reorganizó por completo.
          </motion.p>
        </div>
      </div>
    </SlideShell>
  );
}
