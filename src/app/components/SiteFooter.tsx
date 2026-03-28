'use client'

import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'

const socialLinks = [
  { href: 'https://linkedin.com/in/daniel-cerverizzo', label: 'LinkedIn' },
  { href: 'https://github.com/Dcerverizzo', label: 'GitHub' },
  { href: 'https://cerverizzo.substack.com/', label: 'Substack' },
  { href: 'https://dev.to/dcerverizzo', label: 'Dev.to' }
]

export default function SiteFooter () {
  const { t } = useTranslation()

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/portfolio', label: t.nav.portfolio },
    { href: '/blog', label: t.nav.blog },
    { href: '/resume', label: t.nav.resume }
  ]

  return (
    <footer style={{
      backgroundColor: 'var(--color-bg-base)',
      borderTop: '1px solid var(--color-border)'
    }}>
      <div
        className="container-editorial"
        style={{ paddingTop: '48px', paddingBottom: '48px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Col 1 — Logo & tagline */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: 'var(--tracking-wide)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              DC
            </Link>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              fontWeight: 300,
              color: 'var(--color-text-muted)',
              lineHeight: 'var(--leading-body)',
              margin: 0,
              maxWidth: '260px'
            }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Col 2 — Nav links */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              margin: '0 0 16px'
            }}>
              {t.footer.nav_label}
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Social links */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              margin: '0 0 16px'
            }}>
              {t.footer.social_label}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          marginTop: '48px',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-muted)'
          }}>
            {t.footer.rights(new Date().getFullYear())}
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-muted)'
          }}>
            {t.footer.made_with}
          </span>
        </div>
      </div>
    </footer>
  )
}
