import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";

export function Slide12_FreeVsPaid() {
  return (
    <SlideShell className="relative">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-4">
        <SlideHeading size="large" className="mb-16 text-center">
          El Espejismo <span className="text-zinc-600">Gratuito</span>
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
          {/* Free Version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 opacity-50 grayscale"
          >
            <div className="text-zinc-500 font-mono mb-4 text-lg">Versión Gratuita</div>
            <div className="text-4xl font-bold text-zinc-400 mb-4">Teléfono de Tapa</div>
            <div className="text-zinc-600 text-center max-w-xs">
              Tecnología de hace 1+ año. Limitada. Lenta.
            </div>
          </motion.div>

          {/* Paid Version */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col items-center p-8 rounded-2xl bg-blue-900/10 border border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
            <div className="text-blue-400 font-mono mb-4 text-lg relative z-10">Modelos de Frontera</div>
            <div className="text-4xl font-bold text-white mb-4 relative z-10">Smartphone</div>
            <div className="text-blue-200 text-center max-w-xs relative z-10">
              Razonamiento complejo. Multimodal. Agéntico.
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-16 text-center max-w-3xl"
        >
          <p className="text-xl md:text-2xl text-zinc-400">
            "Juzgar la IA por ChatGPT gratuito es como juzgar el internet por una conexión dial-up."
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
