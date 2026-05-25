"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  TrendingUp,
  Eye,
  Users,
  Zap,
  Shield,
  Clock,
  MapPin,
  Mail,
  FileText,
  Layers,
  Smartphone,
  BarChart3,
  Globe,
} from "lucide-react";

const stats = [
  { label: "Overnight Deploy", value: "14 hrs", icon: Clock, accent: "lime" as const },
  { label: "Avg Attention Time", value: "15–20 min", icon: Eye, accent: "lime" as const },
  { label: "Brand Recall Lift", value: "3×", icon: TrendingUp, accent: "cyan" as const },
  { label: "CPM vs Billboard", value: "225× cheaper", icon: Zap, accent: "cyan" as const },
];

const services = [
  {
    title: "Full Store Colourway",
    body: "Complete interior and exterior brand transformation — installed after close, live by open.",
    icon: Layers,
  },
  {
    title: "Co-Branded Packaging",
    body: "Custom cups, boxes, and carry bags that turn every order into a branded impression.",
    icon: FileText,
  },
  {
    title: "WebAR Experience",
    body: "Markerless AR on every cup — no app download required. POPIA-compliant data capture.",
    icon: Smartphone,
  },
  {
    title: "Real-Time Analytics",
    body: "Dashboard tracking impressions, engagement time, QR scans, and redemption rates.",
    icon: BarChart3,
  },
  {
    title: "Category Exclusivity",
    body: "Only one brand per category per slot. When it’s gone, it’s locked for the year.",
    icon: Shield,
  },
  {
    title: "Multi-Location Scale",
    body: "City (5–10), Region (10–25), or National (25–100) store networks — same night.",
    icon: Globe,
  },
];

export default function MediaKitPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* -- HERO ------------------------------------------- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, rgba(204,255,0,0.08) 0%, transparent 50%),
                         linear-gradient(180deg, #050505 0%, #060803 100%)`,
          }}
        />

        <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="eyebrow-lime mb-4">Press &amp; Investors</p>
            <h1 className="headline-hero mb-6">
              INFX{" "}
              <span className="gradient-lime-text">Media Kit</span>
            </h1>
            <p className="body-lg max-w-2xl mb-10">
              Key stats, service overview, and contact details for press, investors, and brand
              partners evaluating the world&rsquo;s first retail-media TakeOver platform.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:leads@infxmedia.xyz?subject=Request%20Media%20Kit%20PDF"
                className="btn-cinematic inline-flex"
              >
                <Download size={16} />
                Request PDF Download
                <ArrowRight size={16} />
              </a>
              <Link
                href="/book-briefing"
                className="btn-secondary inline-flex"
              >
                Book a Briefing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- STATS ------------------------------------------ */}
      <section className="relative pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="card-dark p-6 border-glow-lime text-center"
                >
                  <div className="w-11 h-11 rounded-xl bg-lime/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-lime" />
                  </div>
                  <p className="stat-number text-2xl md:text-3xl mb-1">{s.value}</p>
                  <p className="text-text-tertiary text-xs">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* -- SERVICES --------------------------------------- */}
      <section className="relative pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="headline-section">
              Services <span className="gradient-lime-text">Overview</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  className="card-dark p-7 border-glow-lime hover:border-white/15 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-lime" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">{svc.title}</h3>
                  <p className="text-xs text-text-tertiary leading-relaxed">{svc.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* -- CONTACT + DOWNLOAD CTA ------------------------- */}
      <section className="relative pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="card-glass p-8 md:p-12 border-glow-lime"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="eyebrow-lime mb-4">Contact</p>
                <h2 className="headline-section mb-6">
                  Get in{" "}
                  <span className="gradient-lime-text">Touch</span>
                </h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="mailto:leads@infxmedia.xyz"
                      className="flex items-center gap-3 text-text-secondary text-sm hover:text-lime transition-colors group"
                    >
                      <Mail size={15} className="text-text-dim group-hover:text-lime transition-colors" />
                      leads@infxmedia.xyz
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary text-sm">
                    <MapPin size={15} className="text-text-dim" />
                    Bedfordview, Johannesburg, South Africa
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary text-sm">
                    <Users size={15} className="text-text-dim" />
                    Part of{" "}
                    <span className="text-text-primary font-medium">Infinity Brands</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <p className="body-md mb-6">
                  Want the full PDF with pricing tables, spec sheets, and high-res assets? Request it
                  below and we&rsquo;ll send it straight to your inbox.
                </p>
                <a
                  href="mailto:leads@infxmedia.xyz?subject=Request%20Media%20Kit%20PDF"
                  className="btn-cinematic inline-flex w-full justify-center"
                >
                  <Download size={16} />
                  Request Media Kit PDF
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
