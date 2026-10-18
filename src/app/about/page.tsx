import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About Vaelen", description: "Discover the Vaelen point of view: considered essentials and modern everyday style." };

export default function AboutPage() {
  return <>
    <header className="page-hero"><p className="eyebrow">A point of view</p><h1>Made for your<br />everyday, your way.</h1><p>Vaelen is a modern fashion concept built around considered essentials, versatile shapes, and personal expression.</p></header>
    <section className="section"><div className="editorial"><div className="editorial-media"><Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85" alt="Fashion editorial featuring modern everyday styling" fill sizes="(max-width: 780px) 100vw, 50vw" /></div><div className="editorial-copy"><p className="eyebrow">Our philosophy</p><h2>Less noise.<br />More intention.</h2><p>We see clothing as part of real life: the early start, the long day, the spontaneous plan. Our concept is to make getting dressed feel simpler while leaving space for individual style.</p><p>Vaelen is presented here as a developing brand concept. Product, sourcing, and manufacturing details should be added only when verified.</p><Link href="/shop" className="button button-dark">Explore the edit ↗</Link></div></div></section>
  </>;
}
