"use client";

import React, { useState } from "react";
import Popup from '@/components/Popup';
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [secondLastOpenIndex, setSecondLastOpenIndex] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSecondLastAccordion = (index) => {
    setSecondLastOpenIndex(secondLastOpenIndex === index ? null : index);
  };

  const sectionsData = [
    {
      id: "hero",
      bgType: "dark",
      layoutType: "hero-split",
      badge: "Frequently Asked Questions",
      mainHeadingParts: [
        { text: "Frequently Asked ", isGradient: false },
        { text: "Questions", isGradient: true }
      ],
      subheadingText: "Everything You Need to Know Before Choosing Your AI Development & Custom Software Partner",
      description: "Choosing the right technology partner can define the success of your business. Below, we've answered the most important questions about our AI development services, AI agent development, custom software development, web development, pricing, project timelines, and ongoing support — so you can make a confident, informed decision.",
      subText: "Can't find what you're looking for? Our team is one message away and ready to help.",
      imageSrc: "/FAQ.jpg",
      imageAlt: "Frequently Asked Questions About Our AI Development & Custom Software Solutions",
      buttons: [
        { label: "Book a Free Strategy Call", href: "/contact", primary: true },
        { label: "Contact Our Team", href: "/contact", primary: false }
      ]
    },
    {
      id: "general",
      bgType: "white",
      layoutType: "split-column-accordion",
      sectionBadge: "General Questions",
      mainHeadingParts: [
        { text: "Everything ", colorClass: "text-[#1C3636]" },
        { text: "You Need to Know ", colorClass: "text-[#1CA186]" },
        { text: "About Our ", colorClass: "text-[#0F766E]" },
        { text: "Services", colorClass: "text-[#1C3636]" }
      ],
      subtitle: "Learn More About Our AI Development & Software Agency",
      questions: [
        {
          q: "What services do you offer?",
          a: "We specialize in AI automation, AI agent development, AI chatbot solutions, custom software development, web development, website design, API integrations, business process automation, and digital transformation services. Every solution is engineered around your specific business goals — helping you cut manual work, boost operational efficiency, and scale with confidence."
        },
        {
          q: "Who do you work with?",
          a: "We partner with startups, small businesses, fast-growing companies, and enterprise organizations across healthcare, real estate, e-commerce, finance, education, SaaS, logistics, and professional services. No matter your industry, we build solutions that fit how your business actually operates."
        },
        {
          q: "Do you work with international clients?",
          a: "Yes — and we do it seamlessly. We collaborate with businesses around the world through secure communication channels, structured project management tools, and regular virtual meetings, ensuring a smooth, transparent experience no matter where you're located."
        },
        {
          q: "Why should I choose your agency?",
          a: "Because we build more than websites or software — we build growth engines. Our team designs scalable, AI-powered digital solutions that solve real business problems, streamline operations, and drive measurable, long-term results. Every project is backed by strategy, innovation, and an uncompromising commitment to quality."
        }
      ]
    },
    {
      id: "services",
      bgType: "dark",
      layoutType: "image-left-list",
      sectionBadge: "Services & Project Development",
      mainHeadingParts: [
        { text: "Our AI & Software ", isGradient: false },
        { text: "Development Process", isGradient: true }
      ],
      subtitle: "Everything About Our AI & Software Development Process",
      imageSrc: "/AI-&-Software.jpg",
      imageAlt: "Software Development Lifecycle & Tech Architecture",
      questions: [
        {
          q: "How do you start a new project?",
          a: "Every engagement begins with an in-depth discovery session to understand your business, goals, audience, and technical requirements. From there, we build a tailored strategy, project roadmap, timeline, and proposal — so you know exactly what to expect before development even begins."
        },
        {
          q: "Can you build custom AI solutions for my business?",
          a: "Absolutely. We design and develop custom AI solutions — including intelligent AI agents, AI chatbots, workflow automation systems, document processing tools, and business automation platforms — engineered specifically around your operations and objectives."
        },
        {
          q: "Do you redesign existing websites or software?",
          a: "Yes. Whether you need a complete visual redesign, stronger performance, expanded functionality, or a full rebuild, we modernize your existing website or application while preserving the elements that already work well for your business."
        },
        {
          q: "What technologies do you use?",
          a: "We build with modern, future-ready technologies including Next.js, React, Node.js, Python, JavaScript, Tailwind CSS, cloud platforms, REST APIs, secure databases, and leading AI technologies — ensuring every solution is fast, scalable, and built to last."
        }
      ]
    },
    {
      id: "pricing",
      bgType: "white",
      layoutType: "featured-spotlight",
      sectionBadge: "Pricing & Timelines",
      mainHeadingParts: [
        { text: "Transparent ", colorClass: "text-[#1C3636]" },
        { text: "Pricing & ", colorClass: "text-[#1CA186]" },
        { text: "Clear ", colorClass: "text-[#0F766E]" },
        { text: "Timelines", colorClass: "text-[#1C3636]" }
      ],
      subtitle: "Clear, Honest Answers About Cost and Delivery",
      questions: [
        {
          q: "How much does a project cost?",
          a: "Every project is unique, so pricing depends on scope, features, integrations, complexity, and timeline. We provide a transparent, fully customized proposal only after understanding your exact requirements — no guesswork, no inflated estimates."
        },
        {
          q: "Do you offer fixed-price packages?",
          a: "Yes. We offer flexible, fixed-price packages with clear starting costs, as well as fully custom solutions for businesses with more complex or unique requirements."
        },
        {
          q: "How long does a typical project take?",
          a: "Timelines vary based on complexity. Smaller websites are typically completed within a few weeks, while advanced AI systems or custom software projects may require additional development time. Either way, you'll receive a detailed, realistic timeline before work begins."
        },
        {
          q: "Are there any hidden charges?",
          a: "Never. We operate on complete transparency. Every proposal clearly outlines the project scope, deliverables, pricing, and timeline upfront, so there are no surprises later."
        }
      ]
    },
    {
      id: "support",
      bgType: "dark",
      layoutType: "modern-grid-stack",
      sectionBadge: "Support & Maintenance",
      mainHeadingParts: [
        { text: "We're Here ", isGradient: false },
        { text: "Long After Launch", isGradient: true }
      ],
      subtitle: "We're Here Long After Launch",
      questions: [
        {
          q: "Do you provide support after the project is completed?",
          a: "Yes — our relationship doesn't end at launch. Every project includes post-launch support, and we offer ongoing maintenance, security updates, feature enhancements, and performance optimization to keep your solution running at peak performance."
        },
        {
          q: "Can my project be expanded in the future?",
          a: "Absolutely. We build every solution to scale — so you can add new features, integrations, AI capabilities, or users as your business grows, without starting from scratch."
        },
        {
          q: "Will I own the project after it's completed?",
          a: "Yes. Once the project is complete and all agreed payments are made, full ownership of the final deliverables transfers to you, exactly as outlined in our agreement."
        },
        {
          q: "How do you ensure project security?",
          a: "Security is built in, not bolted on. We follow industry best practices for secure development, data protection, code quality, and performance optimization at every stage of the project lifecycle — so your business and your users stay protected."
        }
      ]
    },
    {
      id: "still-have-questions",
      bgType: "white",
      layoutType: "card-grid-toggle",
      sectionBadge: "Still Have Questions?",
      mainHeadingParts: [
        { text: "Still Have ", colorClass: "text-[#1C3636]" },
        { text: "Questions? ", colorClass: "text-[#1CA186]" },
        { text: "Let's Talk ", colorClass: "text-[#0F766E]" },
        { text: "About It", colorClass: "text-[#1C3636]" }
      ],
      subtitle: "Let's Talk About Your Project",
      description: "Explore our additional resources or talk directly to our engineering leads to find clear answers.",
      subDescription: "Get tailored architectural advice and precise scope estimations directly from our senior technical consultants.",
      questions: [
        {
          q: "Do you offer post-launch maintenance and support?",
          a: "Yes, we provide flexible monthly retainers covering continuous optimization, security patches, and feature updates."
        },
        {
          q: "Can you integrate with our existing internal team?",
          a: "Absolutely. Our engineers easily embed into your current agile sprints and workflows as an extension of your team."
        }
      ],
      buttons: [
        { label: "Book a Consultation", href: "/popup", primary: true },
        { label: "View Documentation", href: "/docs", primary: false }
      ]
    },
    {
      id: "cta",
      bgType: "dark",
      layoutType: "banner-cta",
      mainHeadingParts: [
        { text: "Ready to scale your digital product?" }
      ],
      description: "Join hundreds of forward-thinking companies building world-class web experiences with us.",
      buttons: [
        { label: "Get Started Today", href: "/contact", primary: true }
      ],
      floatingAvatars: [
        { top: "15%", left: "8%", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
        { bottom: "20%", right: "10%", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" }
      ]
    }
  ];

  let globalQuestionIndex = 0;

  return (
    <div className="min-h-screen bg-[#1C3636] text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      {sectionsData.map((sec, idx) => {
        const isDark = sec.bgType === "dark";

        return (
          <motion.section 
            key={sec.id || idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`pt-6 pb-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
              isDark 
                ? 'bg-[#1C3636] text-slate-100 border-b border-[#254A4A]' 
                : 'bg-white text-slate-900 border-b border-slate-100'
            }`}
          >
            {/* Background highlights */}
            {sec.layoutType === "hero-split" && <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />}
            {sec.layoutType === "split-column-accordion" && <div className="absolute top-1/2 -left-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />}
            {sec.layoutType === "image-left-list" && <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />}
            {sec.layoutType === "featured-spotlight" && <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />}
            {sec.layoutType === "modern-grid-stack" && <div className="absolute inset-0 bg-[radial-gradient(#2d5858_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />}
            {sec.layoutType === "card-grid-toggle" && <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />}

            <div className="max-w-6xl mx-auto w-full relative z-10">
              
{/* STYLE 1: HERO SPLIT LAYOUT */}
              {sec.layoutType === "hero-split" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-7 text-center lg:text-left"
                  >
                    {sec.badge && (
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-teal-500/10 text-teal-300 text-sm font-semibold mb-6 border border-teal-500/20 shadow-inner">
                        {sec.badge}
                      </div>
                    )}
                    <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-[1.1]">
                      {sec.mainHeadingParts.map((part, pIdx) => 
                        part.isGradient ? (
                          <span key={pIdx} className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
                            {part.text}
                          </span>
                        ) : (
                          <span key={pIdx} className="text-[#F9FAFA]">
                            {part.text}
                          </span>
                        )
                      )}
                    </h1>
                    {sec.subheadingText && (
                      <h2 className="text-xl font-semibold mb-6 text-teal-200/90 leading-snug">
                        {sec.subheadingText}
                      </h2>
                    )}
                    <p className="text-base sm:text-lg mb-8 leading-relaxed text-slate-300">
                      {sec.description}
                    </p>
                    {sec.subText && (
                      <div className="p-4 rounded-xl mb-8 text-sm font-medium border bg-[#234545]/50 border-[#356868]/60 text-teal-300 shadow-sm flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-teal-400 shrink-0" />
                        <span>{sec.subText}</span>
                      </div>
                    )}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      {sec.buttons?.map((btn, bIdx) => (
                        <button
                          key={bIdx}
                          type="button"
                          onClick={() => setIsPopupOpen(true)}
                          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 cursor-pointer ${
                            btn.primary 
                              ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-xl shadow-teal-500/25' 
                              : 'bg-[#254A4A] hover:bg-[#2e5b5b] text-slate-200 border border-[#356868]'
                          }`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="lg:col-span-5"
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border p-3 bg-gradient-to-b from-[#2a5656]/50 to-[#183030]/80 border-[#356868]">
                      <div className="relative h-[320px] sm:h-[380px] w-full rounded-xl overflow-hidden">
                        <Image 
                          src={sec.imageSrc} 
                          alt={sec.imageAlt}
                          fill
                          className="object-cover transform hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* STYLE 2: SPLIT COLUMN ACCORDION */}
              {sec.layoutType === "split-column-accordion" && (
                <div>
                  <div className="text-center max-w-2xl mx-auto mb-6">
                    <span className="text-teal-700 uppercase tracking-widest text-xs font-bold px-3 py-1 bg-teal-50 rounded-xl border border-teal-200/60 inline-block mb-3">
                      {sec.sectionBadge}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
                      {sec.mainHeadingParts.map((part, pIdx) => (
                        <span key={pIdx} className={part.colorClass}>
                          {part.text}
                        </span>
                      ))}
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {sec.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto items-start">
                    {sec.questions.map((item, qIdx) => {
                      const currentIndex = globalQuestionIndex++;
                      const isOpen = openIndex === currentIndex;

                      return (
                        <motion.div 
                          key={qIdx}
                          layout
                          className={`rounded-xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                            isOpen 
                              ? 'bg-[#1C3636] text-white border-teal-600 shadow-lg ring-2 ring-teal-500/20' 
                              : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-teal-500/40 shadow-sm'
                          }`}
                        >
                          <div
                            onClick={() => toggleAccordion(currentIndex)}
                            className="cursor-pointer w-full px-3.5 py-3 text-left flex items-center justify-between gap-3 font-semibold text-sm sm:text-base group"
                          >
                            <span className={isOpen ? 'text-teal-200' : 'text-slate-900 group-hover:text-teal-700'}>
                              {item.q}
                            </span>
                            <motion.div 
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                                isOpen ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-200 text-slate-700'
                              }`}
                            >
                              <ChevronDown className="w-3 h-3" />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <div className="px-3.5 pb-3.5 pt-1.5 text-xs sm:text-sm leading-relaxed border-t border-[#254A4A] text-slate-200 bg-[#254A4A]/40 rounded-b-xl">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STYLE 3: IMAGE LEFT & INTERACTIVE ACCORDION RIGHT */}
              {sec.layoutType === "image-left-list" && (
                <div>
                  <div className="text-center max-w-2xl mx-auto mb-6">
                    <span className="text-teal-300 uppercase tracking-widest text-xs font-bold px-3 py-1 bg-teal-500/10 rounded-xl border border-teal-500/20 inline-block mb-3">
                      {sec.sectionBadge}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
                      {sec.mainHeadingParts.map((part, pIdx) => 
                        part.isGradient ? (
                          <span key={pIdx} className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                            {part.text}
                          </span>
                        ) : (
                          <span key={pIdx} className="text-[#F9FAFA]">
                            {part.text}
                          </span>
                        )
                      )}
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-base">
                      {sec.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="lg:col-span-5"
                    >
                      <div className="relative rounded-xl overflow-hidden shadow-2xl border p-2 bg-gradient-to-tr from-[#254A4A] to-[#172e2e] border-[#356868]">
                        <div className="relative h-[220px] sm:h-[280px] w-full rounded-xl overflow-hidden">
                          <Image 
                            src={sec.imageSrc} 
                            alt={sec.imageAlt}
                            fill
                            className="object-cover transform hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                        </div>
                      </div>
                    </motion.div>

                    <div className="lg:col-span-7 space-y-3">
                      {sec.questions.map((item, qIdx) => {
                        const currentIndex = globalQuestionIndex++;
                        const isOpen = openIndex === currentIndex;

                        return (
                          <motion.div 
                            key={qIdx}
                            layout
                            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                              isOpen ? 'bg-[#224545] border-teal-500/40 shadow-lg' : 'bg-[#254A4A]/40 border-[#356868]/60 hover:border-teal-500/30'
                            }`}
                          >
                            <div
                              onClick={() => toggleAccordion(currentIndex)}
                              className="cursor-pointer w-full px-3.5 py-3 text-left flex items-center justify-between gap-3 font-semibold text-sm sm:text-base group"
                            >
                              <span className="text-slate-100 group-hover:text-teal-200 transition-colors">
                                {item.q}
                              </span>
                              <motion.div 
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                                  isOpen ? 'bg-teal-500/20 text-teal-300' : 'bg-[#183030] text-teal-400'
                                }`}
                              >
                                <ChevronDown className="w-3 h-3" />
                              </motion.div>
                            </div>
                            
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                  <div className="px-3.5 pb-3.5 pt-1.5 text-xs sm:text-sm leading-relaxed border-t border-[#356868]/40 text-slate-300 bg-[#183030]/70 rounded-b-xl">
                                    {item.a}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STYLE 4: FEATURED SPOTLIGHT CARD WITH SIDE BANNER */}
              {sec.layoutType === "featured-spotlight" && (
                <div>
                  <div className="text-center max-w-2xl mx-auto mb-6">
                    <span className="text-teal-700 uppercase tracking-widest text-xs font-bold px-3 py-1 bg-teal-50 rounded-xl border border-teal-200/60 inline-block mb-3">
                      {sec.sectionBadge}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
                      {sec.mainHeadingParts.map((part, pIdx) => (
                        <span key={pIdx} className={part.colorClass}>
                          {part.text}
                        </span>
                      ))}
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {sec.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    <div className="lg:col-span-8 space-y-3 order-2 lg:order-1">
                      {sec.questions.map((item, qIdx) => {
                        const currentIndex = globalQuestionIndex++;
                        const isOpen = openIndex === currentIndex;

                        return (
                          <motion.div 
                            key={qIdx}
                            layout
                            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                              isOpen ? 'bg-white border-teal-500/50 shadow-md ring-2 ring-teal-500/10' : 'bg-slate-50 border-slate-200/90 hover:border-slate-300'
                            }`}
                          >
                            <div
                              onClick={() => toggleAccordion(currentIndex)}
                              className="cursor-pointer w-full px-3.5 py-3 text-left flex items-center justify-between gap-3 font-semibold text-sm sm:text-base group"
                            >
                              <span className="text-slate-900 group-hover:text-teal-700 transition-colors">
                                {item.q}
                              </span>
                              <motion.div 
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                                  isOpen ? 'bg-teal-100 text-teal-800 font-bold' : 'bg-slate-200 text-slate-700'
                                }`}
                              >
                                <ChevronDown className="w-2.5 h-2.5" />
                              </motion.div>
                            </div>
                            
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                  <div className="px-3.5 pb-3.5 pt-1.5 text-xs sm:text-sm leading-relaxed border-t border-slate-100 text-slate-600 bg-white rounded-b-xl">
                                    {item.a}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    <div className="lg:col-span-4 bg-gradient-to-br from-[#1C3636] to-[#122424] text-white rounded-2xl p-6 shadow-xl border border-[#254A4A] flex flex-col justify-between order-1 lg:order-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full blur-2xl pointer-events-none" />
                      <div className="relative z-10">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold mb-3 border border-teal-500/30">
                          Need Help?
                        </span>
                        <h3 className="text-xl font-bold mb-2">Have a custom timeline or special pricing inquiry?</h3>
                        <p className="text-slate-300 text-xs leading-relaxed mb-4">
                          Our team is ready to provide you with a flexible quote matching your exact scope.
                        </p>
                      </div>
                      <div className="relative z-10 pt-4 border-t border-[#254A4A]">
                        <button
                          type="button"
                          onClick={() => setIsPopupOpen(true)}
                          className="w-full py-2.5 px-4 rounded-xl font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                        >
                          Request Custom Quote <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                </div>
              )}

              {/* STYLE 5: MODERN GRID STACK */}
              {sec.layoutType === "modern-grid-stack" && (
                <div>
                  <div className="text-center max-w-2xl mx-auto mb-6">
                    <span className="text-teal-300 uppercase tracking-widest text-xs font-bold px-3 py-1 bg-teal-500/10 rounded-xl border border-teal-500/20 inline-block mb-3">
                      {sec.sectionBadge}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
                      {sec.mainHeadingParts.map((part, pIdx) => 
                        part.isGradient ? (
                          <span key={pIdx} className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                            {part.text}
                          </span>
                        ) : (
                          <span key={pIdx} className="text-[#F9FAFA]">
                            {part.text}
                          </span>
                        )
                      )}
                    </h1>
                    <p className="text-slate-300 text-sm sm:text-base">
                      {sec.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
                    {sec.questions.map((item, qIdx) => {
                      const currentIndex = globalQuestionIndex++;
                      const isOpen = openIndex === currentIndex;

                      return (
                        <div 
                          key={qIdx}
                          className={`rounded-xl border transition-all duration-300 overflow-hidden flex flex-col justify-between p-3.5 ${
                            isOpen 
                              ? 'bg-[#254A4A] border-teal-400 shadow-lg ring-2 ring-teal-500/30 md:col-span-2' 
                              : 'bg-[#183030] border-[#254A4A] hover:border-teal-500/40 shadow-sm'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-teal-400 font-mono text-[10px] bg-[#1C3636] px-2 py-0.5 rounded-md border border-[#254A4A]">
                                0{qIdx + 1}
                              </span>
                              <div
                                onClick={() => toggleAccordion(currentIndex)}
                                className={`cursor-pointer w-4 h-4 rounded-md flex items-center justify-center transition-transform duration-300 ${
                                  isOpen ? 'bg-teal-500 text-slate-950 font-bold rotate-180' : 'bg-[#254A4A] text-teal-300'
                                }`}
                              >
                                <ChevronDown className="w-2.5 h-2.5" />
                              </div>
                            </div>
                            <h3 
                              onClick={() => toggleAccordion(currentIndex)}
                              className="cursor-pointer font-semibold text-sm sm:text-base text-slate-100 hover:text-teal-300 transition-colors"
                            >
                              {item.q}
                            </h3>
                            {isOpen && (
                              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 pt-2 border-t border-[#2f5959] mt-2 animate-fadeIn rounded-xl">
                                {item.a}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

             {/* STYLE 6: CARD GRID TOGGLE */}
              {sec.layoutType === "card-grid-toggle" && (
                <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-xl">
                  <div className="text-center max-w-2xl mx-auto mb-4">
                    <span className="text-teal-700 uppercase tracking-widest text-[11px] font-bold px-2.5 py-0.5 bg-teal-50 rounded-xl border border-teal-200/60 inline-block mb-2">
                      {sec.sectionBadge}
                    </span>
                    <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 leading-tight">
                      {sec.mainHeadingParts.map((part, pIdx) => (
                        <span key={pIdx} className={part.colorClass}>
                          {part.text}
                        </span>
                      ))}
                    </h1>
                    <p className="text-slate-600 text-xs sm:text-sm mb-1">
                      {sec.subtitle}
                    </p>
                    <p className="text-slate-600 text-[11px] sm:text-xs max-w-xl mx-auto leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 max-w-5xl mx-auto items-stretch">
                    <div className="lg:col-span-7 space-y-2 flex flex-col justify-between">
                      {sec.questions.map((item, qIdx) => {
                        const isCardOpen = secondLastOpenIndex === qIdx;

                        return (
                          <div 
                            key={qIdx}
                            className={`rounded-xl border transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 text-left ${
                              isCardOpen ? 'bg-white border-teal-500 shadow-md ring-2 ring-teal-500/10' : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm'
                            }`}
                          >
                            <div>
                              <h3 className="font-bold text-slate-900 text-xs sm:text-sm pb-3 text-left">
                                {item.q}
                              </h3>
                              {isCardOpen && (
                                <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600 pt-1.5 border-t border-slate-100 mb-1.5 animate-fadeIn text-left">
                                  {item.a}
                                </p>
                              )}
                            </div>
                            
                            <div
                              onClick={() => toggleSecondLastAccordion(qIdx)}
                              className="cursor-pointer mt-1.5 pt-1 border-t border-slate-100 inline-flex items-center justify-between w-full font-bold text-[11px] text-teal-700 hover:text-teal-800 transition-colors"
                            >
                              <span>{isCardOpen ? "Collapse answer" : "Click to read full answer"}</span>
                              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isCardOpen ? 'rotate-180' : ''}`} />
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="lg:col-span-5 rounded-2xl shadow-xl border border-slate-200 flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-br from-[#1C3636] to-[#122424] text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full blur-2xl pointer-events-none" />
                      
                      <div className="relative z-10">
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-xl bg-teal-500/20 text-teal-300 text-[11px] font-bold mb-2.5 border border-teal-500/30">
                          <Sparkles className="w-3 h-3" /> Direct Consultation
                        </div>
                        <h3 className="text-base font-extrabold mb-1.5 text-white">Have a unique project scope?</h3>
                        <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed mb-3">
                          {sec.subDescription}
                        </p>
                      </div>

                      <div className="relative z-10 space-y-2 pt-2.5 border-t border-[#254A4A]">
                        <div className="flex flex-col gap-2">
                          {sec.buttons.map((btn, bIdx) => (
                            <button
                              key={bIdx}
                              type="button"
                              onClick={() => setIsPopupOpen(true)}
                              className={`w-full py-2 px-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-1.5 text-xs shadow-md cursor-pointer ${
                                btn.primary
                                  ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-teal-500/25'
                                  : 'bg-[#254A4A] hover:bg-[#2e5b5b] text-teal-200 border border-[#356868]'
                              }`}
                            >
                              {btn.label} <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                </div>
              )}

              {/* STYLE 7: BANNER CTA */}
              {sec.layoutType === "banner-cta" && (
                <div className="max-w-5xl mx-auto py-8">
                  <div className="relative rounded-xl bg-gradient-to-br from-[#183030] via-[#1C3636] to-[#122424] border border-[#254A4A] shadow-2xl px-6 py-14 sm:py-20 overflow-hidden text-center text-slate-100">
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                    {sec.floatingAvatars && sec.floatingAvatars.map((av, avIdx) => (
                      <div 
                        key={avIdx}
                        className="absolute hidden sm:block w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-teal-500/40 shadow-xl overflow-hidden pointer-events-none transform hover:scale-110 transition-transform"
                        style={{ top: av.top, left: av.left, right: av.right, bottom: av.bottom }}
                      >
                        <Image src={av.src} alt="Team Member" fill className="object-cover" />
                      </div>
                    ))}

                    <div className="relative z-10 max-w-md mx-auto">
                      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-teal-100 bg-clip-text text-transparent">
                          {sec.mainHeadingParts[0].text}
                        </span>
                      </h1>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                        {sec.description}
                      </p>
                      
                      <div className="inline-block">
                        {sec.buttons.map((btn, bIdx) => (
                          <button
                            key={bIdx}
                            type="button"
                            onClick={() => setIsPopupOpen(true)}
                            className="px-6 py-3 rounded-xl font-bold bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/25 transition-all duration-300 inline-flex items-center gap-2 text-xs sm:text-sm transform hover:-translate-y-0.5 cursor-pointer"
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                  <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                </div>
              )}
            </div>
          </motion.section>
        );
      })}

       <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}