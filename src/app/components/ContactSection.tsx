'use client'

import { useTranslation } from '@/contexts/LanguageContext'

export default function ContactSection () {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
    >
      <div className="container-editorial">
        {/* Section index */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }} className="reveal">
          <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-primary)' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            color: 'var(--color-accent-primary)'
          }}>
            {t.contact.index}
          </span>
        </div>

        {/* Dramatic CTA text */}
        <div className="reveal" style={{ marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            fontWeight: 300,
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-tight)',
            letterSpacing: 'var(--tracking-tight)',
            margin: '0 0 8px'
          }}>
            {t.contact.heading_line1}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 800,
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--leading-tight)',
            letterSpacing: 'var(--tracking-tight)',
            margin: 0
          }}>
            {t.contact.heading_line2}
          </h2>
        </div>

        {/* CTA Buttons */}
        <div
          className="reveal"
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '80px' }}
        >
          <a
            href="mailto:contact@cerverizzo.dev"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 40px',
              backgroundColor: 'var(--color-accent-primary)',
              color: '#0A0A0A',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 'var(--radius-sm)',
              transition: 'opacity 0.2s ease'
            }}
          >
            {t.contact.cta_email}
          </a>
          <a
            href="https://linkedin.com/in/daniel-cerverizzo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 40px',
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 400,
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid var(--color-border-hover)',
              borderRadius: 'var(--radius-sm)',
              transition: 'border-color 0.2s ease'
            }}
          >
            {t.contact.cta_linkedin}
          </a>
        </div>

        {/* Contact info row */}
        <div
          className="reveal"
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '40px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'center'
          }}
        >
          {/* Email */}
          <a
            href="mailto:contact@cerverizzo.dev"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contact@cerverizzo.dev
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/daniel-cerverizzo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            linkedin.com/in/daniel-cerverizzo
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Dcerverizzo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
            </svg>
            github.com/Dcerverizzo
          </a>

          {/* Substack */}
          <a
            href="https://cerverizzo.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 17.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
            Newsletter
          </a>
        </div>
      </div>
    </section>
  )
}
