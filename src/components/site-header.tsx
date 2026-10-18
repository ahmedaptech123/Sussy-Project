"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X, Heart } from "lucide-react";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const update = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("vaelen-cart") || "[]");
        setCartCount(Array.isArray(cart) ? cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0) : 0);
      } catch {
        setCartCount(0);
      }
    };
    update();
    window.addEventListener("storage", update);
    window.addEventListener("vaelen-cart-updated", update);
    return () => {
      window.removeEventListener("storage", update);
      window.removeEventListener("vaelen-cart-updated", update);
    };
  }, []);

  const navLinks = [
    ["Shop", "/shop"],
    ["New arrivals", "/collections/new-arrivals"],
    ["Men", "/collections/men"],
    ["Women", "/collections/women"],
    ["Journal", "/blog"],
    ["Our story", "/about"]
  ];

  return (
    <header className="site-header">
      <div className="announcement">A considered wardrobe starts here <span>—</span> Discover Vaelen</div>
      <div className="header-main">
        <button className="icon-button mobile-menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <Link className="wordmark" href="/" aria-label="Vaelen home">VAELEN<span>®</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="icon-button" href="/search" aria-label="Search"><Search size={20} /></Link>
          <Link className="icon-button optional-action" href="/wishlist" aria-label="Wishlist"><Heart size={19} /></Link>
          <Link className="icon-button bag-link" href="/cart" aria-label={`Shopping bag, ${cartCount} items`}>
            <ShoppingBag size={20} /><span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
        {navLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>}
    </header>
  );
}
