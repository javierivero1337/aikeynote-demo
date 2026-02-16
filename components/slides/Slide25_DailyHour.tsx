import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { GridDistortion } from "../deck/Backgrounds";
import BlurText from "../BlurText";

export function Slide25_DailyHour() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GridDistortion />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl mx-auto text-center px-4">
        <SlideHeading size="lg" className="mb-12 text-white drop-shadow-md">
          La Regla de la Hora Diaria
        </SlideHeading>

        <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="p-8 border border-blue-500/30 bg-black/60 rounded-2xl backdrop-blur-sm w-full"
          >
            <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 font-mono">
              1 HORA
            </div>
            <p className="text-xl md:text-2xl text-gray-400">
              Al día. Sin excusas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl mb-4 block">🛠️</span>
              <h3 className="text-xl font-bold text-white mb-2">Usándola</h3>
              <p className="text-gray-400 text-sm">
                No leyendo noticias sobre IA. Construyendo con ella.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl mb-4 block">💳</span>
              <h3 className="text-xl font-bold text-white mb-2">Paga los $20</h3>
              <p className="text-gray-400 text-sm">
                Usa la mejor versión (Claude Opus, GPT-5). Es tu ventaja competitiva.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-4xl mb-4 block">🧠</span>
              <h3 className="text-xl font-bold text-white mb-2">Trabajo Real</h3>
              <p className="text-gray-400 text-sm">
                Dále problemas difíciles, no preguntas de trivialidades.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
