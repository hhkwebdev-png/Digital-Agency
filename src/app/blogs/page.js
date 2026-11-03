"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Image as ImageIcon,
  RefreshCw,
  BookOpen,
  ChevronDown,
  Search,
  X,
} from "lucide-react";

const CATEGORIES = [
  "AI-CHATBOT",
  "AI-AUTOMATION",
  "SEO",
  "WEB-DEVELOPMENT",
  "WEB-DESIGNING",
  "CONTENT-WRITING",
  "BLOG-WRITING",
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL BLOGS");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  async function loadBlogs() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/blogs", {
        method: "GET",
        cache: "no-store",
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "The server did not return valid JSON. Check /api/blogs."
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to load blogs."
        );
      }

      setBlogs(
        Array.isArray(data.blogs)
          ? data.blogs
          : []
      );
    } catch (error) {
      console.error("Load blogs error:", error);

      setError(
        error.message ||
          "Unable to connect to the blogs API."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBlogs();
  }, []);

  function normalizeCategory(category) {
    if (!category) return "";

    return category
      .trim()
      .toUpperCase()
      .replace(/[\s_]+/g, "-")
      .replace(/-+/g, "-");
  }

  /*
    Category filter + Search filter
  */
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeCategory === "ALL BLOGS" ||
      normalizeCategory(blog.category) ===
        normalizeCategory(activeCategory);

    const search = searchQuery.trim().toLowerCase();

    const matchesSearch =
      !search ||
      blog.title?.toLowerCase().includes(search) ||
      blog.description?.toLowerCase().includes(search) ||
      blog.category?.toLowerCase().includes(search) ||
      blog.content?.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  function selectCategory(category) {
    setActiveCategory(category);
    setCategoryOpen(false);
  }

  function showAllBlogs() {
    setActiveCategory("ALL BLOGS");
    setCategoryOpen(false);
  }

  function clearSearch() {
    setSearchQuery("");
  }

  return (
    <main className="min-h-screen bg-white text-[#1C3636]">

      {/* HERO */}
      <section className="px-6 py-6 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl bg-[#1C3636] px-6 py-10 text-white sm:px-10 lg:px-16 lg:py-14">

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 max-w-4xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <BookOpen size={16} />
              Our Blogs
            </div>

            <h1 className="text-[30px] font-extrabold leading-tight sm:text-[40px] lg:text-[48px]">
              Insights, Ideas & Digital Growth
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-[1.8] text-white/80 sm:text-lg">
              Discover expert insights, practical strategies,
              and proven ideas covering AI, automation, web
              development, web design, SEO, content, and
              digital growth.
            </p>

          </div>
        </div>
      </section>

      {/* FILTER + SEARCH */}
      <section className="px-6 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-3">

              {/* ALL BLOGS */}
              <button
                type="button"
                onClick={showAllBlogs}
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === "ALL BLOGS"
                    ? "border-[#1C3636] bg-[#1C3636] text-white shadow-md"
                    : "border-[#1C3636]/15 bg-white text-[#1C3636] hover:border-[#1C3636]/40 hover:bg-[#1C3636]/5"
                }`}
              >
                All Blogs
              </button>

              {/* CATEGORIES */}
              <div className="relative">

                <button
                  type="button"
                  onClick={() =>
                    setCategoryOpen(!categoryOpen)
                  }
                  className={`inline-flex items-center gap-3 rounded-xl border px-5 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                    categoryOpen ||
                    activeCategory !== "ALL BLOGS"
                      ? "border-[#1C3636] bg-[#1C3636] text-white shadow-md"
                      : "border-[#1C3636]/15 bg-white text-[#1C3636] hover:border-[#1C3636]/40 hover:bg-[#1C3636]/5"
                  }`}
                >
                  Categories

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      categoryOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                {/* CATEGORY DROPDOWN */}
                {categoryOpen && (
                  <div className="absolute left-0 top-full z-50 mt-3 w-[280px] overflow-hidden rounded-xl border border-[#1C3636]/10 bg-white p-2 shadow-[0_20px_50px_rgba(28,54,54,0.15)]">

                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() =>
                          selectCategory(category)
                        }
                        className={`mt-1 flex w-full items-center rounded-lg px-4 py-3 text-left text-sm font-bold transition first:mt-0 ${
                          activeCategory === category
                            ? "bg-[#1C3636] text-white"
                            : "text-[#1C3636] hover:bg-[#1C3636]/5"
                        }`}
                      >
                        {category}
                      </button>
                    ))}

                  </div>
                )}

              </div>

              {/* ACTIVE CATEGORY */}
              {activeCategory !== "ALL BLOGS" && (
                <span className="rounded-xl border border-[#1C3636]/10 bg-[#1C3636]/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#1C3636]/65">
                  {activeCategory}
                </span>
              )}

            </div>

            {/* SEARCH */}
            <div className="relative w-full lg:max-w-md">

              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#1C3636]/45"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search blogs..."
                className="h-[50px] w-full rounded-xl border border-[#1C3636]/15 bg-white pl-11 pr-11 text-sm font-medium text-[#1C3636] outline-none transition placeholder:text-[#1C3636]/40 focus:border-[#1C3636]/50 focus:ring-2 focus:ring-[#1C3636]/10"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[#1C3636]/50 transition hover:bg-[#1C3636]/5 hover:text-[#1C3636]"
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* BLOG SECTION */}
      <section
        id="all-blogs"
        className="px-6 py-6 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          {!loading && !error && (
            <div className="mb-7">

              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1C3636]/50">
                {searchQuery
                  ? "Search Results"
                  : activeCategory === "ALL BLOGS"
                    ? "All Articles"
                    : activeCategory}
              </p>

              <h2 className="mt-1 text-2xl font-extrabold">
                {searchQuery
                  ? `Results for "${searchQuery}"`
                  : activeCategory === "ALL BLOGS"
                    ? "Latest Blogs"
                    : `${activeCategory} Blogs`}
              </h2>

            </div>
          )}

          {/* LOADING */}
          {loading && (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-xl border border-[#1C3636]/10 bg-white"
                >

                  <div className="h-60 animate-pulse bg-[#1C3636]/10" />

                  <div className="space-y-4 p-6">

                    <div className="h-4 w-24 animate-pulse rounded bg-[#1C3636]/10" />

                    <div className="h-7 w-full animate-pulse rounded bg-[#1C3636]/10" />

                    <div className="h-4 w-5/6 animate-pulse rounded bg-[#1C3636]/10" />

                    <div className="h-4 w-4/6 animate-pulse rounded bg-[#1C3636]/10" />

                  </div>
                </div>
              ))}

            </div>
          )}

          {/* ERROR */}
          {!loading && error && (
            <div className="rounded-xl border border-[#1C3636]/15 bg-[#1C3636]/[0.03] px-6 py-14 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1C3636] text-white">
                <RefreshCw size={24} />
              </div>

              <h2 className="mt-6 text-2xl font-extrabold">
                Unable to load blogs
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-base leading-[1.8] text-[#1C3636]/70">
                {error}
              </p>

              <button
                type="button"
                onClick={loadBlogs}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1C3636] px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                <RefreshCw size={18} />
                Try Again
              </button>

            </div>
          )}

          {/* NO BLOGS */}
          {!loading &&
            !error &&
            blogs.length === 0 && (
              <div className="rounded-xl border border-[#1C3636]/10 bg-[#1C3636]/[0.03] px-6 py-16 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-[#1C3636] text-white">
                  <ImageIcon size={28} />
                </div>

                <h2 className="mt-6 text-2xl font-extrabold">
                  No blogs published yet
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-base leading-[1.8] text-[#1C3636]/70">
                  There are currently no published articles.
                </p>

                <Link
                  href="/blog-posting"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1C3636] px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Create Blog
                  <ArrowRight size={18} />
                </Link>

              </div>
            )}

          {/* NO SEARCH / CATEGORY RESULTS */}
          {!loading &&
            !error &&
            blogs.length > 0 &&
            filteredBlogs.length === 0 && (
              <div className="rounded-xl border border-[#1C3636]/10 bg-[#1C3636]/[0.03] px-6 py-16 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1C3636] text-white">
                  <Search size={24} />
                </div>

                <h2 className="mt-6 text-2xl font-extrabold">
                  No blogs found
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-base leading-[1.8] text-[#1C3636]/65">
                  We couldn't find any blog matching your
                  search or selected category.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3">

                  <button
                    type="button"
                    onClick={showAllBlogs}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1C3636] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
                  >
                    View All Blogs
                    <ArrowRight size={17} />
                  </button>

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="inline-flex items-center gap-2 rounded-xl border border-[#1C3636]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#1C3636] transition duration-300 hover:bg-[#1C3636]/5"
                    >
                      Clear Search
                      <X size={17} />
                    </button>
                  )}

                </div>

              </div>
            )}

          {/* BLOG CARDS */}
          {!loading &&
            !error &&
            filteredBlogs.length > 0 && (
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                {filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#1C3636]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1C3636]/25 hover:shadow-[0_20px_50px_rgba(28,54,54,0.10)]"
                  >

                    {/* IMAGE */}
                    <div className="relative h-60 overflow-hidden bg-[#1C3636]">

                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-white">
                          <ImageIcon size={48} />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C3636]/60 via-transparent to-transparent" />

                      {blog.category && (
                        <div className="absolute left-5 top-5">
                          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1C3636] shadow-sm">
                            {blog.category}
                          </span>
                        </div>
                      )}

                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col p-6">

                      <h2 className="mt-3 line-clamp-2 text-[24px] font-extrabold leading-tight">
                        {blog.title}
                      </h2>

                      <p className="mt-4 line-clamp-3 text-base leading-[1.8] text-[#1C3636]/65">
                        {blog.description}
                      </p>

                      <div className="mt-auto pt-7">

                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C3636] px-5 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1C3636]/90"
                        >
                          Read Full Article

                          <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>

                      </div>

                    </div>

                  </article>
                ))}

              </div>
            )}

        </div>
      </section>

      {/* BOTTOM CTA */}
      {!loading &&
        !error &&
        blogs.length > 0 && (
          <section className="px-6 py-6 sm:px-8 lg:px-12">

            <div className="mx-auto max-w-7xl rounded-xl bg-[#1C3636] px-6 py-12 text-center text-white sm:px-10 lg:px-16">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">
                Digital Growth
              </p>

              <h2 className="mx-auto mt-3 max-w-3xl text-[30px] font-extrabold leading-tight sm:text-[36px] lg:text-[42px]">
                Turn Digital Insights Into Real Business Growth.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.8] text-white/75">
                Discover strategies and insights that can help
                your business automate operations, strengthen
                its digital presence, and create sustainable
                growth.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-[#1C3636] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
              >
                Talk to Our Experts
                <ArrowRight size={18} />
              </Link>

            </div>

          </section>
        )}

    </main>
  );
}