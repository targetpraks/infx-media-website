"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  subtitle?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  startAt?: number;
  autoplay?: boolean;
  showOverlay?: boolean;
  className?: string;
  sectionId?: string;
}

export default function YouTubeEmbed({
  videoId,
  title,
  subtitle,
  overlayTitle,
  overlaySubtitle,
  startAt = 0,
  autoplay = false,
  showOverlay = true,
  className = "",
  sectionId,
}: YouTubeEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [, setPlayerReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlayState, setShowOverlayState] = useState(showOverlay);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    if (!iframeRef.current) return;
    const iframe = iframeRef.current;
    const cmd = isPlaying ? 'pauseVideo' : 'playVideo';
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: cmd, args: [] }),
      '*'
    );
    setIsPlaying(!isPlaying);
    if (!isPlaying) setShowOverlayState(false);
  };

  const toggleMute = () => {
    if (!iframeRef.current) return;
    const iframe = iframeRef.current;
    const cmd = isMuted ? 'unMute' : 'mute';
    iframe.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: cmd, args: [] }),
      '*'
    );
    setIsMuted(!isMuted);
  };

  const handleOverlayClick = () => {
    setShowOverlayState(false);
    setIsPlaying(true);
    setIsMuted(false);
    // Try to unmute and play
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: 'unMute', args: [] }),
        '*'
      );
    }
  };

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${new URLSearchParams({
    start: String(startAt),
    autoplay: autoplay ? '1' : '0',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    modestbranding: '1',
    rel: '0',
    showinfo: '0',
    iv_load_policy: '3',
    fs: '0',
    enablejsapi: '1',
    origin: typeof window !== 'undefined' ? window.location.origin : '',
  }).toString()}`;

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ minHeight: "80vh" }}
    >
      <div className="relative w-full h-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setPlayerReady(true)}
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
        {showOverlayState && showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[4] flex flex-col items-center justify-center cursor-pointer group"
            onClick={handleOverlayClick}
          >
            <motion.div
              initial={{ scale: 1 }}
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
              {isPlaying ? "Playing" : "Paused"} — {title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/15 hover:border-lime/30 transition-all"
            >
              {isPlaying ? (
                <Pause size={16} className="text-lime" />
              ) : (
                <Play size={16} className="text-lime ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-white/15 hover:border-lime/30 transition-all"
            >
              {isMuted ? (
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
