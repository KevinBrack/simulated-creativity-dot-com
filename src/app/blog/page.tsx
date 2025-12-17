import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '../../../lib/posts';

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blog</h1>
      <ul>
        {posts.map((p: any) => (
          <li key={p.slug} style={{ margin: '1rem 0' }}>
            <Link href={`/blog/${p.slug}`}>
              <a style={{ fontSize: '1.1rem' }}>{p.title || p.slug}</a>
            </Link>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>{p.date}</div>
            {p.excerpt && <p style={{ marginTop: '0.25rem' }}>{p.excerpt}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
