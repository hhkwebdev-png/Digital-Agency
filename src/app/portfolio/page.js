'use client';

import React, { useState } from 'react';
import Popup from "@/components/Popup";
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Most custom software and AI systems ship within 4 to 12 weeks depending on scope, data integrations, and complexity. We move fast without cutting corners."
    },
    {
      question: "How do you handle ongoing support after launch?",
      answer: "We offer dedicated retainer models for continuous performance optimization, security updates, scaling infrastructure, and feature expansions."
    },
    {
      question: "Are your AI systems secure and private?",
      answer: "Yes. All enterprise AI pipelines and custom agents are architected with enterprise-grade security protocols, ensuring your data remains private and compliant."
    },
    {
      question: "Do you use templates or build from scratch?",
      answer: "Every system is engineered from the ground up to address your exact operational bottlenecks. No recycled boilerplate code."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans selection:bg-[#1C3636] selection:text-white">
      
      {/* Section 1: Hero Section */}
      <section className="bg-[#1C3636] text-[#F9FAFA] pt-10 pb-10 px-6 sm:px-8 lg:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4 text-left"
            >
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-bold inline-block px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                Hero Section
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] pt-1">
                We Don't Build Software. <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">We Build Unfair Advantages.</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
                Most agencies ship features. We ship outcomes: fewer support tickets, faster sales cycles, leaner operations, and products that make your competitors ask "how did they do that?"
              </p>

              <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed font-normal bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-sm">
                This is a working record of AI systems, automation platforms, and enterprise software we've shipped for founders and operators who refused to settle for "good enough." No templates. No recycled stack. Every build is engineered from the ground up for the problem it needs to solve.
              </p>

              <p className="text-xs text-gray-300 pt-1">
                If you're deciding whether we're the right team, don't take our word for it — look at what we've already built.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex items-center cursor-pointer justify-center px-6 py-3 text-xs sm:text-sm font-bold rounded-xl text-[#1C3636] bg-white hover:bg-emerald-50 hover:scale-[1.02] transition-all shadow-lg"
                >
                  See the Work
                </button>
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
                  className="inline-flex items-center cursor-pointer justify-center px-6 py-3 text-xs sm:text-sm font-bold rounded-xl text-white bg-white/10 hover:bg-white/25 hover:scale-[1.02] transition-all border border-white/30 backdrop-blur-md"
                >
                  Start a Project
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 backdrop-blur-md h-80 sm:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Enterprise Engineering Workspace" 
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Live System Telemetry</p>
                    <p className="text-[10px] text-emerald-300">100% Custom Infrastructure Uptime</p>
                  </div>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Section 2: Featured Projects */}
      <section id="projects" className="bg-white pt-10 pb-10 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left"
          >
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-white font-bold inline-block px-3.5 py-1.5 rounded-xl bg-[#1C3636] shadow-sm">
                Featured Projects
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight pt-1">
                <span className="text-[#1C3636]">The Proof</span>{" "}
                <span className="text-[#1CA186]">Is in the Build,</span>{" "}
                <span className="text-[#0F766E]">Not the</span>{" "}
                <span className="text-[#1C3636]">Pitch</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
                Anyone can promise "AI-powered" and "enterprise-grade." We'd rather show you the before-and-after: the manual process that used to eat 20 hours a week, the support team that used to drown in tickets, the platform that couldn't scale past 500 users — and what it looks like now. Every project card below is a real business problem, mapped to a real solution, with real numbers attached.
              </p>
            </div>
           <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center cursor-pointer justify-center px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl text-white bg-[#1C3636] hover:bg-[#122525] hover:scale-[1.02] transition-all shadow-md self-start md:self-auto"
            >
              Request Custom Case Study
            </button>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "AI Customer Support Agent",
                industry: "SaaS & Tech",
                problem: "Support team drowning in repetitive Tier-1 inquiries causing long resolution wait times.",
                solution: "Autonomous resolution workflow processing core queries instantly without human intervention.",
                tech: "Next.js, OpenAI API, Vector DB",
                outcome: "84% Automated Resolution & 3x faster response time",
                img: "/Customer-Support.jpg",
                link: "https://github.com/your-username/ai-customer-support-agent" // Replace with your actual project URL
              },
              {
                title: "Healthcare Analytics Hub",
                industry: "Healthcare",
                problem: "Fragmented multi-source patient data systems causing sluggish reporting and operational bottlenecks.",
                solution: "Real-time consolidated telemetry pipeline driving unified clinician dashboards.",
                tech: "React, Node.js, PostgreSQL",
                outcome: "10x faster report generation and zero manual data errors",
                img: "/Healthcare-Analytic.jpg",
                link: "https://github.com/your-username/healthcare-analytics-hub" // Replace with your actual project URL
              },
              {
                title: "Automated Workflow Engine",
                industry: "Fintech",
                problem: "Manual transaction checking eating 20+ weekly operational hours.",
                solution: "Custom orchestration layer optimizing verification sequences securely.",
                tech: "TypeScript, Python, AWS",
                outcome: "Saved 25 hours weekly and scaled past 10,000 active daily transactions",
                img: "/Automated-Workflow.jpg",
                link: "https://github.com/your-username/automated-workflow-engine" // Replace with your actual project URL
              }
            ].map((proj, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group cursor-pointer"
              >
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-20" 
                  aria-label={`Open ${proj.title} in a new tab`}
                />
                
                {/* The card content with animated gradient background/border effect */}
                <div className="relative z-10 bg-gray-50 border border-gray-200/80 rounded-xl p-3 sm:p-3.5 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.01] flex flex-col lg:flex-row items-center gap-4 text-left overflow-hidden">
                  
                  {/* Animated gradient shifting background overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-400/10 to-emerald-600/10 bg-[length:200%_200%] opacity-0 group-hover:opacity-100 group-hover:animate-[gradient_3s_infinite_ease-in-out] transition-opacity duration-300 pointer-events-none" />

                  <div className="w-full lg:w-2/5 h-40 sm:h-48 rounded-xl overflow-hidden relative flex-shrink-0 bg-white border border-gray-200 shadow-inner z-10">
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#1C3636] text-white text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-xl uppercase shadow-md">
                      {proj.industry}
                    </span>
                  </div>

                  <div className="w-full lg:w-3/5 space-y-2.5 z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900">{proj.title}</h3>
                      <span className="text-[11px] font-bold text-[#1C3636] bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-100/85 self-start">
                        {proj.outcome}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-gray-600 leading-relaxed pt-0.5">
                      <p><strong className="text-gray-900 font-semibold">The problem:</strong> {proj.problem}</p>
                      <p><strong className="text-gray-900 font-semibold">What we built and why:</strong> {proj.solution}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-gray-200/60">
                      <span className="text-[11px] font-mono text-gray-500"><strong className="text-gray-700">Tech stack:</strong> {proj.tech}</span>
                      <span className="text-xs font-bold text-[#1C3636] group-hover:translate-x-1 group-hover:text-[#1CA186] transition-all inline-flex items-center gap-1 relative z-30">
                        View Project &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 border border-gray-200/80 rounded-xl p-5 text-center max-w-4xl mx-auto space-y-3"
          >
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
              Categories we ship in
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "AI Automation Platforms",
                "AI Customer Support Agents",
                "Autonomous AI Agent Systems",
                "Healthcare Management Platforms",
                "Custom CRM Builds",
                "SaaS Dashboards & Analytics",
                "Business Process Automation",
                "Enterprise Web Platforms",
                "E-commerce Systems"
              ].map((category, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-800 text-[11px] font-semibold px-3 py-1.5 rounded-xl border border-gray-200 shadow-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    {/* Section 3: Our Expertise */}
      <section className="bg-[#1C3636] text-[#F9FAFA] pt-10 pb-10 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-3"
          >
            <span className="text-xs uppercase tracking-widest text-white font-bold inline-block px-3.5 py-1.5 rounded-xl bg-[#1C3636] border border-white/20">
              Our Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight pt-1">
              <span className="text-white">We Go</span>{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Deep, Not Wide</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
              We don't chase every industry buzzword. We build in domains where the stakes are real — where a broken workflow costs hours, a bad UX costs customers, and a fragile system costs revenue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 space-y-3"
            >
              <h3 className="text-xs uppercase tracking-widest font-bold text-emerald-300">
                Industries We Operate In
              </h3>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md space-y-2.5">
                {[
                  "Healthcare",
                  "SaaS & Technology",
                  "E-commerce",
                  "Real Estate",
                  "Finance",
                  "Education",
                  "Manufacturing",
                  "Logistics",
                  "Professional Services",
                  "Startups & Scale-ups"
                ].map((industry, index) => (
                  <div key={index} className="text-xs text-gray-200 font-medium pb-2 border-b border-white/5 flex items-center justify-between last:border-0 last:pb-0">
                    <span>{industry}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">active</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 space-y-3"
            >
              <h3 className="text-xs uppercase pt-12 tracking-widest font-bold text-emerald-300">
                What We Actually Build
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {[
                  { title: "AI Automation Systems", desc: "that eliminate manual, repetitive work" },
                  { title: "Autonomous AI Agents", desc: "that act, not just answer" },
                  { title: "AI Chatbots", desc: "trained on your business, not a generic script" },
                  { title: "Custom Software", desc: "built around how your team actually works" },
                  { title: "Enterprise Web Applications", desc: "that don't buckle under real traffic" },
                  { title: "SaaS Products", desc: "architected to scale from 10 users to 10,000" },
                  { title: "CRM & ERP Integrations", desc: "that finally talk to each other" },
                  { title: "API Development & Cloud Infrastructure", desc: "built for uptime, not demos" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    style={{ perspective: "1000px" }}
                    className="group relative bg-white/5 border border-white/10 rounded-xl p-4.5 backdrop-blur-md flex flex-col justify-between overflow-hidden transition-all duration-800 hover:scale-[1.03] hover:shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                  >
                    {/* Default visible view (title only) */}
                    <div className="flex items-center justify-between h-full transition-all duration-600 group-hover:scale-0">
                      <h4 className="font-bold text-white text-xs sm:text-sm">{item.title}</h4>
                    </div>

                    {/* Hidden content panel that rotates up on hover */}
                    <div className="absolute inset-0 p-4.5 bg-[#142929] border border-white/20 rounded-xl flex flex-col justify-center transform -rotate-x-90 origin-bottom transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-x-0">
                      <h4 className="font-bold text-white text-xs sm:text-sm mb-1.5">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="text-center pt-2">
             <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center cursor-pointer justify-center px-6 py-3 text-xs sm:text-sm font-bold rounded-xl text-[#1C3636] bg-white hover:bg-emerald-50 hover:scale-[1.02] transition-all shadow-lg"
            >
              Consult On Your Tech Stack
            </button>
          </div>

        </div>
      </section>

     {/* Section 4: Our Development Approach */}
      <section className="bg-white pt-10 pb-10 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-3"
          >
            <span className="text-xs uppercase tracking-widest text-white font-bold inline-block px-3.5 py-1.5 rounded-xl bg-[#1C3636] shadow-sm">
              Our Development Approach
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight pt-1">
              <span className="text-[#1C3636]">A Process</span>{" "}
              <span className="text-[#1CA186]">That Protects</span>{" "}
              <span className="text-[#0F766E]">Your Outcome</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
              Most build failures aren't technical — they're the result of skipping the thinking before the coding starts. Here's how we prevent that.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                num: "01",
                title: "Discover",
                desc: "We interrogate the business problem before touching a single line of requirements. What's the cost of the status quo? What does success actually look like in 90 days?"
              },
              {
                num: "02",
                title: "Design",
                desc: "Interfaces built to convert, not just to look good in a portfolio. Every screen earns its place."
              },
              {
                num: "03",
                title: "Develop",
                desc: "Modern architecture, clean code, and engineering decisions made for the system you'll have in two years — not just the one you need next month."
              },
              {
                num: "04",
                title: "Optimize",
                desc: "Launch is the starting line. We monitor, measure, and refine post-launch so performance compounds instead of decaying."
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border-2 border-slate-100 rounded-[32px] p-3 relative shadow-[0_30px_20px_-20px_rgba(28,54,54,0.06)] hover:shadow-[0_40px_30px_-20px_rgba(28,161,134,0.18)] hover:border-[#1CA186]/40 transition-all duration-500 overflow-hidden group h-[310px] flex flex-col"
              >
                {/* Top Badge/Circle element that scales & shifts on hover (recreating profile-pic micro-interaction) */}
                <div className="w-full h-[85px] bg-slate-50 border border-slate-100 rounded-[24px] p-4 flex items-center justify-between relative z-10 group-hover:bg-[#1CA186] group-hover:border-[#1CA186] transition-all duration-500">
                  <span className="text-sm sm:text-base font-extrabold text-[#1C3636] group-hover:text-white transition-colors duration-300">{step.title}</span>
                  <div className="w-9 h-9 rounded-xl bg-white text-[#1CA186] group-hover:bg-white group-hover:text-[#1C3636] flex items-center justify-center font-mono font-bold text-xs shadow-xs transition-all duration-500">
                    {step.num}
                  </div>
                </div>

                {/* Bottom Content Area that animates/slides up on hover */}
                <div className="flex-1 p-3 flex flex-col justify-center relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-900 leading-relaxed transition-colors duration-300">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle bottom accent line sweep */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#1CA186] group-hover:w-full transition-all duration-500 ease-out"></div>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-2">
             <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
              className="inline-flex items-center cursor-pointer justify-center px-6 py-3 text-xs sm:text-sm font-bold rounded-xl text-white bg-[#1C3636] hover:bg-[#122525] hover:scale-[1.02] transition-all shadow-lg"
            >
              Explore Our Workflow
            </button>
          </div>

        </div>
      </section>

     {/* Section 5: Why Businesses Trust Us */}
      <section className="bg-[#1C3636] text-[#F9FAFA] pt-10 pb-10 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-3"
          >
            <span className="text-xs uppercase tracking-widest text-white font-bold inline-block px-3.5 py-1.5 rounded-xl bg-[#1C3636] border border-white/20">
              Why Businesses Trust Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight pt-1">
              <span className="text-white">We Compete on</span>{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Outcomes, Not Adjectives</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-2">
              Every agency claims "enterprise-grade" and "scalable." Here's what actually separates the work:
            </p>
          </motion.div>

          {/* Container simulating the .card wrapper with blur-siblings hover effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left group/container">
            {[
              "AI-first architecture — not AI bolted on as a feature",
              "Custom-built, not templated — your system, not a reskinned boilerplate",
              "Cloud infrastructure that scales without a rebuild",
              "Security built in from day one, not patched in after a breach",
              "Engineering decisions made for performance under real load",
              "Code your next developer can actually read and extend",
              "Design built around your users, validated by data — not opinion",
              "Radical transparency — you see progress weekly, not at 'launch'",
              "A stack chosen for where your business is going, not just where it is",
              "A partnership that continues after launch, not a handoff and goodbye"
            ].map((reason, idx) => (
              <div 
                key={idx} 
                className="relative bg-white/5 border border-white/10 rounded-xl p-5 flex items-center space-x-3 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:z-15 hover:scale-[1.03] hover:shadow-[0_8px_16px_rgba(0,0,0,0.5)] group/item group-has-hover/container:[&:not(:hover)]:blur-[3px] group-has-hover/container:[&:not(:hover)]:scale-[0.98]"
              >
                <span className="h-2 w-2 bg-emerald-400 rounded-full flex-shrink-0 transition-all"></span>
                <span className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed transition-all">{reason}</span>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-emerald-950/60 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-md max-w-3xl mx-auto text-left shadow-xl space-y-2"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-300">The result:</h3>
            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
              Businesses that work with us don't just get software. They get a measurable edge — lower operating costs, faster execution, and technology that scales with ambition instead of limiting it.
            </p>
          </motion.div>

        </div>
      </section>

      {/*6- Frequently Asked Questions Section (Added Above Final CTA) */}
      <section className="bg-[#1C3636] text-white pt-10 pb-10 px-6 sm:px-8 lg:px-12 border-b border-white/10 bg-gradient-to-bl from-[#152929] via-[#1C3636] to-[#0f1f1f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Heading & Context */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 lg:sticky lg:top-8 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Frequently Asked Questions
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
                <span className="text-[#F9FAFA]">Frequently Asked </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                Everything you need to know about our workflow, engineering process, timelines, and ongoing support models.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
                <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Have a specific question?</div>
                <p className="text-xs text-gray-300 mb-4">Can't find what you're looking for? Reach out directly to our engineering team.</p>
                 <button
  type="button"
  onClick={() => setIsPopupOpen(true)} className="inline-flex items-center cursor-pointer justify-center bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-5 py-3 rounded-xl transition duration-300 shadow">
                  Contact Our Team →
                </button>
              </div>
            </motion.div>

            {/* Right Column: Creative Accordion Cards with Framer Motion */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className={`border rounded-2xl py-4 px-5 transition-all duration-300 cursor-pointer select-none ${
                      isOpen 
                        ? 'bg-gradient-to-r from-white/15 to-white/10 border-emerald-500/60 shadow-xl shadow-black/25' 
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.08]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-black tracking-wider ${isOpen ? 'text-emerald-400' : 'text-gray-500'}`}>
                          0{index + 1}
                        </span>
                        <h3 className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-emerald-300' : 'text-white'}`}>
                          {faq.question}
                        </h3>
                      </div>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${isOpen ? 'bg-emerald-500 text-white shadow-md shadow-emerald-900/50' : 'bg-white/10 text-gray-300'}`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 pt-3 border-t border-white/10 text-gray-300 text-xs sm:text-sm leading-relaxed pl-7"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section id="contact" className="bg-white pt-10 pb-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 border border-gray-200/80 shadow-2xl p-8 sm:p-12 lg:p-16"
          >
            
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-[#1C3636]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 text-left space-y-4">
                <span className="inline-block text-xs uppercase tracking-widest font-bold px-3.5 py-1.5 bg-emerald-100 text-[#1C3636] rounded-xl shadow-sm">
                  Final CTA
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] pt-1">
                  <span className="text-[#1C3636]">Your Competitors</span>{" "}
                  <span className="text-[#1CA186]">Are Already</span>{" "}
                  <span className="text-[#0F766E]">Automating.</span>{" "}
                  <span className="text-[#1C3636]">Are You?</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
                  Every quarter you run on manual processes and legacy systems is a quarter your competitors spend building an edge you'll have to catch up to. Whether that means an AI platform that replaces hours of manual work, a customer-facing agent that never sleeps, or enterprise software built to actually scale — we're ready to build it with you.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
                    className="inline-flex items-center cursor-pointer justify-center px-6 py-3 text-xs sm:text-sm font-bold rounded-xl text-white bg-[#1C3636] hover:bg-[#122525] hover:scale-[1.02] transition-all shadow-lg"
                  >
                    Let's Build Together
                  </button>
                   <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
                    className="inline-flex items-center cursor-pointer justify-center px-6 py-3 text-xs sm:text-sm font-bold rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:scale-[1.02] transition-all border border-gray-200 shadow-sm"
                  >
                    Request a Custom Proposal
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl p-5 sm:p-6 shadow-xl space-y-3.5 text-left">
                  <h3 className="text-xs font-bold text-gray-900 border-b border-gray-100 pb-3 uppercase tracking-wider">
                    Direct Project Intake
                  </h3>
                  <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>Response within 24 business hours</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>Direct technical scoping with senior engineers</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>No sales reps or recycled templates</span>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-md h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1C3636]/30"></div>
                  <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-2.5 text-center text-[10px] sm:text-xs text-white">
                    Engineered from the ground up for high-stakes problem solvers.
                  </div>
                </div>
              </div>

            </div>

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