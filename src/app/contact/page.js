"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
);

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

const COUNTRIES = [
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Türkiye", code: "+90", flag: "🇹🇷" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
];

const CONNECTION_METHODS = [
  "Video Call",
  "Phone Call",
  "Google Meet",
  "Zoom",
];

const INITIAL_SCHEDULE_FORM = {
  website: "",
  fullName: "",
  companyName: "",
  email: "",
  countryCode: "+92",
  phone: "",
  connectionMethod: "Video Call",
  message: "",
};

export default function ContactPage() {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);

  const [mainPhoneOpen, setMainPhoneOpen] = useState(false);
  const [schedulePhoneOpen, setSchedulePhoneOpen] = useState(false);

  const mainPhoneRef = useRef(null);
  const schedulePhoneRef = useRef(null);

  const [contactDetails] = useState({
    phone: "+92XXXXXXXXXX",
    email: "your@email.com",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "+92",
    phone: "",
    website: "",
    service: "",
    budget: "",
    timeline: "",
    projectDetails: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // ============================================================
  // SCHEDULE POPUP
  // ============================================================

  const [scheduleOpen, setScheduleOpen] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();

    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [scheduleForm, setScheduleForm] = useState(
    INITIAL_SCHEDULE_FORM
  );

  const [scheduleStatus, setScheduleStatus] = useState({
    type: "",
    message: "",
  });

  const [scheduleSubmitting, setScheduleSubmitting] = useState(false);

  // ============================================================
  // SERVICES
  // ============================================================

  const services = [
    "AI Automation",
    "AI Agents",
    "AI Chatbots",
    "Web Development",
    "Web Design",
    "Custom Software Development",
    "SEO & Lead Generation",
    "Content Writing",
    "Blog Writing",
    "Digital Transformation",
    "Other",
  ];

  const budgets = [
    "Under $1,000",
    "$1,000 – $5,000",
    "$5,000 – $10,000",
    "$10,000+",
  ];

  const timelines = [
    "ASAP",
    "Within 1 Month",
    "1–3 Months",
    "Flexible",
  ];

  // ============================================================
  // CLOSE PHONE DROPDOWNS WHEN CLICKING OUTSIDE
  // ============================================================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        mainPhoneRef.current &&
        !mainPhoneRef.current.contains(event.target)
      ) {
        setMainPhoneOpen(false);
      }

      if (
        schedulePhoneRef.current &&
        !schedulePhoneRef.current.contains(event.target)
      ) {
        setSchedulePhoneOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // ============================================================
  // BODY SCROLL LOCK + ESCAPE
  // ============================================================

  useEffect(() => {
    if (!scheduleOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeSchedulePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);

      document.body.style.overflow = originalOverflow;
    };
  }, [scheduleOpen]);

  // ============================================================
  // SAFE API RESPONSE PARSER
  // ============================================================

  const parseApiResponse = async (response) => {
    const responseText = await response.text();

    if (!responseText) {
      return {};
    }

    try {
      return JSON.parse(responseText);
    } catch (error) {
      console.error(
        "CONTACT API RETURNED NON-JSON RESPONSE:",
        responseText
      );

      throw new Error(
        response.status >= 500
          ? "The contact service is currently unavailable. Please try again later."
          : "The contact service returned an invalid response. Please check the /api/contact route."
      );
    }
  };

  // ============================================================
  // MAIN FORM
  // ============================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending your project inquiry...",
    });

    try {
      const fullPhone = `${formData.countryCode} ${formData.phone}`.trim();

      // ========================================================
      // SAVE PROJECT INQUIRY TO SUPABASE
      // ========================================================

      const { error: supabaseError } = await supabase
        .from("contact_submissions")
        .insert([
          {
            type: "contact",
            full_name: formData.fullName,
            company_name: formData.companyName || null,
            email: formData.email,
            country_code: formData.countryCode || null,
            phone: fullPhone || null,
            website: formData.website || null,
            service: formData.service || null,
            budget: formData.budget || null,
            timeline: formData.timeline || null,
            project_details: formData.projectDetails || null,
          },
        ]);

      if (supabaseError) {
        console.error(
          "SUPABASE CONTACT ERROR:",
          supabaseError
        );

        throw new Error(
          supabaseError.message ||
            "Unable to save your inquiry to Supabase."
        );
      }

      // ========================================================
      // SEND EMAIL THROUGH RESEND API
      // ========================================================

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: fullPhone,
          type: "contact",
        }),
      });

      const data = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Something went wrong while sending the email."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you. Your project inquiry has been sent successfully.",
      });

      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        countryCode: "+92",
        phone: "",
        website: "",
        service: "",
        budget: "",
        timeline: "",
        projectDetails: "",
      });

      setMainPhoneOpen(false);
      setBudgetOpen(false);
      setTimelineOpen(false);
    } catch (error) {
      console.error("CONTACT SUBMISSION ERROR:", error);

      setStatus({
        type: "error",
        message:
          error?.message ||
          "Unable to send your inquiry. Please try again.",
      });
    }
  };

  // ============================================================
  // SCHEDULE POPUP
  // ============================================================

  const openSchedulePopup = () => {
    setScheduleStatus({
      type: "",
      message: "",
    });

    setScheduleOpen(true);
  };

  const closeSchedulePopup = () => {
    if (scheduleSubmitting) return;

    setScheduleOpen(false);
    setSchedulePhoneOpen(false);
  };

  const handleScheduleChange = (event) => {
    const { name, value } = event.target;

    setScheduleForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ============================================================
  // CALENDAR
  // ============================================================

  const today = new Date();

  const isSameDay = (dateA, dateB) => {
    if (!dateA || !dateB) return false;

    return (
      dateA.getFullYear() === dateB.getFullYear() &&
      dateA.getMonth() === dateB.getMonth() &&
      dateA.getDate() === dateB.getDate()
    );
  };

  const isPastDate = (date) => {
    const comparisonDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    return date < comparisonDate;
  };

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [currentMonth]);

  const monthTitle = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );

    const minimumMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (previousMonth < minimumMonth) return;

    setCurrentMonth(previousMonth);
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    );
  };

  const selectDate = (date) => {
    if (!date || isPastDate(date)) return;

    setSelectedDate(date);

    setSelectedTime("");

    setScheduleStatus({
      type: "",
      message: "",
    });
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return "";

    return selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // ============================================================
  // SCHEDULE FORM SUBMIT
  // ============================================================

  const handleScheduleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedDate) {
      setScheduleStatus({
        type: "error",
        message: "Please select a date.",
      });

      return;
    }

    if (!selectedTime) {
      setScheduleStatus({
        type: "error",
        message: "Please select a time.",
      });

      return;
    }

    setScheduleSubmitting(true);

    setScheduleStatus({
      type: "loading",
      message: "Submitting your strategy call request...",
    });

    try {
      const fullPhone =
        `${scheduleForm.countryCode} ${scheduleForm.phone}`.trim();

      const appointmentDate = formatSelectedDate();

      // ========================================================
      // SAVE STRATEGY CALL REQUEST TO SUPABASE
      // ========================================================

      const { error: supabaseError } = await supabase
        .from("contact_submissions")
        .insert([
          {
            type: "schedule-call",
            full_name: scheduleForm.fullName,
            company_name: scheduleForm.companyName || null,
            email: scheduleForm.email,
            country_code: scheduleForm.countryCode || null,
            phone: fullPhone || null,
            website: scheduleForm.website || null,
            connection_method:
              scheduleForm.connectionMethod || null,
            message: scheduleForm.message || null,
            scheduled_date: appointmentDate || null,
            scheduled_time: selectedTime || null,
          },
        ]);

      if (supabaseError) {
        console.error(
          "SUPABASE SCHEDULE ERROR:",
          supabaseError
        );

        throw new Error(
          supabaseError.message ||
            "Unable to save your scheduling request to Supabase."
        );
      }

      // ========================================================
      // SEND SCHEDULE REQUEST THROUGH RESEND API
      // ========================================================

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...scheduleForm,
          phone: fullPhone,
          type: "schedule-call",
          scheduledDate: appointmentDate,
          scheduledTime: selectedTime,
        }),
      });

      const data = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Unable to submit your scheduling request."
        );
      }

      setScheduleStatus({
        type: "success",
        message:
          "Your strategy call request has been submitted successfully.",
      });

      setScheduleForm(INITIAL_SCHEDULE_FORM);

      setSelectedDate(null);
      setSelectedTime("");
      setSchedulePhoneOpen(false);
    } catch (error) {
      console.error(
        "SCHEDULE SUBMISSION ERROR:",
        error
      );

      setScheduleStatus({
        type: "error",
        message:
          error?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setScheduleSubmitting(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[#F9FAFA] text-[#1C3636]">

        {/* ======================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#1C3636] py-6">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#1CA186]/20 blur-3xl" />

          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#1CA186]/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="max-w-4xl"
            >
              <span className="inline-flex rounded-full border border-[#1CA186]/40 bg-[#1CA186]/10 px-4 py-2 text-sm font-semibold text-[#1CA186]">
                Let’s Work Together
              </span>

              <h1 className="mt-6 text-[30px] font-extrabold leading-tight text-white sm:text-[36px] lg:text-[42px]">
                Let’s Build Something That Matters
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
                Tell us what you are building, what you want to
                improve, or where your business is headed. Our team
                combines AI, technology, design, and human expertise
                to turn ambitious ideas into digital solutions that
                create measurable business value.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ======================================================
            THREE CONTACT CARDS
        ====================================================== */}

        <section className="py-6">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

            <div className="grid items-stretch gap-5 md:grid-cols-3">

              {/* CALL CARD */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex h-full flex-col rounded-xl border border-[#1C3636]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#1CA186]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1CA186]/10 text-[#1CA186]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <p className="mt-6 text-sm font-semibold text-[#1CA186]">
                  Call Us
                </p>

                <h2 className="mt-2 text-xl font-extrabold">
                  Let’s Talk
                </h2>

                <p className="mt-2 flex-1 text-sm leading-7 text-[#1C3636]/60">
                  Speak directly with our team about your project,
                  requirements, and business goals.
                </p>

                <a
                  href={`tel:${contactDetails.phone}`}
                  className="mt-6 flex h-[52px] cursor-pointer items-center justify-center rounded-xl bg-[#1CA186] px-5 text-sm font-bold text-white transition hover:bg-[#1CA186]/90"
                >
                  {contactDetails.phone}
                </a>
              </motion.div>

              {/* EMAIL CARD */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex h-full flex-col rounded-xl border border-[#1C3636]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#1CA186]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1CA186]/10 text-[#1CA186]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    />

                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <p className="mt-6 text-sm font-semibold text-[#1CA186]">
                  Email Us
                </p>

                <h2 className="mt-2 text-xl font-extrabold">
                  Start a Conversation
                </h2>

                <p className="mt-2 flex-1 text-sm leading-7 text-[#1C3636]/60">
                  Send us your requirements and our team will get
                  back to you with the next steps.
                </p>

                <a
                  href={`mailto:${contactDetails.email}`}
                  className="mt-6 flex h-[52px] cursor-pointer items-center justify-center rounded-xl bg-[#1CA186] px-5 text-sm font-bold text-white transition hover:bg-[#1CA186]/90"
                >
                  <span className="break-all">
                    {contactDetails.email}
                  </span>
                </a>
              </motion.div>

              {/* SCHEDULE CARD */}

              <motion.div
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex h-full flex-col rounded-xl border border-[#1C3636]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#1CA186]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1CA186]/10 text-[#1CA186]">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                    />

                    <line
                      x1="16"
                      x2="16"
                      y1="2"
                      y2="6"
                    />

                    <line
                      x1="8"
                      x2="8"
                      y1="2"
                      y2="6"
                    />

                    <line
                      x1="3"
                      x2="21"
                      y1="10"
                      y2="10"
                    />
                  </svg>
                </div>

                <p className="mt-6 text-sm font-semibold text-[#1CA186]">
                  Schedule
                </p>

                <h2 className="mt-2 text-xl font-extrabold">
                  Book a Strategy Call
                </h2>

                <p className="mt-2 flex-1 text-sm leading-7 text-[#1C3636]/60">
                  Choose a convenient date and time for a focused
                  conversation with our team.
                </p>

                <button
                  type="button"
                  onClick={openSchedulePopup}
                  className="mt-6 flex h-[52px] w-full cursor-pointer items-center justify-center rounded-xl bg-[#1CA186] px-5 text-sm font-bold text-white transition hover:bg-[#1CA186]/90"
                >
                  Choose Your Time →
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================================
            PROJECT INQUIRY
        ====================================================== */}

        <section className="py-6">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1CA186]">
                  Project Inquiry
                </p>

                <h2 className="mt-4 text-[30px] font-extrabold leading-tight sm:text-[36px] lg:text-[42px]">
                  Tell Us About Your Project
                </h2>

                <p className="mt-6 text-base leading-8 text-[#1C3636]/65">
                  Whether you need an AI-powered workflow, a
                  conversion-focused website, custom software, SEO,
                  content, or a complete digital transformation,
                  share the details below.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    "Clear project requirements",
                    "Practical technical recommendations",
                    "Transparent communication",
                    "Solutions built around business goals",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CA186] text-xs font-bold text-white">
                        ✓
                      </span>

                      <p className="text-sm font-medium leading-6">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* MAIN FORM */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="rounded-xl border border-[#1C3636]/10 bg-white p-6 shadow-sm sm:p-8"
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="fullName"
                        className="mb-2 block text-sm font-bold"
                      >
                        Full Name *
                      </label>

                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm outline-none transition focus:border-[#1CA186]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="companyName"
                        className="mb-2 block text-sm font-bold"
                      >
                        Company Name
                      </label>

                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm outline-none transition focus:border-[#1CA186]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm outline-none transition focus:border-[#1CA186]"
                      />
                    </div>

                    {/* MAIN PHONE */}

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-bold"
                      >
                        Phone Number
                      </label>

                      <div className="flex w-full overflow-visible rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] focus-within:border-[#1CA186]">

                        <div
                          ref={mainPhoneRef}
                          className="relative w-[105px] shrink-0"
                        >
                          <button
                            type="button"
                            onClick={() => {
                              setMainPhoneOpen(
                                (previous) => !previous
                              );

                              setSchedulePhoneOpen(false);
                            }}
                            className="flex h-full w-full cursor-pointer items-center justify-between rounded-l-xl border-r border-[#1C3636]/10 bg-transparent px-2 py-3.5 text-left text-sm font-semibold text-[#1C3636] outline-none transition"
                            aria-haspopup="listbox"
                            aria-expanded={mainPhoneOpen}
                            aria-label="Select country code"
                          >
                            <span className="truncate">
                              {
                                COUNTRIES.find(
                                  (country) =>
                                    country.code ===
                                    formData.countryCode
                                )?.flag
                              }{" "}
                              {formData.countryCode}
                            </span>

                            <span
                              className={`ml-1 flex shrink-0 items-center text-[#1C3636]/50 transition-transform duration-200 ${
                                mainPhoneOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            >
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </span>
                          </button>

                          <AnimatePresence>
                            {mainPhoneOpen && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  y: -5,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: -5,
                                }}
                                transition={{
                                  duration: 0.15,
                                }}
                                className="absolute left-0 top-full z-50 mt-2 max-h-64 w-[230px] overflow-y-auto rounded-xl border border-[#1C3636]/10 bg-white p-1 shadow-xl"
                                role="listbox"
                              >
                                {COUNTRIES.map((country) => (
                                  <button
                                    key={`${country.name}-${country.code}`}
                                    type="button"
                                    onClick={() => {
                                      setFormData(
                                        (previous) => ({
                                          ...previous,
                                          countryCode:
                                            country.code,
                                        })
                                      );

                                      setMainPhoneOpen(false);
                                    }}
                                    className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-[#1CA186]/10 ${
                                      formData.countryCode ===
                                      country.code
                                        ? "bg-[#1CA186]/10 font-semibold text-[#1CA186]"
                                        : "text-[#1C3636]"
                                    }`}
                                    role="option"
                                    aria-selected={
                                      formData.countryCode ===
                                      country.code
                                    }
                                  >
                                    <span>
                                      {country.flag}
                                    </span>

                                    <span className="flex-1">
                                      {country.name}
                                    </span>

                                    <span className="font-semibold">
                                      {country.code}
                                    </span>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="300 1234567"
                          className="min-w-0 flex-1 rounded-r-xl bg-transparent px-4 py-3.5 text-sm outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* WEBSITE */}

                  <div>
                    <label
                      htmlFor="website"
                      className="mb-2 block text-sm font-bold"
                    >
                      Website
                    </label>

                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm outline-none transition focus:border-[#1CA186]"
                    />
                  </div>

                  {/* SERVICE */}

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-bold"
                    >
                      What Do You Need? *
                    </label>

                    <div className="relative">

                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full cursor-pointer appearance-none rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 pr-10 text-sm outline-none transition focus:border-[#1CA186]"
                      >
                        <option value="">
                          Select a service
                        </option>

                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}
                      </select>

                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1C3636]/50">
                        ▼
                      </span>
                    </div>
                  </div>

                  {/* BUDGET + TIMELINE */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* BUDGET */}

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Project Budget
                      </label>

                      <div className="relative">

                        <button
                          type="button"
                          onClick={() =>
                            setBudgetOpen(!budgetOpen)
                          }
                          className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-left text-sm transition hover:border-[#1CA186]"
                        >
                          <span
                            className={
                              formData.budget
                                ? "text-[#1C3636]"
                                : "text-[#1C3636]/45"
                            }
                          >
                            {formData.budget ||
                              "Select budget"}
                          </span>

                          <span
                            className={`transition-transform ${
                              budgetOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        <AnimatePresence>
                          {budgetOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: -5,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -5,
                              }}
                              className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-xl border border-[#1C3636]/10 bg-white shadow-xl"
                            >
                              {budgets.map((budget) => (
                                <button
                                  key={budget}
                                  type="button"
                                  onClick={() => {
                                    setFormData(
                                      (previous) => ({
                                        ...previous,
                                        budget,
                                      })
                                    );

                                    setBudgetOpen(false);
                                  }}
                                  className="block w-full cursor-pointer px-4 py-3 text-left text-sm transition hover:bg-[#1CA186]/10"
                                >
                                  {budget}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* TIMELINE */}

                    <div>
                      <label className="mb-2 block text-sm font-bold">
                        Timeline
                      </label>

                      <div className="relative">

                        <button
                          type="button"
                          onClick={() =>
                            setTimelineOpen(!timelineOpen)
                          }
                          className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-left text-sm transition hover:border-[#1CA186]"
                        >
                          <span
                            className={
                              formData.timeline
                                ? "text-[#1C3636]"
                                : "text-[#1C3636]/45"
                            }
                          >
                            {formData.timeline ||
                              "Select timeline"}
                          </span>

                          <span
                            className={`transition-transform ${
                              timelineOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>

                        <AnimatePresence>
                          {timelineOpen && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: -5,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -5,
                              }}
                              className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-xl border border-[#1C3636]/10 bg-white shadow-xl"
                            >
                              {timelines.map((timeline) => (
                                <button
                                  key={timeline}
                                  type="button"
                                  onClick={() => {
                                    setFormData(
                                      (previous) => ({
                                        ...previous,
                                        timeline,
                                      })
                                    );

                                    setTimelineOpen(false);
                                  }}
                                  className="block w-full cursor-pointer px-4 py-3 text-left text-sm transition hover:bg-[#1CA186]/10"
                                >
                                  {timeline}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* PROJECT DETAILS */}

                  <div>
                    <label
                      htmlFor="projectDetails"
                      className="mb-2 block text-sm font-bold"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      required
                      rows={6}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, challenges, and what you would like us to build."
                      className="w-full resize-none rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm leading-7 outline-none transition focus:border-[#1CA186]"
                    />
                  </div>

                  {status.message && (
                    <div
                      className={`rounded-xl px-4 py-3 text-sm font-medium ${
                        status.type === "success"
                          ? "bg-[#1CA186]/10 text-[#1CA186]"
                          : status.type === "error"
                          ? "bg-[#1C3636]/10 text-[#1C3636]"
                          : "bg-[#F9FAFA] text-[#1C3636]/70"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className={`w-full rounded-xl px-6 py-4 text-base font-semibold text-white transition ${
                      status.type === "loading"
                        ? "cursor-not-allowed bg-[#1CA186]/60"
                        : "cursor-pointer bg-[#1CA186] hover:bg-[#1CA186]/90"
                    }`}
                  >
                    {status.type === "loading"
                      ? "Sending..."
                      : "Send Project Inquiry →"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ======================================================
            DIRECT CONVERSATION
        ====================================================== */}

        <section className="py-6">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

            <div className="rounded-xl bg-[#1C3636] px-6 py-14 text-center sm:px-10">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1CA186]">
                Prefer a Direct Conversation?
              </p>

              <h2 className="mt-4 text-[30px] font-extrabold text-white sm:text-[36px] lg:text-[42px]">
                Let’s Discuss Your Next Move
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/65">
                Choose a convenient time and speak with us directly
                about your business goals, technical challenges, and
                opportunities.
              </p>

              <motion.button
                type="button"
                onClick={openSchedulePopup}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-8 cursor-pointer rounded-xl bg-[#1CA186] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#1CA186]/90"
              >
                Schedule a Call →
              </motion.button>
            </div>
          </div>
        </section>

        {/* ======================================================
            BOTTOM CTA
        ====================================================== */}

        <section className="py-6">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 text-center sm:px-8 lg:px-12">

            <h2 className="text-[30px] font-extrabold sm:text-[36px] lg:text-[42px]">
              Ready to Turn Your Idea Into Reality?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#1C3636]/60">
              Start with a conversation. We will help you identify
              the right technology, strategy, and next steps.
            </p>

            <motion.button
              type="button"
              onClick={openSchedulePopup}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-8 cursor-pointer rounded-xl bg-[#1CA186] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#1CA186]/90"
            >
              Schedule a Strategy Call →
            </motion.button>
          </div>
        </section>
      </main>

      {/* ========================================================
          SCHEDULE POPUP
      ======================================================== */}

      <AnimatePresence>
        {scheduleOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1C3636]/75 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeSchedulePopup();
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.25,
              }}
              className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-2xl"
            >

              {/* POPUP HEADER */}

              <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#1C3636]/10 bg-white px-5 py-5 sm:px-7">

                <div>
                  <p className="text-sm font-bold text-[#1CA186]">
                    Strategy Call
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-[#1C3636]">
                    Book Your Conversation
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeSchedulePopup}
                  disabled={scheduleSubmitting}
                  aria-label="Close schedule popup"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-[#1C3636]/10 text-xl text-[#1C3636] transition ${
                    scheduleSubmitting
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer hover:border-[#1CA186] hover:text-[#1CA186]"
                  }`}
                >
                  ×
                </button>
              </div>

              <div className="p-5 sm:p-7">

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">

                  {/* ==================================================
                      CALENDAR + TIME
                  ================================================== */}

                  <div>

                    <div className="rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] p-5">

                      <div className="flex items-center justify-between">

                        <h3 className="text-lg font-extrabold text-[#1C3636]">
                          Select a date
                        </h3>

                        <div className="flex items-center gap-2">

                          <button
                            type="button"
                            onClick={goToPreviousMonth}
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#1C3636]/10 bg-white text-[#1C3636] transition hover:border-[#1CA186] hover:text-[#1CA186]"
                            aria-label="Previous month"
                          >
                            ←
                          </button>

                          <button
                            type="button"
                            onClick={goToNextMonth}
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#1C3636]/10 bg-white text-[#1C3636] transition hover:border-[#1CA186] hover:text-[#1CA186]"
                            aria-label="Next month"
                          >
                            →
                          </button>
                        </div>
                      </div>

                      <div className="mt-5 text-center text-base font-bold text-[#1C3636]">
                        {monthTitle}
                      </div>

                      <div className="mt-5 grid grid-cols-7 gap-1.5">

                        {[
                          "Sun",
                          "Mon",
                          "Tue",
                          "Wed",
                          "Thu",
                          "Fri",
                          "Sat",
                        ].map((day) => (
                          <div
                            key={day}
                            className="py-2 text-center text-[11px] font-bold uppercase text-[#1C3636]/40"
                          >
                            {day}
                          </div>
                        ))}

                        {calendarDays.map(
                          (date, index) => {
                            if (!date) {
                              return (
                                <div
                                  key={`empty-${index}`}
                                  className="h-10"
                                />
                              );
                            }

                            const disabled =
                              isPastDate(date);

                            const selected =
                              isSameDay(
                                date,
                                selectedDate
                              );

                            return (
                              <button
                                key={date.toISOString()}
                                type="button"
                                disabled={disabled}
                                onClick={() =>
                                  selectDate(date)
                                }
                                className={[
                                  "flex h-10 items-center justify-center rounded-xl text-sm font-semibold transition-all",
                                  disabled
                                    ? "cursor-not-allowed text-[#1C3636]/20"
                                    : selected
                                    ? "cursor-pointer bg-[#1CA186] text-white shadow-sm"
                                    : "cursor-pointer text-[#1C3636] hover:bg-[#1CA186]/10 hover:text-[#1CA186]",
                                ].join(" ")}
                              >
                                {date.getDate()}
                              </button>
                            );
                          }
                        )}
                      </div>
                    </div>

                    {/* TIME SELECTION */}

                    <div className="mt-7">

                      <div className="mb-4">

                        <p className="text-sm font-semibold text-[#1CA186]">
                          Available times
                        </p>

                        <h3 className="mt-1 text-xl font-extrabold text-[#1C3636]">
                          Choose a time
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-[#1C3636]/60">
                          Select one of the available time slots
                          for your strategy call.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                        {TIME_SLOTS.map((time) => {
                          const isSelected =
                            selectedTime === time;

                          const isDisabled =
                            !selectedDate;

                          return (
                            <button
                              key={time}
                              type="button"
                              disabled={isDisabled}
                              onClick={() => {
                                if (!selectedDate) {
                                  return;
                                }

                                setSelectedTime(time);

                                setScheduleStatus({
                                  type: "",
                                  message: "",
                                });
                              }}
                              className={[
                                "relative flex min-h-[52px] items-center justify-center rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-200",
                                isDisabled
                                  ? "cursor-not-allowed border-[#1C3636]/5 bg-[#F9FAFA] text-[#1C3636]/25"
                                  : "cursor-pointer",
                                isSelected
                                  ? "border-[#1CA186] bg-[#1CA186] text-white shadow-md"
                                  : !isDisabled
                                  ? "border-[#1C3636]/10 bg-[#F9FAFA] text-[#1C3636] hover:border-[#1CA186] hover:bg-[#1CA186]/10"
                                  : "",
                              ].join(" ")}
                            >
                              {isSelected && (
                                <span className="absolute left-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1CA186]">
                                  ✓
                                </span>
                              )}

                              <span>{time}</span>
                            </button>
                          );
                        })}
                      </div>

                      {!selectedDate && (
                        <p className="mt-4 rounded-xl bg-[#F9FAFA] px-4 py-3 text-center text-xs font-medium text-[#1C3636]/50">
                          Please select a date first to choose
                          an available time.
                        </p>
                      )}

                      {selectedDate && selectedTime && (
                        <div className="mt-4 rounded-xl border border-[#1CA186]/20 bg-[#1CA186]/10 px-4 py-3">

                          <p className="text-xs font-bold uppercase tracking-wide text-[#1C3636]/50">
                            Selected Time
                          </p>

                          <p className="mt-1 text-sm font-bold text-[#1C3636]">
                            {selectedTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ==================================================
                      DETAILS FORM
                  ================================================== */}

                  <div>

                    <div className="mb-6">

                      <p className="text-sm font-semibold text-[#1CA186]">
                        Your Details
                      </p>

                      <h3 className="mt-1 text-xl font-extrabold text-[#1C3636]">
                        Tell us who you are
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#1C3636]/60">
                        Share a few details so we can prepare for
                        the conversation.
                      </p>
                    </div>

                    {selectedDate && selectedTime && (
                      <div className="mb-6 rounded-xl border border-[#1CA186]/20 bg-[#1CA186]/10 p-4">

                        <p className="text-xs font-bold uppercase tracking-wide text-[#1C3636]/50">
                          Your Appointment
                        </p>

                        <p className="mt-1 text-sm font-extrabold text-[#1C3636]">
                          {formatSelectedDate()}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#1CA186]">
                          {selectedTime}
                        </p>
                      </div>
                    )}

                    <form
                      onSubmit={handleScheduleSubmit}
                      className="space-y-4"
                    >

                      <div>
                        <label
                          htmlFor="schedule-fullName"
                          className="mb-2 block text-sm font-bold text-[#1C3636]"
                        >
                          Full Name *
                        </label>

                        <input
                          id="schedule-fullName"
                          name="fullName"
                          type="text"
                          required
                          value={scheduleForm.fullName}
                          onChange={handleScheduleChange}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm text-[#1C3636] outline-none transition focus:border-[#1CA186]"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">

                        <div>
                          <label
                            htmlFor="schedule-companyName"
                            className="mb-2 block text-sm font-bold text-[#1C3636]"
                          >
                            Company
                          </label>

                          <input
                            id="schedule-companyName"
                            name="companyName"
                            type="text"
                            value={
                              scheduleForm.companyName
                            }
                            onChange={handleScheduleChange}
                            placeholder="Company name"
                            className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm text-[#1C3636] outline-none transition focus:border-[#1CA186]"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="schedule-website"
                            className="mb-2 block text-sm font-bold text-[#1C3636]"
                          >
                            Website
                          </label>

                          <input
                            id="schedule-website"
                            name="website"
                            type="url"
                            value={scheduleForm.website}
                            onChange={handleScheduleChange}
                            placeholder="https://..."
                            className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm text-[#1C3636] outline-none transition focus:border-[#1CA186]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="schedule-email"
                          className="mb-2 block text-sm font-bold text-[#1C3636]"
                        >
                          Email Address *
                        </label>

                        <input
                          id="schedule-email"
                          name="email"
                          type="email"
                          required
                          value={scheduleForm.email}
                          onChange={handleScheduleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm text-[#1C3636] outline-none transition focus:border-[#1CA186]"
                        />
                      </div>

                      {/* POPUP PHONE */}

                      <div>
                        <label
                          htmlFor="schedule-phone"
                          className="mb-2 block text-sm font-bold text-[#1C3636]"
                        >
                          Phone Number *
                        </label>

                        <div className="flex w-full overflow-visible rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] focus-within:border-[#1CA186]">

                          <div
                            ref={schedulePhoneRef}
                            className="relative w-[105px] shrink-0"
                          >
                            <button
                              type="button"
                              onClick={() => {
                                setSchedulePhoneOpen(
                                  (previous) => !previous
                                );

                                setMainPhoneOpen(false);
                              }}
                              className="flex h-full w-full cursor-pointer items-center justify-between rounded-l-xl border-r border-[#1C3636]/10 bg-transparent px-2 py-3.5 text-left text-sm font-semibold text-[#1C3636] outline-none transition"
                              aria-haspopup="listbox"
                              aria-expanded={
                                schedulePhoneOpen
                              }
                              aria-label="Select country code"
                            >
                              <span className="truncate">
                                {
                                  COUNTRIES.find(
                                    (country) =>
                                      country.code ===
                                      scheduleForm.countryCode
                                  )?.flag
                                }{" "}
                                {scheduleForm.countryCode}
                              </span>

                              <span
                                className={`ml-1 flex shrink-0 items-center text-[#1C3636]/50 transition-transform duration-200 ${
                                  schedulePhoneOpen
                                    ? "rotate-180"
                                    : ""
                                }`}
                              >
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </span>
                            </button>

                            <AnimatePresence>
                              {schedulePhoneOpen && (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    y: -5,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    y: 0,
                                  }}
                                  exit={{
                                    opacity: 0,
                                    y: -5,
                                  }}
                                  transition={{
                                    duration: 0.15,
                                  }}
                                  className="absolute left-0 top-full z-50 mt-2 max-h-64 w-[230px] overflow-y-auto rounded-xl border border-[#1C3636]/10 bg-white p-1 shadow-xl"
                                  role="listbox"
                                >
                                  {COUNTRIES.map(
                                    (country) => (
                                      <button
                                        key={`${country.name}-${country.code}`}
                                        type="button"
                                        onClick={() => {
                                          setScheduleForm(
                                            (previous) => ({
                                              ...previous,
                                              countryCode:
                                                country.code,
                                            })
                                          );

                                          setSchedulePhoneOpen(
                                            false
                                          );
                                        }}
                                        className={`flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-[#1CA186]/10 ${
                                          scheduleForm.countryCode ===
                                          country.code
                                            ? "bg-[#1CA186]/10 font-semibold text-[#1CA186]"
                                            : "text-[#1C3636]"
                                        }`}
                                        role="option"
                                        aria-selected={
                                          scheduleForm.countryCode ===
                                          country.code
                                        }
                                      >
                                        <span>
                                          {country.flag}
                                        </span>

                                        <span className="flex-1">
                                          {country.name}
                                        </span>

                                        <span className="font-semibold">
                                          {country.code}
                                        </span>
                                      </button>
                                    )
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <input
                            id="schedule-phone"
                            name="phone"
                            type="tel"
                            required
                            value={scheduleForm.phone}
                            onChange={
                              handleScheduleChange
                            }
                            placeholder="300 1234567"
                            className="min-w-0 flex-1 rounded-r-xl bg-transparent px-4 py-3.5 text-sm text-[#1C3636] outline-none"
                          />
                        </div>
                      </div>

                      {/* CONNECTION */}

                      <div>
                        <label
                          htmlFor="connectionMethod"
                          className="mb-2 block text-sm font-bold text-[#1C3636]"
                        >
                          Preferred Connection *
                        </label>

                        <div className="relative">

                          <select
                            id="connectionMethod"
                            name="connectionMethod"
                            required
                            value={
                              scheduleForm.connectionMethod
                            }
                            onChange={
                              handleScheduleChange
                            }
                            className="w-full cursor-pointer appearance-none rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 pr-10 text-sm text-[#1C3636] outline-none transition focus:border-[#1CA186]"
                          >
                            {CONNECTION_METHODS.map(
                              (method) => (
                                <option
                                  key={method}
                                  value={method}
                                >
                                  {method}
                                </option>
                              )
                            )}
                          </select>

                          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1C3636]/50">
                            ▼
                          </span>
                        </div>
                      </div>

                      {/* MESSAGE */}

                      <div>
                        <label
                          htmlFor="schedule-message"
                          className="mb-2 block text-sm font-bold text-[#1C3636]"
                        >
                          Message
                        </label>

                        <textarea
                          id="schedule-message"
                          name="message"
                          rows={4}
                          value={scheduleForm.message}
                          onChange={
                            handleScheduleChange
                          }
                          placeholder="Tell us briefly what you would like to discuss."
                          className="w-full resize-none rounded-xl border border-[#1C3636]/10 bg-[#F9FAFA] px-4 py-3.5 text-sm leading-7 text-[#1C3636] outline-none transition focus:border-[#1CA186]"
                        />
                      </div>

                      {scheduleStatus.message && (
                        <div
                          className={`rounded-xl px-4 py-3 text-sm font-medium ${
                            scheduleStatus.type ===
                            "success"
                              ? "bg-[#1CA186]/10 text-[#1CA186]"
                              : scheduleStatus.type ===
                                "error"
                              ? "bg-[#1C3636]/10 text-[#1C3636]"
                              : "bg-[#F9FAFA] text-[#1C3636]/70"
                          }`}
                        >
                          {scheduleStatus.message}
                        </div>
                      )}

                      <div className="flex flex-col gap-3 pt-2 sm:flex-row">

                        <button
                          type="button"
                          onClick={closeSchedulePopup}
                          disabled={scheduleSubmitting}
                          className={`rounded-xl border border-[#1C3636]/10 px-5 py-3.5 text-sm font-semibold text-[#1C3636] transition ${
                            scheduleSubmitting
                              ? "cursor-not-allowed opacity-40"
                              : "cursor-pointer hover:border-[#1CA186] hover:text-[#1CA186]"
                          }`}
                        >
                          Cancel
                        </button>

                        <button
                          type="submit"
                          disabled={scheduleSubmitting}
                          className={`flex-1 rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition ${
                            scheduleSubmitting
                              ? "cursor-not-allowed bg-[#1CA186]/60"
                              : "cursor-pointer bg-[#1CA186] hover:bg-[#1CA186]/90"
                          }`}
                        >
                          {scheduleSubmitting
                            ? "Submitting..."
                            : "Request Strategy Call →"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}