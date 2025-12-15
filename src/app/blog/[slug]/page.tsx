import React from 'react';
import { getAllPosts, getPostBySlug } from '../../../../lib/posts';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p: any) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  return (
    <main style={{ padding: '2rem' }}>
      <article>
        <h1>{post.title}</h1>
        <div style={{ color: '#666', marginBottom: '1rem' }}>{post.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </main>
  );
}
