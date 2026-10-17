export interface Repo {
  // slug used in /portfolio/[repo]
  name: string
  // display name; falls back to `name`
  title?: string
  // null for private projects (no public source)
  html_url: string | null
  description?: string | null
  description_en?: string
  language?: string | null
  topics?: string[]
  created_at?: string
  homepage?: string | null
  image?: string
  status?: 'production' | 'development' | 'client'
  // slug of the matching case study in /work
  caseStudy?: string
}

export type RepoDetails = Repo & {
  body_html: string
  body_markdown: string
  tags: string
}

export function repoTitle (repo: Repo): string {
  return repo.title ?? repo.name
}

export function repoDescription (repo: Repo, lang: 'pt' | 'en'): string | null {
  if (lang === 'en' && repo.description_en != null) return repo.description_en
  return repo.description ?? null
}
