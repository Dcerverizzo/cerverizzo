export interface Repo {
  name: string
  html_url: string
  url: string
  // optional/enriched fields used by the portfolio details page
  description?: string | null
  language?: string | null
  stargazers_count?: number
  topics?: string[]
  created_at?: string
  homepage?: string | null
}

export type RepoDetails = Repo & {
  body_html: string
  body_markdown: string
  tags: string
}
