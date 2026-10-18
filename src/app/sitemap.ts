import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { products } from "@/lib/products";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "", "/shop", "/about", "/contact", "/faq", "/shipping", "/returns",
    "/privacy", "/terms", "/cookies", "/size-guide", "/blog", "/search",
    "/collections/new-arrivals", "/collections/best-sellers",
    "/collections/men", "/collections/women", "/collections/accessories"
  ];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}`, changeFrequency: "weekly" as const })),
    ...products.map((product) => ({ url: `${siteConfig.url}/products/${product.slug}`, changeFrequency: "weekly" as const })),
    ...posts.map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(`${post.date}T00:00:00Z`), changeFrequency: "monthly" as const }))
  ];
}
