'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function BookBriefingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '', title: '',
    category: '', tier: '', budget: '', brandVision: '', consent: false, honeypot: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(p => ({ ...p, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(p => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!formData.consent) { alert('Please accept POPIA data processing consent.'); return; }
    if (!formData.email || !formData.firstName || !formData.company) { alert('Please fill in required fields.'); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <section className="relative min-h-[80dvh] flex items-center justify-center pt-28">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Briefing Request Received</h2>
          <p className="text-muted mb-8">We\u2019ll contact you within 4 business hours. Watch your inbox for a TakeOver deck and 6-slot calendar.</p>
          <p className="text-gold text-sm">Lead ID: INFX-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-28 pb-12">
        <div className="max-w-[700px] mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">Book a TakeOver Briefing</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your TakeOver Briefing</h1>
            <p className="text-muted mb-8">Fill in your details and we\u2019ll schedule a 30-minute TakeOver briefing for your team.</p>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            <input type="text" name="honeypot" className="hidden" tabIndex={-1} value={formData.honeypot} onChange={handleChange} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted mb-2 block">First Name *</label>
                <input name="firstName" required placeholder="Thabo" value={formData.firstName} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:border-gold/50 outline-none transition" />
              </div>
              <div>
                <label className="text-sm text-muted mb-2 block">Last Name</label>
                <input name="lastName" placeholder="Molefe" value={formData.lastName} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:border-gold/50 outline-none transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted mb-2 block">Work Email *</label>
                <input name="email" type="email" required placeholder="name@company.com" value={formData.email} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:border-gold/50 outline-none transition" />
              </div>
              <div>
                <label className="text-sm text-muted mb-2 block">Phone</label>
                <input name="phone" type="tel" placeholder="+27" value={formData.phone} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:border-gold/50 outline-none transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted mb-2 block">Company *</label>
                <input name="company" required placeholder="Brand/Organisation" value={formData.company} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:border-gold/50 outline-none transition" />
              </div>
              <div>
                <label className="text-sm text-muted mb-2 block">Job Title</label>
                <input name="title" placeholder="CMO / Marketing Director" value={formData.title} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:border-gold/50 outline-none transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-muted mb-2 block">Preferred Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground">
                  <option value="">Select...</option>
                  <option>Telco</option>
                  <option>Banking/Finance</option>
                  <option>Sportswear/Apparel</option>
                  <option>Entertainment/Streaming</option>
                  <option>Sport/Events</option>
                  <option>Wildcard</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted mb-2 block">Preferred Tier</label>
                <select name="tier" value={formData.tier} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground">
                  <option value="">Select...</option>
                  <option>City (R400–600K)</option>
                  <option>Region (R1–2M)</option>
                  <option>National (R3–8M)</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted mb-2 block">Annual Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground">
                  <option value="">Select...</option>
                  <option>R250K–500K</option>
                  <option>R500K–1M</option>
                  <option>R1M–3M</option>
                  <option>R3M–8M</option>
                  <option>R8M+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted mb-2 block">Brand Vision (Optional)</label>
              <textarea name="brandVision" rows={4} placeholder="Describe your ideal TakeOver experience..." value={formData.brandVision} onChange={handleChange} className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-foreground focus:border-gold/50 outline-none transition resize-none" />
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <input name="consent" type="checkbox" id="popia" checked={formData.consent} onChange={handleChange} className="mt-1 w-4 h-4 accent-gold" />
              <label htmlFor="popia" className="text-sm text-muted leading-relaxed">I agree to INFX Media processing my data for TakeOver briefing purposes in compliance with POPIA. I understand I can request deletion at any time via leads@infxmedia.xyz.</label>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-gold text-navy-dark py-4 rounded-full font-semibold text-lg hover:bg-gold-light active:scale-[0.98] transition glow-gold disabled:opacity-50 inline-flex items-center justify-center gap-2">
              {loading ? <Loader2 size={20} className="animate-spin" /> : <ArrowRight size={20} />}
              Book My Briefing
            </button>

            <p className="text-center text-xs text-muted">Your data is stored securely and processed in South Africa. POPIA compliant.</p>
          </motion.form>
        </div>
      </section>
    </>
  );
}
