import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";

const collections: Record<string, { title: string; description: string; ids?: string[] }> = {
  "new-arrivals": { title: "New arrivals", description: "Fresh additions to your everyday rotation.", ids: ["va-002", "va-007", "va-008", "va-004"] },
  "best-sellers": { title: "Best sellers", description: "A few favourites from the Vaelen demonstration edit.", ids: ["va-001", "va-002", "va-004", "va-003"] },
  men: { title: "For him", description: "Modern everyday shapes and versatile layers." },
  women: { title: "For her", description: "Considered silhouettes for your own point of view." },
  accessories: { title: "Accessories", description: "Finishing touches for the everyday.", ids: ["va-003", "va-006", "va-008"] }
};

export function generateStaticParams() {
  return Object.keys(collections).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections[slug];
  return collection ? { title: collection.title, description: collection.description } : { title: "Collection not found" };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections[slug];
  if (!collection) notFound();
  const collectionProducts = collection.ids ? products.filter((p) => collection.ids?.includes(p.id)) : products.filter((p) => p.category === "Clothing");
  return <>
    <header className="page-hero"><p className="eyebrow">Vaelen collections</p><h1>{collection.title}</h1><p>{collection.description}</p></header>
    <section className="section"><ProductGrid products={collectionProducts} /></section>
  </>;
}
