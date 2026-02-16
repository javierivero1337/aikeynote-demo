import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { AwakeningDots } from "../deck/Backgrounds";
import ShinyText from "../ShinyText";

export function Slide04_Tesis() {
  return (
    <SlideShell className="relative">
      <AwakeningDots />
      <div className="relative z-10 text-center space-y-12">
        <SlideHeading size="large">
          "Esto es una <br />
          <span className="text-white/30 line-through decoration-red-500/50">exageración</span>"
        </SlideHeading>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-3xl md:text-4xl font-light text-zinc-200"
        >
          Estamos viviendo el inicio de algo <br />
          <div className="inline-block mt-2">
            <ShinyText 
              text="mucho más grande" 
              disabled={false} 
              speed={3} 
              className="font-semibold text-blue-400" 
              color="#60a5fa"
              shineColor="#ffffff"
            />
          </div> que el Covid.
        </motion.div>
      </div>
    </SlideShell>
  );
}
