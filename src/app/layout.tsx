import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Vaelen — Considered Essentials", template: "%s | Vaelen" },
  description: siteConfig.description,
  applicationName: "Vaelen",
  openGraph: {
    type: "website",
    siteName: "Vaelen",
    title: "Vaelen — Considered Essentials",
    description: siteConfig.description,
    url: absoluteUrl("/")
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaelen — Considered Essentials",
    description: siteConfig.description
  },
  icons: { icon: "/favicon.svg" }
};

export const viewport: Viewport = {
  themeColor: "#191919",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vaelen",
    url: siteConfig.url,
    description: siteConfig.description
  };

  return <html lang="en">
    <body>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <div id="main-content">{children}</div>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
    </body>
  </html>;
}
