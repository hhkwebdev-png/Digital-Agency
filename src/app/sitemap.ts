import type { MetadataRoute } from "next";

const baseUrl = "https://digital-agency-rouge-sigma.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/portfolio",
    "/pricing",
    "/blogs",
    "/faq",
    "/contact",
    "/services/web-development",
    "/services/web-designing",
    "/services/seo",
    "/services/ai-automation",
    "/services/ai-chatbot",
    "/services/content-writing",
    "/services/blog-writing",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
