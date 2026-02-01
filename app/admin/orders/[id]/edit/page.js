'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  User,
  Package,
  Calendar,
  MapPin,
  DollarSign,
  Clock,
  Truck
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
      { id: 1, name: 'T-Shirts', quantity: 5, price: 2.00 },
      { id: 2, name: 'Jeans', quantity: 3, price: 4.00 },
      { id: 3, name: 'Shirts', quantity: 4, price: 3.00 },
      { id: 4, name: 'Socks', quantity: 3, price: 1.00 }
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

const availableServices = [
  'Wash & Fold',
  'Dry Cleaning',
  'Express Service',
  'Wash & Iron',
  'Delicate Care',
  'Commercial Laundry'
]

const paymentMethods = [
  'Credit Card',
  'Debit Card',
  'Cash',
  'Digital Wallet',
  'Bank Transfer'
]

const staffMembers = [
  'Sarah Johnson',
  'Mike Wilson',
  'Emily Davis',
  'James Brown',
  'Lisa Anderson'
]

export default function OrderEditPage() {
  const params = useParams()
  const router = useRouter()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    customerId: '',
    service: '',
    status: 'pending',
    priority: 'normal',
    orderDate: '',
    deliveryDate: '',
    pickupAddress: '',
    deliveryAddress: '',
    notes: '',
    paymentStatus: 'pending',
    paymentMethod: '',
    trackingId: '',
    estimatedTime: '',
    staffAssigned: '',
    specialInstructions: '',
    items: []
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = orderData[params.id] || orderData['ORD-001']
      setOrder(data)
      setFormData({
        customerId: data.customerId,
        service: data.service,
        status: data.status,
        priority: data.priority,
        orderDate: data.orderDate,
        deliveryDate: data.deliveryDate,
        pickupAddress: data.pickupAddress,
        deliveryAddress: data.deliveryAddress,
        notes: data.notes,
        paymentStatus: data.paymentStatus,
        paymentMethod: data.paymentMethod,
        trackingId: data.trackingId,
        estimatedTime: data.estimatedTime,
        staffAssigned: data.staffAssigned,
        specialInstructions: data.specialInstructions,
        items: data.items
      })
      setLoading(false)
    }, 500)
  }, [params.id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items]
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: field === 'quantity' || field === 'price' ? parseFloat(value) || 0 : value
    }
    setFormData(prev => ({
      ...prev,
      items: updatedItems
    }))
  }

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { id: Date.now(), name: '', quantity: 1, price: 0 }]
    }))
  }

  const removeItem = (index) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }))
  }

  const calculateTotal = () => {
    return formData.items.reduce((total, item) => {
      return total + (item.quantity * item.price)
    }, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      const response = await fetch(`/api/admin/orders/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          amount: calculateTotal() 
        })
      })
      
      if (response.ok) {
        const updatedOrder = await response.json()
        console.log('Order updated successfully:', updatedOrder)
        router.push(`/admin/orders/${params.id}`)
      } else {
        const error = await response.json()
        console.error('Failed to update order:', error)
        alert('Failed to update order. Please try again.')
      }
    } catch (error) {
      console.error('Error updating order:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setSaving(false)
    }
  }

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
            <h1 className="text-2xl font-bold text-gray-900">Edit Order</h1>
            <p className="text-gray-600">Update order information</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => router.push(`/admin/orders/${params.id}`)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer & Service Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer & Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Customer
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={formData.customerName}
                      readOnly
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {availableServices.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Order Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="orderDate"
                      value={formData.orderDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Order Items</h2>
                <button
                  type="button"
                  onClick={addItem}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Item
                </button>
              </div>
              <div className="space-y-3">
                {formData.items.map((item, index) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                    <input
                      type="text"
                      placeholder="Item name"
                      value={item.name}
                      onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="1"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={item.price}
                      onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                      className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                      step="0.01"
                    />
                <div className="w-24 text-sm font-medium text-gray-900">
                  ${(item.quantity * item.price).toFixed(2)}
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="p-2 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
            <span className="text-2xl font-bold text-gray-900">${calculateTotal().toFixed(2)}</span>
          </div>
        </div>

        {/* Addresses */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Addresses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <textarea
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Delivery Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <textarea
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Instructions
              </label>
              <textarea
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special handling instructions..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Internal Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Internal notes for staff..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Order Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Status</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="estimatedTime"
                  value={formData.estimatedTime}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 hours"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Assignment */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment & Assignment</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Status
              </label>
              <select
                name="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method}>{method}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Staff Assigned
              </label>
              <div className="relative">
                <Truck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  name="staffAssigned"
                  value={formData.staffAssigned}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Staff</option>
                  {staffMembers.map((staff) => (
                    <option key={staff} value={staff}>{staff}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tracking ID
              </label>
              <input
                type="text"
                name="trackingId"
                value={formData.trackingId}
                onChange={handleInputChange}
                placeholder="TRK123456"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
)
}
