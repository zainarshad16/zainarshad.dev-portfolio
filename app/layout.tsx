
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` 
  : process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Zain Arshad | Full Stack & Sitecore XM Cloud Developer",
    template: "%s | Zain Arshad"
  },
  description:
    "Portfolio of Zain Arshad — Full Stack Developer at 7 Kings Code, specializing in React, Next.js, .NET, MERN Stack, and Sitecore XM Cloud. Based in Lahore, Pakistan.",
  keywords: [
    "Zain Arshad",
    "Full Stack Developer",
    "Sitecore XM Cloud",
    "React Developer",
    "Next.js",
    "MERN Stack",
    "7 Kings Code",
    "Portfolio",
    "Lahore",
    "Pakistan",
    "Web Developer Lahore",
    "Sitecore Developer Pakistan"
  ],
  authors: [{ name: "Zain Arshad", url: "https://www.linkedin.com/in/zain-arshad-76155a322/" }],
  creator: "Zain Arshad",
  openGraph: {
    title: "Zain Arshad | Full Stack & Sitecore XM Cloud Developer",
    description:
      "Full Stack Developer at 7 Kings Code with 6+ months of hands-on Sitecore XM Cloud experience. Explore projects, skills, and work history.",
    url: "https://zainarshad-portfolio.vercel.app",
    siteName: "Zain Arshad Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Arshad | Full Stack & Sitecore XM Cloud Developer",
    description:
      "Full Stack Developer at 7 Kings Code with 6+ months of hands-on Sitecore XM Cloud experience. Explore projects, skills, and work history.",
    creator: "@zainarshad",
  },
  icons: {
    icon: "/favicon.ico",
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
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#05050a]`}
      >
        <Navbar />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
