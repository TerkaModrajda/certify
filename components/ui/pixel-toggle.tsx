"use client"

import React from "react"

export default function PixelToggle() {
  const [enabled, setEnabled] = React.useState<boolean>(false)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('theme:pixel')
      const initial = stored === '1'
      setEnabled(initial)
      if (initial) document.documentElement.classList.add('pixel')
    } catch (e) {
      // ignore
    }
  }, [])

  const toggle = () => {
    const next = !enabled
    setEnabled(next)
    try {
      if (next) {
        document.documentElement.classList.add('pixel')
        localStorage.setItem('theme:pixel', '1')
      } else {
        document.documentElement.classList.remove('pixel')
        localStorage.setItem('theme:pixel', '0')
      }
    } catch (e) {
      // ignore
    }
  }

  return (
    <button
      type="button"
      aria-pressed={enabled}
      onClick={toggle}
      title={enabled ? 'Disable pixel theme' : 'Enable pixel theme'}
      className={`fixed bottom-4 right-4 z-50 p-3 rounded-md bg-white border border-slate-200 shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      <span style={{fontFamily: "'Press Start 2P', monospace, ui-monospace", fontSize: 11}}>{enabled ? 'PIXEL ON' : 'PIXEL OFF'}</span>
    </button>
  )
}
