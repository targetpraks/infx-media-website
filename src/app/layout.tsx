import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INFX TakeOver — The World's First Retail Media Revelation",
  description: "INFX Solutions. We don't advertise. We hijack retail space and convert it into immersive brand worlds overnight. For the esports generation. For the brands that understand attention.",
  openGraph: {
    title: "INFX TakeOver — The World's First Retail Media Revelation",
    description: "We don't advertise. We hijack retail space and convert it into immersive brand worlds overnight.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen flex flex-col bg-void text-text-primary">
        <Navbar />
        <main className="flex-1 bg-void">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
