import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

const siteUrl = "https://Gaurav-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gaurav — Frontend Developer & HealthTech Builder",
    template: "%s · Gaurav",
  },
  description:
    "Portfolio of Gaurav Gautam, a frontend-focused developer and pharmacy student building toward HealthTech.",
  keywords: [
    "Gaurav",
    "Gaurav Gautam",
    "Frontend Developer",
    "HealthTech",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Gaurav" }],
  creator: "Gaurav",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Gaurav — Frontend Developer & HealthTech Builder",
    description:
      "Portfolio of Gaurav, a frontend-focused developer and pharmacy student building toward HealthTech.",
    url: siteUrl,
    siteName: "Gaurav",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav — Frontend Developer & HealthTech Builder",
    description:
      "Portfolio of Gaurav, a frontend-focused developer and pharmacy student building toward HealthTech.",
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded focus:bg-blue focus:px-4 focus:py-2 focus:text-bg focus:font-medium"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
