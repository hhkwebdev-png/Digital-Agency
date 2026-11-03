
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | HK Digital Agency",
  description:
    "Read the Terms and Conditions for using HK Digital Agency's website and digital services.",
  alternates: { canonical: "/terms" },
};

const terms = [
  {
    number: "01",
    title: "Acceptance of Terms",
    text: "By accessing or using the HK Digital Agency website, you agree to these Terms and Conditions. If you do not agree, please discontinue using our website.",
  },
  {
    number: "02",
    title: "Our Services",
    text: "We provide website design and development, AI automation, AI solutions, SEO, and digital content services. Project scope, deliverables, and timelines are agreed upon separately with each client.",
  },
  {
    number: "03",
    title: "Client Responsibilities",
    text: "Clients must provide accurate information, content, materials, approvals, and access required for their projects. Delays in providing these may affect delivery timelines. Clients must also have permission to use materials they supply.",
  },
  {
    number: "04",
    title: "Payments & Refunds",
    text: "Project pricing, deposits, payment schedules, and additional charges will be agreed upon before work begins. Outstanding payments may delay delivery or result in suspension of services. Refunds and cancellations are governed by the applicable project agreement and relevant law.",
  },
  {
    number: "05",
    title: "Project Scope & Revisions",
    text: "Work is completed according to the agreed project scope. Additional features or changes outside that scope may require additional time and charges. Revision arrangements will be established in the project agreement.",
  },
  {
    number: "06",
    title: "Intellectual Property",
    text: "Ownership and usage rights for completed deliverables are governed by the applicable project agreement and payment terms. HK Digital Agency retains rights to its pre-existing tools, frameworks, reusable components, and proprietary materials unless agreed otherwise in writing.",
  },
  {
    number: "07",
    title: "Acceptable Website Use",
    text: "You must not use our website for unlawful activities, attempt unauthorized access, interfere with its operation, or introduce malicious software. We may restrict access in response to misuse or violations of these terms.",
  },
  {
    number: "08",
    title: "Third-Party Services",
    text: "Our website and projects may use third-party platforms, APIs, plugins, hosting providers, and integrations. These services operate under their own terms and policies. We are not responsible for independent third-party changes or interruptions.",
  },
  {
    number: "09",
    title: "Project Delivery",
    text: "Delivery estimates depend on agreed requirements and timely client feedback. Changes in scope, delayed approvals, missing materials, technical issues, or circumstances beyond our reasonable control may affect delivery dates.",
  },
  {
    number: "10",
    title: "Disclaimer & Liability",
    text: "Website content is provided for general information and may change without notice. To the extent permitted by applicable law, HK Digital Agency is not liable for indirect or consequential losses arising from the use of this website or services. Nothing in these terms excludes liability that cannot legally be excluded.",
  },
  {
    number: "11",
    title: "Changes to These Terms",
    text: "We may update these Terms and Conditions to reflect changes in our services or legal requirements. Updated terms will be published on this page with a revised date.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[#F9FAFA] text-[#1C3636]">

      {/* Hero - unchanged */}
      <section className="bg-[#142B2A] px-6 pt-6 pb-6 text-white lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-[#24D6B5]"
            >
              Home
            </Link>

            <span className="text-xs uppercase tracking-[0.18em] text-white/50">
              Legal
            </span>
          </div>

          <div className="mx-auto max-w-3xl py-6 text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-[#24D6B5]">
              <FileText size={17} />
              <span className="uppercase tracking-[0.18em]">
                Terms & Conditions
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Terms of <span className="text-[#24D6B5]">Service.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#B5C5C0] sm:text-base">
              Please review the terms that govern your use of our website
              and digital services.
            </p>

          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-4 border-b border-[#1C3636]/15 py-6 sm:grid-cols-[1fr_2fr] sm:gap-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Terms & Conditions
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-[#647572] sm:text-[15px]">
              The following terms explain the conditions and responsibilities
              associated with using our website and services.
            </p>
          </div>

          <div>
            {terms.map((term) => (
              <article
                key={term.number}
                className="grid gap-3 border-b border-[#1C3636]/10 py-6 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-8"
              >
                <span className="pt-1 font-mono text-sm font-medium text-[#1CA186]">
                  {term.number}
                </span>

                <div className="max-w-3xl">
                  <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                    {term.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#647572] sm:text-[15px]">
                    {term.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
