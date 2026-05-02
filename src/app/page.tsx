'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp } from 'lucide-react';
import SlotCalendar from './components/SlotCalendar';

const stats = [
  { value: '6', label: 'TakeOvers per year', suffix: '' },
  { value: '10', label: 'Stores live now', suffix: '+' },
  { value: '5–20', label: 'min AR dwell time', suffix: '' },
  { value: 'R0.', label: '80 CPM equivalent', suffix: '' },
];

const examples = [
  {
    category: 'Telco', brand: 'e.g. MTN',
    headline: 'Every Cup Gives You Data. Every Wall Is Your Yellow.',
    color: '#FFD700', icon: 'Wifi',
    result: '840K–2.4M branded impressions across 10 stores',
  },
  {
    category: 'Banking', brand: 'e.g. FNB / Investec',
    headline: 'Your Branch Is a Pasta Shop. Your Audience Is Already Inside.',
    color: '#22C55E', icon: 'Building2',
    result: 'HQ demographic lead capture, POPIA-compliant',
  },
  {
    category: 'Sportswear', brand: 'e.g. Nike',
    headline: 'Your Kit Is on Their Cup. Your Brand Is on Their Wall.',
    color: '#EF4444', icon: 'Shirt',
    result: '4 collectible cup drops, AR virtual try-on drives repeat visits',
  },
  {
    category: 'Entertainment', brand: 'e.g. Netflix',
    headline: 'Your Show Is the Special. Every Cup Is a Trailer.',
    color: '#8B5CF6', icon: 'Clapperboard',
    result: '5–20 min AR dwell per customer, deeper than any trailer ad',
  },
  {
    category: 'Sport/Event', brand: 'e.g. PSL / Rugby',
    headline: 'Match Day Is TakeOver Day. Every Store Is a Fan Zone.',
    color: '#3B82F6', icon: 'Trophy',
    result: 'Event-driven foot traffic spike + social amplification',
  },
  {
    category: 'Wildcard Launch', brand: 'e.g. iPhone',
    headline: 'Your Launch Isn’t Online. It’s in Their Hands.',
    color: '#EC4899', icon: 'Smartphone',
    result: 'Physical product experience in food environment',
  },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const listener = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ y, opacity }} className="absolute inset-0 grid-pattern">
</motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background">
</div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-[120px]">
</div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-amber/5 blur-[120px]">
</div>

        <motion.div style={{ y, opacity }} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 border border-gold/30 bg-gold/5 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse">
</span>
            <span className="text-gold text-sm font-medium">Africa&aposs;s First QSR Store TakeOver Platform</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Your Brand Doesn&apos;t Advertise{' '}
            <em className="text-muted">Near Customers</em>.
            <br />
            It <span className="gradient-gold-text">Becomes The Store</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Papa Pasta is one of the first QSR letting brands take over an entire store —{' '}
            <span className="text-foreground font-medium">walls, cups, menu, AR, loyalty, data</span>.
            <br />
            <span className="text-gold font-semibold">6 slots. 1 per category.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/how-it-works/" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light hover:scale-105 active:scale-95 transition glow-gold" prefetch={false}>
              <Play size={18} />
              See How It Works
            </Link>
            <Link href="/book-briefing/" className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/10 transition" prefetch={false}>
              <ArrowRight size={18} />
              Book a TakeOver Briefing
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="mt-16 flex items-center gap-2 text-muted text-xs font-medium uppercase tracking-wider justify-center">
            Scroll to explore
            <div className="w-4 h-4 border-b-2 border-r-2 border-gold/50 rotate-45 animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">2027 TakeOver Calendar</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">6 Slots. 6 Categories. 6 Chances to Own The Space.</h2>
            <p className="text-muted max-w-xl mx-auto">When your competitor books a TakeOver, your category is locked for the year. Don&apos;t wait.</p>
          </motion.div>
          <SlotCalendar />
        </div>
      </section>

      <section className="relative py-16 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-gold-text mb-2">
                  {stat.value}<span className="text-gold text-xl">{stat.suffix}</span>
                </div>
                <p className="text-muted text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">What Brands Can Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not One-Size-Fits-All.{' '}
              <span className="gradient-gold-text">Every TakeOver Is Bespoke.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((ex, i) => (
              <motion.div key={ex.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="group relative rounded-xl card-premium overflow-hidden transition-all duration-500 hover:border-gold/40">
                <div className="h-1.5 w-full transition-all duration-500 group-hover:h-2" style={{ backgroundColor: ex.color }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: `${ex.color}15`, color: ex.color }}>{ex.category}</span>
                    <span className="text-muted text-xs flex items-center gap-1">
<Star size={12} /> {ex.brand}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{ex.headline}</h3>
                  <p className="text-muted text-sm leading-relaxed">{ex.result}</p>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: `${ex.color}10`, color: ex.color }}>
                      <div className="w-5 h-5 rounded-sm" style={{ backgroundColor: ex.color }} />
                    </div>
                    <span className="text-xs text-muted">Store colourway changes in 15 min</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-6">Trusted by forward-thinking brands</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10">
              {['MTN', 'FNB', 'Nedbank', 'Investec', 'Vodacom', 'Discovery', 'Nike', 'Springboks'].map((name) => (
                <div key={name} className="group relative opacity-40 hover:opacity-100 transition duration-300">
                  <span className="text-foreground text-sm md:text-base font-bold tracking-wide">{name}</span>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gold opacity-0 group-hover:opacity-100 transition whitespace-nowrap">Category available</span>
                </div>
              ))}
            </div>
            <p className="text-muted text-sm">Logos shown for category illustration only — no endorsement implied.</p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-2xl border border-gold/20 bg-gradient-to-br from-navy/40 to-navy-dark/60 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30">
</div>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gold/5 blur-[80px]">
</div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-amber/5 blur-[80px]">
</div>

            <div className="relative z-10 py-16 px-8 md:px-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to <span className="gradient-gold-text">Take Over</span>?
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto mb-8">
                Your brand deserves more than 1.5 seconds on a billboard. Lock in your category slot before your competitor does.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/book-briefing/" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light hover:scale-105 active:scale-95 transition glow-gold" prefetch={false}>
                  <ArrowRight size={18} />
                  Book a TakeOver Briefing
                </Link>
                <Link href="/book-briefing/?mockup=1" className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold/10 transition" prefetch={false}>
                  <TrendingUp size={18} />
                  Get Custom Mockup
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
