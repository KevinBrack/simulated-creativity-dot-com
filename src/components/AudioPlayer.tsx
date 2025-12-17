"use client";

import React from "react";

interface MixtapePlayerProps {
    title?: string;
    artist?: string;
}

export default function MixtapePlayer({
    title = "Mmmm... That's the Good Stuff (Volume 8)",
    artist = "Lord Nikon",
}: MixtapePlayerProps) {
    return (
        <div className="w-full max-w-3xl mx-auto bg-black border border-[#6272A4] rounded-lg p-6 shadow-lg">
            {/* Track Info */}
            <div className="mb-4 text-center">
                <h3 className="text-xl font-bold text-[#F8F8F2] mb-1">
                    {title}
                </h3>
                <p className="text-sm text-[#6272A4]">{artist}</p>
            </div>

            {/* Mixcloud Embed */}
            <div className="rounded-lg overflow-hidden">
                <iframe
                    width="100%"
                    height="120"
                    src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fkevin-brack%2Fmmmm-thats-the-good-stuff-8%2F"
                    frameBorder="0"
                    allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
                    title={`${title} by ${artist}`}
                ></iframe>
            </div>
        </div>
    );
}
