import React, { useState, useEffect } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";

const MODELS = ["Gemini Flash", "Opus", "GPT 5", "Grok"];

export function Slide22_LinkbertoVsHuman() {
  const [modelIndex, setModelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setModelIndex((prev) => (prev + 1) % MODELS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SlideShell>
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto z-10 relative px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* VS Badge in the middle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", damping: 12 }}
              className="relative group"
            >
              {/* Electrifying Border Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-[-8px] rounded-full bg-blue-500/20 blur-md"
              />
              
              <div className="relative w-20 h-20 rounded-full bg-zinc-950 border-2 border-blue-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)] overflow-hidden">
                {/* Subtle electric sparks/lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 10 40 Q 30 30 40 10"
                    stroke="rgba(59,130,246,0.6)"
                    strokeWidth="1"
                    fill="none"
                    animate={{
                      opacity: [0, 1, 0],
                      pathLength: [0, 1],
                    }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <motion.path
                    d="M 60 10 Q 50 40 70 70"
                    stroke="rgba(59,130,246,0.6)"
                    strokeWidth="1"
                    fill="none"
                    animate={{
                      opacity: [0, 1, 0],
                      pathLength: [0, 1],
                    }}
                    transition={{ duration: 0.7, repeat: Infinity, repeatDelay: 1.5 }}
                  />
                </svg>

                <span className="text-3xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  VS
                </span>
              </div>
            </motion.div>
          </div>

          {/* Human Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-700" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-2xl grayscale opacity-70">
                👨‍💼
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-400">Analista Humano</h3>
                <p className="text-xs text-zinc-600 uppercase tracking-widest">Procesamiento Manual</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm text-zinc-500 mb-1">Carga (200 Tickets)</div>
                <div className="text-2xl text-zinc-300 font-mono">~15,000 Líneas</div>
                <div className="w-full bg-zinc-800 h-1.5 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-600 w-full" />
                </div>
              </div>

              <div>
                <div className="text-sm text-zinc-500 mb-1">Tiempo Requerido</div>
                <div className="text-4xl text-red-400 font-bold font-mono">~8 Horas</div>
                <p className="text-xs text-zinc-600 mt-1">Asumiendo 2.5 min/ticket</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-zinc-800/50">
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="text-red-500/50">✕</span> Sujeto a fatiga
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="text-red-500/50">✕</span> Categorización inconsistente
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <span className="text-red-500/50">✕</span> Pierde patrones entre tickets
                </div>
              </div>
            </div>
          </motion.div>

          {/* Linkberto Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-950/10 border border-blue-500/30 rounded-2xl p-8 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-100">Linkberto</h3>
                  <p className="text-xs text-blue-400 uppercase tracking-widest">Agente IA</p>
                </div>
              </div>

              {/* Rotating Model Pill */}
              <div className="h-7 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center min-w-[100px] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={MODELS[modelIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[10px] font-mono text-blue-300 font-bold whitespace-nowrap absolute"
                  >
                    {MODELS[modelIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm text-blue-400/70 mb-1">Carga (200 Tickets)</div>
                <div className="text-2xl text-blue-200 font-mono">~15,000 Líneas</div>
                <div className="w-full bg-blue-900/30 h-1.5 mt-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-blue-500 w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
                  />
                </div>
              </div>

              <div>
                <div className="text-sm text-blue-400/70 mb-1">Tiempo Requerido</div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="text-4xl text-blue-400 font-bold font-mono"
                >
                  ~45 Segundos
                </motion.div>
                <p className="text-xs text-blue-400/50 mt-1">640x Más Rápido</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-blue-500/20">
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <span className="text-blue-500">✓</span> 100% Cobertura de Datos
                </div>
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <span className="text-blue-500">✓</span> Objetivo y Consistente
                </div>
                <div className="flex items-center gap-2 text-blue-200 text-sm">
                  <span className="text-blue-500">✓</span> Reconocimiento de Patrones
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
