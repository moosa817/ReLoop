export default function ProblemStatement() {
  const cards = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "The Waste Crisis",
      description: "Karachi alone generates over 15,000 tons of solid waste every single day. Less than 10% is properly managed. The rest? It chokes our streets, drains, and rivers.",
      highlight: "15,000 tons/day",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lost Value",
      description: "Pakistan loses billions of rupees annually in recyclable material value. Plastic, metal, paper, glass — all dumped because there&apos;s no easy, rewarding system to capture it.",
      highlight: "Billions in lost value",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "The Inflation Factor",
      description: "With inflation above 20%, Pakistani families are looking for every rupee. The trash sitting in their bins is literally money they&apos;re throwing away every week.",
      highlight: "20%+ inflation",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">The Reality</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            The Problem{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Is Real
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pakistan&apos;s waste management system is broken. But hidden in that failure is a massive opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-white/5 rounded-xl p-3 w-fit mb-6 group-hover:bg-green-500/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">{card.description}</p>
              <div className="text-green-400 font-semibold text-sm">{card.highlight}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Why throw it away for free{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              when you can get paid?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
