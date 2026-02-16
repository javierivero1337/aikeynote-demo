"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DeckNavigation } from "./DeckNavigation";
import { SlideProgress } from "./SlideProgress";
import type { DeckVariant } from "./types";

interface DeckContainerProps {
  slides: React.ComponentType<any>[];
  variant?: DeckVariant;
}

export function DeckContainer({ slides, variant = "default" }: DeckContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-full w-full"
        >
          {CurrentSlideComponent && (
            <CurrentSlideComponent isActive={true} variant={variant} />
          )}
        </motion.div>
      </AnimatePresence>

      <DeckNavigation
        onNext={nextSlide}
        onPrev={prevSlide}
        canNext={currentSlide < totalSlides - 1}
        canPrev={currentSlide > 0}
      />
      
      <SlideProgress current={currentSlide + 1} total={totalSlides} />
    </div>
  );
}
