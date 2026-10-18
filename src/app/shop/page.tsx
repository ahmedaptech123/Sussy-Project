import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop All",
  description: "Explore the Vaelen edit of considered clothing and everyday accessories."
};

export default function ShopPage() {
  return <>
    <header className="page-hero"><p className="eyebrow">The Vaelen edit</p><h1>Shop all</h1><p>Everyday essentials, selected for how you live and move.</p></header>
    <section className="section">
      <div className="filter-row"><span className="fine-print">{products.length} demonstration pieces</span><span className="fine-print">Clothing · Accessories</span></div>
      <ProductGrid products={products} />
    </section>
  </>;
}
