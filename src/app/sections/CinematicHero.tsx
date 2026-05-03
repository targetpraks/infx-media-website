"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";
import GlitchText from "../components/GlitchText";

export default function CinematicHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {
      /* autoplay blocked */
    });
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setSoundOn(!soundOn);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh" }}
    >
      {/* Video Background */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        >
          {/* Placeholder: City at night / retail at night */}
          <source src="" type="video/mp4" />
        </video>
        <div className="video-overlay-dark" />
      </motion.div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none z-[5] scanlines opacity-30" />

      {/* Floating particles canvas overlay */}
      <div className="absolute inset-0 pointer-events-none z-[6] opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(204,255,0,0.05) 0%, transparent 50%)`,
        }}
      />

      {/* Sound Toggle */}
      <button
        onClick={toggleSound}
        className="absolute top-24 right-6 z-[20] flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-text-tertiary hover:text-lime hover:border-lime/30 transition-all"
      >
        {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
        Sound
      </button>

      {/* Cinematic Text — centered */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-[10] flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="eyebrow-lime mb-6"
        >
          The world's first retail media revelation
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="headline-hero mb-8 max-w-5xl"
        >
          Your Brand
          <br />
          <span className="gradient-lime-text">TakeOver.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="headline-sub max-w-2xl mb-12 text-text-secondary"
        >
          We don't pay for attention. We <span className="text-lime font-semibold">hijack</span> the space where 
          attention already lives. Every surface, every cup, every wall — 
          converted overnight. Instant. Efficient. Unignorable.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#revelation"
            className="btn-cinematic"
          >
            Enter the Revelation
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/15 text-text-secondary text-sm font-semibold uppercase tracking-widest hover:border-lime/40 hover:text-lime transition-all"
          >
            Join the Movement
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="eyebrow">Scroll to begin</span>
          <ChevronDown size={20} className="text-text-tertiary animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
