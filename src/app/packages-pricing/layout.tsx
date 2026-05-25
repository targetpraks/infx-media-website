import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages & Pricing — INFX TakeOver",
  description:
    "City, Region, and National TakeOver pricing. Lock your category exclusivity before your competitor does. POPIA-compliant data capture, real-time analytics, and 15–20 min captive attention per customer.",
  openGraph: {
    title: "Packages & Pricing — INFX TakeOver",
    description: "Own Your Category. Lock Your Competitors Out. See City, Region & National pricing tiers.",
    url: "https://infxmedia.xyz/packages-pricing/",
    siteName: "INFX TakeOver",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://infxmedia.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INFX TakeOver Pricing Tiers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages & Pricing — INFX TakeOver",
    description: "Own Your Category. Lock Your Competitors Out. See City, Region & National pricing tiers.",
    images: ["https://infxmedia.xyz/og-image.jpg"],
  },
};

export default function PackagesPricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
