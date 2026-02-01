'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  Clock,
  DollarSign,
  TrendingUp,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Star,
  Copy
} from 'lucide-react'

export default function ServicesPage() {
  const router = useRouter()
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [viewMode, setViewMode] = useState('grid')

  // Fetch services from API
  useEffect(() => {
    fetchServices()
  }, [searchTerm, selectedCategory, selectedStatus])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        search: searchTerm,
        category: selectedCategory,
        status: selectedStatus
      })
      
      const response = await fetch(`/api/admin/services?${params}`)
      const data = await response.json()
      
      setServices(data.services || [])
    } catch (error) {
      console.error('Failed to fetch services:', error)
      // Only use mock data if API completely fails
      if (error.message && error.message.includes('Failed to fetch')) {
        setServices([
          {
            id: 1,
            name: 'Wash & Fold',
            description: 'Professional washing and folding service for everyday clothes',
            category: 'Laundry',
            price: '25.00',
            duration: '24 hours',
            popularity: 'high',
            status: 'active',
            ordersCount: 456,
            revenue: 11400,
            rating: 4.8
          }
        ])
      }
    } finally {
      setLoading(false)
    }
  }

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || service.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
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
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products & Services</h1>
          <p className="text-gray-600">Manage your service offerings and pricing</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Copy className="w-4 h-4 mr-2" />
            Duplicate
          </button>
          <button 
            onClick={() => router.push('/admin/services/new')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Services</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">12</p>
              <p className="text-sm text-green-600 mt-2">+2 new this month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Services</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">10</p>
              <p className="text-sm text-green-600 mt-2">83% active rate</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Price</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">$42.50</p>
              <p className="text-sm text-blue-600 mt-2">Per service</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">1,114</p>
              <p className="text-sm text-green-600 mt-2">This month</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="Laundry">Laundry</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
            <option value="Express">Express</option>
            <option value="Specialty">Specialty</option>
            <option value="Commercial">Commercial</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <Package className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{service.category}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium">${typeof service.price === 'string' ? parseFloat(service.price).toFixed(2) : service.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {renderStars(service.rating)}
                    <span className="text-sm text-gray-600 ml-2">({service.rating})</span>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPopularityColor(service.popularity)}`}>
                    {service.popularity}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <button 
                    onClick={() => router.push(`/admin/services/${service.id}`)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    <Eye className="w-4 h-4 inline mr-1" />
                    View
                  </button>
                  <button 
                    onClick={() => router.push(`/admin/services/${service.id}/edit`)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                  >
                    <Edit className="w-4 h-4 inline mr-1" />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
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
                {filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${typeof service.price === 'string' ? parseFloat(service.price).toFixed(2) : service.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.ordersCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${service.revenue.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {renderStars(service.rating)}
                        <span className="text-sm text-gray-600 ml-2">{service.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => router.push(`/admin/services/${service.id}`)}
                          className="text-blue-600 hover:text-blue-900"
                          title="View Service"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => router.push(`/admin/services/${service.id}/edit`)}
                          className="text-green-600 hover:text-green-900"
                          title="Edit Service"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900" title="Delete Service">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
