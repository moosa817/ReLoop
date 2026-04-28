import AnimateIn from "@/components/AnimateIn";

export default function CompetitorAnalysis() {
  const features = [
    "Transparent Pricing",
    "Mobile App",
    "Scheduled Pickup",
    "Instant Payment",
    "Eco Impact Tracking",
    "Formal Employment",
  ];

  const competitors = [
    { name: "Kabadi-walas", values: [false, false, false, false, false, false] },
    { name: "Municipal Services", values: [false, false, false, false, false, true] },
    { name: "ReLoop", values: [true, true, true, true, true, true], highlight: true },
  ];

  return (
    <section id="competitors" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Competitive Edge</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Why ReLoop{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
                Wins
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The informal sector is broken. Municipal services are overwhelmed. ReLoop fills the gap.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-white/5 px-6 py-4 text-left text-sm font-bold text-gray-400 w-1/4">Feature</th>
                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`px-6 py-4 text-center text-sm font-bold ${
                        c.highlight
                          ? "bg-green-600 text-white"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {c.highlight && (
                        <span className="block text-xs font-normal text-green-200 mb-1">✦ Best Choice</span>
                      )}
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, fi) => (
                  <tr
                    key={feature}
                    className={fi % 2 === 0 ? "bg-white/[0.03]" : "bg-white/[0.06]"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-300">{feature}</td>
                    {competitors.map((c) => (
                      <td
                        key={c.name}
                        className={`px-6 py-4 text-center ${c.highlight ? "bg-green-600/10" : ""}`}
                      >
                        {c.values[fi] ? (
                          <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${c.highlight ? "bg-green-600" : "bg-white/10"}`}>
                            <svg className={`w-4 h-4 ${c.highlight ? "text-white" : "text-gray-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/20">
                            <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
