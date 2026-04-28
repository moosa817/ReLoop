export default function AppMockup() {
  const rates = [
    { material: "Plastic", rate: "Rs. 65/kg", change: "up", color: "text-green-400" },
    { material: "Iron", rate: "Rs. 95/kg", change: "down", color: "text-red-400" },
    { material: "Paper", rate: "Rs. 30/kg", change: "neutral", color: "text-gray-400" },
    { material: "Glass", rate: "Rs. 45/kg", change: "up", color: "text-green-400" },
  ];

  const ArrowUp = () => (
    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
    </svg>
  );
  const ArrowDown = () => (
    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
  const ArrowRight = () => (
    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
    </svg>
  );

  return (
    <section id="app" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">The App</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              ReLoop App
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your waste wallet — track earnings, check rates, and cash out instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wallet Panel */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm font-medium">My Wallet</span>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/30">
                ● Active
              </span>
            </div>
            <div className="mb-6">
              <p className="text-gray-500 text-xs mb-1">Current Balance</p>
              <p className="text-4xl font-black text-white">Rs. 1,250</p>
              <p className="text-green-400 text-sm mt-2 font-medium">↑ +Rs. 340 this week</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Lifetime Earned</span>
                <span className="text-white font-bold">Rs. 8,920</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">CO₂ Saved</span>
                <span className="text-green-400 font-bold">47 kg</span>
              </div>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors text-sm">
              Withdraw Earnings
            </button>
          </div>

          {/* Market Rates Panel */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm font-medium">Market Rates</span>
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">Live</span>
            </div>
            <div className="space-y-3">
              {rates.map((r) => (
                <div key={r.material} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-white text-sm font-medium">{r.material}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-bold ${r.color}`}>{r.rate}</span>
                    {r.change === "up" && <ArrowUp />}
                    {r.change === "down" && <ArrowDown />}
                    {r.change === "neutral" && <ArrowRight />}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">Rates updated every 4 hours</p>
          </div>

          {/* Withdrawal Options Panel */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400 text-sm font-medium">Cash Out</span>
              <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">Instant</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">Choose your withdrawal method:</p>
            <div className="space-y-3">
              <button className="w-full bg-green-700/40 hover:bg-green-600/50 border border-green-500/30 text-white font-bold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-3">
                <span className="text-xl">📱</span>
                EasyPaisa
              </button>
              <button className="w-full bg-orange-700/40 hover:bg-orange-600/50 border border-orange-500/30 text-white font-bold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-3">
                <span className="text-xl">💳</span>
                JazzCash
              </button>
              <button className="w-full bg-blue-700/40 hover:bg-blue-600/50 border border-blue-500/30 text-white font-bold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-3">
                <span className="text-xl">❤️</span>
                Donate to Charity
              </button>
            </div>
            <p className="text-gray-600 text-xs mt-4 text-center">Minimum withdrawal: Rs. 200</p>
          </div>
        </div>
      </div>
    </section>
  );
}
