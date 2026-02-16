import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";

const ASSOCIATES = [
  "Investigación",
  "Redacción",
  "Análisis",
  "Due Diligence",
  "Contratos",
  "Revisión",
  "Compliance",
  "Estrategia",
];

/* ── Quark (particle) definitions per connection ── */
interface Quark {
  startOffset: number;
  duration: number;
  gap: number;
  size: number;
  outbound: boolean;
  opacity: number;
}

function quarksForIndex(i: number): Quark[] {
  const base = i * 0.7;
  return [
    { startOffset: 0.8 + base * 0.3, duration: 2.4, gap: 3.0 + (i % 3) * 0.6, size: 5, outbound: true, opacity: 0.9 },
    { startOffset: 2.2 + base * 0.2, duration: 3.0, gap: 2.5 + (i % 2) * 1.0, size: 3, outbound: true, opacity: 0.6 },
    { startOffset: 1.5 + base * 0.4, duration: 2.8, gap: 3.5 + (i % 4) * 0.4, size: 4, outbound: false, opacity: 0.7 },
  ];
}

/** Pre-compute satellite position from index */
function satPos(i: number, count: number, r: number) {
  const angle = (i * 360) / count - 90;
  return {
    angle,
    x: Math.cos((angle * Math.PI) / 180) * r,
    y: Math.sin((angle * Math.PI) / 180) * r,
  };
}

export function Slide18_Lawyers() {
  const count = ASSOCIATES.length;
  const radius = 200;
  const coreEdge = 58;
  const satEdge = radius - 18;

  const satellites = ASSOCIATES.map((_, i) => satPos(i, count, radius));

  return (
    <SlideShell className="relative overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full w-full max-w-5xl mx-auto z-10 relative">
        <SlideHeading size="lg" className="mb-14 text-center">
          El Nuevo <span className="text-blue-500">Socio</span>
        </SlideHeading>

        <div className="relative w-[340px] h-[340px] md:w-[520px] md:h-[520px] flex items-center justify-center">
          {/* Subtle outer ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.8, ease: "easeOut" }}
            className="absolute rounded-full border border-zinc-500"
            style={{ width: radius * 2 + 80, height: radius * 2 + 80 }}
          />

          {/* ── Inter-satellite ring connections (SVG) ── */}
          <svg
            viewBox={`${-radius - 60} ${-radius - 60} ${(radius + 60) * 2} ${(radius + 60) * 2}`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          >
            {satellites.map((sat, i) => {
              const next = satellites[(i + 1) % count];
              const dashSize = 3;
              const gapSize = 7;
              const totalDash = dashSize + gapSize;

              return (
                <motion.line
                  key={`ring-${i}`}
                  x1={sat.x}
                  y1={sat.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="rgba(59,130,246,0.16)"
                  strokeWidth="0.6"
                  strokeDasharray={`${dashSize} ${gapSize}`}
                  initial={{ opacity: 0, strokeDashoffset: 0 }}
                  animate={{
                    opacity: 1,
                    strokeDashoffset: -totalDash * 4,
                  }}
                  transition={{
                    opacity: { delay: 4.5 + i * 0.15, duration: 1.2 },
                    strokeDashoffset: {
                      delay: 4.5 + i * 0.15,
                      duration: 6 + (i % 3) * 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              );
            })}
          </svg>

          {/* Central Node (Partner) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", damping: 18, stiffness: 100 }}
            className="w-28 h-28 rounded-full bg-white flex items-center justify-center z-20 relative"
          >
            <motion.div
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 60px 20px rgba(59,130,246,0.15)" }}
            />
            <span className="text-black font-bold text-xl tracking-tight relative z-10">Socio</span>
          </motion.div>

          {/* Connected Nodes (Associates) */}
          {ASSOCIATES.map((label, i) => {
            const { angle, x, y } = satellites[i];
            const lineDelay = 1.4 + i * 0.3;
            const nodeDelay = lineDelay + 0.5;
            const labelDelay = nodeDelay + 0.35;
            const quarksDelay = nodeDelay + 1.2;
            const quarks = quarksForIndex(i);

            return (
              <React.Fragment key={i}>
                {/* Radial connection — flowing pulse traveling along the line */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: radius,
                    height: "3px",
                    marginTop: "-1px",
                    transformOrigin: "left center",
                    transform: `rotate(${angle}deg)`,
                    overflow: "hidden",
                    zIndex: 11,
                    pointerEvents: "none",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      x: [-60, radius + 60],
                      opacity: [0, 0.65, 0.65, 0],
                    }}
                    transition={{
                      delay: lineDelay + 2 + i * 0.45,
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 3.5 + (i % 3) * 1.0,
                      ease: "easeInOut",
                      times: [0, 0.15, 0.85, 1],
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      width: 50,
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)",
                      borderRadius: 2,
                    }}
                  />
                </div>

                {/* ── Quarks (flowing particles) ── */}
                {quarks.map((q, qi) => {
                  const from = q.outbound ? coreEdge : satEdge;
                  const to = q.outbound ? satEdge : coreEdge;
                  return (
                    <div
                      key={`q-${i}-${qi}`}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: 0,
                        height: 0,
                        transform: `rotate(${angle}deg)`,
                        zIndex: 15,
                        pointerEvents: "none",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          x: [from, to],
                          opacity: [0, q.opacity, q.opacity, 0],
                        }}
                        transition={{
                          delay: quarksDelay + q.startOffset,
                          duration: q.duration,
                          repeat: Infinity,
                          repeatDelay: q.gap,
                          ease: "easeInOut",
                          times: [0, 0.15, 0.85, 1],
                        }}
                        style={{
                          position: "absolute",
                          top: -(q.size / 2),
                          left: 0,
                          width: q.size,
                          height: q.size,
                          borderRadius: "50%",
                          background: q.outbound
                            ? "radial-gradient(circle, rgba(96,165,250,0.95), rgba(59,130,246,0.4))"
                            : "radial-gradient(circle, rgba(147,197,253,0.9), rgba(96,165,250,0.3))",
                          boxShadow: q.outbound
                            ? `0 0 ${q.size + 4}px ${q.size / 2}px rgba(59,130,246,0.35)`
                            : `0 0 ${q.size + 3}px ${q.size / 2}px rgba(147,197,253,0.25)`,
                        }}
                      />
                    </div>
                  );
                })}

                {/* Associate Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: nodeDelay,
                    duration: 0.7,
                    type: "spring",
                    damping: 20,
                    stiffness: 120,
                  }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    x,
                    y,
                    zIndex: 20,
                  }}
                  className="flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-10 h-10 rounded-full bg-zinc-800/90 border border-zinc-700 flex items-center justify-center backdrop-blur-sm">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: nodeDelay + 0.2, duration: 0.4 }}
                      className="w-2.5 h-2.5 bg-blue-500 rounded-full"
                    />
                  </div>
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: labelDelay, duration: 0.6, ease: "easeOut" }}
                    className="mt-2 text-[11px] md:text-xs text-zinc-400 font-medium tracking-wide whitespace-nowrap"
                  >
                    {label}
                  </motion.span>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.5, duration: 1 }}
          className="mt-10 text-xl text-zinc-400 text-center max-w-2xl"
        >
          Un equipo de asociados disponible al instante.
        </motion.p>
      </div>
    </SlideShell>
  );
}
