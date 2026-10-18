import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { NewsletterForm } from "@/components/newsletter-form";
import { products } from "@/lib/products";
import { posts } from "@/lib/blog";

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="hero-copy reveal">
        <p className="eyebrow">The new everyday</p>
        <h1>Less, but<br />better.</h1>
        <p>Considered essentials and modern silhouettes made for everyday expression.</p>
        <Link href="/shop" className="button button-dark">Explore the collection <span>↗</span></Link>
      </div>
      <div className="hero-media">
        <Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=90" alt="Contemporary fashion editorial with modern everyday looks" fill priority sizes="(max-width: 780px) 100vw, 58vw" />
        <span className="hero-caption">A study in everyday form · 01</span>
      </div>
    </section>

    <div className="benefit-strip">
      <div className="benefit"><strong>Considered design</strong><span>Everyday pieces, thoughtfully selected</span></div>
      <div className="benefit"><strong>Easy-to-wear essentials</strong><span>Made to work with your wardrobe</span></div>
      <div className="benefit"><strong>Here to help</strong><span><Link href="/contact">Our team is a message away</Link></span></div>
    </div>

    <section className="section">
      <div className="section-heading"><div><p className="eyebrow">Find your uniform</p><h2>Shop by mood</h2></div><Link className="text-link" href="/shop">View everything <span>↗</span></Link></div>
      <div className="collection-grid">
        <Link className="collection-card" href="/collections/men"><Image src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85" alt="Modern menswear editorial styling" fill sizes="(max-width: 780px) 50vw, 30vw" /><div className="collection-overlay"><h3>For him</h3><span>↗</span></div></Link>
        <Link className="collection-card" href="/collections/women"><Image src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85" alt="Contemporary womenswear fashion editorial" fill sizes="(max-width: 780px) 50vw, 30vw" /><div className="collection-overlay"><h3>For her</h3><span>↗</span></div></Link>
        <Link className="collection-card" href="/collections/accessories"><Image src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85" alt="Minimal everyday accessories" fill sizes="(max-width: 780px) 100vw, 30vw" /><div className="collection-overlay"><h3>The finishing touch</h3><span>↗</span></div></Link>
      </div>
    </section>

    <section className="section section-tight">
      <div className="section-heading"><div><p className="eyebrow">The pieces to know</p><h2>Current favourites</h2></div><Link className="text-link" href="/shop">Shop all <span>↗</span></Link></div>
      <ProductGrid products={products.slice(0, 4)} />
    </section>

    <section className="section">
      <div className="editorial">
        <div className="editorial-media"><Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85" alt="Carefully curated clothing in a neutral palette" fill sizes="(max-width: 780px) 100vw, 50vw" /></div>
        <div className="editorial-copy"><p className="eyebrow">The Vaelen point of view</p><h2>Good style<br />makes room<br />for real life.</h2><p>We believe the most useful pieces are the ones you return to. Explore a considered approach to getting dressed, built around versatility and personal expression.</p><Link href="/about" className="button button-outline">Get to know us <span>↗</span></Link></div>
      </div>
    </section>

    <section className="section">
      <div className="section-heading"><div><p className="eyebrow">From the journal</p><h2>Notes on getting dressed</h2></div><Link href="/blog" className="text-link">Read the journal <span>↗</span></Link></div>
      <div className="journal-grid">{posts.slice(0, 3).map((post) => <article className="journal-card" key={post.slug}><Link className="journal-image" href={`/blog/${post.slug}`}><Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 780px) 100vw, 33vw" /></Link><div className="journal-meta"><span>{post.category}</span><span>{post.readTime}</span></div><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/blog/${post.slug}`} className="text-link">Read story <span>↗</span></Link></article>)}</div>
    </section>

    <section className="newsletter">
      <div><p className="eyebrow">A little Vaelen in your inbox</p><h2>Good things,<br />occasionally.</h2><p>Notes on new arrivals, personal style, and the details we love.</p></div>
      <NewsletterForm />
    </section>
  </>;
}
