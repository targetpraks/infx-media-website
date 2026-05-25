"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Eye, MousePointer, DollarSign } from "lucide-react";

const COMPETITORS = [
  {
    name: "INFX Media TakeOver",
    type: "Self",
    cpm: 28,
    engagement: 8.4,
    reach: 12500,
    trend: "up",
    note: "Digital + environment control + proof-of-concept bundle",
  },
  {
    name: "Traditional Billboard",
    type: "OOH",
    cpm: 180,
    engagement: 1.2,
    reach: 45000,
    trend: "down",
    note: "Static creative, no engagement metrics, long lead time",
  },
  {
    name: "Meta / Instagram Ads",
    type: "Digital",
    cpm: 95,
    engagement: 2.8,
    reach: 32000,
    trend: "flat",
    note: "High CPM for QSR; ad fatigue rising in SA",
  },
  {
    name: "Google Search Ads",
    type: "Digital",
    cpm: 145,
    engagement: 4.1,
    reach: 18000,
    trend: "up",
    note: "High intent but no brand awareness impact",
  },
  {
    name: "In-Mall Digital Screens",
    type: "OOH",
    cpm: 220,
    engagement: 3.5,
    reach: 8000,
    trend: "flat",
    note: "Limited to mall hours; no environment control",
  },
  {
    name: "TikTok Spark Ads",
    type: "Social",
    cpm: 55,
    engagement: 6.2,
    reach: 28000,
    trend: "up",
    note: "High engagement but no in-store conversion tracking",
  },
];

const QSR_CAMPAIGNS = [
  { brand: "Nando's", channel: "TV + TikTok", spend: "R2.4M", outcome: "Brand awareness +12%", roi: "2.1x" },
  { brand: "Steers", channel: "Billboard + Radio", spend: "R1.8M", outcome: "Foot traffic flat", roi: "0.8x" },
  { brand: "KFC", channel: "Meta + In-store", spend: "R4.2M", outcome: "App downloads +34%", roi: "3.4x" },
  { brand: "Burger King", channel: "Google + TikTok", spend: "R1.1M", outcome: "Search volume +18%", roi: "1.6x" },
  { brand: "Papa Pasta", channel: "INFX TakeOver", spend: "R95K", outcome: "Foot traffic +23%", roi: "6.8x" },
];

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <TrendingUp className="w-4 h-4 text-[#39FF14]" />;
  if (trend === "down") return <TrendingDown className="w-4 h-4 text-[#E50914]" />;
  return <Minus className="w-4 h-4 text-white/30" />;
}

export default function IntelPage() {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="text-[#39FF14] text-xs font-semibold uppercase tracking-[0.2em]">Intelligence</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mt-2 mb-4">QSR Competitive Intel</h1>
          <p className="text-white/40 max-w-xl">
            CPM, engagement, and ROI benchmarks for South African QSR marketing channels. Updated monthly.
          </p>
        </motion.div>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-[#39FF14]" /> Channel Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-left text-white/40">
                  <th className="pb-3 font-medium">Channel</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">CPM (R)</th>
                  <th className="pb-3 font-medium">Engagement %</th>
                  <th className="pb-3 font-medium">Reach</th>
                  <th className="pb-3 font-medium">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {COMPETITORS.map((c, i) => (
                  <motion.tr
                    key={c.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={c.type === "Self" ? "bg-[#39FF14]/5" : ""}
                  >
                    <td className="py-4 pr-4">
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-white/40 mt-0.5">{c.note}</p>
                    </td>
                    <td className="py-4 pr-4 text-white/40">{c.type}</td>
                    <td className="py-4 pr-4 font-mono">{c.type === "Self" ? <span className="text-[#39FF14] font-bold">R{c.cpm}</span> : `R${c.cpm}`}</td>
                    <td className="py-4 pr-4">{c.type === "Self" ? <span className="text-[#39FF14] font-bold">{c.engagement}%</span> : `${c.engagement}%`}</td>
                    <td className="py-4 pr-4 text-white/40">{c.reach.toLocaleString()}</td>
                    <td className="py-4"><TrendIcon trend={c.trend} /></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#39FF14]" /> Recent QSR Campaign Benchmarks
          </h2>
          <div className="grid gap-3">
            {QSR_CAMPAIGNS.map((camp, i) => (
              <motion.div
                key={camp.brand}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#13141F] border border-white/[0.08] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1">
                  <p className="font-semibold">{camp.brand}</p>
                  <p className="text-sm text-white/40">{camp.channel} · {camp.spend}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{camp.outcome}</p>
                  <p className={`text-sm font-semibold ${camp.roi.startsWith("6") ? "text-[#39FF14]" : "text-white/40"}`}>
                    ROI: {camp.roi}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-[#13141F] border border-white/[0.08] rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Why INFX Outperforms</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { metric: "6.4×", label: "Lower CPM", desc: "vs. traditional billboards" },
                { metric: "7×", label: "Higher engagement", desc: "vs. Meta ads for QSR" },
                { metric: "14hr", label: "Deployment time", desc: "vs. 3–5 days traditional" },
              ].map((m) => (
                <div key={m.label} className="text-center p-4">
                  <p className="text-3xl font-bold text-[#39FF14]">{m.metric}</p>
                  <p className="font-semibold mt-1">{m.label}</p>
                  <p className="text-xs text-white/40">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link href="/book-briefing" className="btn-neon inline-flex items-center rounded-md px-8 py-3.5 text-[12px] uppercase tracking-[0.2em] font-semibold">
            Book a Briefing
          </Link>
        </div>
      </div>
    </div>
  );
}
