"use client";
import { useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#product" },
  { label: "Business", href: "#business" },
  { label: "The App", href: "#app" },
  { label: "Financials", href: "#financials" },
  { label: "Growth", href: "#growth" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group" aria-label="ReLoop home">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-110">
              <circle cx="16" cy="16" r="15" stroke="#16a34a" strokeWidth="1.5" opacity="0.7"/>
              <path d="M10 16 C10 11, 16 8, 20 12 L18 12 L22 16 L18 20 L20 20 C16 24, 10 21, 10 16Z" fill="#16a34a"/>
              <path d="M22 16 C22 21, 16 24, 12 20 L14 20 L10 16 L14 12 L12 12 C16 8, 22 11, 22 16Z" fill="#0891b2" opacity="0.85"/>
            </svg>
            <div>
              <span className="text-lg font-black text-green-400 leading-none">ReLoop</span>
              {/* "PAKISTAN" sub-label sits tight below via leading-none on parent */}
              <span className="block text-[10px] text-gray-500 leading-none font-medium tracking-wide">PAKISTAN</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-green-400 transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#cta"
              className="bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-green-400 hover:bg-white/5 transition-colors font-medium px-3 py-2.5 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2">
              <a
                href="#cta"
                className="block bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-lg font-bold transition-colors text-center"
                onClick={() => setMenuOpen(false)}
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
