'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { useTranslation } from '@/contexts/LanguageContext'
import { repoDescription, repoTitle, type Repo } from '@/lib/github/types'
import ProjectCover from './ProjectCover'

interface PortfolioFiltersProps {
  repos: Repo[]
  featuredRepos?: string[]
}

type SortOption = 'relevance' | 'date-desc' | 'date-asc' | 'name'

const iconStyle = {
  position: 'absolute' as const,
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '16px',
  height: '16px',
  color: 'var(--color-text-muted)',
  pointerEvents: 'none' as const
}

const sectionHeading = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--text-lg)',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--space-6)',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function PortfolioFilters ({ repos, featuredRepos = [] }: PortfolioFiltersProps) {
  const { t, lang } = useTranslation()
  const [search, setSearch] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('relevance')

  const languages = useMemo(() => {
    const langs = new Set<string>()
    repos.forEach(repo => {
      if (repo.language != null && repo.language !== '') langs.add(repo.language)
    })
    return Array.from(langs).sort()
  }, [repos])

  const filteredRepos = useMemo(() => {
    const searchLower = search.toLowerCase()
    const result = repos.filter(repo => {
      const haystack = [
        repoTitle(repo),
        repoDescription(repo, lang) ?? '',
        ...(repo.topics ?? [])
      ].join(' ').toLowerCase()

      const matchesSearch = search === '' || haystack.includes(searchLower)
      const matchesLanguage = selectedLanguage === 'all' || repo.language === selectedLanguage
      return matchesSearch && matchesLanguage
    })

    // 'relevance' keeps the curated order from the data source
    if (sortBy === 'relevance') return result
    return [...result].sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.created_at ?? 0).getTime() - new Date(a.created_at ?? 0).getTime()
        case 'date-asc':
          return new Date(a.created_at ?? 0).getTime() - new Date(b.created_at ?? 0).getTime()
        case 'name':
          return repoTitle(a).localeCompare(repoTitle(b))
        default:
          return 0
      }
    })
  }, [repos, search, selectedLanguage, sortBy, lang])

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
        <div style={{ position: 'relative', flex: '1 1 220px' }}>
          <MagnifyingGlassIcon style={iconStyle} aria-hidden="true" />
          <input
            type="search"
            aria-label={t.projects.search_label}
            placeholder={t.projects.search_placeholder}
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
            className="input-editorial"
            style={{ paddingLeft: '36px', width: '100%' }}
          />
        </div>

        <div style={{ position: 'relative' }}>
          <FunnelIcon style={iconStyle} aria-hidden="true" />
          <select
            aria-label={t.projects.language_label}
            value={selectedLanguage}
            onChange={(e) => { setSelectedLanguage(e.target.value) }}
            className="select-editorial"
            style={{ paddingLeft: '36px', paddingRight: '32px' }}
          >
            <option value="all">{t.projects.all_languages}</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>

        <select
          aria-label={t.projects.sort_label}
          value={sortBy}
          onChange={(e) => { setSortBy(e.target.value as SortOption) }}
          className="select-editorial"
          style={{ paddingRight: '32px' }}
        >
          <option value="relevance">{t.projects.sort_relevance}</option>
          <option value="date-desc">{t.projects.sort_newest}</option>
          <option value="date-asc">{t.projects.sort_oldest}</option>
          <option value="name">{t.projects.sort_name}</option>
        </select>
      </div>

      <p className="eyebrow" aria-live="polite" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)' }}>
        {t.projects.results(filteredRepos.length)}
      </p>

      {featured.length > 0 && (
        <section style={{ marginBottom: 'var(--space-16)' }}>
          <h2 style={sectionHeading}>
            <StarIcon style={{ width: '18px', height: '18px', color: 'var(--color-accent-primary)' }} aria-hidden="true" />
            {t.projects.featured}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'var(--space-6)'
          }}>
            {featured.map((repo) => (
              <ProjectCard key={repo.name} repo={repo} featured />
            ))}
          </div>
        </section>
      )}

      <section>
        {featured.length > 0 && regular.length > 0 && (
          <h2 style={sectionHeading}>{t.projects.all_projects}</h2>
        )}
        {filteredRepos.length === 0
          ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-24) 0',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-body)'
          }}>
            <p>{t.projects.empty}</p>
            <button
              type="button"
              onClick={() => { setSearch(''); setSelectedLanguage('all') }}
              className="btn-ghost-sm"
              style={{ marginTop: 'var(--space-3)', cursor: 'pointer' }}
            >
              {t.projects.clear_filters}
            </button>
          </div>
            )
          : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
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
  const { t, lang } = useTranslation()
  const year = repo.created_at != null ? new Date(repo.created_at).getFullYear() : null
  const detailHref = repo.caseStudy != null
    ? `/work/${repo.caseStudy}`
    : `/portfolio/${encodeURIComponent(repo.name)}`

  return (
    <article className="card-editorial" style={{
      display: 'flex',
      flexDirection: 'column',
      outline: featured ? '1px solid var(--color-accent-line)' : 'none'
    }}>
      <div style={{ position: 'relative', height: featured ? '200px' : '150px', backgroundColor: 'var(--color-bg-subtle)' }}>
        <ProjectCover repo={repo} sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', flex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center' }}>
          {repo.language != null && <span className="tag-editorial">{repo.language}</span>}
          {repo.status != null && <span className="tag-accent">{t.projects.status[repo.status]}</span>}
          {year != null && (
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
              {year}
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-base)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          margin: 0
        }}>
          {repoTitle(repo)}
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', paddingTop: 'var(--space-2)', marginTop: 'auto' }}>
          <Link href={detailHref} className="btn-ghost-sm">
            {repo.caseStudy != null ? t.projects.view_case : t.projects.details}
          </Link>
          {repo.html_url != null
            ? (
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn-ghost-sm">
              <ArrowTopRightOnSquareIcon style={{ width: '14px', height: '14px' }} aria-hidden="true" />
              GitHub
            </a>
              )
            : (
            <span style={{ alignSelf: 'center', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
              {t.projects.source_private}
            </span>
              )}
          {repo.homepage != null && repo.homepage !== '' && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '7px 14px' }}>
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
