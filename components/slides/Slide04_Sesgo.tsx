import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import { GridDistortion } from "../deck/Backgrounds";
import GlitchText from "../GlitchText";
import Image from "next/image";
import slide4Background from "@/public/slides-imagery/slide4.png";

export function Slide04_Sesgo() {
  const dismissivePhrases = [
    "Acumular papel higiénico parecía de locos.",
    "Eso solo está sucediendo en China e Italia.",
    "Es como una gripe fuerte, nada más.",
    "En dos semanas todo vuelve a la normalidad.",
    "A nosotros no nos va a tocar tan fuerte.",
  ];

  return (
    <SlideShell className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide4Background}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
      <GridDistortion />
      <div className="relative z-10 w-full">
        <SlideHeading className="mb-8 flex flex-col md:block">
          El Sesgo de <span className="inline-block"><GlitchText speed={0.5} enableShadows={true} enableOnHover={true}>Normalidad</GlitchText></span>
        </SlideHeading>
        
        <div className="space-y-4 max-w-4xl">
          {dismissivePhrases.map((phrase, index) => (
            <motion.div
              key={phrase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + index * 0.2 }}
              className="border-l-2 border-zinc-800 pl-6"
            >
              <p className="text-xl md:text-2xl text-zinc-300 italic">"{phrase}"</p>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="text-xl text-zinc-400"
          >
            Pero en <span className="text-white font-bold">tres semanas</span>, el mundo cambió y la vida se reorganizó por completo.
          </motion.p>
        </div>
      </div>
    </SlideShell>
  );
}
