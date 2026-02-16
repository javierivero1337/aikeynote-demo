import React, { useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";
import { GridDistortion } from "../deck/Backgrounds";
import BlurText from "../BlurText";

export function Slide32_DailyHour() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step === 0) setStep(1);
  };

  return (
    <SlideShell 
      className="relative overflow-hidden" 
      contentClassName="max-w-full w-full px-4 md:px-8 h-full"
      onClick={handleNext}
    >
      <div className="absolute inset-0 z-0">
        <GridDistortion />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.div
              key="intro"
              className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto"
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
            >
              <SlideHeading size="lg" className="mb-12 text-white drop-shadow-md">
                La Regla de la Hora Diaria
              </SlideHeading>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl mb-4 block">🛠️</span>
                  <h3 className="text-xl font-bold text-white mb-2">Usándola</h3>
                  <p className="text-gray-400 text-sm">
                    No leyendo noticias sobre IA. Construyendo con ella.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl mb-4 block">💳</span>
                  <h3 className="text-xl font-bold text-white mb-2">Paga los $20</h3>
                  <p className="text-gray-400 text-sm">
                    Usa la mejor versión (Claude Opus, GPT-5). Es tu ventaja competitiva.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl mb-4 block">🧠</span>
                  <h3 className="text-xl font-bold text-white mb-2">Trabajo Real</h3>
                  <p className="text-gray-400 text-sm">
                    Dále problemas difíciles, no preguntas de trivialidades.
                  </p>
                </motion.div>
              </div>

              <motion.div
                layoutId="hour-block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="p-8 border border-blue-500/30 bg-black/60 rounded-2xl backdrop-blur-sm w-full cursor-pointer hover:border-blue-400/50 transition-colors"
              >
                <motion.div 
                  layoutId="hour-text"
                  className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4 font-mono"
                >
                  1 HORA
                </motion.div>
                <motion.p 
                  layoutId="hour-subtitle"
                  className="text-xl md:text-2xl text-gray-400"
                >
                  Al día. Sin excusas.
                </motion.p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="calendar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="w-full h-[90vh] bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md flex flex-col">
                {/* Calendar Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      G
                    </div>
                    <h2 className="text-xl font-semibold text-white">Calendar</h2>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                    <div className="w-8 h-8 rounded-full bg-zinc-800"></div>
                  </div>
                </div>

                {/* Calendar Body */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Main Grid */}
                  <div className="flex-1 flex flex-col bg-zinc-950/30 relative overflow-y-auto">
                    {/* Day Header */}
                    <div className="flex border-b border-zinc-800">
                      <div className="w-24 border-r border-zinc-800 bg-zinc-900/50"></div>
                      <div className="flex-1 p-4 text-center border-r border-zinc-800">
                        <div className="text-sm text-blue-400 font-medium">TODAY</div>
                        <div className="text-2xl text-white font-bold">14</div>
                      </div>
                    </div>

                    {/* Time Grid */}
                    <div className="flex-1 relative">
                      {/* Hours */}
                      {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => (
                        <div key={hour} className="flex h-32 border-b border-zinc-800/50">
                          <div className="w-24 border-r border-zinc-800 flex justify-center pt-2 text-sm text-zinc-500 font-mono">
                            {hour}:00
                          </div>
                          <div className="flex-1 relative">
                            {/* Grid lines */}
                            <div className="absolute inset-x-0 top-1/2 border-t border-zinc-800/30 dashed"></div>
                          </div>
                        </div>
                      ))}

                      {/* The Event Block - Morph Target */}
                      {/* 9:00 AM is at index 1. Each hour is 128px (h-32). 
                          Start: 8:00 (0px). 9:00 (128px).
                          Duration: 1 hour = 128px. 
                          Left: w-24 (96px) + padding
                      */}
                      <motion.div
                        layoutId="hour-block"
                        className="absolute left-[108px] right-4 bg-blue-600/90 rounded-md border-l-4 border-blue-400 p-6 shadow-lg shadow-blue-900/20 overflow-hidden z-20 cursor-default flex flex-col justify-center"
                        style={{ top: '128px', height: '124px' }} 
                      >
                        <motion.div 
                          layoutId="hour-text"
                          className="text-2xl font-bold text-white mb-2"
                        >
                          Deep Work: AI Building
                        </motion.div>
                        <motion.p 
                          layoutId="hour-subtitle"
                          className="text-base text-blue-100"
                        >
                          9:00 AM - 10:00 AM
                        </motion.p>
                      </motion.div>

                      {/* Dummy Event: Team Sync */}
                      {/* 11:00 AM. 8->0, 9->128, 10->256, 11->384. */}
                      <div 
                        className="absolute left-[108px] right-4 bg-zinc-800/50 rounded-md border-l-4 border-zinc-600 p-4 opacity-60 flex flex-col justify-center"
                        style={{ top: '384px', height: '60px' }} // 30 mins
                      >
                        <div className="text-base font-bold text-zinc-300">Team Sync</div>
                        <div className="text-xs text-zinc-400">11:00 - 11:30</div>
                      </div>

                      {/* Dummy Event: Lunch */}
                      {/* 12:00. 512px. */}
                      <div 
                        className="absolute left-[108px] right-4 bg-green-900/30 rounded-md border-l-4 border-green-500 p-4 opacity-50 flex flex-col justify-center"
                        style={{ top: '512px', height: '124px' }} // 1 hour
                      >
                        <div className="text-lg font-bold text-green-200">Lunch Break</div>
                        <div className="text-sm text-green-300">12:00 PM - 1:00 PM</div>
                      </div>

                      {/* Parallel Events Container: 1:00 PM */}
                      {/* 13:00 (1 PM). 11->384, 12->512, 13->640. */}
                      <div 
                        className="absolute left-[108px] right-4 flex gap-4"
                        style={{ top: '640px', height: '60px' }} // 30 mins
                      >
                        {/* Dummy Event: 1:1 */}
                        <div className="flex-1 bg-purple-900/40 rounded-md border-l-4 border-purple-500 p-4 opacity-70 flex flex-col justify-center">
                          <div className="text-base font-bold text-purple-200">1:1 with Sarah</div>
                          <div className="text-xs text-purple-300">1:00 PM - 1:30 PM</div>
                        </div>
                        
                        {/* Dummy Event: Project Planning */}
                        <div className="flex-1 bg-indigo-900/40 rounded-md border-l-4 border-indigo-500 p-4 opacity-70 flex flex-col justify-center">
                          <div className="text-base font-bold text-indigo-200">Project Planning</div>
                          <div className="text-xs text-indigo-300">1:00 PM - 1:30 PM</div>
                        </div>
                      </div>

                      {/* Dummy Event: Code Review */}
                      {/* 15:00 (3 PM). 13->640, 14->768, 15->896. */}
                      <div 
                        className="absolute left-[108px] right-4 bg-orange-900/40 rounded-md border-l-4 border-orange-500 p-4 opacity-60 flex flex-col justify-center"
                        style={{ top: '896px', height: '124px' }} // 1 hour
                      >
                        <div className="text-lg font-bold text-orange-200">Code Review</div>
                        <div className="text-sm text-orange-300">3:00 PM - 4:00 PM</div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SlideShell>
  );
}
