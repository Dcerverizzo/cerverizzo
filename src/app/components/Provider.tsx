'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { LanguageProvider } from '@/contexts/LanguageContext'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {}
})

export function useTheme () {
  return useContext(ThemeContext)
}

interface Props {
  children: ReactNode
}

export default function Provider ({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme | null
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const resolved = saved ?? preferred
    setTheme(resolved)
    document.documentElement.setAttribute('data-theme', resolved)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('portfolio-theme', next)
      return next
    })
  }

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeContext.Provider>
  )
}
