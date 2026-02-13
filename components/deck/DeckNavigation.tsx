import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeckNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  canNext: boolean;
  canPrev: boolean;
}

export function DeckNavigation({ onNext, onPrev, canNext, canPrev }: DeckNavigationProps) {
  return (
    <div className="absolute bottom-8 right-8 flex gap-4 z-50">
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className={cn(
          "p-2 rounded-full transition-all duration-300",
          "hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed",
          "text-white/70 hover:text-white"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className={cn(
          "p-2 rounded-full transition-all duration-300",
          "hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed",
          "text-white/70 hover:text-white"
        )}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
