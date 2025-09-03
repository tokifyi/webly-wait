import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webly - Create your website with AI in minutes",
  description: "Create your website with AI in minutes. Just describe your idea and watch as AI creates a beautiful, professional website in seconds.",
  keywords: ["AI website generator", "website builder", "landing page", "SaaS", "portfolio", "business website", "no-code"],
  authors: [{ name: "Webly.ai" }],
  creator: "Webly.ai",
  publisher: "Webly.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://webly.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webly - Create your website with AI in minutes",
    description: "Create your website with AI in minutes. Just describe your idea and watch as AI creates a beautiful, professional website in seconds.",
    url: "https://webly.ai",
    siteName: "Webly",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webly - Create your website with AI in minutes",
    description: "Create your website with AI in minutes. Just describe your idea and watch as AI creates a beautiful, professional website in seconds.",
    creator: "@weblyai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
