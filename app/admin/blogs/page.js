'use client'

import { Plus, Edit2, Eye, Trash2 } from 'lucide-react'
import Image from 'next/image'

export default function BlogsPage() {
    const blogs = [
        { id: 1, title: 'Top 5 Laundry Tips', category: 'Tips', status: 'Published', image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&h=400&fit=crop' },
        { id: 2, title: 'Eco-Friendly Cleaning', category: 'News', status: 'Draft', image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop' },
    ]

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">Blog Management</h1>
                    <p className="text-muted-foreground">Manage your website's news and articles.</p>
                </div>
                <button className="btn-primary flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Create Post
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border/50 group">
                        <div className="relative h-48 bg-gray-100">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                {blog.category}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-foreground mb-2">{blog.title}</h3>
                            <div className="flex items-center justify-between mt-4">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${blog.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                    {blog.status}
                                </span>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Eye className="w-4 h-4" /></button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Edit2 className="w-4 h-4" /></button>
                                    <button className="p-2 hover:bg-red-50 rounded-full text-red-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
