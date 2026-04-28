export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="#16a34a" strokeWidth="2" opacity="0.6"/>
                <path d="M12 20 C12 13.5, 20 10, 25 15 L22 15 L27 20 L22 25 L25 25 C20 30, 12 26.5, 12 20Z" fill="#16a34a"/>
                <path d="M28 20 C28 26.5, 20 30, 15 25 L18 25 L13 20 L18 15 L15 15 C20 10, 28 13.5, 28 20Z" fill="#0891b2" opacity="0.9"/>
              </svg>
              <div>
                <span className="text-2xl font-black text-green-400">ReLoop</span>
                <p className="text-gray-500 text-xs font-medium tracking-wider">PAKISTAN</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
              Turning everyday waste into digital currency. Building Pakistan&apos;s circular economy, one pickup at a time.
            </p>
            <p className="text-green-400 font-bold mt-4 text-sm">Get Paid for Trash 🌿</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#hero" },
                { label: "How It Works", href: "#product" },
                { label: "The App", href: "#app" },
                { label: "Business Model", href: "#business" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#problem" },
                { label: "Competitors", href: "#competitors" },
                { label: "Financials", href: "#financials" },
                { label: "Contact", href: "#cta" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ReLoop Pakistan. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with 💚 for Pakistan&apos;s circular economy
          </p>
        </div>
      </div>
    </footer>
  );
}
