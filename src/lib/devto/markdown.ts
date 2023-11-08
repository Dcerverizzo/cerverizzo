
import toc from "@jsdevtools/rehype-toc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import { unified } from "unified";

export function renderMarkdown(markdown: string): Promise<string> {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeSlug)
    .use(rehypeStringify)
    .use(toc, {
      headings: ["h1", "h2", "h3"],
    })
    .process(markdown)
    .then((res) => res.toString());
}