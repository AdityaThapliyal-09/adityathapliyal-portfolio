import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import BackgroundText from "@/components/BackgroundText/BackgroundText";
import { siteConfig } from "@/lib/data";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adityathapliyal.vercel.app"),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "Aditya Thapliyal",
    "Full Stack Developer",
    "AI Engineer",
    "Product Builder",
    "Next.js Developer",
    "Flutter Developer",
    "React Developer",
    "BCA Student",
    "Graphic Era Hill University",
    "Dehradun",
    "India",
    "UniExchange",
    "Verso",
    "CampusShield",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "https://adityathapliyal.vercel.app",
    siteName: `${siteConfig.name} Portfolio`,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.title} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@adityathapliyal",
    images: ["/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        <BackgroundText />
        {children}
      </body>
    </html>
  );
}
