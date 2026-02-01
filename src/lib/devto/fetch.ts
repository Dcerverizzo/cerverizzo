import { notFound } from 'next/navigation'
import { type Post, type PostDetails } from './types'

export async function fetchPosts (): Promise<Post[]> {
  const res = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEVTO_USERNAME}&per_page=100`,
    { cache: 'no-store' }
  )

  if (!res.ok) notFound()

  const data: Post[] = await res.json()
  return data
}

export async function fetchPost (slug: string): Promise<PostDetails> {
  const res = await fetch(
    `https://dev.to/api/articles/${process.env.DEVTO_USERNAME}/${slug}`,
    { cache: 'no-store' }
  )

  if (!res.ok) notFound()

  const data: PostDetails = await res.json()
  return data
}
