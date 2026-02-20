import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { motion } from "framer-motion";
import Image from "next/image";
import javierPortrait from "@/public/Javier.jpeg";

export function Slide02_Bio() {
  return (
    <SlideShell className="relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full max-w-7xl mx-auto">
        
        {/* Left Column: Image & Name */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start gap-6 shrink-0"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden transition-all duration-500 border border-zinc-800 shadow-2xl">
            <Image 
              src={javierPortrait}
              alt="Javier Rivero" 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-white tracking-tight">Javier Rivero</h2>
            <p className="text-zinc-500 font-mono text-sm mt-2 uppercase tracking-widest">
              Global Operations at Stripe
            </p>
          </div>
        </motion.div>

        {/* Right Column: Bio Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-xl text-lg md:text-xl text-zinc-300 font-light leading-relaxed"
        >
          <p>
            Lidera la estrategia global de soporte al consumidor en <span className="text-white font-medium">Stripe</span>. Previamente escaló operaciones y equipos de 200+ personas en <span className="text-white font-medium">Uber</span> y <span className="text-white font-medium">Philip Morris International</span> mediante metodologías ágiles y decisiones basadas en datos.
          </p>
          
          <p>
            Su expertise combina experiencia en tech y manufactura con especialización en liderazgo de equipos, eficiencia de procesos y planeación estratégica, competencias que aplica como mentor de Agile Leadership en <span className="text-white font-medium">Collective Academy</span>.
          </p>

          <p>
            Ha sido conferencista en <span className="text-white font-medium">Google</span> y <span className="text-white font-medium">TEDx</span> sobre el futuro del liderazgo y actualmente lidera la comunidad más grande de IA en México.
          </p>
        </motion.div>

      </div>
    </SlideShell>
  );
}
