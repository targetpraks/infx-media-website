"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Revelation", href: "#revelation" },
  { label: "The Problem", href: "#death-of-media" },
  { label: "Generation", href: "#attention-deficit" },
  { label: "TakeOver", href: "#overnight" },
  { label: "Activation", href: "#activation" },
  { label: "Join", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;

    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) < 5) return;
      lastScrollY = window.scrollY;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/85 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-4 focus-visible:rounded-sm"
            aria-label="INFX TakeOver — Home"
          >
            <div className="w-9 h-9 rounded-md bg-lime flex items-center justify-center group-hover:shadow-[0_0_24px_rgba(204,255,0,0.35)] transition-all duration-300 group-focus-visible:shadow-[0_0_24px_rgba(204,255,0,0.35)]">
              <span className="text-void font-extrabold text-xs tracking-tighter" aria-hidden="true">
                INFX
              </span>
            </div>
            <span className="text-text-primary font-bold text-sm tracking-tight">
              INFX <span className="text-lime">TakeOver</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Section links">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? "text-lime" : "text-text-tertiary hover:text-lime"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:leads@infxmedia.xyz"
              className="px-5 py-2 text-xs font-semibold uppercase tracking-widest border border-lime/60 text-lime hover:bg-lime hover:text-void rounded-md transition-all duration-300"
            >
              Contact
            </a>
          </div>

          <button
            className="lg:hidden text-text-primary p-2 rounded-md -mr-2 hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:hidden bg-void/98 backdrop-blur-xl border-b border-white/5 overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-8 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={() => {
                    handleNavClick();
                    setTimeout(handleNavClick, 300);
                  }}
                  className="block text-lg font-medium text-text-secondary hover:text-lime transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-white/5"
              >
                <a
                  href="mailto:leads@infxmedia.xyz"
                  className="w-full inline-flex items-center justify-center py-3 bg-lime text-void font-semibold text-sm uppercase tracking-widest rounded-md hover:shadow-[0_0_24px_rgba(204,255,0,0.3)] transition-all"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
