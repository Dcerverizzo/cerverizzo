import React from 'react'
import Nav from '../components/Nav'
import { type Metadata } from 'next'
import { DocumentArrowDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Currículo | Daniel Cerverizzo',
  description: 'Resume and professional experience of Daniel Cerverizzo'
}

const DRIVE_PDF_URL = process.env.NEXT_PUBLIC_RESUME_URL ?? 'https://drive.google.com/file/d/1CNJNoILKdnWzMjIb6hsmstEqM7CzYHQR/view?usp=sharing'
const DRIVE_EMBED_URL = DRIVE_PDF_URL.replace('/view?usp=sharing', '/preview')

const skills = [
  { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'PHP', 'Ruby', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Rails', 'Laravel'] },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },
  { category: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jira'] }
]

const experience = [
  {
    role: 'Software Engineer',
    company: 'Current Position',
    period: 'Present',
    description: 'Full-stack development with modern technologies'
  }
]

export default function ResumePage () {
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
              Experiência
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
              Currículo
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              marginTop: 'var(--space-4)',
              maxWidth: '540px',
              lineHeight: 'var(--leading-body)'
            }}>
              Software Engineer Full Stack com mais de 8 anos de experiência.
            </p>
          </header>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-16)' }}>
            <a href={DRIVE_PDF_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ArrowTopRightOnSquareIcon style={{ width: '16px', height: '16px' }} />
              Abrir no Google Drive
            </a>
            <a
              href={DRIVE_PDF_URL.replace('/view?usp=sharing', '/export?format=pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <DocumentArrowDownIcon style={{ width: '16px', height: '16px' }} />
              Download PDF
            </a>
          </div>

          {/* Skills Section */}
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-8)'
            }}>
              Skills
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: 'var(--space-4)'
            }}>
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  style={{
                    backgroundColor: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-6)'
                  }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: 'var(--tracking-widest)',
                    textTransform: 'uppercase',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    {skillGroup.category}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    {skillGroup.items.map((skill) => (
                      <li key={skill} style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--color-text-secondary)'
                      }}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-8)'
            }}>
              Experiência
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {experience.map((exp, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--space-6)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 'var(--space-2)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-base)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      margin: 0
                    }}>
                      {exp.role}
                    </h3>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',
                      letterSpacing: 'var(--tracking-wide)',
                      color: 'var(--color-text-muted)'
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-accent-primary)',
                    marginBottom: 'var(--space-3)'
                  }}>
                    {exp.company}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--leading-body)',
                    margin: 0
                  }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Embedded PDF */}
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-8)'
            }}>
              Currículo completo
            </h2>
            <div style={{
              backgroundColor: 'var(--color-bg-elevated)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden'
            }}>
              <iframe
                src={DRIVE_EMBED_URL}
                style={{ width: '100%', height: '800px', display: 'block', border: 'none' }}
                allow="autoplay"
                title="Resume PDF"
              />
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}
