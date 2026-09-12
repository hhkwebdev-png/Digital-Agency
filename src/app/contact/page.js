'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    website: '',
    service: 'AI Automation',
    budget: '',
    timeline: '',
    projectDetails: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: '',
      error: '',
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus({
        loading: false,
        success: 'Your inquiry has been sent successfully. We will contact you soon.',
        error: '',
      });

      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        website: '',
        service: 'AI Automation',
        budget: '',
        timeline: '',
        projectDetails: '',
      });
    } catch (error) {
      console.error('Contact form error:', error);

      setStatus({
        loading: false,
        success: '',
        error:
          error.message ||
          'Unable to send your inquiry. Please try again.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1C3636] text-white py-6 px-6 sm:px-6 lg:px-8 relative overflow-hidden font-sans">

      {/* Background Architectural Glow Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.07, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] pointer-events-none"
      />

      <main className="max-w-5xl mx-auto relative z-10 space-y-16">

        {/* Split Header Layout */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-6"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#1C3636] border border-teal-500/30 text-teal-300 text-xs font-semibold px-3.5 py-1.5 rounded-xl">
              <span />
              Contact Form / Project Inquiry
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-[#F9FAFA]">
                Tell Us About{' '}
              </span>

              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Your Project
              </span>
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-slate-300 text-base leading-relaxed font-light">
              Fill out the form below, and we'll review your requirements before
              reaching out with the best solution for your business. Share a few
              details about your goals and timeline so we can tailor our
              recommendations to fit your needs.
            </p>
          </div>
        </motion.header>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut',
          }}
          className="bg-[#112222] backdrop-blur-2xl rounded-2xl border border-teal-500/30 p-6 sm:p-12 shadow-2xl"
        >
          <form className="space-y-12" onSubmit={handleSubmit}>

            {/* Module 1: Identity */}
            <div className="space-y-6">

              <div className="flex items-center gap-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300">
                  Your Credentials
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#112222] border border-teal-500/30 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition text-sm outline-none"
                    placeholder="e.g. Jane Doe"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full bg-[#112222] border border-teal-500/30 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition text-sm outline-none"
                    placeholder="e.g. Innovate Inc."
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Business Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#112222] border border-teal-500/30 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition text-sm outline-none"
                    placeholder="jane@innovate.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#112222] border border-teal-500/30 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition text-sm outline-none"
                    placeholder="+1 (555) 987-6543"
                  />
                </div>

                {/* Website */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Website (Optional)
                  </label>

                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-[#112222] border border-teal-500/30 rounded-xl py-3.5 px-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition text-sm outline-none"
                    placeholder="https://innovate.com"
                  />
                </div>

              </div>
            </div>

            <hr className="border-teal-500/20" />

            {/* Module 2: Scope Selection */}
            <div className="space-y-6">

              <div className="flex items-center gap-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300">
                  Service Needed
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">

                {[
                  'AI Automation',
                  'AI Agents',
                  'AI Chatbots',
                  'Web Development',
                  'Web Design',
                  'Custom Software Development',
                  'SEO & Lead Generation',
                  'Other',
                ].map((service, index) => (

                  <label
                    key={service}
                    className="relative block cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="service"
                      value={service}
                      checked={formData.service === service}
                      onChange={handleChange}
                      className="sr-only peer"
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#112222] p-4 rounded-xl border border-teal-500/20 group-hover:border-emerald-400/50 peer-checked:border-emerald-400 peer-checked:bg-teal-950/50 transition-colors duration-200 h-full flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[90px]"
                    >

                      {/* Text blurs when selected */}
                      <span className="text-white font-medium text-xs sm:text-sm transition-all duration-200 peer-checked:blur-[3px] peer-checked:opacity-40">
                        {service}
                      </span>

                      {/* Circular checkmark */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none">
                        <div className="w-6 h-6 rounded-xl bg-emerald-400/20 border border-emerald-400/50 flex items-center justify-center shadow-lg">
                          <span className="text-emerald-400 text-xs font-bold leading-none">
                            ✓
                          </span>
                        </div>
                      </div>

                    </motion.div>
                  </label>

                ))}

              </div>

              {/* Dropdowns Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">

                {/* Budget */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Estimated Budget *
                  </label>

                  <div className="relative">

                    <select
                      name="budget"
                      value={formData.budget}
                      required
                      onFocus={() => setBudgetOpen(true)}
                      onBlur={() => setBudgetOpen(false)}
                      onChange={(e) => {
                        setBudgetOpen(false);
                        handleChange(e);
                      }}
                      className="w-full bg-[#112222] border border-teal-500/30 rounded-xl py-3.5 px-4 text-white cursor-pointer focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition appearance-none pr-12 text-sm outline-none"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#1C3636] text-slate-400"
                      >
                        Select range...
                      </option>

                      <option
                        value="Under $1,000"
                        className="bg-[#1C3636] text-white"
                      >
                        Under $1,000
                      </option>

                      <option
                        value="$1,000 – $5,000"
                        className="bg-[#1C3636] text-white"
                      >
                        $1,000 – $5,000
                      </option>

                      <option
                        value="$5,000 – $10,000"
                        className="bg-[#1C3636] text-white"
                      >
                        $5,000 – $10,000
                      </option>

                      <option
                        value="$10,000+"
                        className="bg-[#1C3636] text-white"
                      >
                        $10,000+
                      </option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-400">
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          budgetOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Project Timeline *
                  </label>

                  <div className="relative">

                    <select
                      name="timeline"
                      value={formData.timeline}
                      required
                      onFocus={() => setTimelineOpen(true)}
                      onBlur={() => setTimelineOpen(false)}
                      onChange={(e) => {
                        setTimelineOpen(false);
                        handleChange(e);
                      }}
                      className="w-full bg-[#112222] border border-teal-500/30 rounded-xl py-3.5 px-4 text-white cursor-pointer focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition appearance-none pr-12 text-sm outline-none"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#1C3636] text-slate-400"
                      >
                        Select timeline...
                      </option>

                      <option
                        value="ASAP"
                        className="bg-[#1C3636] text-white"
                      >
                        ASAP
                      </option>

                      <option
                        value="Within 1 Month"
                        className="bg-[#1C3636] text-white"
                      >
                        Within 1 Month
                      </option>

                      <option
                        value="1–3 Months"
                        className="bg-[#1C3636] text-white"
                      >
                        1–3 Months
                      </option>

                      <option
                        value="Flexible"
                        className="bg-[#1C3636] text-white"
                      >
                        Flexible
                      </option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-emerald-400">
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          timelineOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            <hr className="border-teal-500/20" />

            {/* Module 3: Deep Dive */}
            <div className="space-y-6">

              <div className="flex items-center gap-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300">
                  Project Details
                </h2>
              </div>

              <div>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-[#112222] border border-teal-500/30 rounded-xl p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition resize-none text-sm outline-none"
                  placeholder="Tell us about your business, your goals, and what you're looking to build."
                />
              </div>

            </div>

            {/* Success Message */}
            {status.success && (
              <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                {status.success}
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {status.error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center">

              <div className="w-full sm:w-auto flex justify-center">

                <motion.button
                  whileHover={{ scale: status.loading ? 1 : 1.02 }}
                  whileTap={{ scale: status.loading ? 1 : 0.98 }}
                  type="submit"
                  disabled={status.loading}
                  className="bg-gradient-to-r from-emerald-400 to-teal-300 text-[#112222] font-bold px-5 py-3 rounded-xl text-sm hover:opacity-90 transition-all duration-200 shadow-xl shadow-emerald-500/10 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >

                  <span>
                    {status.loading
                      ? 'Sending...'
                      : 'Send My Inquiry'}
                  </span>

                  {!status.loading && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  )}

                </motion.button>

              </div>
            </div>

          </form>
        </motion.div>

      </main>
    </div>
  );
};

export default ContactPage;
