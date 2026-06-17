'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: 'We already do billboard / radio / digital — why do we need this?',
    a: 'You are paying for 1.5 seconds of attention. A billboard glance = 1.5s. A radio spot = 30s. A TakeOver = 5–20 minutes of dwell in your branded environment. You don’t replace your media budget — you upgrade the bottom 15% into something that holds attention.',
  },
  {
    q: 'R400K is a lot for a QSR takeover — how is this worth it?',
    a: 'CPM math: 10 stores x 25,000 monthly visitors = 250,000 impressions/month. At R600K over 3 months = R0.80 CPM. A Gauteng billboard runs at R180–350 CPM. That is 225–400x cheaper per impression — and that ignores AR, loyalty, data capture, and brand affinity.',
  },
  {
    q: 'How do we know this actually works? No one has done this before.',
    a: 'The individual technologies are proven — RGBW LED, WebAR, QR data, magnetic signage. What is new is combining them in one platform. Join the Founding Partner programme and be in the proof — or wait and pay 40% more next year.',
  },
  {
    q: 'What if the store looks bad with our brand colours?',
    a: 'The TakeOver Simulator generates a photorealistic mockup of your brand in our store before you commit. You approve the design before we touch a single LED panel. Our interior team works with your brand guidelines to elevate both brands.',
  },
  {
    q: 'What happens when the TakeOver ends?',
    a: 'Every physical change is modular: magnetic fascia, snap-in rails, LED programming. In 15 minutes we revert to the next brand’s design. Zero construction. Zero paint. Zero permanent changes. Zero store downtime.',
  },
  {
    q: 'Can our competitor also book a TakeOver?',
    a: 'No. Category exclusivity is non-negotiable. If MTN books the Telco slot, Vodacom cannot book ANY TakeOver in that calendar year. One brand per category. Full stop.',
  },
  {
    q: 'What if not enough stores are open when our TakeOver runs?',
    a: 'Your contract includes a Store-Count Guarantee. If fewer stores than specified are operational, you receive a pro-rata refund or credit. You may also reschedule (within the same year) if network growth needs more time.',
  },
  {
    q: 'Our agency handles our media buying. Can they work with you?',
    a: 'Yes. The Agency Partner Programme gives co-branded pitch decks, creative spec packs, a 10% referral commission on booked TakeOvers, and a dedicated agency liaison.',
  },
  {
    q: 'We are a small brand. R400K is out of reach.',
    a: 'City tier covers 5–10 stores at under R1 CPM. Options include: sharing a Wildcard slot with a non-competing brand (60% cost each), the Founding Partner 15–20% discount, or starting with one City metro and expanding after proving the model.',
  },
  {
    q: 'What data do we actually get?',
    a: 'Real first-party data: foot traffic by hour, QR scan counts by store, AR dwell time averages, cup inventory per location, social mention tracking, and loyalty sign-ups. All POPIA compliant. All aggregated by default. Individual data only with explicit opt-in.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Every CMO Question, Answered</h1>
            <p className="text-muted text-lg max-w-2xl">These are the 10 questions that kill deals if unanswered. We answer them with data, logic, and proof.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden card-premium">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-start justify-between text-left p-5 md:px-6">
                  <span className="font-medium text-sm md:text-base pr-4">{faq.q}</span>{" "}
                  {openIndex === i ? <ChevronUp size={20} className="text-gold shrink-0" /> : <ChevronDown size={20} className="text-muted shrink-0" />}
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-5 text-muted text-sm leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <div className="card-premium rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-muted max-w-xl mx-auto mb-8">Book a 30-minute TakeOver briefing. We’ll answer your questions and show you a custom mockup.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-briefing/" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition glow-gold">
                <ArrowRight size={18} />
                Book a Briefing
              </Link>
              <Link href="/data-advantage/" className="inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-4 rounded-full font-medium hover:bg-gold/10 transition">
                <TrendingUp size={18} />
                Calculate ROI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
