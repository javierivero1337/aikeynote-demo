import React, { useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";

export function Slide09_Sentimiento() {
  const [revealed, setRevealed] = useState(false);

  const waterTopLevel = "100%";
  const waterRiseTransition = {
    duration: 16,
    ease: [0.22, 1, 0.36, 1] as const,
    delay: 0.6,
  };

  return (
    <SlideShell className="relative overflow-hidden">
      {/* White background flash — "turns on" the lights */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Water — 3 wave layers rising from below with horizontal drift */}
      <AnimatePresence>
        {revealed && (
          <>
            {/* Wave 1 — darkest, back layer */}
            <motion.div
              className="absolute left-0 pointer-events-none z-[1]"
              style={{ width: "200%", height: "100%", bottom: 0 }}
              initial={{ y: "100%" }}
              animate={{ y: "5%" }}
              transition={{ duration: 16, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="absolute top-0 left-0 w-full"
                  style={{ height: 180 }}
                  viewBox="0 0 2880 180"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,90 C180,20 360,160 540,90 C720,20 900,160 1080,90 C1260,20 1440,160 1620,90 C1800,20 1980,160 2160,90 C2340,20 2520,160 2700,90 C2790,55 2850,70 2880,90 L2880,180 L0,180 Z"
                    fill="rgba(30,64,175,0.88)"
                  />
                </svg>
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{ top: 180, background: "rgba(30,64,175,0.88)" }}
                />
              </motion.div>
            </motion.div>

            {/* Wave 2 — mid tone, opposite drift */}
            <motion.div
              className="absolute left-0 pointer-events-none z-[2]"
              style={{ width: "200%", height: "100%", bottom: 0 }}
              initial={{ y: "100%" }}
              animate={{ y: "12%" }}
              transition={{ duration: 18, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ x: ["-50%", "0%"] }}
                transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="absolute top-0 left-0 w-full"
                  style={{ height: 160 }}
                  viewBox="0 0 2880 160"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,80 C200,10 400,150 600,80 C800,10 1000,150 1200,80 C1400,10 1600,150 1800,80 C2000,10 2200,150 2400,80 C2600,10 2780,120 2880,80 L2880,160 L0,160 Z"
                    fill="rgba(59,130,246,0.65)"
                  />
                </svg>
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{ top: 160, background: "rgba(59,130,246,0.65)" }}
                />
              </motion.div>
            </motion.div>

            {/* Wave 3 — lightest, front layer */}
            <motion.div
              className="absolute left-0 pointer-events-none z-[3]"
              style={{ width: "200%", height: "100%", bottom: 0 }}
              initial={{ y: "100%" }}
              animate={{ y: "18%" }}
              transition={{ duration: 20, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  className="absolute top-0 left-0 w-full"
                  style={{ height: 140 }}
                  viewBox="0 0 2880 140"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,70 C160,10 340,130 520,70 C700,10 880,130 1060,70 C1240,10 1420,130 1600,70 C1780,10 1960,130 2140,70 C2320,10 2500,130 2680,70 C2780,40 2840,55 2880,70 L2880,140 L0,140 Z"
                    fill="rgba(96,165,250,0.5)"
                  />
                </svg>
                <div
                  className="absolute inset-x-0 bottom-0"
                  style={{ top: 140, background: "rgba(96,165,250,0.5)" }}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left — always visible, clickable to reveal */}
          <div
            className="md:col-span-5 cursor-pointer select-none"
            onClick={() => !revealed && setRevealed(true)}
          >
            <motion.div
              animate={{ color: revealed ? "rgb(255,255,255)" : "rgb(161,161,170)" }}
              transition={{ duration: 0.35 }}
            >
              <SlideHeading size="default" className="!text-inherit">
                No fue un <br />
                <motion.span
                  animate={{ color: revealed ? "rgb(30,64,175)" : "rgb(255,255,255)" }}
                  transition={{ duration: 0.35 }}
                >
                  light switch
                </motion.span>.
              </SlideHeading>
            </motion.div>
          </div>

          {/* Divider + quote — only after click */}
          <AnimatePresence>
            {revealed && (
              <>
                <motion.div
                  className="md:col-span-1 h-32 w-[1px] bg-white/50 hidden md:block mx-auto"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                <motion.div
                  className="md:col-span-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <p className="text-3xl md:text-4xl font-serif italic text-white/90 leading-tight">
                    &ldquo;Fue como darse cuenta de que el agua ya te llega al pecho.&rdquo;
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideShell>
  );
}
