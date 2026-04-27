"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="15" stroke="#16a34a" strokeWidth="2"/>
              <path d="M10 16 C10 11, 16 8, 20 12 L18 12 L22 16 L18 20 L20 20 C16 24, 10 21, 10 16Z" fill="#16a34a"/>
              <path d="M22 16 C22 21, 16 24, 12 20 L14 20 L10 16 L14 12 L12 12 C16 8, 22 11, 22 16Z" fill="#0891b2" opacity="0.8"/>
            </svg>
            <span className="text-xl font-bold text-green-400">ReLoop</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">How It Works</a>
            <a href="#business" className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">Business</a>
            <a href="#app" className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">App</a>
            <a href="#cta" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4">
            <a href="#product" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMenuOpen(false)}>How It Works</a>
            <a href="#business" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Business</a>
            <a href="#app" className="text-gray-300 hover:text-green-400 transition-colors font-medium" onClick={() => setMenuOpen(false)}>App</a>
            <a href="#cta" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium transition-colors w-fit" onClick={() => setMenuOpen(false)}>Join Now</a>
          </div>
        )}
      </div>
    </nav>
  );
}
