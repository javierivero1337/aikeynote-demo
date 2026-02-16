import React from "react";

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center pointer-events-none z-50">
        <span className="text-xs text-white/60 font-mono tracking-widest uppercase">
          Collective Academy 2026
        </span>
      </div>
    </>
  );
}
