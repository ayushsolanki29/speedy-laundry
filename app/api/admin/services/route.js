import { NextResponse } from 'next/server'

// Mock services data
const services = [
  {
    id: 1,
    name: 'Wash & Fold',
    description: 'Professional washing and folding service for everyday clothes',
    category: 'Laundry',
    price: '25.00',
    duration: '24 hours',
    popularity: 'high',
    status: 'active',
    features: ['Eco-friendly detergent', 'Fabric softener', 'Folding service'],
    ordersCount: 456,
    revenue: 11400,
    rating: 4.8,
    createdAt: '2023-01-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'Dry Cleaning',
    description: 'Professional dry cleaning for delicate and formal wear',
    category: 'Dry Cleaning',
    price: '45.00',
    duration: '48 hours',
    popularity: 'high',
    status: 'active',
    features: ['Stain removal', 'Pressing', 'Garment bag'],
    ordersCount: 234,
    revenue: 10530,
    rating: 4.9,
    createdAt: '2023-01-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 3,
    name: 'Express Service',
    description: 'Same-day laundry service for urgent needs',
    category: 'Express',
    price: '35.00',
    duration: '6 hours',
    popularity: 'medium',
    status: 'active',
    features: ['Priority processing', 'Same-day delivery', 'SMS updates'],
    ordersCount: 123,
    revenue: 4305,
    rating: 4.7,
    createdAt: '2023-02-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 4,
    name: 'Wash & Iron',
    description: 'Complete washing and ironing service for crisp clothes',
    category: 'Laundry',
    price: '30.00',
    duration: '24 hours',
    popularity: 'medium',
    status: 'active',
    features: ['Washing', 'Ironing', 'Hanging service'],
    ordersCount: 189,
    revenue: 5670,
    rating: 4.6,
    createdAt: '2023-03-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 5,
    name: 'Delicate Care',
    description: 'Specialized care for delicate fabrics and expensive clothing',
    category: 'Specialty',
    price: '55.00',
    duration: '72 hours',
    popularity: 'low',
    status: 'inactive',
    features: ['Hand washing', 'Special detergents', 'Extra care'],
    ordersCount: 45,
    revenue: 2475,
    rating: 4.9,
    createdAt: '2023-04-01',
    updatedAt: '2024-01-15'
  },
  {
    id: 6,
    name: 'Commercial Laundry',
    description: 'Bulk laundry service for businesses and hotels',
    category: 'Commercial',
    price: '120.00',
    duration: '48 hours',
    popularity: 'medium',
    status: 'active',
    features: ['Bulk pricing', 'Regular pickup', 'Invoice billing'],
    ordersCount: 67,
    revenue: 8040,
    rating: 4.5,
    createdAt: '2023-05-01',
    updatedAt: '2024-01-15'
  }
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || 'all'
    const status = searchParams.get('status') || 'all'

    // Filter services based on search, category, and status
    let filteredServices = services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(search.toLowerCase()) ||
                           service.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'all' || service.category === category
      const matchesStatus = status === 'all' || service.status === status
      return matchesSearch && matchesCategory && matchesStatus
    })

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedServices = filteredServices.slice(startIndex, endIndex)

    return NextResponse.json({
      services: paginatedServices,
      pagination: {
        page,
        limit,
        total: filteredServices.length,
        pages: Math.ceil(filteredServices.length / limit)
      },
      stats: {
        total: services.length,
        active: services.filter(s => s.status === 'active').length,
        inactive: services.filter(s => s.status === 'inactive').length,
        totalRevenue: services.reduce((sum, service) => sum + service.revenue, 0),
        avgPrice: services.reduce((sum, service) => sum + service.price, 0) / services.length
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.description || !body.category || !body.price) {
      return NextResponse.json({ error: 'Missing required fields: name, description, category, or price' }, { status: 400 })
    }

    // Create new service with proper data structure
    const newService = {
      id: services.length + 1,
      name: body.name,
      description: body.description,
      category: body.category,
      price: parseFloat(body.price) || 0,
      duration: body.duration || '',
      popularity: body.popularity || 'medium',
      status: body.status || 'active',
      features: body.features || [],
      ordersCount: 0,
      revenue: 0,
      rating: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      image: body.image || '/api/placeholder/300/200',
      tags: body.tags || [],
      minItems: body.minItems || 1,
      maxItems: body.maxItems || 100,
      pricePerItem: parseFloat(body.pricePerItem) || 0
    }

    // In a real app, this would save to database
    services.push(newService)

    return NextResponse.json(newService, { status: 201 })
  } catch (error) {
    console.error('Error creating service:', error)
    return NextResponse.json({ error: 'Failed to create service: ' + error.message }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    const serviceIndex = services.findIndex(service => service.id === id)
    if (serviceIndex === -1) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    // Update service with proper validation
    const updatedService = { 
      ...services[serviceIndex], 
      ...updateData,
      updatedAt: new Date().toISOString().split('T')[0]
    }

    services[serviceIndex] = updatedService

    return NextResponse.json(updatedService)
  } catch (error) {
    console.error('Error updating service:', error)
    return NextResponse.json({ error: 'Failed to update service: ' + error.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get('id'))

    const serviceIndex = services.findIndex(service => service.id === id)
    if (serviceIndex === -1) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 })
    }

    // Delete service (in real app, would soft delete for data integrity)
    services.splice(serviceIndex, 1)

    return NextResponse.json({ message: 'Service deleted successfully' })
  } catch (error) {
    console.error('Error deleting service:', error)
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 })
  }
}
