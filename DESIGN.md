---
version: alpha
name: INFX TakeOver
description: Cinematic dark-mode design system for a disruptive retail media agency. Rooted in high-contrast darks with three strategic accent colors that signal digital-native attention hacking.

colors:
  primary: "#CCFF00"
  primary-dim: "#99CC00"
  primary-bright: "#E6FF33"
  primary-glow: "rgba(204, 255, 0, 0.15)"
  secondary: "#FF0033"
  secondary-dim: "#CC0022"
  secondary-glow: "rgba(255, 0, 51, 0.15)"
  tertiary: "#00E5CC"
  tertiary-glow: "rgba(0, 229, 204, 0.12)"
  neutral: "#F5F5F5"
  surface: "#0A0A0A"
  surface-elev: "#111111"
  surface-card: "#141414"
  surface-glass: "rgba(10, 10, 10, 0.7)"
  void: "#050505"
  void-deep: "#020202"
  text-primary: "#F5F5F5"
  text-secondary: "#A0A0A0"
  text-tertiary: "#666666"
  text-dim: "#424242"
  gold: "#C8A951"
  gold-muted: "#8A7340"
  border-subtle: "rgba(255, 255, 255, 0.06)"
  border-medium: "rgba(255, 255, 255, 0.1)"
  border-glow: "rgba(204, 255, 0, 0.2)"

typography:
  headline-hero:
    fontFamily: Geist Sans
    fontSize: clamp(2.5rem, 6vw, 5.5rem)
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -0.03em
  headline-section:
    fontFamily: Geist Sans
    fontSize: clamp(2rem, 4vw, 3.5rem)
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-sub:
    fontFamily: Geist Sans
    fontSize: clamp(1.25rem, 2vw, 1.75rem)
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist Sans
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Geist Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Geist Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: Geist Sans
    fontSize: 0.75rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.2em
  stat-number:
    fontFamily: Geist Mono
    fontSize: clamp(3rem, 8vw, 6rem)
    fontWeight: 800
    lineHeight: 1
    letterSpacing: -0.05em
  stat-label:
    fontFamily: Geist Sans
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.05em

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px

spacing:
  base: 16px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section-y: 120px
  section-x: 48px
  gutter: 24px
  margin: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.void}"
    rounded: "{rounded.sm}"
    padding: 16px 32px
    typography: "{typography.label-caps}"
  button-primary-hover:
    backgroundColor: "{colors.primary-bright}"
    textColor: "{colors.void}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: 16px 32px
  button-secondary-hover:
    textColor: "{colors.primary}"
  card-default:
    backgroundColor: "{colors.surface-card}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-default-hover:
    borderColor: "{colors.border-medium}"
  card-glass:
    backgroundColor: "{colors.surface-glass}"
    rounded: "{rounded.xl}"
    padding: 32px
  nav-link:
    textColor: "{colors.text-tertiary}"
    typography: "{typography.label-caps}"
  nav-link-hover:
    textColor: "{colors.primary}"
  eyebrow-primary:
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
  eyebrow-secondary:
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  eyebrow-tertiary:
    textColor: "{colors.tertiary}"
    typography: "{typography.label-caps}"
---

## Overview

**Architectural Cinematic Noir** meets **Digital Disruption**. The INFX TakeOver design system evokes a premium, high-contrast dark canvas — like stepping inside a neon-lit esports arena at midnight. Three accent colors serve specific narrative roles:

- **Toxic Lime (#CCFF00)** — The Revelation. Digital-native, next-gen, attention hacking. Used for primary CTAs, highlights, and positive data.
- **Blood Red (#FF0033)** — The Death of Media. Urgency, alarm, decline. Used sparingly for negative data, warnings, and dramatic tension.
- **Warm Cyan (#00E5CC)** — The Digital Ocean. Esports, gaming, Gen-Z energy. Used for the attention-deficit generation sections.
- **Gold (#C8A951)** — Brand heritage. Reserved exclusively for the INFX brand mark.

The aesthetic is **cinematic maximalism in a constrained system** — bold typography, dramatic scroll animations, grain textures, scanlines, and gradient overlays create a film-like experience. But underneath the spectacle is a rigorous design system with consistent spacing, typography scales, and component patterns.

## Colors

The palette is anchored in deep darkness with strategic neon accents:

- **Primary / Lime (#CCFF00):** The "takeover" color. Used for primary CTAs, active states, link highlights, positive stats, and any element that demands immediate action. This is the single most important accent.
- **Secondary / Blood (#FF0033):** The "death" color. Used exclusively for the Death of Media section and negative/decline data. Creates visceral tension.
- **Tertiary / Cyan (#00E5CC):** The "digital" color. Used for esports/gaming sections and Gen-Z data points. Cooler, more distant than lime — it signals technology and the internet.
- **Surface (#0A0A0A):** The default card background. One shade up from void.
- **Void (#050505):** The base background. Nearly black, providing maximum contrast for neon accents.
- **Text hierarchy:** Primary (#F5F5F5), Secondary (#A0A0A0), Tertiary (#666666), Dim (#424242). Four distinct tiers ensure content hierarchy without ever needing mid-gray guesswork.

**Color usage rule:** Never use more than one accent color in the same section. A section is either Lime (revelation/activation), Blood (death of media), or Cyan (attention deficit). This prevents visual chaos and maintains narrative clarity.

## Typography

The typography uses **Geist Sans** for all narrative and UI text, and **Geist Mono** for data, stats, and technical labels. The system follows a strict hierarchy:

- **headline-hero:** For the main hero statement only. Maximum visual impact with tight tracking and uppercase.
- **headline-section:** For section titles. Still bold and tight but slightly smaller.
- **headline-sub:** For supporting headlines and sub-narrative text. Lighter weight, more breathing room.
- **body-lg / body-md / body-sm:** Three body sizes for progressive content density.
- **label-caps:** Eyebrows, navigation labels, and metadata. Always uppercase with 0.2em tracking. These are signposts, not prose.
- **stat-number:** Large monospaced numbers for data. Tabular-nums for alignment.

**Font rule:** Never use more than two font weights on the same screen. Bold (800) for headlines, Regular (400) for body. The contrast between weights creates hierarchy — not size alone.

## Layout

The layout follows a **Full-viewport Cinematic Section** model:

- Each major section occupies `min-height: 100vh` on desktop, adapting gracefully on mobile.
- Content is constrained to `max-width: 1400px` with responsive horizontal padding (24px mobile, 48px desktop).
- Vertical section padding: 120px on desktop, 60-80px on mobile.
- All spacing uses multiples of 4px, with an 8px base grid. The primary spacing tokens (xs: 4px, sm: 8px, md: 16px, lg: 32px, xl: 64px) ensure consistent rhythm.

**Grid rule:** Cards use a responsive grid — 1 column mobile, 2 columns tablet, 3-4 columns desktop. Gaps are consistently 16-20px.

## Elevation & Depth

Depth is conveyed through three mechanisms:

1. **Tonal Layers:** Surfaces use progressively lighter shades of near-black — void (#050505) → surface (#0A0A0A) → surface-card (#141414). This creates subtle depth without heavy shadows.
2. **Glass Morphism:** `card-glass` uses backdrop-blur with semi-transparent backgrounds for floating, layered panels over video/gradient backgrounds.
3. **Neon Glow:** Active elements receive colored box-shadows matching their accent (lime-glow, blood-glow, cyan-glow). Glows should be subtle (0.15-0.2 opacity) and never used on more than one element per viewport.

**Shadow rule:** Never use gray drop shadows. Elevation is tonal or glowing, never a generic `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`.

## Shapes

All interactive elements use a **consistent rounding system**:

- Small elements (badges, tags, dots): `{rounded.sm}` — 6px
- Cards and containers: `{rounded.lg}` — 16px
- Feature sections and overlays: `{rounded.xl}` — 24px
- Pills and avatars: `{rounded.full}` — 9999px

**Shape rule:** Never mix sharp corners and heavily rounded corners in the same view. The 6px-16px-24px system provides just enough softness while maintaining a precise, engineered aesthetic.

## Components

### Buttons
- **button-primary:** Lime background, void text, 6px radius. Hover lifts 2px with lime glow. The shimmer effect (pseudo-element gradient sweep) activates on hover.
- **button-secondary:** Transparent background, white/15 border, secondary text. Hover transitions border and text to lime.

### Cards
- **card-default:** Surface-card background, subtle border (6% opacity white). Hover increases border to 10% opacity with a faint white ambient shadow.
- **card-glass:** Glass morphism with backdrop-blur. For overlaying video/gradient sections. Always pair with `border-glow-lime` when used as a CTA container.

### Navigation
- **Top nav:** Fixed, transparent on load, blurs and darkens on scroll. Links use `label-caps` typography with tertiary color, transitioning to lime on hover.
- **Mobile menu:** Full-width slide-down with backdrop blur. Animate in/out with framer-motion.

### Eyebrows
- Three variants: `eyebrow-primary` (lime), `eyebrow-secondary` (blood), `eyebrow-tertiary` (cyan). Each signals which accent color system the section uses.

### Section Containers
- `section-cinematic`: Full-viewport, vertically centered, with overflow hidden for video/animation backgrounds.
- `section-cinematic-inner`: Constrained content area within cinematic sections.

## Do's and Don'ts

- Do use the primary (lime) color only for the single most important action per screen
- Do maintain strict color-per-section discipline — one accent color per section
- Do use `label-caps` with generous tracking for eyebrows and metadata
- Do use tonal elevation (darker → lighter darks) instead of drop shadows
- Do ensure all text passes WCAG AA contrast (4.5:1 for normal text) against dark backgrounds
- Don't mix lime, blood, and cyan in the same UI section
- Don't use `font-weight: 600` for body text — reserve 800 for headlines and 400 for body
- Don't add generic gray drop shadows to cards — use tonal elevation or neon glow
- Don't use rounded corners above 16px on small cards — reserve `xl` (24px) for large section containers
- Don't place more than 2 CTA buttons in a single section