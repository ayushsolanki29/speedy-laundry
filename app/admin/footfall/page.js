'use client'

import { Activity, TrendingUp, Users, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FootfallPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Footfall Analytics</h1>
                <p className="text-gray-500">Track and analyze visitor traffic at your locations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                            <Activity className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider bg-orange-50 text-orange-600">
                            LIVE
                        </span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Today's Visitors</p>
                        <h3 className="text-2xl font-bold text-gray-800">350</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider bg-blue-50 text-blue-600">
                            WEEKLY
                        </span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Average Daily</p>
                        <h3 className="text-2xl font-bold text-gray-800">312</h3>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider bg-green-50 text-green-600">
                            GROWTH
                            +12%
                        </span>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Comparison</p>
                        <h3 className="text-2xl font-bold text-gray-800">vs Last Month</h3>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Activity className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Detailed Reports Coming Soon</h3>
                <p className="text-gray-500 max-w-md">
                    We are currently integrating more advanced footfall tracking metrics. Check back soon for heatmaps and hourly distribution charts.
                </p>
            </div>
        </div>
    )
}
