
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | HK Digital Agency",
  description:
    "Learn how HK Digital Agency uses cookies and how to manage your privacy preferences.",
  alternates: {
    canonical: "/cookies",
  },
};

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    description:
      "This policy explains how HK Digital Agency may use cookies and similar technologies when you visit our website. It describes their purposes and the choices available to you.",
  },
  {
    id: "cookies-explained",
    number: "02",
    title: "Understanding Cookies",
    description:
      "Cookies are small text files stored on your device when you visit a website. They can remember preferences, support website functionality, and provide information about how visitors interact with a website.",
  },
  {
    id: "essential-cookies",
    number: "03",
    title: "Essential Cookies",
    description:
      "Essential cookies support important website functions, including navigation, security, and basic operation. They help provide a reliable browsing experience.",
  },
  {
    id: "analytics-cookies",
    number: "04",
    title: "Analytics Cookies",
    description:
      "Where enabled and permitted, analytics cookies help us understand website traffic, visitor interactions, and overall performance. These insights can help us improve our website.",
  },
  {
    id: "marketing-cookies",
    number: "05",
    title: "Marketing Cookies",
    description:
      "Marketing cookies may help measure advertising campaigns and understand the effectiveness of promotional activities. They should only operate where the required permission has been obtained.",
  },
  {
    id: "third-party",
    number: "06",
    title: "Third-Party Technologies",
    description:
      "Some website features may use services provided by external companies. These providers may use their own cookies or similar technologies under their respective privacy policies.",
  },
  {
    id: "manage-preferences",
    number: "07",
    title: "Managing Your Preferences",
    description:
      "You can manage or delete cookies through your browser settings. You can also use the cookie consent controls on our website to select your optional preferences. Disabling certain cookies may affect some website features.",
  },
  {
    id: "policy-updates",
    number: "08",
    title: "Policy Updates",
    description:
      "We may update this policy as our website, technologies, or applicable requirements change. Any revised version will be published on this page.",
  },
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFA] text-[#1C3636]">

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#142B2A]">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full border border-white/[0.05]" />

          <div className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full border border-[#24D6B5]/10" />

          <div className="absolute left-1/2 top-1/2 h-[350px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1CA186]/10 blur-[120px]" />

          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#24D6B5]/30 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 pt-6 pb-6 text-center lg:px-8">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs font-medium text-[#A8BAB4]"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#24D6B5]"
            >
              Home
            </Link>

            <span className="text-white/30">/</span>

            <span className="text-[#24D6B5]">
              Cookie Policy
            </span>
          </nav>

          {/* Hero Content */}
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center py-6 sm:py-6 lg:py-8">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#24D6B5]/20 bg-[#24D6B5]/[0.08] px-4 py-2">

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#55D4B4]">
                Privacy & Transparency
              </span>
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[76px]">
              Your privacy.
              <span className="block text-[#24D6B5]">
                Your choices.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#B5C5C0] sm:text-base sm:leading-8">
              We believe in transparency and giving you control.
              Discover how cookies support your browsing experience,
              understand how they are used, and manage your preferences
              with confidence.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="#policy-details"
                className="inline-flex cursor-pointer items-center gap-3 rounded-lg bg-[#1CA186] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#1CA186]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#24B99B]"
              >
                Explore Policy
                <span aria-hidden="true">↓</span>
              </Link>

              <Link
                  href="/contact"
                  className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1CA186] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#24B99B]"
                >
                  Contact Us
                  <span aria-hidden="true">↗</span>
                </Link>
            </div>


          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section
        id="policy-details"
        className="mx-auto max-w-[1440px] px-6 py-6 lg:px-8"
      >

        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">

          {/* Sidebar */}
          <aside className="h-fit rounded-xl border border-[#1C3636]/10 bg-white p-5 lg:sticky lg:top-8">

            <h2 className="text-sm font-semibold text-[#1C3636]">
              On this page
            </h2>

            <nav aria-label="Cookie policy sections" className="mt-4">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-[#647570] transition-colors hover:bg-[#EAF5F1] hover:text-[#16866F]"
                    >
                      <span className="font-mono text-[10px] text-[#1CA186]">
                        {section.number}
                      </span>

                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

          </aside>

          {/* Main Policy */}
          <div className="min-w-0">

            <div className="border-b border-[#1C3636]/10 py-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#16866F]">
                HK DIGITAL AGENCY
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Cookie Policy
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#647570]">
                This page explains the types of cookies that may
                be used on our website and how you can control
                your cookie preferences.
              </p>
            </div>

            {/* Policy Sections */}
            <div>
              {sections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 border-b border-[#1C3636]/10 py-6"
                >
                  <div className="grid gap-4 sm:grid-cols-[60px_minmax(0,1fr)] sm:gap-6">

                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF5F1] font-mono text-xs font-semibold text-[#16866F]">
                      {section.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                        {section.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm leading-7 text-[#647570]">
                        {section.description}
                      </p>
                    </div>

                  </div>
                </article>
              ))}
            </div>

            {/* Contact Section */}
            <section className="mt-6 rounded-xl bg-[#142B2A] px-6 py-6 sm:px-8">

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#55D4B4]">
                Need assistance?
              </p>

              <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-xl font-semibold text-white sm:text-2xl">
                    Have questions about cookies?
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#B5C5C0]">
                    Get in touch with our team for more information
                    about this policy.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#1CA186] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#24B99B]"
                >
                  Contact Us
                  <span aria-hidden="true">↗</span>
                </Link>

              </div>

            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
