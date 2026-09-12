"use client";

import Image from "next/image";
import Popup from "@/components/Popup";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function BlogWritingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-[#F9FAFA] text-[#1C3636] font-sans selection:bg-[#DAF1DE] selection:text-[#1C3636] overflow-x-hidden">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (White) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAF1DE]/40 rounded-xl blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              custom={0}
              className="lg:col-span-6 space-y-6"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2.5 bg-[#DAF1DE]/60 px-4 py-2 rounded-xl border border-[#1CA186]/30 shadow-2xs"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-[#1C3636] font-bold">
                  Editorial & Content Architecture
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.06]">
                <span className="text-[#1C3636]">Content That Builds Authority, </span>
                {" "}
                <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">Earns Trust, </span>
                {" "}
                <span className="text-[#1C3636]">And Drives Long-Term Growth.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                The most successful businesses don't just sell — they educate, lead conversations, and become the definitive voice in their industry. We craft strategic, SEO-driven blog content that elevates visibility and fuels sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#1C3636] hover:bg-[#244343] text-white font-semibold text-sm px-7 py-4 rounded-xl transition-all shadow-lg shadow-[#1C3636]/10 flex items-center justify-center gap-2.5 group cursor-pointer w-full"
>
  <span>Book a Free Consultation</span>
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</button>
</motion.div>
<motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
  <button
    type="button"
    onClick={() => setIsPopupOpen(true)}
    className="bg-slate-100 hover:bg-slate-200/80 text-[#1C3636] border border-slate-200 font-semibold text-sm px-7 py-4 rounded-xl transition-all flex items-center justify-center cursor-pointer w-full"
  >
    Grow with Strategic Content
  </button>
                </motion.div>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-100">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#1CA186]">4.8x</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">Average ROI Multiplier</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#1CA186]">Zero</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">AI Fluff or Shortcuts</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#1CA186]">99.4%</h4>
                  <p className="text-xs text-slate-500 font-medium mt-1">First-Page Index Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative flex items-center"
            >
              <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                <div className="absolute -top-6 -left-6 w-80 h-80 bg-[#DAF1DE] rounded-xl filter blur-3xl opacity-60 z-0 animate-pulse"></div>
                <div className="relative z-10 bg-[#1C3636] rounded-xl p-5 shadow-2xl border border-slate-800">
                  <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden bg-slate-950">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                      alt="Modern Content Strategy Workspace"
                      fill
                      className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between text-white text-xs font-mono">
                    <span className="text-[#DAF1DE] flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-xl bg-emerald-400 animate-ping"></span> STATUS: ACTIVE ENGINE</span>
                    <span className="text-slate-300">ORGANIC REACH UP 215%</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PERFORMANCE CARDS (Dark) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-[#1C3636] text-white border-y border-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#122424_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto space-y-12 relative z-10">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariant}
            className="max-w-2xl space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-[#122424] px-3.5 py-1.5 rounded-xl border border-slate-800 shadow-inner">
              Compounding Assets
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#F9FAFA]">Content That Works </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Long After It's Published.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Unlike ads that stop the moment you stop paying, content is an asset that keeps earning. Every piece published continues to attract visitors, trust, and leads long after going live.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div 
              variants={fadeInVariant}
              whileHover={{ y: -6, borderColor: "#1CA186", boxShadow: "0 20px 30px -10px rgba(28, 161, 134, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="md:col-span-2 bg-[#122424] border border-slate-800 p-6 sm:p-7 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-xl"
            >
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-72 h-72 bg-[#1CA186]/10 rounded-xl blur-3xl group-hover:bg-[#1CA186]/25 transition-all duration-500"></div>
              <div className="space-y-3 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white">📈 Compounding Organic Traffic</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  Drive consistent, predictable visitor growth month after month as your published articles scale up search engine ranking tiers automatically.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInVariant}
              whileHover={{ y: -6, borderColor: "#1CA186", boxShadow: "0 20px 30px -10px rgba(28, 161, 134, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="bg-[#122424] border border-slate-800 p-6 sm:p-7 rounded-xl flex flex-col justify-between shadow-xl relative group overflow-hidden"
            >
              <div className="space-y-3 relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white">🚀 Elevated Search Visibility</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Capture high-value search results for key industry terms that separate your brand from everyday market competitors.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInVariant}
              whileHover={{ y: -6, borderColor: "#1CA186", boxShadow: "0 20px 30px -10px rgba(28, 161, 134, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="bg-[#122424] border border-slate-800 p-6 sm:p-7 rounded-xl flex flex-col justify-between shadow-xl relative group overflow-hidden"
            >
              <div className="space-y-3 relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white">🧠 Recognized Industry Authority</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Position leadership vision through deep technical insights, proprietary frameworks, and unique market viewpoints.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInVariant}
              whileHover={{ y: -6, borderColor: "#1CA186", boxShadow: "0 20px 30px -10px rgba(28, 161, 134, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="md:col-span-2 bg-[#122424] border border-slate-800 p-6 sm:p-7 rounded-xl flex flex-col justify-between relative overflow-hidden group shadow-xl"
            >
              <div className="space-y-3 relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white">🎯 Qualified Audience Engagement</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                  Connect deeply with active readers who have real commercial intent and are ready to invest in serious business solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SERVICE OVERVIEW (White) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto space-y-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-[#DAF1DE]/40 px-3.5 py-1.5 rounded-xl border border-[#1CA186]/20">
              Strategic Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#1C3636]">Turn Knowledge Into a </span>
              {" "}
              <span className="text-[#1CA186]">Competitive </span>
              {" "}
              <span className="text-[#0F766E]">Advantage</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every blog article is an opportunity — to answer questions your customers are already asking, reinforce expertise, and strengthen visibility.
            </p>
          </motion.div>

          <div className="space-y-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-mono font-bold text-[#1CA186] bg-[#DAF1DE]/50 px-3.5 py-1.5 rounded-xl border border-[#1CA186]/20">PHASE 01</span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C3636] tracking-tight">Deep Research Synthesis</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We produce professionally researched, strategically written blog content that helps businesses educate their audience, establish credibility, and generate consistent organic traffic streams.
                </p>
                <div className="pt-2">
                  <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="w-full text-left"
>
  <div className="flex items-center gap-2 text-xs font-mono text-[#1CA186] font-bold pt-2 cursor-pointer group">
    <span>Talk to a Content Strategist</span>
    <span className="group-hover:translate-x-1 transition-transform">→</span>
  </div>
</button>
                </div>
              </div>
              <div className="lg:col-span-6 relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/Deep-Research.jpg"
                  alt="Research and Strategy Analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 lg:order-2 space-y-5">
                <span className="text-xs font-mono font-bold text-[#1CA186] bg-[#DAF1DE]/50 px-3.5 py-1.5 rounded-xl border border-[#1CA186]/20">PHASE 02</span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#1C3636] tracking-tight">Measurable Value Delivery</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We don't publish content for the sake of volume — every article is built to deliver measurable business value and support long-term enterprise growth.
                </p>
                <div className="pt-2">
                 <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="w-full text-left"
>
  <div className="flex items-center gap-2 text-xs font-mono text-[#1CA186] font-bold pt-2 cursor-pointer group">
    <span>EXPERT WRITER NETWORK</span>
    <span className="group-hover:translate-x-1 transition-transform">→</span>
  </div>
</button>
                </div>
              </div>
              <div className="lg:col-span-6 lg:order-1 relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
                  alt="Human Craftsmanship and Writing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

   {/* ========================================================= */}
      {/* 4. WHAT WE DELIVER (Dark) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-[#1C3636] text-white border-y border-emerald-950 relative">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-[#122424] px-3.5 py-1.5 rounded-xl border border-slate-800">
                Modular Deliverables
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <span className="text-[#F9FAFA]">Strategic Blog Writing Solutions, </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Built for Authority</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Every deliverable fits seamlessly into your marketing infrastructure, maximizing immediate engagement and long-term search metrics.
              </p>
            </div>
            
            <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[340px] rounded-xl overflow-hidden shadow-2xl border border-slate-800 group">
              <Image
                src="/Blog-Writing.jpg"
                alt="Content Deliverables Strategy"
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
          >
            {[
              { title: "SEO Blog Articles", desc: "Targeted content optimized to rank highly and pull organic search visitors." },
              { title: "Industry Insights & Analysis", desc: "Rigorous framework analysis tailored for specialized buyers." },
              { title: "Educational Content", desc: "Informative resources addressing core pain points and questions." },
              { title: "Thought Leadership Articles", desc: "Original viewpoints establishing founder-level market positioning." },
              { title: "How-To & Step-by-Step Guides", desc: "Actionable instructions providing clear value to readers." },
              { title: "Product & Service Blog Content", desc: "Showcasing core offerings directly aligned with conversions." },
              { title: "Company News & Updates", desc: "Keeping customers informed on organizational growth milestones." },
              { title: "Evergreen Content", desc: "Long-lasting articles engineered to keep generating traffic for years." },
              { title: "Pillar & Cornerstone Content", desc: "Massive definitive guides designed to anchor domain authority." },
              { title: "Editorial Calendar & Content Planning", desc: "Structured scheduling frameworks to guarantee publishing momentum." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInVariant}
                whileHover={{ y: -4, backgroundColor: "#152c2c", borderColor: "#1CA186" }}
                transition={{ duration: 0.2 }}
                className="bg-[#122424] border border-slate-800 p-3.5 sm:p-4 rounded-xl flex flex-col justify-between gap-2 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(28,161,134,0.25)] relative overflow-hidden group cursor-pointer"
              >
                {/* Sleek bottom border sweep effect on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#1CA186] group-hover:w-full transition-all duration-500 ease-out"></div>

                <div className="space-y-1 relative z-10">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#DAF1DE] transition-colors duration-300">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHY BLOG WRITING MATTERS (White) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200">
              Strategic Impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#1C3636]">Why Blog Writing </span>
              {" "}
              <span className="text-[#1CA186]">Matters Most </span>
              {" "}
              <span className="text-[#0F766E]">Right </span>
              {" "}
              <span className="text-[#1C3636]">Now</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Blogging isn't just about publishing content — it's about building a durable asset that works across every stage of your marketing funnel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative w-full h-[360px] sm:h-[570px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 group"
            >
              <Image
                src="/Blog-Writting.jpg"
                alt="Business Strategy Planning"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-3"
            >
              {[
                { label: "BRAND AUTHORITY", title: "Establish Unmatched Brand Authority", desc: "Position your business as the trusted, go-to source of expertise within your industry." },
                { label: "SEARCH VISIBILITY", title: "Increase Organic Search Visibility", desc: "Publish optimized content engineered to help your website rank for the search queries that matter most." },
                { label: "AUDIENCE EMPOWERMENT", title: "Educate and Empower Your Audience", desc: "Deliver genuinely useful information that answers key questions and supports confident buying decisions." },
                { label: "QUALIFIED TRAFFIC", title: "Attract Highly Qualified Traffic", desc: "Draw in visitors who are actively searching for the exact solutions your business provides." },
                { label: "TRUST & LOYALTY", title: "Build Lasting Customer Trust", desc: "Consistent, valuable publishing strengthens credibility and drives long-term customer loyalty." },
                { label: "MARKETING SYNERGY", title: "Power Your Broader Marketing Strategy", desc: "Create content assets that fuel SEO, email campaigns, social media, and lead generation simultaneously." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInVariant}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="bg-slate-50 border border-slate-200/90 p-3.5 sm:p-4 rounded-xl flex items-start gap-4 shadow-2xs relative overflow-hidden group cursor-pointer"
                >
                  {/* Left-side accent line that animates down/in on hover */}
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#1CA186] group-hover:h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></div>

                  <span className="text-xs font-mono font-bold text-[#1CA186] bg-[#DAF1DE]/60 px-2.5 py-1 rounded-xl mt-0.5">0{idx + 1}</span>
                  <div className="space-y-1 flex-1 relative h-12 overflow-hidden">
                    {/* Default state */}
                    <div className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-full group-hover:opacity-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#1C3636]">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed truncate">{item.desc}</p>
                    </div>
                    {/* Hover state */}
                    <div className="absolute inset-0 translate-y-full opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-sm sm:text-base font-bold text-[#1CA186]">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed truncate">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. OUR CONTENT DEVELOPMENT PROCESS (Dark) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-[#1C3636] text-white border-y border-emerald-950">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading and Paragraph */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="lg:col-span-7 space-y-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-[#122424] px-3.5 py-1.5 rounded-xl border border-slate-800">
                Disciplined Execution
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <span className="text-[#F9FAFA]">A Strategic Approach to </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Thought Leadership</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                We follow a disciplined, repeatable process that turns ideas into high-performing content — nothing is left to guesswork. Every step is designed to ensure the final article isn't just published, but positioned to rank, engage, and convert.
              </p>
            </motion.div>

            {/* Right Column: The 2 Stat Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { stat: "100%", label: "Human-Crafted Content", desc: "Zero automated AI filler or shortcuts used." },
                { stat: "5-Tier", label: "Quality Assurance", desc: "Rigorous checks for accuracy and SEO health." }
              ].map((box, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInVariant}
                  whileHover={{ y: -4, borderColor: "#1CA186" }}
                  className="bg-[#122424] border border-slate-800 p-5 rounded-xl space-y-2 shadow-xl flex flex-col justify-between"
                >
                  <span className="text-3xl sm:text-4xl font-black text-[#DAF1DE]">{box.stat}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{box.label}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{box.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* 5-Step Stage Grid with Scroll-Triggered Animation & Flip Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start"
          >
            {[
              { phase: "01", name: "Research & Analysis", details: "Identify topics and align directly with business objectives." },
              { phase: "02", name: "Content Strategy", details: "Build publishing plans to maximize visibility and authority." },
              { phase: "03", name: "Professional Writing", details: "Produce well-researched, engaging, SEO-optimized articles." },
              { phase: "04", name: "Quality Review", details: "Rigorous review for accuracy, readability, and performance." },
              { phase: "05", name: "Publishing & Growth", details: "Maintain disciplined strategies delivering lasting value." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.6, delay: idx * 0.15 } 
                  }
                }}
                className="group [perspective:1000px] cursor-pointer"
              >
                <div className="relative w-full text-center transition-all duration-[2250ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(0.5turn)] bg-[#122424] rounded-xl border border-slate-800 group-hover:border-[#1CA186] shadow-lg">
                  
                  {/* Front Side */}
                  <div className="relative p-5 flex flex-col justify-between [transform-style:preserve-3d] [backface-visibility:hidden]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#1CA186]/5 rounded-bl-full pointer-events-none"></div>
                    <div className="space-y-2.5 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-xl bg-[#1C3636] border border-slate-700 flex items-center justify-center text-[#DAF1DE] font-mono font-bold text-xs shadow-inner [transform:translateZ(2rem)]">
                          {step.phase}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white [transform:translateZ(5rem)]">{step.name}</h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed relative z-10 [transform:translateZ(3rem)] pt-3">Order Format →</p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-center items-center text-center bg-[#152c2c] border border-[#1CA186] rounded-xl [transform-style:preserve-3d] [transform:rotateY(0.5turn)] [backface-visibility:hidden]">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-[#1CA186] [transform:translateZ(5rem)] block">PHASE {step.phase}</span>
                      <h4 className="text-sm font-bold text-white [transform:translateZ(3rem)]">{step.name}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed [transform:translateZ(2rem)]">{step.details}</p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. OUR BLOG WRITING SOLUTIONS (White) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto space-y-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-[#DAF1DE]/50 px-3.5 py-1.5 rounded-xl border border-[#1CA186]/30">
              Tailored Engagements
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#1C3636]">Content Engineered to </span>
              {" "}
              <span className="text-[#1CA186]">Inform, Influence, </span>
              {" "}
              <span className="text-[#0F766E]">and </span>
              {" "}
              <span className="text-[#1C3636]">Convert</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every business has different content needs — and a one-size-fits-all approach rarely delivers real results. That's why we offer tailored solutions.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "SEO Blog Articles", count: "01", accent: "from-emerald-500 to-teal-600", desc: "Content strategically optimized to improve rankings and attract qualified visitors." },
              { title: "Industry Thought Leadership", count: "02", accent: "from-teal-600 to-[#1C3636]", desc: "Authoritative articles that position your business as a knowledgeable, trusted expert." },
              { title: "Educational Guides", count: "03", accent: "from-[#1C3636] to-emerald-800", desc: "In-depth resources that solve real problems for your audience." },
              { title: "Evergreen Content", count: "04", accent: "from-emerald-600 to-teal-500", desc: "Long-lasting articles engineered to keep generating traffic for years." },
              { title: "Product & Service Articles", count: "05", accent: "from-teal-700 to-[#1C3636]", desc: "Content that showcases your offerings while educating and converting potential customers." },
              { title: "Content Planning", count: "06", accent: "from-[#1C3636] to-emerald-700", desc: "Strategic editorial calendars that support disciplined publishing and sustained growth." }
            ].map((tier, i) => (
              <motion.div 
                key={i}
                variants={fadeInVariant}
                whileHover={{ y: -6, scale: 1.01, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden shadow-sm group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${tier.accent}`}></div>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-[#DAF1DE]/60 border border-[#1CA186]/30 flex items-center justify-center font-mono text-xs font-bold text-[#1C3636]">
                      {tier.count}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Module</span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors">{tier.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1C3636] rounded-xl p-8 sm:p-14 text-white relative overflow-hidden text-center space-y-6 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1CA186]/15 rounded-xl blur-3xl pointer-events-none"></div>
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Ready to Turn Content Into Your Competitive Advantage?</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Let's build a blog strategy that works as hard as you do — attracting traffic, earning trust, and driving growth long after publication.
              </p>
              <div className="pt-4">
               <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#DAF1DE] hover:bg-white text-[#1C3636] px-8 py-4 rounded-xl text-sm font-semibold transition-all shadow-lg cursor-pointer"
>
  <span>Book Your Free Strategy Call</span>
  <span>→</span>
</button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. WHY BUSINESSES PARTNER WITH US (Dark) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-[#1C3636] text-white border-y border-emerald-950">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-[#122424] px-3.5 py-1.5 rounded-xl border border-slate-800">
              The Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#F9FAFA]">Every Article Supports a </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Bigger Business Goal</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We build systems that turn publishing into a genuine growth driver with your long-term goals in mind.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6 pb-6"
          >
            {[
              { 
                title: "Strategy Before Writing", 
                desc: "Every piece of content is created with clear purpose and a measurable business objective.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              { 
                title: "SEO Without Compromise", 
                desc: "We balance rigorous search engine optimization with genuinely engaging, reader-first writing.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              { 
                title: "Consistent Brand Voice", 
                desc: "Every article reflects your expertise, professionalism, and unique brand identity.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                )
              },
              { 
                title: "Long-Term Growth Focus", 
                desc: "We don't chase short-term trends — we build content assets engineered to deliver value for years.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInVariant}
                className="group relative flex flex-col justify-between h-80 duration-500 rounded-2xl p-5 bg-[#122424] hover:-translate-y-2 hover:shadow-2xl shadow-black/40 cursor-pointer overflow-hidden"
              >
                {/* Background Offset Corner Card with Decreased Height (w-1/2 h-2/5) */}
                <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-5 -right-5 w-1/2 h-2/5 rounded-2xl bg-[#162b2b] border border-slate-800 z-0 pointer-events-none flex items-center justify-center">
                  <div className="text-[#1CA186] group-hover:text-white transition-all duration-300 transform scale-110">
                    {card.icon}
                  </div>
                </div>

                {/* Main Content Layer */}
                <div className="relative z-10 flex flex-col justify-between h-full w-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-[#1CA186]/10 text-[#DAF1DE] font-mono font-bold text-xs flex items-center justify-center">
                        0{idx + 1}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-[#1CA186] transition-colors">{card.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">{card.desc}</p>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="hover:bg-[#1CA186]/20 bg-[#1CA186]/10 text-[#1CA186] font-semibold text-xs tracking-wide rounded-lg py-2 px-4 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
>
  <span>Explore</span>
  <span>→</span>
</button>
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS (White) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-white border-b border-slate-200/60">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Heading and Context Description */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
              className="lg:col-span-5 space-y-6 lg:sticky lg:top-12"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200">
                Expert Answers
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                <span className="text-[#1C3636]">Frequently Asked </span>
                <span className="text-[#1CA186]">Questions</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Have questions about our blog writing services? We've compiled answers to the questions we hear most often from businesses considering a content partnership.
              </p>
              <div className="pt-2">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1C3636] text-white px-6 py-3.5 rounded-xl text-xs font-mono font-bold hover:bg-[#244343] transition-colors shadow-md cursor-pointer"
>
  <span>Contact Us Today</span>
  <span>→</span>
</button>
              </div>
            </motion.div>

            {/* Right Side: Interactive Accordion Items with Decreased Padding */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-2.5"
            >
              {[
                { q: "Why is blog writing important for my business?", a: "Regular, strategic blog content strengthens search visibility, builds trust, and attracts qualified visitors over time." },
                { q: "Are your articles SEO optimized?", a: "Yes. Every article follows proven SEO best practices while remaining genuinely valuable and engaging for readers." },
                { q: "Can you write for my industry?", a: "Absolutely. We conduct thorough research into your industry to produce accurate, relevant, and authoritative content." },
                { q: "How often should I publish blog articles?", a: "Consistency is critical to results. We help you develop a publishing schedule aligned with your specific business goals." },
                { q: "Will the content match my brand voice?", a: "Yes. Every article is tailored to reflect your brand's tone, messaging, and target audience." },
                { q: "Do you provide ongoing blog writing services?", a: "Yes. We offer long-term content partnerships designed to help businesses sustain consistent growth and visibility." }
              ].map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div 
                    key={idx}
                    variants={fadeInVariant}
                    className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 shadow-2xs hover:border-[#1CA186]/40"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-xl bg-[#DAF1DE]/90 text-[#1C3636] font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                          0{idx + 1}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#1C3636]">{faq.q}</span>
                      </div>
                      <span className={`w-7 h-7 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xs font-mono font-bold text-[#1C3636] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 bg-[#DAF1DE]' : ''}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pb-4 pt-0 text-slate-600 text-xs sm:text-xs leading-relaxed border-t border-slate-100 mt-1 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FINAL CTA SECTION (Dark) */}
      {/* ========================================================= */}
      <section className="pt-6 pb-6 px-6 sm:px-8 lg:px-12 bg-[#1C3636] text-white border-y border-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#122424_0%,transparent_80%)] pointer-events-none"></div>
        <div className="max-w-[1280px] mx-auto space-y-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#1CA186] font-semibold bg-[#122424] px-3.5 py-1.5 rounded-xl border border-slate-800">
              Transform Your Growth Engine
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              <span className="text-[#F9FAFA]">Ready to Become the Trusted Voice in Your Industry?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The most successful businesses win by sharing knowledge, building trust, and becoming the first resource customers turn to. Let us help you build a strategic content engine.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {[
              { name: "Research-Driven Content Strategy" },
              { name: "SEO-Optimized Articles" },
              { name: "Industry-Focused Expertise" },
              { name: "Consistent Brand Voice" },
              { name: "Thought Leadership Content" },
              { name: "Long-Term Organic Growth" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInVariant}
                whileHover={{ scale: 1.02, backgroundColor: "#152c2c" }}
                className="bg-[#122424] p-3.5 rounded-xl flex items-center justify-between shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-[#1CA186] text-xs font-bold">✅</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">{feature.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
           <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#DAF1DE] hover:bg-white text-[#1C3636] font-semibold text-sm px-8 py-4 rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer"
>
  <span>Schedule a Free Consultation</span>
  <span><span>→</span></span>
</button>
<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="bg-[#122424] hover:bg-white text-white hover:text-[#1C3636] font-semibold text-sm px-8 py-4 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
>
  <span>Start Your Content Strategy Today</span>
</button>
          </motion.div>
        </div>
      </section>

 <Popup
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>
    </div>
  );
}