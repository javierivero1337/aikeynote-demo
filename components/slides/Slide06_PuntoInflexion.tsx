import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { ConvergingConstellation } from "../deck/ConvergingConstellation";

export function Slide06_PuntoInflexion() {
  return (
    <SlideShell className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/slides-imagery/slide6.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Soft radial glow anchoring the center */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/[0.05] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-purple-500/[0.04] blur-[80px]" />
      </div>

      {/* Converging particle constellation — nodes drift toward center */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <ConvergingConstellation />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <span className="px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm tracking-widest uppercase bg-black/50 backdrop-blur-md">
            La Realidad desde Adentro
          </span>
        </motion.div>

        <SlideHeading size="xl">
          Ya sucedió.
        </SlideHeading>

        <div className="mt-16 relative h-40 flex items-center justify-center">
          {/* Date Entry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="absolute top-0 w-full"
          >
            <p className="text-5xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              5 de Febrero, 2026
            </p>
          </motion.div>

          {/* Models Split Entry */}
          <div className="absolute top-24 w-full flex justify-center gap-12 md:gap-24 items-center">
            {/* GPT-5.3 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.0, type: "spring", stiffness: 100, damping: 15 }}
              className="flex flex-col items-center"
            >
              <div className="text-2xl md:text-3xl font-mono text-blue-400 font-bold tracking-tight">
                GPT-5.3
              </div>
              <motion.div 
                className="h-[1px] bg-blue-500/50 mt-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.5, duration: 0.5 }}
              />
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 40, opacity: 0.5 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="w-[1px] bg-white"
            />

            {/* Opus 4.6 */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.0, type: "spring", stiffness: 100, damping: 15 }}
              className="flex flex-col items-center"
            >
              <div className="text-2xl md:text-3xl font-mono text-purple-400 font-bold tracking-tight">
                Opus 4.6
              </div>
              <motion.div 
                className="h-[1px] bg-purple-500/50 mt-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.5, duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
