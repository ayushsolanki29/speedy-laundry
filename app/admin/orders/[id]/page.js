'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft,
  Edit,
  Truck,
  Clock,
  CheckCircle,
  XCircle,
  Calendar,
  MapPin,
  User,
  Package,
  DollarSign,
  Download,
  Printer,
  Mail,
  Phone
} from 'lucide-react'

// Mock order data
const orderData = {
  'ORD-001': {
    id: 'ORD-001',
    customerId: 1,
    customerName: 'John Doe',
    customerEmail: 'john.doe@email.com',
    customerPhone: '+1 (555) 123-4567',
    service: 'Wash & Fold',
    items: [
      { name: 'T-Shirts', quantity: 5, price: 2.00 },
      { name: 'Jeans', quantity: 3, price: 4.00 },
      { name: 'Shirts', quantity: 4, price: 3.00 },
      { name: 'Socks', quantity: 3, price: 1.00 }
    ],
    amount: 25.00,
    status: 'completed',
    priority: 'normal',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-17',
    pickupAddress: '123 Main St, New York, NY 10001',
    deliveryAddress: '123 Main St, New York, NY 10001',
    notes: 'Customer requested delicate cycle for some items',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    trackingId: 'TRK001234',
    estimatedTime: '2 hours',
    actualTime: '1.5 hours',
    staffAssigned: 'Sarah Johnson',
    specialInstructions: 'Use fragrance-free detergent for sensitive skin'
  }
}

const timelineEvents = [
  {
    id: 1,
    event: 'Order Placed',
    timestamp: '2024-01-15 09:30 AM',
    status: 'completed',
    description: 'Order received from customer'
  },
  {
    id: 2,
    event: 'Pickup Scheduled',
    timestamp: '2024-01-15 10:00 AM',
    status: 'completed',
    description: 'Pickup scheduled for 2:00 PM'
  },
  {
    id: 3,
    event: 'Items Picked Up',
    timestamp: '2024-01-15 02:15 PM',
    status: 'completed',
    description: '15 items collected from customer'
  },
  {
    id: 4,
    event: 'Processing Started',
    timestamp: '2024-01-15 03:00 PM',
    status: 'completed',
    description: 'Items received at facility, processing started'
  },
  {
    id: 5,
    event: 'Processing Completed',
    timestamp: '2024-01-16 11:00 AM',
    status: 'completed',
    description: 'All items washed, dried, and folded'
  },
  {
    id: 6,
    event: 'Out for Delivery',
    timestamp: '2024-01-17 09:00 AM',
    status: 'completed',
    description: 'Items out for delivery'
  },
  {
    id: 7,
    event: 'Delivered',
    timestamp: '2024-01-17 10:30 AM',
    status: 'completed',
    description: 'Order successfully delivered to customer'
  }
]

export default function OrderViewPage() {
  const params = useParams()
  const router = useRouter()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchOrder = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/admin/orders/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setOrder(data)
      } else {
        // Order not found, redirect to orders list
        router.push('/admin/orders')
      }
    } catch (error) {
      console.error('Failed to fetch order:', error)
      // On error, redirect to orders list
      router.push('/admin/orders')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrder()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Order not found</p>
      </div>
    )
  }

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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800'
      case 'high':
        return 'bg-orange-100 text-orange-800'
      case 'normal':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPaymentStatusColor = (status) => {
    return status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
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
            <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>
            <p className="text-gray-600">View and manage order information</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
          <button
            onClick={() => router.push(`/admin/orders/${order.id}/edit`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Order
          </button>
        </div>
      </div>

      {/* Order Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Order Status</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getStatusColor(order.status)}`}>
                {order.status === 'completed' && <CheckCircle className="w-4 h-4 mr-1" />}
                {order.status}
              </span>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Priority</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getPriorityColor(order.priority)}`}>
                {order.priority}
              </span>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Payment</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getPaymentStatusColor(order.paymentStatus)}`}>
                {order.paymentStatus}
              </span>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">${order.amount.toFixed(2)}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium text-gray-900">{order.customerName}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium text-gray-900">{order.customerEmail}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{order.customerPhone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium text-gray-900">{order.pickupAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Unit Price
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {order.items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {item.quantity}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        ${(item.quantity * item.price).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan="3" className="px-4 py-3 text-sm font-medium text-gray-900">
                      Total
                    </td>
                    <td className="px-4 py-3 text-sm font-bold text-gray-900">
                      ${order.amount.toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Special Instructions */}
          {order.specialInstructions && (
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Special Instructions</h3>
              <p className="text-gray-600">{order.specialInstructions}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Order Timeline */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Timeline</h3>
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <div key={event.id} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    event.status === 'completed' ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {event.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <Clock className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{event.event}</p>
                      <span className="text-xs text-gray-500">{event.timestamp}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Order ID</span>
                <span className="text-sm font-medium text-gray-900">{order.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Service</span>
                <span className="text-sm font-medium text-gray-900">{order.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Order Date</span>
                <span className="text-sm font-medium text-gray-900">{order.orderDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Delivery Date</span>
                <span className="text-sm font-medium text-gray-900">{order.deliveryDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Payment Method</span>
                <span className="text-sm font-medium text-gray-900">{order.paymentMethod}</span>
              </div>
              {order.trackingId && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Tracking ID</span>
                  <span className="text-sm font-medium text-gray-900">{order.trackingId}</span>
                </div>
              )}
              {order.staffAssigned && (
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Staff Assigned</span>
                  <span className="text-sm font-medium text-gray-900">{order.staffAssigned}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
