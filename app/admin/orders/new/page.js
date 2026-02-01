'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
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
  Truck,
  Search
} from 'lucide-react'

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

// Mock customers data
const mockCustomers = [
  { id: 1, name: 'John Doe', email: 'john.doe@email.com', phone: '+1 (555) 123-4567' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@email.com', phone: '+1 (555) 234-5678' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@email.com', phone: '+1 (555) 345-6789' }
]

export default function AddOrderPage() {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [customerSearch, setCustomerSearch] = useState('')
  const [showCustomerResults, setShowCustomerResults] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [formData, setFormData] = useState({
    customerId: '',
    service: '',
    status: 'pending',
    priority: 'normal',
    orderDate: new Date().toISOString().split('T')[0],
    deliveryDate: '',
    pickupAddress: '',
    deliveryAddress: '',
    notes: '',
    paymentStatus: 'pending',
    paymentMethod: '',
    estimatedTime: '',
    staffAssigned: '',
    specialInstructions: '',
    items: [{ id: Date.now(), name: '', quantity: 1, price: 0 }]
  })

  const filteredCustomers = mockCustomers.filter(customer =>
    customer.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
    customer.email.toLowerCase().includes(customerSearch.toLowerCase())
  )

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer)
    setFormData(prev => ({
      ...prev,
      customerId: customer.id,
      pickupAddress: `123 Main St, New York, NY 10001`, // Mock address
      deliveryAddress: `123 Main St, New York, NY 10001` // Mock address
    }))
    setCustomerSearch('')
    setShowCustomerResults(false)
  }

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
    if (formData.items.length > 1) {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter((_, i) => i !== index)
      }))
    }
  }

  const calculateTotal = () => {
    return formData.items.reduce((total, item) => {
      return total + (item.quantity * item.price)
    }, 0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    
    // Validate that a customer is selected
    if (!selectedCustomer) {
      alert('Please select a customer before creating an order.')
      setSaving(false)
      return
    }

    // Validate that there are items in the order
    if (!formData.items || formData.items.length === 0) {
      alert('Please add at least one item to the order.')
      setSaving(false)
      return
    }

    try {
      const response = await fetch('/api/admin/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          amount: calculateTotal(),
          customerName: selectedCustomer.name,
          customerEmail: selectedCustomer.email,
          customerPhone: selectedCustomer.phone
        })
      })
      
      if (response.ok) {
        const newOrder = await response.json()
        console.log('Order created successfully:', newOrder)
        alert('Order created successfully!')
        router.push('/admin/orders')
      } else {
        const error = await response.json()
        console.error('Failed to create order:', error)
        alert('Failed to create order: ' + (error.error || 'Unknown error'))
      }
    } catch (error) {
      console.error('Error creating order:', error)
      alert('An error occurred while creating the order. Please try again.')
    } finally {
      setSaving(false)
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
            <h1 className="text-2xl font-bold text-gray-900">Create New Order</h1>
            <p className="text-gray-600">Add a new customer order</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => router.push('/admin/orders')}
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
                Creating...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Create Order
              </>
            )}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h2>
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Customer *
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={customerSearch}
                      onChange={(e) => {
                        setCustomerSearch(e.target.value)
                        setShowCustomerResults(true)
                      }}
                      onFocus={() => setShowCustomerResults(true)}
                      placeholder="Search by name or email..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  {/* Customer Search Results */}
                  {showCustomerResults && customerSearch && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer) => (
                          <div
                            key={customer.id}
                            onClick={() => handleCustomerSelect(customer)}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-medium text-gray-900">{customer.name}</div>
                            <div className="text-sm text-gray-500">{customer.email}</div>
                            <div className="text-sm text-gray-500">{customer.phone}</div>
                          </div>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-gray-500">No customers found</div>
                      )}
                    </div>
                  )}
                </div>

                {selectedCustomer && (
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-green-900">Selected Customer</p>
                        <p className="text-green-700">{selectedCustomer.name}</p>
                        <p className="text-sm text-green-600">{selectedCustomer.email}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCustomer(null)
                          setFormData(prev => ({ ...prev, customerId: '' }))
                        }}
                        className="text-green-600 hover:text-green-800"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Service & Schedule */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Service & Schedule</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service *
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a service</option>
                      {availableServices.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
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
                    Order Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="orderDate"
                      value={formData.orderDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
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
                      required
                    />
                    <input
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                      className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="1"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={item.price}
                      onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                      className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                      step="0.01"
                      required
                    />
                    <div className="w-24 text-sm font-medium text-gray-900">
                      ${(item.quantity * item.price).toFixed(2)}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      disabled={formData.items.length === 1}
                      className="p-2 text-red-600 hover:text-red-800 disabled:opacity-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4">
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
                    Pickup Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <textarea
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter pickup address..."
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <textarea
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter delivery address..."
                      required
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
                    <option value="">Select method</option>
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
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Items:</span>
                  <span className="text-sm font-medium text-gray-900">{formData.items.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Quantity:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formData.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Amount:</span>
                  <span className="text-lg font-bold text-gray-900">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
