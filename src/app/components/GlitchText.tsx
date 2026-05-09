"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const GLITCH_CHARS = "\u2591\u2592\u2593\u2588\u258C\u2590\u2580\u2584\u2596\u2597\u2598\u2599\u259B\u259C\u259D\u259E\u259F`\u00AC!'^#+\"~|*.,:;-_<>()[]{}";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span" | "div";
  triggerOnView?: boolean;
  intensity?: "low" | "medium" | "high";
  color?: "lime" | "blood" | "cyan" | "white";
}

const INTENSITY_MAP = { low: 5, medium: 10, high: 20 };
const COLOR_MAP = {
  lime: "#CCFF00",
  blood: "#FF0033",
  cyan: "#00E5CC",
  white: "#F5F5F5",
};

export default function GlitchText({
  text,
  className = "",
  as: Tag = "div",
  triggerOnView = false,
  intensity = "medium",
  color = "lime",
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const runGlitch = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    setIsGlitching(true);
    const iterations = INTENSITY_MAP[intensity];
    let step = 0;
    const totalLength = text.length;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " " || char === "\n") return char;
            if (i < step) return text[i];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      step += totalLength / iterations + 0.5;

      if (step >= totalLength) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 30);
  }, [text, intensity]);

  useEffect(() => {
    if (!triggerOnView) {
      runGlitch();
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runGlitch();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [runGlitch, triggerOnView]);

  const accentColor = COLOR_MAP[color];

  return (
    <Tag
      ref={ref as any}
      className={`${className} ${isGlitching ? "animate-pulse" : ""}`}
      style={
        isGlitching
          ? {
              color: accentColor,
              textShadow: `2px 0 ${accentColor}, -2px 0 ${accentColor}40`,
              fontFamily: "var(--font-geist-mono), monospace",
            }
          : undefined
      }
    >
      {displayText}
    </Tag>
  );
}
