'use client'

import { useState, useEffect } from 'react'
import { 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Package, 
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  MoreHorizontal
} from 'lucide-react'

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/dashboard')
      const data = await response.json()
      setDashboardData(data)
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const stats = dashboardData ? [
    {
      name: 'Total Customers',
      value: dashboardData.overview.totalCustomers.toString(),
      change: dashboardData.overview.changes.customers,
      changeType: 'increase',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      name: 'Active Orders',
      value: dashboardData.overview.activeOrders.toString(),
      change: dashboardData.overview.changes.orders,
      changeType: 'increase',
      icon: ShoppingCart,
      color: 'bg-green-500'
    },
    {
      name: 'Total Revenue',
      value: `$${dashboardData.overview.totalRevenue.toLocaleString()}`,
      change: dashboardData.overview.changes.revenue,
      changeType: 'increase',
      icon: DollarSign,
      color: 'bg-purple-500'
    },
    {
      name: 'Services',
      value: dashboardData.overview.totalServices.toString(),
      change: dashboardData.overview.changes.services,
      changeType: 'neutral',
      icon: Package,
      color: 'bg-orange-500'
    }
  ] : []

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'in-progress':
        return <Clock className="w-4 h-4" />
      case 'pending':
        return <Calendar className="w-4 h-4" />
      case 'cancelled':
        return <XCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'increase' ? (
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  ) : stat.changeType === 'decrease' ? (
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  ) : null}
                  <span className={`text-sm ${
                    stat.changeType === 'increase' ? 'text-green-600' : 
                    stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
            <p className="text-sm text-gray-600">Latest customer orders</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData?.recentOrders?.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {order.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{order.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${order.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Services</h3>
            <p className="text-sm text-gray-600">Most profitable services</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {dashboardData?.topServices?.map((service, index) => (
                <div key={service.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{service.name}</p>
                      <p className="text-sm text-gray-500">{service.percentage}% of total revenue</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">${service.revenue.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
          <p className="text-sm text-gray-600">Monthly revenue and order trends</p>
        </div>
        <div className="p-6">
          <div className="flex items-end justify-between h-64">
            {dashboardData?.revenueChart?.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-blue-500 rounded-t" style={{ height: `${(data.revenue / 12000) * 100}%` }}></div>
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
