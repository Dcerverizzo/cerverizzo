import { fetchRepos } from '@/lib/github/fetch'
import Nav from '../components/Nav'
import PortfolioFilters from '../components/PortfolioFilters'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Software Engineer',
    default: 'Portfolio | Daniel Cerverizzo'
  },
  description: 'List projects written by Daniel Cerverizzo',
  metadataBase: new URL('https://cerverizzo.dev/')
}

// Featured projects - add repo names here to highlight them
const FEATURED_REPOS = ['cerverizzo']

export default async function PortfolioHome () {
  const repos = await fetchRepos()

  return (
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-6xl p-6">
        <Nav />

        <header className="mt-8 mb-6">
          <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            A collection of projects showcasing my work in software development
          </p>
        </header>

        <main>
          <PortfolioFilters repos={repos} featuredRepos={FEATURED_REPOS} />
        </main>
      </div>
    </div>
  )
}
