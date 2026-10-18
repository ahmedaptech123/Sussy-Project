import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms and conditions", description: "Terms for using the Vaelen website." };

export default function Page() {
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen · Information</p><h1>Terms and conditions</h1><p>Terms for using the Vaelen website.</p></header>
    <section className="section"><article className="content-narrow">
      <p className="notice">Important: this is starter content. Replace it with accurate, business-specific information before launch.</p>
      <h2>Website and product information</h2><p>Replace this template with accurate terms covering product descriptions, pricing, stock, order acceptance, and applicable law.</p><h2>Orders and payment</h2><p>Explain the actual order process, payment provider, cancellation rules, and customer support process once configured.</p><h2>Legal review</h2><p>This page is a starter outline, not legal advice. Obtain appropriate review for the countries in which the store operates.</p>
      <p>Need more help? <Link href="/contact">Contact Vaelen</Link> or explore the <Link href="/shop">shop</Link>.</p>
    </article></section>
  </>;
}
