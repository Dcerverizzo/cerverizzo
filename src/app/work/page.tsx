import WorkContent from './WorkContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work | Daniel Cerverizzo',
  description: 'Design Engineer case studies — product decisions and UX with measurable results.',
  metadataBase: new URL('https://cerverizzo.dev/')
}

export default function WorkPage () {
  return <WorkContent />
}
