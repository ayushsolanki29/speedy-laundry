'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'

const revenueStats = [
  {
    title: 'Total Revenue',
    value: '$124,563',
    change: '+12.5%',
    changeType: 'increase',
    period: 'from last month',
    icon: DollarSign,
    color: 'bg-blue-500'
  },
  {
    title: 'Average Order Value',
    value: '$42.50',
    change: '+3.2%',
    changeType: 'increase',
    period: 'from last month',
    icon: CreditCard,
    color: 'bg-green-500'
  },
  {
    title: 'Monthly Recurring',
    value: '$8,432',
    change: '-2.1%',
    changeType: 'decrease',
    period: 'from last month',
    icon: Calendar,
    color: 'bg-purple-500'
  },
  {
    title: 'Growth Rate',
    value: '18.7%',
    change: '+5.4%',
    changeType: 'increase',
    period: 'from last quarter',
    icon: TrendingUp,
    color: 'bg-orange-500'
  }
]

const monthlyRevenue = [
  { month: 'Jan', revenue: 8500, orders: 180 },
  { month: 'Feb', revenue: 9200, orders: 195 },
  { month: 'Mar', revenue: 8800, orders: 187 },
  { month: 'Apr', revenue: 10200, orders: 215 },
  { month: 'May', revenue: 11500, orders: 242 },
  { month: 'Jun', revenue: 10800, orders: 228 },
  { month: 'Jul', revenue: 12300, orders: 260 },
  { month: 'Aug', revenue: 11900, orders: 251 },
  { month: 'Sep', revenue: 10500, orders: 221 },
  { month: 'Oct', revenue: 11200, orders: 236 },
  { month: 'Nov', revenue: 12800, orders: 270 },
  { month: 'Dec', revenue: 13500, orders: 285 }
]

const serviceRevenue = [
  { service: 'Wash & Fold', revenue: 45200, percentage: 36.3, color: 'bg-blue-500' },
  { service: 'Dry Cleaning', revenue: 38100, percentage: 30.6, color: 'bg-green-500' },
  { service: 'Express Service', revenue: 21500, percentage: 17.3, color: 'bg-yellow-500' },
  { service: 'Wash & Iron', revenue: 19800, percentage: 15.9, color: 'bg-purple-500' },
  { service: 'Other Services', revenue:  -  0, percentage: 0, color: 'bg-gray-500' }
]

const topCustomers = [
  { name: 'John Doe', revenue: '$2,450', orders: 98, growth: '+12%' },
  { name: 'Jane Smith', revenue: '$1,890', orders: 75, growth: '+8%' },
  { name: 'Bob Johnson', revenue: '$1,567', orders: 62, growth: '+15%' },
  { name: 'Alice Brown', revenue: '$1,234', orders: 49, growth: '+5%' },
  { name: 'Charlie Wilson', revenue: '$1,100', orders: 44, growth: '-3%' }
]

export default function RevenuePage() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedChart, setSelectedChart] = useState('revenue')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Revenue & Analytics</h1>
          <p className="text-gray-600">Track your business performance and financial metrics</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueStats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.changeType === 'increase' ? (
                    <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">{stat.period}</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Revenue Trend</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedChart('revenue')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  selectedChart === 'revenue' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <BarChart3 className="w-4 h-4 inline mr-1" />
                Revenue
              </button>
              <button
                onClick={() => setSelectedChart('orders')}
                className={`px-3 py-1 text-sm rounded-lg ${
                  selectedChart === 'orders' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Activity className="w-4 h-4 inline mr-1" />
                Orders
              </button>
            </div>
          </div>
          
          {/* Simple Bar Chart Visualization */}
          <div className="space-y-4">
            <div className="flex items-end justify-between h-48">
              {monthlyRevenue.slice(-6).map((month, index) => (
                <div key={month.month} className="flex-1 flex flex-col items-center">
                  <div className="w-full max-w-[40px] bg-blue-500 rounded-t" style={{ height: `${(month.revenue / 13500) * 100}%` }}></div>
                  <span className="text-xs text-gray-600 mt-2">{month.month}</span>
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-gray-600">
              Monthly Revenue (Last 6 months)
            </div>
          </div>
        </div>

        {/* Service Revenue Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Revenue by Service</h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="space-y-4">
            {serviceRevenue.filter(s => s.revenue > 0).map((service) => (
              <div key={service.service} className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <div className={`w-3 h-3 rounded-full ${service.color} mr-3`}></div>
                  <span className="text-sm font-medium text-gray-900">{service.service}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${service.color} h-2 rounded-full`} 
                      style={{ width: `${service.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-20 text-right">
                    ${service.revenue.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 w-12 text-right">
                    {service.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Customers Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Top Customers</h2>
          <p className="text-sm text-gray-600">Highest revenue generating customers this period</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Growth
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topCustomers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {customer.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {customer.revenue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${
                      customer.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {customer.growth}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {customer.growth.startsWith('+') ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Credit Card</span>
              <span className="text-sm font-medium text-gray-900">65%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Cash</span>
              <span className="text-sm font-medium text-gray-900">20%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Digital Wallet</span>
              <span className="text-sm font-medium text-gray-900">15%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Avg. Daily Revenue</span>
              <span className="text-sm font-medium text-gray-900">$4,152</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Peak Day</span>
              <span className="text-sm font-medium text-gray-900">Saturday</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="text-sm font-medium text-gray-900">3.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Forecast</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Next Month</span>
              <span className="text-sm font-medium text-green-600">$14,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Quarter Target</span>
              <span className="text-sm font-medium text-gray-900">$42,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Year Projection</span>
              <span className="text-sm font-medium text-blue-600">$168,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
