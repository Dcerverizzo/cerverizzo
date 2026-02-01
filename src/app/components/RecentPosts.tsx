import Link from 'next/link'
import { fetchPosts } from '../../lib/devto/fetch'
import { ChatBubbleLeftIcon, ClockIcon } from '@heroicons/react/24/outline'

const RecentPosts = async ({ limit }: { limit?: number }): Promise<JSX.Element> => {
  const recentPosts = await fetchPosts()
  const postsToDisplay = (typeof limit === 'number' && !isNaN(limit)) ? recentPosts.slice(0, limit) : recentPosts

  return (
    <div className="my-8 flex flex-col space-y-4 w-full">
      {postsToDisplay.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="group border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          {/* Cover Image */}
          {post.cover_image !== null && post.cover_image !== '' && (
            <div className="h-32 overflow-hidden">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <div className="p-4">
            {/* Title */}
            <h3 className="font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>

              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {post.reading_time_minutes} min
              </span>

              <span className="flex items-center gap-1">
                <ChatBubbleLeftIcon className="w-4 h-4" />
                {post.comments_count}
              </span>
            </div>

            {/* Tags */}
            {Array.isArray(post.tag_list) && post.tag_list.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tag_list.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
                  >
                    #{tag}
                  </span>
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
