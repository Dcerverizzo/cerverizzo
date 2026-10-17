'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'

export default function HeroSection () {
  const { t } = useTranslation()

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundColor: 'var(--color-bg-base)',
        overflow: 'hidden'
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <Image
          src="/images/myself.JPG"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.35 }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(var(--background-start-rgb),0.15) 0%, rgba(var(--background-start-rgb),0.6) 50%, var(--color-bg-base) 100%)'
        }} />
      </div>

      {/* Content — bottom left */}
      <div
        className="container-editorial"
        style={{ position: 'relative', zIndex: 2, paddingBottom: 'var(--space-24)', paddingTop: '120px' }}
      >
        {/* Available label */}
        <div className="hero-label" style={{ marginBottom: '28px' }}>
          <span className="tag-accent">{t.hero.available}</span>
        </div>

        {/* Name */}
        <h1
          className="hero-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-hero)',
            fontWeight: 800,
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            margin: '0 0 28px'
          }}
        >
          Daniel<br />Cerverizzo
        </h1>

        {/* Subtitle */}
        <p
          className="hero-subtitle"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-lg)',
            fontWeight: 300,
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-body)',
            margin: '0 0 44px',
            maxWidth: '480px'
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-buttons"
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <Link href="/work" className="btn-primary" style={{ padding: '14px 32px' }}>
            {t.hero.cta_primary}
          </Link>
          <a href="#contact" className="btn-ghost" style={{ padding: '14px 32px', color: 'var(--color-text-primary)', borderColor: 'var(--color-border-hover)' }}>
            {t.hero.cta_secondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div
        className="hidden md:flex"
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: 'var(--container-padding)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 2
        }}
      >
        <span style={{
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-widest)',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)'
        }}>
          {t.hero.scroll}
        </span>
        <div
          className="scroll-line"
          style={{
            width: '1px',
            height: '60px',
            backgroundColor: 'var(--color-accent-primary)'
          }}
        />
      </div>
    </section>
  )
}
