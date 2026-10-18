import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = { title: "The Journal", description: "Style notes, clothing care, fabric guides, and everyday outfit inspiration from Vaelen." };

export default function BlogPage() {
  return <>
    <header className="page-hero"><p className="eyebrow">The Vaelen journal</p><h1>Notes on getting dressed.</h1><p>Thoughts on personal style, everyday essentials, and taking care of the pieces you love.</p></header>
    <section className="section"><div className="blog-layout">{posts.map((post) => <article className="journal-card" key={post.slug}><Link className="journal-image" href={`/blog/${post.slug}`}><Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 780px) 100vw, 33vw" /></Link><div className="journal-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="text-link">Read story ↗</Link></article>)}</div></section>
  </>;
}
