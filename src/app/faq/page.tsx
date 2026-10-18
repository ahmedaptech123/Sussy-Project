import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Frequently asked questions", description: "Helpful answers about shopping with Vaelen." };

export default function Page() {
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen · Information</p><h1>Frequently asked questions</h1><p>Helpful answers about shopping with Vaelen.</p></header>
    <section className="section"><article className="content-narrow">
      <p className="notice">Important: this is starter content. Replace it with accurate, business-specific information before launch.</p>
      <h2>How do I find my size?</h2><p>Visit our size guide and compare the garment measurements with a piece you already own. Product-specific fit information should be added when verified.</p><h2>How long does shipping take?</h2><p>Shipping timeframes depend on the destination and the fulfilment service. This demo site does not have a live shipping service configured.</p><h2>Can I return an item?</h2><p>Review the returns page for the current demonstration policy. A real store must publish its actual return window, eligibility, and process.</p><h2>How can I contact support?</h2><p>Use the contact page. The demo form validates input locally but requires an email or backend integration to send messages.</p>
      <p>Need more help? <Link href="/contact">Contact Vaelen</Link> or explore the <Link href="/shop">shop</Link>.</p>
    </article></section>
  </>;
}
