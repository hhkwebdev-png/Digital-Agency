"use client";
import React, { useState } from "react";
import Popup from "@/components/Popup";
import Link from "next/link";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Check,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Clock,
  Sparkles,
  Target,
  Cog,
  BarChart3
} from "lucide-react";

// ==============================
// HELPER COMPONENTS & STYLES
// ==============================

// 1. Magnetic Framer Wrapper for buttons
const MagneticButton = ({ children }) => {
  const ref = React.useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });



  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const bounds = ref.current.getBoundingClientRect();
    const middleX = bounds.left + bounds.width / 2;
    const middleY = bounds.top + bounds.height / 2;
    const x = clientX - middleX;
    const y = clientY - middleY;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  const springOpts = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springOpts);
  const springY = useSpring(y, springOpts);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

// 2. 3D Tilt Card Wrapper
const TiltCard = ({ children }) => {
  const ref = React.useRef(null);

  const x = useSpring(0, { stiffness: 400, damping: 30 });
  const y = useSpring(0, { stiffness: 400, damping: 30 });

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const rX = ((mouseY - height / 2) / height) * -20; 
    const rY = ((mouseX - width / 2) / width) * 20;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: x,
        rotateY: y,
        perspective: 1000,
      }}
      className="rounded-2xl h-full"
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

// ==============================
// ANIMATION VARIANTS
// ==============================

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerWord = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpSection = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// ==============================
// MAIN COMPONENT
// ==============================

export default function AIAutomationPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How fast can you set up an AI automation?",
      a: "Most starter automations and workflows go live within 1 to 3 weeks. More complex multi-system setups are broken down into clear phases so you see value immediately."
    },
    {
      q: "Do I need technical skills or a dedicated IT team?",
      a: "Not at all. We build, test, and manage the entire setup inside the tools you already use. Your team just enjoys the time saved."
    },
    {
      q: "Will this replace my existing software stack?",
      a: "No. Our automations plug directly into your current CRM, inbox, calendar, and spreadsheets without any forced software switches."
    },
    {
      q: "What happens if an automation breaks or needs updates?",
      a: "We provide dedicated support windows with every package and offer ongoing maintenance plans so your systems stay sharp as your business grows."
    }
  ];

  const heroHeadline = "Let AI Run the Busywork. You Run the Business.".split(" ");

  return (
    <div className="font-sans antialiased overflow-x-hidden min-h-screen bg-white text-[#1C3636]">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="bg-white py-12 sm:py-12 px-6 sm:px-6 lg:px-8 border-b border-gray-100 relative">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#1CA186]/10 border border-[#1CA186]/20 px-3.5 py-1.5 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-[#1CA186]" />
                <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase">
                  AI Automation Services
                </span>
              </motion.div>

              <motion.h1 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C3636] leading-[1.1] tracking-tight"
              >
                {heroHeadline.map((word, index) => (
                  <motion.span key={index} variants={staggerWord} className="inline-block mr-2.5 last:mr-0">
                    {word === "Busywork." ? (
                      <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-xl"
              >
                We build done-for-you AI automation systems that handle the repetitive stuff — data entry, follow-ups, scheduling, reporting, and more — so your team gets hours back every week.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <MagneticButton>
  <button
    type="button"
    onClick={() => setIsPopupOpen(true)}
    className="bg-[#1CA186] hover:bg-[#15836d] text-white font-bold text-xs sm:text-sm px-7 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#1CA186]/20 cursor-pointer w-full"
  >
    <span>Get My Free Automation Audit</span>
    <ArrowRight className="w-4 h-4" />
  </button>
</MagneticButton>
                <a
                  href="#what-we-automate"
                  className="bg-white border border-[#1C3636]/15 text-[#1C3636] font-semibold text-xs sm:text-sm px-5 py-4 rounded-xl transition-all duration-300 text-center hover:bg-gray-50 flex items-center justify-center gap-2"
                >
                  <span>See What We Automate</span>
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 shadow-2xl h-[380px] bg-gray-50">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="AI Automation Working"
                  className="w-full h-full object-cover"
                />
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 p-3.5 bg-[#1C3636]/90 backdrop-blur-md border border-[#1CA186]/30 rounded-xl shadow-2xl flex items-center justify-between text-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#1CA186] text-white shadow-md">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">Automated Systems Active</p>
                      <p className="text-[10px] text-gray-300 font-mono">Continuous AI execution in background</p>
                    </div>
                  </div>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1CA186] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#1CA186]"></span>
                  </span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE PROBLEM                                            */}
      {/* ========================================================= */}
      <section className="bg-[#1C3636] text-white py-16 px-6 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto space-y-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpSection}
            className="space-y-2 text-center max-w-2xl mx-auto"
          >
            <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-0.5 rounded-full border border-[#1CA186]/20 inline-block">
              THE PROBLEM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              You didn't start this business to <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">do data entry</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Right now, somewhere in your company, a real person is doing a robot's job:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3">
            {[
              { num: "01", desc: "Manually following up with leads (so most never get followed up at all)" },
              { num: "02", desc: "Copy-pasting the same info between your CRM, inbox, and spreadsheets" },
              { num: "03", desc: "Answering the same 10 customer questions, over and over" },
              { num: "04", desc: "Spending hours building reports that are outdated the moment they're done" },
              { num: "05", desc: "Watching good leads go cold because no one replied fast enough" },
              { num: "06", desc: "None of this is a 'hire more people' problem. It's a 'missing system' problem." },
            ].map((problem, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="cursor-pointer overflow-hidden relative transition-all duration-500 hover:-translate-y-2 w-full min-h-[160px] bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/[0.08] hover:border-[#1CA186]/60 flex flex-col justify-between group shadow-xl before:absolute before:inset-x-0 before:top-[-4px] hover:before:top-0 before:duration-500 before:h-1 before:bg-[#1CA186]"
              >
                <div className="space-y-4">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#1CA186] bg-[#1CA186]/10 px-3 py-1 rounded-lg border border-[#1CA186]/20 inline-block">
                    BOTTLENECK {problem.num}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal">{problem.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE SOLUTION                                           */}
      {/* ========================================================= */}
      <section className="bg-white text-[#1C3636] py-16 px-6 sm:px-8 lg:px-12 border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-200/80 shadow-xl h-[380px] bg-gray-50 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                  alt="AI Solution Working"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-0.5 rounded-full border border-[#1CA186]/20 inline-block">
                  THE SOLUTION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C3636] tracking-tight">
                  We plug <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">AI directly</span> into how you already work
                </h2>
              </div>

              <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-6 space-y-4 shadow-sm">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  We design lean, smart automations that sit inside the tools you already have — your CRM, your inbox, your website, your spreadsheets — and quietly do the boring work in the background.
                </p>
                <div className="pt-3 border-t border-gray-200 text-xs font-bold text-[#1CA186]">
                  You get the same outcome as hiring a small team. Without the payroll.
                </div>
              </div>

              <div>
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1CA186] hover:bg-[#15836d] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#1CA186]/20 cursor-pointer"
>
  <span>Get My Free Automation Audit</span>
  <ArrowRight className="w-4 h-4" />
</button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WHAT WE AUTOMATE (With 3D Tilt Cards)                  */}
      {/* ========================================================= */}
      <section id="what-we-automate" className="bg-[#1C3636] text-white py-16 px-6 sm:px-8 lg:px-12 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto space-y-8">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-0.5 rounded-full border border-[#1CA186]/20 inline-block">
              CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              What We <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Automate</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lead Capture & Follow-Up",
                tagline: "Never let a hot lead go cold again.",
                image: "/Lead-Capture.jpg",
                items: ["AI chat agents that qualify leads 24/7", "Instant lead scoring", "Automatic follow-ups"],
              },
              {
                title: "Customer Support",
                tagline: "Answer faster. Staff less.",
                image: "/Customer-Support.jpg",
                items: ["AI support agents for instant replies", "Auto-tagging and routing for tickets", "Bots trained on your FAQs"],
              },
              {
                title: "Sales & CRM",
                tagline: "A pipeline that updates itself.",
                image: "/Sales-&-CRM.jpg",
                items: ["Auto follow-up sequences", "CRM entries created automatically", "Reminders that move on their own"],
              },
              {
                title: "Internal Operations",
                tagline: "Stop being the human glue.",
                image: "/Internal-Operations.jpg",
                items: ["Your apps talk to each other", "Reports and dashboards build themselves", "Onboarding and invoicing on autopilot"],
              },
              {
                title: "Content & Marketing",
                tagline: "Create more, manage less.",
                image: "/Content-Marketing.jpg",
                items: ["AI-assisted content drafting", "Auto-scheduled posting across platforms", "Personalized campaigns at scale"],
              },
              {
                title: "Custom AI Builds",
                tagline: "Got a custom workflow?",
                image: "/Custom-AI-Builds.jpg",
                items: ["Custom AI agents built for you", "API integrations between any tools", "Fully bespoke solutions"],
              },
            ].map((card, idx) => (
              <TiltCard key={idx}>
                <div className="rounded-2xl bg-white text-[#1C3636] border border-gray-100 overflow-hidden shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <div className="h-36 overflow-hidden relative">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-1">
                      <h3 className="text-base font-bold text-[#1C3636]">{card.title}</h3>
                      <p className="text-xs font-semibold text-[#1CA186]">{card.tagline}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <ul className="space-y-2 border-t border-gray-100 pt-3 text-xs text-gray-600">
                      {card.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#1CA186] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

     {/* ========================================================= */}
      {/* 5. HOW IT WORKS                                           */}
      {/* ========================================================= */}
      <section className="bg-white text-[#1C3636] py-6 px-6 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto space-y-8">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-0.5 rounded-full border border-[#1CA186]/20 inline-block">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C3636] tracking-tight">
              How <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">It</span> Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Free Automation Audit", desc: "We dig into your workflows and find where you lose time." },
              { step: "2", title: "Your Custom Blueprint", desc: "A clear, plain-English plan outlining timelines and savings." },
              { step: "3", title: "We Build It", desc: "We deploy systems inside your existing tools seamlessly." },
              { step: "4", title: "You Watch It Work", desc: "We launch, test, and fine-tune until it runs smoothly." },
              { step: "5", title: "We Stay On", desc: "Ongoing support and optimizations as you grow." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#1C3636] text-white border border-[#1C3636] rounded-2xl p-6 h-[180px] flex flex-col justify-between shadow-md relative overflow-hidden group cursor-pointer"
              >
                {/* Default View (Step & Title visible) */}
                <div className="flex flex-col justify-between h-full transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-4">
                  <div className="w-8 h-8 rounded-xl bg-[#1CA186] text-white flex items-center justify-center font-mono font-bold text-xs">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                </div>

                {/* Hover View (Description slides up and replaces title smoothly) */}
                <div className="absolute inset-0 p-6 bg-[#162f2f] border border-[#1CA186]/40 rounded-2xl flex flex-col justify-center space-y-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-[10px] font-mono font-bold text-[#1CA186] uppercase tracking-wider">{item.title}</span>
                  <p className="text-xs text-gray-200 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      
{/* ========================================================= */}
      {/* 6. WHY BUSINESSES CHOOSE US                               */}
      {/* ========================================================= */}
      <section className="bg-[#1C3636] text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-3"
            >
              <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-0.5 rounded-full border border-[#1CA186]/20 inline-block">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Why Businesses <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Choose Us</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We're here to build automation that actually fits your business — quickly, reliably, and with real results.
              </p>

              <div>
                <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center gap-2 bg-[#1CA186] hover:bg-[#15836d] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#1CA186]/20 cursor-pointer"
>
  <span>Get My Free Automation Audit</span>
  <ArrowRight className="w-4 h-4" />
</button>
              </div>
            </motion.div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Built around you, not a template",
                "Live in 1–3 weeks",
                "Works with what you already have",
                "We track real metrics & hours saved",
                "A partner, not a one-off vendor",
                "Transparent pricing and timelines"
              ].map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative overflow-hidden flex items-start gap-3.5 bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#1CA186] hover:shadow-[0_12px_30px_-10px_rgba(28,161,134,0.3)] group"
                >
                  {/* Subtle background glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1CA186]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="w-8 h-8 rounded-lg bg-[#1CA186]/10 border border-[#1CA186]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#1CA186] group-hover:scale-110">
                    <Check className="w-4 h-4 text-[#1CA186] transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <span className="text-xs sm:text-sm text-gray-200 font-semibold leading-relaxed transition-colors duration-300 group-hover:text-white pt-1">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* ========================================================= */}
      {/* 7. REAL IMPACT                                          */}
      {/* ========================================================= */}
      <section className="bg-white text-[#1C3636] py-6 px-6 sm:px-8 lg:px-12 border-b border-gray-100 overflow-visible">
        <div className="max-w-[1240px] mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 text-center max-w-2xl mx-auto"
          >
            <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-0.5 rounded-full border border-[#1CA186]/20 inline-block">
              RESULTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C3636]">
              Real Impact, Not Just <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">Promises</span>
            </h2>
          </motion.div>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-6 pb-6">
            {[
              { stat: "10–40+ hours saved per month" },
              { stat: "Response times cut from hours to seconds" },
              { stat: "Lower operating overhead costs" },
              { stat: "Fewer dropped leads & missed follow-ups" },
              { stat: "Room to scale without added headcount" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex items-center justify-center"
              >
                <div className="p-6 rounded-2xl bg-gray-50 text-[#1C3636] border border-gray-200/80 text-center flex items-center justify-center w-full h-[140px] transition-all duration-300 ease-in-out hover:scale-125 hover:z-30 hover:shadow-2xl hover:bg-white hover:border-[#1CA186]">
                  <div className="text-xs sm:text-sm font-bold text-[#1C3636] leading-relaxed">{stat.stat}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. PACKAGES & PRICING                                     */}
      {/* ========================================================= */}
      <section className="bg-[#1C3636] text-white py-6 px-6 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-[1240px] mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-0.5 rounded-full border border-[#1CA186]/20 inline-block">
              PRICING
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Simple, Transparent <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Packages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between space-y-6 shadow-xl backdrop-blur-xl">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold font-mono px-3 py-1 rounded-full bg-[#1CA186]/20 text-[#1CA186]">STARTER</span>
                <h3 className="text-lg font-bold text-white">One workflow, fully automated</h3>
                <ul className="space-y-2.5 text-xs text-gray-300 border-t border-white/10 pt-4">
                  <li>✓ 1 automation built and tested</li>
                  <li>✓ 30 days of support included</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border-2 border-[#1CA186] p-8 flex flex-col justify-between space-y-6 shadow-2xl relative text-white backdrop-blur-xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1CA186] text-white text-[9px] font-mono font-black px-3 py-1 rounded-full uppercase">Most Popular</span>
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold font-mono px-3 py-1 rounded-full bg-[#1CA186]/20 text-[#1CA186]">GROWTH</span>
                <h3 className="text-lg font-bold text-white">Automate across multiple workflows</h3>
                <ul className="space-y-2.5 text-xs text-gray-300 border-t border-white/10 pt-4">
                  <li>✓ 3–5 automations + integrations</li>
                  <li>✓ 60 days of support + optimization</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between space-y-6 shadow-xl backdrop-blur-xl">
              <div className="space-y-4">
                <span className="inline-block text-[10px] font-bold font-mono px-3 py-1 rounded-full bg-[#1CA186]/20 text-[#1CA186]">CUSTOM</span>
                <h3 className="text-lg font-bold text-white">Built around your operation</h3>
                <ul className="space-y-2.5 text-xs text-gray-300 border-t border-white/10 pt-4">
                  <li>✓ Custom AI agents & deep integrations</li>
                  <li>✓ Dedicated ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. FAQ                                                    */}
      {/* ========================================================= */}
      <section className="bg-white text-[#1C3636] py-6 px-6 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase bg-[#1CA186]/10 px-3 py-1 rounded-full border border-[#1CA186]/20 inline-block">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1C3636]">
                Got questions? We've got <span className="bg-gradient-to-r from-[#1CA186] to-[#0F766E] bg-clip-text text-transparent">clear answers.</span>
              </h2>
              <p>
                Still on the fence? That's normal — automation can feel like a big step if you've never done it before. Here are the honest answers to what most business owners ask us before getting started. 
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border rounded-2xl overflow-hidden bg-white shadow-sm border-gray-200">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-6 py-4.5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-[#1C3636]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center font-mono text-[10px]">0{idx + 1}</span>
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-3 ml-9">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. FINAL CALL TO ACTION (CTA) - FULL WIDTH BACKGROUND    */}
      {/* ========================================================= */}
      <section className="w-full bg-[#1C3636] text-white py-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#1CA186]/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1240px] mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#1CA186]/15 border border-[#1CA186]/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#1CA186]" />
              <span className="text-[11px] font-mono font-bold text-[#1CA186] tracking-wider uppercase">
                Ready to scale your operations?
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Stop Losing Time to <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Manual Tasks</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
              Book your free 15-minute automation audit today. We'll identify your single biggest operational bottleneck and lay out a custom plan.
            </p>

            <div className="pt-2 flex justify-center">
              <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1CA186] hover:bg-[#15836d] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-2xl shadow-[#1CA186]/40 cursor-pointer"
>
  <span>Get My Free Automation Audit</span>
  <ArrowRight className="w-4 h-4" />
</button>
            </div>
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