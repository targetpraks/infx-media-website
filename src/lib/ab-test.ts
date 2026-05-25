"use client";

import { useState, useEffect } from "react";

export type Variant = "control" | "variant-a" | "variant-b";

const STORAGE_KEY = "infx_ab_hero_cta";

/**
 * Simple A/B test hook for hero CTA copy.
 * In production, replace localStorage assignment with PostHog or Optimizely.
 */
export function useHeroAB(): { variant: Variant; trackClick: () => void } {
  const [variant, setVariant] = useState<Variant>("control");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Variant | null;
    if (stored && ["control", "variant-a", "variant-b"].includes(stored)) {
      setVariant(stored);
      return;
    }
    const variants: Variant[] = ["control", "variant-a", "variant-b"];
    const assigned = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem(STORAGE_KEY, assigned);
    setVariant(assigned);
  }, []);

  const trackClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ab_hero_cta_click", {
        variant,
        event_category: "ab_test",
        event_label: "hero_cta",
      });
    }
    console.log(`[A/B] Hero CTA clicked — variant: ${variant}`);
  };

  return { variant, trackClick };
}

export function getHeroCopy(variant: Variant): { headline: string; cta: string } {
  switch (variant) {
    case "variant-a":
      return {
        headline: "Your Brand. Their Attention. 14 Hours.",
        cta: "Book a TakeOver",
      };
    case "variant-b":
      return {
        headline: "Digital TakeOvers That Drive Foot Traffic",
        cta: "See Packages",
      };
    default:
      return {
        headline: "Attention Is The New Real Estate",
        cta: "Book a Briefing",
      };
  }
}
