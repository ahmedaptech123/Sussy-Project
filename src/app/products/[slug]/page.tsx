import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/add-to-cart";
import { ProductGrid } from "@/components/product-grid";
import { getProduct, products, formatPrice } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.name} | Vaelen`, description: product.description, images: [product.image], type: "website" }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 4);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: [product.image],
    sku: product.id,
    brand: { "@type": "Brand", name: "Vaelen" },
    offers: {
      "@type": "Offer",
      priceCurrency: siteConfig.currency,
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/products/${product.slug}`
    }
  };
  return <>
    <section className="product-detail">
      <div className="product-detail-image"><Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 780px) 100vw, 55vw" /></div>
      <div className="product-detail-copy">
        <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>{product.name}</span></div>
        <p className="eyebrow">{product.category} · VAELEN EDIT</p>
        <h1>{product.name}</h1>
        <p className="detail-price">{formatPrice(product.price)}</p>
        <p className="detail-description">{product.description}</p>
        <p className="product-color">Colour: {product.color}</p>
        <AddToCart product={product} />
        <div className="product-perks"><p>— Please check the size guide before ordering.</p><p>— Shipping and returns details are available in our customer care pages.</p><p>— Demonstration product data; availability is not connected to live inventory.</p><Link className="text-link" href="/size-guide">View size guide ↗</Link></div>
      </div>
    </section>
    <section className="section section-tight"><div className="section-heading"><div><p className="eyebrow">Keep exploring</p><h2>You may also like</h2></div></div><ProductGrid products={related} /></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }} />
  </>;
}
