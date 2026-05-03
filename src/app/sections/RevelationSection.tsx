"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scan, Store, MonitorSmartphone, Database, Users, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Store,
    title: "Physical to Digital",
    description: "Walk into a store and experience your brand on the walls, the cups, the lights, the sounds, the scent. A complete brand world that doesn't exist on any screen you've ever seen before.",
  },
  {
    icon: MonitorSmartphone,
    title: "QR Everywhere",
    description: "Every surface carries a door to a deeper experience. Scan at the counter, scan on the cup, scan at the table. Each unlock a different chapter of your story.",
  },
  {
    icon: Scan,
    title: "AR Activation",
    description: "Point your phone at a branded surface and watch magic unfold. 3D products hovering over real cups. Interactive showcases floating in thin air. No app to download.",
  },
  {
    icon: Database,
    title: "First-Party Data",
    description: "Every scan is opt-in. Every engagement is captured with full POPIA compliance. You own the data. You own the audience. You own the insight. No cookies. No pixels. No bullshit.",
  },
  {
    icon: Users,
    title: "Community Conversion",
    description: "This isn't a campaign. It's a community hub. Customers become brand evangelists. They bring their friends. They post it. They live it. They own it.",
  },
];

export default function RevelationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="revelation" className="relative section-cinematic">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, rgba(204,255,0,0.04) 0%, transparent 50%),
                       linear-gradient(180deg, #050505 0%, #080A04 50%, #050505 100%)`,
        }}
      />

      <div ref={ref} className="section-cinematic-inner relative z-[2]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="eyebrow-lime mb-6"
        >
          The infx revelation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="headline-section mb-6 max-w-5xl"
        >
          We Don't Advertise.
          <br />
          <span className="gradient-lime-text">We Convert Space Into Your World.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="body-large max-w-2xl mb-16"
        >
          Imagine walking into a store and your brand is the environment. Walls. Cups. Lights. Sound. Air.
          Every sensory moment is yours. And every wall, every surface, every touchpoint becomes a data-capture 
          engine. Physical brand worlds. Digital intelligence.
        </motion.p>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.08 }}
                className={`card-dark p-8 rounded-xl group border-glow-lime ${
                  i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center shrink-0 group-hover:bg-lime/20 transition">
                    <Icon size={20} className="text-lime" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{pillar.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="flex justify-center"
        >
          <a href="#overnight" className="btn-cinematic">
            See How Fast It Happens
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
