export default function ZeroWasteEcosystem() {
  const flows = [
    {
      icon: (
        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      source: "Recyclables",
      destination: "Industry Partners",
      description: "Sorted plastic, metal, paper, and glass goes directly to recycling factories and manufacturers who pay premium rates for clean, pre-sorted material.",
      color: "green",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      source: "Organics",
      destination: "Compost Farms",
      description: "Food waste and organic material is composted and sold to urban farms and agriculture. Closing the nutrient loop and creating a secondary revenue stream.",
      color: "emerald",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      source: "Non-Recyclables",
      destination: "Eco-Bricks",
      description: "Soft plastics and mixed materials that can't be recycled are compressed into eco-bricks — used as low-cost building material for community structures.",
      color: "cyan",
    },
  ];

  return (
    <section id="ecosystem" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Circular Economy</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Zero-Waste{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every gram of waste has a destination. Nothing goes to landfill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {flows.map((f) => (
            <div
              key={f.source}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-white/5 rounded-2xl p-4 w-fit mb-6 group-hover:bg-green-500/10 transition-colors">
                {f.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white font-bold text-lg">{f.source}</span>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span className="text-green-400 font-bold text-lg">{f.destination}</span>
              </div>
              <p className="text-gray-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <p className="text-2xl font-bold text-white mb-2">
            Our Goal:{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Zero waste to Jam Chakro landfill
            </span>
          </p>
          <p className="text-gray-400">Karachi&apos;s infamous open dump — eliminated one pickup at a time.</p>
        </div>
      </div>
    </section>
  );
}
