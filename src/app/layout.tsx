import type { Metadata } from "next";
import { Orbitron, Zain } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const zain = Zain({
    variable: "--font-zain",
    subsets: ["latin"],
    weight: ["200", "300", "400", "700", "800", "900"],
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
                className={`${orbitron.variable} ${zain.variable} font-zain antialiased bg-black`}
            >
                <Header />
                <main className="pt-16">{children}</main>
            </body>
        </html>
    );
}
