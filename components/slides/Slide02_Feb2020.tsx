import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { DataStream } from "../deck/Backgrounds";

export function Slide02_Feb2020() {
  return (
    <SlideShell className="relative">
      <DataStream />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <SlideHeading size="large">
            Febrero <br />
            <span className="text-white/50">2020</span>
          </SlideHeading>
        </div>
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl text-zinc-300 leading-relaxed"
          >
            El mercado iba bien. <br />
            Hacíamos vida normal.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-zinc-500"
          >
            Mientras algo se extendía <span className="text-white font-medium">silenciosamente</span>.
          </motion.p>
        </div>
      </div>
    </SlideShell>
  );
}
