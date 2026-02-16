import React, { useState, useEffect } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";

export function Slide15_Metr() {
  const [showTweet, setShowTweet] = useState(false);

  // Load Twitter widget script
  useEffect(() => {
    if (showTweet) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showTweet]);

  return (
    <SlideShell className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/slides-imagery/slide12.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/60" />
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <SlideHeading size="large">
            Datos Duros: <span className="text-zinc-500">METR</span>
          </SlideHeading>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-zinc-500 font-mono text-sm mt-2 tracking-[0.2em] uppercase"
          >
            Model Evaluation and Threat Research
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
          >
            <div className="text-zinc-500 font-mono mb-4 text-lg">Hace 1 año</div>
            <div className="text-5xl md:text-7xl font-bold text-zinc-300 mb-2">10 min</div>
            <div className="text-zinc-400 text-center">Tareas simples</div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            onClick={() => setShowTweet(true)}
            className="flex flex-col items-center p-8 rounded-2xl bg-blue-900/20 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] cursor-pointer group relative overflow-hidden"
          >
            <div className="text-blue-400 font-mono mb-4 text-lg">Noviembre (Claude Opus 4.5)</div>
            <div className="text-5xl md:text-7xl font-bold text-white mb-2">5 horas</div>
            <div className="text-blue-200 text-center">Nivel experto humano</div>
            
            {/* CTA Overlay */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform">
                <ExternalLink size={16} />
                Ver Evidencia
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="mt-10 w-full max-w-5xl space-y-5"
        >
          <div className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-500">
            Misma ventana de tiempo: 4 horas
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-[130px_1fr_auto] items-center gap-3 md:gap-4">
              <div className="text-zinc-400 text-sm md:text-base">Cada 10 min</div>
              <div className="relative h-8 rounded-full border border-zinc-800 bg-zinc-900/40 px-2">
                <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-px bg-zinc-700" />
                <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex items-center justify-between">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.span
                      key={`fast-dot-${i}`}
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.4 + i * 0.03, duration: 0.2 }}
                      className="w-1.5 h-1.5 rounded-full bg-zinc-200"
                    />
                  ))}
                </div>
              </div>
              <div className="text-zinc-300 text-sm md:text-base font-mono">24 verificaciones</div>
            </div>

            <div className="grid grid-cols-[130px_1fr_auto] items-center gap-3 md:gap-4">
              <div className="text-blue-300 text-sm md:text-base">Cada 4 horas</div>
              <div className="relative h-8 rounded-full border border-blue-500/30 bg-blue-950/20 px-2">
                <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-px bg-blue-500/50" />
                <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: [1, 1.3, 1] }}
                    transition={{ delay: 3.2, duration: 0.8 }}
                    className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
                  />
                </div>
              </div>
              <div className="text-blue-200 text-sm md:text-base font-mono">1 verificación</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl text-zinc-400">
            La capacidad se duplica cada <span className="text-white font-bold">~11 semanas</span>.
          </p>
        </motion.div>
      </div>

      {/* Tweet Modal */}
      <AnimatePresence>
        {showTweet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setShowTweet(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowTweet(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col items-center">
                <blockquote className="twitter-tweet" data-theme="dark">
                  <a href="https://twitter.com/ericzakariasson/status/2023413272872124495?ref_src=twsrc%5Etfw">
                    December 13, 2025
                  </a>
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideShell>
  );
}
