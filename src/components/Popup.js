"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export default function Popup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    goal: "",
    projectDetails: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.service) {
      setError("Please select a service.");
      return;
    }

    if (!formData.goal) {
      setError("Please select your primary goal.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
  const errorData = await response.json().catch(() => ({}));

  console.error("API Error:", errorData);

  throw new Error(
    errorData.error || errorData.message || `Request failed: ${response.status}`
  );
}

      setStatus("success");

      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        goal: "",
        projectDetails: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("We couldn't submit your request. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0B1515] shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="p-5 sm:p-7">
          {/* Heading */}
          <div className="mb-5 pr-12">
            <h2 className="text-[26px] font-semibold leading-tight tracking-tight text-[#F9FAFA] sm:text-[32px]">
              Turn Your Idea Into{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">
                Digital Growth
              </span>
            </h2>
          </div>

          {/* Success */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10">
                <CheckCircle2 size={30} className="text-emerald-400" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                Request Received
              </h3>

              <p className="mt-2 max-w-md text-sm leading-5 text-white/60">
                Thanks for reaching out. Our team will review your project
                details and get back to you shortly.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-xl bg-[#DAF1DE] px-5 py-2.5 text-sm font-semibold text-[#0B1515] transition hover:scale-[1.02]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

                <FormField
                  label="Work Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your business email"
                  required
                />
              </div>

              {/* Company */}
              <FormField
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
              />

              {/* Service + Goal */}
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <SelectField
                  label="What do you need help with?"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  options={[
                    "Web Development",
                    "Web Design",
                    "SEO",
                    "AI Automation",
                    "AI Chatbot",
                    "Content Writing",
                    "Digital Strategy",
                    "Other",
                  ]}
                />

                <SelectField
                  label="Primary Goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  options={[
                    "Grow my business",
                    "Generate more leads",
                    "Improve my website",
                    "Automate repetitive work",
                    "Improve online visibility",
                    "Build an AI solution",
                  ]}
                />
              </div>

              {/* Project Details */}
              <div>
                <label
                  htmlFor="projectDetails"
                  className="mb-1.5 block text-xs font-medium text-white/80"
                >
                  Tell us about your project
                </label>

                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Briefly describe what you're looking to build, improve, or automate."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-emerald-300/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-emerald-300/10"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-2 text-xs text-red-300">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#DAF1DE] px-5 py-3 text-sm font-semibold cursor-pointer text-[#0B1515] transition duration-300 hover:scale-[1.01] hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Get My Free Strategy Consultation
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {/* Privacy */}
              <p className="text-center text-[10px] leading-4 text-white/35">
                Your information is secure and will only be used to respond
                to your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/* Input */

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-white/80"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-xs text-white outline-none placeholder:text-white/30 transition focus:border-emerald-300/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-emerald-300/10"
      />
    </div>
  );
}

/* Select */

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-medium text-white/80"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-10 w-full appearance-none rounded-xl border border-white/10 bg-[#122020] px-3.5 text-xs text-white outline-none transition focus:border-emerald-300/50 focus:ring-2 focus:ring-emerald-300/10"
      >
        <option value="" disabled>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}