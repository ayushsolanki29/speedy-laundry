'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ShoppingBag,
  DollarSign,
  Edit,
  ArrowLeft,
  Download,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react'

// Mock customer data
const customerData = {
  1: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    joinDate: '2023-01-15',
    totalOrders: 24,
    totalSpent: 1245.00,
    status: 'active',
    lastOrderDate: '2024-01-15',
    averageOrderValue: 51.87,
    preferredServices: ['Wash & Fold', 'Dry Cleaning'],
    notes: 'Regular customer, prefers express delivery',
    loyaltyPoints: 245,
    membershipTier: 'Gold'
  }
}

const recentOrders = [
  {
    id: 'ORD-001',
    service: 'Wash & Fold',
    status: 'completed',
    amount: 25.00,
    date: '2024-01-15',
    deliveryDate: '2024-01-17'
  },
  {
    id: 'ORD-002',
    service: 'Dry Cleaning',
    status: 'in-progress',
    amount: 45.00,
    date: '2024-01-14',
    deliveryDate: '2024-01-18'
  },
  {
    id: 'ORD-003',
    service: 'Express Service',
    status: 'completed',
    amount: 35.00,
    date: '2024-01-12',
    deliveryDate: '2024-01-13'
  }
]

export default function CustomerViewPage() {
  const params = useParams()
  const router = useRouter()
  const [customer, setCustomer] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCustomer()
  }, [params.id])

  const fetchCustomer = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/customers/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setCustomer(data)
      } else {
        // Customer not found, redirect to customers list
        router.push('/admin/customers')
      }
    } catch (error) {
      console.error('Failed to fetch customer:', error)
      // On error, redirect to customers list
      router.push('/admin/customers')
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

  if (!customer) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Customer not found</p>
      </div>
    )
  }

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Gold':
        return 'bg-yellow-100 text-yellow-800'
      case 'Silver':
        return 'bg-gray-100 text-gray-800'
      case 'Bronze':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
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
            <h1 className="text-2xl font-bold text-gray-900">Customer Details</h1>
            <p className="text-gray-600">View and manage customer information</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button
            onClick={() => router.push(`/admin/customers/${customer.id}/edit`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Customer
          </button>
        </div>
      </div>

      {/* Customer Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">{customer.name.charAt(0)}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{customer.name}</h2>
              <p className="text-gray-600">{customer.email}</p>
              <div className="flex justify-center space-x-2 mt-3">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(customer.status)}`}>
                  {customer.status}
                </span>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getTierColor(customer.membershipTier)}`}>
                  {customer.membershipTier}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-900">{customer.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-900">{customer.address}</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-900">Joined {customer.joinDate}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-900">Last order {customer.lastOrderDate}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-900">Loyalty Points</span>
                <span className="text-lg font-bold text-blue-900">{customer.loyaltyPoints}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{customer.totalOrders}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <ShoppingBag className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Spent</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">${customer.totalSpent.toFixed(2)}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">${customer.averageOrderValue.toFixed(2)}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Preferred Services */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Services</h3>
            <div className="flex flex-wrap gap-2">
              {customer.preferredServices.map((service, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
            <p className="text-gray-600">{customer.notes}</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
          <p className="text-sm text-gray-600">Customer's order history</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Date
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      order.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status === 'completed' && <CheckCircle className="w-4 h-4 mr-1" />}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${order.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.deliveryDate}
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
