"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, ShoppingBag, Coffee, PartyPopper, ArrowRight } from "lucide-react";

const activations = [
  {
    icon: ShoppingBag,
    title: "QR Drops & Freebies",
    desc: "Every scan unlocks a reward. Every reward deepens the bond. The cup is the entry point. The portal is the rabbit hole.",
  },
  {
    icon: Coffee,
    title: "Tasting Pop-ups",
    desc: "Product sampling inside your brand world. The person walking in to eat is tasting your product before they know your name.",
  },
  {
    icon: PartyPopper,
    title: "Launch Events",
    desc: "Your product launch isn&apos;t a press release. It&apos;s a physical experience. Live product reveal inside your branded QSR.",
  },
  {
    icon: Flame,
    title: "Seasonal TakeOvers",
    desc: "Halloween. Christmas. Back to School. Your brand owns the cultural moment &mdash; inside the place where people already gather.",
  },
];

export default function ActivationEngine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="activation" className="relative section-cinematic">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 40% 20%, rgba(204,255,0,0.03) 0%, transparent 40%),
                       linear-gradient(180deg, #050505 0%, #080604 50%, #050505 100%)`,
        }}
      />

      <div ref={ref} className="section-cinematic-inner relative z-[2]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="eyebrow-lime mb-6"
        >
          The QSR Activation Engine
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="headline-section mb-6 max-w-5xl"
        >
          Activation Through QSR.
          <br />
          <span className="gradient-lime-text">Real Spaces. Real Touch. Real Conversion.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="body-lg max-w-2xl mb-16"
        >
          Your activation isn&apos;t a pop-up tent in a parking lot. It&apos;s inside a permanent, trusted,
          daily-trafficked space. People eat here every day. Your brand becomes part of their habit.{" "}
          <span className="text-lime font-semibold">Not an event. An environment.</span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {activations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark p-8 border-glow-lime"
              >
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-lg bg-lime/10 flex items-center justify-center shrink-0 group-hover:bg-lime/20 transition-colors duration-300">
                    <Icon size={22} className="text-lime" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                    <p className="body-sm">{item.desc}</p>
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
          className="card-glass p-8 md:p-12 border-glow-lime text-center"
        >
          <h3 className="headline-sub !text-text-primary mb-4">Your Brand Is The Vibe.</h3>
          <p className="body-sm max-w-xl mx-auto mb-8">
            Not an ad on the wall. Not a sticker on a window. Your brand IS the store. The music.
            The menu font. The cup design. The wall art. The QR code that leads deeper. A total sensory
            ecosystem &mdash; flipped overnight.
          </p>
          <a href="#contact" className="btn-cinematic inline-flex">
            Let&apos;s Talk
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
