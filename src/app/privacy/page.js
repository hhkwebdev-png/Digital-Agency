
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | HK Digital Agency",
  description:
    "Read the Privacy Policy of HK Digital Agency to understand how personal information is collected, used, and protected.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    description:
      "At HK Digital Agency, we respect your privacy and value your trust. This Privacy Policy explains how information may be collected, used, and handled when you visit our website or communicate with our team.",
  },
  {
    id: "information",
    number: "02",
    title: "Information We Collect",
    description:
      "We may collect information that you voluntarily provide when submitting an enquiry, requesting a service, or contacting us.",
    bullets: [
      "Name and company name.",
      "Email address and contact number.",
      "Project requirements and details.",
      "Messages and information you choose to share.",
    ],
  },
  {
    id: "automatic",
    number: "03",
    title: "Automatically Collected Information",
    description:
      "Depending on the technologies enabled on our website, certain technical information may be collected automatically.",
    bullets: [
      "Browser type and device information.",
      "Pages visited and website interactions.",
      "IP address and technical diagnostic information.",
    ],
  },
  {
    id: "usage",
    number: "04",
    title: "How We Use Your Information",
    description:
      "Information may be used for legitimate business and website purposes, including:",
    bullets: [
      "Responding to enquiries and project requests.",
      "Understanding your requirements and preparing proposals.",
      "Providing and improving our services.",
      "Maintaining website functionality and security.",
    ],
  },
  {
    id: "sharing",
    number: "05",
    title: "Information Sharing",
    description:
      "We do not sell personal information. Information may be shared with service providers when reasonably necessary to operate our website, manage communications, or deliver requested services. Information may also be disclosed where required by applicable law.",
  },
  {
    id: "security",
    number: "06",
    title: "Data Security",
    description:
      "We take reasonable technical and organizational measures intended to protect information against unauthorized access, alteration, disclosure, or loss. However, no online platform or electronic storage method can guarantee absolute security.",
  },
  {
    id: "retention",
    number: "07",
    title: "Data Retention",
    description:
      "Information is retained only for as long as reasonably necessary for the purposes for which it was collected, including responding to enquiries, providing services, meeting legal obligations, and resolving disputes.",
  },
  {
    id: "rights",
    number: "08",
    title: "Your Privacy Rights",
    description:
      "Depending on your location and applicable privacy laws, you may have the right to:",
    bullets: [
      "Request access to your personal information.",
      "Ask us to correct inaccurate information.",
      "Request deletion where applicable.",
      "Withdraw consent where processing is based on consent.",
    ],
  },
  {
    id: "third-party",
    number: "09",
    title: "Third-Party Websites",
    description:
      "Our website may contain links to external websites or services. These platforms operate under their own privacy policies. We are not responsible for their content or privacy practices.",
  },
  {
    id: "cookies",
    number: "10",
    title: "Cookies & Tracking Technologies",
    description:
      "Our website may use cookies or similar technologies to support functionality and understand website usage. Optional tracking technologies depend on the tools enabled on our website and your preferences where applicable.",
    link: true,
  },
  {
    id: "updates",
    number: "11",
    title: "Changes to This Policy",
    description:
      "We may update this Privacy Policy when our website, services, or legal obligations change. Any revised version will be published on this page.",
  },
  {
    id: "contact",
    number: "12",
    title: "Contact Us",
    description:
      "For questions, concerns, or requests regarding this Privacy Policy or your personal information, contact our team at hhkwebdev@gmail.com.",
  },
];

const navigation = [
  { label: "Introduction", id: "introduction" },
  { label: "Information", id: "information" },
  { label: "Data Usage", id: "usage" },
  { label: "Security", id: "security" },
  { label: "Privacy Rights", id: "rights" },
  { label: "Contact", id: "contact" },
];

export default function PrivacyPage() {
  return (
    <main className="overflow-hidden bg-[#F9FAFA] text-[#142B2A]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#142B2A] px-6 pt-6 pb-6 text-white lg:px-8">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.06]" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/[0.07]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1CA186]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px]">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="transition hover:text-[#24D6B5]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#24D6B5]">Privacy Policy</span>
          </div>

          {/* Centered Hero */}
          <div className="mx-auto max-w-4xl py-6 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#24D6B5]/30 bg-[#24D6B5]/10 text-[#24D6B5]">
              <ShieldCheck size={25} strokeWidth={1.5} />
            </div>

           <p className="inline-block rounded-md bg-[#1C3636] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#24D6B5]">
                Privacy & Data Protection
           </p>

            <h1 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">
              Your privacy.
              <br />
              <span className="text-[#24D6B5]">Our responsibility.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B5C5C0] sm:text-base sm:leading-8">
              Transparency matters. Discover how HK Digital Agency handles
              your information and the choices available to you when using
              our website and services.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#privacy-content"
                className="inline-flex items-center gap-2 rounded-full bg-[#24D6B5] px-6 py-3.5 text-sm font-semibold text-[#142B2A] transition hover:bg-white"
              >
                Explore Policy
                <ArrowRight size={16} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#24D6B5] hover:text-[#24D6B5]"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-[1440px] flex flex-col justify-between gap-5 border-b border-[#DDE7E3] pb-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2 className="mt-3 text-3xl text-[#093331] font-semibold tracking-[-0.04em] sm:text-4xl">
              Privacy Policy
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#71807C] sm:text-base">
              Everything you need to know about our information practices
              and your privacy choices.
            </p>
          </div>

          <span className="text-sm font-medium text-[#83918D]">
            12 Policy Sections
          </span>
        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-[#83918D]">
              Navigate:
            </span>

            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full border border-[#DDE7E3] px-4 py-2.5 text-xs font-medium text-[#52645F] transition hover:border-[#1CA186] hover:bg-[#EAF7F3] hover:text-[#168D75]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY DETAILS */}
      <section
        id="privacy-content"
        className="px-4 py-4 lg:px-6"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our Privacy Guidelines
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#71807C]">
              Review each section for details about the information we
              collect, how it may be used, and the rights available to you.
            </p>
          </div>

          <div className="grid gap-x-16 lg:grid-cols-2">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className={`scroll-mt-8 border-t border-[#DDE7E3] py-6 ${
                  index === sections.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  <span className="pt-1 text-sm font-semibold tracking-wider text-[#1CA186]">
                    {section.number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold tracking-tight text-[#142B2A] sm:text-2xl">
                      {section.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#687973] sm:text-[15px]">
                      {section.description}
                    </p>

                    {section.bullets && (
                      <ul className="mt-4 space-y-2.5">
                        {section.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-7 text-[#687973]"
                          >
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-[#1CA186]"
                              strokeWidth={2}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.link && (
                      <Link
                        href="/cookies"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#168D75] transition hover:gap-3"
                      >
                        Read our Cookie Policy
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-6 py-6 lg:px-8">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#142B2A] px-7 py-6 sm:px-10">
          <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/[0.07]" />

          <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#24D6B5]">
                Privacy Support
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                Have a question about your privacy?
              </h2>
              <p className="mt-2 text-sm leading-7 text-[#B5C5C0]">
                Get in touch with our team for further information.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#24D6B5] px-6 py-3.5 text-sm font-semibold text-[#142B2A] transition hover:bg-white"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
