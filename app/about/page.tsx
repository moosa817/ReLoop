import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About ReLoop Pakistan – Mission, Vision & Impact",
  description:
    "Learn about ReLoop Pakistan's mission to transform waste management through technology, circular economy principles, and community-powered recycling.",
};

const stats = [
  { value: "20M+", label: "Tonnes of waste generated yearly in Pakistan" },
  { value: "5%", label: "Currently recycled formally" },
  { value: "150K+", label: "Target households in Year 1" },
  { value: "₨2B+", label: "Projected economic value unlocked" },
];

const steps = [
  {
    step: "01",
    title: "Schedule a Pickup",
    description:
      "Open the app, select your waste categories, and book a pickup slot at your convenience. Our team arrives within the chosen window.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Dual-Bin Sorting",
    description:
      "Separate recyclables (plastic, paper, metal, glass) from organic waste using our colour-coded bins. Purity matters — cleaner waste earns more.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Weight & Audit",
    description:
      "Our collector weighs and audits your waste on-site using the app. Contamination reduces purity score; clean separation earns a premium.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Earn to Your Trash Wallet",
    description:
      "Credits are instantly added to your in-app Trash Wallet based on live market rates. Cash out to EasyPaisa or JazzCash anytime.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const values = [
  {
    title: "Environmental Impact",
    description: "Every kilogram diverted from landfill reduces methane emissions and conserves raw materials for future generations.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    title: "Economic Empowerment",
    description: "We put money directly into the hands of households and waste collectors — formalising an informal sector worth billions.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    title: "Community First",
    description: "Neighborhood hubs create local employment and build a culture of responsible waste management from the ground up.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-cyan-950/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Reimagining Waste for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Pakistan&apos;s Future
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            ReLoop was born from a simple observation: Pakistan generates 20 million tonnes of waste annually, yet less than 5% is formally recycled. We&apos;re changing that — one pickup at a time.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-green-400 mb-2">{stat.value}</p>
              <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-colors">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To build Pakistan&apos;s first tech-enabled circular economy platform that pays citizens for their recyclable waste, formalises the informal recycling sector, and transforms every neighbourhood into a resource recovery hub.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-colors">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-white mb-4">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              A Pakistan where zero waste goes to landfill — where every household earns from their discards, every collector has a fair livelihood, and industry has a reliable supply of quality recycled materials.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-xl mx-auto">From doorstep pickup to digital wallet — four simple steps to turn your trash into cash.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative hover:border-green-500/30 transition-all hover:-translate-y-1">
                <span className="absolute top-4 right-4 text-5xl font-black text-white/[0.04]">{s.step}</span>
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 text-green-400">
                  {s.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Impact */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Why It Matters</h2>
            <p className="text-gray-400 max-w-xl mx-auto">ReLoop isn&apos;t just an app. It&apos;s an economic and environmental movement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className={`${v.bg} border border-white/10 rounded-2xl p-8`}>
                <h3 className={`text-xl font-black ${v.color} mb-4`}>{v.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
