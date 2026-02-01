import 'highlight.js/styles/github-dark.css'
import { fetchPost } from '@/lib/devto/fetch'
import Markdown from 'react-markdown'
import matter from 'gray-matter'
import type { PostFrontMatter } from '@/lib/devto/types'
import Nav from '@/app/components/Nav'
import { ChatBubbleLeftIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export async function generateMetadata ({
  params
}: {
  params: { slug: string }
}): Promise<{ title: string, description: string, metadataBase: URL }> {
  const { title, description } = await fetchPost(params.slug)

  return {
    title,
    description,
    metadataBase: new URL('https://cerverizzo.dev/blog')
  }
}

export default async function Page ({ params }: { params: { slug: string } }): Promise<JSX.Element> {
  const post = await fetchPost(params.slug)
  const { body_markdown: bodyMarkdown, cover_image: coverImage, title, reading_time_minutes: readingTime, comments_count: comments, positive_reactions_count: reactions, tag_list: tags, published_at: publishedAt } = post
  const { content, data } = matter(bodyMarkdown)
  const validatedMarkdown = validateAndManipulateMarkdown(content, data)

  return (
    <>
      <div className="w-full min-h-screen">
        <Nav />

        {/* Cover Image */}
        {coverImage !== null && coverImage !== undefined && coverImage !== '' && (
          <div className="relative w-full h-64 md:h-80 mb-6 rounded-xl overflow-hidden">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            {title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{new Date(publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>

            <span className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              {readingTime} min read
            </span>

            <span className="flex items-center gap-1">
              <HeartIcon className="w-4 h-4" />
              {reactions}
            </span>

            <span className="flex items-center gap-1">
              <ChatBubbleLeftIcon className="w-4 h-4" />
              {comments}
            </span>
          </div>

          {/* Tags */}
          {Array.isArray(tags) && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className='prose dark:prose-invert max-w-none'>
          <Markdown>{validatedMarkdown}</Markdown>
        </article>

        {/* Back link */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </>
  )

  function validateAndManipulateMarkdown (markdownBody: string, frontMatter: PostFrontMatter): string {
    const keysToExclude = ['title', 'description', 'cover_image', 'published', 'tags']
    keysToExclude.forEach(key => Reflect.deleteProperty(frontMatter, key))
    const newHeader = '---\n' + Object.keys(frontMatter).map(key => `${key}: ${frontMatter[key]}`).join('\n') + '\n---'
    const validatedMarkdown = `${newHeader}\n${markdownBody.trim()}`
    return validatedMarkdown
  }
}
