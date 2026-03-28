import Link from 'next/link'
import { fetchPosts } from '../../lib/devto/fetch'
import { ChatBubbleLeftIcon, ClockIcon } from '@heroicons/react/24/outline'

const RecentPosts = async ({ limit }: { limit?: number }): Promise<JSX.Element> => {
  const recentPosts = await fetchPosts()
  const postsToDisplay = (typeof limit === 'number' && !isNaN(limit)) ? recentPosts.slice(0, limit) : recentPosts

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {postsToDisplay.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="card-editorial"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          {/* Cover Image */}
          {post.cover_image !== null && post.cover_image !== '' && (
            <div style={{ height: '160px', overflow: 'hidden' }}>
              <img
                src={post.cover_image}
                alt={post.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
              />
            </div>
          )}

          <div style={{ padding: 'var(--space-6)' }}>
            {/* Title */}
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-lg)',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              margin: 0,
              lineHeight: 'var(--leading-tight)'
            }}>
              {post.title}
            </h3>

            {/* Meta */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-3)',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              letterSpacing: 'var(--tracking-wide)',
              color: 'var(--color-text-muted)'
            }}>
              <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ClockIcon style={{ width: '14px', height: '14px' }} />
                {post.reading_time_minutes} min
              </span>

              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ChatBubbleLeftIcon style={{ width: '14px', height: '14px' }} />
                {post.comments_count}
              </span>
            </div>

            {/* Tags */}
            {Array.isArray(post.tag_list) && post.tag_list.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
                {post.tag_list.slice(0, 4).map((tag) => (
                  <span key={tag} className="tag-editorial">#{tag}</span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RecentPosts
