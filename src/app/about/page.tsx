'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-28 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">About INFX Solutions</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
            <p className="text-muted text-lg max-w-2xl">INFX Solutions is the media arm of Infinity Brands (Pty) Ltd.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Our Architecture</p>
            <h2 className="text-3xl font-bold mb-4">Three Phases. One Vision.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-premium rounded-xl p-8 text-center">
              <span className="text-gold text-4xl font-bold opacity-40">01</span>
              <h3 className="text-xl font-bold mt-3 mb-3">Franchise Network</h3>
              <p className="text-muted text-sm">Build physical infrastructure. Stores = venues.</p>
            </div>
            <div className="card-premium rounded-xl p-8 text-center">
              <span className="text-gold text-4xl font-bold opacity-40">02</span>
              <h3 className="text-xl font-bold mt-3 mb-3">Engagement Layer</h3>
              <p className="text-muted text-sm">WebAR, loyalty, data capture — all POPIA compliant.</p>
            </div>
            <div className="card-premium rounded-xl p-8 text-center">
              <span className="text-gold text-4xl font-bold opacity-40">03</span>
              <h3 className="text-xl font-bold mt-3 mb-3">Media Agency</h3>
              <p className="text-muted text-sm">Monetise the captive audience with TakeOvers.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
