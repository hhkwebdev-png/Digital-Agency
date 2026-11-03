import type { Metadata } from "next";
import { Inter } from "next/font/google";

// FIXED: Using relative paths to match your exact lowercase folder structure
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import CookiesConsent from "@/components/CookiesConsent";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digital-agency-rouge-sigma.vercel.app"),
  title: "AI Digital Agency | Web Development, AI Automation & SEO",
  description:
    "AI Digital Agency delivers professional web development, web design, AI automation, chatbot solutions, and SEO services to help businesses grow online.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-[#1F2937]">
        <Navbar />
        {children} 
        <CookiesConsent />
        <Footer />
      </body>
    </html>
  );
}