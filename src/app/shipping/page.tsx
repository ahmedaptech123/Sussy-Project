import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Shipping information", description: "Shipping details for the Vaelen store." };

export default function Page() {
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen · Information</p><h1>Shipping information</h1><p>Shipping details for the Vaelen store.</p></header>
    <section className="section"><article className="content-narrow">
      <p className="notice">Important: this is starter content. Replace it with accurate, business-specific information before launch.</p>
      <h2>Shipping rates and delivery</h2><p>Actual shipping destinations, rates, and delivery estimates have not yet been configured. Add verified rates and delivery windows before accepting orders.</p><h2>Order tracking</h2><p>Order tracking requires an order management system and a shipping carrier integration. No live tracking is available in this starter.</p>
      <p>Need more help? <Link href="/contact">Contact Vaelen</Link> or explore the <Link href="/shop">shop</Link>.</p>
    </article></section>
  </>;
}
