import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";

export function Slide06_Sentimiento() {
  return (
    <SlideShell className="relative overflow-hidden">
      {/* Rising Water Effect */}
      <motion.div 
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/50 via-blue-900/20 to-transparent pointer-events-none"
        initial={{ height: "0%" }}
        animate={{ height: "70%" }}
        transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none"
        initial={{ height: "0%" }}
        animate={{ height: "65%" }}
        transition={{ duration: 5, ease: "easeInOut", delay: 0.8 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
             <SlideHeading size="default" className="text-zinc-500">
              No fue un <br />
              <span className="text-white">interruptor</span>.
            </SlideHeading>
          </div>
          
          <div className="md:col-span-1 h-32 w-[1px] bg-zinc-800 hidden md:block mx-auto" />
          
          <div className="md:col-span-6">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="text-3xl md:text-4xl font-serif italic text-blue-200 leading-tight"
            >
              "Fue como darse cuenta de que el agua ya te llega al pecho."
            </motion.p>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
