"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/products";

export function AddToCart({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function add() {
    try {
      const cart = JSON.parse(localStorage.getItem("vaelen-cart") || "[]");
      const key = `${product.id}:${size}`;
      const existing = cart.find((item: { key: string }) => item.key === key);
      if (existing) existing.quantity += quantity;
      else cart.push({ key, productId: product.id, slug: product.slug, name: product.name, price: product.price, image: product.image, size, quantity });
      localStorage.setItem("vaelen-cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("vaelen-cart-updated"));
      setMessage(`${product.name} added to your demo bag.`);
    } catch {
      setMessage("Could not update the bag. Please try again.");
    }
  }

  return <div className="purchase-panel">
    <label className="field-label" htmlFor="product-size">Select size</label>
    <select id="product-size" value={size} onChange={(event) => setSize(event.target.value)}>{product.sizes.map((item) => <option key={item} value={item}>{item}</option>)}</select>
    <label className="field-label" htmlFor="product-quantity">Quantity</label>
    <div className="quantity-control"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><span>{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity(Math.min(10, quantity + 1))}>+</button></div>
    <button type="button" className="button button-dark add-cart-button" onClick={add}><ShoppingBag size={17} /> Add to bag</button>
    {message && <p role="status" className="form-message">{message} <a href="/cart">View bag</a></p>}
    <p className="fine-print">Demo cart only. Checkout is not connected to live payment processing.</p>
  </div>;
}
