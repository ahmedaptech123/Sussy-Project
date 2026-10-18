import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Order details", robots: { index: false, follow: false } };

export default async function OrderDetailsPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  if (!orderId) notFound();
  return <><header className="page-hero"><p className="eyebrow">Your Vaelen</p><h1>Order details</h1><p>Reference: {orderId}</p></header><section className="section"><div className="content-narrow"><p className="notice">No order lookup is connected. This route must verify the signed-in customer's ownership before displaying real order details.</p></div></section></>;
}
