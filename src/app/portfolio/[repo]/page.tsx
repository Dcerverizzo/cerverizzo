import { notFound } from 'next/navigation'
import { fetchRepos } from '@/lib/github/fetch'
import Link from 'next/link'
import Nav from '@/app/components/Nav'
import { ArrowTopRightOnSquareIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Params = {
  params: { repo: string }
}

const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  PHP: '#777BB4',
  Ruby: '#CC342D',
  Shell: '#89E051'
}

export default async function RepoPage ({ params }: Params) {
  const name = params.repo
  const repos = await fetchRepos()
  const repo = repos.find(r => r.name === name)

  if (repo == null) notFound()

  const created = repo.created_at != null && repo.created_at !== ''
    ? new Date(repo.created_at).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
    : null

  const langColor = languageColors[repo.language ?? ''] ?? '#5A5550'

  return (
    <div style={{ backgroundColor: 'var(--color-bg-base)', minHeight: '100vh' }}>
      <Nav />

      <div style={{ paddingTop: '72px' }}>
        <section className="container-editorial section-padding">
          {/* Back link */}
          <Link href="/portfolio" className="btn-ghost-sm" style={{ marginBottom: 'var(--space-12)', display: 'inline-flex' }}>
            <ArrowLeftIcon style={{ width: '14px', height: '14px' }} />
            Portfolio
          </Link>

          {/* Header */}
          <header style={{ marginBottom: 'var(--space-12)', marginTop: 'var(--space-8)' }}>
            {repo.language != null && repo.language !== '' && (
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: 'var(--space-4)'
              }}>
                <span style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: langColor
                }} />
                {repo.language}
              </p>
            )}

            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
              margin: 0
            }}>
              {repo.name}
            </h1>

            {repo.description != null && repo.description !== '' && (
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-secondary)',
                marginTop: 'var(--space-4)',
                maxWidth: '640px',
                lineHeight: 'var(--leading-body)'
              }}>
                {repo.description}
              </p>
            )}
          </header>

          {/* Meta card */}
          <div style={{
            backgroundColor: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-8)',
            marginBottom: 'var(--space-8)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-8)'
          }}>
            {typeof repo.stargazers_count === 'number' && (
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-widest)',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-2)'
                }}>
                  Stars
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 700,
                  color: 'var(--color-accent-primary)'
                }}>
                  ⭐ {repo.stargazers_count}
                </p>
              </div>
            )}

            {created != null && (
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  letterSpacing: 'var(--tracking-widest)',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: 'var(--space-2)'
                }}>
                  Criado em
                </p>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-base)',
                  color: 'var(--color-text-primary)'
                }}>
                  {created}
                </p>
              </div>
            )}
          </div>

          {/* Topics */}
          {Array.isArray(repo.topics) && repo.topics.length > 0 && (
            <div style={{ marginBottom: 'var(--space-12)' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-widest)',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-4)'
              }}>
                Tecnologias
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {repo.topics.map(topic => (
                  <span key={topic} className="tag-editorial">#{topic}</span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ArrowTopRightOnSquareIcon style={{ width: '16px', height: '16px' }} />
              Abrir no GitHub
            </a>
            {repo.homepage != null && repo.homepage !== '' && (
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Visitar site
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
