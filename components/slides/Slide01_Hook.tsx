import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import Dither from "../Dither";

export function Slide01_Hook() {
  return (
    <SlideShell className="relative">
      <div className="absolute inset-0 z-0">
        <Dither 
          waveColor={[0.2, 0.2, 0.2]} 
          disableAnimation={false} 
          waveSpeed={0.05} 
          enableMouseInteraction={false}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <SlideHeading size="xl" className="text-center">
          Romper el <br />
          <span className="text-blue-500">Sesgo de Normalidad</span>
        </SlideHeading>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-xl text-zinc-400 text-center mt-8 max-w-2xl mx-auto"
        >
          ¿Qué pasaría si lo que consideras "normal" estuviera a punto de desaparecer?
        </motion.p>
      </div>
    </SlideShell>
  );
}
