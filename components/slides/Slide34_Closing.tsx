import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import LiquidEther from "../LiquidEther";
import GlitchText from "../GlitchText";
import type { DeckVariant } from "../deck/types";

interface Slide34ClosingProps {
  variant?: DeckVariant;
}

export function Slide34_Closing({ variant = "default" }: Slide34ClosingProps) {
  const showBranding = variant !== "client1";

  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl mx-auto text-center px-4">
        <div className="flex flex-col items-center gap-12">
          <SlideHeading size="xl" className="text-white drop-shadow-md">
            <GlitchText speed={0.8} enableShadows={true} enableOnHover={false}>
              El futuro está aquí.
            </GlitchText>
          </SlideHeading>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-xl md:text-3xl text-blue-400 italic font-light"
          >
            Llega temprano.
          </motion.p>
        </div>

        {/* Logo and Name Block - Centered vertically between main text and footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-24 flex flex-col items-center pointer-events-none"
        >
          {showBranding && (
            <img
              src="/collective-logo.png"
              alt="Collective Logo"
              className="h-10 w-auto opacity-60 mb-6"
            />
          )}
          <p className="text-zinc-400 font-bold tracking-[0.5em] uppercase text-[12px]">
            Javier Rivero
          </p>
        </motion.div>
      </div>

      {/* Mini Footer */}
      {showBranding && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none"
        >
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
            Collective Academy 2026
          </p>
        </motion.div>
      )}
    </SlideShell>
  );
}
