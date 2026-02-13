import React from "react";
import { motion } from "framer-motion";

export function GridDistortion() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function DataStream() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-60 pointer-events-none">
      {/* Base Streams */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 40 + 20}%`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: ["-100%", "1000%"],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Bright Sparks */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute top-0 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 10 + 5}%`,
            opacity: 0,
          }}
          animate={{
            y: ["-50%", "110%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 1.5,
            repeat: Infinity,
            ease: "easeIn",
            delay: Math.random() * 4,
          }}
        />
      ))}
    </div>
  );
}

export function AwakeningDots() {
  // Create a grid of dots
  const rows = 15;
  const cols = 25;
  const dots = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dots.push({ id: `${i}-${j}`, x: j, y: i });
    }
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-40">
      <div 
        className="grid gap-8 md:gap-12"
        style={{ 
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.5], scale: [0, 1.5, 1] }}
            transition={{
              duration: 2,
              delay: Math.random() * 5, // Random delay for "waking up" effect
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: Math.random() * 5 + 2
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function PulseRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-blue-500/30"
          initial={{ width: 0, height: 0, opacity: 0.8, borderWidth: "1px" }}
          animate={{
            width: ["0px", "1200px"],
            height: ["0px", "1200px"],
            opacity: [0.8, 0],
            borderWidth: ["1px", "0px"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1,
          }}
        />
      ))}
    </div>
  );
}

export function RadarScan() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <motion.div
        className="absolute w-full h-[4px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]"
        animate={{ top: ["0%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
