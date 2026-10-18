import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Contact Vaelen with questions about products, orders, or the website." };

export default function ContactPage() {
  return <><header className="page-hero"><p className="eyebrow">We are listening</p><h1>Let's talk.</h1><p>Questions about a product or need a hand? Send us a note using the form below.</p></header><section className="section"><div className="content-narrow"><p className="notice">Demo contact form: messages are not sent or stored until a backend/email service is connected.</p><ContactForm /></div></section></>;
}
