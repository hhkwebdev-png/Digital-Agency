"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const loadBlog = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/blogs/${encodeURIComponent(slug)}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.error || "Failed to load blog."
          );
        }

        setBlog(data.blog);
      } catch (err) {
        console.error("Load blog error:", err);
        setError(
          err?.message || "Failed to load blog."
        );
      } finally {
        setLoading(false);
      }
    };

    loadBlog();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#1C3636] border-t-transparent" />
          <p className="text-[#1C3636] text-base">
            Loading article...
          </p>
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-extrabold text-[#1C3636] mb-4">
            Blog Not Found
          </h1>

          <p className="text-[#1C3636]/70 mb-6">
            {error ||
              "The requested article could not be found."}
          </p>

          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-xl bg-[#1C3636] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
              {blog.category && (
                <span className="rounded-full bg-[#1C3636] px-4 py-2 font-semibold text-white">
                  {blog.category}
                </span>
              )}

              {blog.created_at && (
                <span className="text-[#1C3636]/60">
                  {new Date(
                    blog.created_at
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>

            {/* Blog Title */}
            <h1 className="max-w-4xl text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold leading-tight text-[#1C3636]">
              {blog.title}
            </h1>

            {/* Blog Description */}
            {blog.description && (
              <p className="mt-6 max-w-4xl text-[16px] leading-[1.8] text-[#1C3636]/70">
                {blog.description}
              </p>
            )}

            {/* Author */}
            {blog.author && (
              <div className="mt-6 text-sm font-semibold text-[#1C3636]">
                By {blog.author}
              </div>
            )}
          </div>
        </section>

        {/* Featured Image */}
        {blog.image && (
          <section className="px-6 sm:px-8 lg:px-12 pb-10">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-xl">
              <img
                src={blog.image}
                alt={blog.title || "Blog image"}
                className="w-full h-auto object-cover"
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <section className="px-6 sm:px-8 lg:px-12 pb-16 lg:pb-24">
          <div className="mx-auto max-w-4xl">
            <article
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: blog.content || "",
              }}
            />
          </div>
        </section>
      </main>

      <style jsx global>{`
        /* =========================================
           PROFESSIONAL BLOG CONTENT
        ========================================= */

        .blog-content {
          width: 100%;
          max-width: 100%;
          color: #1c3636;
          font-size: 17px;
          line-height: 1.85;
          letter-spacing: 0.01em;
          overflow-wrap: break-word;
          word-break: normal;
        }

        /* =========================================
           PARAGRAPHS
        ========================================= */

        .blog-content p {
          margin: 0 0 1.25rem;
          color: #1c3636;
          font-size: 17px;
          line-height: 1.85;
          font-weight: 400;
        }

        /* =========================================
           HEADINGS
        ========================================= */

        .blog-content h1 {
          margin: 2.5rem 0 1rem;
          color: #1c3636;
          font-size: 2.25rem;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .blog-content h2 {
          margin: 2.5rem 0 1rem;
          color: #1c3636;
          font-size: 1.875rem;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: -0.015em;
        }

        .blog-content h3 {
          margin: 2rem 0 0.85rem;
          color: #1c3636;
          font-size: 1.5rem;
          line-height: 1.4;
          font-weight: 700;
        }

        .blog-content h4 {
          margin: 1.5rem 0 0.75rem;
          color: #1c3636;
          font-size: 1.25rem;
          line-height: 1.4;
          font-weight: 700;
        }

        /* =========================================
           BOLD / ITALIC / UNDERLINE
        ========================================= */

        .blog-content strong,
        .blog-content b {
          color: #1c3636;
          font-weight: 700;
        }

        .blog-content em,
        .blog-content i {
          font-style: italic;
        }

        .blog-content u {
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
        }

        /* =========================================
           DIV CONTENT FROM EDITOR
        ========================================= */

        .blog-content div {
          margin: 0;
          line-height: 1.85;
        }

        /* =========================================
           BULLET LIST
        ========================================= */

        .blog-content ul {
          display: block;
          list-style-type: disc;
          list-style-position: outside;
          padding-left: 2rem;
          margin: 1.25rem 0 1.5rem;
        }

        /* =========================================
           NUMBERED LIST
        ========================================= */

        .blog-content ol {
          display: block;
          list-style-type: decimal;
          list-style-position: outside;
          padding-left: 2rem;
          margin: 1.25rem 0 1.5rem;
        }

        /* =========================================
           LIST ITEMS
        ========================================= */

        .blog-content li {
          display: list-item;
          margin: 0.5rem 0;
          padding-left: 0.25rem;
          line-height: 1.8;
        }

        .blog-content li::marker {
          color: #1c3636;
        }

        /* =========================================
           BLOCKQUOTE
        ========================================= */

        .blog-content blockquote {
          margin: 2rem 0;
          padding: 1.25rem 1.5rem;
          border-left: 4px solid #1c3636;
          border-radius: 0 0.75rem 0.75rem 0;
          background: #f9fafa;
          color: #1c3636;
          font-size: 17px;
          line-height: 1.8;
          font-style: italic;
        }

        .blog-content blockquote p {
          margin: 0;
        }

        /* =========================================
           LINKS
        ========================================= */

        .blog-content a {
          color: #1c3636;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
          transition: opacity 0.2s ease;
        }

        .blog-content a:hover {
          opacity: 0.65;
        }

        /* =========================================
           HORIZONTAL LINE
        ========================================= */

        .blog-content hr {
          width: 100%;
          margin: 2.5rem 0;
          border: 0;
          border-top: 1px solid #1c3636;
        }

        /* =========================================
           IMAGES INSIDE ARTICLE
        ========================================= */

        .blog-content img {
          display: block;
          width: auto;
          max-width: 100%;
          height: auto;
          margin: 2rem auto;
          border-radius: 0.75rem;
        }

        /* =========================================
           TABLE
        ========================================= */

        .blog-content table {
          width: 100%;
          margin: 2rem 0;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 0.75rem;
        }

        .blog-content th,
        .blog-content td {
          padding: 0.85rem 1rem;
          border: 1px solid #1c3636;
          text-align: left;
          vertical-align: top;
        }

        .blog-content th {
          font-weight: 700;
          background: #f9fafa;
        }

        /* =========================================
           CODE BLOCK
        ========================================= */

        .blog-content pre {
          width: 100%;
          margin: 1.5rem 0;
          padding: 1rem 1.25rem;
          overflow-x: auto;
          border-radius: 0.75rem;
          background: #1c3636;
          color: #ffffff;
          font-size: 14px;
          line-height: 1.6;
        }

        .blog-content code {
          font-family: monospace;
        }

        /* =========================================
           INLINE CODE
        ========================================= */

        .blog-content :not(pre) > code {
          padding: 0.15rem 0.4rem;
          border-radius: 0.35rem;
          background: #f9fafa;
          color: #1c3636;
          font-size: 0.9em;
        }

        /* =========================================
           TEXT ALIGNMENT
        ========================================= */

        .blog-content [style*="text-align: center"] {
          text-align: center;
        }

        .blog-content [style*="text-align: right"] {
          text-align: right;
        }

        .blog-content [style*="text-align: left"] {
          text-align: left;
        }

        .blog-content [style*="text-align: justify"] {
          text-align: justify;
        }

        /* =========================================
           EMPTY EDITOR LINES
        ========================================= */

        .blog-content br {
          line-height: 1.8;
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 640px) {
          .blog-content {
            font-size: 16px;
            line-height: 1.8;
          }

          .blog-content p {
            font-size: 16px;
            line-height: 1.8;
          }

          .blog-content h1 {
            margin-top: 2rem;
            font-size: 1.875rem;
          }

          .blog-content h2 {
            margin-top: 2rem;
            font-size: 1.5rem;
          }

          .blog-content h3 {
            font-size: 1.25rem;
          }

          .blog-content h4 {
            font-size: 1.125rem;
          }

          .blog-content ul,
          .blog-content ol {
            padding-left: 1.5rem;
          }

          .blog-content blockquote {
            padding: 1rem;
            font-size: 16px;
          }

          .blog-content table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
          }
        }
      `}</style>
    </>
  );
}