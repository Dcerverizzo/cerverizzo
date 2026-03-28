import { type Metadata } from 'next'
import Nav from '../components/Nav'
import RecentPosts from '../components/RecentPosts'

export const metadata: Metadata = {
  title: {
    template: '%s | Software Engineer',
    default: 'Blog | Daniel Cerverizzo'
  },
  description: 'Artigos escritos por Daniel Cerverizzo',
  metadataBase: new URL('https://cerverizzo.dev/')
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function BlogHome () {
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
              Conteúdo
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
              Blog
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              marginTop: 'var(--space-4)',
              maxWidth: '540px',
              lineHeight: 'var(--leading-body)'
            }}>
              Reflexões e aprendizados sobre desenvolvimento de software, arquitetura e tecnologia.
            </p>
          </header>

          <RecentPosts />
        </section>
      </div>
    </div>
  )
}
