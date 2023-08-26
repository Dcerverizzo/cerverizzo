import fs from 'fs';
import matter from 'gray-matter';

interface PostMetadata {
  title: string;
  day: string;
  month: string;
  subtitle: string;
  slug: string;
}

const getPostMetadata = (): PostMetadata[] => {
  const folder = "blog/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    const dateParts = matterResult.data.date.split('/');
    const day = dateParts[0];
    const month = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`)
      .toLocaleString('en', { month: 'short' });

    return {
      title: matterResult.data.title,
      day: day,
      month: month,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostMetadata;
