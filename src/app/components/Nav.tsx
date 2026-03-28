'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Currículo' }
]

export default function Nav () {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`
      }}
    >
      <div
        className="container-editorial"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px'
        }}
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
                color: pathname === link.href
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-muted)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
            >
              {link.label}
            </Link>
          ))}

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
              e.currentTarget.style.color = '#0A0A0A'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-accent-primary)'
            }}
          >
            Contratar
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center"
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

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(10,10,10,0.97)',
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
              color: pathname === link.href
                ? 'var(--color-accent-primary)'
                : 'var(--color-text-primary)',
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
          Contratar
        </a>
      </div>
    </header>
  )
}
