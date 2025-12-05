import React from "react";
import Link from "next/link";
import { colors } from "@/styles/theme";

export default function Home() {
    return (
        <div className={`${colors.bgPrimary} ${colors.textPrimary}`}>
            {/* Hero Section - Full Screen */}
            <section
                className="relative h-screen flex items-center justify-center p-4 -mt-16 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/backgrounds/sunset-dj.jpeg)' }}
            >
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

                {/* Content - Tinted glass container */}
                <div className="max-w-5xl mx-auto text-center relative z-10 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h1
                        className={`text-6xl md:text-8xl font-bold mb-6 ${colors.textTitle}`}
                    >
                        Simulated Creativity
                    </h1>
                    <p className="text-2xl md:text-4xl font-semibold mb-8">
                        Year-Round EDM From the Sharkbite Capitol of the World
                    </p>
                    <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
                        Bringing immersive electronic music experiences,
                        airbrushed body art, and creative education to{" "}
                        <span className={colors.textTitle}>
                            New Smyrna Beach
                        </span>{" "}
                        and{" "}
                        <span className={colors.textTitle}>Port Orange</span>
                    </p>
                    <p
                        className={`text-lg mb-12 ${colors.textMuted} max-w-2xl mx-auto`}
                    >
                        Weekly events • Open decks • Visual performances •
                        Community-first entertainment
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className={`px-8 py-4 rounded-lg font-bold text-lg ${colors.bgMessage.assistant} border-2 ${colors.bgBorder.assistant} hover:${colors.bgBorder.user} transition-colors`}
                        >
                            Join the Movement
                        </Link>
                        <a
                            href="#lessons"
                            className={`px-8 py-4 rounded-lg font-bold text-lg border-2 ${colors.bgBorder.user} hover:bg-[#44475A] transition-colors`}
                        >
                            Learn with Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Lessons & Mentorship Section */}
            <section
                id="lessons"
                className={`py-20 px-4 ${colors.bgMessage.assistant}`}
            >
                <div className="max-w-6xl mx-auto">
                    <h2
                        className={`text-4xl md:text-5xl font-bold text-center mb-6 ${colors.textTitle}`}
                    >
                        Learn from Lord Nikon and friends
                    </h2>
                    <p
                        className={`text-xl text-center mb-12 ${colors.textMuted} max-w-3xl mx-auto`}
                    >
                        20+ years in Chicago's electronic music scene.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Music Production */}
                        <div
                            className={`p-6 rounded-lg border ${colors.bgBorder.assistant}`}
                        >
                            <h3
                                className={`text-2xl font-bold mb-4 ${colors.textTitle}`}
                            >
                                Music Production
                            </h3>
                            <ul className={`space-y-2 ${colors.textPrimary}`}>
                                <li>• Ableton Live production</li>
                                <li>• Sound design & mixing</li>
                                <li>• Arrangement techniques</li>
                                <li>• Festival-ready workflow</li>
                            </ul>
                        </div>

                        {/* DJ Skills */}
                        <div
                            className={`p-6 rounded-lg border ${colors.bgBorder.assistant}`}
                        >
                            <h3
                                className={`text-2xl font-bold mb-4 ${colors.textTitle}`}
                            >
                                DJ Performance
                            </h3>
                            <ul className={`space-y-2 ${colors.textPrimary}`}>
                                <li>• Algoriddim djay, Serato, Rekordbox</li>
                                <li>• Mixing and transitions</li>
                                <li>• Reading crowds</li>
                                <li>• Set building strategies</li>
                            </ul>
                        </div>

                        {/* Visual Arts */}
                        <div
                            className={`p-6 rounded-lg border ${colors.bgBorder.assistant}`}
                        >
                            <h3
                                className={`text-2xl font-bold mb-4 ${colors.textTitle}`}
                            >
                                Visual Arts & Tech
                            </h3>
                            <ul className={`space-y-2 ${colors.textPrimary}`}>
                                <li>• Airbrush body painting</li>
                                <li>• Laser cutting for stencils</li>
                                <li>• Resolume (VJ software)</li>
                                <li>• Stage design & production</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className={`text-lg mb-6 ${colors.textPrimary}`}>
                            <span className="font-bold">Private lessons</span>{" "}
                            and{" "}
                            <span className="font-bold">group workshops</span>{" "}
                            available
                        </p>
                        <Link
                            href="/contact"
                            className={`inline-block px-8 py-4 rounded-lg font-bold text-lg ${colors.bgMessage.user} border-2 ${colors.bgBorder.user} hover:${colors.bgBorder.assistant} transition-colors`}
                        >
                            Inquire About Lessons
                        </Link>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2
                        className={`text-4xl md:text-5xl font-bold mb-6 ${colors.textTitle}`}
                    >
                        We Need Creatives Like You
                    </h2>
                    <p className={`text-xl mb-8 ${colors.textPrimary}`}>
                        New Smyrna Beach has{" "}
                        <span className="font-bold">
                            zero EDM infrastructure
                        </span>
                        . We're building it from scratch, and we need artists,
                        DJs, body painters, visual designers, and passionate
                        community builders.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
                        <div
                            className={`p-6 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <h3 className="text-xl font-bold mb-3">
                                DJs & Producers
                            </h3>
                            <p className={colors.textMuted}>
                                Open decks format means everyone gets stage
                                time. Bring your crew, play your hour, build the
                                scene together.
                            </p>
                        </div>

                        <div
                            className={`p-6 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <h3 className="text-xl font-bold mb-3">
                                Visual Artists
                            </h3>
                            <p className={colors.textMuted}>
                                Body painters, projection mappers, designers.
                                We're creating immersive experiences that blend
                                art and music.
                            </p>
                        </div>

                        <div
                            className={`p-6 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <h3 className="text-xl font-bold mb-3">
                                Promoters & Organizers
                            </h3>
                            <p className={colors.textMuted}>
                                Help us build weekly events, connect with
                                venues, and grow the community one night at a
                                time.
                            </p>
                        </div>

                        <div
                            className={`p-6 rounded-lg ${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`}
                        >
                            <h3 className="text-xl font-bold mb-3">
                                Believers
                            </h3>
                            <p className={colors.textMuted}>
                                If you're tired of being told to "go to
                                Orlando," you're our people. Let's make this
                                happen here.
                            </p>
                        </div>
                    </div>

                    <p
                        className={`text-2xl font-bold mb-6 ${colors.textTitle}`}
                    >
                        PLUR Forever.
                    </p>

                    <Link
                        href="/contact"
                        className={`inline-block px-10 py-5 rounded-lg font-bold text-xl ${colors.bgMessage.user} border-2 ${colors.bgBorder.user} hover:${colors.bgBorder.assistant} transition-colors`}
                    >
                        Get Involved
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer
                className={`py-8 px-4 ${colors.bgMessage.assistant} border-t ${colors.bgBorder.assistant}`}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <p className={`text-sm ${colors.textMuted}`}>
                        © 2024 Simulated Creativity LLC • New Smyrna Beach, FL
                    </p>
                </div>
            </footer>
        </div>
    );
}
