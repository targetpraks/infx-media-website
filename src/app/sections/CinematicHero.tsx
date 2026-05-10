"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

export default function CinematicHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, [reducedMotion]);

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
      <motion.div className="absolute inset-0" style={reducedMotion ? {} : { scale }}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          src="https://cdn.coverr.co/videos/coverr-bustling-city-intersection-at-night-2737/1080p.mp4"
          style={{ opacity: videoLoaded ? 1 : 0, transition: "opacity 1s ease" }}
        />
        <div className="video-overlay-dark" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-[5] scanlines opacity-30" />

      <div
        className="absolute inset-0 pointer-events-none z-[6] opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(204,255,0,0.05) 0%, transparent 50%)",
        }}
      />

      <button
        onClick={toggleSound}
        className="absolute top-24 right-6 z-[20] btn-icon !w-auto !h-auto !rounded-full px-4 py-2 gap-2 text-xs uppercase tracking-widest"
        aria-label={soundOn ? "Mute video" : "Unmute video"}
      >
        {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
        Sound
      </button>

      <motion.div
        style={reducedMotion ? {} : { y, opacity }}
        className="relative z-[10] flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="eyebrow-lime mb-6"
        >
          The world&apos;s first retail media revelation
        </motion.div>

        <motion.h1
          initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="headline-hero mb-8 max-w-5xl"
        >
          Your Brand
          <br />
          <span className="gradient-lime-text">TakeOver.</span>
        </motion.h1>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="headline-sub max-w-2xl mb-12"
        >
          We don&apos;t pay for attention. We{" "}
          <span className="text-lime font-semibold">hijack</span> the space where attention already
          lives. Every surface, every cup, every wall &mdash; converted overnight. Instant.
          Efficient. Unignorable.
        </motion.p>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#revelation" className="btn-cinematic">
            Enter the Revelation
          </a>
          <a href="#contact" className="btn-secondary">
            Join the Movement
          </a>
        </motion.div>

        <motion.div
          initial={reducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="eyebrow">Scroll to begin</span>
          <ChevronDown
            size={20}
            className={`text-text-tertiary ${reducedMotion ? "" : "animate-bounce"}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
