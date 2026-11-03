"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "/blogs" },
  { label: "FAQ", href: "/faq" },
];

const serviceItems = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Web Designing", href: "/services/web-designing" },
  { label: "SEO", href: "/services/seo" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "AI Chatbot", href: "/services/ai-chatbot" },
  { label: "Content Writing", href: "/services/content-writing" },
  { label: "Blog Writing", href: "/services/blog-writing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-[#1C3636]/70 backdrop-blur-xl border-b border-[#F9FAFA]/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-black tracking-tighter text-[#F9FAFA] group"
        >
          <span className="bg-[#1CA186] text-[#1C3636] px-2.5 py-1 rounded-lg text-sm font-black tracking-normal transition-transform duration-300 group-hover:scale-105">
            AI
          </span>
          <span className="tracking-wide font-light text-[#F9FAFA]/90 group-hover:text-[#1CA186] transition-colors duration-200">
            AGENCY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-[14px] font-medium text-[#F9FAFA]/80 hover:text-[#1CA186] flex items-center gap-1 py-2 transition-colors duration-200">
              Services
              <svg className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
              <div className="bg-[#1C3636] border border-[#F9FAFA]/10 rounded-xl p-2.5 shadow-2xl min-w-[240px]">
                {serviceItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between text-[13px] font-medium text-[#F9FAFA]/70 hover:text-[#F9FAFA] hover:bg-[#1CA186] px-3 py-2.5 rounded-lg transition-all duration-150 group/item"
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 transition-all duration-150 group-hover/item:opacity-100 group-hover/item:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Standard Navigation Links */}
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-[14px] font-medium text-[#F9FAFA]/80 hover:text-[#1CA186] relative py-2 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1CA186] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-[14px] font-bold text-[#F9FAFA] bg-gradient-to-r from-[#1CA186] to-[#14806a] hover:brightness-110 px-6 h-11 flex items-center justify-center rounded-xl shadow-md shadow-[#1CA186]/10 transition-all duration-200 active:scale-95"
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none rounded-xl hover:bg-[#F9FAFA]/5 transition-colors"
          aria-label="Toggle Navigation"
        >
          <span className={`h-0.5 w-5 bg-[#F9FAFA] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`h-0.5 w-5 bg-[#F9FAFA] rounded-full transition-all duration-200 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-[#F9FAFA] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Modern Slide-down Mobile Full Screen Overlay */}
      <div
        className={`
          fixed inset-x-0 top-20 bg-[#1C3636] border-b border-[#F9FAFA]/10 shadow-2xl p-6 lg:hidden flex flex-col gap-6 transition-all duration-300 ease-in-out max-h-[calc(100vh-80px)] overflow-y-auto
          ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"}
        `}
      >
        <ul className="flex flex-col gap-1 list-none p-0 m-0">
          {/* Services Mobile Accordion */}
          <li>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left text-base font-semibold text-[#F9FAFA]/90 py-3 flex justify-between items-center border-b border-[#F9FAFA]/5"
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-[#1CA186]" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
              <div className="grid grid-cols-1 gap-1 pl-3 border-l border-[#1CA186]/30">
                {serviceItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-[#F9FAFA]/60 hover:text-[#1CA186] py-2 block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Core Navigation Links */}
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[#F9FAFA]/90 py-3 block border-b border-[#F9FAFA]/5 hover:text-[#1CA186] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Action Links */}
        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/portfolio"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-xl text-sm font-bold border border-[#F9FAFA]/10 text-[#F9FAFA] hover:bg-[#F9FAFA]/5 transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#1CA186] to-[#14806a] text-[#F9FAFA]"
          >
            Book Strategy Call
          </Link>
        </div>
      </div>
    </header>
  );
}