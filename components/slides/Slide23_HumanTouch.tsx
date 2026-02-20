/* eslint-disable react/no-unknown-property */
"use client";

import React, { useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Heart, Palette, Scale } from "lucide-react";
import slide18Background from "@/public/slides-imagery/slide18.png";

const TOPICS = [
  {
    title: "Empatía",
    icon: Heart,
    text: "La gente ya está recurriendo a la IA para el apoyo emocional y compañía.",
    glow: "rgba(244,63,94,0.35)",
    textColor: "text-rose-200",
  },
  {
    title: "Juicio",
    icon: Scale,
    text: "Los CEOs pasan más horas con su IA que con su board de directores.",
    glow: "rgba(245,158,11,0.35)",
    textColor: "text-amber-200",
  },
  {
    title: "Gusto",
    icon: Palette,
    text: "Los diseñadores de Google, Meta y Amazon ya usan IA en sus procesos creativos.",
    glow: "rgba(168,85,247,0.35)",
    textColor: "text-purple-200",
  },
] as const;

export function Slide23_HumanTouch() {
  const [openTopic, setOpenTopic] = useState<string | null>(null);

  return (
    <SlideShell className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide18Background}
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto z-10 relative">
        <SlideHeading size="large" className="mb-16 text-center">
          ¿El Fin del <span className="text-zinc-500">Toque Humano?</span>
        </SlideHeading>

        <div className="space-y-6 w-full max-w-4xl">
          {TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            const isOpen = openTopic === topic.title;

            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ delay: 0.5 + index * 0.25, duration: 1 }}
                className="text-center"
              >
                <button
                  type="button"
                  onClick={() => setOpenTopic(isOpen ? null : topic.title)}
                  className="group relative inline-flex items-center gap-3 text-4xl md:text-6xl font-serif italic text-zinc-300 transition-colors duration-300 hover:text-zinc-100"
                  aria-expanded={isOpen}
                >
                  <span>{topic.title}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="text-zinc-500 group-hover:text-zinc-300"
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0, scale: 0.985 }}
                      animate={{ height: "auto", opacity: 1, scale: 1 }}
                      exit={{ height: 0, opacity: 0, scale: 0.985 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="relative mt-4 mx-auto max-w-3xl rounded-2xl border border-white/12 bg-black/40 backdrop-blur-md p-6 md:p-7">
                        <div className="flex items-start justify-center gap-3">
                          <Icon className="w-6 h-6 mt-0.5 text-white/80 shrink-0" />
                          <p className={`text-lg md:text-xl leading-relaxed text-left ${topic.textColor}`}>
                            {topic.text}
                          </p>
                        </div>
                        <div
                          className="pointer-events-none absolute inset-0 rounded-2xl"
                          style={{ boxShadow: `0 0 24px -18px ${topic.glow} inset` }}
                        />
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="mt-16 text-xl text-zinc-500 text-center max-w-2xl"
        >
          Creíamos que eran insustituibles. Ahora toca decidir cómo usamos esa transición.
        </motion.p>
      </div>
    </SlideShell>
  );
}
