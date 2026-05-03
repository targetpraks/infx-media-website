"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Billboard {
  x: number; y: number; w: number; h: number;
  dead: boolean; dying: number; maxDying: number;
  glitchPhase: number; flicker: number;
  channel: string;
  content: string;
}

const CHANNELS = ["CTV", "Fox", "CNN", "BBC", "NBC", "ABC", "E!", "MTV", "OWN", "W"];
const CONTENT = ["BUY NOW", "SALE", "AD", "SPONSORED", "PROMO", "BRAND", "PRIME", "LIVE", "BREAKING", "NEWS"];

export default function MediaDeathCanvas() {
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
      const h = 400;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const w = canvas.offsetWidth || container.offsetWidth;
    const h = 400;

    // Create billboards grid
    const billboards: Billboard[] = [];
    const cols = 5;
    const rows = 3;
    const gap = 8;
    const bw = (w - gap * (cols + 1)) / cols;
    const bh = (h - gap * (rows + 1)) / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        billboards.push({
          x: gap + c * (bw + gap),
          y: gap + r * (bh + gap),
          w: bw,
          h: bh,
          dead: false,
          dying: 0,
          maxDying: 60 + Math.random() * 120,
          glitchPhase: Math.random() * 100,
          flicker: Math.random() * 100,
          channel: CHANNELS[Math.floor(Math.random() * CHANNELS.length)],
          content: CONTENT[Math.floor(Math.random() * CONTENT.length)],
        });
      }
    }

    let frame = 0;

    const draw = () => {
      ctx.fillStyle = "rgba(8, 0, 0, 0.15)";
      ctx.fillRect(0, 0, w, h);

      for (const b of billboards) {
        if (!b.dead) {
          b.dying++;
          if (b.dying > b.maxDying) {
            b.dead = true;
            b.dying = b.maxDying;
          }
        }

        b.glitchPhase += 0.02;
        b.flicker += 0.03;

        const deathProgress = b.dying / b.maxDying;
        const aliveProgress = 1 - deathProgress;
        const isGlitching = deathProgress > 0.3 && deathProgress < 0.8 && Math.random() > 0.7;
        const isFlicker = deathProgress > 0.6 && Math.random() > 0.8;

        // Draw billboard frame
        ctx.strokeStyle = b.dead ? "rgba(255,0,51,0.15)" : `rgba(255,0,51,${0.3 + aliveProgress * 0.4})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(b.x, b.y, b.w, b.h);

        if (b.dead) {
          // Dead screen — static / noise
          ctx.fillStyle = `rgba(40, 10, 10, 0.3)`;
          ctx.fillRect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);

          // Occasional spark of life
          if (Math.random() > 0.995) {
            ctx.fillStyle = `rgba(255, 0, 51, ${Math.random() * 0.15})`;
            ctx.fillRect(b.x + 4, b.y + 4, b.w - 8, b.h - 8);
          }

          // Static noise lines
          ctx.fillStyle = "rgba(100, 20, 20, 0.05)";
          for (let i = 0; i < 3; i++) {
            const ly = b.y + Math.random() * b.h;
            ctx.fillRect(b.x, ly, b.w, 1);
          }
        } else if (isFlicker) {
          // Flickering off
          ctx.fillStyle = `rgba(10, 0, 0, ${0.5 + Math.random() * 0.3})`;
          ctx.fillRect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);
        } else {
          // Screen glow that's fading
          const glowAlpha = aliveProgress * 0.2;
          const r = ctx.createRadialGradient(b.x + b.w/2, b.y + b.h/2, 0, b.x + b.w/2, b.y + b.h/2, b.w);
          r.addColorStop(0, `rgba(255, 50, 50, ${glowAlpha})`);
          r.addColorStop(1, `rgba(255, 0, 51, 0)`);
          ctx.fillStyle = r;
          ctx.fillRect(b.x, b.y, b.w, b.h);

          ctx.fillStyle = `rgba(40, 0, 0, ${aliveProgress * 0.6})`;
          ctx.fillRect(b.x + 2, b.y + 2, b.w - 4, b.h - 4);

          // Channel text
          if (!isGlitching && deathProgress < 0.85) {
            ctx.font = `bold ${Math.max(10, b.w * 0.15)}px monospace`;
            ctx.fillStyle = `rgba(255, 0, 51, ${aliveProgress * 0.8})`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(b.channel, b.x + b.w/2, b.y + b.h * 0.3);

            ctx.font = `${Math.max(8, b.w * 0.1)}px monospace`;
            ctx.fillStyle = `rgba(255, 0, 51, ${aliveProgress * 0.5})`;
            ctx.fillText(b.content, b.x + b.w/2, b.y + b.h * 0.6);
          }

          if (isGlitching) {
            // Glitch lines
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
            for (let i = 0; i < 5; i++) {
              const gy = b.y + Math.random() * b.h;
              ctx.fillRect(b.x + Math.random() * b.w, gy, Math.random() * 20, 1);
            }
          }

          // Scan line
          if (aliveProgress > 0.3) {
            const scanY = b.y + ((Date.now() * 0.05 + b.flicker * 10) % b.h);
            ctx.fillStyle = `rgba(255, 0, 51, ${aliveProgress * 0.15})`;
            ctx.fillRect(b.x, scanY, b.w, 1);
          }
        }

        // Death indicator
        if (!b.dead && deathProgress > 0.7) {
          ctx.font = "9px monospace";
          ctx.fillStyle = `rgba(255, 0, 51, ${deathProgress})`;
          ctx.textAlign = "right";
          ctx.fillText("DEAD", b.x + b.w - 4, b.y + b.h - 4);
        }

        if (b.dead) {
          ctx.font = "9px monospace";
          ctx.fillStyle = "rgba(255, 0, 51, 0.3)";
          ctx.textAlign = "right";
          ctx.fillText("OFFLINE", b.x + b.w - 4, b.y + b.h - 4);
        }
      }

      // Global scan line
      const gScan = (frame * 0.3) % h;
      ctx.fillStyle = "rgba(255, 0, 51, 0.03)";
      ctx.fillRect(0, gScan, w, 1);

      // Status readout
      const deadCount = billboards.filter(b => b.dead).length;
      ctx.font = "bold 12px monospace";
      ctx.fillStyle = "rgba(255, 0, 51, 0.4)";
      ctx.textAlign = "left";
      ctx.fillText(`SIGNALS DYING: ${deadCount}/${billboards.length}`, 12, h - 12);

      frame++;
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
      className="relative w-full rounded-lg border border-blood/20 overflow-hidden"
      style={{ background: "#080000" }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "400px" }}
        className="block"
      />
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blood animate-pulse" />
        <span className="text-blood text-xs uppercase tracking-widest font-mono">LIVE MONTIOR</span>
      </div>
    </motion.div>
  );
}
