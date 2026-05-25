import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit — INFX TakeOver",
  description:
    "Download the INFX TakeOver media kit: key stats, services overview, pricing tiers, case study summaries, and contact information for press, investors, and brand partners.",
  keywords: [
    "media kit",
    "INFX press",
    "retail media stats",
    "brand takeover specs",
    "INFX pricing",
    "INFX contact",
    "press kit",
  ],
  openGraph: {
    title: "Media Kit — INFX TakeOver",
    description:
      "Download the INFX TakeOver media kit: key stats, services overview, and contact information.",
    url: "https://infxmedia.xyz/media-kit",
    siteName: "INFX TakeOver",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Kit — INFX TakeOver",
    description:
      "Download the INFX TakeOver media kit: key stats, services overview, and contact information.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MediaKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
