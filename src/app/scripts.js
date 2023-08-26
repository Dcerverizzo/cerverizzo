import fs from 'fs';
import { matter } from 'gray-matter';
import remaker from 'remark';
import remarkHTML from 'remark-html';

export function getAllPosts() {

  const files = fs.readdirSync('posts');
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '');
    const fileContents = fs.readFileSync(`blog/${filename}`, 'utf8');
    const { data: { title, date } } = matter(fileContents);
    const htmlContent = remaker().use(html).processSync(fileContents).toString();

    return {
      metadata: {
        ...data,
        slug,
        date,
      },
      content: htmlContent,
    };
  });
  
  return posts;
}