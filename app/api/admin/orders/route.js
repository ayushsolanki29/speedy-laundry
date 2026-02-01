import { NextResponse } from 'next/server'

// Mock order data
const orders = [
  {
    id: 'ORD-001',
    customerId: 1,
    customerName: 'John Doe',
    customerEmail: 'john.doe@email.com',
    service: 'Wash & Fold',
    items: 15,
    amount: 25.00,
    status: 'completed',
    priority: 'normal',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-17',
    address: '123 Main St, New York, NY 10001',
    notes: 'Customer requested delicate cycle for some items',
    paymentStatus: 'paid',
    trackingId: 'TRK001234'
  },
  {
    id: 'ORD-002',
    customerId: 2,
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@email.com',
    service: 'Dry Cleaning',
    items: 8,
    amount: 45.00,
    status: 'in-progress',
    priority: 'high',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-18',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    notes: 'Expensive suits - handle with care',
    paymentStatus: 'paid',
    trackingId: 'TRK001235'
  },
  {
    id: 'ORD-003',
    customerId: 3,
    customerName: 'Bob Johnson',
    customerEmail: 'bob.johnson@email.com',
    service: 'Express Service',
    items: 12,
    amount: 35.00,
    status: 'pending',
    priority: 'urgent',
    orderDate: '2024-01-14',
    deliveryDate: '2024-01-16',
    address: '789 Pine Rd, Chicago, IL 60601',
    notes: 'Customer needs by tomorrow - express delivery',
    paymentStatus: 'pending',
    trackingId: null
  }
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || 'all'
    const priority = searchParams.get('priority') || 'all'

    // Filter orders based on search, status, and priority
    let filteredOrders = orders.filter(order => {
      const matchesSearch = order.id.toLowerCase().includes(search.toLowerCase()) ||
                           order.customerName.toLowerCase().includes(search.toLowerCase()) ||
                           order.customerEmail.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = status === 'all' || order.status === status
      const matchesPriority = priority === 'all' || order.priority === priority
      return matchesSearch && matchesStatus && matchesPriority
    })

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex)

    return NextResponse.json({
      orders: paginatedOrders,
      pagination: {
        page,
        limit,
        total: filteredOrders.length,
        pages: Math.ceil(filteredOrders.length / limit)
      },
      stats: {
        total: orders.length,
        pending: orders.filter(o => o.status === 'pending').length,
        inProgress: orders.filter(o => o.status === 'in-progress').length,
        completed: orders.filter(o => o.status === 'completed').length,
        cancelled: orders.filter(o => o.status === 'cancelled').length,
        totalRevenue: orders.reduce((sum, order) => sum + order.amount, 0)
      }
    })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.customerId || !body.service || !body.items) {
      return NextResponse.json({ error: 'Missing required fields: customerId, service, or items' }, { status: 400 })
    }

    // Validate items array
    if (!Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json({ error: 'Items must be a non-empty array' }, { status: 400 })
    }

    // Validate each item has required fields
    for (const item of body.items) {
      if (!item.name || !item.quantity || !item.price) {
        return NextResponse.json({ error: 'Each item must have name, quantity, and price' }, { status: 400 })
      }
    }

    // Create new order with proper data structure
    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      customerId: body.customerId,
      customerName: body.customerName || `Customer ${body.customerId}`,
      customerEmail: body.customerEmail || `customer${body.customerId}@email.com`,
      customerPhone: body.customerPhone || '',
      service: body.service,
      items: body.items,
      amount: body.amount || 0,
      status: 'pending',
      priority: body.priority || 'normal',
      orderDate: new Date().toISOString().split('T')[0],
      deliveryDate: body.deliveryDate || '',
      pickupAddress: body.pickupAddress || '',
      deliveryAddress: body.deliveryAddress || '',
      notes: body.notes || '',
      paymentStatus: body.paymentStatus || 'pending',
      paymentMethod: body.paymentMethod || '',
      trackingId: null,
      estimatedTime: body.estimatedTime || '',
      staffAssigned: body.staffAssigned || '',
      specialInstructions: body.specialInstructions || ''
    }

    // In a real app, this would save to database
    orders.push(newOrder)

    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json({ error: 'Failed to create order: ' + error.message }, { status: 500 })
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    const orderIndex = orders.findIndex(order => order.id === id)
    if (orderIndex === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    // Update order with proper validation
    const updatedOrder = { 
      ...orders[orderIndex], 
      ...updateData,
      // Recalculate amount if items are updated
      amount: updateData.items ? updateData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0) : orders[orderIndex].amount
    }

    orders[orderIndex] = updatedOrder

    return NextResponse.json(updatedOrder)
  } catch (error) {
    console.error('Error updating order:', error)
    return NextResponse.json({ error: 'Failed to update order: ' + error.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const orderIndex = orders.findIndex(order => order.id === id)
    if (orderIndex === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    // Delete order (in real app, would soft delete for data integrity)
    orders.splice(orderIndex, 1)

    return NextResponse.json({ message: 'Order deleted successfully' })
  } catch (error) {
    console.error('Error deleting order:', error)
    return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 })
  }
}
