import { notFound } from 'next/navigation'
import { fetchRepos } from '@/lib/github/fetch'
import Link from 'next/link'
import React from 'react'

type Params = {
  params: { repo: string }
}

export default async function RepoPage ({ params }: Params) {
  const name = params.repo
  const repos = await fetchRepos()
  const repo = repos.find(r => r.name === name)

  if (!repo) notFound()

  const created = repo.created_at ? new Date(repo.created_at).toLocaleDateString() : null

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">{repo.name}</h1>
            {repo.description && (
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">{repo.description}</p>
            )}
            <div className="flex flex-wrap gap-2 mb-3">
              {repo.language && (
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{repo.language}</span>
              )}
              {typeof repo.stargazers_count === 'number' && (
                <span className="text-xs px-2 py-1 bg-yellow-50 text-yellow-800 rounded">★ {repo.stargazers_count}</span>
              )}
              {created && (
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">Created: {created}</span>
              )}
            </div>
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.map(topic => (
                  <span key={topic} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">{topic}</span>
                ))}
              </div>
            )}
            <div className="space-x-2">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 border rounded">Open on GitHub</a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 ml-2 border rounded">Visit site</a>
              )}
              <Link href="/portfolio" className="inline-block px-4 py-2 ml-2 text-sm">Back to portfolio</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
