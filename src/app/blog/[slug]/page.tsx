import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.excerpt, images: [post.image], publishedTime: post.date }
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    author: { "@type": "Organization", name: "Vaelen" },
    publisher: { "@type": "Organization", name: "Vaelen", url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`
  };
  return <>
    <header className="page-hero"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/blog">Journal</Link><span>/</span><span>{post.category}</span></div><p className="eyebrow">{post.category} · {post.readTime}</p><h1>{post.title}</h1><p>{post.excerpt}</p><span className="fine-print">{new Date(`${post.date}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</span></header>
    <div className="article-layout"><article className="article-content"><div className="article-cover"><Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 780px) 100vw, 760px" /></div>{post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<p>Explore the <Link href="/shop">Vaelen edit</Link> or continue reading the <Link href="/blog">journal</Link>.</p></article><aside className="article-sidebar"><h3>More from the journal</h3>{posts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => <Link key={item.slug} href={`/blog/${item.slug}`}>{item.title} ↗</Link>)}</aside></div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </>;
}
