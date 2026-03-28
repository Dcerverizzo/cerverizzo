import 'highlight.js/styles/github-dark.css'
import { fetchPost } from '@/lib/devto/fetch'
import Markdown from 'react-markdown'
import matter from 'gray-matter'
import type { PostFrontMatter } from '@/lib/devto/types'
import Nav from '@/app/components/Nav'
import { ChatBubbleLeftIcon, ClockIcon, HeartIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
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
  const {
    body_markdown: bodyMarkdown,
    cover_image: coverImage,
    title,
    reading_time_minutes: readingTime,
    comments_count: comments,
    positive_reactions_count: reactions,
    tag_list: tags,
    published_at: publishedAt
  } = post
  const { content, data } = matter(bodyMarkdown)
  const validatedMarkdown = validateAndManipulateMarkdown(content, data)

  return (
    <div style={{ backgroundColor: 'var(--color-bg-base)', minHeight: '100vh' }}>
      <Nav />

      <div style={{ paddingTop: '72px' }}>
        {/* Cover Image */}
        {coverImage !== null && coverImage !== undefined && coverImage !== '' && (
          <div style={{ width: '100%', height: '320px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={coverImage}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 40%, var(--color-bg-base) 100%)'
            }} />
          </div>
        )}

        <section className="container-editorial" style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-section)' }}>
          {/* Back link */}
          <Link href="/blog" className="btn-ghost-sm" style={{ marginBottom: 'var(--space-12)', display: 'inline-flex' }}>
            <ArrowLeftIcon style={{ width: '14px', height: '14px' }} />
            Blog
          </Link>

          {/* Post Header */}
          <header style={{ marginBottom: 'var(--space-12)', marginTop: 'var(--space-8)' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 800,
              color: 'var(--color-text-primary)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
              margin: 0,
              marginBottom: 'var(--space-6)'
            }}>
              {title}
            </h1>

            {/* Meta */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'var(--space-6)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)',
              color: 'var(--color-text-muted)'
            }}>
              <span>{new Date(publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ClockIcon style={{ width: '14px', height: '14px' }} />
                {readingTime} min
              </span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <HeartIcon style={{ width: '14px', height: '14px' }} />
                {reactions}
              </span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ChatBubbleLeftIcon style={{ width: '14px', height: '14px' }} />
                {comments}
              </span>
            </div>

            {/* Tags */}
            {Array.isArray(tags) && tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-6)' }}>
                {tags.map((tag) => (
                  <span key={tag} className="tag-editorial">#{tag}</span>
                ))}
              </div>
            )}
          </header>

          {/* Divider */}
          <div style={{ borderTop: '1px solid var(--color-border)', marginBottom: 'var(--space-12)' }} />

          {/* Article Content */}
          <article className="prose-editorial">
            <Markdown>{validatedMarkdown}</Markdown>
          </article>

          {/* Divider + Back */}
          <div style={{ borderTop: '1px solid var(--color-border)', marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)' }}>
            <Link href="/blog" className="btn-ghost-sm" style={{ display: 'inline-flex' }}>
              <ArrowLeftIcon style={{ width: '14px', height: '14px' }} />
              Voltar ao Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  )

  function validateAndManipulateMarkdown (markdownBody: string, frontMatter: PostFrontMatter): string {
    const keysToExclude = ['title', 'description', 'cover_image', 'published', 'tags']
    keysToExclude.forEach(key => Reflect.deleteProperty(frontMatter, key))
    const newHeader = '---\n' + Object.keys(frontMatter).map(key => `${key}: ${frontMatter[key]}`).join('\n') + '\n---'
    return `${newHeader}\n${markdownBody.trim()}`
  }
}
