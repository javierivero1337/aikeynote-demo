"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface Dot {
  lat: number;
  lng: number;
  opacity: number;
  fadeIn: boolean;
  speed: number;
  size: number;
}

export function SimpleGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const rotationRef = useRef(0);
  const dotsRef = useRef<Dot[]>([]);

  // Project a 3D point on a sphere to 2D
  const project = useCallback(
    (
      lat: number,
      lng: number,
      radius: number,
      cx: number,
      cy: number,
      rotation: number
    ): { x: number; y: number; z: number } => {
      const phi = (lat * Math.PI) / 180;
      const theta = ((lng + rotation) * Math.PI) / 180;

      const x = radius * Math.cos(phi) * Math.sin(theta);
      const y = -radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.cos(theta);

      return { x: cx + x, y: cy + y, z };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Seed initial dots on the globe surface
    const createDot = (): Dot => ({
      lat: Math.random() * 160 - 80, // -80 to 80
      lng: Math.random() * 360,
      opacity: 0,
      fadeIn: true,
      speed: Math.random() * 0.004 + 0.002,
      size: Math.random() * 2 + 1.5,
    });

    dotsRef.current = Array.from({ length: 80 }, () => {
      const dot = createDot();
      dot.opacity = Math.random(); // start at random opacity
      return dot;
    });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const radius = Math.min(w, h) * 0.35;

      rotationRef.current += 0.15;

      // --- Draw wireframe (meridians + parallels) ---
      ctx.lineWidth = 0.5;

      // Parallels (latitude lines)
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let started = false;
        for (let lng = 0; lng <= 360; lng += 3) {
          const p = project(lat, lng, radius, cx, cy, rotationRef.current);
          if (p.z < 0) {
            started = false;
            continue; // Only draw front-facing
          }
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = "rgba(96, 165, 250, 0.25)";
        ctx.stroke();
      }

      // Meridians (longitude lines)
      for (let lng = 0; lng < 360; lng += 30) {
        ctx.beginPath();
        let started = false;
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lng, radius, cx, cy, rotationRef.current);
          if (p.z < 0) {
            started = false;
            continue;
          }
          if (!started) {
            ctx.moveTo(p.x, p.y);
            started = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = "rgba(96, 165, 250, 0.25)";
        ctx.stroke();
      }

      // Globe outline circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(96, 165, 250, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // --- Draw dots ---
      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Animate opacity
        if (dot.fadeIn) {
          dot.opacity += dot.speed;
          if (dot.opacity >= 1) {
            dot.opacity = 1;
            dot.fadeIn = false;
          }
        } else {
          dot.opacity -= dot.speed;
          if (dot.opacity <= 0) {
            // Respawn at a new random position
            dots[i] = createDot();
            continue;
          }
        }

        const p = project(
          dot.lat,
          dot.lng,
          radius,
          cx,
          cy,
          rotationRef.current
        );

        // Only draw front-facing dots
        if (p.z < 0) continue;

        // Depth-based alpha: dots closer to edge are dimmer
        const depthAlpha = Math.max(0, p.z / radius);

        ctx.beginPath();
        ctx.arc(p.x, p.y, dot.size, 0, Math.PI * 2);
        const alpha = dot.opacity * depthAlpha;
        ctx.fillStyle = `rgba(96, 165, 250, ${alpha})`;
        ctx.fill();

        // Glow effect for brighter dots
        if (alpha > 0.3) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, dot.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${alpha * 0.2})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [project]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
