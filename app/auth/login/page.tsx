"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock auth - just check if fields are filled
    setTimeout(() => {
      if (email && password.length >= 6) {
        login();
        router.push("/dashboard");
      } else {
        alert("Please enter valid credentials");
        setLoading(false);
      }
    }, 500);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-black mb-3">
              Welcome Back
            </h1>
            <p className="text-gray-400">Login to your ReLoop account and start earning</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email or Phone
              </label>
              <input
                type="text"
                placeholder="you@example.com or 03001234567"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Links */}
          <div className="space-y-3 text-center text-sm">
            <a href="#" className="block text-green-400 hover:text-green-300 transition-colors">
              Forgot password?
            </a>
            <p className="text-gray-400">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                Sign up here
              </Link>
            </p>
          </div>

          {/* Demo Note */}
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-xs text-blue-300 text-center">
              💡 This is a demo. Any email and password (6+ chars) will work.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
