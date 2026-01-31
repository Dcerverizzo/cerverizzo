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
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-6xl p-6">
        <Nav />

        <header className="mt-8 mb-6">
          <h1 className="text-3xl font-bold mb-2">Currículo</h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Software Engineer Full Stack
          </p>
        </header>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a
            href={DRIVE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            Open in Google Drive
          </a>
          <a
            href={DRIVE_PDF_URL.replace('/view?usp=sharing', '/export?format=pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        {/* Skills Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow">
                <h3 className="font-semibold text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-2">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-1">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-sm text-neutral-700 dark:text-neutral-300">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-6 border-l-2 border-blue-500 bg-white dark:bg-gray-900 rounded-r-xl p-4 shadow"
              >
                <div className="absolute -left-2 top-6 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">{exp.period}</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{exp.company}</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Embedded PDF */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Full Resume</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden">
            <iframe
              src={DRIVE_EMBED_URL}
              className="w-full h-[600px] md:h-[800px]"
              allow="autoplay"
              title="Resume PDF"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
