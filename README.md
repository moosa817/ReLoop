# ReLoop Pakistan 🌿

> **Get Paid for Trash** — Turning everyday waste into digital currency.

ReLoop Pakistan is a circular economy platform that connects households with recycling infrastructure, enabling citizens to earn real money from their recyclable waste.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS keyframes + IntersectionObserver (zero extra deps)
- **SEO**: Next.js Metadata API with OpenGraph & Twitter card support

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your site is live!

## Project Structure

```
app/
  layout.tsx      # Root layout with SEO metadata (OG/Twitter)
  page.tsx        # Home page — composes all sections
  globals.css     # Tailwind base + animation utilities
  icon.svg        # Browser-tab favicon
components/
  AnimateIn.tsx   # Scroll-triggered fade-in wrapper (IntersectionObserver)
  Navbar.tsx      # Fixed top nav with mobile menu
  Hero.tsx        # Full-screen hero with CSS entry animations
  ProblemStatement.tsx
  TargetMarket.tsx
  BusinessModel.tsx
  CompetitorAnalysis.tsx
  ProductService.tsx
  AppMockup.tsx
  MarketingPlan.tsx
  Operations.tsx
  FinancialOverview.tsx
  ZeroWasteEcosystem.tsx
  FuturePlan.tsx
  CTA.tsx
  Footer.tsx
```

## Sections

1. **Hero** — "Get Paid for Trash" full-screen landing with animated badge stats
2. **Problem Statement** — Pakistan's waste crisis (3 data-backed cards)
3. **Target Market** — Persona cards (Farzana & Bilal)
4. **Business Model** — 3 revenue streams
5. **Competitor Analysis** — Feature comparison table (dark theme)
6. **Product & Service** — Dual-bin system, App, Neighbourhood Hubs
7. **App Mockup** — Wallet, live market rates, withdrawal UI (visual only)
8. **Marketing Plan** — #KachraySeKamai campaign
9. **Operations** — Cluster pickup, purity audit, 12-hour pay
10. **Financial Overview** — Unit economics flow + sponsorship card
11. **Zero-Waste Ecosystem** — Recyclables → Industry, Organics → Compost, Non-recyclables → Eco-Bricks
12. **Future Plan** — Year 2/3/5 growth roadmap
13. **CTA** — Email early-access signup
14. **Footer** — Links, branding, copyright

## License

© 2025 ReLoop Pakistan. All rights reserved.
