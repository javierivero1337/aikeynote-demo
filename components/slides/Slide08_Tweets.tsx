"use client";

import React, { useState, useCallback, useRef } from "react";
import { SlideShell } from "../deck/SlideShell";
import { motion, AnimatePresence } from "framer-motion";

interface Tweet {
  name: string;
  handle: string;
  text: React.ReactNode;
  rotate: number;
  glowColor: string;
}

const b = (t: string) => (
  <span className="text-blue-300 font-semibold">{t}</span>
);

const tweets: Tweet[] = [
  {
    name: "Tsung Xu",
    handle: "@tsungxu",
    text: (
      <>
        Un ingeniero aeroespacial usó agentes para multiplicar{" "}
        {b("100x su productividad")}. Lo que a él y su equipo les tomó{" "}
        {b("1,000 horas")}, se hizo en {b("10 horas")} con Codex CLI.
        Y Codex lo hizo mejor. Estamos en el {b("Día 0")} de un paradigma
        completamente nuevo.
      </>
    ),
    rotate: -1.5,
    glowColor: "rgba(59,130,246,0.15)",
  },
  {
    name: "Vaibhav Agarwal",
    handle: "@va_a14",
    text: (
      <>
        {b("Ya no escribo código en Google. Lo reviso.")} {b("70-80%")}{" "}
        del código ahora lo escribe la IA.
      </>
    ),
    rotate: 1.2,
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    name: "Greg Brockman",
    handle: "@gdb",
    text: (
      <>
        El desarrollo de software está atravesando un{" "}
        {b("renacimiento frente a nuestros ojos")}. Ingenieros excelentes en
        OpenAI me dijeron que {b("su trabajo cambió fundamentalmente")}.
      </>
    ),
    rotate: -0.8,
    glowColor: "rgba(59,130,246,0.12)",
  },
  {
    name: "Andrej Karpathy",
    handle: "@karpathy",
    text: (
      <>
        Nunca me había sentido tan atrás como programador. La profesión está
        siendo {b("dramáticamente refactorizada")}. Podría ser{" "}
        {b("10X más poderoso")} si conecto lo que ya está disponible.
      </>
    ),
    rotate: 1.8,
    glowColor: "rgba(139,92,246,0.14)",
  },
  {
    name: "Alex Albert",
    handle: "@alexalbert__",
    text: (
      <>
        {b("El salto en autonomía es real.")} Dale el contexto, aléjate, y
        regresa a algo increíble. La forma en que trabajamos con los modelos{" "}
        {b("está empezando a cambiar por completo")}.
      </>
    ),
    rotate: -2,
    glowColor: "rgba(59,130,246,0.13)",
  },
  {
    name: "corbin",
    handle: "@corbin_braun",
    text: (
      <>
        Con Opus 4.6, puedes {b("construir cualquier cosa")}. Este es el
        momento en que el software va a {b("costo cero")}. Pero para
        desbloquear este poder, {b("necesitas saber qué decir")}.
      </>
    ),
    rotate: 0.6,
    glowColor: "rgba(139,92,246,0.15)",
  },
  {
    name: "Jaana Dogan",
    handle: "@rakyll",
    text: (
      <>
        No estoy bromeando. Intentamos construir orquestadores de agentes
        distribuidos en Google {b("durante un año")}. Le di a Claude Code una
        descripción del problema y {b("generó todo en una hora")}.
      </>
    ),
    rotate: -1,
    glowColor: "rgba(59,130,246,0.16)",
  },
];

/* ── Individual card in the grid ── */
function TweetCard({
  tweet,
  index,
  onSelect,
  isSelected,
}: {
  tweet: Tweet;
  index: number;
  onSelect: () => void;
  isSelected: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, inside: false });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      inside: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse((prev) => ({ ...prev, inside: false }));
  }, []);

  return (
    <motion.div
      ref={cardRef}
      layoutId={`tweet-${index}`}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={{
        opacity: isSelected ? 0 : 1,
        y: 0,
        scale: 1,
        rotate: tweet.rotate,
      }}
      transition={{
        delay: 0.2 + index * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      }}
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-pointer"
    >
      {/* Mouse-tracking border glow */}
      <div
        className="absolute -inset-[1px] rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: mouse.inside ? 1 : 0,
          background: `radial-gradient(280px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.55), rgba(96,165,250,0.25) 40%, transparent 70%)`,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1.5px",
          borderRadius: "1rem",
        }}
      />

      {/* Subtle radial glow behind card on hover */}
      <div
        className="absolute -inset-3 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: mouse.inside ? 1 : 0,
          background: `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.08), transparent 60%)`,
        }}
      />

      {/* Animated outer glow */}
      <motion.div
        className="absolute -inset-[1px] rounded-2xl pointer-events-none"
        style={{
          boxShadow: `0 0 20px 2px ${tweet.glowColor}, 0 0 60px 5px ${tweet.glowColor}`,
        }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 3 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <CardInner tweet={tweet} size="sm" />
    </motion.div>
  );
}

/* ── Shared card inner chrome ── */
function CardInner({ tweet, size }: { tweet: Tweet; size: "sm" | "lg" }) {
  const isLg = size === "lg";
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${
        isLg
          ? "p-8 bg-black border border-zinc-700/80"
          : "p-5 bg-zinc-950/90 border border-zinc-800/60 backdrop-blur-sm"
      }`}
    >
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none ${
          isLg
            ? "bg-gradient-to-br from-blue-500/[0.04] via-transparent to-purple-500/[0.04]"
            : "bg-gradient-to-br from-blue-500/[0.02] via-transparent to-purple-500/[0.02]"
        }`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className={`flex items-center gap-3 ${isLg ? "mb-5" : "mb-3"}`}>
          <div
            className={`rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center font-bold shrink-0 border border-zinc-700/50 ${
              isLg
                ? "w-12 h-12 text-base text-zinc-300"
                : "w-9 h-9 text-xs text-zinc-400"
            }`}
          >
            {tweet.name.charAt(0)}
          </div>
          <div className="flex flex-col min-w-0">
            <span
              className={`text-white font-semibold leading-tight truncate ${
                isLg ? "text-lg" : "text-sm"
              }`}
            >
              {tweet.name}
            </span>
            <span
              className={`leading-tight ${
                isLg ? "text-sm text-zinc-400" : "text-xs text-zinc-500"
              }`}
            >
              {tweet.handle}
            </span>
          </div>
          <svg
            className={`ml-auto shrink-0 ${
              isLg ? "w-5 h-5 text-zinc-500" : "w-4 h-4 text-zinc-600"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        {/* Body */}
        <p
          className={`leading-relaxed ${
            isLg ? "text-xl text-zinc-100" : "text-[13px] text-zinc-300"
          }`}
        >
          &ldquo;{tweet.text}&rdquo;
        </p>
      </div>
    </div>
  );
}

/* ── Expanded overlay ── */
function ExpandedTweet({
  tweet,
  index,
  onClose,
}: {
  tweet: Tweet;
  index: number;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <motion.div
          layoutId={`tweet-${index}`}
          initial={{ scale: 0.85, opacity: 0, rotate: tweet.rotate }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.85, opacity: 0, rotate: tweet.rotate }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          }}
          className="relative w-full max-w-lg mx-4 pointer-events-auto cursor-pointer"
          onClick={onClose}
        >
          {/* Refined border glow when expanded */}
          <motion.div
            className="absolute -inset-[1px] rounded-2xl pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(139,92,246,0.2) 50%, rgba(59,130,246,0.3))",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "xor",
              padding: "1px",
              borderRadius: "1rem",
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Soft ambient glow behind card */}
          <motion.div
            className="absolute -inset-8 rounded-3xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(59,130,246,0.08), transparent 70%)",
            }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <CardInner tweet={tweet} size="lg" />
        </motion.div>
      </div>
    </>
  );
}

/* ── Main slide ── */
export function Slide08_Tweets() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = useCallback(
    (i: number) => setSelected((prev) => (prev === i ? null : i)),
    []
  );
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <SlideShell className="relative overflow-hidden !p-4 md:!p-8 lg:!p-12">
      {/* Background ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto flex flex-col gap-5">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center"
        >
          <span className="px-3 py-1 rounded-full border border-zinc-700/60 text-zinc-400 text-xs tracking-widest uppercase bg-black/60 backdrop-blur-md">
            Lo que dicen los que ya lo viven
          </span>
        </motion.div>

        {/* Scattered wall — 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="flex flex-col gap-3 md:mt-2">
            <TweetCard tweet={tweets[0]} index={0} onSelect={() => handleSelect(0)} isSelected={selected === 0} />
            <TweetCard tweet={tweets[4]} index={4} onSelect={() => handleSelect(4)} isSelected={selected === 4} />
          </div>
          <div className="flex flex-col gap-3 md:mt-10">
            <TweetCard tweet={tweets[1]} index={1} onSelect={() => handleSelect(1)} isSelected={selected === 1} />
            <TweetCard tweet={tweets[5]} index={5} onSelect={() => handleSelect(5)} isSelected={selected === 5} />
          </div>
          <div className="flex flex-col gap-3 md:mt-1">
            <TweetCard tweet={tweets[2]} index={2} onSelect={() => handleSelect(2)} isSelected={selected === 2} />
            <TweetCard tweet={tweets[6]} index={6} onSelect={() => handleSelect(6)} isSelected={selected === 6} />
          </div>
          <div className="flex flex-col gap-3 md:mt-7">
            <TweetCard tweet={tweets[3]} index={3} onSelect={() => handleSelect(3)} isSelected={selected === 3} />
          </div>
        </div>
      </div>

      {/* Expanded overlay */}
      <AnimatePresence>
        {selected !== null && (
          <ExpandedTweet
            key={selected}
            tweet={tweets[selected]}
            index={selected}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </SlideShell>
  );
}
