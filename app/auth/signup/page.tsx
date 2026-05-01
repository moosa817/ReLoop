"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/components/AuthProvider";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    area: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (
        formData.name &&
        formData.email &&
        formData.phone &&
        formData.password.length >= 6 &&
        formData.area
      ) {
        login();
        router.push("/dashboard");
      } else {
        alert("Please fill all fields correctly");
        setLoading(false);
      }
    }, 500);
  };

  const areas = [
    "Gulshan-e-Iqbal",
    "Defence (DHA)",
    "Clifton",
    "Karachi Central",
    "Karachi East",
    "Karachi South",
    "Karachi West",
    "North Karachi",
  ];

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-black mb-3">
              Join ReLoop
            </h1>
            <p className="text-gray-400">Start earning from your trash today</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="03001234567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Area / District
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500/50 transition-colors"
              >
                <option value="">Select your area</option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          {/* Links */}
          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-green-400 hover:text-green-300 font-semibold transition-colors">
              Login here
            </Link>
          </p>

          {/* Demo Note */}
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-xs text-blue-300 text-center">
              💡 This is a demo. Fill all fields with valid info to sign up.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
