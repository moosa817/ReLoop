export default function ProductService() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      title: "Dual-Bin System",
      subtitle: "Smart Sorting at the Source",
      description: "Every ReLoop household receives two colour-coded bins: Green for recyclables (plastic, metal, paper, glass) and Black for organic waste. Separation at source means higher purity — and higher payouts.",
      bullets: ["Green bin: Recyclables", "Black bin: Organics / food waste", "Sponsored bin branding", "RFID-tagged for tracking"],
    },
    {
      icon: (
        <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "The ReLoop App",
      subtitle: "Your Waste Wallet",
      description: "A clean, fast mobile app lets users schedule pickups, track earnings, see live market rates, and withdraw to EasyPaisa or JazzCash. Gamification badges keep households engaged.",
      bullets: ["Live market rate ticker", "Wallet with instant withdrawal", "Pickup scheduling", "Eco impact dashboard"],
    },
    {
      icon: (
        <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Neighbourhood Hubs",
      subtitle: "Micro Sorting Centres",
      description: "Strategic drop-off hubs in every cluster of 500 households. Each hub has a weighing scale, purity checker, and a local ReLoop agent who processes and pays out on the spot.",
      bullets: ["1 hub per 500 households", "Live weigh & pay", "Local employment creation", "Clean processing space"],
    },
  ];

  return (
    <section id="product" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">The Solution</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            The ReLoop{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              System
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three integrated components that make waste collection effortless, rewarding, and scalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="bg-white/5 rounded-2xl p-4 w-fit mb-6 group-hover:bg-green-500/10 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-1">{f.title}</h3>
              <p className="text-green-400 text-sm font-semibold mb-4">{f.subtitle}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{f.description}</p>
              <ul className="space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                    {b}
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
