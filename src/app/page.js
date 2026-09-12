"use client"; 

import { useState } from 'react'; 
import Popup from "@/components/Popup";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Zap, 
  Globe, 
  Cpu, 
  Code2, 
  Database, 
  Layers, 
  Cloud, 
  Server, 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  MessageSquare, 
  Monitor, 
  Settings, 
  TrendingUp, 
  AlertCircle, 
  Milestone,
  ArrowDown,
  Target, 
  Lightbulb, 
  CodeXml, 
  Infinity as InfinityIcon,
  Stethoscope, 
  UserCheck, 
  Briefcase, 
  ArrowUpRight,
  Sparkles, 
  BarChart2, 
  ShieldCheck, 
  Handshake,
  Star,
  Rocket, 
  Building2, 
  GraduationCap, 
  ShoppingBag, 
  ShoppingCart, 
  ChevronDown
} from "lucide-react";

export default function Hero() {

const [isPopupOpen, setIsPopupOpen] = useState(false);

const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    service: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: "", error: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setStatus({
        loading: false,
        success: "Message sent successfully! We'll be in touch soon.",
        error: "",
      });

      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        service: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: "",
        error: err.message || "Something went wrong.",
      });
    }
  };

  const technologies = [
    { name: 'React', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Node.js', icon: <Server className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6" /> },
    { name: 'OpenAI', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Google Cloud', icon: <Cloud className="w-6 h-6" /> },
    { name: 'Amazon Web Services', icon: <Layers className="w-6 h-6" /> },
  ];

  const infiniteTechList = [...technologies, ...technologies, ...technologies];

  const challenges = [
    "Time-consuming manual processes that reduce productivity",
    "Slow customer support leading to lost opportunities",
    "Difficulty generating and managing quality leads",
    "Outdated websites that fail to convert visitors",
    "Lack of automation causing operational inefficiencies",
    "Limited visibility and weak digital presence"
  ];

  const solutions = [
    "AI-powered automation to streamline repetitive tasks",
    "Intelligent chatbots and AI agents for instant customer engagement",
    "Lead generation systems that capture and nurture prospects",
    "Modern, high-converting websites designed for growth",
    "Custom software solutions tailored to business workflows",
    "Data-driven digital strategies to increase visibility and performance"
  ];

  const services = [
    {
      title: "AI Automation",
      description: "Automate repetitive tasks and streamline workflows to improve efficiency and productivity.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "AI Agents",
      description: "Intelligent AI agents that handle customer support, sales, and business operations 24/7.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "AI Chatbots",
      description: "Engage visitors instantly, answer questions, and convert leads automatically.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites designed to enhance user experience and drive conversions.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built to match your business processes and goals.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "SEO & Lead Generation",
      description: "Increase online visibility, attract qualified leads, and grow your customer base.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "We take the time to understand your business, objectives, and challenges to identify the opportunities that will create the greatest impact.",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Our team develops a tailored roadmap, combining AI, technology, and proven digital strategies aligned with your business goals.",
      icon: <Target className="w-5 h-5" />
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "We design, build, and deploy high-quality solutions with a focus on performance, scalability, and user experience.",
      icon: <CodeXml className="w-5 h-5" />
    },
    {
      number: "04",
      title: "Optimization & Growth",
      description: "After launch, we continuously refine and optimize your solution to maximize results and support long-term business growth.",
      icon: <InfinityIcon className="w-5 h-5" />
    }
  ];

  const features = [
    {
      title: "AI-First Thinking",
      description: "Every solution is built with modern AI capabilities, ensuring your business stays ahead of technological shifts.",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      title: "Business-Focused",
      description: "We care about outcomes, not just deliverables. Our strategies are tied directly to your growth metrics.",
      icon: <BarChart2 className="w-5 h-5" />
    },
    {
      title: "Custom Built",
      description: "No generic templates or one-size-fits-all software. Every asset is tailored to your exact workflows.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "Long-Term Partner",
      description: "We support your growth beyond project completion, acting as an extension of your technical team.",
      icon: <Handshake className="w-5 h-5" />
    }
  ];

  const industries = [
    { name: "Startups", icon: <Rocket className="w-5 h-5" /> },
    { name: "Healthcare", icon: <Stethoscope className="w-5 h-5" /> },
    { name: "Real Estate", icon: <Building2 className="w-5 h-5" /> },
    { name: "Education", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Retail", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Professional Services", icon: <Briefcase className="w-5 h-5" /> },
    { name: "E-Commerce", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Technology", icon: <Cpu className="w-5 h-5" /> }
  ];

  const [openIndex, setOpenIndex] = useState(null);


  const reviews = [
    {
      text: "Working with this team completely transformed our online presence. They delivered a modern website, streamlined our customer journey, and helped us generate more qualified leads. Their professionalism, communication, and attention to detail exceeded our expectations.",
      author: "Sarah Mitchell",
      role: "Marketing Director"
    },
    {
      text: "The AI automation solutions they implemented saved our team countless hours every week. Tasks that once required manual effort are now fully automated, allowing us to focus on growing the business. The results were immediate and measurable.",
      author: "Michael Anderson",
      role: "Operations Manager"
    },
    {
      text: "From strategy to execution, the entire process was seamless. Their team understood our goals, delivered a high-performing digital solution, and provided ongoing support after launch. We couldn't be happier with the outcome.",
      author: "David Roberts",
      role: "Founder & CEO"
    }
  ];

  const [activeFaq, setActiveFaq] = useState(0);

const faqs = [
  { q: "What services do you offer?", a: "We provide a range of digital solutions including web development, web design, AI automation, AI chatbots, SEO, lead generation, content writing, and custom software development." },
  { q: "Do you work with businesses of all sizes?", a: "Yes. We work with startups, small businesses, growing companies, and established organizations, tailoring our solutions to meet their specific goals and requirements." },
  { q: "How long does it take to complete a project?", a: "Project timelines vary depending on complexity and scope. Smaller websites may take a few weeks, while larger custom solutions may require additional time. A detailed timeline is provided before every project begins." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We can refresh your existing website with a modern design, improved performance, better user experience, and enhanced functionality." },
  { q: "How can AI automation benefit my business?", a: "AI automation helps reduce manual work, improve efficiency, streamline workflows, enhance customer experiences, and allow your team to focus on higher-value tasks." },
  { q: "Do you provide SEO services?", a: "Yes. Our SEO services help improve search engine visibility, increase organic traffic, and attract qualified leads to your website." },
  { q: "Will my website be mobile-friendly?", a: "Yes. Every website we build is fully responsive and optimized to provide an excellent experience across desktops, tablets, and mobile devices." },
  { q: "Do you offer ongoing support after project completion?", a: "Yes. We provide ongoing maintenance, updates, technical support, and optimization services to ensure your digital solutions continue to perform effectively." },
  { q: "Can you build custom AI chatbots for my business?", a: "Yes. We design and develop AI chatbots tailored to your business, trained on your data to handle customer support, lead generation, and engagement." },
  { q: "What industries do you work with?", a: "We work across various industries including healthcare, real estate, e-commerce, education, professional services, and more, tailoring solutions to each industry's needs." },
  { q: "How much does a project cost?", a: "Costs vary based on project scope, features, and complexity. We provide a detailed quote after understanding your requirements during an initial consultation." },
  { q: "How do I get started?", a: "Simply reach out through our contact form or book a free consultation. We'll discuss your goals and recommend the right solution for you." }
];

  return (
    <>
     {/* 1. HERO SECTION (DARK)[cite: 3] */}

<section className="relative bg-[#1C3636] text-[#F9FAFA] overflow-hidden px-6 pt-6">

  {/* HERO MAIN CONTENT[cite: 3] */}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      max-w-[1380px]
      w-full
      mx-auto
      px-6
      sm:px-6
      lg:px-12
      pt-6
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-12
      lg:gap-10
    "
  >


    {/* LEFT CONTENT[cite: 3] */}

<div
  className="
    flex-1
    max-w-[620px]
    z-10
  "
>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pb-4 text-3xl sm:text-5xl font-extrabold leading-[1.2] tracking-tight"
      >
              <span className="text-[#F9FAFA]">Transforming Ideas </span>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Into Digital Success

              </span>
            </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="
        text-[16px]
        font-normal
        leading-[1.8]
        max-w-xl
        mb-8
        text-[#F9FAFA]/90
        "
      >
       We help businesses build a powerful online presence through expert web development, strategic marketing, AI-powered automation, and compelling content. Our solutions are designed to boost engagement, generate quality leads, and fuel long-term, sustainable growth.
      </motion.p>



      {/* CTA BUTTONS[cite: 3] */}

<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex flex-col sm:flex-row gap-3 mb-8"
>

   <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="inline-flex items-center cursor-pointer justify-center rounded-xl bg-[#1CA186] px-4 py-2 text-sm font-medium text-[#1C3636] transition-all duration-300 hover:bg-[#178C73]"
>
  Book a Strategy Call
</button>

<button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="
    inline-flex
    items-center
    justify-center
    px-4
    py-2
    rounded-xl
    border
    border-[#F9FAFA]/20
    text-[#F9FAFA]
    text-sm
    font-medium
    hover:bg-[#F9FAFA]/10
    transition-all
    duration-300
    cursor-pointer
  "
>
  View Case Studies
</button>


      </motion.div>
      {/* PROFESSIONAL TRUST BADGE CARDS[cite: 3] */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            
            {/* Google Rating Card[cite: 3] */}
            <div className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:border-[#1CA186]/60 hover:bg-white/[0.1]">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-8.87z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.15v3.14C3.15 21.3 7.23 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.62H1.15C.42 8.09 0 9.75 0 12s.42 3.91 1.15 5.38l4.12-3.14z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.15 2.7 1.15 6.62l4.12 3.14c.95-2.85 3.6-4.96 6.73-4.96z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex text-amber-400 text-[11px] tracking-tight">★★★★★</div>
                <span className="text-xs font-bold text-[#F9FAFA] tracking-wide">4.9/5 Google Rating</span>
              </div>
            </div>

            {/* Trustpilot Card[cite: 3] */}
            <div className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:border-[#1CA186]/60 hover:bg-white/[0.1]">
              <div className="w-8 h-8 rounded-xl bg-[#00b67a] flex items-center justify-center shadow-sm shrink-0">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 0l3.708 7.51 8.292 1.206-6 5.848 1.416 8.268-7.416-3.9-7.416 3.9 1.416-8.268-6-5.848 8.292-1.206z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#F9FAFA] tracking-wide leading-tight">Trustpilot</span>
                <span className="text-[10px] font-medium text-[#F9FAFA]/70">Verified Reviews</span>
              </div>
            </div>

            {/* Elite Security / Verified Partner Card (Replaced 3rd card)[cite: 3] */}
            <div className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:border-[#1CA186]/60 hover:bg-white/[0.1]">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#F9FAFA] tracking-wide leading-tight">Secure & Verified</span>
                <span className="text-[10px] font-medium text-emerald-400">100% Protected</span>
              </div>
            </div>

          </motion.div>


    </div>




    {/* HERO IMAGE[cite: 3] */}

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="
    flex-1
    flex
    justify-center
    lg:justify-end
    items-center
    z-10
  "
>
  {/* IMAGE[cite: 3] */}

<div
  className="
    relative
    flex
    justify-center
    items-center
    w-full
    max-w-[560px]
  "
>
  {/* Hero Image[cite: 3] */}
  <img
    src="/Hero-1.png"
    alt="Digital Agency"
    className="
      w-full
      max-w-[500px]
      object-contain
      rounded-2xl
      relative
      z-10
    "
  />

  {/* Top Left[cite: 3] */}
  <div
    className="
      absolute
      top-15
      left-20
      z-20
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-lg
      px-2.5
      py-1.5
      shadow-lg
    "
  >
    <p className="text-xs font-medium text-white whitespace-nowrap">
      🏆 50+ Projects Delivered
    </p>
  </div>

  {/* Top Right[cite: 3] */}
  <div
    className="
      absolute
      top-20
      right-15
      z-20
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-lg
      px-2.5
      py-1.5
      shadow-lg
    "
  >
    <p className="text-xs font-medium text-white whitespace-nowrap">
      ⭐ 4.9/5 Client Rating
    </p>
  </div>

  {/* Bottom Left[cite: 3] */}
  <div
    className="
      absolute
      bottom-30
      left-3
      z-20
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-lg
      px-2.5
      py-1.5
      shadow-lg
    "
  >
    <p className="text-xs font-medium text-white whitespace-nowrap">
      🤝 98% Client Retention
    </p>
  </div>

  {/* Bottom Right[cite: 3] */}
  <div
    className="
      absolute
      bottom-20
      right-5
      z-20
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-lg
      px-2.5
      py-1.5
      shadow-lg
    "
  >
    <p className="text-xs font-medium text-white whitespace-nowrap">
      🔒 Trusted by Industry Leaders
    </p>
  </div>

</div>
</motion.div>
</motion.div>






{/* CONTACT FORM SECTION */}


<form
  onSubmit={handleSubmit}
  className="
    max-w-[1380px]
    w-full
    mx-auto
    px-6
    sm:px-8
    lg:px-12
    pt-6
    pb-6
  "
>
  <div className="w-full p-0 bg-transparent">

    {/* FORM LINE 1 */}

    <div
      className="
        flex
        flex-col
        lg:flex-row
        items-center
        gap-4
      "
    >

      {/* YOUR NAME */}

      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="
          w-full
          lg:flex-1
          px-4
          py-3
          rounded-lg
          bg-[#F9FAFA]/10
          border
          border-[#F9FAFA]/20
          text-white
          placeholder:text-[#F9FAFA]/50
          text-sm
          outline-none
        "
      />

      {/* EMAIL */}

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
        className="
          w-full
          lg:flex-1
          px-4
          py-3
          rounded-lg
          bg-[#F9FAFA]/10
          border
          border-[#F9FAFA]/20
          text-white
          placeholder:text-[#F9FAFA]/50
          text-sm
          outline-none
        "
      />

      {/* COMPANY */}

      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        className="
          w-full
          lg:flex-1
          px-4
          py-3
          rounded-lg
          bg-[#F9FAFA]/10
          border
          border-[#F9FAFA]/20
          text-white
          placeholder:text-[#F9FAFA]/50
          text-sm
          outline-none
        "
      />

    </div>

    {/* FORM LINE 2 */}

    <div
      className="
        flex
        flex-col
        lg:flex-row
        items-center
        gap-4
        mt-4
      "
    >

      {/* PHONE */}

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="
          w-full
          lg:flex-1
          px-4
          py-3
          rounded-lg
          bg-[#F9FAFA]/10
          border
          border-[#F9FAFA]/20
          text-white
          placeholder:text-[#F9FAFA]/50
          text-sm
          outline-none
        "
      />

      {/* SERVICE */}

      <div className="relative w-full lg:flex-1">

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="
            w-full
            px-4
            py-3
            pr-10
            rounded-lg
            bg-[#F9FAFA]/10
            border
            border-[#F9FAFA]/20
            text-[#F9FAFA]
            text-sm
            outline-none
            appearance-none
            cursor-pointer
          "
        >
          <option
            value=""
            disabled
            className="bg-[#1C3636] text-white"
          >
            Select Service
          </option>

          <option
            value="Web Development"
            className="bg-[#1C3636] text-white"
          >
            Web Development
          </option>

          <option
            value="Web Designing"
            className="bg-[#1C3636] text-white"
          >
            Web Designing
          </option>

          <option
            value="SEO"
            className="bg-[#1C3636] text-white"
          >
            SEO
          </option>

          <option
            value="AI Automation"
            className="bg-[#1C3636] text-white"
          >
            AI Automation
          </option>

          <option
            value="AI Chatbot"
            className="bg-[#1C3636] text-white"
          >
            AI Chatbot
          </option>

          <option
            value="Content Writing"
            className="bg-[#1C3636] text-white"
          >
            Content Writing
          </option>

          <option
            value="Blog Writing"
            className="bg-[#1C3636] text-white"
          >
            Blog Writing
          </option>
        </select>

        <ChevronDown
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            w-5
            h-5
            text-[#F9FAFA]/50
            pointer-events-none
          "
        />

      </div>

      {/* SUBMIT BUTTON */}

      <button
        type="submit"
        disabled={status.loading}
        className="
          w-full
          lg:w-auto
          px-8
          py-3
          rounded-lg
          bg-[#1CA186]
          hover:bg-[#178C73]
          text-[#1C3636]
          text-[16px]
          font-semibold
          transition
          cursor-pointer
          disabled:opacity-60
          disabled:cursor-not-allowed
        "
      >
        {status.loading ? "Sending..." : "Submit"}
      </button>

    </div>

    {/* SUCCESS */}

    {status.success && (
      <p className="mt-4 text-sm text-[#a7f3d0]">
        {status.success}
      </p>
    )}

    {/* ERROR */}

    {status.error && (
      <p className="mt-4 text-sm text-red-400">
        {status.error}
      </p>
    )}

  </div>
</form>





  {/* CORPORATE STATS BAR[cite: 3] */}

<div className="w-full overflow-hidden border-y border-[#F9FAFA]/10 bg-[#F9FAFA]/5 backdrop-blur-xl py-4">

  <div className="flex w-max animate-custom-marquee">


    {/* FIRST SET[cite: 3] */}
    <div className="flex">

      {[
        {
          icon: "🏆",
          title: "50+ Projects"
        },
        {
          icon: "⭐",
          title: "99% Satisfaction"
        },
        {
          icon: "🌍",
          title: "Global Clients"
        },
        {
          icon: "🤖",
          title: "AI-First Systems"
        }
      ].map((item,index)=>(

        <div
          key={`first-${index}`}
          className="
          flex
          items-center
          gap-3
          min-w-[220px]
          px-6
          "
        >

          <span className="text-xl">
            {item.icon}
          </span>

          <span className="text-sm font-semibold text-[#F9FAFA]">
            {item.title}
          </span>

        </div>

      ))}

    </div>




    {/* SECOND SET[cite: 3] */}
    <div className="flex">

      {[
        {
          icon: "🏆",
          title: "50+ Projects"
        },
        {
          icon: "⭐",
          title: "99% Satisfaction"
        },
        {
          icon: "🌍",
          title: "Global Clients"
        },
        {
          icon: "🤖",
          title: "AI-First Systems"
        }
      ].map((item,index)=>(

        <div
          key={`second-${index}`}
          className="
          flex
          items-center
          gap-3
          min-w-[220px]
          px-6
          "
        >

          <span className="text-xl">
            {item.icon}
          </span>

          <span className="text-sm font-semibold text-[#F9FAFA]">
            {item.title}
          </span>

        </div>

      ))}

    </div>





    {/* THIRD SET[cite: 3] */}
    <div className="flex">

      {[
        {
          icon: "🏆",
          title: "50+ Projects"
        },
        {
          icon: "⭐",
          title: "99% Satisfaction"
        },
        {
          icon: "🌍",
          title: "Global Clients"
        },
        {
          icon: "🤖",
          title: "AI-First Systems"
        }
      ].map((item,index)=>(

        <div
          key={`third-${index}`}
          className="
          flex
          items-center
          gap-3
          min-w-[220px]
          px-6
          "
        >

          <span className="text-xl">
            {item.icon}
          </span>

          <span className="text-sm font-semibold text-[#F9FAFA]">
            {item.title}
          </span>

        </div>

      ))}

    </div>


  </div>

</div>


</section>


{/* 3. PROBLEMS & SOLUTIONS[cite: 3] */}

<section
  className="
    w-full
    bg-[#F9FAFA]
    text-[#1C3636]
    p-6
    sm:px-6
    lg:px-16
    relative
    overflow-hidden
  "
>

  <div className="max-w-[1380px] w-full mx-auto">


    {/* HEADING[cite: 3] */}

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >

      <span
        className="
          inline-flex
          items-center
          px-3
          py-2
          rounded-xl
          bg-[#1CA186]/10
          text-[#1CA186]
          text-xs
          uppercase
          font-bold
          tracking-widest
          shadow-sm
        "
      >
        Problem → Solution
      </span>


      <h2
        className="
          text-3xl
          md:text-5xl
          font-extrabold
          mt-4
          max-w-3xl
          mx-auto
          leading-tight
          drop-shadow-sm
        "
      >

        <span className="text-[#1C3636]">
          Growing
        </span>

        {" "}

        <span className="text-[#1CA186]">
          a Business
        </span>

        {" "}

        <span className="text-[#0F766E]">
          Shouldn't Mean
        </span>

        {" "}

        <span className="text-[#1C3636]">
          Working More Hours
        </span>

      </h2>

    </motion.div>



    {/* CARDS[cite: 3] */}

    <div
      className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-3
        items-stretch
      "
    >


      {/* CHALLENGES CARD - DARK[cite: 3] */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          rounded-xl
          bg-[#1C3636]
          p-5
          shadow-lg
          shadow-[#1C3636]/20
          border
          border-[#F9FAFA]/10
        "
      >

        <h3
          className="
            text-sm
            font-bold
            mb-5
            text-[#F9FAFA]
            tracking-wide
            uppercase
          "
        >
          Challenges Businesses Face
        </h3>


        <ul className="space-y-4">

          {challenges.map((text, index) => (

            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="flex items-start gap-3"
            >

              <XCircle
                className="
                  w-5
                  h-5
                  text-red-400
                  shrink-0
                  mt-0.5
                "
              />


              <p
                className="
                  text-sm
                  md:text-base
                  text-[#F9FAFA]/90
                  font-medium
                "
              >
                {text}
              </p>

            </motion.li>

          ))}

        </ul>

      </motion.div>




      {/* SOLUTIONS CARD - WHITE[cite: 3] */}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          rounded-xl
          bg-white
          p-5
          shadow-lg
          shadow-[#1C3636]/10
          border
          border-[#1C3636]/10
        "
      >

        <h3
          className="
            text-sm
            font-bold
            mb-5
            text-[#1CA186]
            tracking-wide
            uppercase
          "
        >
          How We Solve Them
        </h3>


        <ul className="space-y-4">

          {solutions.map((text, index) => (

            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={index}
              className="flex items-start gap-3"
            >

              <CheckCircle2
                className="
                  w-5
                  h-5
                  text-[#1CA186]
                  shrink-0
                  mt-0.5
                "
              />


              <p
                className="
                  text-sm
                  md:text-base
                  text-[#1C3636]
                  font-semibold
                "
              >
                {text}
              </p>

            </motion.li>

          ))}

        </ul>

      </motion.div>


    </div>

  </div>

</section>

  {/* 4. SERVICES SECTION (DARK) */}
<section className="w-full bg-[#1C3636] text-[#F9FAFA] relative overflow-hidden p-6">
  <div className="max-w-[1380px] w-full mx-auto px-6 sm:px-8 lg:px-12 py-6">

    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">

      {/* Left Side */}
      <div className="max-w-3xl pl-2 lg:pl-4">

        <span className="inline-flex w-fit items-center rounded-xl border border-[#1CA186]/20 bg-[#1CA186]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1CA186]">
          Our Services
        </span>

        <h2 className="mt-5 text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.2] tracking-tight">
          <span className="text-[#F9FAFA]">Solutions Designed for </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
            Growth
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-[16px] leading-7 text-[#F9FAFA]/80">
          We provide innovative digital solutions designed to help businesses strengthen their online presence, streamline operations, attract more customers, and achieve sustainable growth.
        </p>

      </div>

      {/* Right Side Button */}
      <div className="hidden lg:flex flex-1 items-center justify-end pt-4 pr-8">

        <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
          className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-[#1CA186]
            px-7
            py-3.5
            text-[16px]
            font-semibold
            text-[#1C3636]
            transition-all
            duration-300
            hover:bg-[#22b998]
            hover:-translate-y-1
            hover:shadow-lg
            hover:shadow-[#1CA186]/30
            cursor-pointer
          "
        >
          Book a Free Consultation
        </button>

      </div>

    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {services.map((service, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          key={index}
          className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#244545] px-4 py-3.5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#1CA186] hover:shadow-[0_20px_60px_rgba(28,161,134,0.25)]"
        >
          {/* Animated Glow Backdrop Effect */}
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#1CA186]/10 blur-2xl transition-all duration-500 group-hover:bg-[#1CA186]/30 group-hover:scale-150"></div>

          <div className="relative z-10">

            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1CA186]/15 text-[#1CA186] transition-all duration-500 group-hover:bg-[#1CA186] group-hover:text-white group-hover:scale-110">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-[22px] font-bold text-white transition-colors duration-300 group-hover:text-[#1CA186]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-1.5 text-[16px] leading-7 text-white/75">
              {service.description}
            </p>

          </div>

          {/* Bottom Accent */}
          <div className="relative z-10 mt-3 h-[2px] w-12 rounded-full bg-[#1CA186] transition-all duration-500 group-hover:w-full"></div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

     {/* TRUSTED MARQUEE SECTION[cite: 3] */}

<section className="w-full bg-[#F9FAFA] px-6 py-2 border-b border-[#1C3636]/10 overflow-hidden">
  {/* FIRST ROW (Right → Left)[cite: 3] */}

  <div className="relative overflow-hidden mb-6 marquee-wrapper">

    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9FAFA] to-transparent z-10 pointer-events-none" />

    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9FAFA] to-transparent z-10 pointer-events-none" />


    <div className="flex w-max gap-8 marquee-left">

      {[...infiniteTechList, ...infiniteTechList].map((tech, index) => (

        <div
          key={`first-${index}`}
          className="
            flex
            items-center
            gap-3
            px-6
            py-2
            rounded-xl
            bg-white
            border
            border-[#1C3636]/10
            shadow-sm
            hover:border-[#1CA186]
            transition-all
            shrink-0
          "
        >

          <div className="text-[#1CA186]">
            {tech.icon}
          </div>

          <span className="text-sm font-bold tracking-wide text-[#1C3636]/90 whitespace-nowrap">
            {tech.name}
          </span>

        </div>

      ))}

    </div>

  </div>



  {/* SECOND ROW (Left → Right)[cite: 3] */}

  <div className="relative overflow-hidden marquee-wrapper">

    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9FAFA] to-transparent z-10 pointer-events-none" />

    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9FAFA] to-transparent z-10 pointer-events-none" />


    <div className="flex w-max gap-8 marquee-right">

      {[...infiniteTechList, ...infiniteTechList].map((tech, index) => (

        <div
          key={`second-${index}`}
          className="
            flex
            items-center
            gap-3
            px-6
            py-2
            rounded-xl
            bg-white
            border
            border-[#1C3636]/10
            shadow-sm
            hover:border-[#1CA186]
            transition-all
            shrink-0
          "
        >

          <div className="text-[#1CA186]">
            {tech.icon}
          </div>

          <span className="text-sm font-bold tracking-wide text-[#1C3636]/90 whitespace-nowrap">
            {tech.name}
          </span>

        </div>

      ))}

    </div>

  </div>

</section>


  {/* 5. REAL BUSINESS IMPACT SECTION[cite: 3] */}
<section className="relative w-full overflow-hidden bg-[#1C3636] p-6 text-[#F9FAFA]">

  {/* Background Decorative Radial Gradients[cite: 3] */}
  <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl"></div>
  <div className="pointer-events-none absolute -right-48 bottom-1/4 h-[500px] w-[500px] rounded-full bg-red-500/5 blur-3xl"></div>

  {/* Same Container as Hero[cite: 3] */}
  <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12">

    {/* Section Header[cite: 3] */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-8 max-w-4xl text-center"
    >

      <span className="inline-flex items-center justify-center rounded-xl border border-[#1CA186]/20 bg-[#1CA186]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1CA186]">
        What Success Looks Like
      </span>

      <h2 className="mt-5 text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.2] tracking-tight">
        <span className="text-[#F9FAFA]">Real Business </span>
        <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
          Impact
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-[#F9FAFA]/70">
        We focus on delivering solutions that create measurable improvements in efficiency, customer engagement, and business growth—helping organizations achieve lasting results through technology.
      </p>

    </motion.div>

    {/* Before • AI Image • After[cite: 3] */}
    <div className="mx-auto max-w-[1240px]">

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px_1fr] items-center gap-6">

        {/* BEFORE CARD[cite: 3] */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-xl border border-red-500/20 bg-[#224040] px-4 py-3.5 shadow-md transition-all duration-300 hover:border-red-500/40 hover:bg-[#254646]"
        >
          {/* Header[cite: 3] */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div>
              <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-red-400">
                01 / Legacy State
              </span>
              <h4 className="text-sm font-semibold text-white/90 mt-0.5">Before Automation</h4>
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded border border-red-500/30 bg-red-500/5 text-red-400">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Items[cite: 3] */}
          <div className="mt-3 space-y-1.5">
            {[
              "Manual customer support desk workflow",
              "Delayed query response and resolution times",
              "Lost revenue and high friction opportunities"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-2.5 py-0.5">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/80" />
                <p className="text-xs font-medium text-white/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MIDDLE IMAGE COLUMN (Completely cleaned of background and animations)[cite: 3] */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center py-4 lg:py-0"
        >
          <div className="h-40 w-40 md:h-48 md:w-48">
            <img 
              src="/Image.png" 
              alt="AI Integration Diagram" 
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>

        {/* AFTER CARD[cite: 3] */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-xl border border-[#1CA186]/20 bg-[#224040] px-4 py-3.5 shadow-md transition-all duration-300 hover:border-[#1CA186]/45 hover:bg-[#254646]"
        >
          {/* Header[cite: 3] */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
            <div>
              <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-[#1CA186]">
                02 / Optimized State
              </span>
              <h4 className="text-sm font-semibold text-white/90 mt-0.5">After Optimization</h4>
            </div>
            <div className="flex h-5 w-5 items-center justify-center rounded border border-[#1CA186]/30 bg-[#1CA186]/10 text-[#1CA186]">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Items[cite: 3] */}
          <div className="mt-3 space-y-1.5">
            {[
              "Autonomous 24/7 AI-powered support agent",
              "Instant response times and structured resolutions",
              "Continuous lead qualification and generation"
            ].map((text, idx) => (
              <div key={idx} className="flex items-start gap-2.5 py-0.5">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1CA186]" />
                <p className="text-xs font-medium text-white/75 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>

    {/* CTA[cite: 3] */}
    <div className="mt-8 text-center">

      <h3 className="text-[26px] sm:text-[30px] font-bold leading-none text-white">
        Ready to Make the Shift?
      </h3>

      <p className="mt-1 text-[16px] leading-6 text-white/70">
        See how AI-driven solutions can transform your business results.
      </p>

      <button
          type="button"
          onClick={() => setIsPopupOpen(true)}
          className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#1CA186] px-5 py-2.5 text-[15px] font-bold text-[#1C3636] transition-all duration-300 hover:-translate-y-1 hover:bg-[#22b998] hover:shadow-xl hover:shadow-[#1CA186]/25">
        Book a Free Consultation
      </button>

    </div>

  </div>

</section>

   {/* ===== PROCESS & TRUST SECTION ===== */}
<section className="relative w-full overflow-hidden bg-[#F9FAFA] p-6 border-b border-[#1C3636]/5">

  {/* Soft Background Ambient Elements */}
  <div className="absolute top-10 right-0 h-[300px] w-[300px] rounded-full bg-[#1CA186]/3 blur-[100px] pointer-events-none" />
  <div className="absolute bottom-10 left-0 h-[250px] w-[250px] rounded-full bg-[#1C3636]/3 blur-[90px] pointer-events-none" />

  <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
      
      {/* LEFT COLUMN: Header & Trust Indicators (Sidebar Style) */}
      <div className="lg:col-span-4 flex flex-col justify-between py-2">
        
        {/* Header Block */}
        <div>
          <span
        className="
          inline-flex
          items-center
          px-3
          py-2
          rounded-xl
          bg-[#1CA186]/10
          text-[#1CA186]
          text-xs
          uppercase
          font-bold
          tracking-widest
          shadow-sm
        "
      >
        Our Proccess
      </span>

          <h2 className="t text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold mt-4 max-w-3xl mx-auto leading-tight drop-shadow-sm">
            <span className="text-[#1C3636]">
              Growing
            </span>{" "}
            <span className="text-[#1CA186]">
              a Business
            </span>{" "}
            <span className="text-[#0F766E]">
              Shouldn't Mean
            </span>{" "}
            <span className="text-[#1C3636]">
              Working More Hours
            </span>
          </h2>

          <p className="mt-3 text-[13px] leading-relaxed text-[#4B5E5E]">
            We follow a strategic, client-focused roadmap that transforms concepts into impactful solutions, built to help businesses scale with absolute confidence.
          </p>

         <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#1CA186] px-5 py-2.5 text-[13px] font-bold text-[#1C3636] transition-all duration-300 hover:-translate-y-1 hover:bg-[#178C73] hover:shadow-lg"
          >
            Book a Free Consultation
          </button>
        </div>

      </div>

      {/* RIGHT COLUMN: 2x2 Compact Process Grid */}
      <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Card 1: DARK (Card 1 Corner-Fill Hover Effect) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative rounded-xl border border-white/5 bg-[#1C3636] p-5 shadow-md overflow-hidden z-0 transition-all duration-300 transform-gpu hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
        >
          {/* Expanding Corner Circle Fill */}
          <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-[#1CA186] z-[-1] transform scale-1 origin-center transition-transform duration-300 ease-out group-hover:scale-[22]" />

          <div className="flex items-start justify-between relative z-10">
            <div className="w-9 h-9 rounded-lg bg-white/5 text-[#1CA186] flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
              {steps[0].icon}
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white/5 transition-colors duration-300 group-hover:text-white/30">
              {steps[0].number}
            </span>
          </div>

          <div className="mt-4 relative z-10">
            <h3 className="text-[15px] font-bold text-[#F9FAFA] tracking-tight transition-colors duration-300 group-hover:text-white">
              {steps[0].title}
            </h3>
            <p className="text-[12px] leading-relaxed text-[#DCE5E5]/75 mt-1.5 font-normal transition-colors duration-300 group-hover:text-white">
              {steps[0].description}
            </p>
          </div>
        </motion.div>

        {/* Card 2: LIGHT (Card 1 Corner-Fill Hover Effect adapted for light theme) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative rounded-xl border border-[#DCE5E5]/60 bg-white/80 backdrop-blur-sm p-5 shadow-sm overflow-hidden z-0 transition-all duration-300 transform-gpu hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
        >
          {/* Expanding Corner Circle Fill */}
          <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-[#1CA186] z-[-1] transform scale-1 origin-center transition-transform duration-300 ease-out group-hover:scale-[22]" />

          <div className="flex items-start justify-between relative z-10">
            <div className="w-9 h-9 rounded-lg bg-[#1CA186]/5 text-[#1CA186] flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-[#1C3636]">
              {steps[1].icon}
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#1C3636]/5 transition-colors duration-300 group-hover:text-white/30">
              {steps[1].number}
            </span>
          </div>

          <div className="mt-4 relative z-10">
            <h3 className="text-[15px] font-bold text-[#1C3636] tracking-tight transition-colors duration-300 group-hover:text-[#1C3636]">
              {steps[1].title}
            </h3>
            <p className="text-[12px] leading-relaxed text-[#4B5E5E] mt-1.5 font-normal transition-colors duration-300 group-hover:text-[#1C3636]">
              {steps[1].description}
            </p>
          </div>
        </motion.div>

        {/* Card 3: LIGHT (Card 1 Corner-Fill Hover Effect adapted for light theme) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="group relative rounded-xl border border-[#DCE5E5]/60 bg-white/80 backdrop-blur-sm p-5 shadow-sm overflow-hidden z-0 transition-all duration-300 transform-gpu hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
        >
          {/* Expanding Corner Circle Fill */}
          <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-[#1CA186] z-[-1] transform scale-1 origin-center transition-transform duration-300 ease-out group-hover:scale-[22]" />

          <div className="flex items-start justify-between relative z-10">
            <div className="w-9 h-9 rounded-lg bg-[#1CA186]/5 text-[#1CA186] flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-[#1C3636]">
              {steps[2].icon}
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-[#1C3636]/5 transition-colors duration-300 group-hover:text-white/30">
              {steps[2].number}
            </span>
          </div>

          <div className="mt-4 relative z-10">
            <h3 className="text-[15px] font-bold text-[#1C3636] tracking-tight transition-colors duration-300 group-hover:text-[#1C3636]">
              {steps[2].title}
            </h3>
            <p className="text-[12px] leading-relaxed text-[#4B5E5E] mt-1.5 font-normal transition-colors duration-300 group-hover:text-[#1C3636]">
              {steps[2].description}
            </p>
          </div>
        </motion.div>

        {/* Card 4: DARK (Card 1 Corner-Fill Hover Effect) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="group relative rounded-xl border border-white/5 bg-[#1C3636] p-5 shadow-md overflow-hidden z-0 transition-all duration-300 transform-gpu hover:-translate-y-1 flex flex-col justify-between min-h-[190px]"
        >
          {/* Expanding Corner Circle Fill */}
          <div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-[#1CA186] z-[-1] transform scale-1 origin-center transition-transform duration-300 ease-out group-hover:scale-[22]" />

          <div className="flex items-start justify-between relative z-10">
            <div className="w-9 h-9 rounded-lg bg-white/5 text-[#1CA186] flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
              {steps[3].icon}
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white/5 transition-colors duration-300 group-hover:text-white/30">
              {steps[3].number}
            </span>
          </div>

          <div className="mt-4 relative z-10">
            <h3 className="text-[15px] font-bold text-[#F9FAFA] tracking-tight transition-colors duration-300 group-hover:text-white">
              {steps[3].title}
            </h3>
            <p className="text-[12px] leading-relaxed text-[#DCE5E5]/75 mt-1.5 font-normal transition-colors duration-300 group-hover:text-white">
              {steps[3].description}
            </p>
          </div>
        </motion.div>

      </div>

    </div>
  </div>
</section>



{/* ===== PORTFOLIO SHOWCASE SECTION ===== */}
<section className="relative w-full overflow-hidden bg-[#1C3636] py-6 px-6 border-b border-[#DCE5E5]/10 font-sans">

  {/* Ambient Studio Background Glows */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[350px] w-[600px] rounded-full bg-[#1CA186]/5 blur-[140px] pointer-events-none" />

  <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
    
    {/* Top Header Block: Centered Editorial Style */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <span
        className="
          inline-flex
          items-center
          px-3.5
          py-2
          rounded-xl
          bg-[#1CA186]/10
          text-[#1CA186]
          text-xs
          uppercase
          font-bold
          tracking-widest
          shadow-sm
        "
      >
        Featured Showcase
      </span>
      <h2 className="mt-4 text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.2] tracking-tight">
        <span className="text-[#F9FAFA]">Our Work </span>
        <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
          in Action
        </span>
      </h2>
      <p className="mt-4 text-[14px] leading-relaxed text-[#DCE5E5]/80">
        Every project tells a story of innovation, collaboration, and measurable results. Take a look at some of the solutions we've delivered for businesses across different industries, designed for growth, efficiency, and long-term value.
      </p>
      <div className="mt-6">
        <a 
          href="/portfolio" 
          className="inline-flex items-center gap-2 text-xs font-bold text-[#1CA186] uppercase tracking-wider group hover:text-[#24D6B5] transition-colors"
        >
          View Full Portfolio
          <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </div>
    </div>

    {/* Asymmetric Multi-Row Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

      {/* ================= FIRST ROW ================= */}

      {/* 1. Business Website (5/12 Cols) */}
      <div className="lg:col-span-5 group relative rounded-2xl bg-[#1C3636] p-8 overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border hover:border-[#1CA186]/50 hover:shadow-2xl hover:shadow-[#1CA186]/20 flex flex-col justify-between">
        {/* Slower speed (4.5s) and pauses on card hover (group-hover:[animation-play-state:paused]) */}
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] flex items-center justify-center pointer-events-none">
          <div className="w-[100px] h-[130%] bg-gradient-to-b from-[#1CA186] to-[#24D6B5] animate-[rotBGimg_4.5s_linear_infinite] group-hover:[animation-play-state:paused]" />
        </div>
        {/* Inner Card Mask (.card::after equivalent) */}
        <div className="absolute inset-[5px] rounded-[15px] bg-[#1C3636] z-[1]" />

        <div className="relative z-[2] flex flex-col justify-between flex-grow">
          <div>
            <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#1CA186]/30 group-hover:bg-[#1CA186]/5">
              <span className="text-2xl" role="img" aria-label="Business">🌐</span>
            </div>
            <h3 className="text-[17px] font-bold text-[#F9FAFA] tracking-tight group-hover:text-[#1CA186] transition-colors">
              Business Website
            </h3>
            <p className="text-[13px] leading-relaxed text-[#DCE5E5]/75 mt-3.5">
              Modern and responsive websites built to establish credibility, improve visibility, and generate new business opportunities.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[#1CA186]">
            <span className="group-hover:translate-x-0.5 transition-transform">Explore Solution</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* 2. Clinic Management Website (7/12 Cols) */}
      <div className="lg:col-span-7 group relative rounded-2xl bg-[#1C3636] p-8 overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border hover:border-[#1CA186]/50 hover:shadow-2xl hover:shadow-[#1CA186]/20 flex flex-col justify-between">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] flex items-center justify-center pointer-events-none">
          <div className="w-[100px] h-[130%] bg-gradient-to-b from-[#1CA186] to-[#24D6B5] animate-[rotBGimg_4.5s_linear_infinite] group-hover:[animation-play-state:paused]" />
        </div>
        <div className="absolute inset-[5px] rounded-[15px] bg-[#1C3636] z-[1]" />

        <div className="relative z-[2] flex flex-col justify-between flex-grow">
          <div>
            <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#1CA186]/30 group-hover:bg-[#1CA186]/5">
              <span className="text-xl" role="img" aria-label="Clinic">🩺</span>
            </div>
            <h3 className="text-[17px] font-bold text-[#F9FAFA] tracking-tight group-hover:text-[#1CA186] transition-colors">
              Clinic Management Website
            </h3>
            <p className="text-[13px] leading-relaxed text-[#DCE5E5]/75 mt-3.5 max-w-xl">
              Professional website for clinics and healthcare providers, featuring appointment booking, service information, and patient engagement tools built for operational scale.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[#1CA186]">
            <span>→</span>
          </div>
        </div>
      </div>

      {/* ================= SECOND ROW ================= */}

      {/* 3. Doctor Services Platform (4/12 Cols) */}
      <div className="lg:col-span-4 group relative rounded-2xl bg-[#1C3636] p-8 overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border hover:border-[#1CA186]/50 hover:shadow-2xl hover:shadow-[#1CA186]/20 flex flex-col justify-between">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] flex items-center justify-center pointer-events-none">
          <div className="w-[100px] h-[130%] bg-gradient-to-b from-[#1CA186] to-[#24D6B5] animate-[rotBGimg_4.5s_linear_infinite] group-hover:[animation-play-state:paused]" />
        </div>
        <div className="absolute inset-[5px] rounded-[15px] bg-[#1C3636] z-[1]" />

        <div className="relative z-[2] flex flex-col justify-between flex-grow">
          <div>
            <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#1CA186]/30 group-hover:bg-[#1CA186]/5">
              <span className="text-xl" role="img" aria-label="Doctor">👨‍⚕️</span>
            </div>
            <h3 className="text-[17px] font-bold text-[#F9FAFA] tracking-tight group-hover:text-[#1CA186] transition-colors">
              Doctor Services Platform
            </h3>
            <p className="text-[13px] leading-relaxed text-[#DCE5E5]/75 mt-3.5">
              A dedicated platform that helps doctors showcase their expertise and manage patient inquiries.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[#1CA186]">
            <span>→</span>
          </div>
        </div>
      </div>

      {/* 4. AI-Powered Business Solutions (4/12 Cols) */}
      <div className="lg:col-span-4 group relative rounded-2xl bg-[#1C3636] p-8 overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border hover:border-[#1CA186]/50 hover:shadow-2xl hover:shadow-[#1CA186]/20 flex flex-col justify-between">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] flex items-center justify-center pointer-events-none">
          <div className="w-[100px] h-[130%] bg-gradient-to-b from-[#1CA186] to-[#24D6B5] animate-[rotBGimg_4.5s_linear_infinite] group-hover:[animation-play-state:paused]" />
        </div>
        <div className="absolute inset-[5px] rounded-[15px] bg-[#1C3636] z-[1]" />

        <div className="relative z-[2] flex flex-col justify-between flex-grow">
          <div>
            <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#1CA186]/30 group-hover:bg-[#1CA186]/5">
              <span className="text-xl" role="img" aria-label="AI">🤖</span>
            </div>
            <h3 className="text-[17px] font-bold text-[#F9FAFA] tracking-tight group-hover:text-[#1CA186] transition-colors">
              AI-Powered Business Solutions
            </h3>
            <p className="text-[13px] leading-relaxed text-[#DCE5E5]/75 mt-3.5">
              Custom AI integrations and automation tools designed to improve efficiency.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[#1CA186]">
            <span>→</span>
          </div>
        </div>
      </div>

      {/* 5. Custom Management Dashboard (4/12 Cols) */}
      <div className="lg:col-span-4 group relative rounded-2xl bg-[#1C3636] p-8 overflow-hidden transition-all duration-300 transform-gpu hover:-translate-y-1 hover:border hover:border-[#1CA186]/50 hover:shadow-2xl hover:shadow-[#1CA186]/20 flex flex-col justify-between">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] flex items-center justify-center pointer-events-none">
          <div className="w-[100px] h-[130%] bg-gradient-to-b from-[#1CA186] to-[#24D6B5] animate-[rotBGimg_4.5s_linear_infinite] group-hover:[animation-play-state:paused]" />
        </div>
        <div className="absolute inset-[5px] rounded-[15px] bg-[#1C3636] z-[1]" />

        <div className="relative z-[2] flex flex-col justify-between flex-grow">
          <div>
            <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#1CA186]/30 group-hover:bg-[#1CA186]/5">
              <span className="text-xl" role="img" aria-label="Dashboard">📊</span>
            </div>
            <h3 className="text-[17px] font-bold text-[#F9FAFA] tracking-tight group-hover:text-[#1CA186] transition-colors">
              Custom Management Dashboard
            </h3>
            <p className="text-[13px] leading-relaxed text-[#DCE5E5]/75 mt-3.5">
              Interactive dashboards that help businesses track performance and manage data.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[#1CA186]">
            <span>→</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>


     {/* ===== 7. VALUE PROP & CORE FEATURES (LIGHT MODE - MOLINA ACCENT STYLE) =====[cite: 3] */}
<section className="w-full bg-white text-[#1C3636] p-6  sm:px-6 lg:px-12 relative overflow-hidden font-sans border-b border-slate-100">
  
  {/* Elegant Minimalist Background Accents[cite: 3] */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1CA186]/10 rounded-l-[100px] pointer-events-none" />

   <div className="container mx-auto max-w-7xl relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      
      {/* ================= LEFT SIDE: REDESIGNED FIRST CARD & CTA (5/12) ================= */}
      <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
        
        {/* New Minimalist First Card (Molina Editorial Frame)[cite: 3] */}
        <div className="relative rounded-3xl border-2 border-[#1C3636] bg-white p-4 overflow-hidden shadow-sm">
          {/* Top accent line representing the presentation slide layout[cite: 3] */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#1CA186]" />
          
          <div className="relative z-10 pt-4">
             <span
        className="
          inline-flex
          items-center
          px-3
          py-2
          rounded-xl
          bg-[#1CA186]/10
          text-[#1CA186]
          text-xs
          uppercase
          font-bold
          tracking-widest
          shadow-sm
        "
      >
        Why Choose Us
      </span>
            
            <h2
        className="
           text-[30px] sm:text-[36px] lg:text-[42px] 
          font-extrabold
          mt-4
          max-w-3xl
          mx-auto
          leading-tight
          drop-shadow-sm
        "
      >

        <span className="text-[#1C3636]">
          Built for 
        </span>

        {" "}

        <span className="text-[#1CA186]">
           Businesses 
        </span>

        {" "}

        <span className="text-[#0F766E]">
           That Want 
        </span>

        {" "}

        <span className="text-[#1C3636]">
           to Grow
        </span>

      </h2>
            
            <p className="mt-5 text-sm text-slate-600 leading-relaxed font-medium">
              Our focus is simple: deliver impactful solutions that drive real business outcomes. From digital strategy and web development to AI automation and lead generation, we help businesses move forward with confidence.
            </p>
          </div>
        </div>

        {/* Dynamic CTA Banner[cite: 3] */}
        <div className="p-8 rounded-3xl bg-[#1C3636] text-white space-y-4 shadow-xl shadow-[#1C3636]/10 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#1CA186]/20 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h4 className="text-lg font-bold">
              Ready to Build Something Smarter?
            </h4>
            <p className="text-xs text-slate-300 font-medium mt-1">
              Let's turn your ideas into AI-powered solutions built to last.
            </p>
            <div className="pt-4">
             <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
                className="inline-flex items-center justify-center rounded-xl bg-[#1CA186] px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#158069] hover:shadow-[0_4px_12px_rgba(28,161,134,0.3)] transform-gpu hover:-translate-y-0.5"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ================= RIGHT SIDE: STAGGERED LIST WITH PROPER HOVER STATES (7/12) ================= */}
      <div className="lg:col-span-7 flex flex-col gap-4">
        
        {/* 01. AI-First Thinking[cite: 3] */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-transparent bg-transparent transition-all duration-300 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-[0_8px_30px_rgba(28,161,134,0.04)] transform-gpu hover:-translate-y-0.5"
        >
          <div className="flex items-center sm:items-start justify-between sm:justify-start gap-4 shrink-0">
            <span className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-[#1CA186] transition-colors duration-300">
              01
            </span>
            <div className="w-10 h-10 rounded-lg bg-[#1CA186]/10 text-[#1CA186] flex items-center justify-center font-bold sm:hidden">
              <span className="text-lg">🤖</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">🤖</span>
              <h3 className="text-lg font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors duration-200">
                AI-First Thinking
              </h3>
            </div>
            <h3 className="text-lg font-bold text-[#1C3636] sm:hidden">AI-First Thinking</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl">
              Every solution is built with modern AI capabilities, helping you automate tasks, gain smarter insights, and stay ahead of the competition.
            </p>
          </div>
        </motion.div>

        {/* 02. Business-Focused[cite: 3] */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-transparent bg-transparent transition-all duration-300 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-[0_8px_30px_rgba(28,161,134,0.04)] transform-gpu hover:-translate-y-0.5"
        >
          <div className="flex items-center sm:items-start justify-between sm:justify-start gap-4 shrink-0">
            <span className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-[#1CA186] transition-colors duration-300">
              02
            </span>
            <div className="w-10 h-10 rounded-lg bg-[#1CA186]/10 text-[#1CA186] flex items-center justify-center font-bold sm:hidden">
              <span className="text-lg">📈</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">📈</span>
              <h3 className="text-lg font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors duration-200">
                Business-Focused
              </h3>
            </div>
            <h3 className="text-lg font-bold text-[#1C3636] sm:hidden">Business-Focused</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl">
              We care about outcomes, not just deliverables, ensuring every project drives real growth, efficiency, and measurable results for your business.
            </p>
          </div>
        </motion.div>

        {/* 03. Custom Built[cite: 3] */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-transparent bg-transparent transition-all duration-300 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-[0_8px_30px_rgba(28,161,134,0.04)] transform-gpu hover:-translate-y-0.5"
        >
          <div className="flex items-center sm:items-start justify-between sm:justify-start gap-4 shrink-0">
            <span className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-[#1CA186] transition-colors duration-300">
              03
            </span>
            <div className="w-10 h-10 rounded-lg bg-[#1CA186]/10 text-[#1CA186] flex items-center justify-center font-bold sm:hidden">
              <span className="text-lg">🛠️</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">🛠️</span>
              <h3 className="text-lg font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors duration-200">
                Custom Built
              </h3>
            </div>
            <h3 className="text-lg font-bold text-[#1C3636] sm:hidden">Custom Built</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl">
              No generic templates or one-size-fits-all solutions — every project is designed from scratch to match your exact business needs and goals.
            </p>
          </div>
        </motion.div>

        {/* 04. Long-Term Partner[cite: 3] */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-transparent bg-transparent transition-all duration-300 hover:bg-slate-50 hover:border-slate-200/80 hover:shadow-[0_8px_30px_rgba(28,161,134,0.04)] transform-gpu hover:-translate-y-0.5"
        >
          <div className="flex items-center sm:items-start justify-between sm:justify-start gap-4 shrink-0">
            <span className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-[#1CA186] transition-colors duration-300">
              04
            </span>
            <div className="w-10 h-10 rounded-lg bg-[#1CA186]/10 text-[#1CA186] flex items-center justify-center font-bold sm:hidden">
              <span className="text-lg">🤝</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-lg transform group-hover:scale-110 transition-transform duration-300">🤝</span>
              <h3 className="text-lg font-bold text-[#1C3636] group-hover:text-[#1CA186] transition-colors duration-200">
                Long-Term Partner
              </h3>
            </div>
            <h3 className="text-lg font-bold text-[#1C3636] sm:hidden">Long-Term Partner</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium max-w-xl">
              We support your growth beyond project completion, offering ongoing guidance, updates, and strategic support as your business continues to evolve.
            </p>
          </div>
        </motion.div>

      </div>

    </div>
  </div>
</section>


{/* 8-Industries Section */}
<section className="relative w-full bg-[#1C3636] text-[#F9FAFA] p-6 font-sans overflow-hidden border-b border-white/[0.05]">
 
  {/* Ambient background glow elements */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1CA186] opacity-[0.04] blur-[120px] pointer-events-none" />

  {/* Perfect horizontal and vertical layout container equality */}
  <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center">
    
    {/* ================= 1. CENTERED HEADER BLOCK ================= */}
    <div className="text-center max-w-4xl mx-auto mb-8 space-y-3">
      <span className="inline-flex items-center justify-center rounded-xl border border-[#1CA186]/20 bg-[#1CA186]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1CA186]">
        Industry 
      </span>
      <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.2] tracking-tight">
            <span className="text-[#F9FAFA]">Industries </span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              We Help
            </span>
          </h2>
      <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-7 text-[#F9FAFA]/70 font-normal">
        We construct lightweight, ultra-modern digital ecosystems customized precisely to match your system guidelines, complex architectures, and specialized customer expectations.
      </p>
    </div>

    {/* ================= 2. ALL 15 INDUSTRIES BALANCED GRID ================= */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full mb-6 perspective-[1000px]">
      {[
        { name: "Finance & Banking", icon: "🏛️" },
        { name: "Insurance", icon: "🛡️" },
        { name: "Legal Services", icon: "⚖️" },
        { name: "Hospitality & Travel", icon: "✈️" },
        { name: "Food & Restaurants", icon: "🍳" },
        { name: "Fitness & Wellness", icon: "💪" },
        { name: "Automotive", icon: "🚗" },
        { name: "Manufacturing", icon: "🏭" },
        { name: "Construction & Arch.", icon: "🏗️" },
        { name: "Nonprofit & NGOs", icon: "🌱" },
        { name: "Media & Entertainment", icon: "🎬" },
        { name: "Logistics & Supply", icon: "📦" },
        { name: "Energy & Utilities", icon: "⚡" },
        { name: "Beauty & Personal", icon: "✨" },
        { name: "SaaS & Software", icon: "💻" }
      ].map((item, idx) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: (idx % 5) * 0.05 }}
          key={idx}
          className="group flex flex-col items-center justify-center text-center h-[150px] w-[200px] bg-[#1C3636]  rounded-xl shadow-[0_0_20px_0px_#1C3636,inset_0_0_50px_0px_#1CA186] hover:shadow-[0_0_50px_0px_#1CA186,inset_5px_5px_20px_0px_#1CA186] transition-all duration-1000 transform-gpu [transform-style:preserve-3d] animate-rot"
        >
          <div className="w-12 h-12 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center text-sm mb-1.5 group-hover:bg-[#1CA186]/10 group-hover:border-[#1CA186]/20 transition-all duration-300">
            {item.icon}
          </div>
          <h4 className="text-[11px] font-bold text-[#1CA186] tracking-wide line-clamp-2 transition-all duration-500 opacity-0 group-hover:opacity-70 group-hover:scale-125 px-1">
            {item.name}
          </h4>
        </motion.div>
      ))}
    </div>

    {/* ================= 3. BOTTOM SPLIT CTA BLOCK ================= */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 w-full rounded-2xl overflow-hidden border border-white/[0.06] shadow-xl">
      
      {/* Left Accent Dark Block (Consulting/Expertise Details) */}
      <div className="md:col-span-8 bg-[#122222] p-8 flex flex-col justify-between items-start text-left space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
            Global Scale &amp; Dedicated Consulting
          </h3>
          <p className="text-xs md:text-sm text-[#DCE5E5]/60 max-w-xl leading-relaxed">
            Get comprehensive technological workflows tailored specifically around enterprise architectural needs, rigid regulatory frameworks, and optimized cross-border system strategies.
          </p>
        </div>
        <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1CA186] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#198f77] shadow-[0_4px_15px_rgba(28,161,134,0.1)] transform-gpu hover:-translate-y-0.5"
        >
          Schedule Consulting
          <span className="text-xs">↗</span>
        </button>
      </div>

      {/* Right Accent Light Highlight Block (Big Social Proof Metric) */}
      <div className="md:col-span-4 bg-[#1CA186]/10 border-t md:border-t-0 md:border-l border-white/[0.06] p-8 flex flex-col items-center justify-center text-center space-y-1">
        <img
          src="/Global-Client.avif"
          alt="Professionals collaborating across industries"
          className="h-28 w-full rounded-xl object-cover"
        />
        <span className="text-[11px] uppercase font-bold tracking-widest text-[#DCE5E5]/70">
          Global Clients Trusted
        </span>
        <span className="text-[10px] text-[#DCE5E5]/40 font-medium pt-1">
          Active Implementations
        </span>
      </div>

    </div>

  </div>
</section>


     {/* 9. REVIEWS / TESTIMONIALS (CLEAN PROFESSIONAL CARDS WITH HOVER)[cite: 3] */}
<section className="relative w-full bg-white text-[#1C3636] p-6 font-sans overflow-hidden border-b border-[#1C3636]/[0.05]">

  {/* Exact same container sizing & layout rules as requested[cite: 3] */}
  <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center">
    
    {/* ================= 1. CENTERED HEADER BLOCK ================= */}
    <div className="text-center max-w-3xl mx-auto mb-10">
      <span
        className="
          inline-flex
          items-center
          px-3
          py-2
          rounded-xl
          bg-[#1CA186]/10
          text-[#1CA186]
          text-xs
          uppercase
          font-bold
          tracking-widest
          shadow-sm
        "
      >
        Testimonial
      </span>
            
            <h2
        className="
           text-[30px] sm:text-[36px] lg:text-[42px] 
          font-extrabold
          mt-4
          max-w-3xl
          mx-auto
          leading-tight
          drop-shadow-sm
        "
      >

        <span className="text-[#1C3636]">
          Businesses  
        </span>

        {" "}

        <span className="text-[#1CA186]">
            Love 
        </span>

        {" "}

        <span className="text-[#0F766E]">
            Working With  
        </span>

        {" "}

        <span className="text-[#1C3636]">
            Us
        </span>

      </h2>
      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#1C3636]/60 max-w-2xl mx-auto">
        Discover how our tailored strategies empower teams to achieve operational excellence, digital transformation, and sustainable growth.
      </p>
    </div>

    {/* ================= 2. THREE-COLUMN WIREFRAME-STYLE GRID WITH HOVER EFFECTS ================= */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {reviews.map((rev, idx) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.15 }}
          key={idx}
          className="flex flex-col justify-between p-6 bg-white border border-[#1C3636]/10 rounded-lg shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-[#1CA186]/30"
        >
          {/* Top Section: Stars and Quote Text[cite: 3] */}
          <div>
            {/* 5-Star Rating Line[cite: 3] */}
            <div className="flex gap-0.5 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>

            {/* Testimonial Review Content[cite: 3] */}
            <p className="text-xs sm:text-[13px] text-[#1C3636]/75 leading-relaxed font-normal">
              "{rev.text}"
            </p>
          </div>

          {/* Bottom Section: Separator and Author Info[cite: 3] */}
          <div className="mt-6">
            {/* Clean Horizontal Divider Line[cite: 3] */}
            <div className="w-full h-[1px] bg-[#1C3636]/10 mb-4" />

            {/* Author Profile Layout[cite: 3] */}
            <div className="flex items-center gap-3">
              {/* Profile Image/Avatar Box[cite: 3] */}
              <div className="w-9 h-9 rounded-full bg-[#1C3636]/5 border border-[#1C3636]/10 flex items-center justify-center font-mono text-xs font-bold text-[#1CA186] shrink-0 overflow-hidden">
                {rev.image ? (
                  <img src={rev.image} alt={rev.author} className="w-full h-full object-cover" />
                ) : (
                  rev.author.charAt(0)
                )}
              </div>
              
              {/* Name & Designation Details[cite: 3] */}
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#1C3636] tracking-wide truncate">
                  {rev.author}
                </h4>
                <p className="text-[10px] text-[#1C3636]/50 font-medium tracking-wide mt-0.5 truncate">
                  {rev.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      {/* =========================================================================
    10. FREQUENTLY ASKED QUESTIONS SECTION (BG-DARK)
   ========================================================================= */}
<section className="relative w-full bg-[#1C3636] text-[#F9FAFA] p-6 overflow-hidden border-b border-white/[0.05]">
  
  {/* Background Decorative Gradients replicating node cloud glows[cite: 3] */}
  <div className="pointer-events-none absolute right-10 top-10 h-[400px] w-[400px] rounded-full bg-[#1CA186]/5 blur-3xl" />
  
  <div className="container mx-auto max-w-6xl relative z-10">
    {/* Changed items-start to items-center for vertical centering[cite: 3] */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      
      {/* Left Content Column[cite: 3] */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-3">
          <span className="inline-flex items-center justify-center rounded-xl border border-[#1CA186]/20 bg-[#1CA186]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1CA186]">
            FAQ's
          </span>
          <h2 className="mt-4 text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.2] tracking-tight">
            <span className="text-[#F9FAFA]"> Frequently </span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
              Asked Questions
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-[#F9FAFA]/70 max-w-md">
            Have questions about our services? Find quick answers below, or reach out directly and we'll be happy to help.
          </p>
        </div>

        <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
   className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1CA186] text-[#1C3636] px-5 py-2.5 text-xs font-bold cursor-pointer uppercase tracking-wider transition-all duration-300 hover:bg-[#22b998] shadow-md hover:-translate-y-0.5">
          Ask Us Anything
        </button>

        {/* Dynamic Answer Preview Panel — Redesigned Professional Version[cite: 3] */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#1A3333] to-[#142626] p-6 shadow-2xl backdrop-blur-md transition-all duration-300">
          
          {/* Subtle Top Accent Glow Line[cite: 3] */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1CA186]/40 to-transparent" />
          
          <div className="flex flex-col gap-4">
            {/* Question Header Area[cite: 3] */}
            <div className="space-y-1.5">
              <h4 className="text-sm font-semibold tracking-tight text-white leading-snug">
                {activeFaq !== null ? faqs[activeFaq].q : "Select a topic from the directory"}
              </h4>
            </div>

            {/* Answer Output Body[cite: 3] */}
            <p className="text-xs text-[#F9FAFA]/75 leading-relaxed font-normal bg-white/[0.02] border border-white/[0.02] p-3.5 rounded-xl">
              {activeFaq !== null ? faqs[activeFaq].a : "Click on any of the framework nodes on the right to read our answer directly within this active resolution console window."}
            </p>
          </div>
        </div>

      </div>

      {/* Right Interactive Node Grid Column[cite: 3] */}
      <div className="lg:col-span-7 flex flex-wrap gap-2.5 content-start lg:pl-4">
        {faqs.map((faq, idx) => {
          const isActive = activeFaq === idx;
          return (
            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              key={idx}
              onClick={() => setActiveFaq(idx)}
              className={`text-left text-xs px-4 py-3 rounded-full border transition-all duration-300 ease-out ${
                isActive
                  ? "bg-[#1CA186] border-[#1CA186] text-[#1C3636] font-bold shadow-lg shadow-[#1CA186]/10 scale-[1.02]"
                  : "bg-[#1A3131] border-white/[0.06] text-white/80 hover:border-[#1CA186]/40 hover:bg-[#203b3b]"
              }`}
            >
              {faq.q}
            </motion.button>
          );
        })}
      </div>

    </div>
  </div>
</section>


      {/* =========================================================================
    11. FINAL CTA SECTION (NO BACKGROUND)
   ========================================================================= */}
<section className="relative w-full text-[#1C3636] p-6 overflow-hidden">
  
  {/* Standard Alignment Layout Container[cite: 3] */}
  <div className="container mx-auto max-w-6xl relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[#1C3636]/10 rounded-2xl bg-gradient-to-br from-white to-[#F9FAFA] p-8 md:p-12 shadow-sm">
      
      {/* Left Strategy Core Context Column[cite: 3] */}
      <div className="lg:col-span-7 space-y-6">
        <div className="space-y-3">
          <h2
        className="
           text-[30px] sm:text-[36px] lg:text-[42px] 
          font-extrabold
          mt-4
          max-w-3xl
          mx-auto
          leading-tight
          drop-shadow-sm
        "
      >

        <span className="text-[#1C3636]">
          Ready  
        </span>

        {" "}

        <span className="text-[#1CA186]">
            to 
        </span>

        {" "}

        <span className="text-[#0F766E]">
            Grow Your  
        </span>

        {" "}

        <span className="text-[#1C3636]">
            Business
        </span>

      </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-[#1C3636]/70 max-w-xl">
            Ready to streamline operations, generate more leads, and accelerate business growth? Our AI-powered solutions are designed to help you work smarter, automate repetitive tasks, and create exceptional digital experiences that drive measurable results and long-term success.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
           <button
             type="button"
             onClick={() => setIsPopupOpen(true)} 
             className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-[#1CA186] px-5 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-md hover:bg-[#254646] hover:-translate-y-0.5">
              Book a Free Strategy Call
            </button>

            <button
              type="button"
              onClick={() => setIsPopupOpen(true)} 
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-white border border-[#1C3636]/20 px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#1C3636] transition-all duration-300 shadow-sm hover:border-[#1CA186] hover:text-[#1CA186] hover:-translate-y-0.5">
              Get a Custom Proposal
            </button>
          </div>
        </div>

        {/* Hardcoded Core Framework Value Promises Grid[cite: 3] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          
          <div className="flex items-center gap-3 group">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CA186]/10 text-[#1CA186] border border-[#1CA186]/20">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#1C3636]/80 group-hover:text-[#1CA186] transition-colors">
              Tailored Solutions for Your Business
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CA186]/10 text-[#1CA186] border border-[#1CA186]/20">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#1C3636]/80 group-hover:text-[#1CA186] transition-colors">
              AI-Powered Digital Innovation
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CA186]/10 text-[#1CA186] border border-[#1CA186]/20">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#1C3636]/80 group-hover:text-[#1CA186] transition-colors">
              Performance-Driven Strategies
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CA186]/10 text-[#1CA186] border border-[#1CA186]/20">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#1C3636]/80 group-hover:text-[#1CA186] transition-colors">
              Modern Design & Development
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CA186]/10 text-[#1CA186] border border-[#1CA186]/20">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#1C3636]/80 group-hover:text-[#1CA186] transition-colors">
              Dedicated Project Support
            </span>
          </div>

          <div className="flex items-center gap-3 group">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CA186]/10 text-[#1CA186] border border-[#1CA186]/20">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#1C3636]/80 group-hover:text-[#1CA186] transition-colors">
              Long-Term Growth Partnership
            </span>
          </div>

        </div>
      </div>

      {/* Right CTA Image Column[cite: 3] */}
      <div className="lg:col-span-5 w-full lg:pl-6">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
          alt="Business consultation in a professional workspace"
          className="h-full min-h-[260px] w-full rounded-xl object-cover"
        />
      </div>

    </div>
  </div>
</section>

 <Popup
  isOpen={isPopupOpen}
  onClose={() => setIsPopupOpen(false)}
/>
    </>
  );
}