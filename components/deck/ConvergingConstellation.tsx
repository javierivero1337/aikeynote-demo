"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseAlpha: number;
  alpha: number;
  size: number;
  hue: number; // 0 = blue, 1 = purple blend
  alive: boolean;
}

/**
 * Canvas-based particle constellation that converges toward center once.
 * Particles start scattered, drift slowly inward, fade out near the core,
 * and stay settled — no looping.
 */
export function ConvergingConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const stoppedRef = useRef(false);

  const CONNECTION_DIST = 130;
  const PARTICLE_COUNT = 55;
  const GRAVITY = 0.000035; // very slow, cinematic pull
  const FADE_RADIUS = 80; // particles start fading inside this radius
  const DEAD_RADIUS = 25; // fully gone at this radius

  const createParticle = useCallback(
    (w: number, h: number): Particle => {
      // Scatter across the full canvas, biased toward outer areas
      const angle = Math.random() * Math.PI * 2;
      const maxR = Math.min(w, h) * 0.5;
      // Bias toward outer half
      const r = maxR * (0.3 + Math.random() * 0.7);
      const cx = w * 0.5;
      const cy = h * 0.5;

      return {
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        baseAlpha: Math.random() * 0.4 + 0.3,
        alpha: 0, // fade in from 0
        size: Math.random() * 1.8 + 0.8,
        hue: Math.random(),
        alive: true,
      };
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isRunning = false;
    let isVisible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const rect = canvas.getBoundingClientRect();
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
      createParticle(rect.width, rect.height)
    );
    stoppedRef.current = false;

    let frame = 0;

    const draw = () => {
      if (!isRunning || !isVisible || document.hidden || stoppedRef.current) return;

      const r = canvas.getBoundingClientRect();
      const w = r.width;
      const h = r.height;
      const cx = w * 0.5;
      const cy = h * 0.5;

      ctx.clearRect(0, 0, w, h);
      frame++;

      const particles = particlesRef.current;
      let aliveCount = 0;

      // Update particles
      for (const p of particles) {
        if (!p.alive) continue;
        aliveCount++;

        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Slow gravity pull
        if (dist > 1) {
          p.vx += (dx / dist) * GRAVITY * dist;
          p.vy += (dy / dist) * GRAVITY * dist;
        }

        // Strong damping for slow, floaty movement
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;

        // Fade in during the first ~2 seconds (120 frames)
        const fadeInTarget = p.baseAlpha;
        if (frame < 120) {
          p.alpha = Math.min(p.alpha + fadeInTarget / 120, fadeInTarget);
        }

        // Fade out as particle approaches center
        if (dist < FADE_RADIUS) {
          const t = Math.max(0, (dist - DEAD_RADIUS) / (FADE_RADIUS - DEAD_RADIUS));
          p.alpha = Math.min(p.alpha, fadeInTarget * t);
        }

        // Kill particle when it reaches the dead zone
        if (dist < DEAD_RADIUS) {
          p.alive = false;
          p.alpha = 0;
        }
      }

      // Once all particles are gone, stop the loop
      if (aliveCount === 0) {
        stoppedRef.current = true;
        return;
      }

      // Draw connections (only between alive particles)
      const alive = particles.filter((p) => p.alive && p.alpha > 0.02);
      for (let i = 0; i < alive.length; i++) {
        for (let j = i + 1; j < alive.length; j++) {
          const a = alive[i];
          const b = alive[j];
          const ddx = a.x - b.x;
          const ddy = a.y - b.y;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);

          if (dist < CONNECTION_DIST) {
            const lineAlpha =
              (1 - dist / CONNECTION_DIST) *
              0.12 *
              Math.min(a.alpha, b.alpha) / 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(120, 140, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of alive) {
        const alpha = p.alpha;

        // Blend between blue (96,165,250) and purple (167,139,250)
        const red = Math.round(96 + p.hue * 71);
        const green = Math.round(165 - p.hue * 26);
        const blue = 250;

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        ctx.fill();

        // Subtle glow
        if (alpha > 0.25) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha * 0.1})`;
          ctx.fill();
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const start = () => {
      if (isRunning || !isVisible || document.hidden || stoppedRef.current) return;
      isRunning = true;
      animRef.current = requestAnimationFrame(draw);
    };

    const stop = () => {
      isRunning = false;
      cancelAnimationFrame(animRef.current);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const observer = new IntersectionObserver(
      entries => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible) start();
        else stop();
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibility);
    start();

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("resize", resize);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
