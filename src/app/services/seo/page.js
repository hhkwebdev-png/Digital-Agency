'use client';

import React, { useState } from 'react';
import Popup from "@/components/Popup";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export default function SEOPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden min-h-screen text-[#111414]">
      
      {/* 1. HERO SECTION (White) */}
      <section className="relative bg-white py-12 px-6 sm:px-8 lg:px-12 text-[#111414] overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#E6F8F3] rounded-full blur-[80px] opacity-70 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-4 pb-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="inline-flex items-center gap-2 bg-[#E6F8F3] border border-[#B3EDDE] px-4 py-2 rounded-xl text-xs font-bold tracking-wide text-[#187563]">
              Data-Driven SEO & Lead Generation
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] text-[#113131]">
              Stop Losing Customers to Competitors Who <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">Rank Higher Than You.</span>
            </h1>
            
            <p className="text-base text-gray-700 leading-relaxed font-semibold">
              Right now, someone is searching for exactly what you sell — and finding your competitor instead.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              We build data-driven SEO and lead generation systems that put your business at the top of search results, in front of buyers who are ready to act, and turn everyday website traffic into a predictable pipeline of qualified leads.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1CA186] hover:bg-[#16856f] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-[0_8px_20px_-6px_rgba(28,161,134,0.5)] transition-all hover:-translate-y-1 cursor-pointer"
>
  <span>Grow My Business</span>
  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-[#113131] hover:border-[#1CA186] hover:text-[#1CA186] px-5 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer"
>
  Book a Free Strategy Call
</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[380px] lg:h-[460px] rounded-xl overflow-hidden shadow-2xl border-4 border-gray-100 z-10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                alt="SEO Data Analytics Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#113131]/60 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-8 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-gray-200 shadow-2xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1CA186] rounded-xl flex items-center justify-center shadow-lg text-white p-2.5">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Trending Up" className="w-full h-full object-cover rounded-md" />
              </div>
              <div>
                <p className="text-xl font-black text-[#113131]">+284% Organic Reach</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Proven Rank Growth</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    {/* 2. PERFORMANCE CARDS (Dark) */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#122424] text-white">
        <div className="max-w-[1280px] mx-auto space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-1"
          >
            <span className="inline-block bg-[#1C3636] text-[#1CA186] text-xs font-mono font-bold tracking-widest uppercase px-4 py-2 rounded-xl border border-white/10">MEASURABLE RESULTS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              <span className="text-[#F9FAFA]">Visibility That </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Turns Into Revenue Today
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {[
              {
                title: "Dominate Search Rankings",
              },
              {
                title: "Generate High-Intent Leads",
              },
              {
                title: "Scale Organic Growth Without Ad Spend",
              },
              {
                title: "Execute a Data-Driven SEO Strategy",
              },
              {
                title: "Unlock More Business Opportunities",
              },
              {
                title: "Build Digital Authority That Compounds",
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="card shadow-[0px_4px_16px_0px_#1CA186] hover:shadow-none h-[140px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden transition-all duration-300"
              >
                <div className="absolute top-0 left-0 h-full w-full bg-[#1C3636]"></div>

                <div className="container text-white z-[2] relative font-nunito flex flex-col gap-[0.5em] duration-500 group-hover:-translate-y-[55px]">
                  <div className="h-fit w-full">
                    <h1
                      style={{
                        fontWeight: 900,
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: '#1CA186'
                      }}
                      className="card_heading text-[1em] tracking-[.1em]"
                    >
                      {card.title}
                    </h1>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW (White) */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-white text-[#111414]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="/Guaranteed-Growth.jpg" 
                alt="SEO Strategy Session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-6 bg-[#1C3636] text-white p-5 rounded-xl shadow-2xl border border-gray-700 max-w-[200px]">
              <p className="text-xs font-bold text-[#1CA186] uppercase">Guaranteed Growth</p>
              <p className="text-lg font-bold mt-1">High-Intent Organic Strategy</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="text-xs font-bold text-[#16856f] uppercase tracking-wider bg-[#1CA186]/10 px-4 py-2 rounded-xl">SERVICE OVERVIEW</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1C3636] leading-tight text-center">
              <span className="text-[#1C3636]">No Visibility.</span>{" "}
              <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">No Customers.</span>{" "}
              <span className="text-[#1C3636]">No Growth Guaranteed.</span>
            </h2>

            <p className="text-base font-semibold text-[#1C3636] leading-relaxed">
              A brilliant website means nothing if your ideal customers can't find it. Search engines are where buying decisions begin — and if you're not visible at that moment, you don't just lose a click. You lose the sale.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              Our SEO and lead generation strategies put your business exactly where it needs to be: at the top of search results, directly in front of customers who are actively ready to buy.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              By combining technical SEO, strategic content, and conversion optimization, we don't just increase traffic — we build credibility, dominate visibility, and deliver a consistent, compounding flow of qualified leads.
            </p>

            <div className="pt-2">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1CA186] hover:bg-[#16856f] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
>
  <span>Get your free SEO audit</span>
  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHAT WE DELIVER (Dark) */}
      <section className="py-16 px-8 sm:px-12 lg:px-24 bg-[#122424] text-white">
        <div className="max-w-[1440px] mx-auto space-y-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 max-w-2xl mx-auto px-4 sm:px-0"
          >
            <span className="inline-block bg-[#1C3636] text-[#1CA186] text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 rounded-xl border border-white/10">WHAT WE DELIVER</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              <span className="text-[#F9FAFA]">Complete SEO & Lead Generation </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Solutions — Built to Perform and Scale
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Growth doesn't come from a single tactic. It comes from a full system working together, from the first audit to the leads landing in your inbox. Here's everything that's included when you work with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 justify-items-center text-left px-4">
            {[
              {
                text: "In-Depth SEO Audits That Uncover Hidden Opportunities",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                )
              },
              {
                text: "Precision Keyword & Market Research",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                  </svg>
                )
              },
              {
                text: "High-Impact On-Page SEO Optimization",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                )
              },
              {
                text: "Technical SEO Fixes That Remove Growth Barriers",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                )
              },
              {
                text: "Local SEO Domination",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                )
              },
              {
                text: "Landing Pages Engineered to Convert",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                )
              },
              {
                text: "Lead Generation Strategy Built Around Your Sales Goals",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                )
              },
              {
                text: "Conversion Rate Optimization That Maximizes Every Visitor",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )
              },
              {
                text: "Transparent Performance Tracking & Reporting",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                )
              },
              {
                text: "Ongoing SEO Growth Management That Never Lets Up",
                icon: (
                  <svg className="w-7 h-7 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                )
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#1C3636] border border-white/10 flex w-[440px] h-[120px] relative rounded-[8px] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:w-[220px] hover:border-[#1CA186] overflow-hidden group shadow-xl"
              >
                {/* Left Side */}
                <div className="bg-[#122424] w-[130px] h-[120px] rounded-[6px] relative flex justify-center items-center cursor-pointer transition-all duration-300 shrink-0 overflow-hidden group-hover:w-full z-20 border-r border-white/10">
                  <div className="flex items-center justify-center w-full h-full pr-4">
                    {item.icon}
                  </div>
                </div>

                {/* Right Side */}
                <div className="right-side w-[calc(100%-130px)] h-[120px] flex items-center overflow-hidden cursor-pointer justify-between whitespace-nowrap transition-all duration-300 hover:bg-[#152c2c] z-10 pl-6 pr-4">
                  <span className="new text-[16px] sm:text-[18px] font-['Lexend_Deca',sans-serif] text-white font-medium whitespace-normal leading-snug">
                    {item.text}
                  </span>
                  <svg className="arrow w-[20px] h-[20px] ml-4 mr-[10px] shrink-0 text-[#1CA186]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY SEO MATTERS (White) */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white text-[#111414]">
        <div className="max-w-[1280px] mx-auto space-y-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3 max-w-2xl mx-auto"
          >
            <span className="text-xs font-bold text-[#16856f] uppercase tracking-wider bg-[#1CA186]/10 px-4 py-2 rounded-xl">WHY SEO MATTERS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1C3636] text-center">
              <span className="text-[#1C3636]">Dominate</span>{" "}
              <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">Organic Search</span>{" "}
              <span className="text-[#1C3636]">Visibility</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              SEO isn't a line item, it's the foundation everything else stands on. Get it right and every other marketing dollar you spend works harder, for longer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Own the Search Results",
                desc: "Show up exactly where your potential customers are already searching — before your competitors do."
              },
              {
                title: "Generate Leads That Actually Convert",
                desc: "Attract visitors who are genuinely ready to buy, not just browsing."
              },
              {
                title: "Build Unshakable Brand Authority",
                desc: "A dominant search presence signals trust instantly and positions you as the obvious industry leader."
              },
              {
                title: "Create Growth That Compounds — Not Expires",
                desc: "Unlike paid ads that stop the moment you stop paying, SEO builds momentum that keeps generating results for years."
              },
              {
                title: "Deliver a Faster, Stronger User Experience",
                desc: "Better structure, faster load times, and optimized content turn visitors into customers."
              },
              {
                title: "Maximize Every Marketing Dollar",
                desc: "Generate consistent, high-quality leads without total dependence on paid campaigns."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-slate-50 p-6 rounded-2xl border-t-4 border-t-[#1CA186] border-x border-b border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-2 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors">{feature.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR SEO PROCESS (Dark) */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#122424] text-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="inline-block bg-[#1C3636] text-[#1CA186] text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 rounded-xl border border-white/10">OUR SEO PROCESS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              <span className="text-[#F9FAFA]">A Proven Framework Built for </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Sustainable, Scalable Growth Success
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              There's no guesswork here. Every engagement follows the same disciplined process, refined across countless campaigns, so results build on each other instead of starting from scratch.
            </p>
            
            <div className="w-full h-[220px] sm:h-[260px] lg:h-[280px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
               <img 
                src="/Proven-Frameworks.jpg" 
                alt="SEO Strategy Analytics" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-2">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1CA186] hover:bg-[#16856f] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
>
  <span>Start Your SEO Roadmap</span>
  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
</button>
            </div>
          </motion.div>

          <div className="space-y-3 lg:pt-[104px]">
            {[
              {
                step: "01",
                title: "Discovery & Market Analysis",
                desc: "We dissect your business, your competitors, and your audience to uncover the exact opportunities driving growth."
              },
              {
                step: "02",
                title: "SEO Strategy Development",
                desc: "Every strategy is engineered around your specific goals, audience, and competitive landscape — never a template."
              },
              {
                step: "03",
                title: "Website Optimization",
                desc: "We rebuild your site's structure, speed, and technical foundation to maximize visibility and performance."
              },
              {
                step: "04",
                title: "Content & Authority Building",
                desc: "We create high-value content that cements your authority and expands your organic reach."
              },
              {
                step: "05",
                title: "Monitoring & Continuous Improvement",
                desc: "SEO never stands still — and neither do we. We continuously refine, adapt, and optimize as search engines evolve."
              },
              {
                step: "06",
                title: "Results and reporting",
                desc: "You get clear, measurable reporting on rankings, traffic, and lead growth, so you always know exactly what's working."
              }
            ].map((proc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-[#1C3636] p-4 rounded-xl border border-white/10 flex items-center justify-between gap-3 hover:border-[#1CA186] transition-all"
              >
                <div className="flex items-start gap-3">
                  <span className="text-sm font-mono font-black text-[#1CA186] bg-[#1CA186]/10 px-2.5 py-0.5 rounded-lg border border-[#1CA186]/30 shrink-0">
                    {proc.step}
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-sm sm:text-base font-bold text-white">{proc.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. OUR SEO SOLUTIONS (White) */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-white text-[#111414]">
        <div className="max-w-[1280px] mx-auto space-y-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 max-w-2xl mx-auto"
          >
            <span className="text-xs font-bold text-[#16856f] uppercase tracking-wider bg-[#1CA186]/10 px-4 py-2 rounded-xl">OUR SEO SOLUTIONS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#113131] text-center">
              <span className="text-[#113131]">Everything Your Business</span>{" "}
              <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">Needs to Dominate</span>{" "}
              <span className="text-[#113131]">Organic Search</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              No single tactic wins on its own. These are the core pillars we bring together into one system, built to move your rankings, your traffic, and your revenue at the same time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: "Technical SEO", desc: "Eliminate the hidden issues holding back your site's speed, crawlability, and indexing." },
              { title: "On-Page SEO", desc: "Optimize every page for maximum relevance and ranking power." },
              { title: "Local SEO", desc: "Capture nearby customers the moment they start searching." },
              { title: "Content Optimization", desc: "Publish content engineered to attract, engage, and convert your ideal audience." },
              { title: "Lead Generation Systems", desc: "Turn passive visitors into active inquiries with conversion-focused landing pages and experiences." },
              { title: "Analytics & Reporting", desc: "Track every result with full transparency and insights you can act on immediately." }
            ].map((sol, idx) => (
              <div 
                key={idx}
                className="w-full h-[180px] [perspective:1000px] group"
              >
                <div className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-[999ms] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Card Front */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-slate-50 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center [transform:rotateY(0deg)]">
                    <h3 className="text-base sm:text-lg font-bold text-[#113131]">{sol.title}</h3>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Hover to view description</p>
                  </div>

                  {/* Card Back */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-slate-50 p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center [transform:rotateY(180deg)]">
                    <h3 className="text-sm font-bold text-[#1CA186] mb-1">{sol.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{sol.desc}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY BUSINESSES CHOOSE US (Dark) */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#122424] text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-[1280px] mx-auto rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-[#1C3636] border border-white/10"
        >
          <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center space-y-5">
            <div className="space-y-2">
              <span className="inline-block bg-[#122424] text-[#1CA186] text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 rounded-xl border border-white/10">WHY BUSINESSES CHOOSE US</span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                <span className="text-[#F9FAFA]">SEO Engineered for </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  One Outcome: Growth & Success
                </span>
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: "Strategy Before Execution", desc: "Every campaign starts with a clear, data-backed plan — never guesswork." },
                { title: "Decisions Driven by Data, Not Opinion", desc: "Every recommendation is backed by real research, analytics, and measurable proof." },
                { title: "Built for Long-Term Dominance", desc: "We don't chase short-term wins — we build strategies that compound and keep delivering results." },
                { title: "A True Growth Partner", desc: "From optimization to lead generation, we're with you at every stage of your growth." }
              ].map((reason, idx) => (
                <div key={idx} className="flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-white">{reason.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1CA186] hover:bg-[#16856f] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer"
>
  <span>See How It All Fits</span>
  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
</button>
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="/SEO-Engineered.jpg" 
              alt="Professional SEO Team Working" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1CA186]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C3636] to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (White & Full-Width BG Combination) */}
      <section className="py-12 bg-white text-[#111414] w-full">
        <div className="w-full bg-[#1C3636] text-white py-12 px-6 sm:px-8 lg:px-12">
          <div className="max-w-[1280px] mx-auto space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 space-y-3 lg:sticky lg:top-24 text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <span className="text-xs font-bold text-[#1CA186] uppercase tracking-wider bg-[#1CA186]/10 px-4 py-2 rounded-xl border border-white/10">FREQUENTLY ASKED QUESTIONS</span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                  Clear Answers to Your SEO <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Questions & Doubts</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                  Still weighing your options? Here are the questions we hear most often before a business decides to work with us.
                </p>
                
                <div className="pt-4 hidden lg:block w-full">
                  <div className="p-6 bg-[#122424] border border-white/10 rounded-xl space-y-3 text-left">
                    <p className="text-sm font-bold text-white">Have a specific question not listed here?</p>
                    <p className="text-xs text-slate-300">Our strategists are ready to review your website layout and answer any technical questions you have.</p>
                   <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 text-xs font-bold text-[#1CA186] hover:underline pt-1 cursor-pointer bg-transparent border-none p-0"
>
  <span>Contact our team</span>
  <ArrowRight className="w-4 h-4 text-[#1CA186] group-hover:translate-x-1 transition-transform" />
</button>
                  </div>
                </div>
              </motion.div>

              <div className="lg:col-span-7 space-y-4">
                {[
                  {
                    q: "How long does SEO take to show results?",
                    a: "SEO is a long-term investment, not a quick fix. Most businesses start seeing meaningful, measurable improvements within a few months — and results continue compounding from there."
                  },
                  {
                    q: "Is SEO better than paid advertising?",
                    a: "SEO builds lasting visibility and sustainable traffic that keeps working long after you stop paying for it. Paid ads deliver speed, but the results stop the moment the budget does. The strongest businesses use both, strategically."
                  },
                  {
                    q: "Do you provide Local SEO services?",
                    a: "Yes. We position your business to dominate local search results and capture nearby customers the moment they're ready to buy."
                  },
                  {
                    q: "Can SEO help generate more leads?",
                    a: "Absolutely — it's the entire point. Every strategy we build is designed to attract qualified visitors and convert them into real business opportunities."
                  },
                  {
                    q: "Will I receive performance reports?",
                    a: "Yes. You'll get full transparency into rankings, traffic, and campaign performance — no guesswork, no black boxes."
                  },
                  {
                    q: "Do you offer ongoing SEO management?",
                    a: "Yes. SEO demands continuous optimization to stay ahead, and we provide long-term management to protect and grow your results."
                  }
                ].map((faq, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`transition-all duration-300 rounded-xl border ${openFaq === idx ? 'bg-[#122424] border-[#1CA186] shadow-md' : 'bg-[#122424]/60 border-white/10 hover:border-white/20'}`}
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 font-bold text-sm sm:text-base text-white"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-md text-xs flex items-center justify-center font-mono ${openFaq === idx ? 'bg-[#1CA186] text-white' : 'bg-white/10 text-slate-300'}`}>
                          {idx + 1}
                        </span>
                        {faq.q}
                      </span>
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openFaq === idx ? 'bg-[#1CA186]/20 text-[#1CA186]' : 'bg-white/10 text-slate-300'}`}>
                        <span className={`text-xs font-bold transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
                      </div>
                    </button>
                    
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="px-6 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION (Dark) */}
      <section className="py-12 px-6 sm:px-8 lg:px-12 bg-[#122424] text-white w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[1280px] mx-auto bg-[#1C3636] text-white rounded-xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl relative overflow-hidden border border-white/10"
        >
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-[#122424] text-[#1CA186] text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 rounded-xl border border-white/10">
              FINAL CALL TO ACTION
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              <span className="text-[#F9FAFA]">Ready to Outrank Your Competitors and </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Own Your Market Today Completely
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Every single day, your ideal customers are searching online — and someone is winning that business. Let's make sure it's you.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1CA186] hover:bg-[#16856f] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-[0_8px_20px_-6px_rgba(28,161,134,0.5)] transition-all hover:-translate-y-1 cursor-pointer"
>
  <span>Claim Your Free Strategy Session</span>
  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
</button>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="/Ready-To-Outrank.jpg" 
                alt="Growth Strategy Meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1C3636]/40" />
            </div>
          </div>

        </motion.div>
      </section>

<Popup
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>
    </div>
  );
}