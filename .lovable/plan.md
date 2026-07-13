# IntrinsQ Website Plan

A boutique-advisory site built around judgment, not services. Editorial, restrained, marble-and-gold — closer to a modern financial institution than a fintech landing page.

## Design system

Set in `src/styles.css` (@theme + :root):

- Cream `#F7F3EC` (background), Deep Navy `#0B2343` (primary), Muted Gold `#B58A3C` (accent), Ink `#1A1F2C`, Warm Grey `#6B6558`.
- Fonts loaded via `<link>` in `__root.tsx` head:
  - Cormorant Garamond (display serif, italic used for gold accent words like _Compounds._)
  - Manrope (body / UI / eyebrow labels — tracked-out uppercase for section labels)
- Radius small (6–8px), thin gold dividers, generous whitespace, no gradients, no glass, no floating cards.
- Motion: quiet — fade/slide-in on scroll, subtle underline sweeps on links, gentle card lift on hover.
- One hero image (marble/roman-architecture mood) + a couple editorial images for The Ledger; generated via `generate_image` into `src/assets/`.

## Route + files

Single long-form home page for now.

- `src/routes/__root.tsx` — update `<head>`: title "IntrinsQ — Advice That Compounds", meta description, og tags, Google Fonts links, favicon set to logo.
- `src/routes/index.tsx` — composes the sections below.
- `src/components/site/` — one file per section for clarity:
  `Nav.tsx`, `Hero.tsx`, `TrustStrip.tsx`, `Problem.tsx`, `Difference.tsx`, `AdvisoryHouse.tsx`, `AiHuman.tsx`, `WhoWeServe.tsx`, `HowItWorks.tsx`, `WhyIntrinsq.tsx`, `Principles.tsx`, `Ledger.tsx`, `Metrics.tsx`, `FinalCta.tsx`, `Footer.tsx`, plus small `SectionLabel.tsx` and `SerifHeading.tsx` primitives.
- `src/assets/logo-intrinsq.png` — from the uploaded logo (via lovable-assets).
- `src/assets/hero-marble.jpg`, `ledger-1/2/3.jpg` — generated.

## Section-by-section

1. **Nav** — thin, cream bg, logo left; About / Services / Our Approach / Insights / Contact; navy "Book a Consultation →" pill right.
2. **Hero** — left-aligned serif headline "Strategic Financial Advice That _Compounds._" (gold italic on _Compounds_), Manrope subhead, two CTAs (solid navy, ghost with arrow). Right: marble/architecture image with subtle vignette. Gold eyebrow "ADVICE THAT COMPOUNDS".
3. **Trust Strip** — "TRUSTED BY" centered, then Founders · Business Owners · Professionals · Growing Companies as spaced serif words separated by gold dots (no fake logos).
4. **The Problem** — eyebrow "THE MODERN BUSINESS", big serif headline left, paragraph left, three luxury cards right (No Financial Visibility / Reactive Compliance / Disconnected Advisors) — cream cards, thin border, gold numeral, small serif title, short lines.
5. **The IntrinsQ Difference** — full-bleed navy section, subtle marble texture overlay at low opacity. Heading "One Advisory House." Horizontal 5-step timeline with gold circles + line: Observe → Understand → Advise → Execute → Compound.
6. **The Advisory House (Services)** — cream, six premium cards (Virtual CFO, Financial Strategy, Tax & Compliance, HR & Payroll, MIS & Reporting, Business Intelligence). Thin outlined icons, hover lifts card + reveals gold arrow.
7. **AI + Human** — navy split layout. Left column "AI Handles" with gold checks; right "We Handle". Big serif statement underneath: "Technology speeds up the work. _Experience shapes the advice._"
8. **Who We Work With** — two large editorial cards side by side (Growing Businesses ₹50L–₹10Cr / Professionals). Each lists focus areas in a tight serif column.
9. **How It Works** — horizontal timeline, 5 steps (Discovery → Proposal → Onboarding → Monthly Advisory → Long-Term Partnership). Cream, gold numerals 01–05.
10. **Why IntrinsQ** — navy, huge serif "Advice Built Around _Judgment_." Four pillars in a row: Human Reviewed, AI Assisted, One Point of Contact, Long-Term Partnership.
11. **The IntrinsQ Principles** — marble/cream signature section. Five principles as large serif lines separated by thin gold dividers. Very quiet, memorable.
12. **The Ledger (Insights)** — three editorial cards with images, category label in gold, serif title, "Read more →".
13. **Metrics** — 50+ / ₹500Cr+ / 15+ / 48 hrs, thin dividers between, serif numerals, Manrope labels.
14. **Final CTA** — cream/marble, huge serif "Every Business Needs _Better Numbers._" Single navy CTA.
15. **Footer** — navy, three columns (Company / Services / Legal) + logo block with tagline. Thin gold hairline top. Social icons minimal.

## Technical notes

- All colors via CSS tokens (`bg-background`, `text-primary`, `text-accent` where accent = gold). No hardcoded hex in JSX.
- Fonts registered in `@theme` as `--font-serif` and `--font-sans`; `font-serif` used on all headings + numerals.
- Images: use `data-lov-image-placeholder` pattern is unnecessary here since we're building directly — generate hero + 3 ledger images with `generate_image` into `src/assets/` and import.
- Logo: upload via `lovable-assets create` from `/mnt/user-uploads/ChatGPT_Image_Jul_11_2026_04_40_04_AM.png` → import pointer JSON.
- Head SEO: title, description, og:title/description/type=website, twitter:card, og:image = generated hero (absolute URL — set in a follow-up once hosted; for now use `/src/assets/...` and note).
- No backend / auth / Cloud in this build. "Book a Consultation" CTAs anchor to `#contact` (a mailto or a simple contact block in the footer) — can wire to a real form later.
- Nav links currently smooth-scroll to section IDs on the single page; separate routes (About, Services, etc.) can be split out later.

## Out of scope (for this pass)

- CMS / blog engine for The Ledger (static cards for now).
- Contact form backend, booking calendar integration.
- Separate route files per section — single-page first, split later if wanted.
