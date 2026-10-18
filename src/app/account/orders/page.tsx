import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Order history", robots: { index: false, follow: false } };

export default function OrdersPage() {
  return <><header className="page-hero"><p className="eyebrow">Your Vaelen</p><h1>Order history</h1><p>Your purchases will appear here after order management is configured.</p></header><section className="section"><div className="content-narrow"><p className="notice">No live orders are available. Protect this route with server-side authentication and ownership checks before launch.</p><Link href="/account" className="text-link">Back to account ↗</Link></div></section></>;
}
