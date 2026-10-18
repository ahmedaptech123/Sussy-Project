import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Returns and refunds", description: "A clear returns process helps customers shop with confidence." };

export default function Page() {
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen · Information</p><h1>Returns and refunds</h1><p>A clear returns process helps customers shop with confidence.</p></header>
    <section className="section"><article className="content-narrow">
      <p className="notice">Important: this is starter content. Replace it with accurate, business-specific information before launch.</p>
      <h2>Before you return</h2><p>This page is a template, not a live legal or commercial policy. Before launch, specify the return window, item condition requirements, exclusions, shipping responsibility, and refund processing timeline.</p><h2>How to request a return</h2><p>Connect this page to a real customer-support workflow and publish the correct contact method before accepting orders.</p>
      <p>Need more help? <Link href="/contact">Contact Vaelen</Link> or explore the <Link href="/shop">shop</Link>.</p>
    </article></section>
  </>;
}
