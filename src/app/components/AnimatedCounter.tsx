"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

function parseEnd(end: number | string) {
  if (typeof end === "number") {
    return { numericEnd: end, displaySuffix: "" };
  }
  const match = end.match(/^(-?)([\d.]+)(.*)$/);
  if (match) {
    const sign = match[1] === "-" ? -1 : 1;
    const numericEnd = parseFloat(match[2]) * sign;
    const displaySuffix = match[3];
    return { numericEnd, displaySuffix };
  }
  return null;
}

function getInitialDisplay(end: number | string, prefix: string, suffix: string) {
  // Static export: show final value immediately so page is readable
  // JS runtime will still animate from 0 visually
  const parsed = parseEnd(end);
  if (!parsed) return String(end);
  const decimals = parsed.numericEnd % 1 !== 0 ? 1 : 0;
  return `${prefix}${parsed.numericEnd.toFixed(decimals)}${parsed.displaySuffix}${suffix}`;
}

function getFinalDisplay(end: number | string, prefix: string, suffix: string) {
  const parsed = parseEnd(end);
  if (!parsed) return String(end);
  const decimals = parsed.numericEnd % 1 !== 0 ? 1 : 0;
  return `${prefix}${parsed.numericEnd.toFixed(decimals)}${parsed.displaySuffix}${suffix}`;
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
  const [displayValue, setDisplayValue] = useState(() => getInitialDisplay(end, prefix, suffix));
  const started = useRef(false);

  const animate = useCallback(() => {
    if (started.current) return;
    started.current = true;

    const parsed = parseEnd(end);
    if (!parsed) {
      setDisplayValue(String(end));
      return;
    }

    const { numericEnd, displaySuffix } = parsed;
    const startTime = performance.now() + delay * 1000;
    const durationMs = duration * 1000;
    const decimals = numericEnd % 1 !== 0 ? 1 : 0;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericEnd * eased;

      setDisplayValue(`${prefix}${current.toFixed(decimals)}${displaySuffix}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(`${prefix}${numericEnd.toFixed(decimals)}${displaySuffix}${suffix}`);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, prefix, suffix, delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediate visibility check
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (isVisible) {
      animate();
      return;
    }

    // IntersectionObserver with fallback timeout
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30px" }
    );

    observer.observe(el);

    // Safety fallback: show final value after 5s if animation never triggered
    const timeout = setTimeout(() => {
      if (!started.current) {
        setDisplayValue(getFinalDisplay(end, prefix, suffix));
      }
    }, 5000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [animate, end, prefix, suffix]);

  return (
    <div ref={ref} className={className}>
      {displayValue}
    </div>
  );
}
