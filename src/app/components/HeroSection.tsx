import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection () {
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
          alt="Daniel Cerverizzo"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top', opacity: 0.35 }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.6) 50%, #0A0A0A 100%)'
        }} />
      </div>

      {/* Content — bottom left */}
      <div
        className="container-editorial"
        style={{ position: 'relative', zIndex: 2, paddingBottom: 'var(--space-24)', paddingTop: '120px' }}
      >
        {/* Available label */}
        <div className="hero-label" style={{ marginBottom: '28px' }}>
          <span className="tag-accent">[ Disponível para projetos ]</span>
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
          Software Engineer Full Stack com mais de 8 anos construindo interfaces e produtos digitais de alto impacto.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-buttons"
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
        >
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 32px',
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
            Ver Projetos
          </Link>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 32px',
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
            Entre em Contato
          </a>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div
        className="hidden md:flex"
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
          scroll
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
