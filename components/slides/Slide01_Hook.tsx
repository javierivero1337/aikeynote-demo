import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import Dither from "../Dither";
import BlurText from "../BlurText";
import Image from "next/image";

export function Slide01_Hook() {
  return (
    <SlideShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Dither 
          waveColor={[0.2, 0.2, 0.2]} 
          disableAnimation={false} 
          waveSpeed={0.05} 
          enableMouseInteraction={false}
        />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-between h-full w-full py-8 md:py-12">
        <div className="flex-1 flex flex-col items-center justify-center pb-20 md:pb-32 gap-8">
          <SlideHeading size="xl" className="text-center leading-tight">
            Algo grande <br />
            <span className="text-blue-500 inline-block">
              <BlurText 
                text="está sucediendo" 
                delay={50} 
                animateBy="letters"
                direction="top"
                className="inline-flex"
              />
            </span>
          </SlideHeading>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-2xl md:text-3xl text-zinc-400 text-center font-light tracking-wide"
          >
            ¿Qué podemos hacer al respecto?
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="relative h-12 w-48">
            <Image 
              src="/collective-logo.png" 
              alt="Collective Academy Logo" 
              fill
              className="object-contain object-center brightness-0 invert opacity-80"
            />
          </div>
          <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
            Javier Rivero
          </p>
        </motion.div>
      </div>
    </SlideShell>
  );
}
