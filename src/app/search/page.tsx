import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Search", description: "Search the Vaelen product edit." };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query ? products.filter((p) => `${p.name} ${p.category} ${p.color} ${p.description}`.toLowerCase().includes(query)) : [];
  return <>
    <header className="page-hero"><p className="eyebrow">Find your next favourite</p><h1>Search Vaelen</h1><form className="search-form" action="/search"><label className="sr-only" htmlFor="q">Search products</label><input id="q" name="q" defaultValue={q} placeholder="Try a shirt, knit, or accessory" /><button className="button button-dark" type="submit">Search ↗</button></form></header>
    <section className="section">
      {!query ? <div className="empty-state"><h2>What are you looking for?</h2><p>Search by product name, category, or colour.</p><Link href="/shop" className="button button-outline">Browse all products</Link></div> : results.length ? <><div className="section-heading"><h2>Results for “{q}”</h2><span>{results.length} items</span></div><ProductGrid products={results} /></> : <div className="empty-state"><h2>No matches just yet</h2><p>Try a broader search or explore the full collection.</p><Link href="/shop" className="button button-dark">Shop all</Link></div>}
    </section>
  </>;
}
