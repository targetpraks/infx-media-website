"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "Papa Pasta", initial: "PP", color: "#CCFF00" },
  { name: "INFX Media", initial: "IN", color: "#00E5CC" },
  { name: "NeonForge", initial: "NF", color: "#FF0033" },
  { name: "VoltCity", initial: "VC", color: "#CCFF00" },
  { name: "StrikeQSR", initial: "SQ", color: "#00E5CC" },
  { name: "Atlas Retail", initial: "AR", color: "#FF0033" },
  { name: "Zenith Gaming", initial: "ZG", color: "#CCFF00" },
  { name: "Blok Haus", initial: "BH", color: "#00E5CC" },
];

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* subtle background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(204,255,0,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-4">Trusted by</p>
          <h2 className="headline-section mb-6">
            Brands That Own{" "}
            <span className="gradient-lime-text">Attention</span>
          </h2>
          <p className="body-lg max-w-xl mx-auto mb-14">
            From QSR chains to gaming studios — the brands shaping retail media trust INFX to
            convert physical space into brand worlds.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={{
                hidden: { opacity: 0, scale: 0.92 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="card-dark group flex flex-col items-center justify-center gap-3 py-8 px-4 hover:border-white/15 transition-colors"
            >
              {/* CSS-only logo placeholder */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-mono font-bold text-lg"
                style={{
                  background: `${client.color}10`,
                  color: client.color,
                  border: `1px solid ${client.color}25`,
                }}
              >
                {client.initial}
              </div>
              <span className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
