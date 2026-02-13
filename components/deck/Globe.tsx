import React from "react";
import { motion } from "framer-motion";

export function Globe() {
  return (
    <div className="relative w-[800px] h-[800px] flex items-center justify-center opacity-60">
      {/* Core Glow */}
      <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
      
      {/* Central Sphere */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-br from-blue-600/20 to-transparent backdrop-blur-sm border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]" />

      {/* Inner Rotating Grid */}
      <motion.div 
        className="absolute w-[260px] h-[260px] rounded-full border border-blue-400/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
         {[0, 45, 90, 135].map((deg) => (
            <div 
              key={deg} 
              className="absolute inset-0 border-t border-blue-400/20" 
              style={{ transform: `rotate(${deg}deg)` }} 
            />
         ))}
      </motion.div>

      {/* Rotating Rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute border border-blue-400/20 rounded-full"
          style={{
            width: `${350 + i * 120}px`,
            height: `${350 + i * 120}px`,
            borderStyle: i % 2 === 0 ? "solid" : "dashed",
            borderWidth: "1px",
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.02, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            rotate: {
              duration: 40 + i * 15,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }
          }}
        />
      ))}

      {/* Orbital Satellites */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`sat-${i}`}
          className="absolute w-full h-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25 + i * 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: i % 2 === 0 ? "loop" : "reverse",
          }}
        >
          <div
            className="absolute flex items-center justify-center"
            style={{
              top: "50%",
              left: `${50 + (40 + (i % 2) * 10) * Math.cos((i * Math.PI) / 3)}%`,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
            <div className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent rotate-45" />
          </div>
        </motion.div>
      ))}
      
      {/* Connecting Lines (Simulated) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.circle 
          cx="400" cy="400" r="200" 
          stroke="url(#grad1)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="10 20"
          animate={{ strokeDashoffset: 1000 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
