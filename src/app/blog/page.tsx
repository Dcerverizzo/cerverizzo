import { getPosts } from "../_services/notion";
import Nav from "../components/Nav";


export default async function BlogHome() {
  const posts = await getPosts();

  return (
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-2xl p-6 min-h-screen">
        <Nav/>
        <div className="my-8 flex flex-col space-y-4 w-full">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
            >
              <div className="flex flex-col">
                <p className="font-bold text-neutral-900 dark:text-neutral-100">
                  {post.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {new Date(post.createdAt).toLocaleString('pt-BR')}
                </p>
              </div>
              <div className="text-neutral-700 dark:text-neutral-300">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}