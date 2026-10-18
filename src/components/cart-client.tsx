"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CartItem, calculateSubtotal } from "@/lib/cart";
import { formatPrice } from "@/lib/products";

type StoredItem = CartItem & { key: string };

export function CartClient() {
  const [items, setItems] = useState<StoredItem[]>([]);
  const [ready, setReady] = useState(false);

  function readCart() {
    try {
      const value = JSON.parse(localStorage.getItem("vaelen-cart") || "[]");
      setItems(Array.isArray(value) ? value : []);
    } catch { setItems([]); }
    setReady(true);
  }

  useEffect(() => {
    readCart();
    const update = () => readCart();
    window.addEventListener("vaelen-cart-updated", update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener("vaelen-cart-updated", update);
      window.removeEventListener("storage", update);
    };
  }, []);

  function save(next: StoredItem[]) {
    setItems(next);
    localStorage.setItem("vaelen-cart", JSON.stringify(next));
    window.dispatchEvent(new Event("vaelen-cart-updated"));
  }

  if (!ready) return <p className="fine-print">Loading your bag…</p>;
  if (!items.length) return <div className="empty-state"><h2>Your bag is taking a breather.</h2><p>Find something you love and it will appear here.</p><Link href="/shop" className="button button-dark">Explore the collection</Link></div>;

  const subtotal = calculateSubtotal(items);
  return <div className="cart-layout">
    <div className="cart-items">{items.map((item) => <article className="cart-item" key={item.key}>
      <div className="cart-item-image"><Image src={item.image} alt={item.name} fill sizes="110px" /></div>
      <div><h3><Link href={`/products/${item.slug}`}>{item.name}</Link></h3><p>Size: {item.size}</p><p>{formatPrice(item.price)} each</p><div className="cart-item-actions"><button onClick={() => save(items.map((row) => row.key === item.key ? { ...row, quantity: Math.max(1, row.quantity - 1) } : row))}>−</button><span>{item.quantity}</span><button onClick={() => save(items.map((row) => row.key === item.key ? { ...row, quantity: Math.min(10, row.quantity + 1) } : row))}>+</button><button onClick={() => save(items.filter((row) => row.key !== item.key))}>Remove</button></div></div>
      <strong>{formatPrice(item.price * item.quantity)}</strong>
    </article>)}</div>
    <aside className="cart-summary"><h2>Order summary</h2><div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="summary-line"><span>Shipping</span><span>Calculated later</span></div><div className="summary-line"><span>Taxes</span><span>Calculated later</span></div><div className="summary-line summary-total"><span>Estimated subtotal</span><span>{formatPrice(subtotal)}</span></div><p className="fine-print">Demo pricing in USD. Shipping, tax, inventory, and payment are not connected to live services.</p><Link href="/checkout" className="button button-dark">Continue to checkout ↗</Link><Link href="/shop" className="text-link">Continue shopping</Link></aside>
  </div>;
}
