import Link from "next/link";
import React from "react";
import { getAllPosts } from "../../../lib/posts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { colors } from "@/styles/theme";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className={`min-h-screen ${colors.bgPrimary} ${colors.textPrimary} py-20 px-4`}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${colors.textTitle}`}>
                        Blog
                    </h1>
                    <p className={`text-xl ${colors.textMuted}`}>
                        Thoughts on music, technology, and creative expression
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-6">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="block transition-transform hover:scale-[1.02]"
                        >
                            <Card className="bg-black border-[#6272A4] hover:border-[#BD93F9] transition-colors">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <CardTitle className="text-2xl mb-2 text-[#F8F8F2]">
                                                {post.title || post.slug}
                                            </CardTitle>
                                            {post.date && (
                                                <CardDescription className="text-[#6272A4]">
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </CardDescription>
                                            )}
                                        </div>
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.slice(0, 2).map((tag: string) => (
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
                                </CardHeader>
                                {post.excerpt && (
                                    <CardContent>
                                        <p className="text-[#F8F8F2] leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </CardContent>
                                )}
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Empty State */}
                {posts.length === 0 && (
                    <Card className="bg-black border-[#6272A4]">
                        <CardContent className="py-12 text-center">
                            <p className={`text-xl ${colors.textMuted}`}>
                                No posts yet. Check back soon!
                            </p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
