import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import Dither from "../Dither";
import GlitchText from "../GlitchText";
import { Heart, Scale, Palette } from "lucide-react";

const WARNINGS = [
  {
    title: "Empatía",
    icon: <Heart className="w-8 h-8 text-rose-400" />,
    text: "La gente ya está recurriendo a la IA para el apoyo emocional y compañía.",
    color: "from-rose-500/20 to-rose-900/5",
    borderColor: "border-rose-500/30",
    textColor: "text-rose-200"
  },
  {
    title: "Juicio",
    icon: <Scale className="w-8 h-8 text-amber-400" />,
    text: "Los CEOs pasan más horas con su IA que con su board de directores.",
    color: "from-amber-500/20 to-amber-900/5",
    borderColor: "border-amber-500/30",
    textColor: "text-amber-200"
  },
  {
    title: "Gusto",
    icon: <Palette className="w-8 h-8 text-purple-400" />,
    text: "Los diseñadores de Google, Meta & Amazon ya usan IA en sus procesos creativos.",
    color: "from-purple-500/20 to-purple-900/5",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-200"
  }
];

export function Slide23_Warning() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <Dither 
          waveColor={[0.6, 0.6, 0.6]} 
          disableAnimation={false} 
          waveSpeed={0.03} 
          enableMouseInteraction={false}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {WARNINGS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (index * 0.2), duration: 0.8, ease: "easeOut" }}
              className={`relative p-8 border ${item.borderColor} bg-gradient-to-br ${item.color} backdrop-blur-md rounded-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}
            >
              <div className="absolute inset-0 bg-black/20" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-3 bg-black/40 w-fit rounded-lg border border-white/10 shadow-lg">
                  {item.icon}
                </div>
                
                <h3 className="text-3xl font-serif italic text-white mb-4">
                  {item.title}
                </h3>
                
                <div className={`h-px w-12 bg-white/20 mb-6`} />
                
                <p className={`text-xl font-light leading-relaxed ${item.textColor}`}>
                  "{item.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
