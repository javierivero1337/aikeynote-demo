import React, { useState, useEffect } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";
import { GridDistortion } from "../deck/Backgrounds";
import { Paperclip, Globe, BookOpen, Image as ImageIcon, ArrowUp } from "lucide-react";

const CAPABILITIES = [
  // Operaciones
  { label: "Leer COA + ficha técnica y detectar desviaciones", category: "operations", x: -320, y: -170, delay: 0.1 },
  { label: "Clasificar incidencias desde correo + POD con foto", category: "operations", x: -360, y: -5, delay: 0.2 },
  { label: "Armar checklist import-export por ruta y producto", category: "operations", x: -300, y: 160, delay: 0.3 },

  // Análisis
  { label: "Simular inventario/S&OP con restricciones reales", category: "analytics", x: 0, y: -245, delay: 0.4 },
  { label: "Consolidar KPIs de planta, logística y ventas", category: "analytics", x: 0, y: 250, delay: 0.5 },
  { label: "Comparar cotizaciones de resina y sugerir margen", category: "analytics", x: 215, y: -195, delay: 0.6 },

  // Negocio
  { label: "Preparar respuesta a RFP inmobiliaria con anexos", category: "business", x: 330, y: -105, delay: 0.7 },
  { label: "Revisar contratos y marcar cláusulas atípicas", category: "business", x: 360, y: 45, delay: 0.8 },
  { label: "Generar propuesta de empaque retornable por SKU", category: "business", x: 305, y: 195, delay: 0.9 },
];

const ADVANCED_PROMPT =
  "Con este COA, ficha técnica y tabla de costos por cliente, detecta desviaciones vs especificación, estima riesgo de reclamo y sugiere la mezcla de resina con mejor margen por segmento.";

const REPORT_LINES = [
  "REPORTE EXPRESS | Resinas por segmento",
  "",
  "1) Hallazgos críticos",
  "- 2 lotes fuera de tolerancia en MFI (+8.4% y +6.9%)",
  "- Riesgo de reclamo alto en segmento HVAC (cliente C17)",
  "- Oportunidad de margen en línea automotriz grado R-62",
  "",
  "2) Recomendación de mezcla",
  "- Segmento automotriz: 70% resina A + 30% B",
  "- Segmento electrodomésticos: 60% A + 40% reciclado premium",
  "- Segmento empaque retornable: 55% B + 45% reciclado",
  "",
  "3) Impacto estimado (30 días)",
  "- Margen bruto: +2.1 pts",
  "- Riesgo de reclamo: -28%",
  "- Costo promedio por tonelada: -3.4%",
];

export function Slide29_Capabilities() {
  const [step, setStep] = useState<"search" | "explode" | "basic" | "report">("search");

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
                  <Typewriter text="Resume este correo en 3 bullets." />
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-2">
                  <div className="flex items-center gap-2">
                    <ActionButton icon={<Paperclip size={18} />} label="Adjuntar ERP/PDF" />
                    <ActionButton icon={<Globe size={18} />} label="Buscar regulación" />
                    <ActionButton icon={<BookOpen size={18} />} label="Citar fuentes" />
                    <ActionButton icon={<ImageIcon size={18} />} label="Crear reporte" />
                  </div>
                  
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors">
                    <ArrowUp size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : step === "explode" ? (
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
                  className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center z-20 relative pointer-events-auto cursor-pointer"
                  onClick={() => setStep("basic")}
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
                        ${cap.category === 'operations' ? 'bg-blue-500/10 border-blue-500/30 text-blue-100 shadow-blue-500/20' : ''}
                        ${cap.category === 'analytics' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100 shadow-emerald-500/20' : ''}
                        ${cap.category === 'business' ? 'bg-purple-500/10 border-purple-500/30 text-purple-100 shadow-purple-500/20' : ''}
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
          ) : step === "basic" ? (
            <motion.div
              key="basic-container"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="flex flex-col items-center justify-center w-full max-w-3xl gap-8"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-white/90 text-center tracking-tight">
                Esto sí mueve el negocio.
              </h2>

              <div className="w-full bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl shadow-black/50">
                <div className="min-h-[60px] text-xl text-zinc-200 font-light px-2 flex items-center">
                  <Typewriter text={ADVANCED_PROMPT} />
                </div>

                <div className="flex items-center justify-between mt-4 pt-2">
                  <div className="text-sm md:text-base text-zinc-400 px-2">
                    Contexto + criterio + decisión accionable.
                  </div>

                  <button
                    onClick={() => setStep("report")}
                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors"
                  >
                    <ArrowUp size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="report-container"
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="flex flex-col items-center justify-center w-full max-w-4xl gap-6"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-white/90 text-center tracking-tight">
                Resultado en segundos.
              </h2>

              <div className="w-full bg-zinc-900/85 backdrop-blur-xl border border-blue-400/20 rounded-3xl p-4 md:p-5 shadow-2xl shadow-black/50">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4 md:p-5 min-h-[260px]">
                  <div className="text-xs tracking-[0.18em] uppercase text-blue-300/80 mb-3">
                    Borrador de reporte (simulado)
                  </div>
                  <LowFiReport lines={REPORT_LINES} />
                </div>

                <div className="w-full bg-zinc-950/70 border border-white/10 rounded-2xl p-3 mt-4">
                  <div className="min-h-[46px] text-base md:text-lg text-zinc-100 font-light px-2 flex items-center">
                    {ADVANCED_PROMPT}
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-2">
                    <div className="text-sm text-zinc-400 px-2">
                      Contexto + criterio + decisión accionable.
                    </div>
                    <button className="w-10 h-10 rounded-full bg-blue-300 text-black flex items-center justify-center">
                      <ArrowUp size={20} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
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

function LowFiReport({ lines }: { lines: string[] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    setVisibleCount(0);
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= lines.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 170);

    return () => clearInterval(timer);
  }, [lines]);

  return (
    <div className="font-mono text-[13px] md:text-sm leading-6 text-zinc-200/95 whitespace-pre-wrap">
      {lines.slice(0, visibleCount).map((line, i) => (
        <motion.div
          key={`${line}-${i}`}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
        >
          {line || "\u00A0"}
        </motion.div>
      ))}
      {visibleCount < lines.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.9 }}
          className="inline-block w-2 h-4 bg-blue-300/90 align-middle mt-1"
        />
      )}
    </div>
  );
}
