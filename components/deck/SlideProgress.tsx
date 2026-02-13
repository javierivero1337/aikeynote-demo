import React from "react";

interface SlideProgressProps {
  current: number;
  total: number;
}

export function SlideProgress({ current, total }: SlideProgressProps) {
  return (
    <div className="absolute bottom-10 left-10 text-zinc-500 font-mono text-sm tracking-widest z-50">
      {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </div>
  );
}
