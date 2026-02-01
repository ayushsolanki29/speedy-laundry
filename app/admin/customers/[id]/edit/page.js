'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft,
  Save,
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  ShoppingBag
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

const availableServices = [
  'Wash & Fold',
  'Dry Cleaning',
  'Express Service',
  'Wash & Iron',
  'Delicate Care',
  'Commercial Laundry'
]

const membershipTiers = ['Bronze', 'Silver', 'Gold', 'Platinum']

export default function CustomerEditPage() {
  const params = useParams()
  const router = useRouter()
  const [customer, setCustomer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    status: 'active',
    membershipTier: 'Bronze',
    loyaltyPoints: 0,
    notes: '',
    preferredServices: []
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = customerData[params.id] || customerData[1]
      setCustomer(data)
      setFormData({
        name: data.name,
        email: data.email,
        phone: data.phone,
        address: data.address,
        status: data.status,
        membershipTier: data.membershipTier,
        loyaltyPoints: data.loyaltyPoints,
        notes: data.notes,
        preferredServices: data.preferredServices
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

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      preferredServices: prev.preferredServices.includes(service)
        ? prev.preferredServices.filter(s => s !== service)
        : [...prev.preferredServices, service]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      const response = await fetch(`/api/admin/customers/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        const updatedCustomer = await response.json()
        console.log('Customer updated successfully:', updatedCustomer)
        router.push(`/admin/customers/${params.id}`)
      } else {
        // Check if response is HTML (error page) instead of JSON
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('text/html')) {
          console.log('API endpoint not found, using mock mode')
          // Simulate successful update
          setTimeout(() => {
            alert('Customer updated successfully (mock mode)')
            router.push(`/admin/customers/${params.id}`)
          }, 1000)
          return
        }
        
        const error = await response.json()
        console.error('Failed to update customer:', error)
        alert('Failed to update customer. Please try again.')
      }
    } catch (error) {
      console.error('Error updating customer:', error)
      
      // Fallback to mock update if API doesn't exist
      if (error.message.includes('API endpoint not found') || error.message.includes('Failed to fetch')) {
        console.log('Using mock update - API not available')
        // Simulate successful update
        setTimeout(() => {
          alert('Customer updated successfully (mock mode)')
          router.push(`/admin/customers/${params.id}`)
        }, 1000)
      } else {
        alert('An error occurred. Please try again.')
      }
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

  if (!customer) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Customer not found</p>
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
            <h1 className="text-2xl font-bold text-gray-900">Edit Customer</h1>
            <p className="text-gray-600">Update customer information</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => router.push(`/admin/customers/${params.id}`)}
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
          {/* Basic Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Services
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {availableServices.map((service) => (
                      <label key={service} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.preferredServices.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add any notes about this customer..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status & Membership */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Status & Membership</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="suspended">Suspended</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Membership Tier
                  </label>
                  <select
                    name="membershipTier"
                    value={formData.membershipTier}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {membershipTiers.map((tier) => (
                      <option key={tier} value={tier}>{tier}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loyalty Points
                  </label>
                  <div className="relative">
                    <ShoppingBag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="loyaltyPoints"
                      value={formData.loyaltyPoints}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Orders</span>
                  <span className="text-sm font-medium text-gray-900">{customer.totalOrders}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Spent</span>
                  <span className="text-sm font-medium text-gray-900">${customer.totalSpent.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Avg Order Value</span>
                  <span className="text-sm font-medium text-gray-900">${customer.averageOrderValue.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Join Date</span>
                  <span className="text-sm font-medium text-gray-900">{customer.joinDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
