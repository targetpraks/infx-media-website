"use client";

import dynamic from "next/dynamic";
import CinematicHero from "./sections/CinematicHero";
import DeathOfMedia from "./sections/DeathOfMedia";
import AttentionDeficit from "./sections/AttentionDeficit";
import RevelationSection from "./sections/RevelationSection";
import OvernightTakeOver from "./sections/OvernightTakeOver";
import ActivationEngine from "./sections/ActivationEngine";
import CTAContact from "./sections/CTAContact";
import VideoSection from "./sections/VideoSection";
import YouTubeEmbed from "./components/YouTubeEmbed";
import BrandInfectionSimulator from "./components/BrandInfectionSimulator";

// Lazy load heavy backgrounds
const NeuralNetworkBackground = dynamic(() => import("./components/NeuralNetworkBackground"), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  return (
    <>
      <NeuralNetworkBackground />

      {/* 1. THE HOOK — Full-screen cinematic video hero */}
      <CinematicHero />

      {/* 2. THE REVELATION — What INFX does (lime green, the concept) */}
      <RevelationSection />

      {/* 3. Cinematic Video Divider — Brand world concept — REAL YOUTUBE */}
      <YouTubeEmbed
        videoId="dQw4w9WgXcQ"
        title="INFX Brand World Concept"
        subtitle="The Vision"
        overlayTitle="Your Brand Is Not an Ad. It's a World."
        overlaySubtitle="Watch the revelation unfold"
        sectionId="video-brand-world"
      />

      {/* 4. DEATH OF MEDIA — Why old media is dying (blood red) */}
      <DeathOfMedia />

      {/* 5. ATTENTION DEFICIT — Gen Z / esports generation (cyan digital) */}
      <AttentionDeficit />

      {/* 6. Cinematic Video Divider — Esports / gaming energy — REAL YOUTUBE */}
      <YouTubeEmbed
        videoId="dQw4w9WgXcQ"
        title="Physical Captive Attention"
        subtitle="The Movement"
        overlayTitle="We Do Not Ask for Attention. We Capture It in Real Life."
        overlaySubtitle="See how we own the moment"
        sectionId="video-attention"
      />

      {/* 7. OVERNIGHT TAKEOVER — Multi-location conversion timeline */}
      <OvernightTakeOver />

      {/* 8. BRAND INFECTION SIMULATOR — Interactive: click to convert */}
      <section className="section-cinematic relative">
        <div className="section-cinematic-inner">
          <BrandInfectionSimulator />
        </div>
      </section>

      {/* 9. ACTIVATION ENGINE — QSR activation */}
      <ActivationEngine />

      {/* 10. FINAL CTA — No pricing, no slots, just contact */}
      <CTAContact />
    </>
  );
}
