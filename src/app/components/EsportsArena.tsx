"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Spectator {
  x: number; y: number;
  color: string;
  brightness: number;
  pulseSpeed: number;
  pulsePhase: number;
  size: number;
  active: boolean;
}

export default function EsportsArena() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = containerRef.current;
    if (!container) return;

    let animId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = container.offsetWidth;
      const h = 350;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const w = canvas.offsetWidth || container.offsetWidth;
    const h = 350;

    // Create a curved arena crowd
    const spectators: Spectator[] = [];
    const rows = 12;
    const cols = 30;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const t = c / (cols - 1); // 0 to 1 across
        const x = w * 0.05 + t * w * 0.9;
        const baseY = h * 0.3 + r * 20;
        const y = baseY + Math.sin(t * Math.PI) * 30;

        const colorRand = Math.random();
        let color: string;
        if (colorRand < 0.15) color = "rgba(204, 255, 0"; // lime
        else if (colorRand < 0.4) color = "rgba(0, 229, 204"; // cyan
        else if (colorRand < 0.55) color = "rgba(255, 0, 51"; // blood
        else color = "rgba(255, 255, 255"; // white

        spectators.push({
          x, y,
          color,
          brightness: 0.1 + Math.random() * 0.6,
          pulseSpeed: 0.02 + Math.random() * 0.05,
          pulsePhase: Math.random() * Math.PI * 2,
          size: 2 + Math.random() * 3,
          active: Math.random() > 0.3,
        });
      }
    }

    // Stage lights
    const stageLights = [
      { x: w * 0.3, y: h * 0.6, color: "#CCFF00", active: true },
      { x: w * 0.5, y: h * 0.55, color: "#00E5CC", active: true },
      { x: w * 0.7, y: h * 0.6, color: "#CCFF00", active: true },
    ];

    const draw = () => {
      // Dark fade
      ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
      ctx.fillRect(0, 0, w, h);

      // Draw arena outline (subtle)
      ctx.strokeStyle = "rgba(0, 229, 204, 0.05)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h);
      ctx.quadraticCurveTo(w * 0.5, h * 0.5, w * 0.9, h);
      ctx.stroke();

      // Draw spectators
      for (const s of spectators) {
        s.pulsePhase += s.pulseSpeed;
        const pulse = Math.sin(s.pulsePhase) * 0.5 + 0.5;
        const alpha = s.active ? s.brightness + pulse * 0.3 : s.brightness * 0.1;

        if (s.active) {
          const glowSize = s.size * 3;
          const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowSize);
          gradient.addColorStop(0, `${s.color}, ${alpha * 0.15})`);
          gradient.addColorStop(1, `${s.color}, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(s.x, s.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `${s.color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw stage lights with beams
      for (const light of stageLights) {
        if (Math.random() > 0.98) light.active = !light.active;
        if (!light.active) continue;

        const beamBase = Math.sin(Date.now() * 0.001) * 0.3 + 0.7;

        // Light beam
        const beamGrad = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 120);
        beamGrad.addColorStop(0, `${light.color === "#CCFF00" ? "rgba(204,255,0" : "rgba(0,229,204"}, 0.1)`);
        beamGrad.addColorStop(1, `${light.color === "#CCFF00" ? "rgba(204,255,0" : "rgba(0,229,204"}, 0)`);
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.arc(light.x, light.y, 120, 0, Math.PI * 2);
        ctx.fill();

        // Beam lines
        ctx.strokeStyle = `${light.color === "#CCFF00" ? "rgba(204,255,0" : "rgba(0,229,204"}, ${0.06 * beamBase})`;
        ctx.lineWidth = 1;
        for (let a = 0; a < 3; a++) {
          const angle = (Math.PI * 0.15) + a * 0.3 + Math.sin(Date.now() * 0.002) * 0.1;
          ctx.beginPath();
          ctx.moveTo(light.x, light.y);
          ctx.lineTo(light.x + Math.cos(angle) * 200, light.y + Math.sin(angle) * 100);
          ctx.stroke();
        }

        // Light source
        ctx.fillStyle = light.color;
        ctx.globalAlpha = 0.8 * beamBase;
        ctx.beginPath();
        ctx.arc(light.x, light.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Scan lines
      ctx.fillStyle = "rgba(0, 229, 204, 0.03)";
      for (let i = 0; i < 5; i++) {
        const ly = (Date.now() * 0.05 + i * 70) % h;
        ctx.fillRect(0, ly, w, 1);
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="relative w-full rounded-lg border border-cyan/10 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "350px" }}
        className="block"
      />

      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
        <span className="text-cyan text-xs uppercase tracking-widest font-mono">LIVE ARENA FEED</span>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <span className="text-text-tertiary text-xs font-mono">{new Date().toLocaleTimeString()}</span>
      </div>
    </motion.div>
  );
}
