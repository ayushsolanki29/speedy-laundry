'use client'

import { useState } from 'react'
import { Search, Filter, Mail, Phone, Calendar, ChevronRight, CheckCircle, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const mockEnquiries = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', type: 'Service Inquiry', message: 'Do you provide same-day service for suits?', date: '2 hours ago', status: 'New' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', type: 'Pricing', message: 'How much for a standard load of laundry?', date: '5 hours ago', status: 'Read' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', type: 'Complaint', message: 'My delivery was late yesterday.', date: '1 day ago', status: 'Pending' },
    { id: 4, name: 'Diana Evans', email: 'diana@example.com', type: 'Service Inquiry', message: 'Is pickup free in High Wycombe?', date: '2 days ago', status: 'Replied' },
]

export default function EnquiriesPage() {
    const [activeTab, setActiveTab] = useState('All')

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">Enquiries</h1>
                    <p className="text-muted-foreground">Manage incoming messages from customers.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Compose New
                </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-border/50 flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search enquiries..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                    {['All', 'Unread', 'Replied', 'Pending'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                    : 'bg-gray-50 text-muted-foreground hover:bg-gray-100 hover:text-foreground'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Enquiries List */}
            <div className="space-y-4">
                {mockEnquiries.map((enquiry, index) => (
                    <motion.div
                        key={enquiry.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all group cursor-pointer"
                    >
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-lg">
                                    {enquiry.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-foreground text-lg">{enquiry.name}</h3>
                                        {enquiry.status === 'New' && (
                                            <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {enquiry.email}</span>
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {enquiry.date}</span>
                                    </div>
                                    <p className="text-gray-600 line-clamp-2">{enquiry.message}</p>
                                </div>
                            </div>
                            <button className="self-start md:self-center p-2 rounded-full hover:bg-gray-100 text-muted-foreground group-hover:text-primary transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="text-sm font-medium text-gray-500 hover:text-foreground">Ignore</button>
                            <button className="text-sm font-bold text-primary hover:text-primary/80">Convert to Customer</button>
                            <button className="text-sm font-bold text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90">Reply</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
