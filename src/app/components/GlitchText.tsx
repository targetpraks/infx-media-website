"use client";

import { useEffect, useState, useRef } from "react";

const GLITCH_CHARS = "░▒▓█▌▐▀▄▐▙▖▗▘▙▛▜▝▞▟░`¬!'^#+\"~|*.,:;-_<>()[]{}";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span" | "div";
  triggerOnView?: boolean;
  intensity?: "low" | "medium" | "high";
  color?: "lime" | "blood" | "cyan" | "white";
}

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

  const colorMap = {
    lime: "#CCFF00",
    blood: "#FF0033",
    cyan: "#00E5CC",
    white: "#F5F5F5",
  };

  const iterationsMap = { low: 5, medium: 10, high: 20 };

  useEffect(() => {
    if (!triggerOnView) {
      runGlitch();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runGlitch();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text, triggerOnView]);

  const runGlitch = () => {
    setIsGlitching(true);
    const iterations = iterationsMap[intensity];
    let step = 0;

    const interval = setInterval(() => {
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
      step += text.length / iterations + 0.5;

      if (step >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 30);
  };

  return (
    <Tag
      ref={ref as any}
      className={`${className} ${isGlitching ? "animate-pulse" : ""}`}
      style={{
        color: isGlitching ? colorMap[color] : undefined,
        textShadow: isGlitching
          ? `2px 0 ${colorMap[color]}, -2px 0 ${colorMap[color]}40`
          : undefined,
        fontFamily: isGlitching ? 'var(--font-geist-mono), monospace' : undefined,
      }}
    >
      {displayText}
    </Tag>
  );
}
