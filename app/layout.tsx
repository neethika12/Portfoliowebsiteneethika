import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = Space_Grotesk({
  variable: "--font-mono-plex",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Neethika Prathigadapa | Researcher × Software Engineer",
  description:
    "MS Computer Science @ UF — brain-aligned video models, safety-critical anomaly detection, and production AI platforms.",
  keywords: [
    "machine learning",
    "software engineer",
    "AI research",
    "neuroscience",
    "safety-critical AI",
    "University of Florida",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
