"use client";

import React, { useState } from "react";
import Popup from "@/components/Popup";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Zap,
  ArrowRight,
  ShoppingBag,
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  MessageCircle,
  Cpu,
  Layers,
  LineChart,
  Sparkles,
  Calendar,
  Target,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  Check,
  HelpCircle,
  MessageSquare,
  Shield,
  Clock,
  Activity,
  PhoneCall
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function AIChatbotsPage() {
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
      finale: { initial: { opacity: 0, y: 44, scale: 0.97 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 0.92, ease: [0.16, 1, 0.3, 1] } }
    };
    return { ...presets[style], viewport: { once: true, amount: 0.12 } };
  };
  const cardMotion = (index = 0) => reduceMotion ? {} : ({
    initial: { opacity: 0, y: 22, scale: 0.985 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.16 },
    transition: { duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
    whileHover: { y: -8, scale: 1.018, boxShadow: "0 22px 42px rgba(7, 37, 35, 0.28)" },
    whileTap: { scale: 0.985 }
  });

  return (
    <div className="font-sans antialiased min-h-screen bg-white text-[#1C3636]">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Bg Name: bg-white)                       */}
      {/* ========================================================= */}
      <motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden" {...sectionMotion("rise")}>
        <div className="absolute inset-0 bg-[radial-gradient(#1CA186_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto py-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-[#1CA186]/5 border border-[#1CA186]/20 px-3.5 py-1.5 rounded-xl">
                <span className="text-xs font-semibold text-[#1C3636] tracking-wide uppercase">
                  Enterprise AI Chatbot Infrastructure
                </span>
              </motion.div>

              <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 20, filter: "blur(7px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }} className="text-3xl sm:text-5xl font-extrabold text-[#1C3636] tracking-tight leading-[1.12]">
                Smarter AI Chatbots. <br />
                <span className="text-[#1CA186]">
                  Better Customer Experiences.
                </span>
              </motion.h1>

              <motion.p initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.62, delay: 0.17, ease: [0.22, 1, 0.36, 1] }} className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
                Give every customer instant answers, 24/7. We build custom AI chatbots that think, talk, and act like part of your team — trained on your business and connected to your tools.
              </motion.p>

              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.25, ease: [0.22, 1, 0.36, 1] }} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow cursor-pointer"
>
  <span>Build Your AI Chatbot</span>
  <ArrowRight className="w-4 h-4" />
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-white border border-slate-200 text-[#1C3636] hover:bg-slate-50 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 text-center shadow-xs cursor-pointer"
>
  Book a Free Strategy Call
</button>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative flex flex-col items-center">
              <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 1.25 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.88, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} whileHover={reduceMotion ? {} : { scale: 1.025, rotate: -0.5 }} className="relative w-full max-w-md lg:max-w-none rounded-xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] bg-slate-50">
                <Image
                  src="/AI-Chatbots.jpg"
                  alt="AI Chatbot Services"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 shadow-sm flex items-center gap-1.5 z-10">
                  <Check className="w-3.5 h-3.5 text-[#1CA186] shrink-0" />
                  <span>Human-Like Conversations</span>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 shadow-sm flex items-center gap-1.5 z-10">
                  <Check className="w-3.5 h-3.5 text-[#1CA186] shrink-0" />
                  <span>24/7 Customer Support</span>
                </div>

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 shadow-sm flex items-center gap-1.5 z-10">
                  <Check className="w-3.5 h-3.5 text-[#1CA186] shrink-0" />
                  <span>Custom Business Knowledge</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs border border-slate-200/80 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 shadow-sm flex items-center gap-1.5 z-10">
                  <Check className="w-3.5 h-3.5 text-[#1CA186] shrink-0" />
                  <span>Seamless Integrations</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </motion.section>

     {/* ========================================================= */}
{/* 2. PERFORMANCE CARDS (Bg Name: bg-[#1C3636])             */}
{/* ========================================================= */}
<motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white relative" {...sectionMotion("cinematic")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="text-center max-w-3xl mx-auto space-y-2">
      <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
        <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
          Beyond Basic Chatbots
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        <span className="text-[#F9FAFA]">Real Intelligence. </span>
        <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
          Not Just Scripts.
        </span>
      </h2>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
        Scripted chatbots frustrate customers — one wrong question and they're stuck. Ours aren't.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          icon: MessageCircle,
          title: "Understand",
          desc: "Reads intent, not just keywords — for natural, on-point responses.",
          link: "/contact",
        },
        {
          icon: Zap,
          title: "Assist",
          desc: "Instant support, any time, for any customer.",
          link: "/contact",
        },
        {
          icon: Target,
          title: "Connect",
          desc: "Plugs into your website, CRM, and business systems.",
          link: "/contact",
        },
      ].map((card, idx) => (
        <motion.div {...cardMotion(idx)}
          key={idx}
          className="bg-[#122424] border border-slate-800 p-4 rounded-xl relative overflow-hidden transition-all duration-500 hover:border-[#1CA186] hover:shadow-[0_10px_30px_rgba(28,161,134,0.15)] hover:-translate-y-1.5 flex flex-col justify-between space-y-4 group"
        >
          {/* Subtle top accent line that fills on hover */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#1CA186] transition-all duration-300"></div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#1CA186]/10 flex items-center justify-center text-[#1CA186] group-hover:bg-[#1CA186] group-hover:text-white transition-all duration-300 shadow-sm">
                <card.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500 font-bold group-hover:text-[#1CA186] transition-colors">
                0{idx + 1}
              </span>
            </div>

            <div className="space-y-1.5 text-left">
              <h3 className="text-lg font-bold text-white group-hover:text-[#1CA186] transition-colors">{card.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{card.desc}</p>
            </div>
          </div>
   
          <div >
            <Link
              href={card.link}
              className="inline-flex items-center text-xs font-semibold text-[#1CA186] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            >
              <span>Learn more</span>
              <svg className="w-3.5 h-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</motion.section>

      {/* ========================================================= */}
      {/* 3. SERVICE OVERVIEW (Bg Name: bg-white)                   */}
      {/* ========================================================= */}
      <motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8" {...sectionMotion("editorial")}>
        <div className="max-w-[1280px] mx-auto py-6 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
                AI Chatbot Solutions Built For Your Business
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#1C3636]">
                Every
              </span>

              {" "}

              <span className="text-[#1CA186]">
                business
              </span>

              {" "}

              <span className="text-[#0F766E]">
                is different.
              </span>

              {" "}

              <span className="text-[#1C3636]">
                Your chatbot should be too.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Built for support, sales, or internal teams, each chatbot is shaped around your specific goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Customer Support Chatbots",
                desc: "Instant Answers, Zero Wait. Give customers 24/7 access to fast, accurate support.",
                capabilities: ["Answer customer questions", "Handle common requests", "Share product or service info", "Guide users to solutions"]
              },
              {
                title: "Lead Generation Chatbots",
                desc: "Turn Visitors Into Customers. Engage every visitor, understand what they need, and capture the opportunity — automatically.",
                capabilities: ["Qualify leads", "Collect customer info", "Schedule appointments", "Kick off sales conversations"]
              },
              {
                title: "E-commerce Chatbots",
                desc: "Shopping, Personalized. Help shoppers find products, get recommendations, and get support at every step of the journey.",
                capabilities: ["Product recommendations", "Shopping assistance", "Order support", "Customer Q&A"]
              },
              {
                title: "Internal AI Assistants",
                desc: "Empower Your Team. Give employees instant access to company knowledge, so they spend less time searching and more time doing.",
                capabilities: ["Search internal knowledge", "Assist with documents", "Answer team questions", "Boost productivity"]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-xl flex flex-col justify-between space-y-3 shadow-xs hover:border-[#1CA186] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left group">
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1CA186]/10 text-[#1CA186] font-mono font-bold text-xs flex items-center justify-center group-hover:bg-[#1CA186] group-hover:text-white transition-colors duration-200">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-1.5 pt-2 border-t border-slate-200/60">
                    {item.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="text-xs text-slate-500 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1CA186] shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </motion.section>

     {/* ========================================================= */}
{/* 4. WHAT WE DELIVER (Bg Name: bg-[#1C3636])               */}
{/* ========================================================= */}
<motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white" {...sectionMotion("glide")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="text-left max-w-2xl space-y-2">
        <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
            How We Build Your AI Chatbot
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-[#F9FAFA]">From Idea to </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Intelligent Conversation
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          Every successful chatbot starts with the right process. We follow a structured methodology to ensure every solution is built to perform.
        </p>
      </div>
      <div>
       <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 items-center justify-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
>
  <span>Request Custom Bot</span>
  <ArrowRight className="w-4 h-4" />
</button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { step: "01", title: "Strategy", desc: "We map your goals, audience, and customer challenges to design the right solution." },
        { step: "02", title: "Design", desc: "We craft conversation flows that feel natural and match your brand voice." },
        { step: "03", title: "Development", desc: "We build and connect your chatbot to your website, systems, and data." },
        { step: "04", title: "Optimize", desc: "We track performance and keep improving the experience over time." },
      ].map((st, idx) => (
        <div 
          key={idx}
          className="group relative overflow-hidden h-56 w-full bg-[#1CA186]/30 rounded-xl border border-slate-800"
        >
          <div
            className="absolute w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] bg-[#122424] z-10 top-3 left-3 opacity-50 rounded-2xl blur duration-300 group-hover:blur-none [transform:rotate3d(1_,-1,_1,_30deg)] group-hover:[transform:rotate3d(1_,-1,_1,_0deg)] transition-all"
          ></div>
          <div
            className="absolute w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] z-10 top-3 left-3 p-3.5 rounded-2xl flex flex-col justify-center items-start [transform:rotate3d(1_,-1,_1,_30deg)] group-hover:[transform:rotate3d(1_,-1,_1,_0deg)] transition-all text-left"
          >
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono font-bold text-[#1CA186] bg-[#1CA186]/15 px-2 py-0.5 rounded-lg inline-flex items-center justify-center">
                {st.step}
              </div>
              <h3 className="text-sm font-extrabold text-white">{st.title}</h3>
              <p className="text-[11px] sm:text-xs text-slate-300 font-bold leading-relaxed line-clamp-3">
                {st.desc}
              </p>
            </div>
          </div>

          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 10 10"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            className="fill-[#1CA186]/40 w-64 h-64 absolute -bottom-20 -left-32 pointer-events-none"
          >
            <path
              d="M0,5A5,5,0,1,0,5,0,5,5,0,0,0,0,5ZM8.12,5A3.12,3.12,0,1,1,5,1.88,3.12,3.12,0,0,1,8.12,5Z"
            ></path>
          </svg>
        </div>
      ))}
    </div>

  </div>
</motion.section>

      {/* ========================================================= */}
{/* 5. WHY AI CHATBOTS MATTER (Bg Name: bg-white)             */}
{/* ========================================================= */}
<motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8" {...sectionMotion("spring")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="text-center max-w-3xl mx-auto space-y-2">
      <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
        <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
          Powerful Features
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        <span className="text-[#1C3636]">Features</span>
        {" "}
        <span className="text-[#1CA186]">That Set</span>
        {" "}
        <span className="text-[#0F766E]">Us Apart</span>
      </h2>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
        In a world where speed and convenience define customer loyalty, AI chatbots bridge the gap between customer expectations and business capacity.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Natural Conversations",
          desc: "Interactions that feel human, not robotic.",
        },
        {
          title: "Business-Specific Knowledge",
          desc: "Trained on your products, services, and documents.",
        },
        {
          title: "Multi-Platform Integration",
          desc: "Works across your website, apps, and business tools.",
        },
        {
          title: "Smart Automation",
          desc: "Cuts repetitive work so your team can focus on what matters.",
        },
        {
          title: "Conversation Insights",
          desc: "Real data on what your customers need — and how to serve them better.",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="flip-card w-full h-[200px]"
          style={{ perspective: "1000px" }}
        >
          <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-600 [transform-style:preserve-3d] hover:[transform:rotate(180deg)_rotateX(180deg)]">
            
            {/* Front Side */}
            <div className="flip-card-front absolute inset-0 w-full h-full bg-slate-50 border border-slate-100 p-5 rounded-[1rem] shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] flex flex-col justify-between text-left [backface-visibility:hidden]">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#1CA186]/10 text-[#1CA186] font-mono font-bold text-xs flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1C3636]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>

            {/* Back Side */}
            <div className="flip-card-back absolute inset-0 w-full h-full bg-[#1C3636] border border-[#1C3636] p-5 rounded-[1rem] shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] flex flex-col justify-center text-center [backface-visibility:hidden] [transform:rotate(180deg)_rotateX(180deg)] text-white space-y-2">
              <h3 className="text-lg font-bold text-[#1CA186]">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</motion.section>

   {/* ========================================================= */}
{/* 6. OUR DEVELOPMENT PROCESS (Bg Name: bg-[#1C3636])       */}
{/* ========================================================= */}
<motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white" {...sectionMotion("spotlight")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-8">
    
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
      <div className="text-left max-w-2xl space-y-2">
        <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
            Modern Industries
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-[#F9FAFA]">AI Chatbots For </span>
          <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
            Modern Industries
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          No matter your industry, our AI chatbots are customized to meet the unique terminology and customer expectations of your field.
        </p>
      </div>
      <div>
       <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 items-center justify-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
>
  <span>Explore Industry Solutions</span>
  <ArrowRight className="w-4 h-4" />
</button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "Healthcare", desc: "Faster patient communication and appointment support.", link: "#strategy-call" },
        { title: "E-commerce", desc: "Personalized shopping and stronger customer support.", link: "#strategy-call" },
        { title: "Real Estate", desc: "Automated inquiries and better lead engagement.", link: "#strategy-call" },
        { title: "SaaS", desc: "Instant product help and user support.", link: "#strategy-call" },
        { title: "Education", desc: "Quick answers, always available to students.", link: "#strategy-call" },
        { title: "Professional Services", desc: "Streamlined communication and client experience.", link: "#strategy-call" },
      ].map((st, idx) => (
        <div
          key={idx}
          className="relative bg-[#122424] border border-slate-800 p-5 rounded-xl flex flex-col justify-center items-center text-center overflow-hidden shadow-md transition-all duration-300 group h-[170px]"
        >
          {/* Card Content that blurs on hover */}
          <div className="space-y-2 z-10 transition-all duration-300 group-hover:blur-sm group-hover:opacity-40">
            <div className="text-xs font-mono font-bold text-[#1CA186] bg-[#1CA186]/15 px-2.5 py-0.5 rounded-lg inline-flex items-center justify-center">
              0{idx + 1}
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">{st.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
            </div>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,161,134,0.25)_0%,transparent_100%)] scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          </div>

          {/* Button linked to existing anchor section/page without creating new pages */}
          <Link
            href={st.link}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold px-4 py-2 text-xs bg-white text-[#1C3636] rounded-full flex items-center justify-center cursor-pointer z-50 border-none opacity-0 scale-0 origin-top-left shadow-[0_0_10px_10px_rgba(0,0,0,0.15)] transition-all duration-600 cubic-bezier(0.23,1,0.320,1) group-hover:opacity-100 group-hover:scale-100 hover:shadow-[0_0_0_5px_rgba(28,161,134,0.3)] active:scale-95 whitespace-nowrap"
          >
            Explore Solution
          </Link>
        </div>
      ))}
    </div>

  </div>
</motion.section>


      {/* ========================================================= */}
{/* 7. INDUSTRIES WE SERVE (Bg Name: bg-white)                */}
{/* ========================================================= */}
<motion.section className="bg-white pt-6 pb-4 px-6 sm:px-6 lg:px-8" {...sectionMotion("sweep")}>
  <div className="max-w-[1280px] mx-auto py-6 space-y-6">
    
    <div className="text-center max-w-3xl mx-auto space-y-2">
      <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
        <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
          Why Choose Us?
        </span>
      </div>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
        <span className="text-[#1C3636]">Custom-Built</span>
        {" "}
        <span className="text-[#1CA186]">Around</span>
        {" "}
        <span className="text-[#0F766E]">Your Goals</span>
      </h2>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
        No templates. Every chatbot is designed around your business and your customers.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center pt-6">
      {[
        { title: "Custom-Built Around Your Goals", desc: "No templates. Every chatbot is designed around your business and your customers." },
        { title: "Focused On Better Experiences", desc: "Faster, smarter, more engaging — that's the standard we build to." },
        { title: "Built To Scale", desc: "Your chatbot grows as your business does." },
        { title: "Easy Integration", desc: "We connect seamlessly with the tools you already use." },
      ].map((ind, idx) => (
        <div
          key={idx}
          className="relative w-full max-w-[260px] h-[240px] text-[#1C3636] group cursor-pointer"
        >
          {/* Bottom Card */}
          <div className="absolute top-0 left-0 w-full h-[140px] bg-white border border-slate-200 rounded-xl p-4 pt-10 shadow-sm transition-all duration-300 ease-in-out group-hover:mt-[90px] group-hover:ml-4 group-hover:transition-[margin] group-hover:duration-400 group-hover:ease-in-out flex flex-col justify-start">
            <h3 className="text-sm font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors line-clamp-1">{ind.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mt-1 line-clamp-3">{ind.desc}</p>
          </div>

          {/* Top Card */}
          <div className="absolute top-0 left-0 w-full h-[150px] bg-white border border-slate-200 rounded-xl z-10 flex flex-col items-center justify-center p-4 shadow-md transition-all duration-300 ease-in-out group-hover:border-[#1CA186]">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1CA186] border border-slate-200 flex items-center justify-center shadow-sm group-hover:bg-[#1CA186] group-hover:text-white transition-colors duration-300 mb-3">
              <Check className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
            <h3 className="text-sm font-bold text-[#1C3636] text-center mt-1 truncate w-full">{ind.title}</h3>
          </div>
        </div>
      ))}
    </div>

  </div>
</motion.section>

      {/* ========================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (Bg Name: bg-[#1C3636])     */}
      {/* ========================================================= */}
      <motion.section className="bg-[#1C3636] pt-6 pb-6 px-6 sm:px-6 lg:px-8 text-white relative" {...sectionMotion("depth")}>
        <div className="max-w-[1280px] mx-auto py-6 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-block bg-[#122424] px-4 py-1.5 rounded-xl border border-slate-800">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
                FAQ Section
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#F9FAFA]">
                Got
              </span>

              {" "}

              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Questions? We've Got Answers
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Here are clear, straightforward answers to what business owners ask us most before getting started.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#122424] border border-slate-800 p-6 rounded-3xl space-y-4 text-left shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#1CA186] text-white flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-white">Still have questions?</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Can't find the answer you're looking for? Reach out directly to our expert engineering team for a personalized walkthrough.
                  </p>
                </div>
               <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex w-full bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 items-center justify-center gap-2 shadow-sm text-center cursor-pointer"
>
  <span>Talk to an Expert</span>
  <ArrowRight className="w-4 h-4" />
</button>
              </div>

              <div className="bg-[#122424] border border-slate-800 p-5 rounded-3xl space-y-3 text-left shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1CA186] text-white flex items-center justify-center">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Phone Line</h4>
                    <p className="text-xs text-slate-400">Mon-Fri from 9am to 6pm</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-[#1CA186]">
                  <span>Response Time: &lt; 5 mins</span>
                  <Link href="/contact" className="hover:underline flex items-center gap-1">
                    <span>Contact Us</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              {[
                { q: "What is an AI chatbot?", a: "An intelligent assistant that understands conversations and responds helpfully using AI — not fixed scripts." },
                { q: "How is it different from a traditional chatbot?", a: "Traditional chatbots follow rigid scripts. AI chatbots understand context and respond naturally." },
                { q: "Can you train it on my business information?", a: "Yes — using your website content, documents, FAQs, and internal knowledge." },
                { q: "Can it connect with my existing systems?", a: "Yes — including websites, CRMs, databases, and other business platforms." },
                { q: "Is my data secure with an AI chatbot?", a: "Yes — reputable AI chatbot platforms use encryption and access controls to keep your business data and customer conversations protected." },
                { q: "How long does it take to set up?", a: "Most businesses are up and running within a few days, depending on how much content needs to be trained and how many integrations are involved." }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#122424] border border-slate-800 rounded-xl overflow-hidden transition-all duration-200 text-left shadow-xs hover:border-[#1CA186]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#1CA186] transition-colors"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <div className={`w-8 h-8 rounded-xl bg-[#1ca18686] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#1CA186] text-white" : "text-slate-400"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3.5">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </motion.section>

      {/* ========================================================= */}
      {/* 10. FINAL CTA SECTION (Bg Name: bg-white)                 */}
      {/* ========================================================= */}
      <motion.section className="bg-white pt-6 pb-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden" {...sectionMotion("finale")}>
        <div className="absolute inset-0 bg-[radial-gradient(#1CA186_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto py-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl border border-slate-200">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold">
                  Final CTA Section
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-[#1C3636]">Ready to Transform</span>
                {" "}
                <span className="text-[#1CA186]">Customer</span>
                {" "}
                <span className="text-[#0F766E]">Conversations</span>
                {" "}
                <span className="text-[#1C3636]">With AI?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Give customers faster answers, capture more opportunities, and grow your business — with an AI chatbot built around you.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1CA186] hover:bg-[#16856f] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
>
  <span>Start Your AI Chatbot Project</span>
  <ArrowRight className="w-4 h-4" />
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-white border border-slate-200 text-[#1C3636] hover:bg-slate-50 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 text-center shadow-md cursor-pointer"
>
  Talk To Our AI Experts
</button>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex flex-col items-center">
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-slate-100 aspect-[16/9] bg-slate-50">
                <Image
                  src="/AI-Chatbots-Preview.jpg"
                  alt="AI Chatbot Preview"
                  fill
                  className="object-cover"
                />
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
