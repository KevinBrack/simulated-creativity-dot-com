import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const POSTS_PATH = path.join(process.cwd(), 'content', 'posts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_PATH)) return [];
  return fs.readdirSync(POSTS_PATH).filter((f) => f.endsWith('.md'));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(POSTS_PATH, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return {
    slug: realSlug,
    contentHtml,
    ...(data as { title?: string; date?: string; excerpt?: string; tags?: string[]; coverImage?: string }),
  };
}

export async function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (s) => {
      return await getPostBySlug(s);
    })
  );
  return posts.sort((a, b) => (new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()));
}
