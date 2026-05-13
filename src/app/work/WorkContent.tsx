'use client'

import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/components/Nav'
import SiteFooter from '@/app/components/SiteFooter'
import ScrollReveal from '@/app/components/ScrollReveal'
import { useTranslation } from '@/contexts/LanguageContext'
import { caseStudies } from './data'

export default function WorkContent () {
  const { t, lang } = useTranslation()
  const featured = caseStudies[0]
  const others = caseStudies.slice(1)

  return (
    <div style={{ backgroundColor: 'var(--color-bg-base)', minHeight: '100vh' }}>
      <Nav />
      <ScrollReveal />
      <main style={{ paddingTop: '72px' }}>
        <section className="container-editorial section-padding">

          {/* Section header */}
          <header style={{ marginBottom: '64px' }} className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-primary)' }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: 'var(--color-accent-primary)'
              }}>
                {t.work.section_label}
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
              color: 'var(--color-text-primary)',
              margin: '0 0 var(--space-4)'
            }}>
              {t.work.heading}
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-body)',
              margin: 0,
              maxWidth: '540px'
            }}>
              {t.work.subtitle}
            </p>
          </header>

          {/* Featured case study card */}
          <div
            className="reveal work-card"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              marginBottom: '2px',
              border: '1px solid var(--color-border)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5" style={{ minHeight: '360px' }}>
              {/* Image col */}
              <div className="md:col-span-3" style={{ position: 'relative', minHeight: '280px' }}>
                {/* SUBSTITUIR: /public/work/shop-my-feed/hero.jpg — tela principal do feed */}
                <Image
                  src={featured.heroImage.src}
                  alt={featured.heroImage.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                <div className="work-card-overlay" />
                <span
                  className="tag-accent"
                  style={{ position: 'absolute', top: '16px', left: '16px' }}
                >
                  {featured.category}
                </span>
              </div>

              {/* Content col */}
              <div
                className="md:col-span-2"
                style={{
                  padding: '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '20px'
                }}
              >
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  letterSpacing: 'var(--tracking-tight)',
                  margin: 0
                }}>
                  {featured.title}
                </h2>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 300,
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--leading-body)',
                  margin: 0
                }}>
                  {featured.tagline[lang]}
                </p>

                {/* Result metric */}
                <div style={{
                  borderLeft: '3px solid var(--color-accent-line)',
                  paddingLeft: 'var(--space-4)'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 800,
                    color: 'var(--color-accent-primary)',
                    display: 'block',
                    lineHeight: 1
                  }}>
                    {featured.resultMetric}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                    display: 'block',
                    marginTop: 'var(--space-2)'
                  }}>
                    {featured.resultText[lang]}
                  </span>
                </div>

                <Link href={`/work/${featured.slug}`} className="work-card-link">
                  {t.work.view_case}
                </Link>
              </div>
            </div>
          </div>

          {/* Smaller cards grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: '2px', marginBottom: 'var(--space-16)' }}
          >
            {others.map((cs) => (
              <div
                key={cs.slug}
                className="reveal work-card"
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--color-border)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Card image */}
                <div style={{ position: 'relative', height: '240px' }}>
                  {/* SUBSTITUIR: trocar src pelo caminho real da imagem — ver comentários em data.ts */}
                  <Image
                    src={cs.heroImage.src}
                    alt={cs.heroImage.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                  <div className="work-card-overlay" />
                  <span
                    className="tag-accent"
                    style={{ position: 'absolute', top: '16px', left: '16px' }}
                  >
                    {cs.category}
                  </span>
                </div>

                {/* Card content */}
                <div style={{ padding: '28px' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    letterSpacing: 'var(--tracking-tight)',
                    margin: '0 0 var(--space-3)'
                  }}>
                    {cs.title}
                  </h2>

                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 300,
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-body)',
                    margin: '0 0 var(--space-6)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {cs.problem[lang][0]}
                  </p>

                  {/* Metric */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-6)',
                    paddingBottom: 'var(--space-6)',
                    borderBottom: '1px solid var(--color-border)'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 800,
                      color: 'var(--color-accent-primary)',
                      lineHeight: 1
                    }}>
                      {cs.resultMetric}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)'
                    }}>
                      {cs.resultText[lang]}
                    </span>
                  </div>

                  <Link href={`/work/${cs.slug}`} className="work-card-link">
                    {t.work.view_case}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Back CTA */}
          <div className="reveal" style={{ textAlign: 'center' }}>
            <Link
              href="/"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                border: '1px solid var(--color-border-hover)',
                padding: '12px 32px',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-block',
                transition: 'border-color 0.2s ease, color 0.2s ease'
              }}
            >
              {t.work.back_home}
            </Link>
          </div>

        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
