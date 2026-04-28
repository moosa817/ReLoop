import AnimateIn from "@/components/AnimateIn";

export default function TargetMarket() {
  const personas = [
    {
      initials: "F",
      gradient: "from-emerald-500 to-green-600",
      name: "Farzana",
      title: "The Smart Homemaker",
      age: "Age 40 • Gulshan, Karachi",
      description: "Farzana manages her household with precision. She sorts her waste, calls the ReLoop app, and earns points that pay her utility bills and top up her mobile.",
      benefits: [
        "Earns Rs. 500–1,500/month from household waste",
        "Redeems points for utility bill payments",
        "Mobile top-ups with ReLoop wallet",
        "Tracks family's eco-impact on the app",
        "Schedules weekly pickups from home",
      ],
    },
    {
      initials: "B",
      gradient: "from-cyan-500 to-blue-600",
      name: "Bilal",
      title: "The Student Entrepreneur",
      age: "Age 21 • LUMS, Lahore",
      description: "Bilal is eco-conscious and financially savvy. He collects waste from his hostel block, aggregates it, and earns &apos;guilt-free&apos; cash while building a greener campus.",
      benefits: [
        "Earns guilt-free side income",
        "Builds community waste collection network",
        "Tracks carbon offset on profile",
        "Redeems for JazzCash / EasyPaisa",
        "Shares impact stats on social media",
      ],
    },
  ];

  return (
    <section id="personas" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Users</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Who ReLoop{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
                Serves
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From the family kitchen to the university hostel — ReLoop works for everyone.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, i) => (
            <AnimateIn key={persona.name} delay={i * 150}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 group h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${persona.gradient} w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-lg flex-shrink-0`}>
                    {persona.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">{persona.name}</h3>
                    <p className="text-green-400 font-semibold">{persona.title}</p>
                    <p className="text-gray-500 text-sm">{persona.age}</p>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">{persona.description}</p>

                <ul className="space-y-3">
                  {persona.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
