'use client'

import { useState } from 'react'
import { Search, Download, UserPlus, MoreHorizontal, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const customers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@gmail.com', phone: '+44 7911 123456', orders: 15, spent: '£540.00', status: 'Active', address: '12 Downing St' },
  { id: 2, name: 'Michael Brown', email: 'mike.brown@outlook.com', phone: '+44 7911 654321', orders: 3, spent: '£85.50', status: 'Inactive', address: 'London, UK' },
  { id: 3, name: 'Sarah Wilson', email: 'sarah.w@yahoo.com', phone: '+44 7911 987654', orders: 28, spent: '£1,250.00', status: 'VIP', address: 'High Wycombe' },
  { id: 4, name: 'James Evans', email: 'james.e@gmail.com', phone: '+44 7911 332211', orders: 1, spent: '£25.00', status: 'Active', address: 'Oxford' },
  { id: 5, name: 'Emma Watson', email: 'emma.w@icloud.com', phone: '+44 7911 777888', orders: 12, spent: '£420.00', status: 'Active', address: 'High Wycombe' },
]

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Customers</h1>
          <p className="text-muted-foreground">Manage your customer base and view history.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-border rounded-xl text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="btn-primary flex items-center gap-2 px-4 py-2 rounded-xl text-sm">
            <UserPlus className="w-4 h-4" />
            Add Customer
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-border/50 overflow-hidden">
        {/* Table Header Controls */}
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search customers..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Orders</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((customer, index) => (
                <motion.tr
                  key={customer.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-blue-600 text-white flex items-center justify-center font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">{customer.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {customer.address}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <Mail className="w-3 h-3" /> {customer.email}
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <Phone className="w-3 h-3" /> {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-foreground">{customer.orders} orders</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-foreground">{customer.spent}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${customer.status === 'Active' ? 'bg-green-100 text-green-800' :
                        customer.status === 'VIP' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                      }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <button className="text-gray-400 hover:text-foreground">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
