'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Target, Shield, TrendingUp, Users, Zap, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Captive Attention',
    stat: '15-20 min',
    desc: 'Your customer walks into a branded environment. Not a billboard they drive past — a space where every wall, cup, and screen is your message.',
    gradient: 'from-gold/20 to-transparent',
  },
  {
    icon: Shield,
    title: 'Category Exclusivity',
    stat: '1 per slot',
    desc: 'One Telco. One Bank. One Sportswear brand per year. Booking your category locks out every competitor. That\'s not frequency — that\'s ownership.',
    gradient: 'from-gold-dark/20 to-transparent',
  },
  {
    icon: Zap,
    title: 'Instant Transformation',
    stat: '15 min',
    desc: 'Magnetic panels. Snap-in rails. RGBW LEDs. The entire store transforms in 15 minutes per location. No construction. No downtime. No waiting.',
    gradient: 'from-amber/20 to-transparent',
  },
  {
    icon: TrendingUp,
    title: 'Data That Converts',
    stat: '0.80 CPM',
    desc: 'Billboard = R350 CPM, zero data. TakeOver = R0.80 CPM, full POPIA-compliant lead capture. Every QR scan is a lead. Every AR session is insight.',
    gradient: 'from-gold/20 to-transparent',
  },
  {
    icon: Users,
    title: 'Real Customers',
    stat: '10+ stores',
    desc: 'Not impressions. Not views. Real people walking into real stores, holding real cups with your brand on them. Physical presence in a digital world.',
    gradient: 'from-gold-dark/20 to-transparent',
  },
  {
    icon: Globe,
    title: 'National Network',
    stat: 'JHB | CPT | DBN',
    desc: 'From your first store to nationwide. Start local, go national. The same store infrastructure — whether it\'s Bedfordview or Cape Town.',
    gradient: 'from-amber/20 to-transparent',
  },
];

const phases = [
  {
    num: '01',
    title: 'Franchise Network',
    desc: 'Papa Pasta stores are the venues. Physical infrastructure = media real estate. Every new store = a new billboard you can own.',
  },
  {
    num: '02',
    title: 'Engagement Layer',
    desc: 'WebAR, loyalty, data capture — all POPIA compliant. Not just an ad platform — a full engagement ecosystem.',
  },
  {
    num: '03',
    title: 'Media Agency',
    desc: 'INFX Solutions sells the captive audience to brands who want more than impressions. We sell attention. Real attention.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">About INFX Solutions</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We Sell What Other Media <br className="hidden md:block" />
              <span className="gradient-gold-text">Can&apos;t Deliver:</span> Captive Attention.
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              INFX Solutions is the media arm of Infinity Brands (Pty) Ltd. We don&apos;t rent ad space. We create it — 
              inside physical stores where customers spend 15-20 minutes fully immersed in your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── THE PILLARS ────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">The INFX Advantage</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Media Buying. <span className="gradient-gold-text">Media Creation.</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Traditional media buys attention you hope to get. We build spaces where attention is guaranteed. 
              Here&apos;s what makes that possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative rounded-xl card-premium overflow-hidden p-8 hover:border-gold/40 transition-all"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.gradient}`} />
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold gradient-gold-text mb-2">{p.stat}</div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PHASES ───────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Our Architecture</p>
            <h2 className="text-3xl font-bold mb-4">
              Three Phases. <span className="gradient-gold-text">One Vision.</span>
            </h2>
            <p className="text-muted max-w-xl">
              INFX Solutions was built in three deliberate phases — each one creating a moat that makes the next phase stronger.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-premium rounded-xl p-8 text-center hover:border-gold/30 transition-all"
              >
                <span className="text-gold text-4xl font-bold opacity-40">{phase.num}</span>
                <h3 className="text-xl font-bold mt-3 mb-3">{phase.title}</h3>
                <p className="text-muted text-sm">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="gradient-gold-text">Own Your Category</span>?
            </h3>
            <p className="text-muted max-w-xl mx-auto mb-8">
              6 slots. 6 categories. When your competitor books, you wait a year. That&apos;s not marketing — that&apos;s a structural advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-briefing/"
                className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light hover:scale-105 active:scale-95 transition glow-gold"
                prefetch={false}
              >
                <ArrowRight size={18} />
                Book a TakeOver Briefing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
