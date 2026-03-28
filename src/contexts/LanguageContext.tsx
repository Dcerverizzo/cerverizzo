'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Lang } from '@/content/translations'

type Translations = typeof translations[Lang]

interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider ({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pt')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Lang | null
    const detected = navigator.language.startsWith('pt') ? 'pt' : 'en'
    setLang(saved ?? detected)
  }, [])

  const toggleLang = () => {
    setLang(prev => {
      const next: Lang = prev === 'pt' ? 'en' : 'pt'
      localStorage.setItem('portfolio-lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation () {
  const ctx = useContext(LanguageContext)
  if (ctx === null) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
