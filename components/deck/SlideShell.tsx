import React from "react";
import { cn } from "@/lib/utils";

interface SlideShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function SlideShell({ children, className, contentClassName, ...props }: SlideShellProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center p-8 md:p-16 lg:p-24",
        "bg-gradient-to-br from-zinc-950 to-black",
        className
      )}
      {...props}
    >
      <div className={cn("w-full max-w-6xl mx-auto flex flex-col gap-8", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
