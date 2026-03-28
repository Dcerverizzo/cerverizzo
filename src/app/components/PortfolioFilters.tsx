'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, InformationCircleIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import type { Repo } from '@/lib/github/types'

interface PortfolioFiltersProps {
  repos: Repo[]
  featuredRepos?: string[]
}

type SortOption = 'stars' | 'date-desc' | 'date-asc' | 'name'

const languageColors: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3572A5',
  PHP: '#777BB4',
  Ruby: '#CC342D',
  Shell: '#89E051'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function PortfolioFilters ({ repos, featuredRepos = [] }: PortfolioFiltersProps) {
  const [search, setSearch] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('stars')

  const languages = useMemo(() => {
    const langs = new Set<string>()
    repos.forEach(repo => {
      if (repo.language !== null && repo.language !== undefined && repo.language !== '') {
        langs.add(repo.language)
      }
    })
    return Array.from(langs).sort()
  }, [repos])

  const filteredRepos = useMemo(() => {
    let result = repos.filter(repo => {
      const searchLower = search.toLowerCase()
      const nameMatches = repo.name.toLowerCase().includes(searchLower)
      const descMatches = repo.description !== null && repo.description !== undefined
        ? repo.description.toLowerCase().includes(searchLower)
        : false
      const topicsMatch = repo.topics !== undefined && repo.topics !== null
        ? repo.topics.some(t => t.toLowerCase().includes(searchLower))
        : false

      const matchesSearch = search === '' || nameMatches || descMatches || topicsMatch
      const matchesLanguage = selectedLanguage === 'all' || repo.language === selectedLanguage

      return matchesSearch && matchesLanguage
    })

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0)
        case 'date-desc':
          return new Date(b.created_at ?? 0).getTime() - new Date(a.created_at ?? 0).getTime()
        case 'date-asc':
          return new Date(a.created_at ?? 0).getTime() - new Date(b.created_at ?? 0).getTime()
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return result
  }, [repos, search, selectedLanguage, sortBy])

  const featured = filteredRepos.filter(r => featuredRepos.includes(r.name))
  const regular = filteredRepos.filter(r => !featuredRepos.includes(r.name))

  return (
    <div>
      {/* Filters Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-3)',
        marginBottom: 'var(--space-8)'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: '1 1 220px' }}>
          <MagnifyingGlassIcon style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '16px',
            height: '16px',
            color: 'var(--color-text-muted)'
          }} />
          <input
            type="text"
            placeholder="Buscar projetos..."
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
            className="input-editorial"
            style={{ paddingLeft: '36px' }}
          />
        </div>

        {/* Language Filter */}
        <div style={{ position: 'relative' }}>
          <FunnelIcon style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '16px',
            height: '16px',
            color: 'var(--color-text-muted)',
            pointerEvents: 'none'
          }} />
          <select
            value={selectedLanguage}
            onChange={(e) => { setSelectedLanguage(e.target.value) }}
            className="select-editorial"
            style={{ paddingLeft: '36px', paddingRight: '32px' }}
          >
            <option value="all">Todas as linguagens</option>
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => { setSortBy(e.target.value as SortOption) }}
          className="select-editorial"
          style={{ paddingRight: '32px' }}
        >
          <option value="stars">Mais estrelas</option>
          <option value="date-desc">Mais recentes</option>
          <option value="date-asc">Mais antigos</option>
          <option value="name">Alfabético</option>
        </select>
      </div>

      {/* Results count */}
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xs)',
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
        marginBottom: 'var(--space-8)'
      }}>
        {filteredRepos.length} de {repos.length} projetos
      </p>

      {/* Featured Section */}
      {featured.length > 0 && (
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-lg)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <StarIcon style={{ width: '18px', height: '18px', color: 'var(--color-accent-primary)' }} />
            Destaque
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {featured.map((repo) => (
              <ProjectCard key={repo.name} repo={repo} featured />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section>
        {featured.length > 0 && (
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-lg)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)'
          }}>
            Todos os projetos
          </h2>
        )}
        {filteredRepos.length === 0
          ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-24) 0',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-body)'
          }}>
            <p>Nenhum projeto encontrado.</p>
            <button
              onClick={() => { setSearch(''); setSelectedLanguage('all') }}
              style={{
                marginTop: 'var(--space-3)',
                color: 'var(--color-accent-primary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)'
              }}
            >
              Limpar filtros
            </button>
          </div>
            )
          : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {regular.map((repo) => (
              <ProjectCard key={repo.name} repo={repo} />
            ))}
          </div>
            )}
      </section>
    </div>
  )
}

interface ProjectCardProps {
  repo: Repo
  featured?: boolean
}

function ProjectCard ({ repo, featured = false }: ProjectCardProps): JSX.Element {
  const langColor = languageColors[repo.language ?? ''] ?? '#5A5550'

  return (
    <article className="card-editorial" style={{
      outline: featured ? '1px solid var(--color-accent-line)' : 'none'
    }}>
      {/* Cover */}
      <div style={{
        position: 'relative',
        height: '140px',
        background: 'linear-gradient(135deg, var(--color-bg-subtle) 0%, var(--color-bg-elevated) 100%)',
        overflow: 'hidden'
      }}>
        <img
          src="/images/code.jpg"
          alt="code"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            opacity: 0.3
          }}
        />
        {featured && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'var(--color-accent-primary)',
            color: '#0A0A0A',
            padding: '4px 10px',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            letterSpacing: 'var(--tracking-wide)'
          }}>
            <StarIcon style={{ width: '10px', height: '10px' }} />
            Destaque
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {/* Language badge */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-widest)',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: langColor
          }} />
          {repo.language ?? 'Project'}
        </p>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-base)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          margin: 0
        }}>
          {repo.name}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-sm)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--leading-body)',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {repo.description ?? 'Um projeto de software com código e decisões de arquitetura.'}
        </p>

        {/* Stars + Date */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-text-muted)'
        }}>
          <span>⭐ {repo.stargazers_count}</span>
          <span>
            {repo.created_at != null
              ? new Date(repo.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })
              : '—'}
          </span>
        </div>

        {/* Topics */}
        {Array.isArray(repo.topics) && repo.topics.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
            {repo.topics.slice(0, 4).map((topic) => (
              <span key={topic} className="tag-editorial">#{topic}</span>
            ))}
            {repo.topics.length > 4 && (
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                +{repo.topics.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', paddingTop: 'var(--space-2)' }}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease, color 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-border-hover)'
              e.currentTarget.style.color = 'var(--color-text-primary)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.color = 'var(--color-text-secondary)'
            }}
          >
            <ArrowTopRightOnSquareIcon style={{ width: '14px', height: '14px' }} />
            GitHub
          </a>
          <Link
            href={`/portfolio/${encodeURIComponent(repo.name)}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease, color 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-border-hover)'
              e.currentTarget.style.color = 'var(--color-text-primary)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.color = 'var(--color-text-secondary)'
            }}
          >
            <InformationCircleIcon style={{ width: '14px', height: '14px' }} />
            Detalhes
          </Link>
          {repo.homepage !== null && repo.homepage !== undefined && repo.homepage !== '' && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                backgroundColor: 'var(--color-accent-primary)',
                border: '1px solid var(--color-accent-primary)',
                borderRadius: 'var(--radius-sm)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: '#0A0A0A',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
            >
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
