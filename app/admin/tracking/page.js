'use client'

import { useState } from 'react'
import { Search, Filter, Truck, Package, Clock, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const orders = [
    { id: 'ORD-001', customer: 'John Doe', status: 'Collected', items: '3 Bags', address: '12 Willow St', time: '10:30 AM' },
    { id: 'ORD-002', customer: 'Jane Smith', status: 'Processing', items: 'Suit', address: '45 Oak Lane', time: '11:15 AM' },
    { id: 'ORD-003', customer: 'Alice Brown', status: 'Out for Delivery', items: '2 Bags, 1 Coat', address: '8 Pine Road', time: '09:00 AM' },
    { id: 'ORD-004', customer: 'Bob Wilson', status: 'Delivered', items: '5 Shirts', address: '22 Maple Ave', time: 'Yesterday' },
    { id: 'ORD-005', customer: 'Carol White', status: 'Pending', items: '1 Bag', address: '101 birch St', time: 'Just now' },
]

const statusColors = {
    'Pending': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Collected': 'bg-blue-100 text-blue-700 border-blue-200',
    'Processing': 'bg-purple-100 text-purple-700 border-purple-200',
    'Out for Delivery': 'bg-orange-100 text-orange-700 border-orange-200',
    'Delivered': 'bg-green-100 text-green-700 border-green-200',
}

export default function TrackingPage() {
    const [filter, setFilter] = useState('All')

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">Status Tracking</h1>
                    <p className="text-muted-foreground">Monitor real-time order status.</p>
                </div>
                <div className="flex gap-2">
                    {['All', 'Active', 'Delivered'].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${filter === f
                                    ? 'bg-foreground text-white'
                                    : 'bg-white text-muted-foreground border border-border hover:bg-gray-50'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {orders.map((order, i) => (
                    <motion.div
                        key={order.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow relative overflow-hidden group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="space-y-1">
                                <span className="text-xs font-bold text-muted-foreground tracking-widest uppercase">{order.id}</span>
                                <h3 className="text-lg font-bold text-foreground">{order.customer}</h3>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[order.status]}`}>
                                {order.status}
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Package className="w-4 h-4 text-primary" />
                                {order.items}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Truck className="w-4 h-4 text-primary" />
                                {order.address}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Clock className="w-4 h-4 text-primary" />
                                {order.time}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100 flex gap-2">
                            <button className="flex-1 py-2 text-sm font-bold text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                                Update Status
                            </button>
                            <button className="px-3 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                DETAILS
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
