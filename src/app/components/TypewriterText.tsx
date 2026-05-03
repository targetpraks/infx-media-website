"use client";

import { useState, useEffect, useRef } from "react";

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
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggerOnView) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <Tag ref={ref as any} className={className}>
      <span className="font-mono">
        {displayed}
        {!done && (
          <span
            className="inline-block w-[2px] h-[1em] ml-[2px] align-middle animate-pulse"
            style={{ backgroundColor: cursorColor, verticalAlign: "baseline" }}
          />
        )}
      </span>
    </Tag>
  );
}
