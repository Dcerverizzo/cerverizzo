'use client'

import Image from 'next/image'
import { useTranslation } from '@/contexts/LanguageContext'

export default function AboutSection () {
  const { t } = useTranslation()
  const stats = t.about.stats

  return (
    <section
      id="about"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left — text (3 cols) */}
          <div className="lg:col-span-3 reveal">
            {/* Section index */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-primary)' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: 'var(--color-accent-primary)'
              }}>
                {t.about.index}
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
              color: 'var(--color-text-primary)',
              margin: '0 0 32px'
            }}>
              {t.about.heading}
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-loose)',
              color: 'var(--color-text-secondary)',
              margin: '0 0 16px'
            }}>
              {t.about.p1}
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              lineHeight: 'var(--leading-loose)',
              color: 'var(--color-text-secondary)',
              margin: '0 0 48px'
            }}>
              {t.about.p2}
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderTop: '1px solid var(--color-border)',
              paddingTop: '32px',
              gap: '0'
            }}>
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  style={{
                    paddingRight: '16px',
                    borderRight: index < stats.length - 1 ? '1px solid var(--color-border)' : 'none',
                    paddingLeft: index > 0 ? '16px' : '0'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    color: 'var(--color-accent-primary)',
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-wide)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image grid (2 cols) */}
          <div className="lg:col-span-2 reveal grid grid-cols-2 gap-2">
            <div style={{ position: 'relative', height: '280px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <Image
                src="/images/myself.JPG"
                alt="Daniel Cerverizzo"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 20vw"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div style={{ position: 'relative', height: '280px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <Image
                src="/images/speaking_1.jpeg"
                alt="Palestrando"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 20vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ position: 'relative', height: '180px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', gridColumn: 'span 2' }}>
              <Image
                src="/images/sistemasbr_speaking.jpg"
                alt="Palestrando no SistemasBR"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
