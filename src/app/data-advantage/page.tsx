'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

const BILLBOARD_CPM = 265;
const RADIO_CPM = 160;
const DIGITAL_CPM = 60;

export default function DataAdvantagePage() {
  const [metro, setMetro] = useState('JHB');
  const [budget, setBudget] = useState(500000);
  const [duration, setDuration] = useState(3);

  const storeCounts: Record<string, number> = { JHB: 8, CPT: 4, DBN: 3, 'All SA': 10 };
  const trafficPerStore = 25000;
  const takeOverDwell = 12;

  const metroStores = storeCounts[metro];
  const monthlyTraffic = metroStores * trafficPerStore;
  const totalImpressions = monthlyTraffic * duration;
  const takeOverCPM = totalImpressions > 0 ? (budget / totalImpressions) * 1000 : 0;

  const calculateMediaEquivalent = (cpm: number) => {
    const cost = totalImpressions * (cpm / 1000);
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(cost);
  };

  const billboardEquiv = calculateMediaEquivalent(BILLBOARD_CPM);
  const radioEquiv = calculateMediaEquivalent(RADIO_CPM);
  const digitalEquiv = calculateMediaEquivalent(DIGITAL_CPM);
  const dataCaptureVolume = Math.round(totalImpressions * 0.35);

  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">The Data Advantage</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Every Cup Is a Data Point</h1>
            <p className="text-muted text-lg max-w-2xl">Billboards give you zero data. Radio gives you zero data. A TakeOver gives you names, emails, phones, dwell times, and social behaviors — all POPIA compliant.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="py-5 px-6 text-gold text-sm font-semibold">Channel</th>
                    <th className="py-5 px-6 text-gold text-sm font-semibold">CPM (SA)</th>
                    <th className="py-5 px-6 text-gold text-sm font-semibold">Attention Time</th>
                    <th className="py-5 px-6 text-gold text-sm font-semibold">Data Capture</th>
                    <th className="py-5 px-6 text-gold text-sm font-semibold">Can Your Competitor Match?</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="py-5 px-6">Gauteng Billboard</td>
                    <td className="py-5 px-6 text-red-400">R180\u2013350</td>
                    <td className="py-5 px-6 text-red-400">1.5 seconds</td>
                    <td className="py-5 px-6 text-red-400">0 names</td>
                    <td className="py-5 px-6 text-muted">Yes — billboard next to yours</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-5 px-6">Radio (Gauteng, 3mo)</td>
                    <td className="py-5 px-6 text-red-400">R120\u2013200</td>
                    <td className="py-5 px-6 text-red-400">30 seconds</td>
                    <td className="py-5 px-6 text-red-400">0 names</td>
                    <td className="py-5 px-6 text-muted">Yes — next ad slot</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-5 px-6">Digital Display</td>
                    <td className="py-5 px-6 text-red-400">R40\u201380</td>
                    <td className="py-5 px-6 text-red-400">0.7 seconds</td>
                    <td className="py-5 px-6 text-red-400">0 PII (cookies only)</td>
                    <td className="py-5 px-6 text-muted">Yes — same platform</td>
                  </tr>
                  <tr className="bg-emerald-500/5 border-b border-gold/20">
                    <td className="py-5 px-6 font-bold text-gold">Papa Pasta TakeOver</td>
                    <td className="py-5 px-6 font-bold text-emerald-400">\u003cR1.00</td>
                    <td className="py-5 px-6 font-bold text-emerald-400">5\u201320 minutes</td>
                    <td className="py-5 px-6 font-bold text-emerald-400">Names + emails + phones + AR</td>
                    <td className="py-5 px-6 font-bold text-emerald-400">NO. Category locked.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">ROI Calculator</p>
            <h2 className="text-3xl font-bold mb-4">Model Your TakeOver Returns</h2>
            <p className="text-muted">Select your metro and budget to see what a TakeOver delivers compared to traditional media.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-premium rounded-xl p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-muted block mb-3">Metro / Market</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['JHB', 'CPT', 'DBN', 'All SA'].map((m) => (
                      <button key={m} onClick={() => setMetro(m)} className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${metro === m ? 'border-gold bg-gold/10 text-gold' : 'border-white/5 bg-white/[0.02] text-muted hover:text-foreground'}`}>
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted block mb-3">Budget: R{budget.toLocaleString('en-ZA')}</label>
                  <input type="range" min={200000} max={8000000} step={100000} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>R200K</span>
<span>R8M</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted block mb-3">Duration: {duration} months</label>
                  <input type="range" min={1} max={6} step={1} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full" />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>1 mo</span>
<span>6 mo</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-premium rounded-xl p-6">
                <p className="text-muted text-sm mb-2">TakeOver Effective CPM</p>
                <p className="text-3xl font-bold text-gold mb-3">R{takeOverCPM.toFixed(2)}</p>
                <p className="text-muted text-sm">
                  vs Billboard: <span className="text-red-400">R{BILLBOARD_CPM}</span> — up to {(BILLBOARD_CPM / takeOverCPM).toFixed(0)}x more expensive
                </p>
              </div>

              <div className="card-premium rounded-xl p-6">
                <p className="text-muted text-sm mb-2">Attention Duration per Customer</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-emerald-400">{takeOverDwell} min</p>
                  <p className="text-muted text-sm">({takeOverDwell * 60} seconds)</p>
                </div>
                <p className="text-muted text-sm mt-2">
                  vs Billboard: 1.5s — that&apos;s {(takeOverDwell * 60 / 1.5).toFixed(0)}x more attention time
                </p>
              </div>

              <div className="card-premium rounded-xl p-6">
                <p className="text-muted text-sm mb-2">First-Party Data Captured</p>
                <p className="text-3xl font-bold text-emerald-400 mb-3">{dataCaptureVolume.toLocaleString('en-ZA')}</p>
                <p className="text-muted text-sm">contacts (names, emails, phones) via QR + loyalty</p>
              </div>

              <div className="card-premium rounded-xl p-6">
                <p className="text-muted text-sm mb-2">Equivalent Cost in Traditional Media</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
<span className="text-muted">Billboard:</span>
<span className="text-red-400">{billboardEquiv}</span>
</div>
                  <div className="flex justify-between">
<span className="text-muted">Radio:</span>
<span className="text-red-400">{radioEquiv}</span>
</div>
                  <div className="flex justify-between">
<span className="text-muted">Digital Display:</span>
<span className="text-red-400">{digitalEquiv}</span>
</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Now you can justify it to your CFO.</h3>
            <p className="text-muted max-w-xl mx-auto mb-8">Download a branded ROI summary or share it with your team before booking a briefing.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-briefing/" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition glow-gold">
                <TrendingUp size={18} />
                Book a Briefing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
