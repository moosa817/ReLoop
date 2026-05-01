import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ & Support – ReLoop Pakistan",
  description:
    "Get answers to common questions about ReLoop Pakistan. Learn how to schedule pickups, understand rates, and troubleshoot issues.",
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I sign up for ReLoop?",
        a: "Visit reloop.pk, click 'Sign Up', and fill in your details (name, phone, email, area). You'll be verified within 24 hours and can start scheduling pickups immediately.",
      },
      {
        q: "What areas does ReLoop currently serve?",
        a: "We currently service Karachi (South, Central, East districts). We're expanding to North and West Karachi in Q3 2026. Check our coverage map in the app for your exact location.",
      },
      {
        q: "Is there a minimum age requirement?",
        a: "You must be 18+ to create a ReLoop account. For household accounts, a guardian can sign up and manage the account.",
      },
    ],
  },
  {
    category: "Pickups & Collections",
    questions: [
      {
        q: "How do I schedule a pickup?",
        a: "Open the ReLoop app, mark your bins as 'Full', select a date/time slot, and confirm. Our collector will arrive within the 2-hour window you select.",
      },
      {
        q: "How often can I schedule pickups?",
        a: "You can schedule pickups as often as you'd like — once a week, twice a week, daily. There's no limit. We recommend scheduling when your bins are actually full to maximize earnings.",
      },
      {
        q: "What if I'm not home during the pickup?",
        a: "Our collectors are trained to leave bins outside gates or in designated spots if you're not available. You can also message your collector via the app to reschedule instantly.",
      },
    ],
  },
  {
    category: "Earnings & Withdrawals",
    questions: [
      {
        q: "How are my earnings calculated?",
        a: "We multiply your material weight by the live market rate for that material, then apply a purity score (0-100%). Cleaner, better-sorted waste earns more.",
      },
      {
        q: "When can I withdraw my earnings?",
        a: "You can withdraw to EasyPaisa or JazzCash anytime your balance is above ₨100. Withdrawals are instant.",
      },
      {
        q: "Are there any fees for withdrawals?",
        a: "No fees! ReLoop covers all transaction costs. Your ₨100 goes entirely to your mobile wallet.",
      },
    ],
  },
  {
    category: "Materials & Sorting",
    questions: [
      {
        q: "What materials does ReLoop accept?",
        a: "Recyclables: Plastic, paper, cardboard, aluminum cans, steel tins, glass, copper wire. Organic: Food waste, garden waste, compostable items. We do NOT accept: electronics, chemicals, hazardous waste.",
      },
      {
        q: "How do I sort my waste properly?",
        a: "Use the dual-bin system: Green bin = all dry recyclables (plastic, paper, metal, glass mixed). Brown bin = all organic/compostable waste. The app shows examples of what goes where.",
      },
      {
        q: "What's a 'purity score' and why does it matter?",
        a: "Our auditors score your batch 0-100 based on contamination and sorting quality. A 50 purity score = 50% of the full rate. We provide feedback so you can improve.",
      },
    ],
  },
  {
    category: "Technology & Accounts",
    questions: [
      {
        q: "Is the ReLoop app available on iOS and Android?",
        a: "Yes! Download from Apple App Store or Google Play Store. The web platform (reloop.pk) works on all devices.",
      },
      {
        q: "What if I forget my password?",
        a: "Click 'Forgot Password' on the login page. We'll send you a reset link to your email.",
      },
      {
        q: "Can I have multiple accounts?",
        a: "No. One person = one account. However, if you have multiple households, register each household as a separate account.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-pink-950/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">Help & Support</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Questions? We&apos;ve Got{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Answers.
            </span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about ReLoop Pakistan — from signing up to earning and cashing out.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {faqs.map((section, sectionIdx) => (
              <div key={section.category}>
                <div className="mb-8 pb-4 border-b border-white/10">
                  <h2 className="text-2xl font-black text-white">{section.category}</h2>
                </div>

                <div className="space-y-4">
                  {section.questions.map((item, qIdx) => (
                    <details
                      key={`${sectionIdx}-${qIdx}`}
                      className="group bg-white/[0.03] border border-white/10 rounded-xl p-6 cursor-pointer hover:border-purple-500/30 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${qIdx * 50}ms` }}
                    >
                      <summary className="flex items-start justify-between font-semibold text-white gap-4">
                        <span className="text-left">{item.q}</span>
                        <span className="flex-shrink-0 mt-1 group-open:rotate-180 transition-transform text-purple-400">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-gray-400 mt-4 leading-relaxed">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Can&apos;t Find Your Answer?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Get in touch with our support team. We&apos;re here to help!</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="https://wa.me/923001234567?text=Hi%20ReLoop%21%20I%20need%20help"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 hover:border-green-500/60 rounded-xl p-6 transition-all group"
            >
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">WhatsApp</h3>
              <p className="text-sm text-gray-400">Chat instantly with our team</p>
            </a>

            <a
              href="mailto:support@reloop.pk"
              className="bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 hover:border-blue-500/60 rounded-xl p-6 transition-all group"
            >
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Email</h3>
              <p className="text-sm text-gray-400">support@reloop.pk</p>
            </a>

            <a
              href="tel:+923001234567"
              className="bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 hover:border-purple-500/60 rounded-xl p-6 transition-all group"
            >
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Call Us</h3>
              <p className="text-sm text-gray-400">+92 (300) 123-4567</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
