import React, { useState, useEffect } from "react";
import { SlideShell } from "../deck/SlideShell";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

const MOCK_REPORT = {
  summary: "Análisis de 142 casos de soporte del 7-14 Feb.",
  topIssue: "Fallo entrega SMS 2FA",
  impact: "Alto (CSAT prom 1.2)",
  rootCause: "Latencia de proveedor en región US-East.",
  recommendation: "Implementar fallback a WhatsApp para 2FA.",
  chartData: [
    { day: "L", value: 12 },
    { day: "M", value: 18 },
    { day: "X", value: 45 },
    { day: "J", value: 38 },
    { day: "V", value: 29 },
  ]
};

export function Slide21_LinkbertoDemo() {
  const [step, setStep] = useState(0);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000), // User message appears
      setTimeout(() => setStep(2), 2500), // Agent thinking
      setTimeout(() => setStep(3), 4500), // Agent querying
      setTimeout(() => setStep(4), 6500), // Report generated
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <SlideShell>
      <div className="flex h-full w-full max-w-7xl mx-auto gap-6 p-6 items-center justify-center">
        
        {/* Left: Chat Interface */}
        <div className="w-full max-w-md h-[600px] bg-zinc-950 border border-zinc-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">
          <div className="h-12 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            <span className="ml-auto text-xs text-zinc-500 font-mono">Linkberto v2.1</span>
          </div>

          <div className="flex-1 p-4 space-y-4 overflow-y-auto font-mono text-sm">
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  key="user-query"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-end"
                >
                  <div className="bg-zinc-800 text-zinc-200 px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                    Analiza los problemas de login de la semana pasada. ¿Por qué baja el CSAT?
                  </div>
                </motion.div>
              )}

              {step >= 2 && step < 4 && (
                <motion.div
                  key="agent-thinking"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex justify-start items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-zinc-500 text-xs animate-pulse">
                    {step === 2 ? "Entendiendo intención..." : "Consultando mongo.sfdccases..."}
                  </span>
                </motion.div>
              )}

              {step >= 4 && (
                <motion.div
                  key="agent-response"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-blue-900/20 border border-blue-500/30 text-blue-100 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%]">
                    <p className="mb-2">He analizado 142 casos. Aquí está el reporte.</p>
                    <div className="flex items-center gap-2 text-xs text-blue-400 border-t border-blue-500/30 pt-2 mt-2">
                      <span>📄 Reporte_Problemas_Login_Feb14.pdf</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-zinc-800 bg-zinc-900/30">
            <div className="h-10 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center px-3 text-zinc-600 text-sm">
              Escribe un mensaje...
            </div>
          </div>
        </div>

        {/* Right: The Report (Appears when step >= 4) */}
        <AnimatePresence>
          {step >= 4 && !isSent && (
            <motion.div
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ 
                opacity: 0, 
                scale: 0.2, 
                x: 300, 
                y: -300, 
                rotate: 15,
                transition: { duration: 0.6, ease: "backIn" } 
              }}
              transition={{ duration: 0.8, type: "spring" }}
              className="hidden md:flex flex-1 h-[500px] bg-white text-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.15)] flex-col"
            >
              <div className="h-14 bg-zinc-100 border-b border-zinc-200 flex items-center px-6 justify-between">
                <span className="font-bold tracking-tight text-lg">Reporte de Análisis</span>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-zinc-400">GENERADO POR LINKBERTO</span>
                  <button 
                    onClick={() => setIsSent(true)}
                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors shadow-lg hover:shadow-blue-500/25"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-8 space-y-6 font-sans overflow-y-auto flex-1">
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Resumen</h4>
                  <p className="text-xl font-medium leading-snug">{MOCK_REPORT.summary}</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <h4 className="text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Problema Principal</h4>
                    <p className="text-lg font-bold text-red-900">{MOCK_REPORT.topIssue}</p>
                    <p className="text-sm text-red-700 mt-1">{MOCK_REPORT.impact}</p>
                  </div>
                  
                  <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Causa Raíz</h4>
                    <p className="text-sm text-zinc-700">{MOCK_REPORT.rootCause}</p>
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="w-full px-2">
                  <div className="h-24 flex items-end justify-between gap-2">
                    {MOCK_REPORT.chartData.map((d, i) => (
                      <div key={d.day} className="w-full flex flex-col items-center gap-2 h-full justify-end">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: d.value * 1.5 }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                          className={`w-full rounded-t-sm ${
                            d.value > 30 ? "bg-red-400" : "bg-blue-200"
                          }`}
                        />
                        <span className="text-[10px] text-zinc-400 font-mono">{d.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-100">
                   <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Análisis Detallado</h4>
                   <div className="space-y-4 text-sm text-zinc-600 leading-relaxed">
                     <p>
                       <strong className="text-zinc-900">Observación:</strong> Se ha detectado una latencia crítica en la entrega de SMS (OTP) a través del proveedor principal en la región US-East-1. El tiempo medio de entrega ha aumentado de 2s a 45s en horas pico (09:00 - 11:00 EST).
                     </p>
                     <p>
                       <strong className="text-zinc-900">Impacto en Usuario:</strong> El retraso provoca que los usuarios soliciten múltiples códigos consecutivos, saturando la cola de mensajes y bloqueando sus cuentas temporalmente por &quot;exceso de intentos&quot;. Esto explica el pico de tickets etiquetados como &quot;Login Blocked&quot;.
                     </p>
                     <p>
                       <strong className="text-zinc-900">Evidencia Técnica:</strong> Los logs de <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">mongo.sfdcemailmessages</code> muestran un incremento del 300% en eventos <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-800">DeliveryDelay</code> correlacionados con las bajas calificaciones de CSAT (1-2 estrellas).
                     </p>
                   </div>
                </div>

                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Recomendación</h4>
                  <p className="text-lg font-semibold text-blue-900">
                    {MOCK_REPORT.recommendation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SlideShell>
  );
}
