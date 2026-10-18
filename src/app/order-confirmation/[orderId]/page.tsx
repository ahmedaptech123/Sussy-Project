import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export const metadata: Metadata = { title: "Order confirmation", robots: { index: false, follow: false } };

export default async function OrderConfirmationPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  if (!orderId) notFound();
  return <><header className="page-hero"><p className="eyebrow">Thank you</p><h1>Order confirmation</h1><p>Reference: {orderId}</p></header><section className="section"><div className="content-narrow"><p className="notice">This is a demonstration route, not proof of a paid order. A production page must verify the order server-side and avoid exposing private order data.</p><Link href="/shop" className="button button-dark">Continue shopping ↗</Link></div></section></>;
}
