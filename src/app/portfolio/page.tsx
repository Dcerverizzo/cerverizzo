// import { fetchRepos } from '@/lib/github/fetch'
import { fetchRepos } from '@/lib/github/fetch'
import Nav from '../components/Nav'
import { type Metadata } from 'next'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

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
  const repos = await fetchRepos()

  return (
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-6xl p-6">
        <Nav />

        <header className="mt-8 mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Portfolio</h1>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <article
              key={repo.name}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* COVER IMAGE */}
              <div className="relative h-40 bg-gray-200 dark:bg-gray-800">
                <img
                  src="/images/code.jpg"
                  alt="code"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* CARD BODY */}
              <div className="p-5 space-y-3">
                {/* BADGE (Language) */}
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                  {repo.language ?? 'Project'}
                </p>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {repo.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {repo.description ??
                    'A curated project showcasing code and architecture decisions.'}
                </p>

                {/* STARS + DATE */}
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

                {/* TAGS / TOPICS */}
                {Array.isArray(repo.topics) && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* ACTION BUTTONS */}
                <div className="flex items-center space-x-2 pt-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 border rounded text-sm dark:border-gray-700 inline-flex items-center gap-2"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>

                  <Link
                    href={`/portfolio/${encodeURIComponent(repo.name)}`}
                    className="px-3 py-1 border rounded text-sm dark:border-gray-700"
                  >
                    <InformationCircleIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  )
}
