"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/components/AuthProvider";

interface Transaction {
  id: string;
  date: string;
  type: "pickup" | "withdrawal" | "add_funds";
  amount: number;
  material?: string;
  status: "completed" | "pending";
  frequency?: string;
}

interface ScheduledPickup {
  id: string;
  frequency: string;
  recyclables: boolean;
  trash: boolean;
  monthlyFee: number;
  nextPickupDate: string;
  frequency_value?: string;
  customDays?: number;
}

interface MaterialRate {
  material: string;
  rate: number;
  trend: "up" | "down";
  trendPercent: number;
  icon: string;
}

interface ScheduleOption {
  label: string;
  value: string;
  recyclableFee: number;
  trashFee: number;
  description: string;
}

const scheduleOptions: ScheduleOption[] = [
  {
    label: "On-Demand",
    value: "on-demand",
    recyclableFee: 2,
    trashFee: 50,
    description: "Pick up whenever you want",
  },
  {
    label: "Every Day",
    value: "daily",
    recyclableFee: 2,
    trashFee: 20,
    description: "Daily collection (lowest per-pickup cost)",
  },
  {
    label: "Every 2 Days",
    value: "every-2-days",
    recyclableFee: 2,
    trashFee: 15,
    description: "Bi-daily collection",
  },
  {
    label: "Every 3 Days",
    value: "every-3-days",
    recyclableFee: 2,
    trashFee: 12,
    description: "Tri-daily collection",
  },
  {
    label: "Every 4 Days",
    value: "every-4-days",
    recyclableFee: 2,
    trashFee: 10,
    description: "Collection every 4 days",
  },
  {
    label: "Every 5 Days",
    value: "every-5-days",
    recyclableFee: 2,
    trashFee: 8,
    description: "Collection every 5 days",
  },
  {
    label: "Every 6 Days",
    value: "every-6-days",
    recyclableFee: 2,
    trashFee: 6,
    description: "Collection every 6 days",
  },
  {
    label: "Every 7 Days",
    value: "weekly",
    recyclableFee: 2,
    trashFee: 5,
    description: "Weekly collection (minimal cost)",
  },
];

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
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleOption | null>(null);
  const [collectRecyclables, setCollectRecyclables] = useState(true);
  const [collectTrash, setCollectTrash] = useState(true);
  const [customDays, setCustomDays] = useState(1);
  const [useCustomSchedule, setUseCustomSchedule] = useState(false);
  const [addFundsAmount, setAddFundsAmount] = useState("");
  const [scheduledPickups, setScheduledPickups] = useState<ScheduledPickup[]>([]);
  const [binsFull, setBinsFull] = useState({
    recyclables: false,
    organic: false,
  });

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [isLoggedIn, router]);

  const calculateFee = (): number => {
    let totalFee = 0;
    const schedule = useCustomSchedule 
      ? { recyclableFee: 2, trashFee: 50 / customDays }
      : selectedSchedule;

    if (!schedule) return 0;

    if (collectRecyclables) {
      totalFee += schedule.recyclableFee;
    }
    if (collectTrash) {
      totalFee += schedule.trashFee;
    }

    return Math.round(totalFee * 100) / 100;
  };

  const calculateMonthlyLockedFees = (): number => {
    return Math.round(
      scheduledPickups.reduce((total, pickup) => total + pickup.monthlyFee, 0) * 100
    ) / 100;
  };

  const getAvailableBalance = (): number => {
    const lockedFees = calculateMonthlyLockedFees();
    return Math.max(0, balance - lockedFees);
  };

  const calculateMonthlyFee = (
    schedule: ScheduleOption | null,
    recyclables: boolean,
    trash: boolean,
    customDays_?: number
  ): number => {
    if (!schedule && !customDays_) return 0;

    const recyclableDaily = 2;
    const trashDaily = customDays_ ? 50 / customDays_ : schedule?.trashFee || 0;

    let perPickupFee = 0;
    if (recyclables) perPickupFee += recyclableDaily;
    if (trash) perPickupFee += trashDaily;

    // Calculate pickups per month (assuming 30 days)
    let pickupsPerMonth = 1;
    if (customDays_) {
      pickupsPerMonth = Math.round(30 / customDays_);
    } else if (schedule?.value === "on-demand") {
      pickupsPerMonth = 2; // Assume 2 pickups/month for on-demand
    } else if (schedule?.value === "daily") {
      pickupsPerMonth = 30;
    } else if (schedule?.value === "every-2-days") {
      pickupsPerMonth = 15;
    } else if (schedule?.value === "every-3-days") {
      pickupsPerMonth = 10;
    } else if (schedule?.value === "every-4-days") {
      pickupsPerMonth = 8;
    } else if (schedule?.value === "every-5-days") {
      pickupsPerMonth = 6;
    } else if (schedule?.value === "every-6-days") {
      pickupsPerMonth = 5;
    } else if (schedule?.value === "weekly") {
      pickupsPerMonth = 4;
    }

    return Math.round(perPickupFee * pickupsPerMonth * 100) / 100;
  };

  const handleSchedulePickup = (e: React.FormEvent) => {
    e.preventDefault();
    
    const fee = calculateFee();
    
    if (balance < fee) {
      alert(`Insufficient balance. You need ₨${fee} but have ₨${balance}. Add funds first!`);
      return;
    }

    if (!useCustomSchedule && !selectedSchedule) {
      alert("Please select a schedule option");
      return;
    }

    // Check if both bins are deselected
    if (!collectRecyclables && !collectTrash) {
      alert("Please select at least one bin");
      return;
    }

    // Calculate monthly fee for this schedule
    const monthlyFee = calculateMonthlyFee(
      selectedSchedule,
      collectRecyclables,
      collectTrash,
      useCustomSchedule ? customDays : undefined
    );

    // Deduct fee from balance
    const newBalance = balance - fee;
    setBalance(newBalance);

    // Add scheduled pickup
    const scheduleLabel = useCustomSchedule 
      ? `Every ${customDays} days`
      : selectedSchedule?.label || "Unknown";

    const nextPickupDate = new Date();
    nextPickupDate.setDate(nextPickupDate.getDate() + 1);

    const newScheduledPickup: ScheduledPickup = {
      id: `${Date.now()}`,
      frequency: scheduleLabel,
      recyclables: collectRecyclables,
      trash: collectTrash,
      monthlyFee: monthlyFee,
      nextPickupDate: nextPickupDate.toISOString().split("T")[0],
      frequency_value: selectedSchedule?.value,
      customDays: useCustomSchedule ? customDays : undefined,
    };

    setScheduledPickups([...scheduledPickups, newScheduledPickup]);

    // Add transaction
    const newTransaction: Transaction = {
      id: `${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      type: "pickup",
      material: collectRecyclables && collectTrash ? "Both Bins" : collectRecyclables ? "Recyclables" : "Trash",
      amount: -fee,
      status: "completed",
      frequency: scheduleLabel,
    };

    setTransactions([newTransaction, ...transactions]);
    setPickupScheduled(true);
    setShowPickupModal(false);
    setSelectedSchedule(null);
    setPickupDate("");
    setUseCustomSchedule(false);
    setCollectRecyclables(true);
    setCollectTrash(true);

    setTimeout(() => {
      alert(
        `✅ Pickup scheduled!\n\n${scheduleLabel}\n` +
        `Recyclables: ${collectRecyclables ? "Yes" : "No"}\n` +
        `Trash: ${collectTrash ? "Yes" : "No"}\n` +
        `Monthly Fee: ₨${monthlyFee}\n` +
        `Immediate Charge: -₨${fee}\n` +
        `New Balance: ₨${newBalance}`
      );
      setPickupScheduled(false);
    }, 300);
  };

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(addFundsAmount);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setBalance((prev) => prev + amount);

    const newTransaction: Transaction = {
      id: `${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      type: "add_funds",
      amount: amount,
      status: "completed",
    };

    setTransactions([newTransaction, ...transactions]);
    setAddFundsAmount("");
    setShowAddFundsModal(false);

    alert(`✅ Added ₨${amount} to your wallet!\nNew Balance: ₨${balance + amount}`);
  };

  const handleWithdraw = () => {
    const availableBalance = getAvailableBalance();
    
    if (availableBalance < 100) {
      const lockedFees = calculateMonthlyLockedFees();
      alert(`❌ Cannot withdraw\n\nYour balance is ₨${balance}\nLocked for upcoming pickups: ₨${lockedFees}\nAvailable balance: ₨${availableBalance}\n\nMinimum withdrawal is ₨100`);
      return;
    }

    const amount = Math.floor(availableBalance / 100) * 100;
    setBalance((prev) => prev - amount);

    const newTransaction: Transaction = {
      id: `${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      type: "withdrawal",
      amount: -amount,
      status: "completed",
    };

    setTransactions([newTransaction, ...transactions]);
    alert(`✅ ₨${amount} withdrawn to EasyPaisa. Check your phone for confirmation.`);
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
              <h2 className="text-4xl sm:text-5xl font-black text-green-400 mb-4">
                ₨{balance.toLocaleString()}
              </h2>
              {calculateMonthlyLockedFees() > 0 && (
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Locked for Pickups</p>
                  <p className="text-sm font-bold text-orange-400 mb-2">
                    -₨{calculateMonthlyLockedFees()} (monthly)
                  </p>
                  <p className="text-xs text-green-300 font-semibold">
                    Available: ₨{getAvailableBalance().toLocaleString()}
                  </p>
                </div>
              )}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowAddFundsModal(true)}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all duration-200"
                >
                  Add Funds
                </button>
                <button
                  onClick={handleWithdraw}
                  disabled={getAvailableBalance() < 100}
                  className="flex-1 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-bold py-3 rounded-lg transition-all duration-200"
                >
                  Withdraw
                </button>
              </div>
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

          {/* Scheduled Pickups Section */}
          {scheduledPickups.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">Your Active Schedules</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {scheduledPickups.map((pickup) => (
                  <div
                    key={pickup.id}
                    className="bg-white/[0.03] border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Schedule Frequency</p>
                        <h3 className="text-lg font-bold text-white">{pickup.frequency}</h3>
                      </div>
                      <span className="text-2xl">🔄</span>
                    </div>

                    <div className="space-y-3 mb-4 pb-4 border-b border-white/10">
                      {pickup.recyclables && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">♻️ Recyclables</span>
                          <span className="text-green-400">Collecting</span>
                        </div>
                      )}
                      {pickup.trash && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-300">🗑️ Trash</span>
                          <span className="text-orange-400">Collecting</span>
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">Monthly Charge</p>
                      <p className="text-2xl font-black text-cyan-400">
                        ₨{pickup.monthlyFee}
                      </p>
                    </div>

                    <div className="text-xs text-gray-400 mb-4">
                      Next pickup: <span className="text-white font-semibold">{pickup.nextPickupDate}</span>
                    </div>

                    <button
                      onClick={() => {
                        setScheduledPickups(scheduledPickups.filter((p) => p.id !== pickup.id));
                        setBalance((prev) => prev + calculateFee());
                        alert(`❌ Schedule cancelled. ₨${calculateFee()} credit applied.`);
                      }}
                      className="w-full text-xs bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 font-bold py-2 rounded-lg transition-colors"
                    >
                      Cancel Schedule
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

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
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-2xl w-full animate-scale-in max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-white mb-2">Schedule Pickup</h2>
            <p className="text-gray-400 text-sm mb-6">Choose your preferred pickup frequency and select which bins to collect</p>

            <form onSubmit={handleSchedulePickup} className="space-y-6">
              {/* Bins Selection */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">Which bins do you want collected?</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-4 bg-white/[0.03] border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                    <input
                      type="checkbox"
                      checked={collectRecyclables}
                      onChange={(e) => setCollectRecyclables(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 flex-1">
                      <span className="text-white font-medium">♻️ Recyclable Bin (Green)</span>
                      <p className="text-xs text-gray-500 mt-1">You GET PAID for recyclables • Small collection fee (₨2)</p>
                    </span>
                    <span className="text-green-400 font-bold">+₨</span>
                  </label>

                  <label className="flex items-center p-4 bg-white/[0.03] border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                    <input
                      type="checkbox"
                      checked={collectTrash}
                      onChange={(e) => setCollectTrash(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 flex-1">
                      <span className="text-white font-medium">🗑️ Trash Bin (Brown)</span>
                      <p className="text-xs text-gray-500 mt-1">Organic/general waste • Fee varies by frequency</p>
                    </span>
                    <span className="text-orange-400 font-bold">₨</span>
                  </label>
                </div>
              </div>

              {/* Schedule Options */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4">How often should we pick up?</h3>
                
                {/* Preset Options */}
                {!useCustomSchedule && (
                  <div className="space-y-3 mb-4">
                    {scheduleOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedSchedule(option)}
                        className={`w-full text-left p-4 border rounded-lg transition-all ${
                          selectedSchedule?.value === option.value
                            ? "bg-green-600/20 border-green-500/50"
                            : "bg-white/[0.03] border-white/10 hover:bg-white/[0.08]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-white">{option.label}</p>
                            <p className="text-xs text-gray-400 mt-1">{option.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-bold text-white">
                              ₨{option.recyclableFee + option.trashFee}
                            </p>
                            <p className="text-xs text-gray-500">per pickup</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Custom Schedule Option */}
                <button
                  type="button"
                  onClick={() => setUseCustomSchedule(!useCustomSchedule)}
                  className="w-full p-4 border border-white/10 rounded-lg text-white font-medium text-sm hover:bg-white/5 transition-colors mb-4"
                >
                  {useCustomSchedule ? "← Back to Preset Options" : "+ Custom Schedule"}
                </button>

                {useCustomSchedule && (
                  <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4">
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Every how many days? (1-7)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="1"
                        max="7"
                        value={customDays}
                        onChange={(e) => setCustomDays(parseInt(e.target.value))}
                        className="flex-1"
                      />
                      <span className="text-white font-bold text-2xl min-w-[60px] text-center">{customDays}</span>
                      <span className="text-gray-400 text-sm">days</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Custom pickup: Every {customDays} day{customDays > 1 ? "s" : ""}
                    </p>
                  </div>
                )}
              </div>

              {/* Fee Summary */}
              <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-white mb-3">Schedule Summary</h3>
                <div className="space-y-2 text-sm">
                  {collectRecyclables && (
                    <div className="flex justify-between text-gray-300">
                      <span>♻️ Recyclable Collection</span>
                      <span className="text-green-400">-₨2</span>
                    </div>
                  )}
                  {collectTrash && selectedSchedule && (
                    <div className="flex justify-between text-gray-300">
                      <span>🗑️ Trash Pickup ({selectedSchedule.label})</span>
                      <span className="text-orange-400">-₨{selectedSchedule.trashFee}</span>
                    </div>
                  )}
                  {collectTrash && useCustomSchedule && (
                    <div className="flex justify-between text-gray-300">
                      <span>🗑️ Trash Pickup (Every {customDays} days)</span>
                      <span className="text-orange-400">-₨{Math.round((50 / customDays) * 100) / 100}</span>
                    </div>
                  )}
                  <div className="border-t border-white/10 pt-2 mt-2">
                    <div className="flex justify-between">
                       <span className="font-bold text-white">First Pickup Charge</span>
                       <span className="font-bold text-cyan-400">-₨{calculateFee()}</span>
                       </div>
                       
                       <div className="bg-white/5 rounded p-2 mt-2">
                         <div className="flex justify-between mb-1">
                           <span className="text-xs text-gray-400">📅 Monthly Fee (Locked)</span>
                           <span className="text-xs font-bold text-orange-400">-₨{calculateMonthlyFee(selectedSchedule, collectRecyclables, collectTrash, useCustomSchedule ? customDays : undefined)}</span>
                         </div>
                         <p className="text-xs text-gray-500">This will be locked from your wallet each month</p>
                       </div>
                       
                       <div className="flex justify-between mt-2">
                         <span className="text-gray-400">Your Balance</span>
                         <span className={balance >= calculateFee() ? "text-green-400" : "text-red-400"}>
                           ₨{balance}
                         </span>
                       </div>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-gray-400">Current Balance</span>
                      <span className={balance >= calculateFee() ? "text-green-400" : "text-red-400"}>
                        ₨{balance}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {balance < calculateFee() && (
                <div className="bg-red-600/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-xs text-red-300">
                    ⚠️ Insufficient balance. You need ₨{calculateFee()} but have ₨{balance}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setShowPickupModal(false);
                      setShowAddFundsModal(true);
                    }}
                    className="mt-2 text-xs font-bold text-red-300 hover:text-red-200 underline"
                  >
                    Add funds to your wallet →
                  </button>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setShowPickupModal(false);
                    setSelectedSchedule(null);
                    setUseCustomSchedule(false);
                  }}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!collectRecyclables && !collectTrash}
                  className="flex-1 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white font-bold py-2 rounded-lg transition-colors"
                >
                  {calculateFee() > 0 ? `Confirm (₨${calculateFee()})` : "Select Option"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Funds Modal */}
      {showAddFundsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-2xl p-8 max-w-sm w-full animate-scale-in">
            <h2 className="text-2xl font-bold text-white mb-2">Add Funds</h2>
            <p className="text-gray-400 text-sm mb-6">Top up your Trash Wallet</p>

            <form onSubmit={handleAddFunds} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Amount (PKR)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={addFundsAmount}
                  onChange={(e) => setAddFundsAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-colors"
                />
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2">💳 Payment Methods</p>
                <div className="space-y-2 text-xs text-blue-300/80">
                  <p>✓ JazzCash</p>
                  <p>✓ EasyPaisa</p>
                  <p>✓ Bank Transfer</p>
                  <p>✓ Debit/Credit Card</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAddFundsModal(false)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-lg transition-colors"
                >
                  Add Funds
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
