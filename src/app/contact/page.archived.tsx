"use client";

import React, { useState } from "react";
import Link from "next/link";
import { colors } from "@/styles/theme";

interface FormData {
    name: string;
    email: string;
    interest: string;
    message: string;
    timestamp: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        interest: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create submission object with timestamp
        const submission: FormData = {
            ...formData,
            timestamp: new Date().toISOString(),
        };

        // Get existing submissions from localStorage
        const existing = localStorage.getItem("sc-contacts");
        const contacts: FormData[] = existing ? JSON.parse(existing) : [];

        // Add new submission
        contacts.push(submission);

        // Save back to localStorage
        localStorage.setItem("sc-contacts", JSON.stringify(contacts));

        // Show success message
        setSubmitted(true);

        // Reset form
        setFormData({
            name: "",
            email: "",
            interest: "",
            message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
                <h1
                    className={`text-5xl font-bold mb-4 ${colors.textTitle}`}
                >
                    Get in Touch
                </h1>
                <p className={`text-xl mb-12 ${colors.textMuted}`}>
                    Whether you want to learn, perform, collaborate, or just
                    say what's up—we want to hear from you.
                </p>

                {/* Success Message */}
                {submitted && (
                    <div
                        className={`mb-8 p-6 rounded-lg border-2 ${colors.bgBorder.assistant} ${colors.bgMessage.assistant}`}
                    >
                        <p className="text-lg font-bold mb-2">
                            Message received! 🎉
                        </p>
                        <p className={colors.textMuted}>
                            We'll get back to you soon. In the meantime,{" "}
                            <a
                                href="https://x.com/KevinBrack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${colors.link} ${colors.linkHover}`}
                            >
                                follow us on Twitter
                            </a>{" "}
                            to stay updated.
                        </p>
                    </div>
                )}

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className={`${colors.bgMessage.assistant} border ${colors.bgBorder.assistant} rounded-lg p-8`}
                >
                    {/* Name */}
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-lg font-semibold mb-2"
                        >
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-[#282A36] border ${colors.bgBorder.user} ${colors.textPrimary} focus:outline-none focus:border-[#BD93F9] transition-colors`}
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-lg font-semibold mb-2"
                        >
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-[#282A36] border ${colors.bgBorder.user} ${colors.textPrimary} focus:outline-none focus:border-[#BD93F9] transition-colors`}
                            placeholder="your@email.com"
                        />
                    </div>

                    {/* Interest */}
                    <div className="mb-6">
                        <label
                            htmlFor="interest"
                            className="block text-lg font-semibold mb-2"
                        >
                            I'm interested in... *
                        </label>
                        <select
                            id="interest"
                            name="interest"
                            required
                            value={formData.interest}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg bg-[#282A36] border ${colors.bgBorder.user} ${colors.textPrimary} focus:outline-none focus:border-[#BD93F9] transition-colors`}
                        >
                            <option value="">Select one...</option>
                            <option value="lessons-music">
                                Music Production / DJ Lessons
                            </option>
                            <option value="lessons-visual">
                                Airbrush / Visual Arts Lessons
                            </option>
                            <option value="performing">
                                Performing (DJ / Open Decks)
                            </option>
                            <option value="body-paint">
                                Body Paint Services
                            </option>
                            <option value="collaborating">
                                Collaborating / Joining the Team
                            </option>
                            <option value="events">
                                Upcoming Events
                            </option>
                            <option value="other">
                                Other / Just Saying Hi
                            </option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-lg font-semibold mb-2"
                        >
                            Message *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className={`w-full px-4 py-3 rounded-lg bg-[#282A36] border ${colors.bgBorder.user} ${colors.textPrimary} focus:outline-none focus:border-[#BD93F9] transition-colors resize-none`}
                            placeholder="Tell us what you're thinking..."
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full px-8 py-4 rounded-lg font-bold text-lg ${colors.bgMessage.user} border-2 ${colors.bgBorder.user} hover:${colors.bgBorder.assistant} transition-colors`}
                    >
                        Send Message
                    </button>

                    <p
                        className={`mt-4 text-sm ${colors.textMuted} text-center`}
                    >
                        * Required fields
                    </p>
                </form>

                {/* Alternative Contact */}
                <div className="mt-12 text-center">
                    <p className={`${colors.textMuted} mb-4`}>
                        Or reach out directly:
                    </p>
                    <p className={colors.textPrimary}>
                        <a
                            href="https://x.com/KevinBrack"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${colors.link} ${colors.linkHover} font-semibold`}
                        >
                            @KevinBrack on Twitter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
