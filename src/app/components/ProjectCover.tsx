import Image from 'next/image'
import { repoTitle, type Repo } from '@/lib/github/types'

interface Props {
  repo: Repo
  sizes: string
  priority?: boolean
}

// Real screenshot when the project has one; otherwise a typographic cover,
// so no two cards share the same stock photo.
export default function ProjectCover ({ repo, sizes, priority = false }: Props) {
  if (repo.image != null) {
    return (
      <Image
        src={repo.image}
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
      />
    )
  }

  return (
    <div className="project-cover-fallback" aria-hidden="true">
      <span>{repoTitle(repo)}</span>
    </div>
  )
}
