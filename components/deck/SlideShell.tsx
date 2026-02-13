import React from "react";
import { cn } from "@/lib/utils";

interface SlideShellProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideShell({ children, className }: SlideShellProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center p-8 md:p-16 lg:p-24",
        "bg-gradient-to-br from-zinc-950 to-black",
        className
      )}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        {children}
      </div>
    </div>
  );
}
