"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Flame, Mail, MapPin, Zap, Send } from "lucide-react";

const footerLinks = {
  sections: [
    { label: "The Revelation", href: "#revelation" },
    { label: "The Problem", href: "#death-of-media" },
    { label: "The Generation", href: "#attention-deficit" },
    { label: "The TakeOver", href: "#overnight" },
    { label: "The Activation", href: "#activation" },
    { label: "Get in Touch", href: "#contact" },
  ],
};

const trustPoints = [
  { value: "14hrs", label: "Overnight deployment", suffix: "" },
  { value: "100%", label: "Physical attention capture", suffix: "" },
  { value: "3x", label: "Brand recall vs digital", suffix: "" },
];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY"; // Replace with real key before deployment

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [softEmail, setSoftEmail] = useState("");
  const [softStatus, setSoftStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [softError, setSoftError] = useState("");

  useEffect(() => {
    const handler = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSoftSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!softEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(softEmail)) {
      setSoftError("Please enter a valid email.");
      setSoftStatus("error");
      return;
    }
    setSoftError("");
    setSoftStatus("loading");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "INFX Media Kit Request",
          from_name: "INFX Website",
          email: softEmail,
          message: "Soft CTA — user requested media kit / updates via footer.",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSoftStatus("success");
      setSoftEmail("");
    } catch {
      setSoftStatus("error");
      setSoftError("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-void" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-md bg-lime flex items-center justify-center">
                <span className="text-void font-extrabold text-xs" aria-hidden="true">INFX</span>
              </div>
              <span className="text-text-primary font-bold text-sm">
                INFX <span className="text-lime">TakeOver</span>
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              We don&apos;t advertise. We hijack physical retail and convert it into immersive brand
              worlds overnight. Multi-location, same night, zero compromise.
            </p>

            {/* Soft CTA — Media Kit capture */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 mb-6">
              <p className="text-text-primary text-sm font-semibold mb-2">Download the Media Kit</p>
              <p className="text-text-tertiary text-xs mb-3">Get pricing, specs, and case studies delivered to your inbox.</p>
              <form onSubmit={handleSoftSubmit} className="flex items-center gap-2" noValidate>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={softEmail}
                  onChange={(e) => { setSoftEmail(e.target.value); if (softError) { setSoftError(""); setSoftStatus("idle"); } }}
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-sm text-foreground focus:border-lime/50 outline-none transition"
                  aria-label="Email for media kit"
                  aria-invalid={softStatus === "error"}
                  aria-describedby="soft-cta-error"
                />
                <button
                  type="submit"
                  disabled={softStatus === "loading"}
                  className="shrink-0 inline-flex items-center gap-1.5 bg-lime text-void px-3 py-2 rounded-lg text-xs font-semibold hover:bg-lime-bright transition disabled:opacity-50"
                >
                  {softStatus === "loading" ? (
                    <span className="w-3 h-3 border-2 border-void/30 border-t-void rounded-full animate-spin" />
                  ) : (
                    <Send size={14} />
                  )}
                  Send
                </button>
              </form>
              {softStatus === "error" && softError && (
                <p id="soft-cta-error" className="mt-2 text-xs text-blood" role="alert">{softError}</p>
              )}
              {softStatus === "success" && (
                <p className="mt-2 text-xs text-emerald-400" role="status">Media kit request sent — check your inbox.</p>
              )}
            </div>

            <div className="flex flex-wrap gap-4">
              {trustPoints.map((tp) => (
                <div key={tp.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                  <span className="text-lime font-bold text-sm font-mono">{tp.value}</span>
                  <span className="text-text-tertiary text-[11px]">{tp.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {footerLinks.sections.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-tertiary text-sm hover:text-lime transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:leads@infxmedia.xyz"
                  className="flex items-center gap-3 text-text-tertiary text-sm hover:text-lime transition-colors duration-200 group"
                >
                  <Mail size={15} className="text-text-dim group-hover:text-lime transition-colors" />
                  leads@infxmedia.xyz
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-tertiary text-sm">
                <MapPin size={15} className="text-text-dim" />
                Bedfordview, Johannesburg, South Africa
              </li>
              <li className="flex items-center gap-3 text-text-tertiary text-sm">
                <Flame size={15} className="text-lime" />
                <span>
                  Part of{" "}
                  <span className="text-text-secondary font-medium">Infinity Brands</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs">
            &copy; {new Date().getFullYear()} INFX Solutions &mdash; An Infinity Brands Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-text-dim text-xs flex items-center gap-1.5">
              <Zap size={11} className="text-lime" aria-hidden="true" />
              Powered by the future.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-surface-elev border border-border-medium flex items-center justify-center text-text-secondary hover:text-lime hover:border-lime/40 transition-all duration-300"
        onClick={scrollToTop}
        aria-label="Back to top"
        style={{ pointerEvents: showBackToTop ? "auto" : "none" }}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </motion.button>
    </footer>
  );
}
