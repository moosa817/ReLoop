export default function MarketingPlan() {
  const strategies = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
        </svg>
      ),
      title: "Viral Social Media",
      description: "Short-form reels on TikTok and Instagram showing real families earning from waste. Relatable, shareable, and emotionally resonant. Target: 10M organic views in 6 months.",
      tactics: ["Before/after earning reels", "Influencer micro-partnerships", "User-generated challenge content"],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Community Activation",
      description: "Monthly &apos;ReLoop Saturdays&apos; in target neighbourhoods. Community events with live weigh-ins, music, free bin distribution, and first-time bonus payouts to drive adoption.",
      tactics: ["Monthly neighbourhood events", "Free first-pickup bonus", "Local influencer hosting"],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "The Tagline Campaign",
      description: "&quot;Tumhara Kachra, Tumhari Kamai&quot; — Your Trash, Your Earnings. A Urdu-language campaign that makes recycling feel empowering, not burdensome. Bus ads, billboards, radio.",
      tactics: ["Urdu-first messaging", "Bus stop & billboard ads", "Radio spots in Karachi/Lahore"],
    },
  ];

  return (
    <section id="marketing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-3 block">Go-to-Market</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Marketing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-cyan-600">
              Strategy
            </span>
          </h2>
          <div className="text-5xl sm:text-7xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500">
              #KachraySeKamai
            </span>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A cultural movement, not just a marketing campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="bg-white rounded-xl p-3 w-fit mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                {s.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.tactics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
