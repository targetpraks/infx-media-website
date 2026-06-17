'use client';

import { motion } from 'framer-motion';
import { Clock, CreditCard, Trophy, Wifi, Eye, Building2, Shirt, Clapperboard, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SlotCalendar from '../components/SlotCalendar';

const steps = [
  {
    num: '01',
    title: 'The Briefing',
    subtitle: '30 Minutes. Your Vision. Our Canvas.',
    desc: 'We sit down with your team. Not a pitch — a conversation. You tell us your brand DNA, your campaign goals, the feeling you want customers to have when they walk in. We listen. Then we show you what\'s possible.',
    duration: '30 min video call',
    deliverable: 'TakeOver Concept Deck',
    color: '#C8A951',
  },
  {
    num: '02',
    title: 'The Vision',
    subtitle: '48-72 Hours. Photorealistic Mockups.',
    desc: 'Our designers generate 3 fully rendered TakeOver concepts. See your brand on the walls, on the cups, in the AR experience. Not wireframes — photorealistic. This is what your customer will see.',
    duration: '48-72 hours',
    deliverable: '3 TakeOver Mockups + AR Preview',
    color: '#E8D494',
  },
  {
    num: '03',
    title: 'The Build',
    subtitle: 'Your Brand. Installed in Every Store.',
    desc: 'Magnetic fascia panels snap into place. LED strips switch to your colourway. Menu rails swap in minutes. Co-branded cups arrive. The entire store transforms — tool-free, in 15 minutes per location.',
    duration: '1-2 weeks',
    deliverable: 'Fully branded store environment',
    color: '#A68B3F',
  },
  {
    num: '04',
    title: 'The Launch',
    subtitle: 'Your TakeOver Goes Live.',
    desc: 'AR triggers activate on every cup. QR codes go live. Loyalty points double. Push notifications fire. Your customer walks in hungry. They walk out a brand evangelist.',
    duration: 'Day 1 of takeover',
    deliverable: 'Live TakeOver + Full activation stack',
    color: '#C8A951',
  },
  {
    num: '05',
    title: 'The Insight',
    subtitle: 'Real-Time Data. Real Competitive Edge.',
    desc: 'Every scan, every AR session, every loyalty signup — tracked. Dashboard shows impressions, dwell time, foot traffic, social mentions. This is what billboard budgets dream of collecting.',
    duration: 'Ongoing',
    deliverable: 'Live analytics dashboard + monthly report',
    color: '#E8D494',
  },
];

const transformations = [
  {
    label: 'Store Exterior',
    detail: 'Window vinyl, door wrap, entrance signage — your brand before they even walk in',
    icon: Building2,
  },
  {
    label: 'Interior Walls',
    detail: 'LED strips & wall panels set to your corporate colour — atmosphere is your brand',
    icon: Eye,
  },
  {
    label: 'Counter & Menu',
    detail: 'Magnetic fascia + snap-in menu rails re-themed — no tools, no downtime',
    icon: CreditCard,
  },
  { label: 'Packaging', detail: 'Cups, bowls, sleeves, bags — all co-branded, all collectible', icon: Shirt },
  {
    label: 'Cup AR Experience',
    detail: 'Hololink QR → immersive AR experience per scan. 5-20 min dwell per customer.',
    icon: Smartphone,
  },
  {
    label: 'Co-Branded Menu Item',
    detail: 'Special pasta item, tie-in offer, loyalty integration — taste your brand',
    icon: Clapperboard,
  },
  {
    label: 'Digital Screens',
    detail: 'All in-store screens show branded content loops — no dead air',
    icon: Eye,
  },
  {
    label: 'Receipts & App',
    detail: 'App skins, receipt call-to-actions, push notifications — every touchpoint',
    icon: Wifi,
  },
];

const techStack = [
  { name: 'RGBW LED Strips', purpose: 'Your brand colour in every store, instantly', icon: '\u{1F3A8}' },
  { name: 'Magnetic Fascia Panels', purpose: 'Swap signage in 15 min, tool-free', icon: '\u{1F9F2}' },
  { name: 'Snap-In Menu Rails', purpose: 'Menu text swap without downtime', icon: '\u{1F4CB}' },
  { name: 'Hololink WebAR', purpose: '5-20 min AR dwell vs 1.5 sec billboard', icon: '\u{1F4F1}' },
  { name: 'QR Tiger Codes', purpose: 'Full data capture on every cup scan', icon: '\u{1F4CA}' },
  { name: 'Como Loyalty', purpose: 'Double XP = repeat visits during TakeOver', icon: '\u2B50' },
  { name: 'Tuya IoT', purpose: 'Remote lighting orchestration across stores', icon: '\u{1F4A1}' },
  { name: 'PosBytz POS', purpose: 'Co-branded menu tracking + receipt data', icon: '\u{1F4BB}' },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">The Journey</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              From First Call to <span className="gradient-gold-text">Live TakeOver</span> in Under 3 Weeks.
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              No creative agency back-and-forth. No 6-month production cycle. Brief on Monday, mockup by Wednesday, 
              live by Friday. Your brand becomes the store faster than most campaigns get approved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="relative space-y-12">
            <div className="absolute left-6 md:left-10 top-8 bottom-8 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16 md:pl-24"
              >
                <div
                  className="absolute left-0 md:left-2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 shadow-lg"
                  style={{ borderColor: step.color, backgroundColor: 'rgba(11,17,32,0.95)' }}
                >
                  <span className="text-gold font-bold text-sm">{step.num}</span>
                </div>
                <div className="card-premium rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold mt-1">{step.title}</h3>
                    <div className="flex items-center gap-2 mt-2 md:mt-0"
                    >
                      <Clock size={14} className="text-gold" />
                      <span className="text-muted text-xs">{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-gold text-sm font-medium mb-2">{step.subtitle}</p>
                  <p className="text-muted text-sm leading-relaxed mb-4">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 text-xs bg-gold/5 border border-gold/20 rounded-full px-3 py-1.5"
                  >
                    <Trophy size={12} className="text-gold" />
                    <span className="text-gold font-medium">Deliverable: {step.deliverable}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT CHANGES ─────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">What Changes</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every Surface. Every Touchpoint. <span className="gradient-gold-text">Every Moment.</span>
            </h2>
            <p className="text-muted max-w-2xl">
              This isn’t a sticker on a window. It’s a complete sensory transformation. Your customer sees your brand,
              hears your brand, holds your brand, tastes your brand — and takes your brand home in their hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {transformations.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 rounded-xl card-premium hover:border-gold/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0"
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">{item.label}</span>
                    <span className="text-muted text-sm">{item.detail}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">The Technology Stack</p>
            <h2 className="text-3xl md:text-4xl font-bold">Built to Change Instantly</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="card-premium rounded-xl p-5 hover:border-gold/50 transition-all"
              >
                <span className="text-2xl mb-3 block">{tech.icon}</span>
                <span className="font-semibold text-sm block mb-2">{tech.name}</span>
                <p className="text-muted text-xs leading-relaxed">{tech.purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALENDAR ───────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-3">6 Slots. 1 Per Category.</h2>
            <p className="text-muted">See availability and lock in your slot.</p>
          </motion.div>
          <SlotCalendar compact />

          <div className="mt-12 text-center">
            <Link
              href="/book-briefing/"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light hover:scale-105 active:scale-95 transition glow-gold"
              prefetch={false}
            >
              <ArrowRight size={18} />
              Lock In Your Category Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
