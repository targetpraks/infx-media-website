"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  delay = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  const started = useRef(false);

  const animate = useCallback(() => {
    if (started.current) return;
    started.current = true;

    const isFloat = typeof end === "string" && (end.includes("s") || end.includes("x") || end.includes("%"));
    let numericEnd: number;
    let displaySuffix = suffix;

    if (typeof end === "number") {
      numericEnd = end;
    } else {
      const match = end.match(/^([\d.]+)(.*)$/);
      if (match) {
        numericEnd = parseFloat(match[1]);
        displaySuffix = match[2] + suffix;
      } else {
        setDisplayValue(end);
        return;
      }
    }

    const startTime = performance.now() + delay * 1000;
    const durationMs = duration * 1000;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericEnd * eased;

      const decimals = numericEnd % 1 !== 0 ? 1 : 0;
      setDisplayValue(`${prefix}${current.toFixed(decimals)}${displaySuffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(`${prefix}${numericEnd.toFixed(decimals)}${displaySuffix}`);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, prefix, suffix, delay]);

  useEffect(() => {
    if (isInView) animate();
  }, [isInView, animate]);

  return (
    <div ref={ref} className={className}>
      {displayValue}
    </div>
  );
}
