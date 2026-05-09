"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @property --scroll-progress {
        syntax: '<percentage>';
        initial-value: 0%;
        inherits: false;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--lime) 0%, var(--lime-bright) 50%, var(--lime-dim) 100%)",
        boxShadow: "0 0 8px rgba(204, 255, 0, 0.4)",
        willChange: "transform",
      }}
    />
  );
}
