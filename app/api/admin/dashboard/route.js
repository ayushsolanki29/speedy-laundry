import { NextResponse } from 'next/server'

// Import the real data arrays from other APIs
// In a real app, these would come from a database
const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, New York, NY 10001',
    joinDate: '2023-01-15',
    totalOrders: 24,
    totalSpent: '$1,245.00',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '+1 (555) 234-5678',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    joinDate: '2023-02-20',
    totalOrders: 18,
    totalSpent: '$890.00',
    status: 'active'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob.johnson@email.com',
    phone: '+1 (555) 345-6789',
    address: '789 Pine Rd, Chicago, IL 60601',
    joinDate: '2023-03-10',
    totalOrders: 31,
    totalSpent: '$1,567.00',
    status: 'active'
  }
]

const orders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    customerEmail: 'john.doe@email.com',
    service: 'Wash & Fold',
    items: 15,
    amount: 25.00,
    status: 'completed',
    priority: 'normal',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-17',
    address: '123 Main St, New York, NY 10001',
    notes: 'Customer requested delicate cycle for some items'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    customerEmail: 'jane.smith@email.com',
    service: 'Dry Cleaning',
    items: 8,
    amount: 45.00,
    status: 'in-progress',
    priority: 'high',
    orderDate: '2024-01-15',
    deliveryDate: '2024-01-18',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    notes: 'Expensive suits - handle with care'
  },
  {
    id: 'ORD-003',
    customer: 'Bob Johnson',
    customerEmail: 'bob.johnson@email.com',
    service: 'Express Service',
    items: 12,
    amount: 35.00,
    status: 'pending',
    priority: 'urgent',
    orderDate: '2024-01-14',
    deliveryDate: '2024-01-16',
    address: '789 Pine Rd, Chicago, IL 60601',
    notes: 'Customer needs by tomorrow - express delivery'
  }
]

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
    ordersCount: 456,
    revenue: 11400,
    rating: 4.8
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
    ordersCount: 234,
    revenue: 10530,
    rating: 4.9
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
    ordersCount: 123,
    revenue: 4305,
    rating: 4.7
  }
]

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const period = searchParams.get('period') || 'month'

    // Calculate real stats from data
    const totalCustomers = customers.length
    const activeCustomers = customers.filter(c => c.status === 'active').length
    const totalOrders = orders.length
    const activeOrders = orders.filter(o => o.status === 'in-progress').length
    const completedOrders = orders.filter(o => o.status === 'completed').length
    const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0)
    const totalServices = services.length

    // Calculate revenue by service
    const serviceRevenue = {}
    orders.forEach(order => {
      if (!serviceRevenue[order.service]) {
        serviceRevenue[order.service] = 0
      }
      serviceRevenue[order.service] += order.amount
    })

    const topServices = Object.entries(serviceRevenue)
      .map(([name, revenue]) => ({
        name,
        revenue,
        percentage: (revenue / totalRevenue * 100).toFixed(1)
      }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 4)

    // Generate revenue chart data
    const revenueChart = [
      { month: 'Jan', revenue: 8500, orders: 180 },
      { month: 'Feb', revenue: 9200, orders: 195 },
      { month: 'Mar', revenue: 8800, orders: 187 },
      { month: 'Apr', revenue: 10200, orders: 215 },
      { month: 'May', revenue: 11500, orders: 242 },
      { month: 'Jun', revenue: 10800, orders: 228 }
    ]

    return NextResponse.json({
      overview: {
        totalCustomers,
        activeCustomers,
        totalOrders,
        activeOrders,
        completedOrders,
        totalRevenue,
        totalServices,
        changes: {
          customers: '+12.3%',
          orders: '+5.2%',
          revenue: '+18.7%',
          services: '0%'
        }
      },
      recentOrders: orders.slice(0, 5).map(order => ({
        id: order.id,
        customer: order.customer,
        service: order.service,
        status: order.status,
        amount: order.amount,
        date: order.orderDate
      })),
      revenueChart,
      topServices,
      period,
      lastUpdated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 })
  }
}
