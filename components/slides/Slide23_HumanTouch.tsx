import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";

export function Slide23_HumanTouch() {
  return (
    <SlideShell className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/slides-imagery/slide18.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto z-10 relative">
        <SlideHeading size="lg" className="mb-16 text-center">
          ¿El Fin del <span className="text-zinc-500">Toque Humano?</span>
        </SlideHeading>

        <div className="space-y-8 text-center">
          {["Empatía", "Juicio", "Gusto"].map((word, index) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.5 + index * 0.8, duration: 1.5 }}
              className="text-4xl md:text-6xl font-serif italic text-zinc-300 relative"
            >
              {word}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.0, duration: 1.5 }}
          className="mt-16 text-xl text-zinc-500 text-center max-w-2xl"
        >
          Creíamos que eran insustituibles.
        </motion.p>
      </div>
    </SlideShell>
  );
}
