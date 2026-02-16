import React, { useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";

const milestones = [
  { year: "2022", text: "No sabía sumar", y: 90, x: 10, description: "Modelos básicos, incapaces de lógica simple." },
  { 
    year: "2023", 
    text: "Examen de la barra", 
    y: 75, 
    x: 35, 
    description: "GPT-4 pasa el examen de abogacía (Bar Exam) en el top 10%."
  },
  { 
    year: "2024", 
    text: "Ciencia de posgrado", 
    y: 45, 
    x: 60, 
    description: "Razonamiento a nivel de doctorado en biología y física."
  },
  { 
    year: "2026", 
    text: "Deep Think", 
    y: 10, 
    x: 90, 
    isSpecial: true,
    description: (
      <div className="space-y-4 text-sm md:text-base leading-relaxed">
        <p>
          El último <strong className="text-white">Deep Think</strong> va más allá de la teoría abstracta para impulsar aplicaciones prácticas.
        </p>
        <p>
          Es el estado del arte en <strong className="text-blue-400">ARC-AGI-2</strong>, un referente para el razonamiento de IA de frontera.
        </p>
        <p>
          En el <em className="text-white">Humanity’s Last Exam</em>, establece un nuevo estándar, abordando los problemas más difíciles en matemáticas, ciencia e ingeniería — convirtiéndolo en un colaborador genuino para el análisis pesado.
        </p>
        <p>
          Logró un Elo de <strong className="text-green-400">3455 en Codeforces</strong>, demostrando la capacidad de resolver tareas de codificación complejas del mundo real — mientras obtenía resultados de nivel medalla de oro en la parte escrita de las Olimpiadas de Física y Química de 2026.
        </p>
      </div>
    )
  },
];

export function Slide11_Curve() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  return (
    <SlideShell className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-6xl mx-auto px-6">
        <SlideHeading size="lg" className="mb-8 text-center relative z-10">
          La Curva <span className="text-blue-500">Exponencial</span>
        </SlideHeading>

        <div className="relative w-full h-[500px] flex items-end pb-12">
          {/* Grid Lines */}
          <div className="absolute inset-0 border-l border-b border-zinc-800 pointer-events-none">
            {[20, 40, 60, 80].map((y) => (
              <div key={y} className="absolute w-full h-px bg-zinc-900" style={{ bottom: `${y}%` }} />
            ))}
          </div>

          {/* SVG Curve */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-0">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="1" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* The Curve Path */}
            <motion.path
              d={`M ${milestones[0].x}% ${milestones[0].y}% 
                 C ${milestones[1].x}% ${milestones[0].y}%, ${milestones[1].x - 10}% ${milestones[1].y}%, ${milestones[1].x}% ${milestones[1].y}%
                 S ${milestones[2].x - 10}% ${milestones[2].y}%, ${milestones[2].x}% ${milestones[2].y}%
                 S ${milestones[3].x - 10}% ${milestones[3].y}%, ${milestones[3].x}% ${milestones[3].y}%`}
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="4"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Data Points */}
          {milestones.map((point, index) => (
            <div
              key={point.year}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* Point Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 + index * 0.5, type: "spring" }}
                className={`w-6 h-6 rounded-full border-4 cursor-pointer transition-all duration-300 ${
                  point.isSpecial 
                    ? "bg-red-500 border-red-900 shadow-[0_0_20px_rgba(239,68,68,0.8)] scale-125 hover:scale-150" 
                    : "bg-zinc-900 border-blue-500 hover:scale-125 hover:bg-blue-500"
                }`}
              />

              {/* Label (Year + Short Text) - Always visible unless hovered (for special) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.5 }}
                className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-opacity duration-300 ${
                  hoveredPoint === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="text-zinc-500 font-mono text-sm mb-1">{point.year}</div>
                <div className={`font-bold ${point.isSpecial ? "text-red-400 text-lg" : "text-zinc-300 text-sm"}`}>
                  {point.text}
                </div>
              </motion.div>
            </div>
          ))}

          {/* Centered Tooltip / Expanded Card */}
          <AnimatePresence>
            {hoveredPoint !== null && (
              <motion.div
                key="tooltip"
                initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
                animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                exit={{ opacity: 0, scale: 0.9, x: "-50%", y: "-40%" }}
                transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                className={`absolute left-1/2 top-1/2 z-50 p-8 rounded-2xl border backdrop-blur-xl shadow-2xl w-[90%] max-w-lg pointer-events-none ${
                  milestones[hoveredPoint].isSpecial
                    ? "bg-zinc-900/95 border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.2)]"
                    : "bg-zinc-900/95 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                }`}
              >
                <div className="mb-4 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className={`text-3xl font-bold ${milestones[hoveredPoint].isSpecial ? "text-red-400" : "text-blue-400"}`}>
                    {milestones[hoveredPoint].year}
                  </h3>
                  <span className={`text-xl font-medium ${milestones[hoveredPoint].isSpecial ? "text-white" : "text-zinc-300"}`}>
                    {milestones[hoveredPoint].text}
                  </span>
                </div>
                <div className="text-zinc-300 text-lg leading-relaxed">
                  {milestones[hoveredPoint].description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideShell>
  );
}
