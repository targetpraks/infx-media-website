"use client";

import dynamic from "next/dynamic";
import CinematicHero from "./sections/CinematicHero";
import DeathOfMedia from "./sections/DeathOfMedia";
import AttentionDeficit from "./sections/AttentionDeficit";
import RevelationSection from "./sections/RevelationSection";
import OvernightTakeOver from "./sections/OvernightTakeOver";
import ActivationEngine from "./sections/ActivationEngine";
import CTAContact from "./sections/CTAContact";
import CinematicVideo from "./components/CinematicVideo";
import BrandInfectionSimulator from "./components/BrandInfectionSimulator";
import SectionDivider from "./components/SectionDivider";
import SocialProof from "./components/SocialProof";

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

      <CinematicVideo
        videoUrl="https://cdn.coverr.co/videos/coverr-bustling-city-intersection-at-night-2737/1080p.mp4"
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

      <CinematicVideo
        videoUrl="https://cdn.coverr.co/videos/coverr-abstract-neon-lights-in-the-dark-3157/1080p.mp4"
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

      <SocialProof />
      <SectionDivider variant="lime" />

      <CTAContact />
    </>
  );
}
