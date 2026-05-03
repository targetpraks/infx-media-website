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

// Lazy load heavy canvas background
const CanvasBackground = dynamic(() => import("./components/CanvasBackground"), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  return (
    <>
      <CanvasBackground />

      {/* 1. THE HOOK — Full-screen cinematic video hero */}
      <CinematicHero />

      {/* 2. THE REVELATION — What INFX does (lime green, the concept) */}
      <RevelationSection />

      {/* 3. Cinematic Video Divider — Brand world concept */}
      <VideoSection
        title="Your Brand Is Not an Ad. It's a World."
        subtitle="The INFX Concept"
        posterUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      {/* 4. DEATH OF MEDIA — Why old media is dying (blood red) */}
      <DeathOfMedia />

      {/* 5. ATTENTION DEFICIT — Gen Z / esports generation (cyan digital) */}
      <AttentionDeficit />

      {/* 6. Cinematic Video Divider — Esports / gaming energy */}
      <VideoSection
        title="We Do Not Ask for Attention. We Capture It in Real Life."
        subtitle="Physical Captive Attention"
        posterUrl="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 7. OVERNIGHT TAKEOVER — Multi-location conversion timeline */}
      <OvernightTakeOver />

      {/* 8. ACTIVATION ENGINE — QSR activation */}
      <ActivationEngine />

      {/* 9. FINAL CTA — No pricing, no slots, just contact */}
      <CTAContact />
    </>
  );
}
