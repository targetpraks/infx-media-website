"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles streaming upward — data signals
    interface Particle {
      x: number;
      y: number;
      speed: number;
      size: number;
      alpha: number;
      life: number;
      maxLife: number;
      char: string;
    }

    const particles: Particle[] = [];
    const chars = ["0", "1", "▌", "▐", "", "░", "▒", "▓", "█", "◆", "◇", "●", "○", "▪", "▫", "→", "↓", "↔", "↕", "↗", "↘", "↙", "↖"];

    const spawnParticle = () => {
      particles.push({
        x: Math.random() * w,
        y: h + 20,
        speed: 0.5 + Math.random() * 2.5,
        size: 8 + Math.random() * 16,
        alpha: 0,
        life: 0,
        maxLife: 200 + Math.random() * 400,
        char: chars[Math.floor(Math.random() * chars.length)],
      });
    };

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Spawn
      if (frame % 4 === 0) {
        spawnParticle();
        spawnParticle();
      }

      // Draw grid lines — faint
      ctx.strokeStyle = "rgba(204, 255, 0, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.y -= p.speed;

        // Fade in then fade out
        if (p.life < 20) {
          p.alpha = p.life / 20 * 0.35;
        } else if (p.life > p.maxLife - 60) {
          p.alpha = (p.maxLife - p.life) / 60 * 0.35;
        } else {
          p.alpha = 0.35;
        }

        ctx.font = `${p.size}px "Geist Mono", "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(204, 255, 0, ${p.alpha})`;
        ctx.fillText(p.char, p.x, p.y);

        if (p.life >= p.maxLife || p.y < -20) {
          particles.splice(i, 1);
        }
      }

      // Draw horizontal scan line
      const scanY = (frame * 0.5) % h;
      ctx.fillStyle = "rgba(204, 255, 0, 0.03)";
      ctx.fillRect(0, scanY, w, 1);

      frame++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.4 }}
    />
  );
}
