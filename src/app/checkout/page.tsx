import type { Metadata } from "next";
import { CheckoutForm } from "@/components/checkout-form";

export const metadata: Metadata = { title: "Checkout", description: "Continue your Vaelen checkout demonstration." };

export default function CheckoutPage() {
  return <><header className="page-hero"><p className="eyebrow">Almost yours</p><h1>Checkout</h1><p>This project currently includes a demo checkout form, not a live payment integration.</p></header><section className="section"><CheckoutForm /></section></>;
}
