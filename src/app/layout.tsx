import type { Metadata } from "next";
import { Inter } from "next/font/google";

// FIXED: Using relative paths to match your exact lowercase folder structure
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HK Digital Agency",
  description: "Web Development, AI Automation and Digital Solutions",
  verification: {
    google: "s8DBk8NT86QZ82EmYvYT9DR7wOry4amjRV7OMogJD4g",
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
        <Footer />
      </body>
    </html>
  );
}
