"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gamepad2, Fingerprint, Zap, Brain, Trophy, Tv } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import GlitchText from "../components/GlitchText";

const stats = [
  { value: "47%", label: "Gen Z skip all ads", icon: Zap },
  { value: "8.2s", label: "Average attention span", icon: Brain },
  { value: "67%", label: "Twitch &gt; TV for under-24s", icon: Tv },
  { value: "94%", label: "Skip pre-rolls, always", icon: Trophy },
];

export default function AttentionDeficit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="attention-deficit" className="relative section-cinematic">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 70% 20%, rgba(0,30,40,0.4) 0%, transparent 60%),
                       radial-gradient(ellipse at 20% 80%, rgba(30,40,0,0.3) 0%, transparent 50%),
                       linear-gradient(180deg, #0A0202 0%, #050808 50%, #050505 100%)`,
        }}
      />

      <div ref={ref} className="section-cinematic-inner relative z-[2]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="eyebrow-cyan mb-6"
        >
          The attention deficit generation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="headline-section mb-6 max-w-5xl"
        >
          <GlitchText
            text="Esports. iPad. 8 Seconds."
            as="span"
            triggerOnView={isInView}
            intensity="high"
            color="cyan"
          />
          <br />
          <span className="gradient-cyan-text">The Generation That Skipped Everything.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="body-lg max-w-2xl mb-16"
        >
          They grew up with YouTube, not TV. With Discord, not radio. With Twitch drops, not magazine
          ads. Their brains are wired for instant gratification, fast context switching, and zero
          friction. They are not just ignoring your media &mdash;{" "}
          <span className="text-cyan font-semibold">they don&apos;t even notice it.</span>
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark p-6 group border-glow-cyan"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors duration-300">
                  <Icon size={20} className="text-cyan" />
                </div>
                <AnimatedCounter
                  end={stat.value}
                  className="stat-number gradient-cyan-text mb-2"
                  delay={0.8 + i * 0.1}
                />
                <p className="text-xs text-text-tertiary">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card-dark p-8 border-glow-cyan"
          >
            <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-6">
              <Gamepad2 size={24} className="text-cyan" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">The Esports Generation</h3>
            <p className="body-sm">
              They watch tournaments for 6+ hours straight &mdash; but skip every ad. They follow their
              favourite streamers religiously &mdash; but will never click a sponsored link. Their
              loyalty is tribal, not transactional.{" "}
              <span className="text-cyan">
                To reach them, you must become part of the environment they trust.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="card-dark p-8 border-glow-lime"
          >
            <div className="w-12 h-12 rounded-lg bg-lime/10 flex items-center justify-center mb-6">
              <Fingerprint size={24} className="text-lime" />
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-3">New Kids in Career</h3>
            <p className="body-sm">
              They&apos;re the ones building the next unicorn on a laptop in a shared workspace.
              They&apos;re designing brands, coding apps, starting agencies. They need tools, not ads.
              They need partners, not sponsors.{" "}
              <span className="text-lime">
                When they walk into your branded world, they&apos;re not being pitched &mdash;
                they&apos;re being invited.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
