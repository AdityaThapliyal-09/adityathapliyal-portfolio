import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundText from "@/components/BackgroundText/BackgroundText";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Aditya Thapliyal — AI Full Stack Engineer",
  description:
    "5th Semester BCA student at Graphic Era Hill University. AI/ML Full Stack Engineer & Product Builder. I build elegant, intelligent digital products end-to-end.",
  keywords: [
    "Aditya Thapliyal",
    "Full Stack Developer",
    "AI Engineer",
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
  authors: [{ name: "Aditya Thapliyal" }],
  creator: "Aditya Thapliyal",
  openGraph: {
    title: "Aditya Thapliyal",
    description: "AI Full Stack Engineer & Product Builder",
    url: "https://adityathapliyal.com", // update when domain is live
    siteName: "Aditya Thapliyal Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Thapliyal — AI Full Stack Engineer",
    description:
      "BCA student and product builder. Building full-stack web apps, mobile apps, and AI-powered systems.",
    creator: "@adityathapliyal",
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
      className={inter.variable}
    >
      <body>
        <BackgroundText />
        {children}
      </body>
    </html>
  );
}
