"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { colors } from "@/styles/theme";

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const email = "simulatedcreativitynsb@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className={`min-h-screen ${colors.bgPrimary} ${colors.textPrimary} p-4`}
        >
            <div className="max-w-3xl mx-auto pt-12 pb-20">
                {/* Back Link */}
                <Link
                    href="/"
                    className={`inline-block mb-8 ${colors.link} ${colors.linkHover} text-lg`}
                >
                    ← Back to Home
                </Link>

                {/* Header */}
                <h1 className={`text-5xl font-bold mb-4 ${colors.textTitle}`}>
                    Join the Community
                </h1>
                <p className={`text-xl mb-12 ${colors.textMuted}`}>
                    For lessons, bookings, collaborations, or just to say
                    what's up—we're here.
                </p>

                {/* Discord Community */}
                <div
                    className={`mb-8 p-8 rounded-lg border-2 ${colors.bgBorder.assistant} ${colors.bgMessage.assistant}`}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <FaDiscord className="text-5xl text-[#5865F2]" />
                        <h2 className="text-3xl font-bold">
                            Join Our Discord
                        </h2>
                    </div>
                    <p className={`text-lg mb-6 ${colors.textMuted}`}>
                        The Simulated Creativity Discord is where the community
                        lives. Get event updates, connect with other creators,
                        find open decks schedules, and be part of building NSB's
                        EDM scene.
                    </p>
                    <a
                        href="https://discord.gg/a6FxayHx5E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-bold text-lg bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white`}
                    >
                        <FaDiscord className="text-2xl" />
                        Join Discord Community
                    </a>
                </div>

                {/* Email Contact */}
                <div
                    className={`p-8 rounded-lg border ${colors.bgBorder.user} ${colors.bgMessage.user}`}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <FaEnvelope
                            className={`text-4xl ${colors.textTitle}`}
                        />
                        <h2 className="text-3xl font-bold">Email Us</h2>
                    </div>
                    <p className={`text-lg mb-4 ${colors.textMuted}`}>
                        For business inquiries, booking requests, or anything
                        that needs a direct line:
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className={`text-2xl font-bold ${colors.textTitle}`}>
                            {email}
                        </span>
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
                                copied
                                    ? "bg-green-600 text-white"
                                    : `${colors.bgMessage.user} border ${colors.bgBorder.user} hover:${colors.bgBorder.assistant}`
                            }`}
                        >
                            {copied ? (
                                <>
                                    <FaCheck /> Copied!
                                </>
                            ) : (
                                <>
                                    <FaCopy /> Copy Email
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* What to Reach Out About */}
                <div className="mt-12">
                    <h3
                        className={`text-2xl font-bold mb-6 ${colors.textTitle} text-center`}
                    >
                        What We're Here For
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div
                            className={`p-4 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <p className="font-semibold mb-1">📚 Lessons</p>
                            <p className={`text-sm ${colors.textMuted}`}>
                                Ableton, DJing, airbrush, visual production
                            </p>
                        </div>
                        <div
                            className={`p-4 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <p className="font-semibold mb-1">🎵 Open Decks</p>
                            <p className={`text-sm ${colors.textMuted}`}>
                                Get on the rotation, bring your crew
                            </p>
                        </div>
                        <div
                            className={`p-4 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <p className="font-semibold mb-1">🎨 Body Paint</p>
                            <p className={`text-sm ${colors.textMuted}`}>
                                AI-designed airbrush services
                            </p>
                        </div>
                        <div
                            className={`p-4 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <p className="font-semibold mb-1">🤝 Collaborate</p>
                            <p className={`text-sm ${colors.textMuted}`}>
                                Artists, venues, promoters welcome
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
