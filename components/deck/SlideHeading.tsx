import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SlideHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large" | "xl";
}

export function SlideHeading({ children, className, size = "default" }: SlideHeadingProps) {
  const sizeClasses = {
    default: "text-4xl md:text-5xl lg:text-6xl",
    large: "text-5xl md:text-6xl lg:text-7xl",
    xl: "text-6xl md:text-7xl lg:text-8xl",
  };

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className={cn(
        "font-bold tracking-tight text-white leading-[1.1]",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </motion.h1>
  );
}
