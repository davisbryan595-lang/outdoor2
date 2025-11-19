'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="h-16 w-16 rounded-full border-4 border-primary border-t-secondary animate-spin" />
        <span className="text-primary font-bold text-xl tracking-widest">LOADING...</span>
      </div>
    </div>
  )
}
