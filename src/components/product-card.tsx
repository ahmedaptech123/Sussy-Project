"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product, formatPrice } from "@/lib/products";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);

  function toggleWishlist() {
    try {
      const list: string[] = JSON.parse(localStorage.getItem("vaelen-wishlist") || "[]");
      const next = saved ? list.filter((id) => id !== product.id) : Array.from(new Set([...list, product.id]));
      localStorage.setItem("vaelen-wishlist", JSON.stringify(next));
      setSaved(!saved);
      window.dispatchEvent(new Event("vaelen-wishlist-updated"));
    } catch {
      setSaved(false);
    }
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="product-image" />
        </Link>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button className={`wishlist-button ${saved ? "is-saved" : ""}`} onClick={toggleWishlist} aria-label={saved ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}><Heart size={17} fill={saved ? "currentColor" : "none"} /></button>
        <Link className="quick-view" href={`/products/${product.slug}`}>View product <span>↗</span></Link>
      </div>
      <div className="product-info">
        <div><Link href={`/products/${product.slug}`} className="product-name">{product.name}</Link><p className="product-color">{product.color}</p></div>
        <span className="product-price">{formatPrice(product.price)}</span>
      </div>
    </article>
  );
}
