'use client'

import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/app/components/Nav'
import SiteFooter from '@/app/components/SiteFooter'
import ScrollReveal from '@/app/components/ScrollReveal'
import { useTranslation } from '@/contexts/LanguageContext'
import { localized, type CaseStudy } from '@/app/work/data'

interface Props {
  cs: CaseStudy
  prev: CaseStudy | null
  next: CaseStudy | null
}

function ContentBlock ({ label, heading, children }: {
  label: string
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="reveal" style={{ marginBottom: 'var(--space-12)' }}>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        color: 'var(--color-accent-primary)',
        display: 'block',
        marginBottom: 'var(--space-3)'
      }}>
        {label}
      </span>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-xl)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--color-text-primary)',
        margin: '0 0 var(--space-6)'
      }}>
        {heading}
      </h2>
      {children}
    </div>
  )
}

function BodyParagraph ({ text }: { text: string }) {
  return (
    <p style={{
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: 300,
      color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-loose)',
      margin: '0 0 var(--space-4)'
    }}>
      {text}
    </p>
  )
}

function NavCell ({ cs: navCs, direction, prevLabel, nextLabel }: {
  cs: CaseStudy | null
  direction: 'prev' | 'next'
  prevLabel: string
  nextLabel: string
}) {
  if (navCs == null) return <div style={{ backgroundColor: 'var(--color-bg-surface)' }} />

  const isPrev = direction === 'prev'
  return (
    <Link
      href={`/work/${navCs.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isPrev ? 'flex-start' : 'flex-end',
        gap: 'var(--space-2)',
        padding: 'var(--space-8)',
        textDecoration: 'none',
        borderRight: isPrev ? '1px solid var(--color-border)' : 'none',
        backgroundColor: 'var(--color-bg-surface)',
        transition: 'background-color 0.2s ease'
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)'
      }}>
        {isPrev ? prevLabel : nextLabel}
      </span>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-base)',
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        textAlign: isPrev ? 'left' : 'right'
      }}>
        {navCs.title}
      </span>
    </Link>
  )
}

export default function CaseStudyContent ({ cs, prev, next }: Props) {
  const { t, lang } = useTranslation()
  const content = localized(cs, lang)
  const tc = t.case_study

  const metaGrid = [
    { label: tc.company_label, value: cs.company },
    { label: tc.period_label, value: cs.period !== '' ? cs.period : '—' },
    { label: tc.role_label, value: cs.role },
    { label: tc.result_meta_label, value: cs.resultMetric }
  ]

  return (
    <div style={{ backgroundColor: 'var(--color-bg-base)', minHeight: '100vh' }}>
      <Nav />
      <ScrollReveal />
      <main style={{ paddingTop: '72px' }}>

        {/* ── Hero section ── */}
        <section
          className="container-editorial"
          style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-12)' }}
        >
          <div className="reveal" style={{ maxWidth: '800px' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)',
              display: 'block',
              marginBottom: 'var(--space-4)'
            }}>
              {cs.category}
            </span>

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
              color: 'var(--color-text-primary)',
              margin: '0 0 var(--space-6)'
            }}>
              {cs.title}
            </h1>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lg)',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--leading-body)',
              margin: '0 0 var(--space-8)'
            }}>
              {content.tagline}
            </p>

            {/* Decorative divider */}
            <div style={{
              height: '1px',
              backgroundColor: 'var(--color-accent-line)',
              marginBottom: 'var(--space-8)'
            }} />

            {/* Metadata grid */}
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 'var(--space-8)' }}>
              {metaGrid.map(({ label, value }) => (
                <div key={label}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    margin: '0 0 var(--space-2)'
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    margin: 0
                  }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hero image ── */}
        <div className="container-editorial" style={{ marginBottom: 'var(--space-16)' }}>
          <div
            className="reveal"
            style={{
              position: 'relative',
              minHeight: '480px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)'
            }}
          >
            {/* SUBSTITUIR: trocar src pelo caminho real da imagem hero do projeto */}
            <Image
              src={cs.heroImage.src}
              alt={cs.heroImage.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: 'cover' }}
              unoptimized
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(10,10,10,0) 40%, rgba(10,10,10,0.6) 100%)'
            }} />
          </div>
        </div>

        {/* ── Body: two-column layout ── */}
        <section className="container-editorial" style={{ marginBottom: 'var(--space-24)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]" style={{ gap: 'var(--space-16)', alignItems: 'start' }}>

            {/* Main content column */}
            <div>

              {/* O Problema / The Problem */}
              <ContentBlock label={tc.problem_label} heading={tc.problem_heading}>
                {content.problem.map((para, i) => (
                  <BodyParagraph key={i} text={para} />
                ))}
              </ContentBlock>

              {/* A Decisão / The Decision */}
              <ContentBlock label={tc.decision_label} heading={tc.decision_heading}>
                {content.decision.map((para, i) => (
                  <BodyParagraph key={i} text={para} />
                ))}
              </ContentBlock>

              {/* A Execução / The Execution */}
              <ContentBlock label={tc.execution_label} heading={tc.execution_heading}>
                {content.execution.map((para, i) => (
                  <BodyParagraph key={i} text={para} />
                ))}

                {/* Execution images grid */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: '16px', marginTop: 'var(--space-8)' }}
                >
                  {cs.executionImages.map((img, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'relative',
                        height: '240px',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        border: '1px solid var(--color-border)'
                      }}
                    >
                      {/* SUBSTITUIR: ver comentários em data.ts para o caminho real */}
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </ContentBlock>

              {/* O Resultado / The Result */}
              <div className="reveal" style={{ marginBottom: 'var(--space-12)' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-widest)',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent-primary)',
                  display: 'block',
                  marginBottom: 'var(--space-4)'
                }}>
                  {tc.result_label}
                </span>
                <div style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  borderLeft: '3px solid var(--color-accent-primary)',
                  padding: 'var(--space-8)',
                  borderRadius: '0 var(--radius-lg) var(--radius-lg) 0'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 800,
                    color: 'var(--color-accent-primary)',
                    textAlign: 'center',
                    marginBottom: 'var(--space-4)',
                    letterSpacing: 'var(--tracking-tight)'
                  }}>
                    {cs.resultMetric}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-body)',
                    textAlign: 'center',
                    margin: 0
                  }}>
                    {content.resultText}
                  </p>
                </div>
              </div>

            </div>

            {/* Sidebar column */}
            <aside>
              <div style={{
                position: 'sticky',
                top: '88px',
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-8)'
              }}>

                {/* Stack */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    margin: '0 0 var(--space-4)'
                  }}>
                    {tc.stack_label}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                    {cs.stack.map((tech) => (
                      <span key={tech} className="tag-editorial">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Role */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    margin: '0 0 var(--space-3)'
                  }}>
                    {tc.role_label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-primary)',
                    lineHeight: 'var(--leading-body)',
                    margin: 0
                  }}>
                    {cs.role}
                  </p>
                </div>

                {/* Period */}
                {cs.period !== '' && (
                  <div style={{ marginBottom: 'var(--space-8)' }}>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tracking-widest)',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      margin: '0 0 var(--space-3)'
                    }}>
                      {tc.period_label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--color-text-primary)',
                      margin: 0
                    }}>
                      {cs.period}
                    </p>
                  </div>
                )}

                {/* External link */}
                {cs.externalLink != null && (
                  <div style={{ marginBottom: 'var(--space-8)' }}>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tracking-widest)',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      margin: '0 0 var(--space-3)'
                    }}>
                      {tc.link_label}
                    </p>
                    <a
                      href={cs.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-accent-primary)',
                        textDecoration: 'none'
                      }}
                    >
                      Ver projeto ↗
                    </a>
                  </div>
                )}

                {/* NDA note */}
                {content.ndaNote != null && (
                  <div style={{
                    padding: 'var(--space-4)',
                    backgroundColor: 'var(--color-bg-elevated)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '2px solid var(--color-text-muted)'
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      color: 'var(--color-text-muted)',
                      lineHeight: 'var(--leading-body)',
                      margin: 0
                    }}>
                      ⚠ {content.ndaNote}
                    </p>
                  </div>
                )}

              </div>
            </aside>
          </div>
        </section>

        {/* ── Case navigation ── */}
        <div style={{
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)'
        }}>
          <div className="container-editorial">
            <div className="grid grid-cols-2">
              <NavCell
                cs={prev}
                direction="prev"
                prevLabel={tc.prev_label}
                nextLabel={tc.next_label}
              />
              <NavCell
                cs={next}
                direction="next"
                prevLabel={tc.prev_label}
                nextLabel={tc.next_label}
              />
            </div>
          </div>
        </div>

        {/* ── CTA Final ── */}
        <section
          className="container-editorial"
          style={{
            textAlign: 'center',
            paddingTop: 'var(--space-24)',
            paddingBottom: 'var(--space-24)'
          }}
        >
          <div className="reveal">
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              margin: '0 0 var(--space-4)'
            }}>
              {tc.cta_question}
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              fontWeight: 700,
              letterSpacing: 'var(--tracking-tight)',
              color: 'var(--color-text-primary)',
              margin: '0 0 var(--space-8)'
            }}>
              {tc.cta_heading}
            </h2>
            <a href="mailto:danielcerverizzo@gmail.com" className="btn-primary">
              {tc.cta_button}
            </a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  )
}
