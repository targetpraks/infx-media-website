"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Revelation", href: "#revelation" },
  { label: "Generation", href: "#attention-deficit" },
  { label: "Conversion", href: "#overnight" },
  { label: "Activation", href: "#activation" },
  { label: "Join", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/80 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-sm bg-lime flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] transition">
              <span className="text-void font-extrabold text-xs tracking-tighter">INFX</span>
            </div>
            <span className="text-text-primary font-bold text-sm tracking-tight">
              INFX <span className="text-lime">TakeOver</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-xs font-medium uppercase tracking-widest text-text-tertiary hover:text-lime transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:leads@infxmedia.xyz"
              className="px-5 py-2 text-xs font-semibold uppercase tracking-widest border border-lime text-lime hover:bg-lime hover:text-void transition-all"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-text-primary p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-void/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-medium text-text-secondary hover:text-lime transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5">
                <a
                  href="mailto:leads@infxmedia.xyz"
                  className="w-full inline-flex items-center justify-center py-3 bg-lime text-void font-semibold text-sm uppercase tracking-widest"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
