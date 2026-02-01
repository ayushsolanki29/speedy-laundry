'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  Package,
  DollarSign,
  Clock,
  Tag,
  Star,
  Upload
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

const categories = [
  'Laundry',
  'Dry Cleaning',
  'Express',
  'Specialty',
  'Commercial'
]

const popularFeatures = [
  'Eco-friendly detergent',
  'Fabric softener',
  'Folding service',
  'Stain removal',
  'Pressing',
  'Garment bag',
  'Priority processing',
  'Same-day delivery',
  'SMS updates',
  'Hand washing',
  'Special detergents',
  'Extra care'
]

export default function ServiceEditPage() {
  const params = useParams()
  const router = useRouter()
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: 0,
    duration: '',
    popularity: 'medium',
    status: 'active',
    features: [],
    tags: [],
    minItems: 1,
    maxItems: 100,
    pricePerItem: 0
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const data = serviceData[params.id] || serviceData[1]
      setService(data)
      setFormData({
        name: data.name,
        description: data.description,
        category: data.category,
        price: data.price,
        duration: data.duration,
        popularity: data.popularity,
        status: data.status,
        features: data.features,
        tags: data.tags,
        minItems: data.minItems,
        maxItems: data.maxItems,
        pricePerItem: data.pricePerItem
      })
      setLoading(false)
    }, 500)
  }, [params.id])

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value
    }))
  }

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }))
  }

  const addCustomFeature = () => {
    const feature = prompt('Enter custom feature:')
    if (feature && feature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, feature.trim()]
      }))
    }
  }

  const removeFeature = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== feature)
    }))
  }

  const handleTagChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
    setFormData(prev => ({
      ...prev,
      tags
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      const response = await fetch(`/api/admin/services/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        const updatedService = await response.json()
        console.log('Service updated successfully:', updatedService)
        router.push(`/admin/services/${params.id}`)
      } else {
        const error = await response.json()
        console.error('Failed to update service:', error)
        alert('Failed to update service. Please try again.')
      }
    } catch (error) {
      console.error('Error updating service:', error)
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

  if (!service) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Service not found</p>
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
            <h1 className="text-2xl font-bold text-gray-900">Edit Service</h1>
            <p className="text-gray-600">Update service information</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => router.push(`/admin/services/${params.id}`)}
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
            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Name
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your service..."
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                        placeholder="e.g., 24 hours"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Base Price ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Per Item ($)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="pricePerItem"
                      value={formData.pricePerItem}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Items
                  </label>
                  <input
                    type="number"
                    name="minItems"
                    value={formData.minItems}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Items
                  </label>
                  <input
                    type="number"
                    name="maxItems"
                    value={formData.maxItems}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Features</h2>
                <button
                  type="button"
                  onClick={addCustomFeature}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center text-sm"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Custom
                </button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {popularFeatures.map((feature) => (
                    <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                </div>
                {formData.features.length > 0 && (
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.features.map((feature, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {feature}
                          <button
                            type="button"
                            onClick={() => removeFeature(feature)}
                            className="ml-2 text-blue-500 hover:text-blue-700"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Tags</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma separated)
                </label>
                <div className="relative">
                  <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={formData.tags.join(', ')}
                    onChange={handleTagChange}
                    placeholder="e.g., popular, eco-friendly, regular"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Separate multiple tags with commas</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status & Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Status & Settings</h2>
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
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Popularity
                  </label>
                  <select
                    name="popularity"
                    value={formData.popularity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Service Image</h2>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-2">Click to upload image</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer inline-block"
                  >
                    Choose File
                  </label>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Stats</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Orders</span>
                  <span className="text-sm font-medium text-gray-900">{service.ordersCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Revenue</span>
                  <span className="text-sm font-medium text-gray-900">${service.revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Created</span>
                  <span className="text-sm font-medium text-gray-900">{service.createdAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
