
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "hk-cookie-consent";

export default function CookiesConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // Render the popup only after the component mounts in the browser.
  useEffect(() => {
    setMounted(true);
  }, []);

  function saveConsent(allowAnalytics, allowMarketing) {
    const preferences = {
      necessary: true,
      analytics: allowAnalytics,
      marketing: allowMarketing,
      updatedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify(preferences)
      );
    } catch (error) {
      console.error("Unable to save cookie preferences:", error);
    }

    setVisible(false);
    setCustomizing(false);
  }

  // Prevent server/client hydration mismatch.
  if (!mounted || !visible) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-heading"
      aria-describedby="cookie-description"
      className="fixed bottom-5 right-5 z-[9999] w-[calc(100%-2.5rem)] max-w-[440px] sm:bottom-7 sm:right-7"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#142B2A] shadow-[0_20px_70px_rgba(0,0,0,0.35)]">

        <div className="p-5 sm:p-6">

          {/* Heading */}
          <h2
            id="cookie-heading"
            className="text-lg font-semibold tracking-tight text-white"
          >
            Cookie preferences
          </h2>

          {/* Description */}
          <p
            id="cookie-description"
            className="mt-2 text-[13px] leading-6 text-[#B5C5C0]"
          >
            We use essential cookies to keep this website working.
            Optional cookies help us improve your experience.
          </p>

          {/* Cookie Policy */}
          <Link
            href="/cookies"
            className="mt-2 inline-flex cursor-pointer items-center gap-1 text-xs font-medium text-[#45C9A9] transition-colors hover:text-[#75E2C6]"
          >
            Cookie Policy
            <span aria-hidden="true">↗</span>
          </Link>

          {/* Custom Preferences */}
          {customizing && (
            <div className="mt-5 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#1B3735] px-4">

              {/* Essential */}
              <div className="flex items-center justify-between gap-3 py-4">
                <div>
                  <p className="text-sm font-medium text-white">
                    Essential
                  </p>
                  <p className="mt-1 text-xs text-[#A8BAB4]">
                    Required for website functionality.
                  </p>
                </div>

                <span className="shrink-0 text-[11px] font-medium text-[#45C9A9]">
                  Always on
                </span>
              </div>

              {/* Analytics */}
              <label className="flex cursor-pointer items-center justify-between gap-3 py-4">
                <span>
                  <span className="block text-sm font-medium text-white">
                    Analytics
                  </span>
                  <span className="mt-1 block text-xs text-[#A8BAB4]">
                    Helps improve website performance.
                  </span>
                </span>

                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="h-4 w-4 cursor-pointer accent-[#1CA186]"
                />
              </label>

              {/* Marketing */}
              <label className="flex cursor-pointer items-center justify-between gap-3 py-4">
                <span>
                  <span className="block text-sm font-medium text-white">
                    Marketing
                  </span>
                  <span className="mt-1 block text-xs text-[#A8BAB4]">
                    Helps measure marketing campaigns.
                  </span>
                </span>

                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="h-4 w-4 cursor-pointer accent-[#1CA186]"
                />
              </label>

            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-2.5">

            <button
              type="button"
              onClick={() => saveConsent(false, false)}
              className="cursor-pointer rounded-lg border border-white/20 bg-transparent px-3 py-3 text-xs font-semibold text-[#E1EAE6] transition-all duration-200 hover:border-white/40 hover:bg-white/5 active:scale-[0.98]"
            >
              Reject Optional
            </button>

            <button
              type="button"
              onClick={() => saveConsent(true, true)}
              className="cursor-pointer rounded-lg bg-[#1CA186] px-3 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#24B99B] active:scale-[0.98]"
            >
              Accept All
            </button>

          </div>

          {/* Customize Button */}
          <button
            type="button"
            onClick={() => {
              if (customizing) {
                saveConsent(analytics, marketing);
              } else {
                setCustomizing(true);
              }
            }}
            className="mt-2.5 w-full cursor-pointer rounded-lg border border-[#1CA186]/40 bg-[#1CA186]/10 px-3 py-3 text-xs font-semibold text-[#55D4B4] transition-all duration-200 hover:border-[#1CA186] hover:bg-[#1CA186]/20 active:scale-[0.99]"
          >
            {customizing ? "Save Preferences" : "Customize"}
          </button>

        </div>
      </div>
    </aside>
  );
}
