"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { XCircle, TrendingDown, Eye, Radio, Newspaper, Smartphone, Play } from "lucide-react";
import MediaDeathCanvas from "../components/MediaDeathCanvas";
import GlitchText from "../components/GlitchText";

const deadMedia = [
  {
    icon: Newspaper,
    name: "Print",
    stat: "-73%",
    sub: "Newspaper readership collapse 2015-2025",
  },
  {
    icon: Radio,
    name: "Radio",
    stat: "-41%",
    sub: "Daily listening hours since streaming surge",
  },
  {
    icon: Eye,
    name: "Billboard",
    stat: "1.5s",
    sub: "Average attention on a passing billboard",
  },
  {
    icon: Smartphone,
    name: "Social Ads",
    stat: "0.7s",
    sub: "Average time before a thumb scrolls past",
  },
];

export default function DeathOfMedia() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="death-of-media"
      className="relative section-cinematic"
    >
      {/* Blood-tinted background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, rgba(80, 0, 10, 0.3) 0%, transparent 60%),
                       radial-gradient(ellipse at 70% 80%, rgba(40, 0, 5, 0.4) 0%, transparent 50%),
                       linear-gradient(180deg, #050505 0%, #0A0202 100%)`,
        }}
      />

      {/* Floating dead media particles */}
      <div className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 0, 51, 0.03) 0%, transparent 30%),
                             radial-gradient(circle at 80% 70%, rgba(255, 0, 51, 0.03) 0%, transparent 30%)`,
        }}
      />

      <div ref={ref} className="section-cinematic-inner relative z-[2]">
        {/* Section Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="eyebrow-blood mb-6"
        >
          The death of traditional media
        </motion.p>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="headline-section mb-8 max-w-4xl"
        >
          <GlitchText
            text="Low Engagement Is"
            as="span"
            triggerOnView={isInView}
            intensity="medium"
            color="blood"
          />
          <br />
          <span className="gradient-blood-text">Not a Bug. It's the Terminal State.</span>
        </motion.h2>

        {/* Narrative paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="body-large max-w-2xl mb-16 text-text-secondary"
        >
          Millions are being spent every second on places <span className="text-blood font-semibold">where no one is looking</span>. 
          The audience has left the building. They're on YouTube, in Discord servers, watching Twitch streams. 
          They're not looking at your billboard. They're not waiting through your ad. 
          The attention economy doesn't reward presence — it punishes absence of engagement.
        </motion.p>

        {/* Dead Media Grid + Visualizer */}
        <MediaDeathCanvas />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 mt-12">
          {deadMedia.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="card-dark p-6 rounded-xl group hover:!border-blood/20 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blood/10 flex items-center justify-center">
                    <Icon size={20} className="text-blood" />
                  </div>
                  <XCircle size={16} className="text-text-dim group-hover:text-blood transition" />
                </div>
                <div className="stat-number gradient-blood-text mb-2">
                  {item.stat}
                </div>
                <p className="text-sm font-semibold text-text-primary mb-1">
                  {item.name}
                </p>
                <p className="text-xs text-text-tertiary">
                  {item.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom narrative bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="card-glass rounded-2xl p-8 border-glow-lime"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-lg font-medium text-text-primary mb-2">
                The real estate still exists.
              </p>
              <p className="text-text-secondary text-sm">
                Physical spaces. Where humans <span className="text-lime font-semibold">pay money</span> to stand in line. 
                Where they're trapped for 15 minutes with nowhere to scroll. Where every surface 
                can be converted into <span className="text-lime font-semibold">your story</span> — overnight.
              </p>
            </div>
            <a
              href="#attention-deficit"
              className="btn-cinematic whitespace-nowrap"
            >
              <Play size={16} />
              Meet The Generation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
