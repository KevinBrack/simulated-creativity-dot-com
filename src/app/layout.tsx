import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Simulated Creativity",
    description: "Year-Round EDM From the Sharkbite Capitol of the World. Bringing immersive electronic music experiences, airbrushed body art, and creative education to New Smyrna Beach and Port Orange.",
    icons: {
        icon: "/favicon.svg",
        apple: "/favicon.svg",
    },
    openGraph: {
        title: "Simulated Creativity",
        description: "Year-Round EDM From the Sharkbite Capitol of the World. Bringing immersive electronic music experiences to New Smyrna Beach.",
        url: "https://simulated-creativity.com",
        siteName: "Simulated Creativity",
        images: [
            {
                url: "/backgrounds/sunset-dj.jpeg",
                width: 1200,
                height: 630,
                alt: "Simulated Creativity - EDM Events in New Smyrna Beach",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Simulated Creativity",
        description: "Year-Round EDM From the Sharkbite Capitol of the World",
        images: ["/backgrounds/sunset-dj.jpeg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                <main className="pt-16">{children}</main>
            </body>
        </html>
    );
}
