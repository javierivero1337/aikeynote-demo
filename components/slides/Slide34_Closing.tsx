import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import LiquidEther from "../LiquidEther";
import GlitchText from "../GlitchText";
import type { SlideProps } from "../deck/types";
import Image from "next/image";

export function Slide34_Closing({ variant = "default" }: SlideProps) {
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
            <Image
              src="/collective-logo.png"
              alt="Collective Logo"
              width={160}
              height={40}
              className="h-10 w-auto opacity-60 mb-6"
            />
          )}
          <p className="text-zinc-400 font-bold tracking-[0.5em] uppercase text-[12px]">
            Javier Rivero
          </p>

          {/* QR Code */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <Image
              src="/qrsurvey.jpeg"
              alt="QR Survey"
              width={240}
              height={240}
              className="rounded-lg opacity-90"
            />
            <p className="text-zinc-400 text-[11px] tracking-widest uppercase font-light">
              Tu feedback es importante
            </p>
          </div>
        </motion.div>
      </div>

    </SlideShell>
  );
}
