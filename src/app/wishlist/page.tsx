import type { Metadata } from "next";
import { WishlistClient } from "@/components/wishlist-client";

export const metadata: Metadata = { title: "Wishlist", description: "Your saved Vaelen favourites." };

export default function WishlistPage() {
  return <><header className="page-hero"><p className="eyebrow">Keep close</p><h1>Your wishlist</h1><p>Save pieces you would like to revisit.</p></header><section className="section"><WishlistClient /></section></>;
}
