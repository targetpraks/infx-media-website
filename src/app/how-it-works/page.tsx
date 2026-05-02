'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SlotCalendar from '../components/SlotCalendar';

const steps = [
  { num: '01', title: 'Briefing', desc: 'We meet with your team for 30 min. We learn your brand DNA, campaign goals, and ideal customer experience.', color: '#C8A951' },
  { num: '02', title: 'Design \u0026 Simulator', desc: 'Designers generate 3 photorealistic TakeOver concepts within 48-72 hours using the TakeOver Simulator.', color: '#E8D494' },
  { num: '03', title: 'Install \u0026 Refine', desc: 'Magnetic fascia panels, LED strips, snap-in rails, cup runs — all swapped in 15 minutes at each store.', color: '#A68B3F' },
  { num: '04', title: 'Launch', desc: 'Your TakeOver goes live. AR triggers, QR codes, loyalty integration, and data capture all activate.', color: '#C8A951' },
  { num: '05', title: 'Monitor', desc: 'Real-time dashboard: impressions, foot traffic, QR scans, AR dwell time, social mentions.', color: '#E8D494' },
];

const changes = [
  { label: 'Store Exterior', detail: 'Window vinyl, door wrap, entrance signage' },
  { label: 'Interior Walls', detail: 'LED strips \u0026 wall panels set to your corporate colour' },
  { label: 'Counter \u0026 Menu', detail: 'Magnetic fascia + snap-in menu rails re-themed' },
  { label: 'Packaging', detail: 'Cups, bowls, sleeves, bags — all co-branded' },
  { label: 'Cup AR', detail: 'Hololink QR → immersive AR experience per scan' },
  { label: 'Co-Branded Menu Item', detail: 'Special pasta item, tie-in offer, loyalty integration' },
  { label: 'Digital Screens', detail: 'All in-store screens show branded content loops' },
  { label: 'Receipts \u0026 App', detail: 'App skins, receipt call-to-actions, push notifications' },
];

const techStack = [
  { name: 'RGBW LED Strips', purpose: 'Instant colour change across all stores, zero physical refit', icon: '\u{1F3A8}' },
  { name: 'Magnetic Fascia Panels', purpose: 'Counter signage swap in 15 minutes, tool-free', icon: '\u{1F9F2}' },
  { name: 'Snap-In Menu Rails', purpose: 'Menu text swap without tools or downtime', icon: '\u{1F4CB}' },
  { name: 'Hololink WebAR', purpose: '5-20 min AR dwell on every cup vs 1.5 sec billboard', icon: '\u{1F4F1}' },
  { name: 'QR Tiger Codes', purpose: 'Batch QR on every cup — full data capture pipeline', icon: '\u{1F4CA}' },
  { name: 'Como Loyalty', purpose: 'DoubleXP points during TakeOver = drive repeat visits', icon: '\u2B50' },
  { name: 'Tuya IoT', purpose: 'Remote smart lighting orchestration across store network', icon: '\u{1F4A1}' },
  { name: 'PosBytz Point-of-Sale', purpose: 'Co-branded menu item tracking + receipt data', icon: '\u{1F4BB}' },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">The Process</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Brand Becomes The Store</h1>
            <p className="text-muted text-lg max-w-2xl">From first briefing to live TakeOver in under 3 weeks. Every surface. Every cup. Every moment.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="relative space-y-8">
            <div className="absolute left-6 md:left-10 top-8 bottom-8 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent">
</div>
            {steps.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="relative pl-16 md:pl-24">
                <div className="absolute left-0 md:left-2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 shadow-lg" style={{ borderColor: step.color, backgroundColor: 'rgba(11,17,32,0.95)' }}>

                  <span className="text-gold font-bold text-sm">{step.num}</span>
                </div>
                <div className="card-premium rounded-xl p-6">
                  <h3 className="text-xl font-bold mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">What Changes</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Visible Surface. Every Digital Touchpoint.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {changes.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }} className="flex items-start gap-4 p-5 rounded-xl card-premium">
                <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block mb-1">{item.label}</span>
                  <span className="text-muted text-sm">{item.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">The Technology Stack</p>
            <h2 className="text-3xl md:text-4xl font-bold">Built to Change Instantly</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((tech, i) => (
              <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} viewport={{ once: true }} className="card-premium rounded-xl p-5 hover:border-gold/50 transition-all">
                <span className="text-2xl mb-3 block">{tech.icon}</span>
                <span className="font-semibold text-sm block mb-2">{tech.name}</span>
                <p className="text-muted text-xs leading-relaxed">{tech.purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">6 Slots. 1 Per Category.</h2>
            <p className="text-muted">See availability and lock in your slot.</p>
          </motion.div>
          <SlotCalendar compact />
        </div>
      </section>
    </>
  );
}
