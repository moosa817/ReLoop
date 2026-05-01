"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/components/AuthProvider";

interface Transaction {
  id: string;
  date: string;
  type: "pickup" | "withdrawal";
  amount: number;
  material?: string;
  status: "completed" | "pending";
}

interface MaterialRate {
  material: string;
  rate: number;
  trend: "up" | "down";
  trendPercent: number;
  icon: string;
}

export default function DashboardPage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [balance, setBalance] = useState(2450);
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      date: "2026-04-28",
      type: "pickup",
      material: "Plastic",
      amount: 350,
      status: "completed",
    },
    {
      id: "2",
      date: "2026-04-25",
      type: "pickup",
      material: "Paper",
      amount: 180,
      status: "completed",
    },
    {
      id: "3",
      date: "2026-04-22",
      type: "withdrawal",
      amount: 500,
      status: "completed",
    },
    {
      id: "4",
      date: "2026-04-20",
      type: "pickup",
      material: "Metal",
      amount: 920,
      status: "completed",
    },
  ]);

  const [rates, setRates] = useState<MaterialRate[]>([
    {
      material: "Plastic",
      rate: 65,
      trend: "up",
      trendPercent: 2.5,
      icon: "🥤",
    },
    {
      material: "Paper",
      rate: 45,
      trend: "down",
      trendPercent: -1.2,
      icon: "📰",
    },
    {
      material: "Metal",
      rate: 95,
      trend: "up",
      trendPercent: 3.8,
      icon: "🔩",
    },
    {
      material: "Glass",
      rate: 25,
      trend: "down",
      trendPercent: -0.5,
      icon: "🥃",
    },
  ]);

  const [pickupScheduled, setPickupScheduled] = useState(false);
  const [showPickupModal, setShowPickupModal] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [binsFull, setBinsFull] = useState({
    recyclables: false,
    organic: false,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoggedIn, router]);

  const handleSchedulePickup = (e: React.FormEvent) => {
    e.preventDefault();
    if (pickupDate) {
      setPickupScheduled(true);
      setShowPickupModal(false);
      setTimeout(() => {
        alert("Pickup scheduled! Our collector will arrive within 2 hours.");
        setPickupScheduled(false);
      }, 500);
    }
  };

  const handleWithdraw = () => {
    if (balance > 100) {
      setBalance((prev) => prev - 100);
      alert("₨100 withdrawn to EasyPaisa. Check your phone for confirmation.");
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-black mb-3">
              Welcome Back! 👋
            </h1>
            <p className="text-gray-400 text-lg">
              Here&apos;s your ReLoop dashboard. Manage pickups, track earnings, and cash out anytime.
            </p>
          </div>

          {/* Balance & CTA Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Balance Card */}
            <div className="bg-gradient-to-br from-green-600/20 via-green-900/10 to-black border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all">
              <p className="text-gray-400 text-sm mb-2">Your Trash Wallet Balance</p>
              <h2 className="text-4xl sm:text-5xl font-black text-green-400 mb-6">
                ₨{balance.toLocaleString()}
              </h2>
              <button
                onClick={handleWithdraw}
                disabled={balance < 100}
                className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-200"
              >
                Withdraw ₨100 to EasyPaisa
              </button>
            </div>

            {/* Next Pickup */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 text-sm mb-2">Next Scheduled Pickup</p>
              <h2 className="text-2xl font-bold text-white mb-2">
                {pickupScheduled ? "2 hours from now" : "No pickup scheduled"}
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                {pickupScheduled
                  ? "Collector will notify you 10 mins before arrival"
                  : "Schedule your first pickup to start earning"}
              </p>
              <button
                onClick={() => setShowPickupModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all duration-200"
              >
                {pickupScheduled ? "Reschedule" : "Schedule Pickup"}
              </button>
            </div>

            {/* Stats Card */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 text-sm mb-4">Total Earnings (30 days)</p>
              <h2 className="text-3xl font-black text-cyan-400 mb-4">₨1,450</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Pickups completed</span>
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Avg per pickup</span>
                  <span className="text-white font-bold">₨362</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bins Status & Market Rates */}
          <div className="grid lg:grid-cols-3 gap-6 mb-10">
            {/* Bins Status */}
            <div className="lg:col-span-1 bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Your Bins</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">♻️ Recyclables (Green)</span>
                    <span className={`text-sm font-bold ${binsFull.recyclables ? "text-green-400" : "text-gray-500"}`}>
                      {binsFull.recyclables ? "FULL" : "25%"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-green-500 h-2 rounded-full transition-all ${binsFull.recyclables ? "w-full" : "w-1/4"}`}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">🌱 Organic (Brown)</span>
                    <span className={`text-sm font-bold ${binsFull.organic ? "text-yellow-400" : "text-gray-500"}`}>
                      {binsFull.organic ? "FULL" : "10%"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-yellow-500 h-2 rounded-full transition-all ${binsFull.organic ? "w-full" : "w-1/12"}`}
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  setBinsFull((prev) => ({
                    ...prev,
                    recyclables: !prev.recyclables,
                  }))
                }
                className="w-full mt-6 bg-white/10 hover:bg-white/20 text-gray-300 font-bold py-2 rounded-lg transition-colors text-sm"
              >
                Toggle Recyclables Status
              </button>
            </div>

            {/* Market Rates */}
            <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Live Market Rates</h3>
                <span className="text-xs text-gray-500">Per kg (PKR)</span>
              </div>
              <div className="space-y-3">
                {rates.map((r) => (
                  <div key={r.material} className="flex items-center justify-between p-3 bg-white/[0.02] border border-white/5 rounded-lg hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">{r.icon}</span>
                      <span className="text-gray-300 font-medium">{r.material}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">₨{r.rate}</div>
                      <div
                        className={`text-xs font-semibold ${r.trend === "up" ? "text-green-400" : "text-red-400"}`}
                      >
                        {r.trend === "up" ? "📈" : "📉"} {r.trendPercent}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
            <div className="space-y-3">
              {transactions.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-lg hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                      {t.type === "pickup" ? "📦" : "💸"}
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {t.type === "pickup" ? `${t.material} Pickup` : "Withdrawal"}
                      </p>
                      <p className="text-gray-500 text-sm">{t.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">
                      +₨{t.amount.toLocaleString()}
                    </p>
                    <p
                      className={`text-xs font-semibold ${t.status === "completed" ? "text-green-400" : "text-yellow-400"}`}
                    >
                      {t.status === "completed" ? "✓ Completed" : "⏳ Pending"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pickup Modal */}
      {showPickupModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-md w-full animate-scale-in">
            <h2 className="text-2xl font-bold text-white mb-6">Schedule a Pickup</h2>
            <form onSubmit={handleSchedulePickup} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500/50 transition-colors"
                />
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                <p className="text-xs text-blue-300">
                  ℹ️ Collector will arrive within 2 hours of your selected time.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPickupModal(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-lg transition-colors"
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
