"use client";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="cta"
      className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #052e16 0%, #0a0a0a 40%, #164e63 100%)" }}
    >
      {/* Background glow effects */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(22,163,74,0.2) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Ready?</span>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Join the{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400">
            revolution.
          </span>
        </h2>

        <p className="text-2xl text-gray-300 mb-4">
          Get paid for your trash today.
        </p>

        <p className="text-lg text-gray-400 mb-12">
          ReLoop turns a chore into a reward. Sign up for early access and be the first to earn from your waste.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-green-400 transition-colors"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Early Access
            </button>
          </form>
        ) : (
          <div className="bg-green-600/20 border border-green-500/30 rounded-2xl px-8 py-6 max-w-lg mx-auto mb-12 backdrop-blur-sm">
            <div className="text-4xl mb-3">🎉</div>
            <p className="text-green-400 font-bold text-xl">You&apos;re on the list!</p>
            <p className="text-gray-400 mt-2">We&apos;ll notify you when ReLoop launches in your area.</p>
          </div>
        )}

        <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-gray-300 font-medium">ReLoop turns a chore into a reward.</span>
        </div>
      </div>
    </section>
  );
}
