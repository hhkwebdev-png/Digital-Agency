'use client';

import React, { useState } from 'react';
import Popup from "@/components/Popup";
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Smartphone, ShieldCheck, TrendingUp, Search, Layers, Server, Database } from "lucide-react";


export default function WebDevelopmentServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden min-h-screen text-[#1C3636] selection:bg-[#1C3636] selection:text-emerald-300">
      
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 max-w-[1280px] mx-auto relative overflow-hidden bg-white"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1C3636]/[0.03] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-xl bg-slate-100 text-[#1C3636] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              Hero Section
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              <span className="text-[#1C3636]">
                Websites
              </span>
              {" "}
              <span className="text-[#1CA186]">
                Engineered
              </span>
              {" "}
              <span className="text-[#0F766E]">
                for
              </span>
              {" "}
              <span className="text-[#1C3636]">
                Growth
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              We design and build high-performance websites that command attention, build instant trust, and turn visitors into customers. Every project is engineered with one goal in mind: measurable business growth.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-xl shadow-sm">
              <p className="text-sm font-medium text-slate-700 leading-relaxed">
                Part of our full-service approach to helping businesses grow online — from design and development to ongoing digital strategy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
             <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1C3636] text-white px-5 py-3 rounded-xl font-bold shadow-xl shadow-[#1C3636]/15 hover:bg-[#142929] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
>
  Start Your Project
  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-slate-50 border-2 border-slate-200 text-[#1C3636] px-5 py-3 rounded-xl font-bold hover:border-[#1C3636] hover:bg-white transition-all duration-300 cursor-pointer"
>
  Get a Free Consultation
</button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
              <Image 
                src="/Website-Engineered.jpg" 
                alt="Web development analytics and performance dashboard" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/90 via-[#1C3636]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs font-mono tracking-widest text-emerald-300 uppercase font-bold">Production Ready</p>
                <p className="text-lg font-bold">Optimized Core Web Vitals</p>
              </div>

              {/* Floating Stat Badge: Top Left */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg space-y-0.5">
                <div className="text-base font-black text-[#1C3636]">150+</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Websites Launched</div>
              </div>

              {/* Floating Stat Badge: Top Right */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg space-y-0.5 text-right">
                <div className="text-base font-black text-[#1C3636]">98/100</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Avg Google Score</div>
              </div>

              {/* Floating Stat Badge: Bottom Right */}
              <div className="absolute bottom-20 right-4 bg-white/90 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-2xl shadow-lg space-y-0.5 text-right">
                <div className="text-base font-black text-[#1C3636]">3.2x</div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">Avg Lead Increase</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================================================
        2. PERFORMANCE HIGHLIGHTS
        ======================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-white relative"
      >
        <div className="max-w-[1280px] mx-auto space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 pb-4">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-white/10 text-emerald-300 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              Performance Highlights
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              <span className="text-[#F9FAFA]">Built for Performance. </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Engineered for Growth.
              </span>
            </h2>
            <p className="text-emerald-100/70 text-sm md:text-base font-normal leading-relaxed">
              Every website we build is held to the same standard: it has to perform, not just look good. Speed, security, responsiveness, and conversion aren't afterthoughts we bolt on at the end — they're built into the foundation of every project from day one. The result is a website that works as hard as you do, on every device, for every visitor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and seamless performance" },
              { icon: Smartphone, title: "Fully Responsive", desc: "Flawless across every device and screen size" },
              { icon: ShieldCheck, title: "Secure by Design", desc: "Built on enterprise-grade security standards" },
              { icon: TrendingUp, title: "Conversion-Driven", desc: "Designed to turn visitors into customers" },
              { icon: Search, title: "SEO-Optimized", desc: "Built to rank, not just to look good" },
              { icon: Layers, title: "Scalable Architecture", desc: "Ready to grow alongside your business" }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="relative pt-[2.5em] pb-[2em] group">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative bg-[#244343] p-5 pt-8 rounded-[15px] border border-emerald-950/40 shadow-xl overflow-hidden transition-all duration-400 ease-in-out h-[7.5em] hover:h-[12em] hover:p-5 hover:-translate-y-[1.25em] flex flex-col items-start z-10"
                  >
                    <div className="space-y-2 w-full transition-all duration-400 ease-in-out">
                      <h3 className="text-lg font-bold text-white tracking-tight transition-all duration-400 ease-in-out group-hover:translate-y-[2.2em] group-hover:translate-x-[2.3em]">{item.title}</h3>
                      <p className="text-xs text-emerald-100/80 leading-relaxed font-normal transition-all duration-400 ease-in-out group-hover:translate-y-[4.2em] group-hover:translate-x-[3.5em]">{item.desc}</p>
                    </div>
                  </motion.div>
                  <div className="absolute top-[0.5em] left-[1.5em] w-[50px] h-[50px] transition-all duration-400 ease-in-out z-20 pointer-events-none group-hover:rotate-[360deg] group-hover:h-[100px] group-hover:w-[100px] group-hover:left-[3em] group-hover:-top-[3.5em] flex items-center justify-center bg-[#1C3636] group-hover:bg-emerald-500 backdrop-blur-sm rounded-2xl border border-emerald-500/30 group-hover:border-emerald-400 shadow-lg">
                    <IconComponent className="w-6 h-6 group-hover:w-8 group-hover:h-8 text-emerald-300 group-hover:text-black transition-all duration-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          3. SERVICE OVERVIEW
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-white text-[#1C3636]"
      >
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[16/10] group">
              <Image 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" 
                alt="Strategic planning and professional architecture workflow" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono tracking-widest text-emerald-300 uppercase font-bold">Execution Standard</p>
                  <p className="text-base font-bold">Rigorous Code & UI Synergy</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/25 backdrop-blur-md flex items-center justify-center relative">
                  <div className="relative w-5 h-5 inline-block">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-xl bg-[#1C3636]/10 text-[#1C3636] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              Service Overview
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
              <span className="text-[#1C3636]">
                More Than a Website —
              </span>
              {" "}
              <span className="text-[#1CA186]">
                A Growth Engine
              </span>
              {" "}
              <span className="text-[#0F766E]">
                for Your
              </span>
              {" "}
              <span className="text-[#1C3636]">
                Business
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Your website is often the first conversation you have with a potential customer — make it count. We build modern, high-converting websites that establish instant credibility, engage your audience, and turn casual visitors into real business opportunities. This isn't just web design. It's a strategic asset built to perform.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              We don't measure success by how a website looks in a portfolio — we measure it by what it does for your business after launch: more leads, more sales, and a stronger brand presence in your market. Every design decision, every line of code, and every piece of content is built with that outcome in mind, not just visual appeal.
            </p>
            <div className="pt-2">
             <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1C3636] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-[#142929] transition-all cursor-pointer"
>
  See How We Can Grow Your Business
  <div className="relative w-4 h-4 inline-block">
    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
  </div>
</button>
            </div>
          </motion.div>
        </div>
      </motion.section>

{/* =========================================================================
         4. WHAT WE DELIVER
         ======================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-white relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="max-w-[1280px] mx-auto space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-xl bg-white/10 text-emerald-300 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                What We Deliver
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                <span className="text-[#F9FAFA]">End-to-End </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Web Development Solutions
                </span>
              </h2>
            </div>
            <p className="text-emerald-100/70 text-sm font-mono max-w-sm">No two businesses need the same thing from a website — tailored options built with quality and performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Business Websites", desc: "Professional web presence designed to establish authority and drive local or regional engagement." },
              { title: "Corporate Websites", desc: "Secure, scalable environments built to manage complex internal and external operations seamlessly." },
              { title: "High-Converting Landing Pages", desc: "Laser-focused user journeys built specifically to capture high-intent traffic and leads." },
              { title: "Portfolio & Personal Brand Websites", desc: "Immersive visual interfaces that communicate absolute market authority and prestige." },
              { title: "E-Commerce Platforms", desc: "Blazing-fast transaction pipelines designed to maximize conversion and cart values." },
              { title: "Custom Web Applications", desc: "Robust multi-tenant architectures engineered for high concurrency and zero downtime." },
              { title: "Website Redesign & Modernization", desc: "Seamless code refactoring to transition outdated systems into high-speed modern stacks." },
              { title: "CMS Integration", desc: "Flexible, user-friendly content management systems empowering effortless team updates." },
              { title: "API & Third-Party Integrations", desc: "Seamless connectivity linking your website with external tools, CRMs, and payment gateways." },
              { title: "Ongoing Maintenance & Technical Support", desc: "Continuous security monitoring, updates, and optimization to ensure absolute uptime." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 2) * 0.1 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#244343] p-5 rounded-xl border border-emerald-500/20 shadow-md hover:border-emerald-400 hover:bg-[#284a4a] transition-all duration-300 flex items-start gap-4 overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center font-mono font-bold text-emerald-300 text-xs shrink-0 group-hover:bg-emerald-400 group-hover:text-[#1C3636] transition-colors">
                  0{idx + 1}
                </div>
                <div className="slide-content space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                    <div className="relative w-5 h-5 flex items-center justify-center">
                      <Image 
                        src="https://api.iconify.design/lucide:check-circle-2.svg?color=%2334D399" 
                        alt="Check Circle" 
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-emerald-100/75 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

     {/* =========================================================================
         5. WHY YOUR BUSINESS NEEDS A PROFESSIONAL WEBSITE
         ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-white text-[#1C3636]"
      >
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-slate-100 text-[#1C3636] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              Why Your Business Needs a Professional Website
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              <span className="text-[#1C3636]">
                Why Your
              </span>
              {" "}
              <span className="text-[#1CA186]">
                Business Needs
              </span>
              {" "}
              <span className="text-[#0F766E]">
                a Professional
              </span>
              {" "}
              <span className="text-[#1C3636]">
                Website
              </span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              In a market where most first impressions happen online before a single conversation takes place, your website is often doing more selling than your sales team. A weak or outdated site quietly costs you leads, credibility, and revenue every single day — while a well-built one works around the clock to build trust, qualify prospects, and move your business forward. Here's what a professional website actually does for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 group">
            {[
              { title: "First Impressions That Convert", desc: "Build instant trust and credibility from the very first click." },
              { title: "Higher-Quality Leads", desc: "Turn casual visitors into qualified, ready-to-buy prospects." },
              { title: "Stronger Brand Authority", desc: "Position your business as the clear leader in your market." },
              { title: "Frictionless Customer Experience", desc: "Deliver smooth, intuitive interactions across every device." },
              { title: "Greater Online Visibility", desc: "Power your SEO and digital marketing with a strong technical foundation." },
              { title: "Built for Long-Term Growth", desc: "Scale effortlessly as your business expands." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 space-y-3 duration-[400ms] transition-all hover:scale-[1.1] hover:!blur-none hover:z-20 group-hover:not-hover:blur-[10px] group-hover:not-hover:scale-[0.9]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1C3636] text-white flex items-center justify-center font-mono font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1C3636] tracking-tight">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center pt-2">
            <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1C3636] text-white px-5 py-3 rounded-xl font-bold shadow-lg hover:bg-[#142929] transition-all cursor-pointer"
>
  Get Your Free Website Assessment
</button>
          </div>
        </div>
      </motion.section>

  {/* =========================================================================
         6. OUR DEVELOPMENT PROCESS
         ======================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-white"
      >
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4"
            >
              <span className="inline-block px-4 py-1.5 rounded-xl bg-white/10 text-emerald-300 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                Our Development Process
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                <span className="text-[#F9FAFA]">A Proven Path </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  From Idea to Impact
                </span>
              </h2>
              <p className="text-emerald-100/70 text-base font-mono">Great websites aren't built by accident — they follow a process.</p>
              <p className="text-sm text-emerald-100/80 leading-relaxed">
                From the first strategy call to the moment your site goes live, every step is deliberate, transparent, and focused on one outcome: a website that performs. Here's exactly how we take your project from idea to impact.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-emerald-950/40 shadow-2xl">
                <Image 
                  src="/Proven-Path.jpg" 
                  alt="Team collaboration and strategy planning" 
                  fill 
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Discovery & Strategy", desc: "We dive deep into your business goals, audience, and competitive landscape." },
              { step: "02", title: "Planning & Architecture", desc: "We map a clear, strategic roadmap and site structure built to perform." },
              { step: "03", title: "Design & Development", desc: "We craft modern, responsive, and scalable solutions tailored to your brand." },
              { step: "04", title: "Testing & Optimization", desc: "We rigorously test for speed, security, and flawless functionality." },
              { step: "05", title: "Launch & Growth", desc: "We deploy with confidence and stay by your side to support continued growth." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#244343] p-4.5 rounded-[26px] backdrop-blur-[7px] border border-emerald-950/40 flex flex-col justify-between space-y-4 transition-all duration-300 cursor-pointer shadow-[35px_35px_68px_0px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_0px_rgba(0,0,0,0.4),inset_0px_11px_28px_0px_rgba(255,255,255,0.05)] hover:shadow-[35px_35px_68px_0px_rgba(52,211,153,0.25)] active:scale-[0.95] active:border-emerald-400"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-300 bg-white/10 px-2.5 py-1 rounded-xl">
                    {item.step}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                  <p className="text-xs text-emerald-100/75 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Have a project in mind?</h3>
              <p className="text-sm text-emerald-100/80">Let's map out your website's roadmap together — no pressure, just clarity on what it takes to bring your vision to life.</p>
            </div>
            <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-white text-[#1C3636] px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-slate-100 transition-all shrink-0 cursor-pointer"
>
  Start With a Free Strategy Call
</button>
          </div>
        </div>
      </motion.section>

{/* =========================================================================
         7. TECHNOLOGIES WE USE
         ======================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-10 pb-10 px-6 sm:px-6 lg:px-8 bg-slate-50 text-[#1C3636] border-y border-slate-200/60 overflow-hidden"
      >
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-white text-[#1C3636] font-mono text-xs font-bold tracking-wider uppercase shadow-sm border border-slate-200/80">
              Technologies We Use
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              <span className="text-[#1C3636]">
                Modern Tools.
              </span>
              {" "}
              <span className="text-[#1CA186]">
                Industry-Leading
              </span>
              {" "}
              <span className="text-[#0F766E]">
                Standards.
              </span>
            </h2>
            <p className="text-slate-600 text-sm">
              Battle-tested, high-performance technologies chosen to deliver optimal speed, security, and enterprise scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                layer: "Layer 01",
                title: "Frontend",
                tech: "React · Next.js · HTML5 · CSS3 · JavaScript",
                features: ["High Performance", "SSR Ready", "Optimized Assets", "Smooth Animations"]
              },
              {
                icon: Server,
                layer: "Layer 02",
                title: "Backend",
                tech: "Node.js · Express.js",
                features: ["RESTful APIs", "Secure Routing", "Async Flow", "High Concurrency"]
              },
              {
                icon: Database,
                layer: "Layer 03",
                title: "Database",
                tech: "MongoDB",
                features: ["Flexible Schema", "Rapid Querying", "Scalable Storage", "Data Safety"]
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 p-7 rounded-2xl shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-500 relative group cursor-pointer overflow-hidden flex flex-col justify-between min-h-[210px]"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />

                  {/* Main Content (Slides left on hover) */}
                  <div className="space-y-5 transition-transform duration-500 ease-out group-hover:-translate-x-[115%]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-emerald-50/80 border border-emerald-500/20 shadow-sm flex items-center justify-center text-emerald-700 transition-transform duration-500 group-hover:scale-110">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600">{item.layer}</span>
                          <h3 className="font-extrabold text-lg text-[#1C3636]">{item.title}</h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-mono font-bold text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 shadow-sm">
                      {item.tech}
                    </p>
                  </div>

                  {/* Hover Revealed Checklist (Slides in from right) */}
                  <div className="absolute inset-0 p-7 bg-white/95 backdrop-blur-sm translate-x-[105%] group-hover:translate-x-0 transition-all duration-500 ease-out flex flex-col justify-center space-y-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600">{item.layer} Capabilities</span>
                      <h4 className="font-extrabold text-base text-[#1C3636]">{item.title} Stack Features</h4>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {item.features.map((feat, fIdx) => (
                        <li 
                          key={fIdx} 
                          className="inline-flex gap-2.5 items-center text-xs font-semibold text-slate-700 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{ transitionDelay: `${(fIdx + 1) * 80}ms` }}
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <svg strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" className="stroke-emerald-700" stroke="currentColor" fill="none" viewBox="0 0 24 24" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </motion.section>

     {/* =========================================================================
         8. WHY CHOOSE OUR AGENCY
         ======================================================================== */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-[#1C3636] text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto space-y-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-xl bg-white/10 text-emerald-300 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                Why Choose Our Agency
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                <span className="text-[#F9FAFA]">Not Every Agency Treats Your Website </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  As a Serious Investment
                </span>
              </h2>
              <p className="text-emerald-100/80 text-base leading-relaxed">
                Many just deliver a template with your logo on it. We take a different approach: every project is a partnership built on strategy, craftsmanship, and long-term accountability, not a one-off transaction.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30 aspect-[16/10] group">
                <Image 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" 
                  alt="Agency team collaboration and strategy meeting" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono tracking-widest text-emerald-300 uppercase font-bold">Dedicated Partnerships</p>
                  <p className="text-sm font-bold">Built for Long-Term Scale</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { 
                icon: Layers, 
                title: "Custom Solutions, Built Around You", 
                desc: "Every website is purpose-built around your unique business goals — never a one-size-fits-all template." 
              },
              { 
                icon: Server, 
                title: "Modern, Future-Ready Technology", 
                desc: "We build exclusively with scalable, industry-leading frameworks designed to stand the test of time." 
              },
              { 
                icon: Zap, 
                title: "Relentlessly Performance-Driven", 
                desc: "Every decision is optimized for speed, user experience, and conversions — because a beautiful site that doesn't perform isn't enough." 
              },
              { 
                icon: ShieldCheck, 
                title: "A True Long-Term Partnership", 
                desc: "We don't disappear after launch. We provide continuous support and improvement to keep you ahead." 
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-[#244343] to-[#1a3333] p-5 rounded-xl border border-emerald-500/20 shadow-xl flex flex-col justify-center items-center text-center hover:border-emerald-400 transition-all relative group cursor-pointer overflow-hidden min-h-[220px]"
                >
                  {/* Centered initial display content (Icon & Heading centered) */}
                  <div className="flex flex-col items-center justify-center space-y-3 transition-transform duration-500 ease-out group-hover:-translate-y-16">
                    <div className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Bottom drawer expandable hover effect with single icon moving to the top center */}
                  <div className="absolute bottom-0 left-0 w-full bg-[#142929]/95 backdrop-blur-md p-4 h-[2.8rem] group-hover:h-[8.5rem] transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center text-center border-t border-emerald-500/20">
                    <h4 className="font-bold text-teal-200 group-hover:text-white text-sm mb-1.5 shrink-0 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs text-emerald-100/75 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          9. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-6 pb-6 px-6 sm:px-6 lg:px-8 bg-white text-[#1C3636]"
      >
        <div className="max-w-[1280px] mx-auto space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Heading and Paragraph */}
            <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-8">
              <span className="inline-block px-4 py-1.5 rounded-xl bg-slate-100 text-[#1C3636] font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                <span className="text-[#1C3636]">
                  Frequently Asked
                </span>
                {" "}
                <span className="text-[#1CA186]">
                  Questions
                </span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Still have questions before getting started? Here are the answers to what businesses ask us most — if you don't see yours below, we're happy to walk through it on a free consultation call.
              </p>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-4 shadow-sm hidden lg:block">
                <h3 className="font-bold text-base text-[#1C3636]">Ready to see what a professional website can do for your business?</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Let's talk and explore custom solutions built specifically for your strategic growth targets.</p>
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1C3636] text-white px-5 py-3 rounded-xl font-bold text-xs shadow-md hover:bg-[#142929] transition-all cursor-pointer"
>
  Let's Talk
  <div className="relative w-3.5 h-3.5 inline-block">
    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
  </div>
</button>
              </div>
            </div>

            {/* Right Column: Questions Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {[
                { q: "How long does it take to build a professional website?", a: "Timelines depend on scope and complexity, but most projects are completed within a few weeks. You'll receive a clear, detailed timeline before development begins — no guesswork, no surprises." },
                { q: "Will my website be fully responsive across all devices?", a: "Yes. Every website we build is tested and engineered to deliver a seamless experience across desktops, tablets, and mobile devices, not just adjusted to \"look okay\" on smaller screens." },
                { q: "Can you redesign and improve my existing website?", a: "Absolutely. We specialize in transforming outdated websites into modern, high-performing assets — improving design, speed, functionality, and user experience, often without losing the SEO equity you've already built." },
                { q: "Do you offer maintenance and long-term support?", a: "Yes. We provide ongoing maintenance, updates, security monitoring, and technical support, so your website keeps performing at its best long after launch — not just on day one." },
                { q: "Is SEO included during development?", a: "Yes. Every website is built on SEO best practices from day one, giving you a strong technical foundation for visibility and sustainable, long-term growth, rather than SEO being an afterthought." },
                { q: "Can the website scale as my business grows?", a: "Absolutely. Our websites are architected to support increased traffic, new features, and evolving business needs, so you won't need a costly rebuild a year or two down the line." },
                { q: "Why invest in a custom website?", a: "A custom-built website reflects your brand authentically and gives you far greater flexibility, performance, and long-term value than any generic template ever could." },
                { q: "What makes your services different?", a: "We combine strategic thinking, strong design, and modern engineering to deliver websites that don't just look exceptional — they drive real, measurable business results." }
              ].map((faq, idx) => (
                <div key={idx} className="border border-slate-200/80 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:border-[#1C3636]">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left py-3.5 px-4 sm:px-5 flex justify-between items-center gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#1C3636]">{faq.q}</span>
                    <div className={`w-6 h-6 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${openFaq === idx ? 'bg-[#1C3636] text-white rotate-180' : 'bg-slate-100 text-slate-700'}`}>
                      <div className={`relative w-3.5 h-3.5 inline-block transition-transform duration-300 ${openFaq === idx ? 'filter invert' : ''}`}>
                        <Image 
                          src="https://api.iconify.design/lucide:chevron-down.svg" 
                          alt="Chevron Down" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </button>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>
      </motion.section>

      {/* =========================================================================
          10. FINAL CALL TO ACTION
          ========================================================================= */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full bg-[#1C3636] text-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-6">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-white/10 text-emerald-300 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              Final Call to Action
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              <span className="text-[#F9FAFA]">Your Website Is the Foundation of Your Growth — </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Let's Build It Right
              </span>
            </h2>
            <p className="text-base md:text-lg text-emerald-100/80 leading-relaxed font-normal">
              Whether you're launching a new business, refreshing your brand, or building a custom digital solution from the ground up, our team is ready to help you create a website engineered to support your goals and accelerate your growth. No templates, no guesswork — just a strategic, high-performing website built specifically for your business.
            </p>
            <p className="text-xs text-emerald-100/70 font-mono">
              Getting started costs you nothing but a conversation — and it could be the one that changes how your business shows up online.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-white text-[#1C3636] px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:bg-slate-100 transition-all flex items-center gap-2 cursor-pointer"
>
  Schedule a Free Consultation
  <div className="relative w-4 h-4 inline-block">
    <ArrowRight className="w-4 h-4 text-[#1C3636] group-hover:translate-x-1 transition-transform" />
  </div>
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-transparent border-2 border-white/20 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-white/5 hover:border-white transition-all cursor-pointer"
>
  Discuss Your Project
</button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#244343] p-6 sm:p-8 rounded-xl border border-emerald-950/60 space-y-5 shadow-2xl">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">Key Value Pillars</h3>
            <div className="space-y-3">
              {[
                "Custom-Built Solutions", 
                "Modern & Responsive Design", 
                "SEO-Friendly Development", 
                "Ongoing Support & Maintenance",
                "Performance-Focused Approach",
                "Growth-Oriented Strategy"
              ].map((bullet, index) => (
                <div key={index} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-emerald-100/90">
                  <div className="w-4 h-4 rounded-xl bg-emerald-400/20 flex items-center justify-center shrink-0">
                    <div className="relative w-3 h-3 inline-block">
                      <Image 
                        src="https://api.iconify.design/lucide:check.svg?color=%236EE7B7" 
                        alt="Check" 
                        fill 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-emerald-100/60 italic pt-2 border-t border-white/10">
              Initial consultations involve direct dialogue with senior technical leadership.
            </p>
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