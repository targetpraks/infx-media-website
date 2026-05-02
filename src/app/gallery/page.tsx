'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Eye, QrCode, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

const takeOverExamples = [
  { category: 'Telco', brand: 'MTN Yellow', color: '#FFD700', accentBg: 'rgba(255,215,0,0.1)', description: 'Store walls awash in MTN Yellow. Co-branded cup with QR data voucher. "Data Boost Pasta" — buy the pasta, get 1GB free.', stats: { impressions: '840K–2.4M', dwell: '8 min avg', engagement: '42%' } },
  { category: 'Banking', brand: 'FNB Green', color: '#22C55E', accentBg: 'rgba(34,197,94,0.1)', description: 'Bank branch becomes a pasta shop. AR mini-game on every cup. "Gold Account Pasta" — open an account, get free pasta.', stats: { impressions: '620K–1.8M', dwell: '6 min avg', engagement: '38%' } },
  { category: 'Sportswear', brand: 'Nike Red', color: '#EF4444', accentBg: 'rgba(239,68,68,0.1)', description: 'Team colourway across every store. 4 collectible cup drops, one per week. AR virtual try-on. "Fuel Pasta" nutrition angle.', stats: { impressions: '950K–2.6M', dwell: '12 min avg', engagement: '55%' } },
  { category: 'Entertainment', brand: 'Netflix Purple', color: '#8B5CF6', accentBg: 'rgba(139,92,246,0.1)', description: 'Show colourway transforms the store. AR teaser on every cup. Character collectible series. "Binge Pasta" comfort food tie-in.', stats: { impressions: '780K–2.2M', dwell: '14 min avg', engagement: '48%' } },
  { category: 'Sport/Event', brand: 'PSL Blue', color: '#3B82F6', accentBg: 'rgba(59,130,246,0.1)', description: 'Fan zone in every store. Live scores on cup AR. Team crest collectible cups. "Match Day Pasta" tied to fixture calendar.', stats: { impressions: '720K–2.0M', dwell: '10 min avg', engagement: '50%' } },
  { category: 'Wildcard', brand: 'iPhone Pink', color: '#EC4899', accentBg: 'rgba(236,72,153,0.1)', description: 'Product 3D model on cup AR. Product colourway. Spec reveal on every order. "Launch Day Pasta" exclusive.', stats: { impressions: '600K–1.8M', dwell: '9 min avg', engagement: '45%' } },
];

const catIcons = ['🏪', '🏦', '👟', '🎬', '🏆', '📱'];

export default function GalleryPage() {
  const [activeSimColor, setActiveSimColor] = useState('#C8A951');
  const [activeSimCategory, setActiveSimCategory] = useState('Telco');

  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Visual Proof</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">See What a TakeOver Looks Like</h1>
            <p className="text-muted text-lg max-w-2xl">Marketing teams buy what they can see. These mockups show the transformation — from Papa native state to fully TakeOver&apos;d.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {takeOverExamples.map((example, i) => (
              <motion.div key={example.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="rounded-xl overflow-hidden card-premium group">
                <div className="relative h-52 flex items-center justify-center transition-all duration-500" style={{ backgroundColor: example.accentBg }}>
                  <div className="absolute inset-0 grid-pattern opacity-30">
</div>
                  <div className="relative z-10 text-center">
                    <div className="w-48 h-36 rounded-lg mx-auto mb-3 border-2 border-white/10 flex flex-col overflow-hidden transition-all duration-500" style={{ backgroundColor: example.color + '15' }}>
                      <div className="h-8 w-full flex items-center justify-center text-xs font-bold gap-1" style={{ backgroundColor: example.color + '40' }}>
                        <span className="text-white/90">🏪 Partner Store</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <span className="text-4xl">{catIcons[i]}</span>
                      </div>
                      <div className="h-5 w-full flex items-center justify-center gap-2 px-2" style={{ backgroundColor: example.color + '25' }}>
                        <span className="text-[10px] text-white/60">Co-Branded Cup</span>
                      </div>
                    </div>
                    <span className="text-muted text-xs">Store Transformation Concept</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: example.color + '15', color: example.color }}>{example.category}</span>
                    <span className="text-muted text-sm">{example.brand}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-4">{example.description}</p>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                    <div className="text-center">
                      <Eye size={14} className="text-gold mx-auto mb-1" />
                      <p className="text-foreground text-xs font-bold">{example.stats.impressions}</p>
                      <p className="text-muted text-[10px]">Impressions</p>
                    </div>
                    <div className="text-center">
                      <QrCode size={14} className="text-gold mx-auto mb-1" />
                      <p className="text-foreground text-xs font-bold">{example.stats.engagement}</p>
                      <p className="text-muted text-[10px]">AR Engage</p>
                    </div>
                    <div className="text-center">
                      <Smartphone size={14} className="text-gold mx-auto mb-1" />
                      <p className="text-foreground text-xs font-bold">{example.stats.dwell}</p>
                      <p className="text-muted text-[10px]">AR Dwell</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-gold" size={20} />
                  <span className="text-gold text-sm font-semibold uppercase tracking-wider">TakeOver Simulator</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Pick Your Brand. See The TakeOver.</h3>
                <p className="text-muted mb-8">See how a Papa Pasta store transforms for your brand. We&apos;ll generate a photorealistic mockup of your TakeOver in 48&ndash;72 hours.</p>

                <div className="space-y-4">
                  <label className="text-sm text-muted">Select Category:</label>
                  <div className="grid grid-cols-3 gap-2">
                    {takeOverExamples.map((ex) => (
                      <button key={ex.category} onClick={() => { setActiveSimCategory(ex.category); setActiveSimColor(ex.color); }} className={`px-3 py-2 rounded-lg text-sm font-medium transition border ${activeSimCategory === ex.category ? 'border-gold bg-gold/10 text-gold' : 'border-white/5 bg-white/[0.02] text-muted hover:text-foreground'}`}>
                        {ex.category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <label className="text-sm text-muted">Brand Accent Color:</label>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-white/20" style={{ backgroundColor: activeSimColor }}>
</div>
                    <span className="text-sm text-muted">{activeSimColor}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center" style={{ backgroundColor: activeSimColor + '08' }}>
                  <div className="text-center">
                    <div className="w-56 h-44 rounded-xl border-2 border-white/10 overflow-hidden mx-auto mb-4 transition-all duration-700" style={{ boxShadow: `0 0 60px ${activeSimColor}30` }}>
                      <div className="h-10 w-full flex items-center justify-center text-sm font-bold gap-1 transition-colors duration-500" style={{ backgroundColor: activeSimColor + '50' }}>
                        <span className="text-white/90">🔔 {activeSimCategory} TakeOver</span>
                      </div>
                      <div className="flex-1 flex items-center justify-center transition-all duration-500" style={{ backgroundColor: activeSimColor + '12' }}>
                        <span className="text-6xl">{catIcons[takeOverExamples.findIndex(e => e.category === activeSimCategory)]}</span>
                      </div>
                      <div className="h-6 w-full flex items-center justify-center gap-2 px-2 transition-colors duration-500" style={{ backgroundColor: activeSimColor + '25' }}>
                        <span className="text-[10px] text-white/60">Co-Branded Cup • AR • Loyalty</span>
                      </div>
                    </div>
                    <p className="text-muted text-xs">Live Preview — {activeSimCategory} colourway</p>
                  </div>
                </div>

                <Link href="/book-briefing/?mockup=1" className="mt-6 inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-full font-medium hover:bg-gold/10 transition" prefetch={false}>
                  <Sparkles size={16} />
                  Get Custom Mockup
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
