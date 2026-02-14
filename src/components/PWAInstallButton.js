'use client'

import { useState, useEffect } from 'react'
import { Smartphone, Download } from 'lucide-react'

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showButton, setShowButton] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowButton(true)
    }
    window.addEventListener('beforeinstallprompt', handler)

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setShowButton(false)
    }
  }

  if (!showButton || isInstalled) return null

  return (
    <button
      onClick={handleInstall}
      className="p-2.5 text-slate-400 hover:text-primary transition-all flex items-center gap-2"
      title="Install app"
    >
      <Smartphone className="w-5 h-5" />
      <span className="hidden sm:inline text-xs font-medium">Install App</span>
    </button>
  )
}
