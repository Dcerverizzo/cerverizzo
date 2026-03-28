import Image from 'next/image'
import Link from 'next/link'
import { fetchRepos } from '@/lib/github/fetch'

const langColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3572A5',
  PHP: '#4F5D95',
  Ruby: '#CC342D',
  Shell: '#89e051'
}

export default async function ProjectsSection () {
  const repos = await fetchRepos()
  const featured = repos[0]
  const others = repos.slice(1, 5)

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      <div className="container-editorial">
        {/* Section header */}
        <div style={{ marginBottom: '64px' }} className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-primary)' }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              color: 'var(--color-accent-primary)'
            }}>
              03
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            letterSpacing: 'var(--tracking-tight)',
            lineHeight: 'var(--leading-tight)',
            color: 'var(--color-text-primary)',
            margin: 0
          }}>
            Projetos Destacados
          </h2>
        </div>

        {/* Featured project */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            backgroundColor: 'var(--color-bg-surface)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: '2px',
            minHeight: '320px',
            border: '1px solid var(--color-border)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-5" style={{ minHeight: '320px' }}>
            {/* Image */}
            <div className="md:col-span-3" style={{ position: 'relative', minHeight: '240px' }}>
              <Image
                src="/images/code.jpg"
                alt={featured.name}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent 50%, var(--color-bg-surface) 100%)'
              }} />
            </div>
            {/* Content */}
            <div
              className="md:col-span-2"
              style={{
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="tag-accent">{featured.language ?? 'Web'}</span>
                {featured.topics?.slice(0, 2).map((t) => (
                  <span key={t} className="tag-editorial">{t}</span>
                ))}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                margin: 0
              }}>
                {featured.name}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-base)',
                fontWeight: 300,
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--leading-body)',
                margin: 0
              }}>
                {featured.description}
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <a
                  href={featured.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent-primary)',
                    textDecoration: 'none',
                    border: '1px solid var(--color-accent-line)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-sm)'
                  }}
                >
                  GitHub →
                </a>
                {(featured.homepage != null && featured.homepage !== '') && (
                  <a
                    href={featured.homepage ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tracking-widest)',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      border: '1px solid var(--color-border-hover)',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    Ver Live →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Other projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
            marginBottom: '48px'
          }}
        >
          {others.map((repo) => (
            <div
              key={repo.name}
              className="reveal project-card"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              {/* Card image */}
              <div style={{ position: 'relative', height: '160px' }}>
                <Image
                  src="/images/code.jpg"
                  alt={repo.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.8) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} />
                {(repo.language != null && repo.language !== '') && (
                  <span
                    className="tag-editorial"
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      borderColor: langColor[repo.language ?? ''] ?? 'var(--color-border-hover)',
                      color: langColor[repo.language ?? ''] ?? 'var(--color-text-secondary)'
                    }}
                  >
                    {repo.language}
                  </span>
                )}
              </div>
              {/* Card content */}
              <div style={{ padding: '20px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-base)',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  margin: '0 0 8px'
                }}>
                  {repo.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 300,
                  color: 'var(--color-text-muted)',
                  lineHeight: 'var(--leading-body)',
                  margin: '0 0 16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {repo.description}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent-primary)',
                    textDecoration: 'none'
                  }}
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <Link
            href="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 40px',
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid var(--color-border-hover)',
              borderRadius: 'var(--radius-sm)',
              transition: 'border-color 0.2s ease'
            }}
          >
            Ver todos os projetos →
          </Link>
        </div>
      </div>
    </section>
  )
}
