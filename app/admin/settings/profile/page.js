'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Save, Loader2, ArrowLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'

export default function AdminProfilePage() {
    const [profile, setProfile] = useState({ username: '', email: '', role: '' })
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('adminToken')
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin-profile.php`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            const data = await res.json()
            if (data.status === 'success' && data.data) {
                setProfile(data.data)
            } else if (res.status === 401) {
                toast.error('Session expired. Please log in again.')
                window.location.href = '/admin/login'
            } else {
                toast.error(data.message || 'Failed to load profile')
            }
        } catch (error) {
            toast.error('Failed to load profile')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        if (newPassword && newPassword !== confirmPassword) {
            toast.error('New passwords do not match')
            return
        }
        if (newPassword && newPassword.length < 6) {
            toast.error('Password must be at least 6 characters')
            return
        }
        setIsSaving(true)
        try {
            const token = localStorage.getItem('adminToken')
            const body = {
                username: profile.username,
                email: profile.email
            }
            if (newPassword) {
                body.password = newPassword
                body.current_password = currentPassword
            }
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin-profile.php`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(body)
            })
            const data = await res.json()
            if (data.status === 'success') {
                toast.success('Profile updated successfully')
                setCurrentPassword('')
                setNewPassword('')
                setConfirmPassword('')
                if (newPassword) {
                    localStorage.setItem('adminUser', JSON.stringify({ ...profile, username: body.username, email: body.email }))
                }
            } else {
                toast.error(data.message || 'Failed to update')
            }
        } catch (error) {
            toast.error('Failed to update profile')
        } finally {
            setIsSaving(false)
        }
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh]">
                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">Loading profile...</p>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/admin/settings" className="p-2 text-slate-500 hover:text-primary transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold font-display text-foreground">Admin Profile</h1>
                    <p className="text-muted-foreground text-sm">Update your account details</p>
                </div>
            </div>

            <form onSubmit={handleSave} className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 space-y-6">
                <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1">Username</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            value={profile.username || ''}
                            onChange={(e) => setProfile(p => ({ ...p, username: e.target.value }))}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="Username"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="email"
                            value={profile.email || ''}
                            onChange={(e) => setProfile(p => ({ ...p, email: e.target.value }))}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            placeholder="admin@example.com"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-muted-foreground mb-1">Role</label>
                    <p className="px-4 py-2 bg-slate-100 rounded-xl text-sm font-medium capitalize">{profile.role?.replace('_', ' ') || '-'}</p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-bold mb-3">Change Password</h4>
                    <p className="text-xs text-muted-foreground mb-4">Leave blank to keep current password</p>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Current Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    placeholder="Current password"
                                />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">New Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="New password"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-muted-foreground mb-1">Confirm New Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end pt-4 gap-3">
                    <Link href="/admin/settings" className="px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors font-medium">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isSaving || (newPassword && !currentPassword)}
                        className="btn-primary px-8 py-3 rounded-xl flex items-center gap-2 disabled:opacity-60"
                    >
                        {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}
