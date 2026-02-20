/* eslint-disable react/no-unknown-property */
"use client";

import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";

const agendaItems = [
  {
    id: "01",
    title: "Del contexto al quiebre",
    description: "Cómo pasamos de la normalidad a señales claras de cambio.",
  },
  {
    id: "02",
    title: "Lo que ya cambió",
    description: "Qué nos dicen el costo, la velocidad y la calidad de los modelos.",
  },
  {
    id: "03",
    title: "Cómo responder desde el liderazgo",
    description: "Qué decisiones tomar en equipos, procesos y prioridades desde hoy.",
  },
  {
    id: "04",
    title: "Plan de acción inmediato",
    description: "Un framework práctico para adoptar IA con enfoque, ritmo y criterio.",
  },
];

function AgendaCard({
  id,
  title,
  description,
  index,
}: {
  id: string;
  title: string;
  description: string;
  index: number;
}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0, inside: false, width: 440, height: 320 });
  const centerX = mouse.width / 2;
  const centerY = mouse.height / 2;
  const offsetX = ((mouse.x - centerX) / centerX) * 12;
  const offsetY = ((mouse.y - centerY) / centerY) * 14;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      inside: true,
      width: rect.width,
      height: rect.height,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse((prev) => ({ ...prev, inside: false }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.12 }}
      whileHover={{
        y: -5,
        scale: 1.012,
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl"
    >
      <div
        className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: mouse.inside ? 1 : 0,
          background: `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.5), rgba(96,165,250,0.2) 42%, transparent 72%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1.5px",
          borderRadius: "1rem",
        }}
      />

      <div
        className="absolute -inset-3 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: mouse.inside ? 1 : 0,
          background: `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.08), transparent 62%)`,
        }}
      />

      <div
        className="relative rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-7 backdrop-blur-sm transition-shadow duration-300"
        style={{
          boxShadow: mouse.inside
            ? `${offsetX}px ${16 + offsetY}px 52px -18px rgba(59,130,246,0.75), ${offsetX * 0.6}px ${8 + offsetY * 0.6}px 24px -14px rgba(96,165,250,0.55), 0 0 0 1px rgba(59,130,246,0.32)`
            : "0 0 0 0 rgba(0,0,0,0)",
        }}
      >
        <p className="text-sm tracking-[0.28em] text-zinc-500 font-mono mb-3">{id}</p>
        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{title}</h3>
        <p className="mt-3 text-zinc-400 text-lg leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function Slide03_Agenda() {
  return (
    <SlideShell className="relative">
      <div className="relative z-10 w-full space-y-10">
        <div className="space-y-4 max-w-5xl">
          <SlideHeading size="large">
            Ruta de la <span className="text-white/50">conversación</span>
          </SlideHeading>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl md:text-2xl text-zinc-300 leading-relaxed"
          >
            No es una charla de miedo; es un mapa para entender lo que viene y actuar con claridad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {agendaItems.map((item, index) => (
            <AgendaCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
