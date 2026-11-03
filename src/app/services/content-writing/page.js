'use client';

import React, { useState } from 'react';
import Popup from "@/components/Popup";
import Link from 'next/link';
import Image from 'next/image';
import { FileText, Rocket, Target, TrendingUp, Briefcase, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export default function ContentWritingPage() {
  const [openFaq, setOpenFaq] = useState(0);


const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const reduceMotion = useReducedMotion();
  const sectionMotion = (style = "rise") => {
    if (reduceMotion) return {};
    const presets = {
      rise: { initial: { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
      cinematic: { initial: { opacity: 0, scale: 0.965, filter: "blur(8px)" }, whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" }, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
      editorial: { initial: { opacity: 0, x: -62 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } },
      glide: { initial: { opacity: 0, x: 62 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } },
      spring: { initial: { opacity: 0, y: 48, scale: 0.98 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { type: "spring", stiffness: 78, damping: 17 } },
      spotlight: { initial: { opacity: 0, y: 26, filter: "brightness(0.72)" }, whileInView: { opacity: 1, y: 0, filter: "brightness(1)" }, transition: { duration: 0.8, ease: "easeOut" } },
      sweep: { initial: { opacity: 0, scaleX: 0.94, transformOrigin: "left center" }, whileInView: { opacity: 1, scaleX: 1 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      depth: { initial: { opacity: 0, y: 36, rotateX: 6 }, whileInView: { opacity: 1, y: 0, rotateX: 0 }, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
      unfold: { initial: { opacity: 0, rotateY: -7, x: -20 }, whileInView: { opacity: 1, rotateY: 0, x: 0 }, transition: { duration: 0.84, ease: [0.22, 1, 0.36, 1] } },
      finale: { initial: { opacity: 0, y: 44, scale: 0.97 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.92, ease: [0.16, 1, 0.3, 1] } }
    };
    return { ...presets[style], viewport: { once: true, amount: 0.12 } };
  };

  return (
    <div className="font-sans antialiased min-h-screen bg-white text-[#1C3636]">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden border-b border-slate-200/60" {...sectionMotion("rise")}>
        <div className="absolute inset-0 bg-[radial-gradient(#1CA186_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto py-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#1CA186]/5 border border-[#1CA186]/20 px-3.5 py-1.5 rounded-xl">
                <span className="text-xs font-semibold text-[#1C3636] tracking-wide uppercase">
                  Professional Copywriting & Content Solutions
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1C3636] tracking-tight leading-[1.12]">
                <span className="text-[#1C3636]">Copy That Builds </span>
                <span className="text-[#1CA186]">Trust, </span>
                <span className="text-[#0F766E]">Commands </span>
                <span className="text-[#1C3636]">Attention, and Drives Real Business Growth</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                Every sentence on your website shapes how customers perceive your brand — and whether they decide to trust you. We craft strategic, conversion-driven copywriting that communicates your value with clarity, strengthens brand credibility, and turns casual visitors into loyal customers.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow text-center cursor-pointer"
>
  <span>Elevate Your Brand Voice</span>
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-white border border-slate-200 text-[#1C3636] hover:bg-slate-50 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 text-center shadow-xs cursor-pointer"
>
  Schedule a Free Consultation
</button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex flex-col items-center">
              <div className="relative w-full max-w-md lg:max-w-none rounded-xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] bg-slate-50">
                <Image
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
                  alt="Professional content writing and strategy dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* ========================================================= */}
      {/* 2. PERFORMANCE CARDS                                      */}
      {/* ========================================================= */}
      <motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white relative border-y border-emerald-950" {...sectionMotion("cinematic")}>
        <div className="max-w-[1280px] mx-auto py-6 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#F9FAFA]">Every Word Written with </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Intent.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "High-Converting Copywriting", desc: "Crafted specifically to convert visitors into active leads and customers." },
              { icon: Rocket, title: "Search-Optimized Content Strategy", desc: "Balanced structure designed for search visibility and organic traffic growth." },
              { icon: Target, title: "Targeted Brand Messaging", desc: "Precision phrasing that speaks directly to your ideal customer profile." },
              { icon: TrendingUp, title: "Deeper Audience Engagement", desc: "Compelling storytelling that reduces bounce rates and increases time on site." },
              { icon: Briefcase, title: "Established Industry Authority", desc: "Professional positioning that distinguishes your business from competitors." },
              { icon: Zap, title: "Sharp, Persuasive Storytelling", desc: "Clear narratives that remove friction and accelerate buying decisions." }
            ].map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#122424] border border-slate-800 p-5 rounded-xl hover:border-[#1CA186] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-3 shadow-lg group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#1CA186]/10 flex items-center justify-center text-[#1CA186] group-hover:bg-[#1CA186] group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-bold group-hover:text-[#1CA186] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="space-y-1.5 text-left">
                      <h3 className="text-base font-bold text-white group-hover:text-[#1CA186] transition-colors">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800/60 text-left">
                   <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="text-xs font-bold text-[#1CA186] hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
>
  <span>Learn more</span>
  <span>→</span>
</button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* ========================================================= */}
      {/* 3. SERVICE OVERVIEW                                       */}
      {/* ========================================================= */}
      <motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 border-b border-slate-200/60" {...sectionMotion("editorial")}>
        <div className="max-w-[1280px] mx-auto py-6 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-xl shadow-xs flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
                    Service Overview
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1C3636] leading-tight">
                  <span className="text-[#1C3636]">Great Copywriting </span>
                  <span className="text-[#1CA186]">Doesn't Fill </span>
                  <span className="text-[#0F766E]">Space — </span>
                  <span className="text-[#1C3636]">It Creates Impact</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Your website, landing pages, and marketing materials are all part of one ongoing narrative about your business. The right messaging builds trust, neutralizes objections before they surface, and gives customers the confidence to act.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  We combine market research, brand strategy, and persuasive writing to produce copy that doesn't just read well — it performs. Every sentence is engineered to reinforce your brand identity, elevate the user experience, and support measurable, long-term growth.
                </p>
              </div>
              <div>
               <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-sm cursor-pointer"
>
  <span>Discuss Your Project</span>
  <span>→</span>
</button>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full min-h-[350px] lg:min-h-full rounded-xl overflow-hidden shadow-2xl border border-slate-100 bg-[#1C3636]">
              <Image
                src="/Strategic-Execution.jpg"
                alt="Strategic execution and professional content creation framework"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#1C3636]/90 backdrop-blur-md border border-slate-800 rounded-xl text-white text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold block mb-1">Strategic Framework</span>
                <p className="text-xs text-slate-300 leading-relaxed">Engineered for long-term growth, high conversions, and total audience alignment.</p>
              </div>
            </div>

          </div>

        </div>
      </motion.section>

    {/* ========================================================= */}
{/* 4. WHAT WE DELIVER                                        */}
{/* ========================================================= */}
<motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white border-y border-emerald-950" {...sectionMotion("glide")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="text-left max-w-2xl space-y-2">
        <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
            Deliverables
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-[#F9FAFA]">Full-Service Copywriting & Content Solutions, </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Built for Results
          </span>
        </h2>
      </div>
      <div>
       <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 items-center justify-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
>
  <span>Request Custom Deliverable →</span>
</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        "Website Copywriting",
        "High-Converting Landing Pages",
        "Service & Solutions Page Content",
        "About Us & Brand Story Pages",
        "Corporate & Company Profiles",
        "Sales & Persuasive Copy",
        "Product & Service Descriptions",
        "Email Marketing Campaigns",
        "Call-to-Action Copywriting",
        "SEO-Driven Website Content"
      ].map((item, index) => (
        <div 
          key={index} 
          className="group relative bg-[#122424] border border-slate-800 p-4 rounded-xl flex items-center justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#1CA186] hover:shadow-xl hover:bg-[#05745d]"
        >
          {/* Left and Right sliding border bars mapped from the button effect */}
          <div className="absolute inset-y-0 left-0 w-2.5 border-y-2 border-l-2 border-[#1CA186] rounded-l-xl bg-transparent transition-all duration-300 group-hover:w-1/2 group-hover:border-white"></div>
          <div className="absolute inset-y-0 right-0 w-2.5 border-y-2 border-r-2 border-[#1CA186] rounded-r-xl bg-transparent transition-all duration-300 group-hover:w-1/2 group-hover:border-white"></div>

          {/* Card Inner Content */}
          <div className="relative z-10 flex items-center justify-between w-full px-2">
            <div className="flex items-center gap-4 text-left transition-transform duration-300 group-hover:translate-x-2">
              <span className="w-7 h-7 rounded-xl bg-[#1CA186]/10 text-[#1CA186] group-hover:bg-white group-hover:text-[#16856f] flex items-center justify-center text-xs font-bold shrink-0 transition-colors duration-300">✓</span>
              <span className="font-bold text-white text-sm tracking-wide transition-colors duration-300">{item}</span>
            </div>

            {/* Custom Interactive Arrow */}
            <div className="relative inline-flex items-center w-[30px] h-[15px] ml-2 transition-transform duration-300 group-hover:translate-x-2 shrink-0">
              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-[10px] h-0 border-2 border-[#1CA186] group-hover:border-white group-hover:w-[25px] transition-all duration-300"></span>
              <span className="absolute top-1/2 left-[3px] group-hover:left-[15px] -translate-y-1/2 w-[10px] h-[10px] border-t-[4px] border-r-[4px] border-[#1CA186] group-hover:border-white rotate-45 transition-all duration-300"></span>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</motion.section>

     {/* ========================================================= */}
{/* 5. WHY PROFESSIONAL COPYWRITING MATTERS                   */}
{/* ========================================================= */}
<motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 border-b border-slate-200/60" {...sectionMotion("spring")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="text-left space-y-2 max-w-3xl">
        <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
            Value Proposition
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1C3636]">
          <span className="text-[#1C3636]">Why Professional </span>
          <span className="text-[#1CA186]">Copywriting </span>
          <span className="text-[#0F766E]">Matters</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          The strategic difference between being ignored and being chosen.
        </p>
      </div>
      
      <div className="shrink-0">
       <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
>
  <span>Elevate Your Content Strategy</span>
  <span>→</span>
</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Establish Credibility from the First Impression", desc: "Polished, professional writing builds instant trust — giving visitors the confidence to choose you over the competition." },
        { title: "Communicate Your Value with Precision", desc: "We translate your products and services into messaging that's clear, compelling, and impossible to misunderstand." },
        { title: "Deepen Audience Engagement", desc: "Strategic storytelling captures attention and keeps visitors exploring, interacting, and moving toward a decision." },
        { title: "Strengthen Organic Search Visibility", desc: "SEO-driven content writing helps your brand rank higher, reach the right audience, and attract qualified organic traffic." },
        { title: "Increase Conversion Rates", desc: "Persuasive copy removes hesitation and gives customers a compelling reason to act now, not later." },
        { title: "Build Long-Term Brand Authority", desc: "Consistent, strategic messaging positions your business as the go-to expert in your industry." }
      ].map((item, idx) => (
        <div 
          key={idx} 
          className="relative bg-slate-50 p-4 sm:p-5 rounded-xl overflow-hidden cursor-pointer shadow-sm border border-slate-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between text-left group"
        >
          {/* Gradient Blur Background on Hover */}
          <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-[#1CA186] rounded-full blur-[200px] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>

          {/* Left Border Accent Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-gradient-to-b from-[#1CA186] to-[#0F766E] rounded-l-xl transition-all duration-300 group-hover:w-[10px]"></div>

          {/* Card Content with Translate-X on Hover */}
          <div className="relative z-10 space-y-2 transition-transform duration-300 group-hover:translate-x-5">
            <span className="font-mono font-bold text-xs text-[#1CA186] block">0{idx + 1}</span>
            <h3 className="text-base font-bold tracking-wide text-[#1C3636] group-hover:text-[#1CA186] transition-colors">{item.title}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

  </div>
</motion.section>

      {/* ========================================================= */}
{/* 6. OUR CONTENT CREATION PROCESS                           */}
{/* ========================================================= */}
<motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white border-y border-emerald-950" {...sectionMotion("spotlight")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div className="text-left space-y-2 max-w-2xl">
        <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
            Methodology
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-[#F9FAFA]">A Strategic Writing Process Built Around </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Your Business Goals
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          A disciplined 5-step framework designed for absolute clarity and alignment.
        </p>
      </div>
      
      <div className="relative w-full md:w-[320px] h-[160px] rounded-xl overflow-hidden shadow-md border border-slate-800 shrink-0">
        <Image
          src="/Strategic-Framework.jpg"
          alt="Strategic execution framework visual"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/90 via-transparent to-transparent flex items-end p-4">
          <span className="text-xs font-bold text-emerald-200 tracking-wide">Structured milestones for absolute clarity</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
      {[
        { num: "01", title: "Discovery & Market Research", desc: "We study your business, target audience, competitors, and objectives before a single word is written." },
        { num: "02", title: "Messaging & Content Strategy", desc: "We build a clear brand voice framework aligned with your identity and business objectives." },
        { num: "03", title: "Copywriting & SEO Optimization", desc: "Our writers craft persuasive, engaging, keyword-optimized content tailored precisely to your audience." },
        { num: "04", title: "Editing & Quality Review", desc: "Every piece is rigorously refined for clarity, accuracy, tone consistency, and persuasive impact." },
        { num: "05", title: "Delivery & Ongoing Content Support", desc: "We deliver publication-ready copy and continue supporting your content strategy as your business scales." }
      ].map((step, idx) => (
        <div key={idx} className="relative group w-full">
          {/* Dashed Background Border */}
          <div className="absolute inset-0 w-full h-full border border-dashed border-slate-700/60 rounded-xl z-0"></div>

          {/* Main Card Body */}
          <div className="relative bg-[#122424] border border-slate-800 p-5 rounded-xl flex flex-col justify-between h-[310px] shadow-md z-10 overflow-hidden transition-all duration-500 ease-in-out group-hover:-translate-x-3.5 group-hover:-translate-y-3.5 group-hover:border-[#1CA186]">
            
            {/* Default State: Number & Title stay neatly at the top */}
            <div className="space-y-3 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
              <div className="w-10 h-10 bg-[#1CA186]/15 text-[#1CA186] flex items-center justify-center rounded-xl font-mono font-bold text-xs">
                {step.num}
              </div>
              <h3 className="text-base font-bold tracking-wide text-white leading-snug">{step.title}</h3>
            </div>

            {/* Hover State: Full Content Slides Up Smoothly from Bottom to Top */}
            <div className="absolute inset-5 flex flex-col justify-between translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="space-y-3">
                <div className="w-8 h-8 bg-[#1CA186]/15 text-[#1CA186] flex items-center justify-center rounded-lg font-mono font-bold text-xs">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold tracking-wide text-white">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex justify-center items-center gap-1.5 w-full py-2 px-3 rounded-xl font-semibold text-xs bg-[#1CA186] text-white hover:bg-[#158f75] transition-colors duration-300 shadow-sm cursor-pointer"
>
  <span>Details</span>
  <span>→</span>
</button>
              </div>
            </div>

            {/* Static Bottom Link for Default View */}
            <div className="pt-2 border-t border-slate-800/80 mt-auto group-hover:opacity-0 transition-opacity duration-200">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="text-[#1CA186] text-xs font-bold tracking-wide hover:underline inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
>
  <span>Details</span>
  <span>→</span>
</button>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</motion.section>

 {/* ========================================================= */}
{/* 7. TYPES OF CONTENT WE CREATE                             */}
{/* ========================================================= */}
<motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 border-b border-slate-200/60" {...sectionMotion("sweep")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="text-left space-y-2 max-w-3xl">
        <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
            Journey Mapping
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1C3636]">
          <span className="text-[#1C3636]">Copywriting </span>
          <span className="text-[#1CA186]">Designed for </span>
          <span className="text-[#0F766E]">Every Stage </span>
          <span className="text-[#1C3636]">of the Customer Journey</span>
        </h2>
      </div>
      
      <div className="shrink-0">
        <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
>
  <span>Explore All Content Formats</span>
  <span>→</span>
</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Website Copywriting", desc: "Professional, brand-aligned content that strengthens your digital presence and communicates value with precision." },
        { title: "Landing Page Copy", desc: "High-converting pages engineered to turn traffic into leads and leads into customers." },
        { title: "Service Page Content", desc: "Clear, credible messaging that explains your offerings and drives inbound inquiries." },
        { title: "Company & Brand Profiles", desc: "Confident, polished narratives that position your business as a market leader." },
        { title: "Marketing & Campaign Copy", desc: "Engaging content that fuels your campaigns and inspires immediate action." },
        { title: "SEO Content Writing", desc: "Strategic, search-optimized writing that never sacrifices readability or professionalism." }
      ].map((item, idx) => (
        <div key={idx} className="relative overflow-hidden rounded-[15px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 group bg-slate-50 border border-slate-100 p-5 flex flex-col justify-between text-left">
          
          {/* Background Overlay using #162b2b on hover */}
          <div className="absolute inset-0 bg-[#162b2b] rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

          {/* Card Content with original styling and hover text adaptation */}
          <div className="relative z-20 flex flex-col justify-between h-full space-y-4">
            <div className="space-y-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#1CA186]/10 text-[#1CA186] font-mono font-bold text-xs flex items-center justify-center group-hover:bg-[#1CA186] group-hover:text-white transition-colors duration-200">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold tracking-wide text-[#1C3636] group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-200 transition-colors leading-relaxed">{item.desc}</p>
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</motion.section>

 {/* ========================================================= */}
{/* 8. WHY BUSINESSES CHOOSE OUR CONTENT WRITING SERVICES     */}
{/* ========================================================= */}
<motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white border-y border-emerald-950" {...sectionMotion("depth")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="text-center max-w-3xl mx-auto space-y-4">
      <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
        <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
          Why Choose Us
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        <span className="text-[#F9FAFA]">Copywriting Built on Strategy, </span>
        <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
          Not Guesswork
        </span>
      </h2>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        We don't just write content — we craft strategic messaging designed to convert. By blending audience insight, SEO expertise, and persuasive copywriting, we help businesses turn words into measurable results. It's this results-driven approach that sets our content writing services apart.
      </p>
      <div className="pt-2">
        <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-white hover:bg-slate-100 text-[#1C3636] font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 inline-flex items-center gap-2 shadow-md cursor-pointer"
>
  <span>🚀 Partner With Us Today</span>
</button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
      {[
        { title: "Results-Oriented Messaging", desc: "Every word is written to support a specific business outcome — generating leads, building trust, or driving sales." },
        { title: "Audience-Centric Writing", desc: "We write for the people you're trying to reach, using language that resonates, builds rapport, and converts." },
        { title: "SEO & Conversion Expertise", desc: "Our content strategy balances search engine performance with high-impact, persuasive communication." },
        { title: "Consistent Brand Voice", desc: "Every piece reflects your brand identity, tone, and professionalism — with total consistency across your entire digital footprint." }
      ].map((item, idx) => (
        <div key={idx} className="relative group cursor-pointer pt-6 pb-6">
          
          {/* Card Back: bottom offset is set to bottom-6 for cards 1-3 (idx < 3) and bottom-3 for the 4th card (idx === 3) */}
          <div className={`absolute inset-x-0 top-6 ${idx === 3 ? 'bottom-3' : 'bottom-6'} bg-[#162b2b]  p-5 rounded-xl transition-all duration-300 ease-in-out flex flex-col justify-between space-y-3 text-left shadow-2xl z-0 pointer-events-none group-hover:translate-x-4 group-hover:-translate-y-2 group-hover:scale-105`}>

          </div>

          {/* Main Card */}
          <div className="relative bg-[#122424] border border-[#1CA186] p-5 rounded-xl transition-all duration-300 ease-in-out flex flex-col justify-between space-y-3 text-left shadow-lg z-10">
            
            {/* Top Action Header that fades in and drops down on hover */}
            <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-200 h-0 group-hover:h-auto overflow-hidden">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="w-8 h-8 rounded-lg bg-[#727890] hover:bg-[#5A5F73] text-[#B1B0B0] hover:text-white flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 mb-1 cursor-pointer"
>
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>
</button>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#1CA186]/10 text-[#1CA186] font-mono font-bold text-xs flex items-center justify-center group-hover:bg-[#1CA186] group-hover:text-white transition-colors duration-200">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#1CA186] transition-colors">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</motion.section>

      {/* ========================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS                             */}
      {/* ========================================================= */}
      <motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 border-b border-slate-200/60" {...sectionMotion("unfold")}>
        <div className="max-w-[1280px] mx-auto py-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
                FAQ Section
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1C3636]">
              <span className="text-[#1C3636]">Frequently Asked </span>
              <span className="text-[#1CA186]">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Everything you need to know about working with our professional copywriting team, our process, and our deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl space-y-4 text-left shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#1CA186] text-white flex items-center justify-center">
                  <span className="font-bold text-lg">?</span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#1C3636]">Have another question?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    We are always ready to discuss your custom project requirements and answer any questions you may have.
                  </p>
                </div>
               <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex w-full bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 items-center justify-center gap-2 shadow-sm text-center cursor-pointer"
>
  <span>Contact our support team</span>
  <span>→</span>
</button>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {[
                { q: "Do you write content for all industries?", a: "Yes. We deliver tailored, well-researched copywriting for businesses across a wide range of industries and niches." },
                { q: "Is your content optimized for search engines?", a: "Absolutely. Every piece is crafted to perform in search rankings while remaining natural, credible, and genuinely engaging for readers." },
                { q: "Can you rewrite or refresh my existing website content?", a: "Yes. We revitalize outdated or underperforming copy to improve clarity, professionalism, and conversion performance." },
                { q: "Do you research my business before writing?", a: "Yes. Every project begins with dedicated brand and market research to ensure messaging that's accurate, relevant, and strategically sound." },
                { q: "Will the content match my brand voice?", a: "Absolutely. We tailor every piece to reflect your brand's unique tone and personality with total consistency." },
                { q: "Can you create content for a brand-new website?", a: "Yes. We deliver complete website copywriting — homepages, service pages, landing pages, and everything in between." }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden transition-all duration-200 text-left shadow-xs hover:border-[#1CA186]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-[#1C3636] hover:text-[#1CA186] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-slate-400 shrink-0">0{idx + 1}</span>
                        <span className="text-sm sm:text-base">{faq.q}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-xl bg-slate-200/70 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#1CA186] text-white" : "text-slate-600"}`}>
                        <span className="font-bold text-xs">▼</span>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3.5 pl-12">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </motion.section>

      {/* ========================================================= */}
      {/* 10. FINAL CTA SECTION                                     */}
      {/* ========================================================= */}
      <motion.section className="bg-[#1C3636] text-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden" {...sectionMotion("finale")}>
        <div className="absolute inset-0 bg-[radial-gradient(#244343_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto py-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
                  Take Action
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-[#F9FAFA]">Ready to Give Your Brand a Sharper, </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  More Persuasive Voice?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Powerful copywriting is more than well-written text — it's a strategic business asset that builds trust, communicates value, and drives measurable results. Let us help you craft content that resonates with your audience, reinforces your authority, and fuels long-term growth.
              </p>

              <div className="space-y-2 pt-1">
                <p className="text-xs font-mono uppercase tracking-wider text-[#1CA186] font-semibold">Why Businesses Trust Our Content Writing Services</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-2"><span>✅</span> <span>Strategic Brand Storytelling</span></div>
                  <div className="flex items-center gap-2"><span>✅</span> <span>SEO-Optimized Website Copywriting</span></div>
                  <div className="flex items-center gap-2"><span>✅</span> <span>High-Converting Content</span></div>
                  <div className="flex items-center gap-2"><span>✅</span> <span>Consistent, Recognizable Brand Voice</span></div>
                  <div className="flex items-center gap-2"><span>✅</span> <span>Audience-Centric Messaging</span></div>
                  <div className="flex items-center gap-2"><span>✅</span> <span>Content Built for Long-Term Growth</span></div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-center cursor-pointer"
>
  <span>Start Your Content Project Today</span>
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#122424] border border-slate-700 text-white hover:bg-[#16856f9a] font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 text-center shadow-md cursor-pointer"
>
  Schedule a Free Consultation
</button>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex flex-col items-center">
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-slate-800 aspect-[16/9] bg-[#16856f9a]">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop"
                  alt="Professional copywriting strategy session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </motion.section>#

       <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

    </div>
  );
}
