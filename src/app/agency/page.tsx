'use client';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function AgencyPage() {
  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Agency Partner Programme</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell TakeOvers to Your Clients. Earn Commission.</h1>
            <p className="text-muted text-lg max-w-2xl">
              70% of B2B media buys in South Africa flow through agencies. We give you the spec, the deck, and the commission structure — you bring the brand relationships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium rounded-xl p-8">
              <FileText size={28} className="text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">Co-Branded Pitch Deck</h3>
              <p className="text-muted text-sm leading-relaxed">15-slide PowerPoint / Google Slides covering TakeOver concept, CPM comparison, 6 marketing examples, QR-linked slot calendar.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium rounded-xl p-8">
              <ExternalLink size={28} className="text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">Creative Spec Pack</h3>
              <p className="text-muted text-sm leading-relaxed">PDF with brand-safe dimensions, AR specs, LED colour mappings, QR placements, and store layouts for your creative team.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium rounded-xl p-8">
              <TrendingUp size={28} className="text-gold mb-4" />
              <h3 className="text-xl font-bold mb-3">10% Commission</h3>
              <p className="text-muted text-sm leading-relaxed">Earn R40K–R500K+ per TakeOver booked through your introduction. Dashboard tracking. Quarterly payouts.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Register as an Agency Partner</h3>
            <p className="text-muted max-w-xl mx-auto mb-8">Apply now for portal access, pitch decks, and commission tracking.</p>
            <Link href="/book-briefing/" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light transition glow-gold">
              <Users size={18} />
              Apply as Agency Partner
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
