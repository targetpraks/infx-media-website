'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight, Eye, Zap, TrendingUp } from 'lucide-react';

const slots = [
  { id: 1, quarter: 'Q1', category: 'Telco', color: '#FFD700', status: 'Available', brand: null },
  { id: 2, quarter: 'Q1–Q2', category: 'Banking/Finance', color: '#22C55E', status: 'Under Discussion', brand: null },
  { id: 3, quarter: 'Q2', category: 'Sportswear', color: '#EF4444', status: 'Available', brand: null },
  { id: 4, quarter: 'Q3', category: 'Entertainment', color: '#8B5CF6', status: 'Available', brand: null },
  { id: 5, quarter: 'Q4', category: 'Sport/Events', color: '#3B82F6', status: 'Available', brand: null },
  { id: 6, quarter: 'Q4', category: 'Wildcard', color: '#EC4899', status: 'Available', brand: null },
];

export default function SlotCalendar({ compact = false }: { compact?: boolean }) {
  return (
    <div className="w-full">
      <div className={`grid gap-4 ${compact ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {slots.map((slot, i) => {
          const statusColor = slot.status === 'Sold' ? 'border-red-500/30 bg-red-500/5' : slot.status === 'Under Discussion' ? 'border-amber-500/30 bg-amber-500/5' : 'border-gold/20 bg-white/[0.03] hover:border-gold/50 hover:bg-white/[0.05]';
          const barColor = slot.status === 'Sold' ? 'rgba(239,68,68,0.5)' : slot.status === 'Under Discussion' ? 'rgba(245,158,11,0.5)' : 'linear-gradient(90deg, #C8A951, #E8D494, #C8A951)';
          const badgeClass = slot.status === 'Sold' ? 'bg-red-500/10 text-red-400' : slot.status === 'Under Discussion' ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400';
          return (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className={`relative rounded-xl border transition-all duration-300 group overflow-hidden ${statusColor}`}
            >
              <div className="h-1 w-full" style={{ background: barColor }} />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gold text-sm font-semibold">{slot.quarter}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${badgeClass}`}>
                    {slot.status === 'Sold' && <Zap size={10} />}
                    {slot.status === 'Under Discussion' && <Zap size={10} />}
                    {slot.status === 'Available' && <Eye size={10} />}
                    {slot.status}
                  </span>
                </div>

                <h4 className="text-foreground font-semibold text-lg mb-1">{slot.category}</h4>

                {slot.status === 'Sold' && slot.brand && (
                  <p className="text-muted text-sm mt-2">Booked by <span className="text-foreground font-medium">{slot.brand}</span>
</p>
                )}
                {slot.status === 'Under Discussion' && (
                  <p className="text-amber-400/80 text-sm mt-2">A competitor is briefing this slot. Don&apos;t wait.</p>
                )}
                {slot.status === 'Available' && !compact && (
                  <>
                    <p className="text-muted text-sm mt-2 mb-4">City: R400K–600K / Region: R1M–2M / National: R3M–8M</p>
                    <Link href="/book-briefing/" className="inline-flex items-center gap-1 text-gold text-sm font-medium hover:text-gold-light transition group/link" prefetch={false}>
                      Reserve This Slot
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition" />
                    </Link>
                  </>
                )}
              </div>
              {slot.status === 'Available' && <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gold/5 blur-3xl group-hover:bg-gold/10 transition" />}
            </motion.div>
          );
        })}
      </div>

      {!compact && (
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/book-briefing/" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-3 rounded-full font-medium hover:bg-gold-light hover:scale-105 active:scale-95 transition glow-gold" prefetch={false}>
            <Calendar size={18} />
            Book a TakeOver Briefing
          </Link>
          <Link href="/packages-pricing/" className="inline-flex items-center gap-2 border border-gold/50 text-gold px-6 py-3 rounded-full font-medium hover:bg-gold/10 transition" prefetch={false}>
            <TrendingUp size={18} />
            See Full Pricing
          </Link>
        </div>
      )}
    </div>
  );
}
