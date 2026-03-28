'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useTranslation } from '@/contexts/LanguageContext'
import { useTheme } from '@/app/components/Provider'

export default function Nav () {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang, toggleLang } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/blog', label: t.nav.blog },
    { href: '/resume', label: t.nav.resume }
  ]

  const sunIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )

  const moonIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )

  const sunIconSm = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )

  const moonIconSm = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 60) }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => { document.removeEventListener('keydown', handleKey) }
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        backgroundColor: scrolled ? 'var(--color-overlay)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`
      }}
    >
      <div
        className="container-editorial"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            letterSpacing: 'var(--tracking-wide)',
            textDecoration: 'none'
          }}
        >
          DC
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: '32px' }}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: pathname === link.href ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            aria-label="Change language"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'transparent',
              border: '1px solid var(--color-border-hover)',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '5px 10px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-text-secondary)',
              transition: 'border-color 0.2s ease'
            }}
          >
            <span style={{
              color: lang === 'pt' ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
              fontWeight: lang === 'pt' ? 700 : 400
            }}>PT</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span style={{
              color: lang === 'en' ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
              fontWeight: lang === 'en' ? 700 : 400
            }}>EN</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border-hover)',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              padding: '6px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              transition: 'border-color 0.2s ease, color 0.2s ease'
            }}
          >
            {theme === 'dark' ? sunIcon : moonIcon}
          </button>

          {/* Hire CTA */}
          <a
            href="https://linkedin.com/in/daniel-cerverizzo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)',
              textDecoration: 'none',
              border: '1px solid var(--color-accent-line)',
              padding: '8px 18px',
              borderRadius: 'var(--radius-sm)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-accent-primary)'
              e.currentTarget.style.color = 'var(--color-bg-base)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-accent-primary)'
            }}
          >
            {t.nav.hire}
          </a>
        </nav>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Lang toggle */}
          <button
            onClick={toggleLang}
            aria-label="Change language"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'transparent',
              border: '1px solid var(--color-border-hover)',
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '4px 8px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-text-secondary)'
            }}
          >
            <span style={{
              color: lang === 'pt' ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
              fontWeight: lang === 'pt' ? 700 : 400
            }}>PT</span>
            <span style={{ opacity: 0.3 }}>·</span>
            <span style={{
              color: lang === 'en' ? 'var(--color-accent-primary)' : 'var(--color-text-muted)',
              fontWeight: lang === 'en' ? 700 : 400
            }}>EN</span>
          </button>

          {/* Mobile Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            style={{
              background: 'transparent',
              border: '1px solid var(--color-border-hover)',
              cursor: 'pointer',
              color: 'var(--color-text-secondary)',
              padding: '5px',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '30px',
              height: '30px'
            }}
          >
            {theme === 'dark' ? sunIconSm : moonIconSm}
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col justify-center"
            onClick={() => { setMenuOpen(!menuOpen) }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-primary)',
              padding: '8px',
              gap: '5px',
              width: '40px',
              height: '40px'
            }}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span style={{
              display: 'block',
              width: '24px',
              height: '1.5px',
              backgroundColor: 'var(--color-text-primary)',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '1.5px',
              backgroundColor: 'var(--color-text-primary)',
              transition: 'all 0.3s ease',
              opacity: menuOpen ? 0 : 1
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '1.5px',
              backgroundColor: 'var(--color-text-primary)',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none'
            }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <div
        onClick={() => { setMenuOpen(false) }}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          zIndex: 98
        }}
      />

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--color-bg-surface)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          zIndex: 99
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => { setMenuOpen(false) }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              color: pathname === link.href ? 'var(--color-accent-primary)' : 'var(--color-text-primary)',
              textDecoration: 'none'
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://linkedin.com/in/daniel-cerverizzo"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => { setMenuOpen(false) }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            color: 'var(--color-accent-primary)',
            border: '1px solid var(--color-accent-line)',
            padding: '12px 40px',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none'
          }}
        >
          {t.nav.hire}
        </a>
      </div>
    </header>
  )
}
