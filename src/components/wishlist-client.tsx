"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductGrid } from "@/components/product-grid";
import { products, Product } from "@/lib/products";

export function WishlistClient() {
  const [items, setItems] = useState<Product[]>([]);
  useEffect(() => {
    try {
      const ids: string[] = JSON.parse(localStorage.getItem("vaelen-wishlist") || "[]");
      setItems(products.filter((product) => ids.includes(product.id)));
    } catch { setItems([]); }
  }, []);
  if (!items.length) return <div className="empty-state"><h2>No saved pieces yet</h2><p>Tap the heart on a product to keep it here.</p><Link href="/shop" className="button button-dark">Explore the shop</Link></div>;
  return <ProductGrid products={items} />;
}
