import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Live Market Rates – ReLoop Pakistan",
  description:
    "Real-time market rates for recyclable materials in Pakistan. Check current prices for plastic, paper, metal, glass, and more.",
};

const mainRates = [
  {
    material: "Plastic (Mixed)",
    rate: 65,
    trend: "up",
    trendPercent: 2.5,
    icon: "🥤",
    description: "PET, HDPE, PP mixed",
  },
  {
    material: "Paper & Cardboard",
    rate: 45,
    trend: "down",
    trendPercent: -1.2,
    icon: "📰",
    description: "Newspaper, magazine, cardboard",
  },
  {
    material: "Metal (Aluminum/Steel)",
    rate: 95,
    trend: "up",
    trendPercent: 3.8,
    icon: "🔩",
    description: "Cans, foil, scrap metal",
  },
  {
    material: "Glass",
    rate: 25,
    trend: "down",
    trendPercent: -0.5,
    icon: "🥃",
    description: "Clear and coloured glass",
  },
  {
    material: "Copper Wire",
    rate: 380,
    trend: "up",
    trendPercent: 5.2,
    icon: "⚡",
    description: "Stripped copper wire",
  },
  {
    material: "Lead Batteries",
    rate: 120,
    trend: "up",
    trendPercent: 1.8,
    icon: "🔋",
    description: "Old car/UPS batteries",
  },
];

const historicalData = [
  { month: "Jan", plastic: 58, paper: 42, metal: 88, glass: 24 },
  { month: "Feb", plastic: 61, paper: 44, metal: 91, glass: 23 },
  { month: "Mar", plastic: 63, paper: 46, metal: 93, glass: 25 },
  { month: "Apr", plastic: 65, paper: 45, metal: 95, glass: 25 },
];

export default function RatesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-black to-green-950/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Market Data</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Fair & Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              Market Rates
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            ReLoop publishes real-time buying rates sourced from national commodity markets.
            No haggling. No surprises. Pure transparency.
          </p>
        </div>
      </section>

      {/* Current Rates */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Current Rates (Per Kg)</h2>
            <p className="text-gray-400">Updated every hour • All prices in Pakistani Rupees (PKR)</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainRates.map((item, i) => (
              <div
                key={item.material}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-white">{item.material}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                  </div>
                  <div
                    className={`text-sm font-bold px-3 py-1 rounded-lg ${item.trend === "up" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
                  >
                    {item.trend === "up" ? "📈" : "📉"} {item.trendPercent}%
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-4xl font-black text-cyan-400">₨{item.rate}</p>
                  <p className="text-xs text-gray-500 mt-1">per kilogram</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Trends */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-12">Price Trends (Last 4 Months)</h2>

          {/* Chart Placeholder */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-4 gap-4">
              {historicalData.map((data) => (
                <div key={data.month} className="text-center">
                  <div className="mb-6 h-32 flex items-end gap-1">
                    <div
                      className="flex-1 bg-green-500/40 rounded-t-lg hover:bg-green-500/60 transition-all"
                      style={{ height: `${(data.plastic / 70) * 100}%` }}
                      title={`Plastic: ₨${data.plastic}`}
                    />
                    <div
                      className="flex-1 bg-yellow-500/40 rounded-t-lg hover:bg-yellow-500/60 transition-all"
                      style={{ height: `${(data.paper / 50) * 100}%` }}
                      title={`Paper: ₨${data.paper}`}
                    />
                    <div
                      className="flex-1 bg-blue-500/40 rounded-t-lg hover:bg-blue-500/60 transition-all"
                      style={{ height: `${(data.metal / 100) * 100}%` }}
                      title={`Metal: ₨${data.metal}`}
                    />
                    <div
                      className="flex-1 bg-purple-500/40 rounded-t-lg hover:bg-purple-500/60 transition-all"
                      style={{ height: `${(data.glass / 30) * 100}%` }}
                      title={`Glass: ₨${data.glass}`}
                    />
                  </div>
                  <p className="text-sm font-bold text-white">{data.month}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500/60 rounded" />
              <span className="text-sm text-gray-400">Plastic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500/60 rounded" />
              <span className="text-sm text-gray-400">Paper</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500/60 rounded" />
              <span className="text-sm text-gray-400">Metal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500/60 rounded" />
              <span className="text-sm text-gray-400">Glass</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-12">Questions About Rates?</h2>

          <div className="space-y-4">
            {[
              {
                q: "How often are rates updated?",
                a: "Rates are updated hourly based on national commodity market data. You&apos;ll always see the current rate before scheduling a pickup.",
              },
              {
                q: "Why might my payment differ from the displayed rate?",
                a: "Purity scoring can affect your final payment. Contaminated batches receive a purity discount (0-100% of the rate). Our auditors score on-site during pickup.",
              },
              {
                q: "Are rates the same across Karachi?",
                a: "Yes, ReLoop uses the same national commodity rates everywhere. No location-based pricing difference.",
              },
              {
                q: "Can I lock in a rate before scheduling?",
                a: "Your bins must be marked &apos;Full&apos; in the app before you can lock in a rate for that batch. Rates are guaranteed for 24 hours once booked.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 cursor-pointer hover:border-white/20 transition-colors"
              >
                <summary className="flex items-center justify-between font-semibold text-white">
                  <span>{item.q}</span>
                  <span className="group-open:rotate-180 transition-transform">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-400 mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
