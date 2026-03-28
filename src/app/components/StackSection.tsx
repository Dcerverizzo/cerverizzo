'use client'

import { useTranslation } from '@/contexts/LanguageContext'

const stackGroups = [
  {
    key: 'frontend' as const,
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS']
  },
  {
    key: 'backend' as const,
    items: ['Node.js', 'Python', 'PHP', 'Ruby on Rails', 'Express', 'Laravel']
  },
  {
    key: 'database' as const,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    key: 'devops' as const,
    items: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Figma']
  }
]

export default function StackSection () {
  const { t } = useTranslation()

  return (
    <section
      id="stack"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
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
              {t.stack.index}
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
            {t.stack.heading}
          </h2>
        </div>

        {/* Stack groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {stackGroups.map((group) => (
            <div
              key={group.key}
              className="reveal"
              style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '32px',
                paddingBottom: '32px',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '24px'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start">
                {/* Category label */}
                <div>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)'
                  }}>
                    {t.stack.categories[group.key]}
                  </span>
                </div>

                {/* Tech items */}
                <div className="md:col-span-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {group.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: '10px 20px',
                        backgroundColor: 'var(--color-bg-elevated)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-secondary)',
                        transition: 'all 0.2s ease',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-accent-line)'
                        e.currentTarget.style.color = 'var(--color-accent-primary)'
                        e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-border)'
                        e.currentTarget.style.color = 'var(--color-text-secondary)'
                        e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)'
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
