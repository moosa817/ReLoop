export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)" }}
    >
      {/* Green radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(22,163,74,0.15) 0%, transparent 70%)",
        }}
      />
      {/* Teal glow top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(8,145,178,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* SVG Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" stroke="#16a34a" strokeWidth="2" opacity="0.6"/>
              <circle cx="40" cy="40" r="30" fill="rgba(22,163,74,0.1)" />
              <path d="M25 40 C25 27.5, 40 20, 50 30 L46 30 L54 40 L46 50 L50 50 C40 60, 25 52.5, 25 40Z" fill="#16a34a"/>
              <path d="M55 40 C55 52.5, 40 60, 30 50 L34 50 L26 40 L34 30 L30 30 C40 20, 55 27.5, 55 40Z" fill="#0891b2" opacity="0.9"/>
            </svg>
            <div className="absolute -inset-2 rounded-full bg-green-500/20 blur-xl animate-pulse" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400">
            Get Paid for Trash
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          ReLoop Pakistan turns everyday waste into digital currency.{" "}
          <span className="text-green-400 font-semibold">Join the circular economy revolution.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#cta"
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
          >
            Join the Revolution
          </a>
          <a
            href="#product"
            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg border border-white/20 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            See How It Works
          </a>
        </div>

        {/* Stat badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {[
            { value: "15,000 tons/day", label: "Karachi Waste Generated" },
            { value: "90% Mismanaged", label: "Ends Up in Dumps" },
            { value: "Billions Lost", label: "In Recyclable Value" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-colors"
            >
              <div className="text-xl font-bold text-green-400">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
