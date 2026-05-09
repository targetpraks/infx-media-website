"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin, Layers, Rocket } from "lucide-react";

const steps = [
  { time: "18:00", title: "Call Received", detail: "Brand brief confirmed. Creative asset lock begins." },
  { time: "19:30", title: "Artwork Approved", detail: "Print-ready across all touchpoints. Material check complete." },
  { time: "21:00", title: "Crew Deployed", detail: "Teams at 3 locations simultaneously. Walls, lights, cups, counters." },
  { time: "23:00", title: "Installation Live", detail: "The physical conversion is underway. Dark store, spotlights, precision." },
  { time: "05:00", title: "Quality Check", detail: "Final walkthrough. Every QR scannable. Every surface pristine." },
  { time: "08:00", title: "Doors Open", detail: "Customers walk in. Your brand is the air they breathe." },
];

const cities = ["Johannesburg", "Pretoria", "Centurion", "Sandton"];

export default function OvernightTakeOver() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overnight" className="relative section-cinematic">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, rgba(50,30,0,0.3) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 70%, rgba(30,50,30,0.2) 0%, transparent 50%),
                       linear-gradient(180deg, #050505 0%, #0A0804 50%, #050505 100%)`,
        }}
      />

      <div ref={ref} className="section-cinematic-inner relative z-[2]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="eyebrow-lime mb-6"
        >
          14 Hours. One Location. Overnight.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="headline-section mb-6 max-w-5xl"
        >
          From Empty Walls to
          <br />
          <span className="gradient-lime-text">Brand Universe.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="body-lg max-w-2xl mb-16"
        >
          Multi-location deployment. Instant. Efficient. The conversion happens overnight while the
          world sleeps. Multiple stores, same brand, same experience &mdash; all flipped by sunrise.{" "}
          <span className="text-lime font-semibold">Your brand is the space they enter.</span>
        </motion.p>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-lime/10" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={step.time}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-8 mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-lime shadow-[0_0_14px_rgba(204,255,0,0.6)]" />
                </div>

                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
                  <div className="card-dark p-6 border-glow-lime">
                    <div className="flex items-center gap-3 mb-2">
                      <Clock size={14} className="text-lime" />
                      <span className="text-lime text-sm font-bold font-mono">{step.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-text-secondary text-xs hover:border-lime/30 hover:text-lime transition-all duration-300"
            >
              <MapPin size={12} className="text-lime" />
              {city}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
