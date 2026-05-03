"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videoUrl?: string;
  posterUrl?: string;
}

export default function VideoSection({
  title,
  subtitle,
  videoUrl,
  posterUrl = "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
}: VideoSectionProps) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [soundOn, setSoundOn] = useState(false);
  const [playing, setPlaying] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setSoundOn(!soundOn);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section ref={ref} className="relative section-cinematic overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={posterUrl}
          src={videoUrl}
        />
        <div className="video-overlay-dark" />
      </div>

      {/* Controls */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/15 transition"
        >
          <Play size={16} className={playing ? "text-lime" : "text-text-secondary"} />
        </button>
        <button
          onClick={toggleSound}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/15 transition"
        >
          {soundOn ? <Volume2 size={16} className="text-lime" /> : <VolumeX size={16} className="text-text-secondary" />}
        </button>
      </div>

      {/* Content overlay */}
      <motion.div
        style={{ opacity: isInView ? 1 : 0 }}
        className="section-cinematic-inner relative z-[2] flex flex-col items-center justify-center text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="eyebrow-lime mb-4"
        >
          {subtitle || "A Cinematic Experience"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="headline-section max-w-4xl"
        >
          {title}
        </motion.h2>
      </motion.div>
    </section>
  );
}
