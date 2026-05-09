"use client";

import dynamic from "next/dynamic";
import CinematicHero from "./sections/CinematicHero";
import DeathOfMedia from "./sections/DeathOfMedia";
import AttentionDeficit from "./sections/AttentionDeficit";
import RevelationSection from "./sections/RevelationSection";
import OvernightTakeOver from "./sections/OvernightTakeOver";
import ActivationEngine from "./sections/ActivationEngine";
import CTAContact from "./sections/CTAContact";
import YouTubeEmbed from "./components/YouTubeEmbed";
import BrandInfectionSimulator from "./components/BrandInfectionSimulator";
import SectionDivider from "./components/SectionDivider";

const NeuralNetworkBackground = dynamic(() => import("./components/NeuralNetworkBackground"), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  return (
    <>
      <NeuralNetworkBackground />

      <CinematicHero />
      <SectionDivider variant="lime" />

      <RevelationSection />
      <SectionDivider variant="lime" />

      <YouTubeEmbed
        videoId="dQw4w9WgXcQ"
        title="INFX Brand World Concept"
        subtitle="The Vision"
        overlayTitle="Your Brand Is Not an Ad. It's a World."
        overlaySubtitle="Watch the revelation unfold"
        sectionId="video-brand-world"
      />
      <SectionDivider variant="blood" />

      <DeathOfMedia />
      <SectionDivider variant="cyan" />

      <AttentionDeficit />
      <SectionDivider variant="cyan" />

      <YouTubeEmbed
        videoId="dQw4w9WgXcQ"
        title="Physical Captive Attention"
        subtitle="The Movement"
        overlayTitle="We Do Not Ask for Attention. We Capture It in Real Life."
        overlaySubtitle="See how we own the moment"
        sectionId="video-attention"
      />
      <SectionDivider variant="lime" />

      <OvernightTakeOver />
      <SectionDivider variant="lime" />

      <section className="section-cinematic relative">
        <div className="section-cinematic-inner">
          <BrandInfectionSimulator />
        </div>
      </section>
      <SectionDivider variant="lime" />

      <ActivationEngine />
      <SectionDivider variant="lime" />

      <CTAContact />
    </>
  );
}
