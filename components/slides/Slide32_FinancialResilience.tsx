import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { RadarScan } from "../deck/Backgrounds";

const ActionItem = ({ icon, title, subtitle, delay }: { icon: string; title: string; subtitle: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.8 }}
    className="flex items-center gap-6 w-full p-6 border-l-4 border-blue-500 bg-blue-900/10 rounded-r-xl hover:bg-blue-900/20 transition-colors"
  >
    <span className="text-4xl">{icon}</span>
    <div className="text-left">
      <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
      <p className="text-gray-400 mt-1">
        {subtitle}
      </p>
    </div>
  </motion.div>
);

export function Slide32_FinancialResilience() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <RadarScan />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl mx-auto text-center px-4">
        <SlideHeading size="lg" className="mb-12 text-white drop-shadow-md">
          ¿Qué puedes hacer hoy?
        </SlideHeading>

        <div className="flex flex-col items-start w-full max-w-3xl space-y-8">
          <ActionItem
            icon="🚀"
            title="Explora nuevos modelos y herramientas"
            subtitle="No te quedes solo con lo que conoces, pregúnta a Grok, construye algo en Lovable, prueba hacer un Gem, etc."
            delay={0.2}
          />

          <ActionItem
            icon="📺"
            title="Ve video tutoriales en YouTube"
            subtitle="Busca flujos de trabajo, casos de uso en tu industria y demostraciones técnicas."
            delay={0.6}
          />

          <ActionItem
            icon="⚡"
            title="Optimiza tareas de tu día a día"
            subtitle="Identifica procesos repetitivos. Usa la IA para redactar, resumir o analizar."
            delay={1.0}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="w-full p-6 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-center"
          >
            <p className="text-yellow-400 font-medium italic">
              💡 Bonus: Evita el overload de noticias e información. Escoge solo lo que realmente llame tu atención.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
