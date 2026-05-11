'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ChevronDown, ChevronUp, Crown, MapPin, TrendingUp, AlertTriangle, Clock } from 'lucide-react';

const tiers = [
  {
    name: 'City TakeOver',
    stores: '5\u201310 Stores',
    priceRange: 'R400,000 \u2013 R600,000',
    perSlot: 'per TakeOver (3-month window)',
    cpm: 'R0.80',
    impressions: '500K\u2013750K',
    attention: '15-20 min avg',
    compare: 'Billboard = R180-350 CPM',
    multiplier: '225x cheaper per impression',
    features: [
      '5\u201310 store TakeOver',
      'Full store colourway transformation',
      'Co-branded packaging run',
      '1 co-branded menu item',
      'WebAR experience on every cup',
      'QR data capture (POPIA compliant)',
      'Real-time analytics dashboard',
      'Category exclusivity for your slot',
    ],
    popular: false,
  },
  {
    name: 'Region TakeOver',
    stores: '10\u201325 Stores',
    priceRange: 'R1,000,000 \u2013 R2,000,000',
    perSlot: 'per TakeOver (3-month window)',
    cpm: 'R0.53',
    impressions: '1.5M\u20133.75M',
    attention: '15-20 min avg',
    compare: 'Radio campaign = R120-200 CPM',
    multiplier: '380x cheaper per impression',
    features: [
      '10\u201325 store TakeOver',
      'Full store colourway transformation',
      'Co-branded packaging run',
      '2 co-branded menu items',
      'WebAR experience on every cup',
      'QR data capture (POPIA compliant)',
      'Real-time analytics dashboard',
      'Category exclusivity for your slot',
      'Dedicated account manager',
      'Launch event support',
    ],
    popular: true,
  },
  {
    name: 'National TakeOver',
    stores: '25\u2013100 Stores',
    priceRange: 'R3,000,000 \u2013 R8,000,000',
    perSlot: 'per TakeOver (3-month window)',
    cpm: 'R0.32',
    impressions: '3.75M\u201315M',
    attention: '15-20 min avg',
    compare: 'National TV campaign = R300-500 CPM',
    multiplier: '937x cheaper per impression',
    features: [
      '25\u2013100 store TakeOver',
      'Full store colourway transformation',
      'Co-branded packaging run',
      '3 co-branded menu items',
      'WebAR experience on every cup',
      'QR data capture (POPIA compliant)',
      'Real-time analytics dashboard',
      'Category exclusivity for your slot',
      'Dedicated account manager + team',
      'Launch event + PR support',
      'Custom data exports',
    ],
    popular: false,
  },
];

const escalation = [
  { year: 'Year 1', avg: 'R583K', total: 'R3.5M', stores: '10' },
  { year: 'Year 2', avg: 'R1.5M', total: 'R9M', stores: '25' },
  { year: 'Year 3', avg: 'R2.8M', total: 'R16.8M', stores: '40' },
  { year: 'Year 5', avg: 'R8M', total: 'R48M', stores: '65\u2013100' },
];

export default function PackagesPricingPage() {
  const [openTier, setOpenTier] = useState<number | null>(1);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Packages & Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Own Your Category. <span className="gradient-gold-text">Lock Your Competitors Out.</span>
            </h1>
            <p className="text-muted text-lg max-w-2xl">
              Pricing anchored to CPM equivalents — so your CFO sees the value instantly. 
              Scarcity IS the product. When your category is gone, it&apos;s gone for a year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FOUNDING PARTNER ───────────────────────────────── */}
      <section className="py-8 border-y border-gold/10 bg-gold/[0.03]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-sm justify-center flex-wrap"
          >
            <div className="flex items-center gap-2">
              <Crown size={16} className="text-gold" />
              <span className="text-gold font-semibold">Founding Partner Programme</span>
            </div>
            <span className="text-muted">Year 1 only. 3 spots. 15\u201320% discount + first refusal on Year 2.</span>
          </motion.div>
        </div>
      </section>

      {/* ─── TIERS ────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  tier.popular
                    ? 'border-2 border-gold bg-gradient-to-b from-gold/[0.08] to-transparent'
                    : 'border border-white/10 bg-white/[0.02] hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                    <div className="absolute top-4 right-4 bg-gold text-navy-dark text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  </>
                )}

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-gold" />
                      <span className="text-muted text-sm">{tier.stores}</span>
                    </div>
                  </div>

                  <p className="text-gold text-2xl md:text-3xl font-bold mb-1">{tier.priceRange}</p>
                  <p className="text-muted text-sm mb-6">{tier.perSlot}</p>

                  <div className="rounded-lg bg-white/[0.03] border border-white/5 p-4 mb-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted text-sm">Impressions:</span>
                      <span className="text-foreground font-semibold">{tier.impressions}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted text-sm">Attention Time:</span>
                      <span className="text-gold font-semibold">{tier.attention}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted text-sm">TakeOver CPM:</span>
                      <span className="text-gold font-bold">R{tier.cpm}</span>
                    </div>
                    <div className="w-full h-px bg-white/5" />
                    <div className="flex items-center justify-between">
                      <span className="text-muted text-sm">{tier.compare}</span>
                      <div className="w-24 h-2 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full" style={{ width: '15%' }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                      <TrendingUp size={12} />{tier.multiplier}
                    </div>
                  </div>

                  <button
                    onClick={() => setOpenTier(openTier === i ? null : i)}
                    className="w-full flex items-center justify-between text-left text-sm text-muted hover:text-foreground transition py-2 border-t border-white/5"
                  >
                    <span className="font-medium">What&apos;s included</span>{" "}
                    {openTier === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openTier === i ? 'auto' : 0, opacity: openTier === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 pt-3 pb-2">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted">
                          <Check size={14} className="text-gold shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <Link
                    href="/book-briefing/"
                    className={`mt-6 block w-full text-center font-semibold py-3 rounded-full transition ${
                      tier.popular
                        ? 'bg-gold text-navy-dark hover:bg-gold-light'
                        : 'border border-gold/50 text-gold hover:bg-gold/10'
                    }`}
                  >
                    {tier.popular ? 'Reserve This Tier' : 'Choose This Tier'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESCALATION ─────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={16} className="text-gold" />
              <p className="text-gold text-sm font-semibold uppercase tracking-wider">Pricing Escalation</p>
            </div>
            <h2 className="text-3xl font-bold mb-4">Year 1 Is The Cheapest It Will Ever Be</h2>
            <p className="text-muted max-w-xl">
              More stores = more impressions = higher value per slot. Founding Partners lock in Year 1 pricing 
              with first refusal on Year 2.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="py-4 text-gold text-sm font-semibold">Year</th>
                  <th className="py-4 text-gold text-sm font-semibold">Avg Price / Slot</th>
                  <th className="py-4 text-gold text-sm font-semibold">Total (6 Slots)</th>
                  <th className="py-4 text-gold text-sm font-semibold">Store Network</th>
                </tr>
              </thead>
              <tbody>
                {escalation.map((row, i) => (
                  <tr key={row.year} className={`border-b border-white/5 ${i === 0 ? 'bg-gold/5' : ''}`}>
                    <td className="py-4 font-semibold">{row.year}</td>
                    <td className="py-4">{row.avg}</td>
                    <td className="py-4">{row.total}</td>
                    <td className="py-4 text-muted">{row.stores} stores</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-premium rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock size={20} className="text-gold" />
              <h3 className="text-2xl md:text-3xl font-bold">Your Competitor Is Evaluating This Right Now.</h3>
            </div>
            <p className="text-muted max-w-2xl mx-auto mb-8">
              If they commit before you, your category is locked for the year. There is no second chance — only 6 slots, 
              strict category exclusivity. 15 minutes of captive attention per customer vs 1.5 seconds on a billboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-briefing/"
                className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition glow-gold"
                prefetch={false}
              >
                <TrendingUp size={18} />
                Book a TakeOver Briefing
              </Link>
              <Link
                href="/data-advantage/"
                className="inline-flex items-center gap-2 border border-gold/50 text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition"
                prefetch={false}
              >
                Calculate Your ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
