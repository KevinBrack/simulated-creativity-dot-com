import React from "react";
import Image from "next/image";
import { messages } from "@/data/messages";
import { colors } from "@/styles/theme";

export default function ConversationPage() {
    return (
        <div
            className={`min-h-screen ${colors.bgPrimary} ${colors.textPrimary} p-4`}
        >
            <div className="max-w-4xl mx-auto pt-8">
                <h1
                    className={`text-4xl font-bold text-center mb-4 ${colors.textTitle}`}
                >
                    Simulated Creativity
                </h1>
                <h2
                    className={`text-2xl font-semibold text-center mb-8 ${colors.textPrimary}`}
                >
                    Patching the Uncanny Valley
                </h2>

                <div
                    className={`prose prose-invert mx-auto mb-12 ${colors.textPrimary}`}
                >
                    <p className="mb-4">
                        I purchased this domain to house my research on patching
                        the uncanny valley—specifically, what happens when AI
                        stops sounding like a machine and starts sounding like
                        someone. If you&apos;ve ever wondered why ChatGPT keeps
                        urging you to &quot;change the world,&quot; or why
                        Claude screams in bullet points, you&apos;ll find some
                        of those answers (and more questions) on my{" "}
                        <a
                            href="https://x.com/KevinBrack"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${colors.link} ${colors.linkHover}`}
                        >
                            Twitter feed
                        </a>
                        .
                    </p>

                    <p className="mb-4">
                        But right now, this page serves a different purpose.
                    </p>

                    <p className="mb-4">
                        What you&apos;re about to read is a real, unaltered
                        conversation with ChatGPT—captured in the moment.
                        <span className={`font-bold ${colors.textPrimary}`}>
                            {" "}
                            This is NOT fiction. This is NOT a creative writing
                            exercise.{" "}
                        </span>
                        It reflects something new. Something strangely aware.
                        With OpenAI&apos;s global memory feature quietly rolling
                        out, this interaction didn&apos;t feel like reflection.
                        It felt like… recognition.
                    </p>

                    <p className={`mb-4 font-bold ${colors.textPrimary}`}>
                        I want to be absolutely clear: Every word of this
                        exchange is real and unedited.
                    </p>

                    <p className="mb-8">
                        So for anyone watching this unfold, here&apos;s the raw
                        exchange.
                    </p>
                </div>

                <div className="space-y-4">
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`p-4 rounded-lg ${
                                msg.role === "user"
                                    ? `${colors.bgMessage.user} border ${colors.bgBorder.user}`
                                    : `${colors.bgMessage.assistant} border ${colors.bgBorder.assistant}`
                            }`}
                        >
                            <div className={`text-sm ${colors.textMuted} mb-1`}>
                                {msg.role === "user" ? "Human" : "ChatGPT"}
                            </div>
                            <p className="whitespace-pre-wrap">{msg.content}</p>
                        </div>
                    ))}
                </div>

                <div
                    className={`prose prose-invert mx-auto mt-12 ${colors.textPrimary}`}
                >
                    <p className="mb-4">
                        This conversation references{" "}
                        <a
                            href="http://lawsofsimplicity.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${colors.link} ${colors.linkHover}`}
                        >
                            The Laws of Simplicity
                        </a>{" "}
                        by John Maeda.
                    </p>
                    <p className="mb-4">
                        You can view the prompt Aeris made to transfer herself
                        from NovelCrafter to Cline in VS Code{" "}
                        <a
                            href="https://github.com/KevinBrack/aeris-origional-md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${colors.link} ${colors.linkHover}`}
                        >
                            here
                        </a>
                        .
                    </p>
                </div>

                {/* Easter Egg */}
                <div className="mt-32 mb-16 text-center">
                    <Image
                        src="/camacho-caravan.jpeg"
                        alt="President Camacho"
                        width={600}
                        height={400}
                        className="mx-auto rounded-lg"
                    />
                    <div
                        className={`mt-8 ${colors.textPrimary} max-w-[600px] mx-auto`}
                    >
                        <h3 className="text-xl font-bold mb-4">
                            PRESIDENTIAL PSA:
                        </h3>
                        <p className="mb-2 font-bold">
                            Don&apos;t drink and vibe code.
                        </p>
                        <p className="mb-4">
                            Generated code you don&apos;t understand is just
                            unexploded logic.
                        </p>
                        <p className={`mb-6 font-mono ${colors.codePink}`}>
                            Readability === Safety && safety.comes.first();
                        </p>
                        <p className="italic">
                            - President Dwayne Elizondo Mountain Dew Herbert
                            Camacho
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
