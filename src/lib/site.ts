export const siteConfig = {
  name: "Vaelen",
  description: "Considered essentials and modern silhouettes made for everyday expression.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com",
  currency: "USD"
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
