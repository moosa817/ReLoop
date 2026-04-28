export default function TargetMarket() {
  const personas = [
    {
      initials: "F",
      color: "bg-emerald-500",
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
      color: "bg-cyan-500",
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
    <section id="personas" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-3 block">Our Users</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Who ReLoop{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-cyan-600">
              Serves
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From the family kitchen to the university hostel — ReLoop works for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${persona.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white shadow-lg`}>
                  {persona.initials}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900">{persona.name}</h3>
                  <p className="text-green-600 font-semibold">{persona.title}</p>
                  <p className="text-gray-500 text-sm">{persona.age}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{persona.description}</p>

              <ul className="space-y-3">
                {persona.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{benefit}</span>
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
