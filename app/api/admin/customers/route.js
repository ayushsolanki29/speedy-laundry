import { NextResponse } from 'next/server'

// Mock customer data
const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    joinDate: '2023-01-15',
    totalOrders: 24,
    totalSpent: 1245.00,
    status: 'active',
    lastOrderDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '+1 (555) 234-5678',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    joinDate: '2023-02-20',
    totalOrders: 18,
    totalSpent: 890.00,
    status: 'active',
    lastOrderDate: '2024-01-14'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@email.com',
    phone: '+1 (555) 345-6789',
    address: '789 Pine Rd, Chicago, IL 60601',
    joinDate: '2023-03-10',
    totalOrders: 31,
    totalSpent: 1567.00,
    status: 'active',
    lastOrderDate: '2024-01-13'
  }
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || 'all'

    // Filter customers based on search and status
    let filteredCustomers = customers.filter(customer => {
      const matchesSearch = customer.name.toLowerCase().includes(search.toLowerCase()) ||
                           customer.email.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = status === 'all' || customer.status === status
      return matchesSearch && matchesStatus
    })

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedCustomers = filteredCustomers.slice(startIndex, endIndex)

    return NextResponse.json({
      customers: paginatedCustomers,
      pagination: {
        page,
        limit,
        total: filteredCustomers.length,
        pages: Math.ceil(filteredCustomers.length / limit)
      },
      stats: {
        total: customers.length,
        active: customers.filter(c => c.status === 'active').length,
        inactive: customers.filter(c => c.status === 'inactive').length,
        newThisMonth: 5
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create new customer with proper data structure
    const newCustomer = {
      id: customers.length + 1,
      name: body.name,
      email: body.email,
      phone: body.phone,
      address: body.address || '',
      joinDate: new Date().toISOString().split('T')[0],
      totalOrders: 0,
      totalSpent: 0.00,
      status: body.status || 'active',
      lastOrderDate: null,
      membershipTier: body.membershipTier || 'Bronze',
      loyaltyPoints: body.loyaltyPoints || 0,
      notes: body.notes || '',
      preferredServices: body.preferredServices || []
    }

    // In a real app, this would save to database
    customers.push(newCustomer)

    return NextResponse.json(newCustomer, { status: 201 })
  } catch (error) {
    console.error('Error creating customer:', error)
    return NextResponse.json({ error: 'Failed to create customer' }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    const customerIndex = customers.findIndex(customer => customer.id === id)
    if (customerIndex === -1) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
    }

    // Update customer
    customers[customerIndex] = { ...customers[customerIndex], ...updateData }

    return NextResponse.json(customers[customerIndex])
  } catch (error) {
    console.error('Error updating customer:', error)
    return NextResponse.json({ error: 'Failed to update customer' }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = parseInt(searchParams.get('id'))

    const customerIndex = customers.findIndex(customer => customer.id === id)
    if (customerIndex === -1) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
    }

    // Delete customer (in real app, would soft delete for data integrity)
    customers.splice(customerIndex, 1)

    return NextResponse.json({ message: 'Customer deleted successfully' })
  } catch (error) {
    console.error('Error deleting customer:', error)
    return NextResponse.json({ error: 'Failed to delete customer' }, { status: 500 })
  }
}
