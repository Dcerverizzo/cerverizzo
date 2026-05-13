'use client'

import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'

interface Props {
  children: React.ReactNode
}

export default function BlogSection ({ children }: Props) {
  const { t } = useTranslation()

  return (
    <section
      id="blog"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      <div className="container-editorial">

        {/* Section header */}
        <div style={{ marginBottom: '64px' }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-primary)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)'
            }}>
              {t.blog_section.index}
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            margin: '0 0 var(--space-4)'
          }}>
            {t.blog_section.heading}
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            fontWeight: 300,
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-body)',
            margin: 0,
            maxWidth: '540px'
          }}>
            {t.blog_section.subtitle}
          </p>
        </div>

        {/* Posts grid — rendered server-side, passed as children */}
        <div className="reveal">
          {children}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 40px',
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid var(--color-border-hover)',
              borderRadius: 'var(--radius-sm)',
              transition: 'border-color 0.2s ease'
            }}
          >
            {t.blog_section.cta}
          </Link>
        </div>

      </div>
    </section>
  )
}
