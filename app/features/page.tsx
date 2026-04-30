import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features – ReLoop Pakistan",
  description:
    "Discover ReLoop Pakistan's core features: Dual-bin system, Trash Wallet, live market rates, pickup scheduling, neighbourhood hubs, and audit purity scoring.",
};

const features = [
  {
    id: "dual-bin",
    title: "Dual-Bin System",
    tagline: "Sort once, earn more",
    description:
      "ReLoop provides colour-coded bins for dry recyclables and organic waste. Proper sorting improves purity scores and unlocks higher earning rates. No sorting confusion — our app guides every step.",
    bullets: [
      "Green bin for dry recyclables (plastic, paper, metal, glass)",
      "Brown bin for organic / compostable waste",
      "In-app sorting guide with item examples",
      "Contamination alerts from collector on pickup",
    ],
    color: "green",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    id: "trash-wallet",
    title: "Trash Wallet",
    tagline: "Your waste, your earnings",
    description:
      "Every pickup automatically credits your in-app Trash Wallet. Cash out to EasyPaisa or JazzCash instantly. Track your total earnings, pending credits, and withdrawal history.",
    bullets: [
      "Instant credit on pickup completion",
      "One-tap cash-out to EasyPaisa / JazzCash",
      "Detailed earnings breakdown by material type",
      "Monthly income summary and tax-ready export",
    ],
    color: "cyan",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: "market-rates",
    title: "Live Market Rates",
    tagline: "Always fair, always transparent",
    description:
      "ReLoop publishes real-time buying rates for every material category, sourced from national commodity markets. No haggling with kabariwalas — you see exactly what you will earn before scheduling a pickup.",
    bullets: [
      "Daily updated rates for 20+ material types",
      "Historical price charts per category",
      "Rate alerts when your materials hit a target price",
      "Rate comparison vs. local market average",
    ],
    color: "yellow",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "pickup-scheduling",
    title: "Pickup Scheduling",
    tagline: "On your schedule, not ours",
    description:
      "Book pickups up to 7 days in advance. Choose a 2-hour arrival window. Get real-time GPS tracking of your collector and an SMS / push notification when they are 10 minutes away.",
    bullets: [
      "7-day advance scheduling via app",
      "Flexible 2-hour arrival windows",
      "Live GPS tracking of collector",
      "Instant reschedule or cancellation",
    ],
    color: "purple",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "neighborhood-hubs",
    title: "Neighbourhood Hubs",
    tagline: "Community recycling, amplified",
    description:
      "Can&apos;t wait for a home pickup? Drop your sorted waste at a nearby ReLoop Hub — staffed collection points located in markets, schools, and mosques. Hubs also serve as micro-sorting and micro-storage facilities.",
    bullets: [
      "Drop-off 7 days a week, 7 am – 9 pm",
      "Interactive map of all nearby hubs",
      "Instant wallet credit on drop-off",
      "Hub operator earns commission on volume",
    ],
    color: "orange",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "audit-scoring",
    title: "Audit & Purity Scoring",
    tagline: "Quality counts",
    description:
      "Our collectors use an in-app audit tool to score the purity of each batch. A higher purity score means a higher price per kg. Gamified badges and leaderboards reward the cleanest sorters in each neighbourhood.",
    bullets: [
      "Per-pickup purity score (0–100)",
      "Automated deductions for contamination",
      "Monthly neighbourhood leaderboard",
      "Eco-badges and milestone rewards",
    ],
    color: "pink",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; bullet: string }> = {
  green:  { text: "text-green-400",  bg: "bg-green-400/10",  border: "border-green-500/30",  bullet: "bg-green-400" },
  cyan:   { text: "text-cyan-400",   bg: "bg-cyan-400/10",   border: "border-cyan-500/30",   bullet: "bg-cyan-400" },
  yellow: { text: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-500/30", bullet: "bg-yellow-400" },
  purple: { text: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-500/30", bullet: "bg-purple-400" },
  orange: { text: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-500/30", bullet: "bg-orange-400" },
  pink:   { text: "text-pink-400",   bg: "bg-pink-400/10",   border: "border-pink-500/30",   bullet: "bg-pink-400" },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-cyan-950/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Platform Features</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Built for Pakistan,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Powered by You
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Every feature in the ReLoop platform is designed around one goal: make recycling the easiest, most rewarding thing you do every week.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {features.map((feature, i) => {
            const c = colorMap[feature.color];
            const isEven = i % 2 === 0;
            return (
              <div
                key={feature.id}
                className={`bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 items-start hover:border-white/20 transition-all`}
              >
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-5 ${c.text}`}>
                    {feature.icon}
                  </div>
                  <p className={`text-sm font-semibold ${c.text} mb-1`}>{feature.tagline}</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">{feature.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder */}
                <div className={`w-full lg:w-64 xl:w-80 flex-shrink-0 ${c.bg} ${c.border} border rounded-xl h-48 lg:h-auto lg:min-h-[220px] flex flex-col items-center justify-center gap-3`}>
                  <div className={`${c.text} opacity-40`}>{feature.icon}</div>
                  <span className={`text-xs font-semibold ${c.text} opacity-60 uppercase tracking-wider`}>{feature.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Ready to start earning?</h2>
          <p className="text-gray-400 mb-8">Create your free account in under 2 minutes and schedule your first pickup today.</p>
          <a
            href="/auth/signup"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
          >
            Get Started — It&apos;s Free
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
