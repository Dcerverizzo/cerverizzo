// import { fetchRepos } from '@/lib/github/fetch'
import Nav from '../components/Nav'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    template: '%s | Software Engineer',
    default: 'Portfolio | Daniel Cerverizzo'
  },
  description: 'List projects written by Daniel Cerverizzo',
  metadataBase: new URL('https://cerverizzo.dev/')
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function PortfolioHome () {
  // placeholder repos shown when API access is not configured
  const repos = [
    { name: 'cerverizzo', html_url: 'https://github.com/Dcerverizzo/cerverizzo', url: '' },
    { name: 'financialTools', html_url: 'https://github.com/Dcerverizzo/financialTools', url: '' },
    { name: 'Porterminal', html_url: 'https://github.com/Dcerverizzo/Porterminal', url: '' },
  ]

  return (
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-6xl p-6">
        <Nav />

        <header className="mt-8 mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <div className="hidden md:flex items-center space-x-3">
            <input aria-label="search projects" placeholder="Search projects..." className="px-3 py-2 rounded-md border bg-white/50 dark:bg-black/40" />
            <Link href="#" className="text-sm text-neutral-600 dark:text-neutral-300">Filter</Link>
          </div>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <article key={repo.name} className="group bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-40 bg-gray-200 dark:bg-gray-800">
                <img src="/images/code.jpg" alt="code" className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{repo.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">A curated project showcasing code and architecture decisions.</p>
                <div className="flex items-center space-x-2">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 border rounded text-sm">View on GitHub</a>
                  <Link href={`/portfolio/${encodeURIComponent(repo.name)}`} className="px-3 py-1 border rounded text-sm">Details</Link>
                </div>
              </div>
            </article>
          ))}
        </main>

      </div>
    </div>
  )
}
