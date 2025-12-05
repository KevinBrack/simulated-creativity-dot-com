import React from "react";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaInstagram } from "react-icons/fa";
import { colors } from "@/styles/theme";

export default function Header() {
    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 backdrop-blur-md bg-opacity-80 ${colors.bgPrimary}`}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo / Home Link */}
                <Link
                    href="/"
                    className="text-xl font-bold text-[#50FA7B] hover:text-[#8BE9FD] transition-colors"
                >
                    Simulated Creativity
                </Link>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://discord.gg/a6FxayHx5E"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-[#5865F2] transition-colors"
                        title="Join our Discord"
                    >
                        <FaDiscord />
                    </a>
                    <a
                        href="https://www.instagram.com/sc_lordnikon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-[#E4405F] transition-colors"
                        title="Follow on Instagram"
                    >
                        <FaInstagram />
                    </a>
                    <Link
                        href="/contact"
                        className={`text-2xl ${colors.link} ${colors.linkHover} transition-colors`}
                        title="Contact us"
                    >
                        <FaEnvelope />
                    </Link>
                </div>
            </div>
        </header>
    );
}
