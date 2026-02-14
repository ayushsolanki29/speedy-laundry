'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Save, Loader2, User, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { useSettings } from '@/context/SettingsContext'

const DEFAULT_SETTINGS = {
    footer_facebook: '',
    footer_instagram: '',
    footer_twitter: '',
    footer_linkedin: '',
    contact_email: 'info@speedylaundry.co.uk',
    contact_phone: '01494 445291',
    contact_address: 'Abbey House, Lincoln Road\nCressex Business Park, High Wycombe\nBuckinghamshire, HP12 3RD',
    contact_hours: 'Mon – Thu: 6:00 AM – 3:00 PM\nFriday: 6:00 AM – 2:00 PM\nWeekends: Closed'
}

export default function SettingsPage() {
    const { refetchSettings } = useSettings()
    const [settings, setSettings] = useState(DEFAULT_SETTINGS)
    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)

    const fetchSettings = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings.php`)
            const data = await res.json()
            if (data.status === 'success' && data.data) {
                setSettings(prev => ({ ...DEFAULT_SETTINGS, ...data.data }))
            }
        } catch (error) {
            toast.error('Failed to load settings')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchSettings()
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        setIsSaving(true)
        try {
            const token = localStorage.getItem('adminToken')
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings.php`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(settings)
            })
            const data = await res.json()
            if (data.status === 'success') {
                await refetchSettings?.()
                toast.success('Settings saved successfully. Footer and contact sections will update.')
            } else {
                toast.error(data.message || 'Failed to save')
            }
        } catch (error) {
            toast.error('Failed to save settings')
        } finally {
            setIsSaving(false)
        }
    }

    const update = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }))
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">Loading settings...</p>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-display text-foreground">Settings</h1>
                <p className="text-muted-foreground">Manage general site settings and configurations. These sync to the frontend.</p>
            </div>

            <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 space-y-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">Footer Links</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Facebook URL</label>
                            <input
                                type="url"
                                value={settings.footer_facebook || ''}
                                onChange={(e) => update('footer_facebook', e.target.value)}
                                placeholder="https://facebook.com/yourpage"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Instagram URL</label>
                            <input
                                type="url"
                                value={settings.footer_instagram || ''}
                                onChange={(e) => update('footer_instagram', e.target.value)}
                                placeholder="https://instagram.com/yourpage"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Twitter/X URL</label>
                            <input
                                type="url"
                                value={settings.footer_twitter || ''}
                                onChange={(e) => update('footer_twitter', e.target.value)}
                                placeholder="https://twitter.com/yourpage"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">LinkedIn URL</label>
                            <input
                                type="url"
                                value={settings.footer_linkedin || ''}
                                onChange={(e) => update('footer_linkedin', e.target.value)}
                                placeholder="https://linkedin.com/company/yourpage"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Email</label>
                            <input
                                type="email"
                                value={settings.contact_email || ''}
                                onChange={(e) => update('contact_email', e.target.value)}
                                placeholder="info@speedylaundry.co.uk"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Phone</label>
                            <input
                                type="tel"
                                value={settings.contact_phone || ''}
                                onChange={(e) => update('contact_phone', e.target.value)}
                                placeholder="01494 445291"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Address</label>
                            <textarea
                                value={settings.contact_address || ''}
                                onChange={(e) => update('contact_address', e.target.value)}
                                placeholder="Full address"
                                rows={4}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Opening Hours</label>
                            <textarea
                                value={settings.contact_hours || ''}
                                onChange={(e) => update('contact_hours', e.target.value)}
                                placeholder="Mon – Fri: 9AM – 5PM"
                                rows={3}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                            <p className="text-[10px] text-muted-foreground mt-1">Use new lines for multiple lines</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="btn-primary px-8 py-3 rounded-xl flex items-center gap-2 disabled:opacity-60"
                    >
                        {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                        Save Changes
                    </button>
                </div>
            </form>

            {/* Admin Profile */}
            <div className="mt-8 bg-white p-6 rounded-3xl shadow-sm border border-border/50">
                <h3 className="text-lg font-bold mb-2">Admin Profile</h3>
                <p className="text-sm text-muted-foreground mb-4">Update your username, email, and password.</p>
                <Link
                    href="/admin/settings/profile"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary/10 text-primary rounded-xl font-semibold hover:bg-primary/20 transition-colors"
                >
                    <User className="w-4 h-4" />
                    Manage Profile
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    )
}
