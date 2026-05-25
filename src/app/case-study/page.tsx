"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Clock,
  Footprints,
  DollarSign,
  Wrench,
  ArrowRight,
  Quote,
} from "lucide-react";

const metrics = [
  {
    label: "Foot Traffic",
    before: "~2,400 / week",
    after: "+23% uplift",
    icon: Footprints,
    accent: "lime",
  },
  {
    label: "Sponsor Revenue",
    before: "R0 (none)",
    after: "R18,200 / slot",
    icon: DollarSign,
    accent: "lime",
  },
  {
    label: "Technician Time Saved",
    before: "12 hrs setup",
    after: "3.5 hrs (same night)",
    icon: Wrench,
    accent: "cyan",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function CaseStudyPage() {
  const heroRef = useRef(null);
  const bodyRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const bodyInView = useInView(bodyRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* -- HERO ------------------------------------------- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 70% 20%, rgba(204,255,0,0.08) 0%, transparent 50%),
                         linear-gradient(180deg, #050505 0%, #060803 100%)`,
          }}
        />

        <div ref={heroRef} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow-lime mb-4">Case Study</p>
            <h1 className="headline-hero mb-6">
              How{" "}
              <span className="gradient-lime-text">Papa Pasta Sandton</span>{" "}
              Increased Foot Traffic 23% with an MTN TakeOver
            </h1>
            <p className="body-lg max-w-2xl mb-10">
              A single-location QSR in Johannesburg&rsquo;s busiest precinct went from static signage to a
              fully immersive MTN brand world — overnight. Here&rsquo;s what happened.
            </p>

            {/* Stat callout */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="card-glass px-6 py-4 flex items-center gap-4 border-glow-lime">
                <TrendingUp size={28} className="text-lime" />
                <div>
                  <p className="stat-number text-3xl md:text-4xl">+23%</p>
                  <p className="text-text-tertiary text-xs">Foot traffic uplift</p>
                </div>
              </div>
              <div className="card-glass px-6 py-4 flex items-center gap-4">
                <Clock size={28} className="text-cyan" />
                <div>
                  <p className="text-text-primary font-bold text-2xl">14 hrs</p>
                  <p className="text-text-tertiary text-xs">Overnight deployment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- CHALLENGE / SOLUTION / RESULTS --------------- */}
      <section ref={bodyRef} className="relative pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={bodyInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          >
            {[
              {
                eyebrow: "The Challenge",
                title: "Blending Into the Background",
                body: "Papa Pasta Sandton had great food and loyal regulars, but their brand was invisible to walk-in traffic. Static posters, no digital presence in-store, and zero sponsor revenue meant they were leaving money — and attention — on the table every single day.",
                accent: "blood" as const,
              },
              {
                eyebrow: "The Solution",
                title: "MTN Brand World Overnight",
                body: "INFX deployed a full store colourway, co-branded packaging run, WebAR on every cup, and a QR data-capture flow — all installed after close and live by 8am. The location became an MTN brand world without touching operations.",
                accent: "lime" as const,
              },
              {
                eyebrow: "The Results",
                title: "Measurable Uplift in 30 Days",
                body: "Foot traffic rose 23% week-over-week. The store generated its first-ever sponsor revenue. Technician install time dropped from 12 hours to 3.5 hours thanks to refined overnight logistics.",
                accent: "cyan" as const,
              },
            ].map((card) => (
              <motion.div
                key={card.eyebrow}
                variants={itemVariants}
                className={`card-dark p-8 border-glow-${card.accent}`}
              >
                <p className={`eyebrow-${card.accent} mb-4`}>{card.eyebrow}</p>
                <h3 className="headline-sub text-text-primary mb-4">{card.title}</h3>
                <p className="body-md">{card.body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* -- Quote ---------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="card-glass p-8 md:p-10 border-glow-lime relative">
              <Quote size={32} className="text-lime/30 absolute top-6 left-6" />
              <blockquote className="relative z-10 text-text-primary text-lg md:text-xl leading-relaxed pl-8 mb-6">
                We didn&rsquo;t think a single store could move the needle like this. The morning after the
                TakeOver went live, customers were walking in and asking about the MTN cups before they
                even looked at the menu.
              </blockquote>
              <cite className="not-italic pl-8">
                <span className="text-lime font-semibold">Thabo Mokoena</span>
                <span className="text-text-tertiary text-sm"> — Franchisee, Papa Pasta Sandton</span>
              </cite>
            </div>
          </motion.div>

          {/* -- Before / After Metrics ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="headline-section text-center mb-12">
              Before <span className="text-text-dim">vs.</span>{" "}
              <span className="gradient-lime-text">After</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="card-dark p-6 text-center border-glow-lime"
                  >
                    <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-lime" />
                    </div>
                    <p className="text-text-primary font-semibold mb-4">{m.label}</p>
                    <div className="space-y-3">
                      <div className="rounded-lg bg-white/[0.02] border border-white/5 px-4 py-3">
                        <p className="text-text-tertiary text-xs uppercase tracking-wider mb-1">Before</p>
                        <p className="text-text-secondary text-sm">{m.before}</p>
                      </div>
                      <div className="rounded-lg bg-lime/[0.04] border border-lime/20 px-4 py-3">
                        <p className="text-lime text-xs uppercase tracking-wider mb-1">After</p>
                        <p className="text-lime font-bold text-sm">{m.after}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* -- CTA ------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <p className="eyebrow-lime mb-4">Ready to replicate?</p>
            <h2 className="headline-section mb-6">
              Your Category Is Waiting.
              <br />
              <span className="gradient-lime-text">Claim It.</span>
            </h2>
            <p className="body-lg max-w-xl mx-auto mb-10">
              Only 6 slots per year. Strict category exclusivity. If your competitor books first,
              you wait.
            </p>
            <Link href="/book-briefing" className="btn-cinematic inline-flex">
              Book a Briefing
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
