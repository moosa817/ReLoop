import AnimateIn from "@/components/AnimateIn";

export default function FinancialOverview() {
  const flow = [
    { label: "Buy", value: "Rs. 50/kg", sublabel: "Paid to household", borderColor: "border-blue-500/40", textColor: "text-blue-400" },
    { label: "Process", value: "Rs. 15/kg", sublabel: "Sorting & logistics", borderColor: "border-orange-500/40", textColor: "text-orange-400" },
    { label: "Sell", value: "Rs. 110/kg", sublabel: "To industry partners", borderColor: "border-purple-500/40", textColor: "text-purple-400" },
    { label: "Net Margin", value: "Rs. 45/kg", sublabel: "Per kg processed", borderColor: "border-green-500/60", textColor: "text-green-400", highlight: true },
  ];

  return (
    <section id="financials" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Unit Economics</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
                Economics
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple math. Real margins. Scalable from day one.
            </p>
          </div>
        </AnimateIn>

        {/* Flow display */}
        <AnimateIn delay={100}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            {flow.map((item, i) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className={`border-2 ${item.borderColor} bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center min-w-[160px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 ${item.highlight ? "shadow-green-500/20 shadow-lg scale-105 bg-green-500/10" : ""}`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{item.label}</p>
                  <p className={`text-2xl font-black ${item.textColor}`}>{item.value}</p>
                  <p className="text-xs text-gray-500 mt-2">{item.sublabel}</p>
                  {item.highlight && (
                    <span className="inline-block mt-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      ✦ Profit
                    </span>
                  )}
                </div>
                {i < flow.length - 1 && (
                  <svg className="w-6 h-6 text-gray-600 hidden md:block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Sponsorship card */}
        <AnimateIn delay={200}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-green-500/30 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Sponsorship Revenue</h3>
              <p className="text-gray-400 mb-6">Local businesses pay to brand our collection bins, funding our infrastructure at zero cost to ReLoop.</p>
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-black text-green-400">Rs. 1,000</p>
                  <p className="text-sm text-gray-500">per bin / per year</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="text-3xl font-black text-green-400">Rs. 10M</p>
                  <p className="text-sm text-gray-500">at 10,000 bins</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
