import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cookie preferences", description: "Understand how the website may use cookies and similar technologies." };

export default function Page() {
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen · Information</p><h1>Cookie preferences</h1><p>Understand how the website may use cookies and similar technologies.</p></header>
    <section className="section"><article className="content-narrow">
      <p className="notice">Important: this is starter content. Replace it with accurate, business-specific information before launch.</p>
      <h2>Essential storage</h2><p>The demonstration cart and wishlist use browser localStorage. These features are local to this browser and are not sent to a server.</p><h2>Analytics and advertising</h2><p>No analytics or advertising service is configured by this starter. If you add non-essential tracking, implement the required consent and preference controls.</p>
      <p>Need more help? <Link href="/contact">Contact Vaelen</Link> or explore the <Link href="/shop">shop</Link>.</p>
    </article></section>
  </>;
}
