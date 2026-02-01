'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft,
  Edit,
  Package,
  DollarSign,
  Clock,
  TrendingUp,
  Star,
  Calendar,
  BarChart3,
  Users,
  Download,
  Eye
} from 'lucide-react'

// Mock service data
const serviceData = {
  1: {
    id: 1,
    name: 'Wash & Fold',
    description: 'Professional washing and folding service for everyday clothes',
    category: 'Laundry',
    price: 25.00,
    duration: '24 hours',
    popularity: 'high',
    status: 'active',
    features: ['Eco-friendly detergent', 'Fabric softener', 'Folding service'],
    ordersCount: 456,
    revenue: 11400,
    rating: 4.8,
    createdAt: '2023-01-01',
    updatedAt: '2024-01-15',
    image: '/api/placeholder/300/200',
    tags: ['popular', 'eco-friendly', 'regular'],
    minItems: 5,
    maxItems: 50,
    pricePerItem: 2.00
  }
}

const recentOrders = [
  {
    id: 'ORD-001',
    customerName: 'John Doe',
    customerEmail: 'john.doe@email.com',
    amount: 25.00,
    date: '2024-01-15',
    status: 'completed'
  },
  {
    id: 'ORD-002',
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@email.com',
    amount: 30.00,
    date: '2024-01-14',
    status: 'in-progress'
  },
  {
    id: 'ORD-003',
    customerName: 'Bob Johnson',
    customerEmail: 'bob.johnson@email.com',
    amount: 20.00,
    date: '2024-01-13',
    status: 'completed'
  }
]

const monthlyStats = [
  { month: 'Jan', orders: 45, revenue: 1125 },
  { month: 'Feb', orders: 52, revenue: 1300 },
  { month: 'Mar', orders: 48, revenue: 1200 },
  { month: 'Apr', orders: 58, revenue: 1450 },
  { month: 'May', orders: 62, revenue: 1550 },
  { month: 'Jun', orders: 55, revenue: 1375 }
]

export default function ServiceViewPage() {
  const params = useParams()
  const router = useRouter()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchService = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/services/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setService(data)
      } else {
        // Service not found, redirect to services list
        router.push('/admin/services')
      }
    } catch (error) {
      console.error('Failed to fetch service:', error)
      // On error, redirect to services list
      router.push('/admin/services')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchService()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Service not found</p>
      </div>
    )
  }

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case 'high':
        return 'bg-green-100 text-green-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'low':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Service Details</h1>
            <p className="text-gray-600">View and manage service information</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button
            onClick={() => router.push(`/admin/services/${service.id}/edit`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Service
          </button>
        </div>
      </div>

      {/* Service Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Service Info Card */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <Package className="w-16 h-16 text-gray-400" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{service.name}</h2>
                <div className="flex space-x-2">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPopularityColor(service.popularity)}`}>
                    {service.popularity}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Price</p>
                  <p className="text-xl font-bold text-gray-900">${service.price.toFixed(2)}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-xl font-bold text-gray-900">{service.duration}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="text-xl font-bold text-gray-900">{service.category}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Rating</p>
                  <div className="flex items-center justify-center">
                    {renderStars(service.rating)}
                    <span className="ml-1 text-sm text-gray-600">({service.rating})</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Created:</span> {service.createdAt}
                </div>
                <div>
                  <span className="font-medium">Updated:</span> {service.updatedAt}
                </div>
                <div>
                  <span className="font-medium">Min Items:</span> {service.minItems}
                </div>
                <div>
                  <span className="font-medium">Max Items:</span> {service.maxItems}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-600">Total Orders</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{service.ordersCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Total Revenue</span>
                </div>
                <span className="text-lg font-bold text-gray-900">${service.revenue.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm text-gray-600">Avg Order Value</span>
                </div>
                <span className="text-lg font-bold text-gray-900">${(service.revenue / service.ordersCount).toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-600 mr-2" />
                  <span className="text-sm text-gray-600">Customer Rating</span>
                </div>
                <span className="text-lg font-bold text-gray-900">{service.rating}/5.0</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                View Analytics
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center">
                <Users className="w-4 h-4 mr-2" />
                View Customers
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-left flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Performance Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Performance</h3>
          <BarChart3 className="w-5 h-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          <div className="flex items-end justify-between h-40">
            {monthlyStats.map((stat, index) => (
              <div key={stat.month} className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[30px] bg-blue-500 rounded-t" style={{ height: `${(stat.orders / 62) * 100}%` }}></div>
                <span className="text-xs text-gray-600 mt-2">{stat.month}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <p className="text-sm text-gray-600">Avg Monthly Orders</p>
              <p className="text-lg font-bold text-gray-900">
                {Math.round(monthlyStats.reduce((sum, stat) => sum + stat.orders, 0) / monthlyStats.length)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Avg Monthly Revenue</p>
              <p className="text-lg font-bold text-gray-900">
                ${Math.round(monthlyStats.reduce((sum, stat) => sum + stat.revenue, 0) / monthlyStats.length)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Growth Rate</p>
              <p className="text-lg font-bold text-green-600">+12%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          <p className="text-sm text-gray-600">Latest orders using this service</p>
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
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                      <div className="text-sm text-gray-500">{order.customerEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${order.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => router.push(`/admin/orders/${order.id}`)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
            View all orders →
          </button>
        </div>
      </div>
    </div>
  )
}
