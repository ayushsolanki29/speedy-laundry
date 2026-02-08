'use client'

import { useState, useEffect } from 'react'
import {
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ExternalLink,
  FileText,
  CreditCard,
  ShoppingBag,
  Activity,
  MessageSquare,
  Truck
} from 'lucide-react'
import { motion } from 'framer-motion'

// Mock Data matching the 5-card layout idea
const mockStats = [
  {
    label: "TOTAL REVENUE",
    value: "₹12,450",
    subtext: "Live revenue update",
    trend: "up",
    icon: DollarSign,
    iconBg: "bg-blue-600",
    badge: "TODAY",
    badgeColor: "bg-blue-100 text-blue-600"
  },
  {
    label: "ACTIVE ORDERS",
    value: "45",
    subtext: "Currently in process",
    trend: "up",
    icon: ShoppingBag,
    iconBg: "bg-cyan-500",
    badge: "LIVE",
    badgeColor: "bg-cyan-100 text-cyan-600"
  },
  {
    label: "PENDING ENQUIRIES",
    value: "12",
    subtext: "Requires attention",
    trend: "neutral",
    icon: MessageSquare, // Changed from FileText to MessageSquare for Enquiries
    iconBg: "bg-purple-500",
    badge: "ACTION",
    badgeColor: "bg-purple-100 text-purple-600"
  },
  {
    label: "TOTAL CUSTOMERS",
    value: "1,240",
    subtext: "Registered users",
    trend: "up",
    icon: Users,
    iconBg: "bg-green-500",
    badge: "ALL TIME",
    badgeColor: "bg-green-100 text-green-600"
  },
  {
    label: "DELIVERIES TODAY",
    value: "8",
    subtext: "Scheduled for today",
    trend: "up",
    icon: Truck, // Changed to Truck for deliveries
    iconBg: "bg-indigo-500",
    badge: "TODAY",
    badgeColor: "bg-indigo-100 text-indigo-600"
  }
]

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back, admin! Here's what's happening today.</p>
      </div>

      {/* Stats Grid - 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {mockStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${stat.iconBg}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${stat.badgeColor}`}>
                {stat.badge}
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>

            <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="text-gray-500 font-medium">{stat.subtext}</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-500 transition-colors cursor-pointer" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Sales Overview Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              Sales Overview <span className="text-gray-400 font-normal text-sm ml-2">(Last 7 Days)</span>
            </h3>
          </div>

          {/* Simple Visual Chart Replication */}
          <div className="h-[300px] w-full flex items-end justify-between px-4 pb-8 relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-px bg-gray-300 border-t border-dashed" />)}
            </div>

            {/* Chart Line Representation using CSS */}
            <svg className="absolute inset-x-4 bottom-8 h-[250px] overflow-visible" preserveAspectRatio="none">
              <path
                d="M0,250 L100,50 L200,240 L300,240 L400,220 L500,180 L600,250"
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M0,250 L100,50 L200,240 L300,240 L400,220 L500,180 L600,250 L600,300 L0,300 Z"
                fill="url(#gradient)"
                opacity="0.1"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>

              {/* Points */}
              <circle cx="0%" cy="100%" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
              <circle cx="16%" cy="20%" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
              <circle cx="33%" cy="96%" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
              <circle cx="50%" cy="96%" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
              <circle cx="66%" cy="88%" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
              <circle cx="83%" cy="72%" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
              <circle cx="100%" cy="100%" r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
            </svg>

            {/* X Axis Labels */}
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <span key={day} className="text-xs text-gray-400 font-medium absolute -bottom-0 translate-y-full" style={{ left: `${i * 16.5}%` }}>{day}</span>
            ))}
          </div>
        </motion.div>

        {/* Orders Side Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-800">Orders: Today</h3>
            <button className="text-xs font-bold text-blue-600 hover:underline">MANAGE &rarr;</button>
          </div>

          <div className="flex flex-col items-center justify-center h-[200px] text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-3">
              <ShoppingBag className="w-6 h-6 text-gray-300" />
            </div>
            <p className="text-gray-400 text-sm font-medium">No orders recorded yet.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
