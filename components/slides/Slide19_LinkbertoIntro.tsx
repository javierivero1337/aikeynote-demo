import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";

export function Slide19_LinkbertoIntro() {
  return (
    <SlideShell>
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto z-10 relative px-6">
        <SlideHeading size="large" className="mb-12 text-center">
          ¿Quién es <span className="text-blue-500">Linkberto</span>? 🕵🏻‍♂️
        </SlideHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Text Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl text-zinc-300 leading-relaxed font-light">
              Un agente de <strong className="text-white font-semibold">análisis de datos cualitativos</strong> que analiza casos de soporte para identificar la raíz de la insatisfacción.
            </p>
            
            <div className="space-y-4">
              <p className="text-xl text-zinc-400">
                El agente sigue un flujo de trabajo estructurado:
              </p>
              <div className="flex flex-wrap gap-3">
                {["Explorar", "Entender", "Sintetizar", "Responder"].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-blue-400 font-mono text-sm"
                  >
                    {step}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Architecture Diagram */}
          <div className="relative h-[400px] w-full bg-zinc-950/50 rounded-2xl border border-zinc-800/50 p-8 flex flex-col justify-center items-center">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none rounded-2xl" />
            
            <div className="flex justify-between w-full max-w-lg mb-12 relative z-10 px-4">
              <span className="text-zinc-600 font-mono text-sm tracking-widest uppercase text-center w-24">LLM</span>
              <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase text-center w-24">RAG</span>
              <span className="text-blue-400 font-bold font-mono text-sm tracking-widest uppercase text-center w-24 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">AGENT</span>
            </div>

            <div className="flex justify-between w-full max-w-lg relative z-10 px-4 items-start h-[240px]">
              {/* 1. LLM Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-5 w-24"
              >
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Input</div>
                <div className="w-20 h-14 border border-zinc-800 bg-zinc-900/50 rounded-lg flex items-center justify-center text-zinc-600 font-bold shadow-sm">
                  LLM
                </div>
                <div className="h-8 w-[1px] bg-zinc-800" />
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Output</div>
              </motion.div>

              {/* 2. RAG Column */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center gap-5 w-24"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono bg-zinc-900/80 px-2 py-0.5 rounded-full border border-zinc-800">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" /> Context
                  </div>
                  <div className="h-2 w-[1px] bg-zinc-800" />
                </div>
                
                <div className="w-20 h-14 border border-zinc-700 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-400 font-bold shadow-md relative">
                  LLM
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-lg" />
                </div>
                <div className="h-8 w-[1px] bg-zinc-800" />
                <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Output</div>
              </motion.div>

              {/* 3. AGENT Column (Hero) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center gap-5 w-24 relative"
              >
                {/* Memory Node */}
                <div className="flex flex-col items-center gap-1 z-20">
                  <motion.div 
                    animate={{ boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 10px rgba(59,130,246,0.3)", "0 0 0px rgba(59,130,246,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1 text-[10px] text-blue-300 font-mono bg-blue-950/30 px-2 py-0.5 rounded-full border border-blue-500/30"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" /> Memory
                  </motion.div>
                  <div className="h-2 w-[1px] bg-blue-500/30" />
                </div>
                
                {/* Main LLM Box */}
                <div className="w-24 h-16 border border-blue-500/50 bg-blue-950/20 rounded-xl flex items-center justify-center text-blue-100 font-bold shadow-[0_0_20px_rgba(59,130,246,0.15)] relative z-20 backdrop-blur-sm">
                  LLM
                  
                  {/* Internal Glow */}
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-blue-500/10 rounded-xl" 
                  />

                  {/* Tools Loop Animation (Attached to LLM Box) */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-24 h-24 pointer-events-none">
                     <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                       <path
                         id="loopPath"
                         d="M 0 30 C 60 30, 60 70, 0 70"
                         fill="none"
                         stroke="#3b82f6"
                         strokeWidth="1.5"
                         strokeOpacity="0.3"
                         strokeDasharray="4 4"
                       />
                       {/* Moving Particle */}
                       <circle r="2" fill="#60a5fa">
                         <animateMotion
                           dur="3s"
                           repeatCount="indefinite"
                           path="M 0 30 C 60 30, 60 70, 0 70"
                         />
                       </circle>
                       {/* Return Path */}
                       <path
                         d="M 0 70 C -15 70, -15 30, 0 30"
                         fill="none"
                         stroke="#3b82f6"
                         strokeWidth="1.5"
                         strokeOpacity="0.3"
                         strokeDasharray="4 4"
                       />
                       <circle r="2" fill="#60a5fa">
                         <animateMotion
                           dur="3s"
                           begin="1.5s"
                           repeatCount="indefinite"
                           path="M 0 70 C -15 70, -15 30, 0 30"
                         />
                       </circle>
                     </svg>
                     
                     {/* Tool Label */}
                     <div className="absolute top-1/2 -translate-y-1/2 left-8 bg-zinc-950 border border-blue-500/30 text-[9px] text-blue-300 px-1.5 py-0.5 rounded text-center shadow-lg z-10">
                       Tools
                     </div>
                  </div>
                </div>

                <div className="h-6 w-[1px] bg-blue-500/30" />
                <div className="text-[10px] text-blue-400 font-mono uppercase tracking-wider">Action</div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-4 right-6 text-[10px] text-zinc-700 font-mono flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Architecture v2.0
            </motion.div>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
