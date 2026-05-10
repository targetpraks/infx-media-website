"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface CinematicVideoProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
  subtitle?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  sectionId?: string;
  className?: string;
}

export default function CinematicVideo({
  videoUrl,
  posterUrl = "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
  title,
  subtitle,
  overlayTitle,
  overlaySubtitle,
  sectionId,
  className = "",
}: CinematicVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);
  const [loaded, setLoaded] = useState(false);

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

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(!muted);
  };

  const handleOverlayClick = () => {
    setShowOverlay(false);
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      setMuted(false);
      v.play();
      setPlaying(true);
    }
  };

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ minHeight: "80vh" }}
    >
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={videoUrl}
          poster={posterUrl}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
          style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease" }}
        />

        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(5,5,5,0.7) 0%,
              rgba(5,5,5,0.2) 30%,
              rgba(5,5,5,0.1) 50%,
              rgba(5,5,5,0.5) 70%,
              rgba(5,5,5,0.9) 100%
            )`,
          }}
        />

        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none z-[3] scanlines opacity-20" />

        {/* Click-to-play overlay */}
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-[4] flex flex-col items-center justify-center cursor-pointer group"
            onClick={handleOverlayClick}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center mb-8 group-hover:border-lime/60 transition-all"
              style={{
                background: "rgba(204, 255, 0, 0.08)",
                boxShadow: "0 0 60px rgba(204, 255, 0, 0.15)",
              }}
            >
              <Play size={40} className="text-lime ml-2" fill="currentColor" />
            </motion.div>

            {overlayTitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="headline-section text-center max-w-4xl px-6 mb-4"
              >
                {overlayTitle}
              </motion.h2>
            )}

            {overlaySubtitle && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="eyebrow text-center"
              >
                {overlaySubtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 flex items-center gap-2 text-text-tertiary text-sm"
            >
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              Click to watch the revelation
            </motion.div>
          </motion.div>
        )}

        {/* Controls bar */}
        <div className="absolute bottom-6 left-6 right-6 z-[5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-text-tertiary">
              {playing ? "Playing" : "Paused"} — {title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/15 hover:border-lime/30 transition-all"
            >
              {playing ? (
                <Pause size={16} className="text-lime" />
              ) : (
                <Play size={16} className="text-lime ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/15 hover:border-lime/30 transition-all"
            >
              {muted ? (
                <VolumeX size={16} className="text-text-tertiary" />
              ) : (
                <Volume2 size={16} className="text-lime" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Below-video caption */}
      <div className="section-cinematic-inner py-8">
        <p className="eyebrow-lime mb-2">{subtitle || "Watch the Vision"}</p>
        <p className="text-text-secondary text-sm max-w-xl">{title}</p>
      </div>
    </section>
  );
}
