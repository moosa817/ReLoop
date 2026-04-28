export default function BusinessModel() {
  const streams = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "The Spread",
      subtitle: "Buy Low, Sell High",
      description: "We buy recyclables from households at Rs. 50/kg and sell processed materials to industries at Rs. 110/kg — a Rs. 45/kg net margin after processing costs.",
      metric: "Rs. 45/kg net",
      color: "green",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Ad-Funded Infrastructure",
      subtitle: "Sponsored Bins",
      description: "Local businesses sponsor our dual-bin collection points for Rs. 1,000/bin/year. Their brand sits in every Karachi neighbourhood. 10,000 bins = Rs. 10M annually.",
      metric: "Rs. 1,000/bin/yr",
      color: "cyan",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Data Monetization",
      subtitle: "Aggregated Insights",
      description: "Anonymized, aggregated waste composition data is gold for FMCG companies, city planners, and NGOs. We sell behavioural waste insights as a B2B data product.",
      metric: "B2B data product",
      color: "emerald",
    },
  ];

  return (
    <section id="business" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Revenue</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Our Revenue{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Model
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three diversified revenue streams built on a single infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {streams.map((stream, i) => (
            <div
              key={stream.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white/5 rounded-xl p-3 group-hover:bg-green-500/10 transition-colors">
                  {stream.icon}
                </div>
                <span className="text-xs font-semibold text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                  Stream {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{stream.title}</h3>
              <p className="text-green-400 text-sm font-semibold mb-4">{stream.subtitle}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{stream.description}</p>
              <div className="border-t border-white/10 pt-4">
                <span className="text-lg font-black text-green-400">{stream.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
