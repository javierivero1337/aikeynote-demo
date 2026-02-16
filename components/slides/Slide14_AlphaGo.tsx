import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { Users, Cpu, Brain } from "lucide-react";

export function Slide14_AlphaGo() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto z-10 relative px-4">
        <SlideHeading size="large" className="mb-12 text-center">
          La Lección de <span className="text-purple-500">AlphaZero</span>
        </SlideHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full items-start justify-items-center">
          {/* Left: AlphaGo (Human Dependent) */}
          <div className="flex flex-col items-center relative">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Human Nodes (Satellites) */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                const radius = 100;
                // Calculate position for the static node
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <React.Fragment key={i}>
                    {/* Connection Line Container - Rotated */}
                    <div 
                      className="absolute left-1/2 top-1/2 h-px bg-blue-500/20 origin-left"
                      style={{
                        width: radius,
                        transform: `rotate(${angle}deg)`,
                      }}
                    >
                       {/* Particle flowing to center */}
                       <motion.div
                        initial={{ opacity: 0, x: radius }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          x: [radius, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1/2 -mt-0.5 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.8)]"
                      />
                    </div>
                    
                    {/* Human Node */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="absolute w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-10"
                      style={{ 
                        left: `calc(50% + ${x}px - 16px)`, 
                        top: `calc(50% + ${y}px - 16px)` 
                      }}
                    >
                      <Users className="w-4 h-4 text-zinc-500" />
                    </motion.div>
                  </React.Fragment>
                );
              })}

              {/* Central AlphaGo Node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-24 h-24 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center z-20 relative backdrop-blur-sm"
              >
                <Brain className="w-10 h-10 text-blue-400" />
                <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse" />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-4 text-center"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-2">AlphaGo</h3>
              <p className="text-zinc-500 text-sm max-w-[240px] mx-auto">
                Entrenado con millones de partidas humanas. Limitado por el conocimiento existente.
              </p>
            </motion.div>
          </div>

          {/* Right: AlphaZero (Self-Play) */}
          <div className="flex flex-col items-center relative">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Self-Play Loops */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 360 }}
                  transition={{ 
                    rotate: { duration: 8 - i * 1.5, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 1, delay: 2 + i * 0.2 },
                    scale: { duration: 1, delay: 2 + i * 0.2 }
                  }}
                  className="absolute rounded-full border border-purple-500/30"
                  style={{ 
                    width: `${140 + i * 40}px`, 
                    height: `${140 + i * 40}px`,
                    borderStyle: i % 2 === 0 ? 'dashed' : 'solid'
                  }}
                >
                   {/* Orbiting Particle */}
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
                </motion.div>
              ))}

              {/* Central AlphaZero Node */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 2, type: "spring" }}
                className="w-32 h-32 rounded-full bg-purple-900/20 border-2 border-purple-500 flex items-center justify-center z-20 relative backdrop-blur-sm shadow-[0_0_50px_rgba(168,85,247,0.2)]"
              >
                <Cpu className="w-14 h-14 text-purple-300" />
                <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-pulse" />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="mt-4 text-center"
            >
              <h3 className="text-3xl font-bold text-purple-400 mb-2">AlphaZero</h3>
              <p className="text-zinc-500 text-sm max-w-[240px] mx-auto">
                Aprendizaje por refuerzo (Self-Play). Descubre estrategias alienígenas.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Result / Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mt-12 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 md:gap-16 backdrop-blur-md w-full max-w-4xl"
        >
          <div className="flex-1 text-center">
            <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Resultado Final</div>
            <div className="flex items-center justify-center gap-4">
               <span className="text-4xl md:text-6xl font-bold text-purple-400">Invicto</span>
            </div>
            <div className="text-zinc-400 text-sm mt-2">vs Stockfish (Ajedrez)</div>
          </div>

          <div className="h-px w-full md:w-px md:h-24 bg-zinc-800" />

          <div className="flex-1 text-center">
            <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2">Tiempo de Entrenamiento</div>
            <div className="text-4xl md:text-6xl font-bold text-white">4 Horas</div>
            <div className="text-zinc-400 text-sm mt-2">Desde cero absoluto (Tabula Rasa)</div>
          </div>
        </motion.div>

        {/* Insight */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="mt-12 text-zinc-400 text-lg md:text-xl text-center max-w-3xl italic"
        >
          "El conocimiento humano era el <span className="text-white font-semibold">cuello de botella</span>."
        </motion.p>
      </div>
    </SlideShell>
  );
}
