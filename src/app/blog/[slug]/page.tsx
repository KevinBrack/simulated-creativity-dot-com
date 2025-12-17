import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../../../lib/posts";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/styles/theme";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((p: any) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    let post;
    try {
        post = await getPostBySlug(slug as string);
    } catch (err) {
        console.error("Error loading post:", err);
        return notFound();
    }

    return (
        <div className={`min-h-screen ${colors.bgPrimary} ${colors.textPrimary} py-20 px-4`}>
            <article className="max-w-3xl mx-auto">
                {/* Back Button */}
                <Link href="/blog" className="inline-block mb-8">
                    <Button
                        variant="ghost"
                        className="text-[#BD93F9] hover:text-[#50FA7B] hover:bg-[#44475A]"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blog
                    </Button>
                </Link>

                {/* Post Header */}
                <header className="mb-8">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${colors.textTitle}`}>
                        {post.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 flex-wrap mb-4">
                        {post.date && (
                            <time className={`text-lg ${colors.textMuted}`}>
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        )}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag: string) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-[#44475A] text-[#BD93F9] hover:bg-[#6272A4]"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    <Separator className="bg-[#6272A4]" />
                </header>

                {/* Post Content */}
                <div
                    className="prose prose-invert prose-lg max-w-none
                        prose-headings:text-[#F8F8F2] prose-headings:font-bold
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[#BD93F9]
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#50FA7B]
                        prose-p:text-[#F8F8F2] prose-p:leading-relaxed prose-p:mb-4
                        prose-a:text-[#8BE9FD] prose-a:no-underline hover:prose-a:text-[#50FA7B] hover:prose-a:underline
                        prose-strong:text-[#FF79C6] prose-strong:font-bold
                        prose-code:text-[#50FA7B] prose-code:bg-[#44475A] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                        prose-pre:bg-[#282A36] prose-pre:border prose-pre:border-[#6272A4]
                        prose-ul:text-[#F8F8F2] prose-ol:text-[#F8F8F2]
                        prose-li:marker:text-[#BD93F9]
                        prose-blockquote:border-l-[#BD93F9] prose-blockquote:text-[#F8F8F2] prose-blockquote:italic"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {/* Back to Blog Footer */}
                <Separator className="bg-[#6272A4] my-12" />
                <div className="text-center">
                    <Link href="/blog">
                        <Button
                            variant="outline"
                            className="border-[#BD93F9] text-[#BD93F9] hover:bg-[#BD93F9] hover:text-[#282A36]"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to All Posts
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    );
}
