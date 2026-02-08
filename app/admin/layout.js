'use client'

import { useState } from 'react'
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Truck,
  ClipboardList,
  BarChart3,
  BookOpen,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  FileText,
  CreditCard,
  ShoppingCart
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  {
    category: 'OVERVIEW',
    items: [
      { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
      { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    ]
  },
  {
    category: 'MANAGEMENT',
    items: [
      { name: 'Enquiries', href: '/admin/enquiries', icon: MessageSquare },
      { name: 'Customers', href: '/admin/customers', icon: Users },
      { name: 'Status Tracking', href: '/admin/tracking', icon: Truck },
      { name: 'Orders', href: '/admin/orders', icon: ShoppingCart }, // Added for completeness based on likely need
    ]
  },
  {
    category: 'CONTENT',
    items: [
      { name: 'Notes', href: '/admin/notes', icon: ClipboardList },
      { name: 'Blogs', href: '/admin/blogs', icon: BookOpen },
    ]
  },
  {
    category: 'SYSTEM',
    items: [
      { name: 'Settings', href: '/admin/settings', icon: Settings },
    ]
  }
]

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex font-sans admin-root">
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-gray-900/50 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-xl lg:shadow-none border-r border-gray-100
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo Area */}
        <div className="h-20 flex items-center px-8 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">
              S
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-none">SPEEDY</h1>
              <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase">Admin Panel</span>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden ml-auto p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto space-y-8 custom-scrollbar">
          {navigation.map((section, idx) => (
            <div key={idx}>
              <div className="px-4 mb-3 text-xs font-bold text-gray-400 uppercase tracking-widest font-sans">
                {section.category}
              </div>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`
                        group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm
                        ${isActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                          : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`} />
                        <span>{item.name}</span>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 text-white/80" />}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3 border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate">Administrator</p>
              <p className="text-xs text-gray-500 truncate">admin@speedy.com</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-[#F5F7FA]">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold text-gray-800">
              {navigation.flatMap(g => g.items).find(item => item.href === pathname)?.name || 'Dashboard'}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2 py-1.5 shadow-sm">
              <span className="text-xs font-bold text-gray-400 px-2 uppercase">Date Range</span>
              <input type="date" className="text-sm font-medium text-gray-600 border-none focus:ring-0 p-0" />
            </div>

            <div className="relative">
              <button className="relative p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
