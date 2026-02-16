import React from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion } from "framer-motion";
import Dither from "../Dither";
import BlurText from "../BlurText";

const highlightVariants = {
  hidden: {
    color: "#ffffff",
    backgroundSize: "0% 100%",
  },
  visible: (i: number) => ({
    color: "#60a5fa",
    backgroundSize: "100% 100%",
    transition: { delay: 2.2 + i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

function Highlight({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.span
      custom={index}
      initial="hidden"
      animate="visible"
      variants={highlightVariants}
      style={{
        backgroundImage: "linear-gradient(to right, rgba(59,130,246,0.15), rgba(59,130,246,0.08))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 80%",
        borderRadius: "2px",
        padding: "0 4px",
        margin: "0 -4px",
      }}
    >
      {children}
    </motion.span>
  );
}

function OpenAILogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 260"
      fill="currentColor"
    >
      <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
    </svg>
  );
}

export function Slide12_Secret() {
  return (
    <SlideShell className="relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <Dither 
          waveColor={[0.1, 0.1, 0.1]} 
          disableAnimation={false} 
          waveSpeed={0.02} 
          enableMouseInteraction={false}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center px-4">
        <SlideHeading size="xl" className="mb-8">
          El Secreto <span className="text-zinc-600">Técnico</span>
        </SlideHeading>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-3xl text-zinc-400 font-light mb-16 max-w-3xl"
        >
          <BlurText 
            text="La IA ahora está construyendo a la siguiente IA." 
            delay={50} 
            animateBy="words" 
            direction="bottom"
            className="inline-block"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
          className="relative p-8 md:p-12 border-l-2 border-blue-500/50 bg-zinc-900/30 backdrop-blur-sm"
        >
          <p className="text-3xl md:text-5xl font-serif italic text-white leading-tight mb-6">
            "The <Highlight index={0}>model</Highlight> was{" "}
            <Highlight index={1}>instrumental</Highlight> in its own{" "}
            <Highlight index={2}>creation</Highlight>{" "}
            —our team was <Highlight index={3}>blown away</Highlight> by how much{" "}
            <Highlight index={4}>Codex</Highlight> was able to{" "}
            <Highlight index={5}>accelerate its own development</Highlight>."
          </p>
          <div className="flex items-center justify-end gap-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <OpenAILogo className="w-5 h-5 text-blue-400/70" />
            </motion.div>
            <p className="text-sm md:text-base text-blue-400 font-mono tracking-widest uppercase">
              GPT-5.3 Technical Paper
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
}
