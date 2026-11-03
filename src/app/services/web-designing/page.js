"use client";

import React, { useState } from 'react';
import Popup from "@/components/Popup";
import { 
  Sparkles, Shield, Rocket, Layers, Monitor, 
  PenTool, Check, ChevronDown, 
  Code2, Database, Cpu, ArrowRight, Zap, 
  BarChart3, Layers3, ArrowUpRight, CheckCircle2,
  Globe, Laptop, Server, Award, Target, Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reduceMotion = useReducedMotion();
  const sectionMotion = (style = 'rise') => {
    if (reduceMotion) return {};
    const motions = {
      rise: { initial: { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
      cinematic: { initial: { opacity: 0, scale: 0.96, filter: 'blur(10px)' }, whileInView: { opacity: 1, scale: 1, filter: 'blur(0px)' }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
      editorial: { initial: { opacity: 0, x: -70 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } },
      curtain: { initial: { opacity: 0, y: 42, scale: 0.985 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.82, ease: [0.77, 0, 0.18, 1] } },
      lift: { initial: { opacity: 0, y: 55, rotateX: 7 }, whileInView: { opacity: 1, y: 0, rotateX: 0 }, transition: { type: 'spring', stiffness: 82, damping: 18 } },
      panorama: { initial: { opacity: 0, x: 80, scale: 0.98 }, whileInView: { opacity: 1, x: 0, scale: 1 }, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
      spotlight: { initial: { opacity: 0, y: 28, filter: 'brightness(0.75)' }, whileInView: { opacity: 1, y: 0, filter: 'brightness(1)' }, transition: { duration: 0.8, ease: 'easeOut' } },
      reveal: { initial: { opacity: 0, scaleX: 0.94, transformOrigin: 'left center' }, whileInView: { opacity: 1, scaleX: 1 }, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
      finale: { initial: { opacity: 0, y: 44, scale: 0.97 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } }
    };
    return { ...motions[style], viewport: { once: true, amount: 0.12 } };
  };
  const cardMotion = reduceMotion ? {} : {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    whileHover: { y: -5, scale: 1.012 }
  };
  const heroItem = (delay = 0) => reduceMotion ? {} : ({
    initial: { opacity: 0, y: 22, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }
  });

  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden min-h-screen text-[#1C3636] selection:bg-[#1C3636] selection:text-emerald-300">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 max-w-[1280px] mx-auto relative overflow-hidden bg-white" {...sectionMotion('rise')}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/60 via-teal-50/40 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <motion.span {...heroItem(0.08)} className="inline-flex items-center gap-2 bg-[#E6F8F3] border border-[#B3EDDE] px-4 py-2 rounded-xl text-sm font-semibold text-[#187563] shadow-sm">
              ✨ Premium Agency Services
            </motion.span>
            <motion.h1 {...heroItem(0.16)} className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              <span className="text-[#1C3636]">
                Design That Commands Attention.
              </span>
              {" "}
              <span className="text-[#1CA186]">
                Design That Drives Growth.
              </span>
            </motion.h1>

            <motion.p {...heroItem(0.25)} className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              In a world where customers form opinions in seconds, your design isn't decoration — it's revenue. Every pixel either builds trust or quietly loses it, and most businesses lose customers before a single word gets read. We craft strategic digital experiences that elevate brand perception, build instant credibility, and turn first impressions into lasting business growth — interfaces engineered not just to look right, but to move people to act: to click, to sign up, to buy, to stay. From the first strategy session to the final line of shipped code, every decision is made against a single question: does this earn the customer's trust faster? That discipline is why our redesigns don't just win awards — they win board approval, investor confidence, and repeat customers, quarter after quarter. Businesses that invest in exceptional design don't just compete — they win.
            </motion.p>

            <motion.div {...heroItem(0.34)} className="flex flex-wrap gap-4 pt-2">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1C3636] text-white px-5 py-3 rounded-xl font-bold shadow-xl shadow-[#1C3636]/15 hover:bg-[#142929] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
>
  Start Your Project
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-slate-50 border-2 border-slate-200 text-[#1C3636] px-5 py-3 rounded-xl font-bold hover:border-[#1C3636] hover:bg-white transition-all duration-300 cursor-pointer"
>
  Book a Strategy Call
</button>
            </motion.div>

            <motion.div {...heroItem(0.43)} className="pt-6 border-t border-slate-100 max-w-sm">
              <p className="text-[#E5AC2D] font-bold text-lg">★★★★★</p>
              <p className="text-sm text-slate-700 font-medium">Trusted by Growing SaaS & Enterprise Businesses</p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 space-y-6">
            <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 1.5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }} whileHover={reduceMotion ? {} : { scale: 1.025, rotate: -0.6 }} className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                alt="Hero Section Visual" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/90 via-[#1C3636]/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg space-y-0.5">
                <p className="text-xs font-mono uppercase text-[#1CA186] font-bold">
                  // Strategic Growth Platform
                </p>
                <p className="text-xs text-gray-700 font-medium mt-0.5">
                  High-converting digital experiences engineered for scale
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
         2. PERFORMANCE HIGHLIGHTS (DARK BG)
         ======================================================================== */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-white relative" {...sectionMotion('cinematic')}>
        <div className="max-w-[1280px] mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 pb-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              <span className="text-[#F9FAFA]">Designed to Influence </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Engineered to Deliver Results
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {[
              { 
                icon: Sparkles, 
                title: "Premium Brand Experiences", 
                desc: "Built to elevate perception and build trust instantly", 
                highlight: "🎨 Premium Brand Experiences — Built to elevate perception and build trust instantly",
                href: "/services/web-development" 
              },
              { 
                icon: Shield, 
                title: "Frictionless User Journeys", 
                desc: "Every click guided toward action", 
                highlight: "⚡ Frictionless User Journeys — Every click guided toward action",
                href: "/services/web-designing" 
              },
              { 
                icon: Rocket, 
                title: "Seamless Cross-Device Design", 
                desc: "Flawless experiences, every screen, every time", 
                highlight: "📱 Seamless Cross-Device Design — Flawless experiences, every screen, every time",
                href: "/services/seo" 
              },
              { 
                icon: Layers, 
                title: "Conversion-Driven Interfaces", 
                desc: "Designed to turn visitors into paying customers", 
                highlight: "🎯 Conversion-Driven Interfaces — Designed to turn visitors into paying customers",
                href: "/services/ai-automation" 
              },
              { 
                icon: Monitor, 
                title: "Authority-Building Visual Systems", 
                desc: "Position your brand as the obvious choice", 
                highlight: "🚀 Authority-Building Visual Systems — Position your brand as the obvious choice",
                href: "#" 
              },
              { 
                icon: PenTool, 
                title: "Memorable Customer Experiences", 
                desc: "Designs that keep you top of mind", 
                highlight: "✨ Memorable Customer Experiences — Designs that keep you top of mind",
                href: "#" 
              }
            ].map((item, idx) => (
              <motion.div {...cardMotion} key={idx} className="w-full flex justify-center">
                <Link 
                  href={item.href}
                  className="w-[370px] h-[180px] bg-[#244343] p-4 rounded-xl border border-emerald-950/40 shadow-xl hover:scale-[1.04] transition-all duration-200 ease-in-out flex flex-col justify-center items-center text-center relative cursor-pointer overflow-hidden group"
                >
                  {/* Centered initial icon with local hover blur scoped strictly to its own parent card */}
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:blur-[2px] group-hover:-translate-y-[12%] group-hover:rotate-[5deg] z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300 shadow-inner">
                      <item.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* TextBox overlay perfectly proportioned to the card dimensions */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#244343] backdrop-blur-[2px] transition-all duration-200 ease-in-out flex flex-col items-start justify-end p-4 z-20 space-y-1.5 text-left">
                    <span className="text-[10px] font-mono font-bold text-emerald-300">0{idx + 1}</span>
                    <h3 className="text-sm font-bold text-white tracking-tight leading-snug">{item.title}</h3>
                    <p className="text-[11px] text-emerald-100/75 leading-relaxed font-light line-clamp-2">{item.desc}</p>
                    {item.href !== "#" && (
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-300 pt-0.5">
                        View Solution <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          3. SERVICE OVERVIEW (WHITE BG)
          ========================================================================= */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-white text-[#1C3636]" {...sectionMotion('editorial')}>
        <div className="max-w-[1280px] mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-xl bg-[#1C3636]/10 text-[#1C3636] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                Service Overview
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
                <span className="text-[#1C3636]">
                  Your Design Is Your First
                </span>
                {" "}
                <span className="text-[#1CA186]">
                  Business Conversation —
                </span>
                {" "}
                <span className="text-[#0F766E]">
                  Make It
                </span>
                {" "}
                <span className="text-[#1C3636]">
                  Count
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Before a visitor reads a word of your content, they've already formed a judgment about your business — based entirely on design. The strongest brands don't chase attention. They command it.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Through strategic design, behavioral insight, and modern digital experience, we help businesses build trust faster, deepen client relationships, and position themselves as the clear leader in their industry. Every layout, interaction, and visual element is intentionally engineered to drive one outcome: sustainable business growth and lasting client satisfaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "STRATEGIC DESIGN",
                  "BEHAVIORAL INSIGHT",
                  "DIGITAL EXPERIENCE",
                  "SUSTAINABLE GROWTH",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1CA186]/15 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#1CA186]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold tracking-wider text-gray-700 uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-4">
               <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1C3636] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#142929] transition-all cursor-pointer"
>
  Start Your Project
  <ArrowRight className="w-4 h-4" />
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="border border-slate-300 text-slate-700 hover:text-black hover:border-black font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer"
>
  View Case Studies
</button>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/10] group">
                <Image 
                  src="/Targeted-UIUX.jpg" 
                  alt="Service Overview Workspace" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-emerald-300 uppercase font-bold">// Design System Focus</p>
                    <p className="text-base font-bold">Targeted UI/UX conversions & brand authority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
         4. WHAT WE DELIVER (DARK BG)
         ======================================================================== */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-white relative overflow-hidden" {...sectionMotion('curtain')}>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="max-w-[1280px] mx-auto space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-xl bg-white/10 text-emerald-300 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                What We Deliver
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                <span className="text-[#F9FAFA]">Strategic Design Solutions </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Built to Grow Your Business
                </span>
              </h2>
            </div>
            <p className="text-emerald-100/70 text-sm font-mono max-w-sm">Strategic Design Solutions Built to Grow Your Business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {[
              { 
                icon: Sparkles, 
                title: "Custom Website Design", 
                desc: "Bespoke web architecture tailored to reflect brand leadership, engage modern audiences, and establish high-converting digital authority.", 
                highlight: "🎨 Custom Website Design — Bespoke web architecture tailored to reflect brand leadership and digital authority",
                href: "/services/web-development" 
              },
              { 
                icon: Shield, 
                title: "Premium UI Design Systems", 
                desc: "Scalable component libraries and style guides built to accelerate product development and ensure pixel-perfect visual consistency.", 
                highlight: "⚡ Premium UI Design Systems — Scalable component libraries built to accelerate product development",
                href: "/services/web-designing" 
              },
              { 
                icon: Rocket, 
                title: "User Experience Strategy", 
                desc: "Data-backed user journey mapping, interaction models, and behavioral audits designed to eliminate friction points and increase user retention.", 
                highlight: "📱 User Experience Strategy — Data-backed user journey mapping designed to eliminate friction points",
                href: "/services/seo" 
              },
              { 
                icon: Layers, 
                title: "High-Converting Landing Pages", 
                desc: "Targeted, conversion-focused landing pages engineered specifically for ad campaigns, product launches, and rapid lead acquisition.", 
                highlight: "🎯 High-Converting Landing Pages — Targeted landing pages engineered for rapid lead acquisition",
                href: "/services/ai-automation" 
              },
              { 
                icon: Monitor, 
                title: "Corporate & Enterprise Design", 
                desc: "Sophisticated web portals and software interfaces structured for enterprise credibility, multi-department workflows, and stakeholder trust.", 
                highlight: "🚀 Corporate & Enterprise Design — Sophisticated web portals structured for enterprise credibility",
                href: "#" 
              },
              { 
                icon: PenTool, 
                title: "E-Commerce Experience Design", 
                desc: "Frictionless shopping experiences engineered for high conversion rates, streamlined mobile checkout flows, and boosted average order value.", 
                highlight: "✨ E-Commerce Experience Design — Frictionless shopping experiences engineered for high conversion",
                href: "#" 
              },
              { 
                icon: Sparkles, 
                title: "Website Transformation & Modernization", 
                desc: "Re-architecting outdated legacy websites into modern, ultra-fast, and responsive digital platforms without losing search visibility.", 
                highlight: "🔄 Website Transformation — Re-architecting outdated legacy websites into ultra-fast platforms",
                href: "#" 
              },
              { 
                icon: Shield, 
                title: "Interactive Wireframes & Prototypes", 
                desc: "Clickable, high-fidelity prototypes that allow you to test user flows, gather feedback, and validate ideas before development begins.", 
                highlight: "📐 Interactive Wireframes — Clickable prototypes that allow you to test user flows and validate ideas",
                href: "#" 
              },
              { 
                icon: Rocket, 
                title: "Brand Design Systems", 
                desc: "Comprehensive brand guidelines, visual identity frameworks, and asset libraries designed for seamlessly unified brand presentation across all touchpoints.", 
                highlight: "🎨 Brand Design Systems — Comprehensive brand guidelines designed for seamlessly unified presentation",
                href: "#" 
              },
              { 
                icon: Layers, 
                title: "Conversion Rate Optimization Design", 
                desc: "Continuous design enhancements and UX refinements driven by live heatmap analytics, user feedback, and data-backed A/B testing strategy.", 
                highlight: "📈 Conversion Rate Optimization — Continuous enhancements driven by live heatmap analytics",
                href: "#" 
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="w-[370px] h-[180px] relative border border-solid border-emerald-500/30 rounded-xl overflow-hidden group cursor-pointer shadow-xl transition-all duration-300 hover:scale-[1.04] hover:border-emerald-400 hover:shadow-[0_20px_40px_-15px_rgba(52,211,153,0.3)]"
              >
                {/* Background decorative wrapper layer */}
                <div className="w-full h-full p-1 absolute bg-emerald-500/20">
                  <div
                    className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#244343]"
                  ></div>
                </div>

                {/* Central spinning gradient element with hover blur removal */}
                <div
                  className="w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl"
                >
                  <div
                    className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500/30 to-teal-200/30 animate-spin blur-[6px] group-hover:blur-0 transition-all duration-300"
                    style={{ animationDuration: '12s' }}
                  ></div>
                </div>

                {/* Content Overlay */}
                <div className="w-full h-full p-2 flex justify-between absolute inset-0">
                  <div
                    className="w-3/5 p-2 pt-2 pb-1 flex flex-col rounded-xl backdrop-blur-lg bg-[#1C3636]/60 text-gray-200 font-sans border border-emerald-500/10"
                  >
                    <span className="text-xs font-bold leading-tight text-white line-clamp-1 group-hover:text-emerald-300 transition-colors">{item.title}</span>
                    <span className="text-[10px] text-emerald-100/70 mt-1 line-clamp-3 font-normal leading-relaxed">{item.desc}</span>
                  </div>
                  <div className="h-full pt-1.5 flex flex-col items-end text-emerald-300/60 font-sans">
                    <span className="text-[9px] leading-[11px]">UIverse</span>
                    <span className="text-[9px] leading-[11px]">0{idx + 1}</span>
                    <div
                      className="w-7 h-7 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-emerald-500/10 border border-emerald-500/25 cursor-pointer transition-all duration-300 hover:bg-emerald-400 hover:text-[#1C3636]"
                    >
                      <span className="font-serif">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 12 12"
                          className="w-3.5 h-3.5"
                        >
                          <g fill="none">
                            <path
                              d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          5. WHY EXCEPTIONAL DESIGN MATTERS (WHITE BG)
          ========================================================================= */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#FAFCFC] text-gray-900 border-t border-slate-100" {...sectionMotion('lift')}>
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="space-y-4 text-center max-w-3xl mx-auto pb-6 border-b border-gray-200/80">
            <div className="inline-flex items-center gap-2 bg-[#1CA186]/10 text-[#1CA186] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-[#1CA186]/20">
              <span className="w-2 h-2 rounded-full bg-[#1CA186] animate-pulse" />
              WHY EXCEPTIONAL DESIGN MATTERS
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
              <span className="text-[#1C3636]">
                Why Exceptional
              </span>
              {" "}
              <span className="text-[#1CA186]">
                Design
              </span>
              {" "}
              <span className="text-[#0F766E]">
                Really
              </span>
              {" "}
              <span className="text-[#1C3636]">
                Matters
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              Design is your most powerful lever for customer trust and digital performance. Exceptional visual architecture elevates brand credibility, establishes immediate market leadership, and systematically optimizes high-value conversion pathways across every user interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-200 hover:border-[#1CA186]/50 shadow-sm flex flex-col justify-between space-y-6 group transition-all duration-300 cursor-pointer">
              <div className="space-y-4">
                <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden bg-gray-100 border border-gray-200/60 relative">
                  <Image 
                    src="/Establish-Authority.jpg" 
                    alt="Establish Authority Instantly" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug group-hover:text-[#1CA186] transition-colors">
                  Establish Authority Instantly
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  Position your business as the credible, trustworthy, professional choice from the very first interaction.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#1CA186] font-semibold">
                <span>Core Impact</span>
                <span className="text-base font-bold group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 border-l-4 border-l-gray-300 hover:border-l-[#1CA186] hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 group cursor-pointer">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  Influence Customer Decisions
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Shape perception and build buyer confidence through intentional, strategic visual communication.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 border-l-4 border-l-gray-300 hover:border-l-[#1CA186] hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 group cursor-pointer">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  Drive Deeper Engagement
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Create experiences that capture attention, invite exploration, and keep visitors invested in your brand.
                </p>
              </div>

              <div className="sm:col-span-2 bg-gradient-to-r from-[#1CA186]/10 to-[#1CA186]/5 p-6 rounded-xl border border-[#1CA186]/30 border-l-4 border-l-[#1CA186] hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group cursor-pointer">
                <div className="space-y-1 max-w-lg">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                    Maximize Conversions & Revenue
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Remove every point of friction and build clear pathways that turn visitors into loyal, paying customers.
                  </p>
                </div>
                <span className="text-sm font-bold text-[#1CA186] group-hover:translate-x-1 transition-transform">→</span>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 border-l-4 border-l-gray-300 hover:border-l-[#1CA186] hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 group cursor-pointer">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  Differentiate Your Brand
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Stand apart from competitors with a distinctive digital presence built entirely around your unique value.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 border-l-4 border-l-gray-300 hover:border-l-[#1CA186] hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-3 group cursor-pointer">
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  Build Lasting Brand Recall
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Create unforgettable experiences that strengthen recognition and keep your business top of mind long after the visit.
                </p>
              </div>

            </div>

          </div>

          <div className="pt-4 flex justify-center">
           <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#147863] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#1CA186]/20 flex items-center gap-2 cursor-pointer"
>
  <span>Elevate Your Digital Presence</span>
  <span>→</span>
</button>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          6. OUR DESIGN FRAMEWORK (DARK BG)
          ========================================================================= */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-[#F9FAFA] relative overflow-hidden" {...sectionMotion('panorama')}>
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#1CA186]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#3CD0B1]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto space-y-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#1CA186]/10 text-[#1CA186] px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border border-[#1CA186]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1CA186] animate-pulse" />
                OUR DESIGN FRAMEWORK
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-[#F9FAFA]">A Proven Process </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Built for Real Results
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-300 font-normal leading-relaxed border-l-2 border-[#1CA186] pl-4 py-1">
                A Proven Process Built for Real, Measurable Results
              </p>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
             <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="w-full sm:w-auto bg-[#1CA186] hover:bg-[#147863] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#1CA186]/20 flex items-center justify-center gap-2 cursor-pointer"
>
  <span>Start Your Project</span>
  <span className="text-base">→</span>
</button>
            </div>

          </div>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Discovery & Insight",
                summary: "Understanding your business, audience, market position, and growth objectives.",
                duration: "Week 1",
                deliverable: "Strategic Brand Audit & Market Intelligence Blueprint",
                img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
              },
              {
                num: "02",
                title: "Strategy & Experience Planning",
                summary: "Building a design roadmap aligned with user expectations and business goals.",
                duration: "Week 2",
                deliverable: "UX Architecture Roadmap & Conversion Funnel Plan",
                img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
              },
              {
                num: "03",
                title: "Experience Architecture",
                summary: "Crafting intuitive structures and user journeys engineered for engagement and conversion.",
                duration: "Week 3",
                deliverable: "Interactive Wireframes & Information Architecture",
                img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
              },
              {
                num: "04",
                title: "Creative Development",
                summary: "Transforming strategy into powerful visual experiences that reflect your brand's true value.",
                duration: "Week 4-5",
                deliverable: "High-Fidelity UI System & Visual Guidelines",
                img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
              },
              {
                num: "05",
                title: "Refinement & Optimization",
                summary: "Sharpening every interaction and detail to maximize impact and performance.",
                duration: "Week 6",
                deliverable: "Usability Testing & Micro-Interaction Polish",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              },
              {
                num: "06",
                title: "Launch & Evolution",
                summary: "Delivering scalable solutions designed to grow and adapt alongside your business.",
                duration: "Ongoing",
                deliverable: "Production Asset Handoff & Scaling Support",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-[#244343] hover:bg-[#2c5252] border border-white/10 hover:border-[#1CA186]/50 rounded-xl transition-all duration-300 overflow-hidden cursor-pointer p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  
                  <div className="flex items-start sm:items-center gap-5 lg:w-5/12">
                    <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#1CA186] bg-[#1CA186]/10 px-3 py-1.5 rounded-lg border border-[#1CA186]/20 shrink-0">
                      {item.num}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#3CD0B1] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-gray-400 block lg:hidden">
                        Timeline: {item.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 lg:w-4/12 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between lg:justify-end gap-6 lg:w-3/12 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                    <div className="text-left lg:text-right space-y-1">
                      <span className="text-[10px] font-mono uppercase text-[#1CA186] font-bold block tracking-wider">
                        Key Handoff
                      </span>
                      <span className="text-xs font-medium text-gray-300 block">
                        {item.deliverable}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#1CA186] text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110">
                      <span className="text-lg font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>

                </div>

                <div className="max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 transition-all duration-500 ease-in-out pt-0 group-hover:pt-6 overflow-hidden">
                  <div className="w-full h-44 rounded-xl overflow-hidden bg-black/40 border border-white/10 relative">
                    <Image 
                      src={item.img} 
                      alt={item.title} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                      <span>PHASE {item.num} EXECUTION ENVIRONMENT</span>
                      <span className="text-[#3CD0B1]">ESTIMATED TIME: {item.duration}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Ready to apply this framework to your product?
              </h4>
              <p className="text-xs text-gray-400">
                Book a strategy session with our lead architects to review your roadmap.
              </p>
            </div>

           <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#147863] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#1CA186]/20 flex items-center gap-2 shrink-0 cursor-pointer"
>
  <span>Schedule Discovery Call</span>
  <span>→</span>
</button>
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          7. DESIGN PHILOSOPHY (WHITE BG)
          ========================================================================= */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-white text-gray-900 relative" {...sectionMotion('spotlight')}>
        <div className="max-w-[1280px] mx-auto space-y-6 relative z-10">
          
          <div className="space-y-4 text-center max-w-3xl mx-auto pb-6 border-b border-gray-200/80">
            <div className="inline-flex items-center gap-2 bg-[#1CA186]/10 text-[#1CA186] px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-[#1CA186]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1CA186] animate-pulse" />
              OUR DESIGN PHILOSOPHY
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-snug">
              <span className="text-[#1C3636]">
                Every Decision
              </span>
              {" "}
              <span className="text-[#1CA186]">
                Should Create
              </span>
              {" "}
              <span className="text-[#0F766E]">
                Real Business
              </span>
              {" "}
              <span className="text-[#1C3636]">
                Value
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
              Every Design Decision Should Create Real Business Value
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="relative bg-[#1C3636] text-white p-5 sm:p-6 rounded-xl border border-gray-800 hover:border-[#1CA186] transition-all duration-300 shadow-xl cursor-pointer group overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1CA186] via-[#3CD0B1] to-emerald-400" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#3CD0B1] transition-colors leading-snug">
                    Human-Centered Thinking
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Creating experiences that resonate with real people, real needs, and real buying decisions.
                  </p>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0">
                  <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#147863] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md group-hover:shadow-[#1CA186]/30"
>
  <span>Explore Framework</span>
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#1CA186] shadow-sm transition-all duration-300 cursor-pointer group space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  Strategic Creativity
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Blending innovation, psychology, and design principles to influence behavior and drive outcomes.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#1CA186] shadow-sm transition-all duration-300 cursor-pointer group space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  Consistent Brand Presence
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Building unified experiences that strengthen trust, recognition, and client confidence.
                </p>
              </div>
            </div>

            <div className="bg-gray-50/90 p-5 rounded-xl border border-gray-200 hover:border-[#1CA186] transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5 max-w-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                    Performance-Focused Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Designing with engagement, usability, and conversions — not just aesthetics — at the core.
                  </p>
                </div>

                <div className="shrink-0 pt-2 sm:pt-0">
                 <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 hover:border-[#1CA186] text-xs font-bold px-5 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-sm group-hover:text-[#1CA186]"
>
  <span>View System</span>
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#1CA186] shadow-sm transition-all duration-300 cursor-pointer group space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  Future-Ready Standards
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Developing scalable design systems built to evolve as your business grows.
                </p>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#1CA186] shadow-sm transition-all duration-300 cursor-pointer group space-y-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1CA186] transition-colors">
                  A Growth-Obsessed Mindset
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Every project is approached with one single goal: your business's success and satisfaction.
                </p>
              </div>
            </div>

          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          8. WHY BUSINESSES CHOOSE US (DARK BG)
          ========================================================================= */}
      <motion.section className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-[#F9FAFA] relative overflow-hidden" {...sectionMotion('reveal')}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CA186]/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto space-y-8 relative z-10">
          
          <div className="py-2 relative">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#1CA186]/15 text-[#3CD0B1] px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-[#1CA186]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3CD0B1] animate-pulse" />
                WHY BUSINESSES CHOOSE US
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-[#F9FAFA]">We Design for Outcomes — </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Not Just Aesthetics
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed">
                We Design for Outcomes — Not Just Aesthetics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            <div className="lg:col-span-5 bg-[#1C3636] p-6 rounded-2xl border border-[#1CA186]/30 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1CA186] via-[#3CD0B1] to-emerald-400" />

              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#3CD0B1] tracking-widest uppercase block">
                  OUR PROMISE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  Engineered for Measurable Bottom-Line Value
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  Every experience we build is designed from the ground up to support client satisfaction, retention, and conversions. We don't measure success by how a design looks in a portfolio — we measure it by what it does for your business after launch: more engaged customers, higher conversion rates, and a brand experience people trust enough to come back to. That's the standard we hold ourselves to on every project, for every client, without exception.
                </p>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-[#1CA186]/30 space-y-3 shadow-inner">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    Ready to Make the Shift?
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    See how solutions can transform your business results.
                  </p>
                </div>

                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="w-full bg-[#1CA186] hover:bg-[#147863] text-white font-bold text-xs px-5 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group"
>
  <span>Book a Free Consultation</span>
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</button>
              </div>

            </div>

            <div className="lg:col-span-7 space-y-3.5 flex flex-col justify-between">
              {[
                {
                  title: "Strategic Approach",
                  desc: "Every decision is driven by business objectives, customer behavior, and measurable, bottom-line results."
                },
                {
                  title: "Tailored Experiences",
                  desc: "No generic templates. No one-size-fits-all solutions. Every project is built around your goals and your clients."
                },
                {
                  title: "User Experience Expertise",
                  desc: "We create intuitive experiences that strengthen engagement, build trust, and encourage action."
                },
                {
                  title: "A Genuine Long-Term Partnership",
                  desc: "We measure our success by yours — staying invested in your growth and satisfaction long after launch."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-[#1C3636] hover:bg-[#244343] border-l-4 border-l-[#1CA186] border-y border-r border-white/10 hover:border-r-[#1CA186]/50 p-4 sm:p-5 rounded-r-xl transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md"
                >
                  <div className="space-y-1 max-w-xl">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#3CD0B1] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center justify-end sm:justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#1CA186] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <span className="text-sm font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          9. FINAL CTA SECTION (WHITE BG)
          ========================================================================= */}
      <motion.section className="w-full bg-white text-gray-900 pt-6 pb-6 px-6 sm:px-6 lg:px-8 border-t border-gray-100" {...sectionMotion('finale')}>
        <div className="w-full max-w-[1280px] mx-auto">
          
          <div className="bg-white text-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-gray-200 relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CA186]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 bg-[#1CA186]/10 text-[#1CA186] px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-[#1CA186]/20">
                <span className="w-2 h-2 rounded-full bg-[#1CA186] animate-pulse" />
                FINAL CALL TO ACTION
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-gray-900">
                <span className="text-[#1C3636]">
                  Ready to Build
                </span>
                {" "}
                <span className="text-[#1CA186]">
                  a Brand People
                </span>
                {" "}
                <span className="text-[#0F766E]">
                  Remember &
                </span>
                {" "}
                <span className="text-[#1C3636]">
                  Trust?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Great design does more than look impressive — it shapes perception, builds trust, influences decisions, and creates lasting competitive advantage. We help businesses transform their digital presence into a powerful growth asset that attracts attention, strengthens credibility, and delivers results clients are proud of.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2 pb-2 text-left">
                {[
                  "Strategy-Driven Design Solutions",
                  "Premium User Experience Standards",
                  "Brand Authority & Market Positioning",
                  "Conversion-Focused Experiences",
                  "Scalable & Future-Ready Systems",
                  "Long-Term Growth Partnership & Client Satisfaction"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 p-3 rounded-xl border border-gray-200 text-xs font-bold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#1CA186] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-sm font-bold text-[#1CA186] uppercase tracking-wider">Let's Create Something That Sets You Apart</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#147863] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-xl shadow-[#1CA186]/20 flex items-center gap-2 cursor-pointer"
>
  <span>Schedule a Free Consultation</span>
  <ArrowRight className="w-4 h-4" />
</button>

<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200 text-sm font-bold px-5 py-3 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer"
>
  Start Your Design Project Today
</button>
              </div>

            </div>
          </div>

        </div>
      </motion.section>

<Popup
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>

    </div>
  );
}
