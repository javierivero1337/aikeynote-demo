import React, { useState, useEffect } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";
import { GridDistortion } from "../deck/Backgrounds";
import { Paperclip, Globe, BookOpen, Image as ImageIcon, ArrowUp } from "lucide-react";

const CAPABILITIES = [
  // Coding
  { label: "Refactorizar Código Legado", category: "coding", x: -300, y: -150, delay: 0.1 },
  { label: "Escribir Tests Unitarios", category: "coding", x: -350, y: 0, delay: 0.2 },
  { label: "Convertir Python a Go", category: "coding", x: -300, y: 150, delay: 0.3 },
  
  // Analysis
  { label: "Resumir Informes PDF", category: "analysis", x: 0, y: -250, delay: 0.4 },
  { label: "Extraer Datos de CSV", category: "analysis", x: 0, y: 250, delay: 0.5 },
  { label: "Análisis de Sentimiento", category: "analysis", x: 200, y: -200, delay: 0.6 },

  // Creation
  { label: "Redactar Copy de Marketing", category: "creation", x: 300, y: -100, delay: 0.7 },
  { label: "Generar Consultas SQL", category: "creation", x: 350, y: 50, delay: 0.8 },
  { label: "Idear Flujos de UI", category: "creation", x: 300, y: 200, delay: 0.9 },
];

export function Slide21_Capabilities() {
  const [step, setStep] = useState<"search" | "explode">("search");

  return (
    <SlideShell 
      className="relative overflow-hidden cursor-pointer"
      onClick={() => step === "search" && setStep("explode")}
    >
      <div className="absolute inset-0 z-0">
        <GridDistortion />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <AnimatePresence mode="wait">
          {step === "search" ? (
            <motion.div
              key="search-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", transition: { duration: 0.5 } }}
              className="flex flex-col items-center justify-center w-full max-w-3xl gap-8"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-white/90 text-center tracking-tight">
                ¿Con qué puedo ayudarte?
              </h2>
              
              <div className="w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl shadow-black/50">
                <div className="min-h-[60px] text-xl text-zinc-200 font-light px-2 flex items-center">
                  <Typewriter text="Cual es la capital de francia?" />
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-2">
                  <div className="flex items-center gap-2">
                    <ActionButton icon={<Paperclip size={18} />} label="Adjuntar" />
                    <ActionButton icon={<Globe size={18} />} label="Buscar" />
                    <ActionButton icon={<BookOpen size={18} />} label="Estudiar" />
                    <ActionButton icon={<ImageIcon size={18} />} label="Crear imagen" />
                  </div>
                  
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
                    <ArrowUp size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="explode-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 {/* Central Hub */}
                 <motion.div
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 50px rgba(255,255,255,0.2)",
                      "0 0 80px rgba(255,255,255,0.5)",
                      "0 0 50px rgba(255,255,255,0.2)"
                    ]
                  }}
                  transition={{ 
                    scale: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                    boxShadow: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                    default: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                  className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center z-20 relative"
                 >
                   <span className="text-4xl z-10">🧠</span>
                   {/* Brain pulse rings */}
                   <motion.div
                     className="absolute inset-0 rounded-full border border-white/30"
                     animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
                   <motion.div
                     className="absolute inset-0 rounded-full border border-white/30"
                     animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                   />
                 </motion.div>

                 {/* Orbiting Capabilities */}
                 {CAPABILITIES.map((cap, i) => (
                   <motion.div
                    key={cap.label}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{ 
                      x: cap.x, 
                      y: cap.y, 
                      opacity: 1, 
                      scale: 1 
                    }}
                    transition={{ 
                      delay: cap.delay, 
                      type: "spring", 
                      stiffness: 100, 
                      damping: 15 
                    }}
                    className="absolute z-10"
                   >
                     <motion.div
                       animate={{
                         scale: [1, 1.05, 1],
                         boxShadow: [
                           "0 0 20px rgba(255,255,255,0.1)",
                           "0 0 40px rgba(255,255,255,0.3)",
                           "0 0 20px rgba(255,255,255,0.1)"
                         ]
                       }}
                       transition={{
                         duration: 3,
                         repeat: Infinity,
                         repeatType: "reverse",
                         ease: "easeInOut",
                         delay: i * 0.5
                       }}
                       className={`
                         px-6 py-3 rounded-xl border backdrop-blur-md text-white font-medium whitespace-nowrap shadow-lg relative overflow-hidden
                         ${cap.category === 'coding' ? 'bg-blue-500/10 border-blue-500/30 text-blue-100 shadow-blue-500/20' : ''}
                         ${cap.category === 'analysis' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100 shadow-emerald-500/20' : ''}
                         ${cap.category === 'creation' ? 'bg-purple-500/10 border-purple-500/30 text-purple-100 shadow-purple-500/20' : ''}
                       `}
                     >
                       {/* Inner glow effect */}
                       <motion.div 
                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full"
                         animate={{ x: ["-100%", "100%"] }}
                         transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                       />
                       {cap.label}
                     </motion.div>
                     
                     {/* Connecting Line */}
                     <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 overflow-visible w-0 h-0">
                        <motion.line 
                          x1={0} y1={0} 
                          x2={-cap.x} y2={-cap.y} 
                          stroke="white" 
                          strokeOpacity="0.2" 
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: cap.delay, duration: 0.5 }}
                        />
                        {/* Pulsing signal along the line */}
                        <motion.circle
                          r="3"
                          fill="white"
                          initial={{ cx: 0, cy: 0, opacity: 0 }}
                          animate={{ 
                            cx: [-cap.x, 0], // Move from outer bubble to center (or vice versa)
                            cy: [-cap.y, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.3,
                            repeatDelay: 1
                          }}
                        />
                     </svg>
                   </motion.div>
                 ))}
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 hover:bg-white/5 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer group">
      <span className="group-hover:text-white transition-colors">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="text-white text-xl font-mono">
      {displayed}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 inline-block w-2 h-5 bg-blue-500 align-middle"
      />
    </span>
  );
}
