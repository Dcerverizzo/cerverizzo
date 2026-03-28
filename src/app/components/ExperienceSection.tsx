'use client'

import { DocumentArrowDownIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '@/contexts/LanguageContext'

const DRIVE_PDF_URL = process.env.NEXT_PUBLIC_RESUME_URL ?? 'https://drive.google.com/file/d/1CNJNoILKdnWzMjIb6hsmstEqM7CzYHQR/view?usp=sharing'

export default function ExperienceSection () {
  const { t } = useTranslation()
  const timeline = t.experience.timeline

  return (
    <section
      id="experience"
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
              {t.experience.index}
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            margin: 0
          }}>
            {t.experience.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Timeline */}
          <div className="lg:col-span-3" style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '3px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              backgroundColor: 'var(--color-bg-elevated)'
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {timeline.map((item) => (
                <div
                  key={item.role + item.company}
                  className="reveal"
                  style={{ paddingLeft: '32px', position: 'relative' }}
                >
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '6px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: item.current ? 'var(--color-accent-primary)' : 'transparent',
                    border: item.current
                      ? '2px solid var(--color-accent-primary)'
                      : '2px solid var(--color-text-muted)'
                  }} />

                  {/* Period */}
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    marginBottom: '8px'
                  }}>
                    {item.period}
                  </div>

                  {/* Role */}
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 4px'
                  }}>
                    {item.role}
                  </h3>

                  {/* Company */}
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: '16px'
                  }}>
                    {item.company}
                  </div>

                  {/* Bullets */}
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 300,
                          color: 'var(--color-text-muted)',
                          lineHeight: 'var(--leading-body)',
                          paddingLeft: '16px',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--color-accent-primary)',
                          opacity: 0.5
                        }}>
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right — download CTA */}
          <div className="lg:col-span-2 reveal" style={{ alignSelf: 'start' }}>
            <div style={{
              padding: '32px',
              backgroundColor: 'var(--color-bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                margin: 0
              }}>
                {t.experience.resume_heading}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
                fontWeight: 300,
                color: 'var(--color-text-muted)',
                lineHeight: 'var(--leading-body)',
                margin: 0
              }}>
                {t.experience.resume_description}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href={DRIVE_PDF_URL.replace('/view?usp=sharing', '/export?format=pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px 24px',
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
                  <DocumentArrowDownIcon width={16} height={16} />
                  {t.experience.download_pdf}
                </a>
                <a
                  href="/resume"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '14px 24px',
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    border: '1px solid var(--color-border-hover)',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  {t.experience.view_online}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
