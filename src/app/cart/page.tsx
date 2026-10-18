import type { Metadata } from "next";
import { CartClient } from "@/components/cart-client";

export const metadata: Metadata = { title: "Shopping Bag", description: "Review the items in your Vaelen shopping bag." };

export default function CartPage() {
  return <><header className="page-hero"><p className="eyebrow">Your selection</p><h1>Shopping bag</h1><p>Review your selected pieces before continuing.</p></header><section className="section"><CartClient /></section></>;
}
