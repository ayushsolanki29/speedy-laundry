'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const defaultSettings = {
  footer_facebook: 'https://facebook.com',
  footer_instagram: 'https://instagram.com',
  footer_twitter: '',
  footer_linkedin: '',
  contact_email: 'info@speedylaundry.co.uk',
  contact_phone: '01494 445291',
  contact_address: 'Abbey House, Lincoln Road\nCressex Business Park, High Wycombe\nBuckinghamshire, HP12 3RD',
  contact_hours: 'Mon – Thu: 6:00 AM – 3:00 PM\nFriday: 6:00 AM – 2:00 PM\nWeekends: Closed'
}

const SettingsContext = createContext(defaultSettings)

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(defaultSettings)
  const [loaded, setLoaded] = useState(false)

  const fetchSettings = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings.php`)
      const data = await res.json()
      if (data.status === 'success' && data.data && typeof data.data === 'object') {
        setSettings(prev => ({ ...defaultSettings, ...data.data }))
      }
    } catch (error) {
      console.error('Settings fetch error:', error)
    } finally {
      setLoaded(true)
    }
  }

  useEffect(() => {
    fetchSettings()
  }, [])

  const value = { ...defaultSettings, ...settings, loaded, refetchSettings: fetchSettings }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    return defaultSettings
  }
  return context
}
