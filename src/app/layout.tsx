import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import { safeJsonLdStringify } from "../lib/safe-json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INFX TakeOver — The World's First Retail Media Revelation",
  description:
    "We don't advertise. We hijack retail space and convert it into immersive brand worlds overnight. For the esports generation. For brands that understand attention is the only currency.",
  keywords: [
    "retail media",
    "brand takeover",
    "immersive branding",
    "QSR activation",
    "esports marketing",
    "Gen Z marketing",
    "brand worlds",
    "retail conversion",
    "attention economy",
    "INFX",
  ],
  authors: [{ name: "INFX Solutions — An Infinity Brands Company" }],
  creator: "INFX Solutions",
  publisher: "INFX Solutions",
  openGraph: {
    title: "INFX TakeOver — The World's First Retail Media Revelation",
    description:
      "We don't advertise. We hijack retail space and convert it into immersive brand worlds overnight.",
    url: "https://infxmedia.xyz",
    siteName: "INFX TakeOver",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://infxmedia.xyz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INFX TakeOver — Brand World Visualization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INFX TakeOver — The World's First Retail Media Revelation",
    description:
      "We don't advertise. We hijack retail space and convert it into immersive brand worlds overnight.",
    images: ["https://infxmedia.xyz/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INFX TakeOver",
  alternateName: "INFX Solutions",
  url: "https://infxmedia.xyz",
  logo: "https://infxmedia.xyz/logo.png",
  description:
    "We don't advertise. We hijack retail space and convert it into immersive brand worlds overnight.",
  email: "leads@infxmedia.xyz",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bedfordview",
    addressRegion: "Johannesburg",
    addressCountry: "ZA",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Infinity Brands",
  },
  sameAs: ["https://infxmedia.xyz"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <meta name="theme-color" content="#050505" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <link rel="canonical" href="https://infxmedia.xyz" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <Script
          id="json-ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: safeJsonLdStringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-void text-text-primary">
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:bg-lime focus:text-void focus:font-semibold focus:text-sm focus:rounded-md"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 bg-void">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
