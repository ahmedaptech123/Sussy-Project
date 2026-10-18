import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Size guide", description: "A starting point for choosing the right fit." };

export default function Page() {
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen · Information</p><h1>Size guide</h1><p>A starting point for choosing the right fit.</p></header>
    <section className="section"><article className="content-narrow">
      <p className="notice">Important: this is starter content. Replace it with accurate, business-specific information before launch.</p>
      <h2>How to measure</h2><p>Use a flexible tape measure and compare your measurements with verified garment measurements. Measurements and fit can vary by style.</p><h2>Product-specific fit</h2><p>The products in this project are demonstration entries and do not contain verified garment measurements. Add an accurate size chart before taking real orders.</p>
      <p>Need more help? <Link href="/contact">Contact Vaelen</Link> or explore the <Link href="/shop">shop</Link>.</p>
    </article></section>
  </>;
}
