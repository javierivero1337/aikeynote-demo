import React, { useState } from "react";
import { SlideShell } from "../deck/SlideShell";
import { SlideHeading } from "../deck/SlideHeading";
import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "../GlitchText";
import { ArrowUpRight } from "lucide-react";

const AnthropicLogo = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
    <title>Anthropic</title>
    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z" />
  </svg>
);

const OpenAILogo = () => (
  <svg fill="currentColor" viewBox="0 0 256 260" className="w-8 h-8">
    <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
  </svg>
);

const CursorLogo = () => (
  <svg viewBox="0 0 466.73 532.09" className="w-8 h-8">
    <path fill="currentColor" d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z" />
  </svg>
);

type ComparisonItem = {
  name: string;
  value: number;
  displayValue: string;
  detail: string;
  years: number;
};

type CompanyData = {
  id: string;
  name: string;
  logo?: React.ReactNode;
  description: string;
  yearsToReach: string;
  stats: { label: string; value: string }[];
  chartData: { label: string; value: number; displayValue: string; color: string }[];
  scaleMax: number;
  comparisons: ComparisonItem[];
};

const DATA: CompanyData[] = [
  {
    id: "anthropic",
    name: "Anthropic",
    logo: <AnthropicLogo />,
    description: "Crecimiento de ingresos anuales (Run-rate)",
    yearsToReach: "~2 años",
    stats: [
      { label: "Crecimiento Anual", value: "10X+" },
      { label: "Ingresos Hoy", value: "$14B" },
    ],
    scaleMax: 15,
    chartData: [
      { label: "Jan '23", value: 0.05, displayValue: "$0", color: "bg-zinc-700" },
      { label: "Jan '24", value: 0.1, displayValue: "$100M+", color: "bg-zinc-600" },
      { label: "Jan '25", value: 1, displayValue: "$1B+", color: "bg-zinc-500" },
      { label: "Hoy", value: 14, displayValue: "$14B", color: "bg-emerald-500" },
    ],
    comparisons: [
      { name: "Hilton Hotels", value: 11, displayValue: "$11B", detail: "Fundado en 1919", years: 105 },
      { name: "Spotify", value: 15, displayValue: "$15B", detail: "Fundado en 2006", years: 20 },
    ],
  },
  {
    id: "cursor",
    name: "Cursor",
    logo: <CursorLogo />,
    description: "De editor emergente a unicornio en 2 años",
    yearsToReach: "~2 años",
    stats: [
      { label: "Usuarios", value: "2M+" },
      { label: "Valoración", value: "$29.3B" },
    ],
    scaleMax: 1.2,
    chartData: [
      { label: "Early '23", value: 0.05, displayValue: "Nace", color: "bg-zinc-700" },
      { label: "Late '25", value: 1, displayValue: "$1B ARR", color: "bg-blue-500" },
    ],
    comparisons: [
      { name: "The Economist", value: 0.4, displayValue: "$400M", detail: "Fundado en 1843", years: 183 },
      { name: "FC Barcelona", value: 1, displayValue: "$1B", detail: "Fundado en 1899", years: 127 },
    ],
  },
  {
    id: "openai",
    name: "OpenAI",
    logo: <OpenAILogo />,
    description: "El motor detrás de ChatGPT",
    yearsToReach: "~3 años",
    stats: [
      { label: "Usuarios ChatGPT", value: "400M+" },
      { label: "Valoración", value: "$500B" },
    ],
    scaleMax: 22,
    chartData: [
      { label: "2023", value: 2, displayValue: "$2B ARR", color: "bg-zinc-600" },
      { label: "2026 (Est)", value: 20, displayValue: "$20B+ ARR", color: "bg-purple-500" },
    ],
    comparisons: [
      { name: "Nintendo", value: 12, displayValue: "$12B", detail: "Fundado en 1889", years: 137 },
      { name: "La NFL", value: 20, displayValue: "$20B", detail: "Fundada en 1920", years: 106 },
    ],
  },
];

export function Slide10_Urgency() {
  const [activeId, setActiveId] = useState("anthropic");
  const activeData = DATA.find((d) => d.id === activeId) || DATA[0];

  return (
    <SlideShell className="relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,20,30,0.8),#000)] z-0" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-12">
        <div className="mb-12">
          <SlideHeading size="xl">
            <GlitchText speed={0.6}>VELOCIDAD</GlitchText>
          </SlideHeading>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-zinc-400 mt-4 font-light max-w-2xl"
          >
            Lo que a internet le tomó una década, a la IA le tomó meses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-[500px]">
          {/* Left Column: Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`group relative p-6 text-left rounded-xl transition-all duration-300 border ${
                  activeId === item.id
                    ? "bg-zinc-900/80 border-zinc-700 shadow-lg shadow-black/50"
                    : "bg-transparent border-transparent hover:bg-zinc-900/30 hover:border-zinc-800"
                }`}
              >
                {activeId === item.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-l-xl"
                  />
                )}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.logo && (
                      <div className={activeId === item.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}>
                        {item.logo}
                      </div>
                    )}
                    <span className={`text-2xl font-bold tracking-tight ${activeId === item.id ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`}>
                      {item.name}
                    </span>
                  </div>
                  {activeId === item.id && <ArrowUpRight className="text-white w-6 h-6" />}
                </div>
                <p className={`mt-2 text-sm ${activeId === item.id ? "text-zinc-400" : "text-zinc-600"}`}>
                  {item.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Chart */}
          <div className="lg:col-span-8 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl p-8 relative backdrop-blur-sm flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-1 flex flex-col"
              >
                {/* Header Stats */}
                <div className="flex flex-wrap gap-8 mb-12">
                  {activeData.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">{stat.label}</div>
                      <div className="text-4xl md:text-5xl font-bold text-white font-mono">{stat.value}</div>
                    </div>
                  ))}
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-wider mb-1">Tiempo</div>
                    <div className="text-4xl md:text-5xl font-bold text-emerald-400 font-mono">{activeData.yearsToReach}</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex-1 flex items-end gap-3 md:gap-6 min-h-[200px] border-b border-zinc-800 pb-4">
                  {/* Main data bars */}
                  {activeData.chartData.map((bar, idx) => {
                    const heightPercent = (bar.value / activeData.scaleMax) * 100;
                    
                    return (
                      <div key={idx} className="flex-1 flex flex-col justify-end group h-full">
                        <div className="flex flex-col justify-end items-center gap-3 w-full h-full">
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                            className="text-white font-bold text-sm md:text-lg"
                          >
                            {bar.displayValue}
                          </motion.span>
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.max(heightPercent, 2)}%` }}
                            transition={{ duration: 1, ease: "circOut", delay: idx * 0.1 }}
                            className={`w-full rounded-t-lg ${bar.color} opacity-90 group-hover:opacity-100 transition-opacity relative min-h-[4px]`}
                          >
                             <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
                          </motion.div>
                        </div>
                        <span className="text-zinc-500 text-xs md:text-sm text-center mt-4 font-mono">
                          {bar.label}
                        </span>
                      </div>
                    );
                  })}

                  {/* Divider */}
                  <div className="flex flex-col items-center justify-end h-full pb-8">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="w-px h-3/4 border-l border-dashed border-zinc-700"
                    />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-[10px] text-zinc-600 uppercase tracking-widest mt-2 whitespace-nowrap"
                      style={{ writingMode: "vertical-lr" }}
                    >
                      vs tradicional
                    </motion.span>
                  </div>

                  {/* Comparison bars */}
                  {activeData.comparisons.map((comp, idx) => {
                    const heightPercent = (comp.value / activeData.scaleMax) * 100;
                    const delay = 0.8 + idx * 0.15;

                    return (
                      <div key={`comp-${idx}`} className="flex-1 flex flex-col justify-end group h-full max-w-[120px]">
                        <div className="flex flex-col justify-end items-center gap-3 w-full h-full">
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay }}
                            className="flex flex-col items-center gap-0.5"
                          >
                            <span className="text-amber-400/90 font-bold text-sm md:text-lg">
                              {comp.displayValue}
                            </span>
                          </motion.div>
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.max(heightPercent, 2)}%` }}
                            transition={{ duration: 1, ease: "circOut", delay }}
                            className="w-full rounded-t-lg border-2 border-dashed border-amber-500/40 bg-amber-500/10 relative min-h-[4px] flex items-center justify-center"
                          >
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: delay + 0.5 }}
                              className="text-amber-400/70 text-xs md:text-sm font-bold whitespace-nowrap"
                            >
                              {comp.years} años
                            </motion.span>
                          </motion.div>
                        </div>
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: delay + 0.2 }}
                          className="text-center mt-4"
                        >
                          <span className="text-amber-400/80 text-xs md:text-sm font-mono block">
                            {comp.name}
                          </span>
                          <span className="text-zinc-600 text-[10px] md:text-xs block mt-0.5">
                            {comp.detail}
                          </span>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
