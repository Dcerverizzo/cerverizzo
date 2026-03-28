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

const FEATURED_REPOS = ['cerverizzo']

export default async function PortfolioHome () {
  const repos = await fetchRepos()

  return (
    <div style={{ backgroundColor: 'var(--color-bg-base)', minHeight: '100vh' }}>
      <Nav />

      <div style={{ paddingTop: '72px' }}>
        <section className="container-editorial section-padding">
          {/* Page Header */}
          <header style={{ marginBottom: 'var(--space-16)' }}>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)'
            }}>
              Projetos
            </span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              marginTop: 'var(--space-3)',
              lineHeight: 'var(--leading-tight)'
            }}>
              Portfolio
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              marginTop: 'var(--space-4)',
              maxWidth: '540px',
              lineHeight: 'var(--leading-body)'
            }}>
              Uma coleção de projetos que demonstram meu trabalho em desenvolvimento de software.
            </p>
          </header>

          <main>
            <PortfolioFilters repos={repos} featuredRepos={FEATURED_REPOS} />
          </main>
        </section>
      </div>
    </div>
  )
}
