import type { Repo } from './types'

export async function fetchRepos (): Promise<Repo[]> {


  return [
    {
      name: 'cerverizzo',
      html_url: 'https://github.com/Dcerverizzo/cerverizzo',
      url: 'https://api.github.com/repos/Dcerverizzo/cerverizzo',
      description: 'Personal site and blog built with Next.js and Tailwind CSS.',
      language: 'TypeScript',
      stargazers_count: 12,
      topics: ['portfolio', 'nextjs', 'tailwindcss'],
      created_at: '2023-05-01T12:00:00Z',
      homepage: 'https://cerverizzo.dev'
    },
    {
      name: 'financialTools',
      html_url: 'https://github.com/Dcerverizzo/financialTools',
      url: 'https://api.github.com/repos/Dcerverizzo/financialTools',
      description: 'Collection of financial utilities and calculators.',
      language: 'Python',
      stargazers_count: 34,
      topics: ['finance', 'python'],
      created_at: '2022-11-10T09:00:00Z',
      homepage: ''
    },
    {
      name: 'heartFoundation',
      html_url: 'https://github.com/Dcerverizzo/heartFoundation',
      url: 'https://api.github.com/repos/Dcerverizzo/heartFoundation',
      description: 'Non-profit site with donation tracking and events.',
      language: 'PHP',
      stargazers_count: 8,
      topics: ['nonprofit', 'php', 'donations'],
      created_at: '2021-03-05T08:30:00Z',
      homepage: ''
    },
    {
      name: 'jobs',
      html_url: 'https://github.com/Dcerverizzo/jobs',
      url: 'https://api.github.com/repos/Dcerverizzo/jobs',
      description: 'Job board scraper and aggregator.',
      language: 'JavaScript',
      stargazers_count: 21,
      topics: ['scraping', 'jobs'],
      created_at: '2020-07-20T14:10:00Z',
      homepage: ''
    },
    {
      name: 'Porterminal',
      html_url: 'https://github.com/Dcerverizzo/Porterminal',
      url: 'https://api.github.com/repos/Dcerverizzo/Porterminal',
      description: 'Logistics platform demo app.',
      language: 'Ruby',
      stargazers_count: 5,
      topics: ['rails', 'logistics'],
      created_at: '2019-02-15T10:00:00Z',
      homepage: ''
    },
    {
      name: 'SolucionaGeral',
      html_url: 'https://github.com/Dcerverizzo/SolucionaGeral',
      url: 'https://api.github.com/repos/Dcerverizzo/SolucionaGeral',
      description: 'Internal tools and scripts for operations.',
      language: 'Shell',
      stargazers_count: 2,
      topics: ['scripts', 'ops'],
      created_at: '2018-10-01T12:00:00Z',
      homepage: ''
    },
    {
      name: 'spotify',
      html_url: 'https://github.com/Dcerverizzo/spotify',
      url: 'https://api.github.com/repos/Dcerverizzo/spotify',
      description: 'Spotify integration example apps.',
      language: 'JavaScript',
      stargazers_count: 14,
      topics: ['spotify', 'api'],
      created_at: '2021-06-01T11:11:00Z',
      homepage: ''
    },
    {
      name: 'web-scraping-jobs',
      html_url: 'https://github.com/Dcerverizzo/web-scraping-jobs',
      url: 'https://api.github.com/repos/Dcerverizzo/web-scraping-jobs',
      description: 'Examples of web scraping jobs and parsers.',
      language: 'Python',
      stargazers_count: 9,
      topics: ['scraping', 'python'],
      created_at: '2020-01-10T10:00:00Z',
      homepage: ''
    }
  ]
}
