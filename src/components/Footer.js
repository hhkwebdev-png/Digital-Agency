
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C3636] text-[#F9FAFA] border-t border-[#F9FAFA]/10 relative z-10 font-sans">
      {/* Top Banner Accent Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1CA186]/20 via-[#1CA186] to-[#1CA186]/20" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-10">
        {/* Main Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#F9FAFA]/10">

          {/* Column 1: Brand Positioning */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link
              href="/"
              className="text-[22px] font-extrabold tracking-tight text-[#F9FAFA] hover:opacity-90 transition-opacity"
            >
              AI<span className="text-[#1CA186]">.</span>AGENCY
            </Link>

            <p className="text-[16px] font-normal leading-[1.8] text-[#F9FAFA]/70 max-w-sm">
              We help businesses establish a powerful online presence through exceptional web development, strategic marketing, AI-powered automation, and high-quality content.
            </p>

            {/* Professional Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="text-[13px] font-semibold tracking-wider uppercase bg-[#F9FAFA]/5 border border-[#F9FAFA]/10 px-3 py-1.5 rounded-xl text-[#F9FAFA]/90 flex items-center gap-2">
                🤖 AI-First Solutions
              </span>

              <span className="text-[13px] font-semibold tracking-wider uppercase bg-[#F9FAFA]/5 border border-[#F9FAFA]/10 px-3 py-1.5 rounded-xl text-[#F9FAFA]/90 flex items-center gap-2">
                🌎 Global Clients
              </span>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="lg:col-span-3 lg:col-start-6 flex flex-col gap-5">
            <h3 className="text-[13px] font-bold text-[#1CA186] uppercase tracking-widest border-l-2 border-[#1CA186] pl-3">
              Core Services
            </h3>

            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              {[
                { label: "Web Development", href: "/services/web-development" },
                { label: "Web Designing", href: "/services/web-designing" },
                { label: "SEO", href: "/services/seo" },
                { label: "AI Automation", href: "/services/ai-automation" },
                { label: "AI Chatbot", href: "/services/ai-chatbot" },
                { label: "Content Writing", href: "/services/content-writing" },
                { label: "Blog Writing", href: "/services/blog-writing" },
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="text-[15px] font-semibold text-[#F9FAFA]/70 hover:text-[#1CA186] transition-colors duration-150 block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Hub */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="text-[13px] font-bold text-[#1CA186] uppercase tracking-widest border-l-2 border-[#1CA186] pl-3">
              Explore
            </h3>

            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blogs", href: "/blogs" },
                { label: "FAQ", href: "/faq" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-semibold text-[#F9FAFA]/70 hover:text-[#1CA186] transition-colors duration-150 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Regulatory Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium text-[#F9FAFA]/40 text-center md:text-left tracking-normal">
            &copy; 2026 AI.AGENCY. Engineered for sustainable growth. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-bold text-[#F9FAFA]/40">
            <Link href="/privacy" className="hover:text-white transition-colors duration-150">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-white transition-colors duration-150">
              Terms & Conditions
            </Link>

            <Link href="/cookies" className="hover:text-white transition-colors duration-150">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
