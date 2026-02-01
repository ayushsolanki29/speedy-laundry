'use client'

import { useState } from 'react'
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Filter,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

const scheduleData = [
  {
    id: 1,
    customerName: 'John Doe',
    service: 'Wash & Fold',
    date: '2024-01-16',
    time: '09:00 AM',
    duration: '2 hours',
    address: '123 Main St, New York, NY 10001',
    status: 'scheduled',
    priority: 'normal',
    notes: 'Customer requested morning pickup',
    phone: '+1 (555) 123-4567',
    orderId: 'ORD-001'
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    service: 'Dry Cleaning',
    date: '2024-01-16',
    time: '11:30 AM',
    duration: '1 hour',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    status: 'in-progress',
    priority: 'high',
    notes: 'Expensive items - handle with care',
    phone: '+1 (555) 234-5678',
    orderId: 'ORD-002'
  },
  {
    id: 3,
    customerName: 'Bob Johnson',
    service: 'Express Service',
    date: '2024-01-16',
    time: '02:00 PM',
    duration: '30 minutes',
    address: '789 Pine Rd, Chicago, IL 60601',
    status: 'scheduled',
    priority: 'urgent',
    notes: 'Same-day delivery required',
    phone: '+1 (555) 345-6789',
    orderId: 'ORD-003'
  },
  {
    id: 4,
    customerName: 'Alice Brown',
    service: 'Wash & Iron',
    date: '2024-01-17',
    time: '10:00 AM',
    duration: '1.5 hours',
    address: '321 Elm St, Houston, TX 77001',
    status: 'scheduled',
    priority: 'normal',
    notes: 'Regular customer',
    phone: '+1 (555) 456-7890',
    orderId: 'ORD-004'
  },
  {
    id: 5,
    customerName: 'Charlie Wilson',
    service: 'Dry Cleaning',
    date: '2024-01-17',
    time: '01:00 PM',
    duration: '1 hour',
    address: '654 Maple Dr, Phoenix, AZ 85001',
    status: 'cancelled',
    priority: 'normal',
    notes: 'Customer cancelled due to emergency',
    phone: '+1 (555) 567-8901',
    orderId: 'ORD-005'
  }
]

const timeSlots = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM'
]

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [viewMode, setViewMode] = useState('list')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredSchedule = scheduleData.filter(item => {
    const matchesSearch = item.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus
    const matchesDate = item.date === selectedDate || viewMode === 'list'
    return matchesSearch && matchesStatus && matchesDate
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800'
      case 'high':
        return 'bg-orange-100 text-orange-800'
      case 'normal':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'scheduled':
        return <CalendarIcon className="w-4 h-4" />
      case 'in-progress':
        return <Clock className="w-4 h-4" />
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'cancelled':
        return <XCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const getScheduleForTimeSlot = (time) => {
    return filteredSchedule.filter(item => item.time === time)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
          <p className="text-gray-600">Manage pickups, deliveries, and appointments</p>
        </div>
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Schedule Appointment
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Appointments</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">12</p>
              <p className="text-sm text-green-600 mt-2">3 completed</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <CalendarIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">4</p>
              <p className="text-sm text-yellow-600 mt-2">Currently active</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">5</p>
              <p className="text-sm text-blue-600 mt-2">Upcoming</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Bell className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">47</p>
              <p className="text-sm text-green-600 mt-2">+8% from last week</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="scheduled">Scheduled</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-3 py-2 ${viewMode === 'calendar' ? 'bg-gray-100' : ''}`}
            >
              Calendar View
            </button>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      {viewMode === 'list' ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
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
                {filteredSchedule.map((appointment) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{appointment.time}</div>
                      <div className="text-sm text-gray-500">{appointment.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{appointment.customerName}</div>
                        <div className="text-sm text-gray-500">{appointment.phone}</div>
                        <div className="text-xs text-gray-400">{appointment.orderId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.service}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                        {appointment.address}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {appointment.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(appointment.priority)}`}>
                        {appointment.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {getStatusIcon(appointment.status)}
                        <span className="ml-1">{appointment.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
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
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
            {/* Time slots column */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-4">Time Slots</h3>
              <div className="space-y-2">
                {timeSlots.map((time) => (
                  <div key={time} className="text-sm font-medium text-gray-700 py-2 border-b">
                    {time}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Schedule grid */}
            <div className="lg:col-span-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Schedule for {selectedDate}
              </h3>
              <div className="space-y-2">
                {timeSlots.map((time) => {
                  const appointments = getScheduleForTimeSlot(time)
                  return (
                    <div key={time} className="flex gap-4 items-start py-2 border-b">
                      <div className="w-20 text-sm font-medium text-gray-700">
                        {time}
                      </div>
                      <div className="flex-1">
                        {appointments.length > 0 ? (
                          <div className="space-y-2">
                            {appointments.map((appointment) => (
                              <div key={appointment.id} className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center">
                                    <User className="w-4 h-4 mr-2 text-gray-400" />
                                    <span className="font-medium text-gray-900">
                                      {appointment.customerName}
                                    </span>
                                    <span className={`ml-2 px-2 py-1 text-xs rounded-full ${getPriorityColor(appointment.priority)}`}>
                                      {appointment.priority}
                                    </span>
                                  </div>
                                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                                    {getStatusIcon(appointment.status)}
                                    <span className="ml-1">{appointment.status}</span>
                                  </span>
                                </div>
                                <div className="text-sm text-gray-600">
                                  {appointment.service} • {appointment.duration}
                                </div>
                                <div className="text-sm text-gray-500 flex items-center mt-1">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {appointment.address}
                                </div>
                                {appointment.notes && (
                                  <div className="text-sm text-gray-500 mt-1 italic">
                                    Note: {appointment.notes}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-400 italic">Available</div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
