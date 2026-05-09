"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Building2, Users, Handshake, TrendingUp, Shield } from "lucide-react";

const audienceCards = [
  {
    icon: Building2,
    title: "Brands",
    detail: "Retail, gaming, entertainment, tech &mdash; the categories changing everything.",
  },
  {
    icon: Users,
    title: "Agencies",
    detail: "Media agencies who want to offer clients something the world has never seen.",
  },
  {
    icon: Handshake,
    title: "Investors",
    detail: "The next frontier of physical retail media. First mover in a $500B+ market.",
  },
];

const proofPoints = [
  { icon: TrendingUp, label: "3x brand recall" },
  { icon: Shield, label: "POPIA compliant" },
  { icon: Users, label: "Zero cookie dependency" },
];

export default function CTAContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative section-cinematic">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(204,255,0,0.06) 0%, transparent 50%),
                       linear-gradient(180deg, #050505 0%, #080A04 50%, #050505 100%)`,
        }}
      />

      <div ref={ref} className="section-cinematic-inner relative z-[2] text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="eyebrow-lime mb-6"
        >
          Join the movement
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="headline-section mb-6"
        >
          Don&apos;t Wait For Permission.
          <br />
          <span className="gradient-lime-text">Claim Your World.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="body-lg max-w-xl mx-auto mb-12"
        >
          No pricing pages. No slot counts. This is a movement for brands that understand attention is
          the only currency that matters. If that is you &mdash; let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5 mb-16"
        >
          <a
            href="mailto:leads@infxmedia.xyz?subject=INFX%20TakeOver%20Inquiry"
            className="btn-cinematic"
          >
            <Mail size={16} />
            Start the Conversation
            <ArrowRight size={16} />
          </a>

          <div className="flex items-center gap-4">
            {proofPoints.map((pp) => {
              const Icon = pp.icon;
              return (
                <div key={pp.label} className="flex items-center gap-1.5">
                  <Icon size={13} className="text-lime-dim" />
                  <span className="text-text-tertiary text-[11px]">{pp.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto"
        >
          {audienceCards.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark p-7 text-left border-glow-lime"
              >
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-lime" />
                </div>
                <h4 className="text-sm font-bold text-text-primary mb-1">{item.title}</h4>
                <p className="text-xs text-text-tertiary">{item.detail}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
