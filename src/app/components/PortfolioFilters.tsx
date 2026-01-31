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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function PortfolioFilters ({ repos, featuredRepos = [] }: PortfolioFiltersProps) {
  const [search, setSearch] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('stars')

  // Extract unique languages
  const languages = useMemo(() => {
    const langs = new Set<string>()
    repos.forEach(repo => {
      if (repo.language !== null && repo.language !== undefined && repo.language !== '') {
        langs.add(repo.language)
      }
    })
    return Array.from(langs).sort()
  }, [repos])

  // Filter and sort repos
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

    // Sort
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

  // Separate featured and regular repos
  const featured = filteredRepos.filter(r => featuredRepos.includes(r.name))
  const regular = filteredRepos.filter(r => !featuredRepos.includes(r.name))

  const languageColors: Record<string, string> = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-400',
    Python: 'bg-green-500',
    PHP: 'bg-purple-500',
    Ruby: 'bg-red-500',
    Shell: 'bg-gray-500'
  }

  return (
    <div>
      {/* Filters Bar */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => { setSearch(e.target.value) }}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Language Filter */}
        <div className="relative">
          <FunnelIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <select
            value={selectedLanguage}
            onChange={(e) => { setSelectedLanguage(e.target.value) }}
            className="pl-10 pr-8 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
          >
            <option value="all">All Languages</option>
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => { setSortBy(e.target.value as SortOption) }}
          className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
        >
          <option value="stars">Most Stars</option>
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="name">Alphabetical</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
        Showing {filteredRepos.length} of {repos.length} projects
      </p>

      {/* Featured Section */}
      {featured.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featured.map((repo) => (
              <ProjectCard key={repo.name} repo={repo} featured languageColors={languageColors} />
            ))}
          </div>
        </section>
      )}

      {/* All Projects */}
      <section>
        {featured.length > 0 && <h2 className="text-xl font-semibold mb-4">All Projects</h2>}
        {filteredRepos.length === 0
          ? (
          <div className="text-center py-12 text-neutral-500 dark:text-neutral-400">
            <p>No projects found matching your criteria.</p>
            <button
              onClick={() => { setSearch(''); setSelectedLanguage('all') }}
              className="mt-2 text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
            )
          : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((repo) => (
              <ProjectCard key={repo.name} repo={repo} languageColors={languageColors} />
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
  languageColors: Record<string, string>
}

function ProjectCard ({ repo, featured = false, languageColors }: ProjectCardProps): JSX.Element {
  return (
    <article
      className={`group bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 ${featured ? 'ring-2 ring-yellow-400' : ''}`}
    >
      {/* Cover Image */}
      <div className="relative h-40 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
        <img
          src="/images/code.jpg"
          alt="code"
          className="object-cover w-full h-full opacity-50 group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <StarIcon className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-3">
        {/* Badge (Language) */}
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 flex items-center gap-2">
          <span className={`inline-block w-2 h-2 rounded-full ${languageColors[repo.language ?? ''] ?? 'bg-gray-400'}`}></span>
          {repo.language ?? 'Project'}
        </p>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">
          {repo.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {repo.description ?? 'A curated project showcasing code and architecture decisions.'}
        </p>

        {/* Stars + Date */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            ⭐ {repo.stargazers_count}
          </span>
          <span>
            {repo.created_at != null
              ? new Date(repo.created_at).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })
              : 'Unknown'}
          </span>
        </div>

        {/* Tags / Topics */}
        {Array.isArray(repo.topics) && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {repo.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
              >
                #{topic}
              </span>
            ))}
            {repo.topics.length > 4 && (
              <span className="text-xs text-neutral-400">+{repo.topics.length - 4}</span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 border rounded-lg text-sm dark:border-gray-700 inline-flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            <ArrowTopRightOnSquareIcon className="w-4 h-4 flex-shrink-0" />
            GitHub
          </a>
          <Link
            href={`/portfolio/${encodeURIComponent(repo.name)}`}
            className="px-3 py-2 border rounded-lg text-sm dark:border-gray-700 inline-flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            <InformationCircleIcon className="w-4 h-4 flex-shrink-0" />
            Details
          </Link>
          {repo.homepage !== null && repo.homepage !== undefined && repo.homepage !== '' && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm inline-flex items-center gap-2 hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
