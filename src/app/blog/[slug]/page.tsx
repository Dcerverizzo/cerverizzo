import 'highlight.js/styles/github-dark.css';

import { fetchPost } from "@/lib/devto/fetch";
import ReactMarkdown from 'react-markdown'
import Nav from '@/app/components/Nav'

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { title, description } = await fetchPost(params.slug);

  return {
    title,
    description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { body_markdown } = await fetchPost(params.slug);

  return (
    <>
      <div className="w-full min-h-screen">
        <Nav />
        <article className='prose dark:prose-invert'>
          <div>
            <ReactMarkdown>{body_markdown}</ReactMarkdown>
          </div>
        </article >
      </div >
    </>
  );
}