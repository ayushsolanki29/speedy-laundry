'use client'

import { Save } from 'lucide-react'

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-display text-foreground">Settings</h1>
                <p className="text-muted-foreground">Manage general site settings and configurations.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 space-y-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">Footer Links</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Facebook URL" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" />
                        <input type="text" placeholder="Instagram URL" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" />
                        <input type="text" placeholder="Twitter URL" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" />
                        <input type="text" placeholder="LinkedIn URL" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" />
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                        <input type="email" placeholder="Contact Email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" />
                        <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3" />
                        <textarea placeholder="Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-24 resize-none" />
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button className="btn-primary px-8 py-3 rounded-xl flex items-center gap-2">
                        <Save className="w-5 h-5" />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
