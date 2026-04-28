import AnimateIn from "@/components/AnimateIn";

export default function FuturePlan() {
  const milestones = [
    {
      year: "Year 2",
      title: "50,000 Households",
      subtitle: "Deep Karachi Penetration",
      description: "Achieve 50,000 registered households across Karachi's major residential areas. Build out 100+ Neighbourhood Hubs. Become the city's default waste-to-earnings platform.",
      metrics: ["50K households", "100+ hubs", "Rs. 50M ARR target"],
    },
    {
      year: "Year 3",
      title: "MENA White-Labeling",
      subtitle: "Regional Expansion",
      description: "License the ReLoop platform to waste management operators in Egypt, UAE, and Jordan. A B2B SaaS model — they bring the trucks, we bring the tech stack and brand playbook.",
      metrics: ["3+ MENA markets", "B2B SaaS model", "White-label platform"],
    },
    {
      year: "Year 5",
      title: "ReLoop Home",
      subtitle: "Circular Furniture",
      description: "Launch ReLoop Home — a line of affordable furniture made entirely from recovered materials. From your bin to your living room. The ultimate closed-loop brand extension.",
      metrics: ["Circular product line", "Upcycled furniture", "Consumer retail brand"],
    },
  ];

  return (
    <section id="growth" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Roadmap</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              The Road{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
                Ahead
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From one city to a global circular economy platform.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((m, i) => (
            <AnimateIn key={m.year} delay={i * 130}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group h-full">
                {/* Timeline indicator */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="bg-green-500/20 text-green-400 text-sm font-bold px-3 py-1 rounded-full border border-green-500/30">
                    {m.year}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-1">{m.title}</h3>
                <p className="text-green-400 font-semibold text-sm mb-4">{m.subtitle}</p>
                <p className="text-gray-400 leading-relaxed mb-6">{m.description}</p>

                <div className="space-y-2">
                  {m.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 transform translate-y-0.5 group-hover:translate-y-0 transition-transform" />
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
