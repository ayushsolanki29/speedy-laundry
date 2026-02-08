'use client'

import { useState } from 'react'
import { Plus, Trash2, Edit2, Save } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function NotesPage() {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Upcoming Holiday', content: 'Closed on Bank Holiday Monday. Need to notify regular customers.', date: '2026-05-01' },
        { id: 2, title: 'Supplier Change', content: 'Switching detergent supplier next month.', date: '2026-05-15' },
    ])
    const [newNote, setNewNote] = useState({ title: '', content: '' })
    const [isAdding, setIsAdding] = useState(false)

    const handleAddNote = () => {
        if (newNote.title.trim() === '') return
        setNotes([{ id: Date.now(), ...newNote, date: new Date().toISOString().split('T')[0] }, ...notes])
        setNewNote({ title: '', content: '' })
        setIsAdding(false)
    }

    const handleDelete = (id) => {
        setNotes(notes.filter(n => n.id !== id))
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">Admin Notes</h1>
                    <p className="text-muted-foreground">Keep track of important tasks and reminders.</p>
                </div>
                <button
                    onClick={() => setIsAdding(!isAdding)}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Add Note
                </button>
            </div>

            <AnimatePresence>
                {isAdding && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-border/50 mb-6">
                            <input
                                type="text"
                                placeholder="Title"
                                value={newNote.title}
                                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                                className="w-full text-lg font-bold mb-4 border-none focus:ring-0 px-0 placeholder:text-gray-300"
                            />
                            <textarea
                                placeholder="Write your note here..."
                                value={newNote.content}
                                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                                className="w-full min-h-[100px] border-none focus:ring-0 px-0 text-gray-600 resize-none placeholder:text-gray-300"
                            />
                            <div className="flex justify-end gap-3 mt-4">
                                <button onClick={() => setIsAdding(false)} className="text-sm font-bold text-gray-500 hover:text-foreground">Cancel</button>
                                <button onClick={handleAddNote} className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:brightness-110">Save Note</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid md:grid-cols-2 gap-4">
                {notes.map((note) => (
                    <motion.div
                        layout
                        key={note.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-yellow-50/50 p-6 rounded-3xl border border-yellow-100 hover:shadow-md transition-all group relative"
                    >
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                            <button className="p-2 bg-white rounded-full text-gray-400 hover:text-blue-500 shadow-sm"><Edit2 className="w-4 h-4" /></button>
                            <button onClick={() => handleDelete(note.id)} className="p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm"><Trash2 className="w-4 h-4" /></button>
                        </div>
                        <h3 className="font-bold text-lg text-gray-800 mb-2">{note.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{note.content}</p>
                        <div className="text-xs font-bold text-gray-400">{note.date}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
