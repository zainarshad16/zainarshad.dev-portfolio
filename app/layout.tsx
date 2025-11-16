
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

export const metadata: Metadata = {
  title: "zainarshad.dev",
  description: "Welcome to the personal portfolio of Zain Arshad, a passionate Full-Stack Developer and IT enthusiast. Explore my journey in BSCS at GCU, my love for cloud computing, coding, SQA, and IT support, and see how I bring creativity and precision to every project I build.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
      >
      <div className=""></div>
        <Navbar />
        {children}
        <ToastContainer/>
        <Footer />
      </body>
    </html>
  );
}
