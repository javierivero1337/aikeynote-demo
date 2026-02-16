import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SlideShell } from "../deck/SlideShell";
import { motion, AnimatePresence } from "framer-motion";

const ColorLoops = dynamic(() => import("../ColorLoops"), { ssr: false });

const ITEMS = [
  "Dirigir una película",
  "Componer una sinfonía",
  "Diseñar tu casa soñada",
  "Crear un videojuego",
  "Lanzar tu propia marca",
  "Escribir un Best Seller",
  "Construir una App",
];

export function Slide27_Democratization() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ITEMS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <SlideShell className="relative overflow-hidden">
      {/* ColorLoops Background */}
      <div className="absolute inset-0 z-0">
        <ColorLoops
          centerX={0.5}
          centerY={0.5}
          speed={0.8}
          scale={1.2}
          intensity={0.6}
          symmetric={false}
          redInfluence={0.3}
          greenInfluence={0.2}
          blueInfluence={0.9}
          baseColor={0.05}
          opacity={0.7}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-10"
        >
            <span className="text-2xl md:text-4xl text-zinc-400 font-light tracking-wide">
                Con IA puedes...
            </span>
        </motion.div>

        <div className="h-[140px] md:h-[200px] flex items-center justify-center overflow-hidden relative w-full max-w-6xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ y: 60, opacity: 0, filter: "blur(12px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -60, opacity: 0, filter: "blur(12px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute w-full flex justify-center"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] pb-4">
                        {ITEMS[index]}
                    </h2>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="mt-16 flex gap-3 justify-center items-center">
            {ITEMS.map((_, i) => (
                <motion.div 
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out`}
                    animate={{
                        width: i === index ? 32 : 6,
                        backgroundColor: i === index ? "rgba(59, 130, 246, 1)" : "rgba(39, 39, 42, 1)" // blue-500 vs zinc-800
                    }}
                />
            ))}
        </div>

      </div>
    </SlideShell>
  );
}
