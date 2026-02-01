'use client'

import { useState } from 'react'
import { 
  Search, 
  Filter, 
  Plus, 
  Reply,
  Trash2,
  Star,
  Archive,
  Mail,
  MailOpen,
  Send,
  Paperclip,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  User,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    senderEmail: 'john.doe@email.com',
    subject: 'Question about express service',
    message: 'Hi, I was wondering if you offer same-day delivery for express service? I need some clothes cleaned urgently for tomorrow morning.',
    timestamp: '2024-01-15 09:30 AM',
    status: 'unread',
    priority: 'high',
    category: 'customer-inquiry',
    orderId: 'ORD-001',
    hasAttachment: false,
    isStarred: true
  },
  {
    id: 2,
    sender: 'Jane Smith',
    senderEmail: 'jane.smith@email.com',
    subject: 'Feedback on recent service',
    message: 'I wanted to thank you for the excellent service on my recent order. The clothes came back perfectly cleaned and folded. Will definitely use your service again!',
    timestamp: '2024-01-15 11:15 AM',
    status: 'read',
    priority: 'normal',
    category: 'feedback',
    orderId: 'ORD-002',
    hasAttachment: false,
    isStarred: false
  },
  {
    id: 3,
    sender: 'Bob Johnson',
    senderEmail: 'bob.johnson@email.com',
    subject: 'Issue with billing',
    message: 'I think there might be an error in my recent bill. I was charged for 15 items but I only gave you 12. Could you please check and rectify this?',
    timestamp: '2024-01-15 02:45 PM',
    status: 'unread',
    priority: 'high',
    category: 'billing',
    orderId: 'ORD-003',
    hasAttachment: true,
    isStarred: false
  },
  {
    id: 4,
    sender: 'System Notification',
    senderEmail: 'system@speedy.com',
    subject: 'New order received - ORD-004',
    message: 'A new order has been received from Alice Brown for Wash & Fold service. Order amount: $25.00. Please review and process.',
    timestamp: '2024-01-15 03:30 PM',
    status: 'read',
    priority: 'normal',
    category: 'system',
    orderId: 'ORD-004',
    hasAttachment: false,
    isStarred: false
  },
  {
    id: 5,
    sender: 'Charlie Wilson',
    senderEmail: 'charlie.wilson@email.com',
    subject: 'Cancellation request',
    message: 'I need to cancel my scheduled pickup for tomorrow due to an emergency. Please let me know about any cancellation fees and reschedule options.',
    timestamp: '2024-01-15 04:20 PM',
    status: 'unread',
    priority: 'urgent',
    category: 'cancellation',
    orderId: 'ORD-005',
    hasAttachment: false,
    isStarred: true
  },
  {
    id: 6,
    sender: 'Alice Brown',
    senderEmail: 'alice.brown@email.com',
    subject: 'Thank you for the service!',
    message: 'Just wanted to say thank you for the quick turnaround on my order. The quality was excellent and your staff was very professional.',
    timestamp: '2024-01-14 05:00 PM',
    status: 'read',
    priority: 'normal',
    category: 'feedback',
    orderId: 'ORD-004',
    hasAttachment: false,
    isStarred: false
  }
]

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showCompose, setShowCompose] = useState(false)
  const [replyText, setReplyText] = useState('')

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || message.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || message.status === selectedStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const getStatusColor = (status) => {
    return status === 'unread' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
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

  const getCategoryColor = (category) => {
    switch (category) {
      case 'customer-inquiry':
        return 'bg-blue-100 text-blue-800'
      case 'feedback':
        return 'bg-green-100 text-green-800'
      case 'billing':
        return 'bg-yellow-100 text-yellow-800'
      case 'cancellation':
        return 'bg-red-100 text-red-800'
      case 'system':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const unreadCount = messages.filter(m => m.status === 'unread').length

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between pb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Manage customer communications and support</p>
        </div>
        <button 
          onClick={() => setShowCompose(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Compose
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{messages.length}</p>
              <p className="text-sm text-gray-500 mt-2">This week</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unread</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{unreadCount}</p>
              <p className="text-sm text-red-600 mt-2">Need attention</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <MailOpen className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Urgent</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">2</p>
              <p className="text-sm text-orange-600 mt-2">High priority</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Response Time</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">2.5h</p>
              <p className="text-sm text-green-600 mt-2">Average</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search messages..."
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
            <option value="customer-inquiry">Customer Inquiry</option>
            <option value="feedback">Feedback</option>
            <option value="billing">Billing</option>
            <option value="cancellation">Cancellation</option>
            <option value="system">System</option>
          </select>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="bg-white rounded-lg shadow overflow-hidden flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
          {/* Message List */}
          <div className="lg:col-span-1 border-r border-gray-200 overflow-y-auto">
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 hover:bg-gray-50 cursor-pointer ${
                    selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                  } ${message.status === 'unread' ? 'bg-blue-50/30' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold text-sm">
                          {message.sender.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className={`text-sm font-medium text-gray-900 ${
                            message.status === 'unread' ? 'font-bold' : ''
                          }`}>
                            {message.sender}
                          </span>
                          {message.isStarred && (
                            <Star className="w-4 h-4 text-yellow-400 fill-current ml-2" />
                          )}
                        </div>
                        <span className="text-xs text-gray-500">{message.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-11">
                    <p className={`text-sm text-gray-900 mb-1 ${
                      message.status === 'unread' ? 'font-semibold' : ''
                    }`}>
                      {message.subject}
                    </p>
                    <p className="text-sm text-gray-600 truncate">{message.message}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(message.priority)}`}>
                        {message.priority}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(message.category)}`}>
                        {message.category}
                      </span>
                      {message.hasAttachment && (
                        <Paperclip className="w-3 h-3 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2 flex flex-col">
            {selectedMessage ? (
              <>
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-semibold">
                          {selectedMessage.sender.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{selectedMessage.sender}</h3>
                        <p className="text-sm text-gray-500">{selectedMessage.senderEmail}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Star className={`w-5 h-5 ${selectedMessage.isStarred ? 'text-yellow-400 fill-current' : ''}`} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Archive className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{selectedMessage.subject}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{selectedMessage.timestamp}</span>
                    {selectedMessage.orderId && (
                      <span>Order: {selectedMessage.orderId}</span>
                    )}
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(selectedMessage.priority)}`}>
                      {selectedMessage.priority}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(selectedMessage.category)}`}>
                      {selectedMessage.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                  
                  {selectedMessage.hasAttachment && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Paperclip className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-700">attachment.pdf</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Reply Section */}
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">A</span>
                    </div>
                    <div className="flex-1">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows={3}
                      />
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-600">
                            <Paperclip className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Save Draft
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                            <Send className="w-4 h-4 mr-2" />
                            Send Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Select a message to view</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
