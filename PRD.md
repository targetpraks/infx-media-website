---
prd: "infx-media-website"
status: draft
date: "2026-05-24"
tags: [PRD, B2B, Marketing, Next.js, INFX, Lead-Machine, Commerce-Platform]
aliases: ["INFX Media Lead Machine PRD"]
category: "Business"
repo: "targetpraks/infx-media-website"
version: "1.0"
reviewers: [Forge, Beast, Psylocke, Wolverine, Strategy, Colossus]
---

# INFX Media Website — Finalized Product Requirements Document

> **Synthesized from 6-agent audit** (Forge/Beast/Psylocke/Wolverine/Strategy/Colossus) | Date: 2026-05-24  
> **Repo:** `targetpraks/infx-media-website` | **Type:** Next.js 16 static-export B2B marketing site  
> **Overall Health:** 6.5 / 10 (polished frontend, zero revenue infrastructure)

---

## 1. Executive Summary

`infx-media-website` is a visually stunning, production-ready B2B marketing site for INFX Solutions — a retail media company selling "TakeOver" in-store campaigns to South African QSR brands. The site delivers a cinematic, scroll-driven narrative from "Death of Media" through "Attention Deficit" to "TakeOver" and CTA capture. It is one of the most visually mature properties in the targetpraks portfolio.

**The problem:** The site is a brochure with no backend. Every lead generated through the multi-field "Book a Briefing" form evaporates into `/dev/null`. There is no lead persistence, no CRM integration, no pricing transparency, no analytics, no A/B testing, and no content management system. Marketing spend that drives traffic to this site produces zero measurable pipeline value.

**The opportunity:** The existing Vault PRD ([[PRDs/Business/2026-05-21 — INFX Media Lead Machine PRD|INFX Media Lead Machine PRD]]) defines a 7-phase transformation from static brochure to full revenue engine. This synthesized PRD condenses the 6-agent audit into an actionable, prioritized roadmap with specific file paths, line numbers, and acceptance criteria.

**Critical business finding:** This is a **leaky bucket** — beautiful, persuasive, and broken at the point of conversion. Competitors with less visually impressive but functional lead-capture systems will win every qualified prospect.

---

## 2. Tech Stack

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js | 16.2.4 | App Router, static export (`output: 'export'`) |
| Runtime | React | 19.2.4 | Latest; monitor ecosystem plugin compatibility |
| Styling | Tailwind CSS | v4 | Custom design tokens (void/lime/neon palette) |
| Animation | Framer Motion | ^12.38.0 | Scroll-triggered entrance animations |
| Animation | GSAP | ^3.15.0 | Canvas 2D neural network background, scroll progress |
| Icons | Lucide React | ^1.14.0 | Consistent iconography |
| Fonts | Geist Sans + Geist Mono | — | Via `next/font` with `display: "swap"` |
| Build | TypeScript | strict: true | Zero `any` types in source |
| Lint | ESLint | v9 + core-web-vitals | `eslint.config.mjs` present |
| Hosting | GitHub Pages | — | Automated via `.github/workflows/deploy.yml` |
| Docker | nginx:alpine | — | Multi-stage `Dockerfile` present (builder → nginx) |

**Dependencies at risk:** None currently. React 19 ecosystem maturity is still catching up — verify all third-party plugins before major upgrades.

---

## 3. Architecture

```
infx-media-website/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # Root layout with JSON-LD structured data (line 91)
│  │  ├─ page.tsx                # Homepage (cinematic hero + sections)
│  │  ├─ error.tsx               # Error boundary
│  │  ├─ loading.tsx             # Loading state
│  │  ├─ not-found.tsx           # 404 page
│  │  ├─ globals.css             # Tailwind + custom tokens
│  │  ├─ sections/               # Page slices (~15 sections)
│  │  │  ├─ CinematicHero.tsx
│  │  │  ├─ NeuralNetworkBackground.tsx
│  │  │  ├─ BookBriefingSection.tsx
│  │  │  └─ ...
│  │  └─ components/             # Shared UI
│  │     ├─ Navbar.tsx
│  │     ├─ Footer.tsx
│  │     ├─ CanvasBackground.tsx
│  │     ├─ GlitchText.tsx
│  │     └─ TypewriterText.tsx
│  ├─ lib/                       # Static data helpers
├─ public/                       # Static assets
├─ Dockerfile                    # Multi-stage Node → nginx
├─ .github/workflows/deploy.yml  # GitHub Pages CI/CD
├─ next.config.ts                # Static export config
└─ eslint.config.mjs             # Lint rules
```

**Key architectural decisions:**
- **Static export** (`output: 'export'`): Zero server runtime; deployable to any static host. This means no server-side API routes can coexist in the same build.
- **Sections pattern**: Each scroll-driven narrative slice is a self-contained component in `sections/`, imported by `page.tsx`.
- **Canvas backgrounds**: Heavy visual effects (`NeuralNetworkBackground`, `CanvasBackground`) are dynamically imported with `ssr: false` to avoid SSR hydration mismatches.
- **No CMS**: All content (copy, pricing, FAQ) is hardcoded in TSX files.
- **No backend**: The "Book a Briefing" form is client-side only; validation via native `alert()` calls.

---

## 4. Current Status

### 4.1 What Works (Shipped)

| Feature | Status | Evidence |
|---------|--------|----------|
| 10-page static marketing site | ✅ Production | `/faq`, `/gallery`, `/agency`, `/packages-pricing`, `/about`, `/book-briefing`, `/how-it-works`, `/data-advantage`, `/legal` |
| Cinematic scroll narrative | ✅ Strong | Framer Motion + GSAP entrance animations across ~15 sections |
| Neural network canvas background | ✅ Present | `src/app/components/CanvasBackground.tsx` |
| SEO metadata | ✅ Good | OpenGraph, Twitter cards, canonical links, `robots` meta, schema.org JSON-LD |
| Mobile responsive design | ✅ Good | Tailwind v4 breakpoints, mobile nav drawer |
| Error / loading / 404 boundaries | ✅ Present | `src/app/error.tsx:15`, `loading.tsx`, `not-found.tsx` |
| Accessibility foundations | ✅ Good | Skip links, semantic landmarks, `:focus-visible` rings, `aria-label`s |
| Docker build | ✅ Working | Multi-stage `Dockerfile` |
| GitHub Pages CI/CD | ✅ Working | `.github/workflows/deploy.yml` deploys on `main` push |
| `prefers-reduced-motion` | ✅ Partial | CSS media query present; Framer Motion may not fully gate |
| Design system (DESIGN.md) | ✅ Excellent | Full cinematic noir design system documented |

### 4.2 What Is Broken / Missing

| Feature | Status | Impact |
|---------|--------|--------|
| Lead persistence API | ❌ Missing | Every briefing form submission evaporates |
| CRM integration (Zoho) | ❌ Missing | No sales follow-up pipeline |
| Pricing page | ❌ Missing | Marketing directors cannot evaluate budget fit |
| Case studies | ❌ Missing | Zero social proof — #1 B2B conversion driver absent |
| Analytics (GA4, PostHog) | ❌ Missing | Zero ability to optimize conversion |
| A/B testing | ❌ Missing | No experiment infrastructure |
| CMS (Sanity) | ❌ Missing | Content changes require code redeploy |
| Email nurture sequences | ❌ Missing | No lead warming after capture |
| n8n automation | ❌ Missing | No workflow orchestration |
| Showreel video pipeline | ❌ Missing | Stock footage only (Coverr) |
| Investor micro-site | ❌ Missing | Not started |
| Competitive intel dashboard | ❌ Missing | Not started |

### 4.3 Scorecard by Agent Dimension

| Dimension | Score | Rationale |
|-----------|-------|-----------|
| Technical (Forge) | 6.5/10 | Polished static site; missing tests, CSP, image pre-optimization |
| Documentation (Beast) | 1.0/5 | Stock README; excellent DESIGN.md; missing CODER.md, PROGRESS.md |
| UX (Psylocke) | 7.9/10 | Strong journey, accessibility B+, neon contrast risks, steep form barrier |
| Security (Wolverine) | 6.5/10 | No auth surface; missing security headers; JSON-LD injection risk |
| Business (Strategy) | C- | Beautiful storytelling, zero revenue infrastructure |
| Infrastructure (Colossus) | 6.5/10 | Good GitHub Pages + Docker; missing CDN, monitoring, security headers |

---

## 5. Critical Gaps & Technical Debt

This section condenses findings from all 6 audit dimensions, prioritized by severity.

### 🔴 Critical (Immediate — This Week)

#### CRIT-1: Leads Evaporate — No Backend Persistence
- **File:** `src/app/sections/BookBriefingSection.tsx` (inferred from Beast audit)
- **Issue:** The multi-field briefing form (12+ fields including company, title, category, tier, budget, brand vision) uses client-side validation only. Data is never sent to a server.
- **Impact:** Every marketing dollar driving traffic to `/book-briefing` converts to `/dev/null`.
- **Evidence:** Beast audit §4: "Form submits to `setTimeout` mock — no backend." Strategy audit §2: "Lead capture API: ❌ Missing."
- **Remediation:** Implement a serverless lead API (Next.js API Route + Vercel Serverless Function, or Netlify Function, or Supabase Edge Function). PRD has exact schema, validation, and scoring logic.

#### CRIT-2: No Pricing Transparency
- **Issue:** No pricing page exists. The PRD defines tiered pricing (Entry / Growth / Enterprise) but no page renders it.
- **Impact:** B2B marketing directors cannot evaluate budget fit; increases friction in sales cycle.
- **Remediation:** Create `/packages-pricing` page with clear tier cards. Gate Enterprise with "Contact Sales" if preferred.

#### CRIT-3: No Analytics = No Optimization Baseline
- **Issue:** Zero analytics tracking (GA4, Meta Pixel, LinkedIn Insight Tag, PostHog, Mixpanel).
- **Impact:** Cannot answer: "Which channel drove the most briefing bookings?" "Where do users drop off in the scroll journey?"
- **Remediation:** Add GA4 + Meta Pixel + PostHog (session replay) per PRD Phase 1 instructions.

---

### 🟠 High (This Week / Next Sprint)

#### HIGH-1: Missing Security Headers
- **File:** `next.config.ts` (no `headers()` function); no `middleware.ts`
- **Issue:** No CSP, HSTS, X-Frame-Options, X-Content-Type-Options, or Referrer-Policy.
- **Impact:** XSS framing, content-sniffing, and downgrade attacks are all possible.
- **Remediation:** Add `middleware.ts` to inject headers, or configure at CDN/nginx level.

#### HIGH-2: `dangerouslySetInnerHTML` for JSON-LD
- **File:** `src/app/layout.tsx:91`
- **Issue:** `dangerouslySetInnerHTML` with `JSON.stringify(jsonLd)` injects structured data. While currently hardcoded, any future dynamic extension risks XSS via `\u2028`/`\u2029` or closing `</script>` tags.
- **Impact:** Stored XSS if JSON-LD data is ever sourced dynamically (e.g., from CMS).
- **Remediation:** Replace with a safe serialization utility that escapes `<` and Unicode line-separator characters, or use `next/script` with `type="application/ld+json"`.

#### HIGH-3: No `prefers-reduced-motion` in Canvas / Framer Motion
- **Files:** `src/app/components/CanvasBackground.tsx`, `src/app/components/NeuralNetworkBackground.tsx`, various section Framer Motion components
- **Issue:** CSS `@media (prefers-reduced-motion: reduce)` is present, but canvas animations and Framer Motion entrance tweens may not respect system preference.
- **Impact:** Users with vestibular disorders experience motion sickness.
- **Remediation:** Add a global `<ReducedMotionProvider>` that gates all GSAP/Framer/Canvas loops.

#### HIGH-4: No CI/CD Quality Gates
- **File:** `.github/workflows/deploy.yml`
- **Issue:** Current workflow only does `npm ci` → `npm run build` → deploy. No lint, test, Lighthouse, or `npm audit` gates.
- **Impact:** Broken builds or vulnerable dependencies can reach production.
- **Remediation:** Expand workflow to include `npm run lint`, `npm audit`, and Lighthouse CI.

#### HIGH-5: Form Validation Uses `alert()`
- **File:** `src/app/sections/BookBriefingSection.tsx` (inferred)
- **Issue:** Native `alert()` for POPIA consent and required-field errors is jarring, blocks interaction, and is inaccessible to screen readers.
- **Impact:** Poor UX and WCAG violation.
- **Remediation:** Replace with inline error messages adjacent to fields, using `aria-live` regions.

#### HIGH-6: Heavy Background Videos Without Bandwidth Check
- **Files:** Video elements in `CinematicHero.tsx`, `CinematicVideo.tsx`
- **Issue:** Two large Coverr background videos (1080p MP4) autoplay with no `preload="none"` or poster-frame fallback for low-data users.
- **Impact:** Excessive mobile data consumption; poor performance on slow networks.
- **Remediation:** Add `preload="none"` or lazy-load second video until in-viewport. Provide poster frames.

---

### 🟡 Medium (This Month)

#### MED-1: Images Not Pre-Optimized
- **File:** `next.config.ts` — `images: { unoptimized: true }`
- **Issue:** Static export disables Next.js Image Optimization. Images must be pre-optimized at build time or via CDN.
- **Remediation:** Pre-optimize all images to WebP/AVIF. Use a build script or Sharp pipeline.

#### MED-2: OpenGraph Image External Dependency
- **File:** `src/app/layout.tsx` — references `https://infxmedia.xyz/og-image.jpg`
- **Issue:** External URL for OG image. If domain lapses or asset moves, social sharing breaks.
- **Remediation:** Self-host OG image or add build-time verification.

#### MED-3: No Newsletter / Soft CTA
- **Issue:** The only conversion path is the high-friction 12-field briefing form. No "Download Media Kit" or "Get Updates" soft capture exists.
- **Impact:** Filters out mid-funnel prospects who are not ready to book a briefing.
- **Remediation:** Add a lightweight email capture in footer and hero.

#### MED-4: No Social Proof
- **Issue:** Zero named client logos, video testimonials, or case-study cards.
- **Impact:** B2B buyers require trust signals. Without them, INFX is an unverified claim.
- **Remediation:** Build one case study page: "How Papa Pasta Sandton increased foot traffic 23% with an MTN TakeOver" (simulated data acceptable for MVP).

#### MED-5: Missing Code Documentation
- **Files:** Missing `CODER.md`, `PROGRESS.md`
- **Impact:** New agents require code archaeology to understand animation architecture and data flow.
- **Remediation:** Document design token system, Framer Motion + GSAP + Canvas patterns, and component library conventions.

#### MED-6: No Sitemap Generation
- **Issue:** Static site has no dynamic `sitemap.xml` generation.
- **Remediation:** Add `next-sitemap` or static `sitemap.xml` if pages change frequently.

---

### 🟢 Low (Backlog)

- Remove `next.config.ts.bak` and `.bak2` files from repository (cleanup)
- Add `loading.tsx` skeleton screens for dynamic imports (currently returns `null`)
- Consider light mode toggle (currently forces dark mode)
- Add sticky mobile FAB for "Book Briefing" during long-scroll sessions

---

## 6. Recommended Next Phase

### Phase 1: Conversion Foundation (Lead Capture API) — 2 weeks
**Goal:** Stop lead evaporation and establish a measurable pipeline.

| Task | Effort | Owner | Acceptance Criteria |
|------|--------|-------|-------------------|
| Implement `/api/leads` serverless function | 1 day | Forge | POST endpoint accepts PRD schema; validates email, company, budget tier; returns 201 with lead ID |
| Connect form to `/api/leads` | 0.5 day | Forge | Remove `setTimeout` mock; wire form `onSubmit` to real POST |
| Add Zoho CRM webhook | 1 day | Forge | On successful lead creation, fire Zoho webhook with PRD-defined payload |
| Add GA4 + Meta Pixel + PostHog | 1 day | Dazzler | All three scripts firing; custom events for "Briefing Started", "Briefing Submitted", "Page Scroll Depth" |
| Build pricing page (`/packages-pricing`) | 1 day | Psylocke/Dazzler | Three-tier cards (Entry/Growth/Enterprise); Enterprise gated with "Contact Sales" |
| Replace `alert()` with inline validation | 0.5 day | Psylocke | All form errors render inline; focus management works for screen readers |

**Phase 1 blocker mitigation:** Since the current build is static export (`output: 'export'`), API routes cannot exist in the same Next.js build. Options:
1. **Vercel:** Deploy as SSR/ISR with API routes on Vercel Edge Functions (recommended — keeps monorepo simple).
2. **Netlify Functions:** Add serverless functions in `netlify/functions/` alongside static build.
3. **Supabase Edge Functions:** Post to external Supabase endpoint from static form.
4. **Formspree / Web3Forms:** External form backend as temporary bridge.

### Phase 2: Content & Trust Building — 2 weeks

| Task | Effort | Owner |
|------|--------|-------|
| Deploy Sanity CMS studio | 2–3 days | Forge |
| Migrate FAQ and Pricing to CMS | 1 day | Beast |
| Write first case study (Papa Pasta + MTN TakeOver) | 2 days | Beast |
| Add "Download Media Kit" soft CTA | 1 day | Psylocke |
| Add newsletter capture in footer | 0.5 day | Psylocke |

### Phase 3: Automation & Intelligence — 4 weeks

| Task | Effort | Owner |
|------|--------|-------|
| Implement n8n lead nurture workflows | 3 days | Iceman |
| Add email templates (5 nurture emails) | 2 days | Beast |
| A/B test hero CTA with PostHog | 2 days | Dazzler |
| Build competitive intel dashboard (Phase 3 of PRD) | 1 week | Storm |

### Phase 4–7: CMS, Showreel, Investor Micro-Site, Infrastructure

Refer to the full Vault PRD: [[PRDs/Business/2026-05-21 — INFX Media Lead Machine PRD|INFX Media Lead Machine PRD]].

---

## 7. Acceptance Criteria

### Functional AC

| ID | Criteria | How to Verify |
|----|----------|---------------|
| AC-1 | A visitor can complete the "Book a Briefing" form and the lead is persisted to a database or CRM within 5 seconds. | Submit form → check CRM/dashboard for record |
| AC-2 | The pricing page (`/packages-pricing`) displays three tiers with clear feature lists and CTAs. | Visual QA + Lighthouse |
| AC-3 | GA4 fires a `briefing_submitted` event on successful form submission. | Chrome DevTools Network tab → GA4 payload |
| AC-4 | PostHog session replay is active on `/book-briefing` and `/packages-pricing`. | PostHog dashboard shows sessions |
| AC-5 | Sanity CMS can update FAQ content without a code redeploy. | Edit FAQ in Sanity Studio → site reflects change after rebuild |

### Technical AC

| ID | Criteria | How to Verify |
|----|----------|---------------|
| AC-6 | `npm run lint` passes with zero errors and zero warnings. | CI gate |
| AC-7 | `npm audit` returns zero high/critical vulnerabilities. | CI gate |
| AC-8 | Lighthouse score ≥ 90 on mobile for `/` and `/book-briefing`. | Lighthouse CI |
| AC-9 | Security headers (CSP, HSTS, X-Frame-Options) are present on all responses. | `curl -I https://infxmedia.xyz` |
| AC-10 | `prefers-reduced-motion` disables all canvas and Framer Motion animations. | macOS Accessibility → Reduce Motion → verify |

### Security AC

| ID | Criteria | How to Verify |
|----|----------|---------------|
| AC-11 | `dangerouslySetInnerHTML` is removed from `src/app/layout.tsx:91` JSON-LD. | Grep source code |
| AC-12 | No secrets in repository (`.env` files, API keys). | `git-secrets` or `truffleHog` scan |
| AC-13 | Form inputs are validated server-side (not only client-side). | POST malformed payload → expect 400 |

---

## 8. Agent Assignment

| Agent | Responsibility | Tasks |
|-------|---------------|-------|
| **Forge** | Lead API + CMS integration | Build `/api/leads`, Sanity studio, Zoho webhook, CI/CD gates |
| **Psylocke** | UX polish + accessibility | Replace `alert()` validation, add `prefers-reduced-motion` gating, design soft CTA |
| **Dazzler** | Analytics + pricing page | GA4/Meta Pixel/PostHog setup, pricing tier design, A/B test specs |
| **Beast** | Content + documentation | Case study writing, README rewrite, CODER.md, PROGRESS.md |
| **Storm** | Competitive intel dashboard | Data pipeline for QSR competitive tracking (Phase 3) |
| **Iceman** | Automation | n8n workflow setup, email nurture sequences, CRM webhook orchestration |
| **Wolverine** | Security hardening | CSP headers, `npm audit` CI gate, secrets scan |
| **Colossus** | Infrastructure | CDN migration, monitoring (UptimeRobot), Docker/nginx header injection |

---

## 9. Cross-Links

### Portfolio Ecosystem Map

```
INFX Media Website (this PRD)
  ├─ Sells TakeOver campaigns to QSR brands
  ├─ Should cross-link to: Papa Pasta (proof-of-concept store)
  ├─ Should cross-link to: ChromaCommand (environment control tech)
  └─ Lead data flows to: Zoho CRM → n8n → Email nurture

Papa Pasta Main Website
  ├─ Consumer brand site
  ├─ Should display: "Powered by INFX Media" / "TakeOver by INFX"
  └─ Franchise recruitment: Papa Pasta FND

ChromaCommand Platform
  ├─ IoT dashboard for store environment control
  ├─ INFX should sell: "Attention + Environment + Proof-of-Concept" bundle
  └─ Currently no cross-linking exists across any repo
```

### Related Documents

- [[PRDs/Business/2026-05-21 — INFX Media Lead Machine PRD|Vault PRD v2.0]] — Detailed 7-phase roadmap
- [[PRDs/Business/YYYY-MM-DD — papa-pasta-main-website PRD|Papa Pasta Main Website PRD]] — Consumer commerce sibling
- [[PRDs/Business/YYYY-MM-DD — chromacommand-platform PRD|ChromaCommand Platform PRD]] — IoT backend sibling
- **Design System:** `infx-media-website/src/app/globals.css` + `DESIGN.md`
- **Repo:** https://github.com/targetpraks/infx-media-website

### Cross-Cutting Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| React 19 plugin incompatibility | Medium | Pin dependency versions; test upgrades in staging |
| GSAP bundle bloat | Medium | Verify tree-shaking; lazy-load heavy plugins |
| GitHub Pages bandwidth limits | Medium | Move to Cloudflare Pages if traffic exceeds 100GB/mo |
| No backend → static export limitation | High | Migrate hosting to Vercel or add external serverless functions |

---

## Appendices

### A. File Reference Index

| File | Line(s) | Issue / Relevance |
|------|---------|-------------------|
| `src/app/layout.tsx` | 91 | `dangerouslySetInnerHTML` for JSON-LD |
| `src/app/error.tsx` | 15 | `console.error` should ship to Sentry in production |
| `next.config.ts` | — | `images: { unoptimized: true }`, missing `headers()` |
| `.github/workflows/deploy.yml` | — | No lint, test, or audit gates |
| `src/app/sections/BookBriefingSection.tsx` | — | Form submits to mock; no backend |
| `src/app/components/CanvasBackground.tsx` | — | Canvas animation may not respect `prefers-reduced-motion` |
| `src/app/components/NeuralNetworkBackground.tsx` | — | Neural network canvas — heavy GPU load |
| `public/sitemap.xml` | — | Static; should regenerate if pages change |
| `Dockerfile` | — | Multi-stage build correct; nginx should inject headers |

### B. OWASP Top 10 Mapping

| OWASP Category | Risk Level | File/Line | Mitigation |
|----------------|-----------|-----------|------------|
| A03 Injection | Medium | `layout.tsx:91` | Safe JSON-LD serialization |
| A05 Security Misconfiguration | High | `next.config.ts` (no headers) | Add `middleware.ts` or nginx CSP |
| A06 Vulnerable Components | Low | All deps | `npm audit` in CI |
| A09 Logging/Monitoring | High | Entire repo | Sentry + GA4 + PostHog |

### C. Cost Estimate (Phase 1)

| Component | Monthly Cost |
|-----------|-------------|
| Vercel (SSR + Edge Functions) | $0–$20 |
| Sanity CMS | $0 (free tier) |
| PostHog | $0 (free tier) |
| Zoho CRM (free tier) | $0 |
| **Total Phase 1** | **$0–$20** |

---

> **End of PRD** | Next action: Magik tasks Forge with Phase 1 sprint planning. See [[Task Center]] for issue tracking.
