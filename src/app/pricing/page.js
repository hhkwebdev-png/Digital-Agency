'use client';

import React, { useState } from 'react';
import Popup from '@/components/Popup';
import { motion } from 'framer-motion';

export default function PricingPage() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "Do you offer fixed pricing?",
      answer: "Every package starts at a set price, but each project is shaped around your specific goals and requirements."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Absolutely. As your business grows, we can layer in new features, integrations, and AI capabilities whenever you're ready."
    },
    {
      question: "Is the consultation free?",
      answer: "Yes — your first strategy call is 100% free, with zero obligation."
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes. Every package includes post-launch support, and we offer ongoing maintenance plans for long-term peace of mind."
    },
    {
      question: "How long does a project take?",
      answer: "Most projects wrap up within 2 to 10 weeks, depending on the package and project scope."
    },
    {
      question: "Do I own the final product?",
      answer: "Yes — once the project is complete and paid for, you own all the code, designs, and content outright, with no licensing fees or restrictions."
    }
  ];

  return (
    <div className="bg-white text-gray-900 antialiased font-sans selection:bg-emerald-500 selection:text-white overflow-hidden">

      {/* Hero Section */}
      <section className="bg-[#1C3636] text-white py-6 px-6 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1C3636] via-[#152929] to-[#0f1f1f]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                Hero Section
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                <span className="text-[#F9FAFA]">Pricing Built Around Your Growth, </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Not a Generic Template
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
                No two businesses grow the same way — so why settle for a cookie-cutter package? Our pricing is built to flex around your goals, stay transparent from day one, and put real business outcomes ahead of empty add-ons.
              </p>
              <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
                Whether you're after a standout website, smart automation, custom AI agents, or a full digital overhaul, we'll map out the right path forward — no fine print, no bloated extras, no guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white font-bold px-5 py-3 rounded-xl transition duration-300 shadow-lg shadow-emerald-900/30 text-center text-xs sm:text-sm"
                >
                  Claim Your Free Proposal
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)}
                  className="bg-white/5 hover:bg-white/10 cursor-pointer text-white border border-white/20 font-semibold px-5 py-3 rounded-xl transition duration-300 backdrop-blur-md text-center text-xs sm:text-sm"
                >
                  Book a Strategy Call
                </motion.button>
              </div>
            </motion.div>

            {/* Visual Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/Strategic-Growth.jpg" 
                  alt="Strategy and Growth Planning" 
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#1C3636] via-[#1C3636]/80 to-transparent z-20">
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Tailored Architecture</div>
                  <div className="text-white text-sm font-semibold">Engineered specifically around your operational milestones.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-white text-gray-900 py-6 px-6 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/30 via-white to-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-[#1C3636]/5 border border-[#1C3636]/10 text-[#1C3636] font-semibold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              Pricing Plans
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              <span className="text-[#1C3636]">
                Find
              </span>
              {" "}
              <span className="text-[#1CA186]">
                the Plan
              </span>
              {" "}
              <span className="text-[#0F766E]">
                That Matches
              </span>
              {" "}
              <span className="text-[#1C3636]">
                Your Ambition
              </span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              No hidden fees. No last-minute surprises. Just straightforward pricing paired with solutions engineered to help your business scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Starter Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#1C3636]/5 text-[#1C3636] font-extrabold text-xs px-3 py-1.5 rounded-xl tracking-wide">🚀 STARTER</span>
                  <span className="text-xs text-gray-500 font-medium">2–3 Weeks</span>
                </div>
                <div className="text-3xl font-black text-[#1C3636] mb-1">$999</div>
                <div className="text-xs font-semibold text-emerald-600 mb-4">Starting investment</div>
                <p className="text-xs text-gray-600 mb-6 pb-6 border-b border-gray-200 leading-relaxed">
                  Built For Startups, freelancers, and small businesses ready to make a strong first impression online.
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">What You Get</p>
                <ul className="space-y-2.5 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Discovery & strategy session</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Up to 5 custom-designed pages</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Fully responsive build</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Polished, modern UI/UX</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Foundational SEO setup</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Integrated contact form</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Speed & performance tuning</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> 30 days of launch support</li>
                </ul>
              </div>
              <motion.button whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)} className="block text-center cursor-pointer w-full bg-[#1C3636] hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-3 rounded-xl transition duration-300 shadow">
                Kick Off Your Project
              </motion.button>
            </motion.div>

            {/* Growth Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-[#1C3636] text-white border-2 border-emerald-500 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xl relative transform lg:-translate-y-2 bg-gradient-to-b from-[#1c3636] to-[#122424]"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black px-3.5 py-1 rounded-xl uppercase tracking-wider shadow">Most Popular</div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/10 text-emerald-400 font-extrabold text-xs px-3 py-1.5 rounded-xl tracking-wide">🚀 GROWTH</span>
                  <span className="text-xs text-gray-300 font-medium">4–6 Weeks</span>
                </div>
                <div className="text-3xl font-black text-white mb-1">$2,499</div>
                <div className="text-xs font-semibold text-emerald-400 mb-4">Starting investment</div>
                <p className="text-xs text-gray-300 mb-6 pb-6 border-b border-white/10 leading-relaxed">
                  Built For Scaling businesses ready to automate the busywork and turn traffic into leads.
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-3">Everything in Starter, plus</p>
                <ul className="space-y-2.5 text-xs text-gray-200 mb-6">
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> Up to 12 custom-designed pages</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> AI chatbot built in</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> Smart workflow automation</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> CRM integration</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> Advanced SEO strategy</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> Real-time analytics dashboard</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> Custom API integrations</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> Performance optimization</li>
                  <li className="flex items-center"><span className="text-emerald-400 mr-2 font-bold">✓</span> 60 days of dedicated support</li>
                </ul>
              </div>
              <motion.button whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)} className="block cursor-pointer text-center w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-5 py-3 rounded-xl transition duration-300 shadow-md">
                Get Your Custom Proposal
              </motion.button>
            </motion.div>

            {/* Business Pro Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#1C3636]/5 text-[#1C3636] font-extrabold text-xs px-3 py-1.5 rounded-xl tracking-wide">🚀 BUSINESS PRO</span>
                  <span className="text-xs text-gray-500 font-medium">6–10 Weeks</span>
                </div>
                <div className="text-3xl font-black text-[#1C3636] mb-1">$4,999</div>
                <div className="text-xs font-semibold text-emerald-600 mb-4">Starting investment</div>
                <p className="text-xs text-gray-600 mb-6 pb-6 border-b border-gray-200 leading-relaxed">
                  Built For Businesses ready to scale with custom-built software and next-level AI capability.
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">Everything in Growth, plus</p>
                <ul className="space-y-2.5 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Custom-built AI agents</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Advanced workflow automation</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Tailored admin dashboard</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Secure user authentication</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Robust database architecture</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Deep API integrations</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Hands-on team training</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Priority-line support</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> 90 days of premium coverage</li>
                </ul>
              </div>
              <motion.button whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)} className="block text-center cursor-pointer w-full bg-[#1C3636] hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-3 rounded-xl transition duration-300 shadow">
                Book Your Consultation
              </motion.button>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#1C3636]/5 text-[#1C3636] font-extrabold text-xs px-3 py-1.5 rounded-xl tracking-wide">🏢 ENTERPRISE</span>
                  <span className="text-xs text-gray-500 font-medium">Flexible</span>
                </div>
                <div className="text-3xl font-black text-[#1C3636] mb-1">Custom</div>
                <div className="text-xs font-semibold text-emerald-600 mb-4">Tailored partnership</div>
                <p className="text-xs text-gray-600 mb-6 pb-6 border-b border-gray-200 leading-relaxed">
                  Built For Large organizations with complex needs and enterprise-scale workflows.
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">What's Included</p>
                <ul className="space-y-2.5 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> A dedicated development team</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Enterprise-grade AI solutions</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Unlimited integrations</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Cloud architecture that scales with you</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Enterprise-level security</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Continuous optimization</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> A long-term technical partnership</li>
                  <li className="flex items-center"><span className="text-emerald-500 mr-2 font-bold">✓</span> Priority support & ongoing maintenance</li>
                </ul>
              </div>
              <motion.button whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)} className="block text-center cursor-pointer w-full bg-[#1C3636] hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-3 rounded-xl transition duration-300 shadow">
                Talk to Our Sales Team
              </motion.button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Compare Our Plans */}
      <section className="bg-[#1C3636] text-white py-6 px-6 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-tr from-[#152929] via-[#1C3636] to-[#0f1f1f]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6"
          >
            <div className="text-left max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Compare Our Plans
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
                <span className="text-[#F9FAFA]">Compare Our </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                  Plans
                </span>
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                Detailed breakdown of what is included across each tier.
              </p>
            </div>
            <div className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center cursor-pointer justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl transition duration-300 shadow-lg shadow-emerald-950/40 text-xs sm:text-sm whitespace-nowrap"
              >
                Get Started Today →
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md shadow-2xl"
          >
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 uppercase text-[11px] tracking-wider">
                  <th className="py-3 px-4 font-semibold">Features</th>
                  <th className="py-3 px-4 text-center font-semibold">Starter</th>
                  <th className="py-3 px-4 text-center font-semibold text-emerald-400">Growth</th>
                  <th className="py-3 px-4 text-center font-semibold">Business Pro</th>
                  <th className="py-3 px-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">Strategy Session</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">Custom Website</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">Responsive Design</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">AI Chatbot</td>
                  <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">Workflow Automation</td>
                  <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Basic</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Advanced</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Custom</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">AI Agents</td>
                  <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                  <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">CRM & API Integrations</td>
                  <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">Custom Dashboard</td>
                  <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                  <td className="py-3.5 px-4 text-center text-gray-500">—</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✅</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">SEO Optimization</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Basic</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Advanced</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Advanced</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Enterprise</td>
                </tr>
                <tr className="hover:bg-white/[0.08] transition-colors duration-200">
                  <td className="py-3.5 px-4 font-medium text-gray-200">Support</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">30 Days</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">60 Days</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">90 Days</td>
                  <td className="py-3.5 px-4 text-center text-gray-300">Ongoing</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white text-gray-900 py-6 px-6 sm:px-6 lg:px-8 bg-gradient-to-t from-white via-emerald-50/20 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                  src="/Dedicated-Partnership.jpg" 
                  alt="Team collaboration and partnership" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                <div className="absolute bottom-6 inset-x-6 text-white z-20">
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Dedicated Partnership</div>
                  <div className="text-sm font-medium">Built to keep creating value long after launch.</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-[#1C3636]/5 border border-[#1C3636]/10 text-[#1C3636] font-semibold text-xs px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                  Why Choose Us?
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
                  <span className="text-[#1C3636]">
                    Why Choose
                  </span>
                  {" "}
                  <span className="text-[#1CA186]">
                    Us?
                  </span>
                </h2>
                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  Picking the right technology partner matters just as much as picking the right solution. We build high-caliber digital products designed to keep creating value for your business long after launch.
                </p>

                <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 mb-4">What You Can Expect</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl flex items-start space-x-3 shadow-sm">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-xs">Solutions shaped around your business, not a template</span>
                  </div>
                  <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl flex items-start space-x-3 shadow-sm">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-xs">Transparent pricing — no hidden costs, ever</span>
                  </div>
                  <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl flex items-start space-x-3 shadow-sm">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-xs">Modern, future-ready technology</span>
                  </div>
                  <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl flex items-start space-x-3 shadow-sm">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-xs">A dedicated project manager in your corner</span>
                  </div>
                  <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl flex items-start space-x-3 shadow-sm">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-xs">On-time delivery, every time</span>
                  </div>
                  <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl flex items-start space-x-3 shadow-sm">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-xs">Ongoing support long after launch</span>
                  </div>
                  <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl flex items-start space-x-3 shadow-sm sm:col-span-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700 text-xs">Clear, consistent communication at every step</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200/80 p-4 rounded-2xl shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                    "We're not just here to check a project off the list — we're here to build solutions that help your business run smarter, grow faster, and outpace the competition."
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Frequently Asked Questions Section */}
      <section className="bg-[#1C3636] text-white py-16 px-6 sm:px-6 lg:px-8 border-t border-white/10 bg-gradient-to-bl from-[#152929] via-[#1C3636] to-[#0f1f1f]">
        <div className="max-w-6xl mx-auto">
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
  onClick={() => setIsPopupOpen(true)} className="inline-flex cursor-pointer items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-5 py-3 rounded-xl transition duration-300 shadow">
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

      {/* Final CTA Section */}
      <section className="bg-white text-gray-900 py-16 px-6 sm:px-6 lg:px-8 border-t border-gray-200 bg-gradient-to-b from-white via-gray-50 to-emerald-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[#1C3636]/5 border border-[#1C3636]/10 text-[#1C3636] font-semibold text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                Final CTA
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight">
                <span className="text-[#1C3636]">
                  Let's Build Something
                </span>
                {" "}
                <span className="text-[#1CA186]">
                  That Actually
                </span>
                {" "}
                <span className="text-[#0F766E]">
                  Moves the
                </span>
                {" "}
                <span className="text-[#1C3636]">
                  Needle
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're launching your very first digital product or reshaping your business with AI, we're ready to help you make it real. Let's talk about your goals and map out a solution built around your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)}
                  className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl transition duration-300 shadow-lg shadow-emerald-500/20 text-center text-xs sm:text-sm"
                >
                  Book Your Free Strategy Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
  type="button"
  onClick={() => setIsPopupOpen(true)}
                  className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#1C3636] border border-gray-300 font-bold px-5 py-3 rounded-xl transition duration-300 text-center text-xs sm:text-sm"
                >
                  Request Your Custom Proposal
                </motion.button>
              </div>
            </motion.div>

            {/* Unique Professional Graphic Layout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-xl">
                  <div className="relative rounded-2xl overflow-hidden mb-6 shadow-md group">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                      src="/Build-Something.jpg" 
                      alt="Professional collaboration and strategy" 
                      className="w-full h-[240px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-0.5">High-Performance Delivery</div>
                      <div className="text-xs font-medium text-gray-200">Scale your operations with cutting-edge engineering.</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl shadow-sm">
                      <div className="text-emerald-600 font-black text-xl mb-1">100%</div>
                      <div className="text-xs text-gray-600 font-medium">Tailored Architecture</div>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-2xl shadow-sm">
                      <div className="text-emerald-600 font-black text-xl mb-1">24/7</div>
                      <div className="text-xs text-gray-600 font-medium">Strategic Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


 <Popup
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>

    </div>
  );
}