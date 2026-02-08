'use client'

import { BarChart3, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react'

export default function AnalyticsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-display text-foreground">Analytics</h1>
                <p className="text-muted-foreground">Detailed insights into your business performance.</p>
            </div>

            {/* Mock Charts */}
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                    <h3 className="text-lg font-bold mb-6">Revenue Growth</h3>
                    <div className="h-64 flex items-end justify-between gap-4">
                        {[30, 45, 60, 50, 70, 85, 90, 80, 95, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-primary/10 rounded-t-xl group relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 right-0 bg-primary h-0 transition-all duration-1000 group-hover:h-full" style={{ height: `${h}%` }} />
                                <div className="absolute inset-x-0 bottom-0 bg-primary transition-all duration-1000" style={{ height: `${h}%` }} />
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-4">Fiscal Year 2026</p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                    <h3 className="text-lg font-bold mb-6">Customer Demographics</h3>
                    <div className="flex items-center justify-center h-64 relative">
                        <div className="w-48 h-48 rounded-full border-[16px] border-primary/20 border-t-primary border-r-primary transform rotate-45" />
                        <div className="absolute text-center">
                            <span className="block text-3xl font-bold text-foreground">85%</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Returning</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-8 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-primary rounded-full" />
                            <span className="text-sm font-bold text-gray-600">Returning</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-primary/20 rounded-full" />
                            <span className="text-sm font-bold text-gray-600">New</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
