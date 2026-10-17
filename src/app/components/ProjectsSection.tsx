'use client'

import Link from 'next/link'
import { useTranslation } from '@/contexts/LanguageContext'
import { repoDescription, repoTitle, type Repo } from '@/lib/github/types'
import { caseStudies } from '@/app/work/data'
import ProjectCover from './ProjectCover'

interface Props {
  repos: Repo[]
}

function StatusTag ({ repo }: { repo: Repo }) {
  const { t } = useTranslation()
  if (repo.status == null) return null
  return <span className="tag-editorial">{t.projects.status[repo.status]}</span>
}

export default function ProjectsSection ({ repos }: Props) {
  const { t, lang } = useTranslation()
  const featured = repos[0]
  const others = repos.slice(1, 5)

  if (featured == null) return null

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      <div className="container-editorial">
        {/* Section header */}
        <div style={{ marginBottom: '64px' }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-primary)' }} />
            <span className="eyebrow">{t.projects.index}</span>
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
            {t.projects.heading}
          </h2>
        </div>

        {/* Work / Case Studies highlight */}
        <Link href="/work" className="reveal work-highlight">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="tag-accent" style={{ marginBottom: '12px', display: 'inline-block' }}>
                Work
              </span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                letterSpacing: 'var(--tracking-tight)',
                margin: '0 0 8px'
              }}>
                {t.projects.work_title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-body)',
                margin: 0
              }}>
                {t.projects.work_desc}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 800,
                  color: 'var(--color-accent-primary)',
                  display: 'block',
                  lineHeight: 1
                }}>
                  {caseStudies.length}
                </span>
                <span className="eyebrow" style={{ color: 'var(--color-text-muted)', display: 'block', marginTop: '4px' }}>
                  {t.projects.work_metric_label}
                </span>
              </div>
              <span className="btn-outline-sm">{t.work.view_cases}</span>
            </div>
          </div>
        </Link>

        {/* Featured project */}
        <article
          className="reveal"
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '16px',
            border: '1px solid var(--color-border)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5" style={{ minHeight: '360px' }}>
            <div className="md:col-span-3" style={{ position: 'relative', minHeight: '260px', backgroundColor: 'var(--color-bg-elevated)' }}>
              <ProjectCover repo={featured} sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
            <div
              className="md:col-span-2"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="tag-accent">{featured.language ?? 'Web'}</span>
                <StatusTag repo={featured} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                margin: 0
              }}>
                {repoTitle(featured)}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-body)',
                margin: 0
              }}>
                {repoDescription(featured, lang)}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
                {featured.caseStudy != null && (
                  <Link href={`/work/${featured.caseStudy}`} className="btn-primary">
                    {t.projects.view_case}
                  </Link>
                )}
                {featured.html_url != null && (
                  <a href={featured.html_url} target="_blank" rel="noopener noreferrer" className="btn-outline-sm">
                    {t.projects.github}
                  </a>
                )}
                {featured.homepage != null && featured.homepage !== '' && (
                  <a href={featured.homepage} target="_blank" rel="noopener noreferrer" className="btn-outline-sm">
                    {t.projects.live}
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Other projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '48px'
          }}
        >
          {others.map((repo) => {
            const href = repo.caseStudy != null
              ? `/work/${repo.caseStudy}`
              : `/portfolio/${encodeURIComponent(repo.name)}`
            return (
              <article key={repo.name} className="reveal project-card">
                <div style={{ position: 'relative', height: '160px', backgroundColor: 'var(--color-bg-elevated)' }}>
                  <ProjectCover repo={repo} sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {repo.language != null && <span className="tag-editorial">{repo.language}</span>}
                    <StatusTag repo={repo} />
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: 0
                  }}>
                    {/* Stretched link: the whole card is clickable */}
                    <Link href={href} className="stretched-link">{repoTitle(repo)}</Link>
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-body)',
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {repoDescription(repo, lang)}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <Link href="/portfolio" className="btn-ghost">
            {t.projects.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
