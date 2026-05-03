"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, Building2, Users, Handshake } from "lucide-react";

export default function CTAContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(204,255,0,0.05) 0%, transparent 50%),
                       linear-gradient(180deg, #050505 0%, #080A04 50%, #050505 100%)`,
        }}
      />

      <div ref={ref} className="relative z-[2] w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-24 text-center">
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
          transition={{ delay: 0.4 }}
          className="headline-section mb-6"
        >
          Don't Wait For Permission.
          <br />
          <span className="gradient-lime-text">Claim Your World.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="body-large max-w-xl mx-auto mb-12"
        >
          No pricing pages. No slot counts. This is a movement for brands that understand
          attention is the only currency that matters. If that is you — let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="mailto:leads@infxmedia.xyz?subject=INFX%20TakeOver%20Inquiry"
            className="btn-cinematic"
          >
            <Mail size={16} />
            Start the Conversation
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              icon: Building2,
              title: "Brands",
              detail: "Retail, gaming, entertainment, tech — the categories changing everything.",
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
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-dark p-6 rounded-xl text-left">
                <Icon size={20} className="text-lime mb-3" />
                <h4 className="text-sm font-bold text-text-primary mb-1">{item.title}</h4>
                <p className="text-text-tertiary text-xs">{item.detail}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
