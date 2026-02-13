import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { AwakeningDots } from "../deck/Backgrounds";

export function Slide04_Tesis() {
  return (
    <SlideShell className="relative">
      <AwakeningDots />
      <div className="relative z-10 text-center space-y-12">
        <SlideHeading size="large">
          "Esto es una <br />
          <span className="text-white/30 line-through decoration-red-500/50">exageración</span>"
        </SlideHeading>
        
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-3xl md:text-4xl font-light text-zinc-200"
        >
          Estamos viviendo el inicio de algo <br />
          <span className="font-semibold text-blue-400">mucho más grande</span> que el Covid.
        </motion.p>
      </div>
    </SlideShell>
  );
}
