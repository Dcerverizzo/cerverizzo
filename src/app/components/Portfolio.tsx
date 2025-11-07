import React from 'react'

interface Repo {
  name: string
  html_url: string
  url?: string
}

interface Props {
  repos?: Repo[]
}

export default function Portfolio ({ repos = [] }: Props) {
  return (
    <section aria-labelledby="portfolio-heading">
      <div className="container px-6 py-10 mx-auto">
        <h1 id="portfolio-heading" className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Portfolio</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          {repos.map((repo) => (
            <a key={repo.name} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96" style={{ backgroundImage: "url('/images/code.jpg')" }}>
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">{repo.name}</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">Code</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
