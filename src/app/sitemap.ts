import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vsssalesco.in";
  const now = new Date();

  const routes = [
    { url: "/",              priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: "/about",         priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/security",      priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/automation",    priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/theater",       priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/case-studies",  priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/blog",          priority: 0.8,  changeFrequency: "weekly"  as const },
    { url: "/contact",       priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/privacy",       priority: 0.3,  changeFrequency: "yearly"  as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
