export default function Operations() {
  const ops = [
    {
      icon: (
        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 13l4.553 2.276A1 1 0 0021 21.382V10.618a1 1 0 00-.553-.894L15 7m0 13V7m0 0L9 4" />
        </svg>
      ),
      step: "01",
      title: "Cluster Pickup",
      subtitle: "Route Optimization",
      description: "Our logistics algorithm groups households by geography into pickup clusters of 50–100 homes. Drivers follow optimised routes, reducing fuel costs by up to 40% versus ad-hoc pickups.",
      detail: "Coverage: 500m radius per cluster",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      step: "02",
      title: "Purity Audit",
      subtitle: "Quality Verification",
      description: "Every batch is weighed and visually inspected at the Neighbourhood Hub. Purity scores above 85% get premium rates. This incentivises households to sort correctly from day one.",
      detail: "Target purity: 85%+ for full rate",
    },
    {
      icon: (
        <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      step: "03",
      title: "12-Hour Payment",
      subtitle: "Instant Wallet Credit",
      description: "From the moment waste is picked up and verified, users receive wallet credit within 12 hours. No waiting weeks — this fast feedback loop is the key driver of repeat behaviour.",
      detail: "Target: <12 hours from pickup to payment",
    },
  ];

  return (
    <section id="operations" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Operations</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            How It Works,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
              Operationally
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A lean, efficient machine designed to scale from 1 to 1 million households.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ops.map((op) => (
            <div
              key={op.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors select-none">
                {op.step}
              </div>
              <div className="bg-white/5 rounded-2xl p-4 w-fit mb-6 group-hover:bg-green-500/10 transition-colors">
                {op.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-1">{op.title}</h3>
              <p className="text-green-400 text-sm font-semibold mb-4">{op.subtitle}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{op.description}</p>
              <div className="border-t border-white/10 pt-4">
                <span className="text-sm text-cyan-400 font-medium">{op.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
