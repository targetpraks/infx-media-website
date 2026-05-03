'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

const exploreLinks = [
  { href: '/how-it-works/', label: 'How It Works' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/data-advantage/', label: 'Data Advantage' },
];

const investLinks = [
  { href: '/packages-pricing/', label: 'Packages & Pricing' },
];

const companyLinks = [
  { href: '/about/', label: 'About INFX' },
  { href: '/faq/', label: 'FAQ' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center group-hover:shadow-lg transition">
              <span className="text-navy-dark font-bold text-sm">INFX</span>
            </div>
            <span className="text-foreground font-semibold text-lg tracking-tight">INFX <span className="text-gold">Solutions</span>
</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <NavDropdown label="Explore" links={exploreLinks} />
            <NavDropdown label="Invest" links={investLinks} />
            <NavDropdown label="Company" links={companyLinks} />
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/book-briefing/?mockup=1" className="inline-flex items-center gap-2 border border-gold/50 text-gold px-5 py-2.5 rounded-full font-medium hover:bg-gold/10 transition" prefetch={false}>
              Get Custom Mockup
            </Link>
            <Link href="/book-briefing/" className="inline-flex items-center gap-2 bg-gold text-navy-dark px-6 py-2.5 rounded-full font-medium hover:bg-gold-light hover:scale-105 active:scale-95 transition glow-gold" prefetch={false}>
              <Calendar size={16} />
              Book a Briefing
            </Link>
          </div>

          <button className="lg:hidden text-foreground p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden glass-nav border-b border-gold/10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 py-6 space-y-6">
              <MobileSection title="Explore" links={exploreLinks} />
              <MobileSection title="Invest" links={investLinks} />
              <MobileSection title="Company" links={companyLinks} />
              <div className="pt-4 space-y-3 border-t border-white/10">
                <a href="https://wa.me/27234567890" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-lg font-medium">
                  WhatsApp Us
                </a>
                <Link href="/book-briefing/?mockup=1" className="w-full inline-flex items-center justify-center gap-2 border border-gold/50 text-gold py-3 rounded-lg hover:bg-gold/10 transition" prefetch={false}>
                  Get Custom Mockup
                </Link>
                <Link href="/book-briefing/" className="w-full inline-flex items-center justify-center gap-2 bg-gold text-navy-dark py-3 rounded-lg font-medium hover:bg-gold-light transition" prefetch={false}>
                  Book a Briefing
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavDropdown({ label, links }: { label: string; links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="text-muted hover:text-foreground transition text-sm font-medium">{label}</button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute top-full left-0 mt-3 w-52 rounded-xl card-premium overflow-hidden shadow-2xl">
            {links.map(link => (
              <Link key={link.href} href={link.href} className="block px-5 py-3 text-sm transition text-muted hover:text-foreground hover:bg-white/5" prefetch={false}>{link.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileSection({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">{title}</p>
      {links.map(link => (
        <Link key={link.href} href={link.href} className="block py-2 text-muted hover:text-foreground transition" prefetch={false}>{link.label}</Link>
      ))}
    </div>
  );
}
