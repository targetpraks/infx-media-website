"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  triggerOnView?: boolean;
  as?: "span" | "p" | "div";
  cursorColor?: string;
}

export default function TypewriterText({
  text,
  className = "",
  speed = 30,
  triggerOnView = false,
  as: Tag = "span",
  cursorColor = "#CCFF00",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef(0);

  const startTyping = useCallback(() => {
    indexRef.current = 0;
    setDisplayed("");
    setDone(false);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      indexRef.current++;
      const slice = text.slice(0, indexRef.current);
      setDisplayed(slice);
      if (indexRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDone(true);
      }
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    const el = ref.current;

    if (!triggerOnView) {
      startTyping();
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
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
  }, [startTyping, triggerOnView]);

  return (
    <Tag ref={ref as any} className={`font-mono ${className}`}>
      {displayed}
      {!done && (
        <span
          className="inline-block w-[2px] h-[1em] ml-0.5 align-baseline animate-pulse"
          style={{ backgroundColor: cursorColor }}
        />
      )}
    </Tag>
  );
}
