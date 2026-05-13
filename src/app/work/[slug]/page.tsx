import { notFound } from 'next/navigation'
import { caseStudies } from '@/app/work/data'
import CaseStudyContent from './CaseStudyContent'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export function generateStaticParams () {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (cs == null) return {}
  return {
    title: `${cs.title} | Work | Daniel Cerverizzo`,
    description: cs.tagline.en,
    metadataBase: new URL('https://cerverizzo.dev/')
  }
}

export default function CaseStudyPage ({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug)
  if (cs == null) notFound()

  const idx = caseStudies.indexOf(cs)
  const prev = idx > 0
    ? caseStudies[idx - 1]
    : caseStudies[caseStudies.length - 1]
  const next = idx < caseStudies.length - 1
    ? caseStudies[idx + 1]
    : caseStudies[0]

  return (
    <CaseStudyContent
      cs={cs}
      prev={prev ?? null}
      next={next ?? null}
    />
  )
}
