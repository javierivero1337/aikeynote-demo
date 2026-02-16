import React, { useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";
import { RadarScan } from "../deck/Backgrounds";
import GlitchText from "../GlitchText";
import { Newspaper, X } from "lucide-react";

export function Slide17_Industries() {
  const [isOpen, setIsOpen] = useState(false);

  const industries = [
    { name: "Desarrollo de Software", status: "IMPACTADO", color: "text-blue-400", delay: 0.5 },
    { name: "Derecho & Legal", status: "EN LA MIRA", color: "text-red-400", delay: 1.5 },
    { name: "Medicina & Salud", status: "EN LA MIRA", color: "text-red-400", delay: 1.7 },
    { name: "Finanzas", status: "EN LA MIRA", color: "text-red-400", delay: 1.9 },
    { name: "Creatividad & Arte", status: "EN LA MIRA", color: "text-red-400", delay: 2.1 },
  ];

  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <RadarScan />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center flex flex-col items-center">
          <SlideHeading size="xl" className="mb-8">
            <GlitchText speed={0.5} enableShadows={true}>
              El Código fue el Primero.
            </GlitchText>
          </SlideHeading>
          
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/80 border border-zinc-700/50 hover:bg-zinc-800 hover:border-zinc-600 transition-all hover:scale-105 cursor-pointer shadow-lg shadow-black/20"
          >
            <Newspaper className="w-5 h-5 text-zinc-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-lg md:text-xl text-zinc-300 font-light group-hover:text-white transition-colors">
              Pero la ola no se detiene ahí.
            </span>
          </motion.button>
        </div>

        <div className="w-full max-w-3xl grid gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: industry.delay, duration: 0.5 }}
              className="group flex items-center justify-between p-4 border border-white/5 bg-black/40 backdrop-blur-sm rounded-lg hover:border-blue-500/30 transition-colors"
            >
              <span className="text-xl md:text-2xl text-gray-200 font-medium">
                {industry.name}
              </span>
              
              <div className="flex items-center gap-3">
                {industry.status === "IMPACTADO" ? (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: industry.delay + 0.2 }}
                    className={`text-sm md:text-base font-bold tracking-widest ${industry.color} px-3 py-1 bg-blue-500/10 rounded border border-blue-500/20`}
                  >
                    {industry.status}
                  </motion.span>
                ) : (
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                    />
                    <span className={`text-sm md:text-base font-bold tracking-widest ${industry.color} opacity-80`}>
                      {industry.status}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="relative h-72 w-full">
                <img 
                  src="/davos.webp" 
                  alt="Dario Amodei at Davos" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-md border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8 -mt-12 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                    <Newspaper className="w-3 h-3" />
                    Davos 2026
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif italic text-white mb-6 leading-tight">
                  "La IA eliminará la mitad de todos los empleos de oficina y disparará el desempleo al 10-20%..."
                </h3>
                
                <div className="text-zinc-400 leading-relaxed border-l-2 border-blue-500/30 pl-6 space-y-4 text-lg font-light">
                  <p>
                    El CEO de Anthropic, <span className="text-white font-medium">Dario Amodei</span>, predice específicamente que el <span className="text-white font-medium">50% de los empleos de oficina de nivel inicial</span> podrían ser eliminados en los próximos uno a cinco años.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SlideShell>
  );
}
