"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface InfectedCell {
  x: number;
  y: number;
  progress: number;
  maxProgress: number;
  speed: number;
  flicker: number;
  brandColor: string;
}

export default function BrandInfectionSimulator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [active] = useState(true);
  const [infectedCount, setInfectedCount] = useState(0);
  const [totalCells] = useState(400); // 20x20 grid
  const cellsRef = useRef<InfectedCell[]>([]);
  const gridRef = useRef<{ infected: boolean; color: string }[]>([]);
  const animRef = useRef<number>(0);

  const initGrid = useCallback((cols: number, rows: number) => {
    const grid: { infected: boolean; color: string }[] = [];
    for (let i = 0; i < cols * rows; i++) {
      grid.push({ infected: false, color: "#1a1a1a" });
    }
    gridRef.current = grid;
    cellsRef.current = [];
    setInfectedCount(0);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = containerRef.current;
    if (!container) return;

    let w = container.offsetWidth;
    const h = 500;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = container.offsetWidth;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const cols = 20;
    const rows = 10;
    const cellSize = (w - 40) / cols;
    const gap = 2;
    const offsetX = 20;
    const offsetY = (h - rows * cellSize) / 2;

    initGrid(cols, rows);

    const draw = () => {
      if (!active) return;
      ctx.clearRect(0, 0, w, h);
      const grid = gridRef.current;
      const cells = cellsRef.current;

      // Draw grid
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const cell = grid[idx];
          const cx = offsetX + x * cellSize;
          const cy = offsetY + y * cellSize;

          if (cell.infected) {
            // Infected cell — lime glow with brand pulse
            const pulse = Math.sin(Date.now() * 0.003 + x * 0.5 + y * 0.3) * 0.3 + 0.7;
            const gradient = ctx.createRadialGradient(
              cx + cellSize / 2, cy + cellSize / 2, 0,
              cx + cellSize / 2, cy + cellSize / 2, cellSize
            );
            gradient.addColorStop(0, `rgba(204, 255, 0, ${pulse})`);
            gradient.addColorStop(0.7, `rgba(153, 204, 0, ${pulse * 0.5})`);
            gradient.addColorStop(1, `rgba(204, 255, 0, 0)`);
            ctx.fillStyle = gradient;
            ctx.fillRect(cx - gap, cy - gap, cellSize + gap * 2, cellSize + gap * 2);

            // Inner highlight
            ctx.fillStyle = `rgba(255, 255, 255, ${pulse * 0.2})`;
            ctx.fillRect(cx + 4, cy + 4, cellSize - 8, cellSize - 8);
          } else {
            // Dead cell — dark gray, sometimes flicker dying
            const flicker = Math.random() < 0.001 ? 0.15 : 0.05;
            ctx.fillStyle = `rgba(40, 40, 40, ${flicker})`;
            ctx.fillRect(cx, cy, cellSize - gap, cellSize - gap);
          }
        }
      }

      // Propagate infection
      if (Math.random() < 0.15 && cells.length < totalCells) {
        // Find a seed point (random or adjacent to infected)
        let seedX: number, seedY: number;
        if (cells.length > 0 && Math.random() < 0.7) {
          // Spread from existing
          const parent = cells[Math.floor(Math.random() * cells.length)];
          const offsets = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[-1,1],[1,-1]];
          const off = offsets[Math.floor(Math.random() * offsets.length)];
          seedX = Math.floor(parent.x) + off[0];
          seedY = Math.floor(parent.y) + off[1];
        } else {
          // New seed
          seedX = Math.floor(Math.random() * cols);
          seedY = Math.floor(Math.random() * rows);
        }

        if (seedX >= 0 && seedX < cols && seedY >= 0 && seedY < rows) {
          const idx = seedY * cols + seedX;
          if (!grid[idx].infected) {
            grid[idx].infected = true;
            grid[idx].color = "#CCFF00";
            cells.push({
              x: seedX, y: seedY,
              progress: 0, maxProgress: 1,
              speed: 0.02 + Math.random() * 0.03,
              flicker: Math.random() * 100,
              brandColor: "#CCFF00",
            });
            setInfectedCount(cells.length);
          }
        }
      }

      // Draw scan line
      const scanY = (Date.now() * 0.05) % h;
      ctx.fillStyle = "rgba(204, 255, 0, 0.03)";
      ctx.fillRect(0, scanY, w, 1);

      // Draw progress counter
      if (cells.length > 0) {
        const pct = Math.round((cells.length / totalCells) * 100);
        ctx.font = 'bold 14px monospace';
        ctx.fillStyle = "rgba(204, 255, 0, 0.6)";
        ctx.fillText(`CONVERSION: ${pct}%`, 24, h - 20);
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [isInView, active, totalCells, initGrid]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const w = rect.width;
      const h = 500;
      const cols = 20;
      const rows = 10;
      const cellSize = (w - 40) / cols;
      const offsetX = 20;
      const offsetY = (h - rows * cellSize) / 2;

      const gx = Math.floor((x - offsetX) / cellSize);
      const gy = Math.floor((y - offsetY) / cellSize);

      if (gx >= 0 && gx < cols && gy >= 0 && gy < rows) {
        const idx = gy * cols + gx;
        const grid = gridRef.current;
        if (grid[idx] && !grid[idx].infected) {
          grid[idx].infected = true;
          grid[idx].color = "#CCFF00";
          cellsRef.current.push({
            x: gx, y: gy,
            progress: 0, maxProgress: 1,
            speed: 0.02 + Math.random() * 0.03,
            flicker: Math.random() * 100,
            brandColor: "#CCFF00",
          });
          setInfectedCount(cellsRef.current.length);
        }
      }
    },
    []
  );

  const reset = () => {
    initGrid(20, 10);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative w-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="eyebrow-lime mb-1">Interactive Simulation</p>
          <h3 className="text-xl font-bold uppercase tracking-tight">
            Click Any Dead Screen to Activate
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="body-stat text-2xl font-bold text-lime">
            {Math.round((infectedCount / totalCells) * 100)}%
          </span>
          <button
            onClick={reset}
            className="px-4 py-2 border border-white/15 text-xs uppercase tracking-widest text-text-tertiary hover:border-lime/40 hover:text-lime transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      <div
        className="relative rounded-lg border border-white/5 overflow-hidden cursor-crosshair"
        style={{ background: "#0a0a0a" }}
        onClick={handleClick}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "500px" }}
          className="block"
        />

        {/* Instruction overlay */}
        {infectedCount === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-text-tertiary text-sm uppercase tracking-widest mb-2">
                Tap any square to begin the TakeOver
              </p>
              <div className="w-6 h-6 mx-auto rounded-full border border-lime/50 animate-pulse" />
            </div>
          </div>
        )}
      </div>

      <p className="mt-3 text-text-tertiary text-xs">
        Watch as conversion spreads from your click. Each activation breeds more activation.
        This is how INFX takes over spaces — one surface at a time, cascading through every location.
      </p>
    </motion.div>
  );
}
