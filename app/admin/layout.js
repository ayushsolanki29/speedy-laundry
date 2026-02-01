'use client'

import { useState } from 'react'
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Package, 
  Calendar, 
  MessageSquare,
  Menu,
  X,
  LogOut,
  Settings,
  Bell,
  Search
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Overview', href: '/admin', icon: LayoutDashboard },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Revenue', href: '/admin/revenue', icon: DollarSign },
  { name: 'Services', href: '/admin/services', icon: Package },
  { name: 'Schedule', href: '/admin/schedule', icon: Calendar },
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
]

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:flex flex-col w-64 bg-white shadow-lg z-50 h-screen transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-600">Speedy Admin</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Admin User Section */}
          <div className="p-4 border-t border-gray-200 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@speedy.com</p>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </button>
              <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center flex-1">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-400 hover:text-gray-600 mr-4"
              >
                <Menu className="w-6 h-6" />
              </button>
              
              {/* Search Bar */}
              <div className="relative max-w-md flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link 
                href="/"
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Visit Site
              </Link>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
