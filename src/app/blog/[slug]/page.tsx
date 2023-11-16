import 'highlight.js/styles/github-dark.css';
import { fetchPost } from "@/lib/devto/fetch";
import Markdown from 'react-markdown'
import matter, { GrayMatterFile } from 'gray-matter';
import { PostFrontMatter } from '@/lib/devto/types';
import Nav from '@/app/components/Nav';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { title, description } = await fetchPost(params.slug);

  return {
    title,
    description,
    metadataBase: new URL('https://cerverizzo.dev/blog')
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { body_markdown } = await fetchPost(params.slug);
  const { content, data } = matter(body_markdown);
  const validatedMarkdown = validateAndManipulateMarkdown(content, data);
  return (
    <>
      <div className="w-full min-h-screen">
        <Nav />
        <article className='prose dark:prose-invert'>
          <div className='note'>
            <Markdown>{validatedMarkdown}</Markdown>
          </div>
        </article>
      </div>
    </>
  );

  function validateAndManipulateMarkdown(markdownBody: string, frontMatter: PostFrontMatter): string {
    const keysToExclude = ['title', 'description', 'cover_image', 'published', 'tags'];
    keysToExclude.forEach(key => delete frontMatter[key]);
    if (frontMatter.cover_image) {
      frontMatter.cover_image = `![Cover](${frontMatter.cover_image})`;
    }
    if (frontMatter.title) {
      frontMatter.title = `${frontMatter.title}`.replace('title', '');
    }
    const newHeader = '---\n' + Object.keys(frontMatter).map(key => `${key}: ${frontMatter[key]}`).join('\n') + '\n---';
    const validatedMarkdown = `${newHeader}\n${markdownBody.trim()}`;
    const titleKey = 'title';
    const renderedTitle = frontMatter[titleKey] || '';
    const renderedMarkdown = validatedMarkdown.replace(`${titleKey}:${renderedTitle}`, `# ${renderedTitle}`);
    return renderedMarkdown;
  }
}
