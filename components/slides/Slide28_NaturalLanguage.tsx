import React, { useState, useEffect, useRef } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   Typewriter hook – types out text character-by-character
   ──────────────────────────────────────────────────────────── */
function useTypewriter(text: string, speed = 42, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        idx.current++;
        if (idx.current >= text.length) {
          setDisplayed(text);
          setDone(true);
          clearInterval(interval);
        } else {
          setDisplayed(text.slice(0, idx.current));
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done, progress: displayed.length / text.length };
}

/* ────────────────────────────────────────────────────────────
   Blinking cursor
   ──────────────────────────────────────────────────────────── */
function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.53, repeat: Infinity, repeatType: "reverse" }}
      className="inline-block w-[2px] h-[1.1em] bg-blue-400 ml-0.5 align-middle"
    />
  );
}

/* ────────────────────────────────────────────────────────────
   Forecast row inside the phone
   ──────────────────────────────────────────────────────────── */
function ForecastRow({
  day,
  icon,
  temp,
  delay,
}: {
  day: string;
  icon: string;
  temp: number;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.25 }}
      className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0"
    >
      <span className="text-[11px] text-white/70 w-8">{day}</span>
      <span className="text-sm">{icon}</span>
      <span className="text-[11px] text-white/50">{temp}°</span>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   SLIDE 18 — Natural Language → Software
   ──────────────────────────────────────────────────────────── */
export function Slide28_NaturalLanguage() {
  const prompt =
    "Crea una app del clima con temperatura actual, pronóstico semanal y ubicación del usuario";
  const { displayed, done } = useTypewriter(prompt, 42, 1400);

  /* ── Build progress starts AFTER typing finishes ── */
  const [buildProgress, setBuildProgress] = useState(0);
  const [buildDone, setBuildDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    const duration = 3000; // 3 seconds to build
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      setBuildProgress(p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setBuildDone(true);
      }
    };

    // Small pause before building starts (simulates "sending")
    const timeout = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 600);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [done]);

  /* ── Phone element visibility thresholds (based on build, not typing) ── */
  const showIcon = buildProgress > 0.05;
  const showTemp = buildProgress > 0.3;
  const showCondition = buildProgress > 0.5;
  const showForecast = buildProgress > 0.7;

  const forecast = [
    { day: "Lun", icon: "🌤", temp: 26 },
    { day: "Mar", icon: "☀️", temp: 28 },
    { day: "Mié", icon: "🌧", temp: 22 },
  ];

  return (
    <SlideShell className="relative overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-4">
        {/* ── Heading ── */}
        <SlideHeading size="default" className="mb-8 text-white text-center">
          Lenguaje Natural → Software
        </SlideHeading>

        {/* ══════════════ Two-panel layout ══════════════ */}
        <div
          className="flex flex-row items-stretch gap-8 w-full"
          style={{ height: "480px" }}
        >
          {/* ═══ LEFT: Chat Interface ═══ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex-1 flex flex-col bg-zinc-900/80 border border-zinc-800/60 rounded-2xl overflow-hidden backdrop-blur-sm"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/50">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <span className="text-[11px] text-zinc-500 ml-2 font-mono tracking-wide">
                AI Builder
              </span>
              {/* Building status */}
              <AnimatePresence>
                {buildProgress > 0 && !buildDone && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-auto text-[10px] text-sky-400/70 font-mono flex items-center gap-1.5"
                  >
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400"
                    />
                    Generando...
                  </motion.span>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {buildDone && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="ml-auto text-[10px] text-emerald-400/70 font-mono flex items-center gap-1.5"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Listo
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Messages area */}
            <div className="flex-1 flex flex-col justify-end p-5 gap-4 overflow-hidden">
              {/* User message */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="flex flex-col gap-1.5"
              >
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest ml-1">
                  Tú
                </span>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-bl-md px-4 py-3 min-h-[4.5rem] w-full max-w-[400px]">
                  <p className="text-[13px] text-blue-100/90 font-mono leading-relaxed break-words">
                    {displayed}
                    {!done && <BlinkingCursor />}
                  </p>
                </div>
              </motion.div>

              {/* AI response */}
              <AnimatePresence>
                {buildDone && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col gap-1.5"
                  >
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest ml-1">
                      Asistente
                    </span>
                    <div className="bg-zinc-800/50 border border-zinc-700/30 rounded-2xl rounded-br-md px-4 py-3">
                      <p className="text-[13px] text-emerald-300/90 font-mono leading-relaxed">
                        ✓ App generada exitosamente.
                      </p>
                      <p className="text-[11px] text-zinc-500 font-mono mt-1">
                        Vista previa disponible →
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input bar */}
            <div className="px-4 py-3 border-t border-zinc-800/60">
              <div className="flex items-center gap-2 bg-zinc-800/40 border border-zinc-700/30 rounded-xl px-4 py-2.5">
                <span className="text-zinc-600 text-[12px] font-mono">
                  Describe tu app...
                </span>
                <div className="ml-auto w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ═══ RIGHT: iPhone Mockup ═══ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex items-center justify-center shrink-0"
            style={{ width: "260px" }}
          >
            <motion.div
              animate={{
                boxShadow:
                  buildProgress > 0
                    ? `0 0 ${20 + buildProgress * 50}px rgba(56,189,248,${0.08 + buildProgress * 0.12}), 0 25px 50px -12px rgba(0,0,0,0.6)`
                    : "0 25px 50px -12px rgba(0,0,0,0.6)",
              }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[3rem] border-[3px] border-zinc-700/50 p-2.5"
              style={{
                width: "250px",
                height: "480px",
                background: "#0a0a0a",
              }}
            >
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-[22px] bg-black rounded-full z-20" />

              {/* Screen */}
              <div className="relative w-full h-full rounded-[2.3rem] overflow-hidden bg-black">
                {/* ── Full-screen video background ── */}
                <AnimatePresence>
                  {showIcon && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 z-0 pt-7"
                    >
                      <video
                        src="/weathervideo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-t-[1.5rem]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ── Gradient overlay: transparent top → frosted white bottom ── */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-transparent via-30% to-white/0" />
                <AnimatePresence>
                  {showTemp && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent via-40% to-white/90"
                    />
                  )}
                </AnimatePresence>

                {/* ── Status bar ── */}
                <div className="relative z-10 flex justify-between items-center px-7 pt-3 text-[9px] text-white/80 font-medium">
                  <span>9:41</span>
                  <div className="flex items-center gap-1 text-white/60">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                    </svg>
                    <svg
                      className="w-5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="6" width="18" height="12" rx="2" opacity={0.3} />
                      <rect x="2" y="6" width="14" height="12" rx="2" />
                      <rect x="21" y="10" width="2" height="4" rx="0.5" />
                    </svg>
                  </div>
                </div>

                {/* ── Building progress bar ── */}
                <AnimatePresence>
                  {buildProgress > 0 && !buildDone && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.4 } }}
                      className="relative z-10 mx-6 mt-2"
                    >
                      <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-white/50 rounded-full"
                          animate={{ width: `${buildProgress * 100}%` }}
                          transition={{ duration: 0.15, ease: "linear" }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>


                {/* ── Bottom: Weather data over white gradient ── */}
                <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center px-5 pb-8">
                  {/* Temperature */}
                  <AnimatePresence>
                    {showTemp && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="text-center"
                      >
                        <p className="text-[48px] font-light text-white leading-none tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                          24°
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Condition */}
                  <AnimatePresence>
                    {showCondition && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="text-center mt-0.5"
                      >
                        <p className="text-white/90 text-[11px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
                          Parcialmente nublado
                        </p>
                        <p className="text-white/60 text-[10px] mt-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                          Máx: 27° · Mín: 16°
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Forecast card */}
                  <AnimatePresence>
                    {showForecast && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full mt-2 bg-white/60 backdrop-blur-lg rounded-xl p-2 px-2.5 border border-white/40 shadow-sm"
                      >
                        <p className="text-[7px] text-zinc-500 uppercase tracking-widest mb-1">
                          Pronóstico semanal
                        </p>
                        {forecast.map((f, i) => (
                          <motion.div
                            key={f.day}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.25 }}
                            className="flex items-center justify-between py-0.5 border-b border-zinc-200/50 last:border-0"
                          >
                            <span className="text-[9px] text-zinc-600 w-6">{f.day}</span>
                            <span className="text-[10px]">{f.icon}</span>
                            <span className="text-[9px] text-zinc-500">{f.temp}°</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-zinc-400/30 rounded-full z-20" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Tagline + CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className="text-base text-zinc-500 text-center max-w-xl">
            La barrera entre la idea y la ejecución es ahora el lenguaje.
          </p>
          <a
            href="https://v0-breathing-web-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
          >
            Ejemplo real →
          </a>
        </motion.div>
      </div>
    </SlideShell>
  );
}
