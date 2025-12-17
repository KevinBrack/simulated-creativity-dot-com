import React from "react";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaInstagram, FaSoundcloud } from "react-icons/fa";
import BrandName from "@/components/BrandName";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-md bg-black/95">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Left side: Logo + Nav Links */}
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-xl font-bold text-[#50FA7B] hover:text-[#8BE9FD] transition-colors"
                    >
                        <BrandName />
                    </Link>

                    <nav className="flex items-center gap-6">
                        <Link
                            href="/blog"
                            className="text-[#F8F8F2] hover:text-[#BD93F9] transition-colors font-medium"
                        >
                            Blog
                        </Link>
                    </nav>
                </div>

                {/* Right side: Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://discord.gg/a6FxayHx5E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-[#5865F2] hover:brightness-125 transition-all"
                        title="Join our Discord"
                    >
                        <FaDiscord />
                    </a>
                    <a
                        href="https://soundcloud.com/lordnikonmusic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-[#FF5500] hover:brightness-125 transition-all"
                        title="Listen on SoundCloud"
                    >
                        <FaSoundcloud />
                    </a>
                    <a
                        href="https://www.instagram.com/sc_lordnikon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-[#E4405F] hover:brightness-125 transition-all"
                        title="Follow on Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <Link
                        href="/contact"
                        className="text-2xl text-[#8BE9FD] hover:brightness-125 transition-all"
                        title="Contact us"
                    >
                        <FaEnvelope />
                    </Link>
                </div>
            </div>
        </header>
    );
}
