import type { MetadataRoute } from "next";

const baseUrl = "https://digital-agency-rouge-sigma.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/portfolio",
    "/pricing",
    "/contact",
    "/services/web-development",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
