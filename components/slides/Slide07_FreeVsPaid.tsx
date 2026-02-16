import React, { useEffect, useRef, useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import ShinyText from "../ShinyText";

export function Slide07_FreeVsPaid() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, raw));
    setPosition(clamped);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onPointerMove = (event: PointerEvent) => updatePosition(event.clientX);
    const onPointerUp = () => setIsDragging(false);

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [isDragging]);

  return (
    <SlideShell className="relative">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-4 relative z-10">
        <SlideHeading size="lg" className="mb-8 text-center">
          Frontier <span className="text-blue-500">Models</span>
        </SlideHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full mt-12 max-w-5xl"
        >
          <div
            ref={sliderRef}
            className="relative h-[440px] md:h-[480px] rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-950/80 touch-none select-none"
            onPointerDown={(event) => {
              updatePosition(event.clientX);
              setIsDragging(true);
            }}
          >
            {/* Base state background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black" />
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.45)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
            </div>

            {/* Revealed state: paid model with image + right-side info */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <div className="absolute inset-0">
                <img
                  src="/slides-imagery/slide13.png"
                  alt="Frontier model state"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-black/20 to-black/80" />
              </div>

              <div className="relative z-10 h-full flex items-center justify-end px-8 md:px-12">
                <div className="max-w-md rounded-2xl border border-blue-400/40 bg-black/45 backdrop-blur-sm p-6 md:p-8 shadow-[0_0_40px_-12px_rgba(59,130,246,0.55)]">
                  <p className="text-blue-200/80 text-xs md:text-sm tracking-[0.16em] uppercase mb-4">
                    Frontier Model
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                    <ShinyText
                      text="iPhone 16 Pro"
                      speed={1.35}
                      yoyo
                      direction="right"
                      className="inline-block drop-shadow-[0_0_20px_rgba(191,219,254,0.45)]"
                      color="#8ec5ff"
                      shineColor="#ffffff"
                      spread={62}
                    />
                  </h3>
                  <div className="w-14 h-px bg-blue-300/70 mb-4" />
                  <div className="text-white/90 text-sm md:text-base space-y-1">
                    <p>Razonamiento complejo.</p>
                    <p>Multimodal. Agéntico.</p>
                    <p>Proyectos y Contexto Extendido.</p>
                    <p>Integración con tu Workspace (Google).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Persistent free-model card for legibility while dragging */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="h-full flex items-center px-8 md:px-12">
                <div className="max-w-md rounded-2xl border-2 border-dashed border-zinc-300/40 bg-black/62 backdrop-blur-md p-6 md:p-8 shadow-[0_12px_42px_-18px_rgba(0,0,0,0.9)]">
                  <p className="text-zinc-200/85 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                    Versión Gratuita
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tighter">
                    NOKIA 3310
                  </h3>
                  <div className="w-14 h-px bg-zinc-200/65 mb-4" />
                  <div className="text-zinc-100/90 font-mono text-sm md:text-base space-y-1">
                    <p>Tecnología de hace 1+ año.</p>
                    <p>Limitada. Lenta.</p>
                    <p>Solo texto.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider + handle */}
            <div
              className="absolute inset-y-0 z-30 w-px bg-blue-300/80 shadow-[0_0_16px_rgba(96,165,250,0.8)]"
              style={{ left: `${position}%` }}
            />
            <button
              type="button"
              aria-label="Mover comparación"
              className="absolute z-30 top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full border border-blue-300/80 bg-black/75 backdrop-blur-md text-blue-100 flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.55)] cursor-ew-resize"
              style={{ left: `${position}%` }}
              onPointerDown={(event) => {
                event.stopPropagation();
                updatePosition(event.clientX);
                setIsDragging(true);
              }}
            >
              <span className="text-base leading-none">↔</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-12 text-center max-w-3xl"
        >
          <p className="text-xl md:text-2xl text-zinc-400">
            "Juzgar la IA por ChatGPT gratuito es como juzgar el internet por una conexión dial-up."
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
