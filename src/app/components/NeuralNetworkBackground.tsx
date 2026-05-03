"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number; y: number; vx: number; vy: number;
  radius: number; color: string;
  pulsePhase: number; pulseSpeed: number;
  type: "brand" | "data" | "signal";
}

interface Connection { from: number; to: number; strength: number; }

interface Packet {
  fromX: number; fromY: number; toX: number; toY: number;
  progress: number; speed: number; color: string; size: number;
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const packetsRef = useRef<Packet[]>([]);
  const frameRef = useRef(0);

  const init = useCallback((w: number, h: number) => {
    const nodeCount = Math.min(120, Math.floor((w * h) / 15000));
    const nodes: Node[] = [];
    const colors = [
      "rgba(204, 255, 0", "rgba(255, 0, 51", "rgba(0, 229, 204",
      "rgba(204, 255, 0", "rgba(200, 169, 81",
    ];

    for (let i = 0; i < nodeCount; i++) {
      const tr = Math.random();
      const type: "brand" | "data" | "signal" = tr < 0.15 ? "brand" : tr < 0.35 ? "signal" : "data";
      nodes.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        radius: type === "brand" ? 3 + Math.random() * 2 : 1.5 + Math.random() * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.03,
        type,
      });
    }

    const connections: Connection[] = [];
    const maxDist = Math.min(180, w * 0.15);
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          connections.push({ from: i, to: j, strength: 1 - dist / maxDist });
        }
      }
    }

    nodesRef.current = nodes;
    connectionsRef.current = connections;
    packetsRef.current = [];
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY, active: true }; };
    const onMouseLeave = () => { mouseRef.current.active = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    let animationId: number;

    const draw = () => {
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const packets = packetsRef.current;
      const mouse = mouseRef.current;
      const frame = frameRef.current++;

      ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
      ctx.fillRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        if (mouse.active) {
          const dx = n.x - mouse.x; const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 0) {
            const force = (200 - dist) / 200;
            n.vx += (dx / dist) * force * 0.05;
            n.vy += (dy / dist) * force * 0.05;
          }
        }

        n.vx *= 0.995; n.vy *= 0.995;
        n.x = Math.max(5, Math.min(w - 5, n.x));
        n.y = Math.max(5, Math.min(h - 5, n.y));
      }

      // Connections
      for (const c of connections) {
        const n1 = nodes[c.from]; const n2 = nodes[c.to];
        const dx = n1.x - n2.x; const dy = n1.y - n2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = Math.min(180, w * 0.15);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * c.strength * 0.25;
          ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = `rgba(204, 255, 0, ${alpha})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }

      // Spawn packets
      if (frame % 8 === 0 && Math.random() < 0.6) {
        const c = connections[Math.floor(Math.random() * connections.length)];
        if (c) {
          const n1 = nodes[c.from]; const n2 = nodes[c.to];
          packets.push({
            fromX: n1.x, fromY: n1.y, toX: n2.x, toY: n2.y,
            progress: 0, speed: 0.008 + Math.random() * 0.015,
            color: n1.type === "brand" ? "rgba(255, 0, 51" : n1.color, size: n1.type === "brand" ? 3 : 1.5,
          });
        }
      }

      // Draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]; p.progress += p.speed;
        if (p.progress >= 1) { packets.splice(i, 1); continue; }
        const x = p.fromX + (p.toX - p.fromX) * p.progress;
        const y = p.fromY + (p.toY - p.fromY) * p.progress;
        const alpha = p.progress < 0.2 ? p.progress / 0.2 : p.progress > 0.8 ? (1 - p.progress) / 0.2 : 1;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, p.size * 4);
        gradient.addColorStop(0, `${p.color}, ${alpha * 0.8})`);
        gradient.addColorStop(1, `${p.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath(); ctx.arc(x, y, p.size * 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `${p.color}, ${alpha})`;
        ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill();
      }

      // Draw nodes
      for (const n of nodes) {
        n.pulsePhase += n.pulseSpeed;
        const pulse = Math.sin(n.pulsePhase) * 0.5 + 0.5;
        if (n.type === "brand") {
          const r = n.radius + pulse * 2;
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 6);
          grad.addColorStop(0, `rgba(255, 0, 51, ${0.3 + pulse * 0.2})`); grad.addColorStop(1, "rgba(255, 0, 51, 0)");
          ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(n.x, n.y, r * 6, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = `rgba(255, 0, 51, ${0.8 + pulse * 0.2})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
        } else if (n.type === "signal") {
          ctx.fillStyle = `rgba(0, 229, 204, ${0.5 + pulse * 0.3})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2); ctx.fill();
        } else {
          ctx.fillStyle = `${n.color}, ${0.3 + pulse * 0.2})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2); ctx.fill();
        }
      }

      // Mouse glow
      if (mouse.active) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150);
        grad.addColorStop(0, "rgba(204, 255, 0, 0.06)"); grad.addColorStop(1, "rgba(204, 255, 0, 0)");
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2); ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, [init]);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0, opacity: 0.6 }} />;
}
