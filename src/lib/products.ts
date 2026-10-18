export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  color: string;
  sizes: string[];
  image: string;
  imageAlt: string;
  description: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "va-001", slug: "everyday-overshirt", name: "Everyday Overshirt",
    category: "Clothing", price: 89, color: "Stone", sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Neutral overshirt styled on a model", description: "A versatile layer with a relaxed silhouette and considered details.", badge: "Bestseller"
  },
  {
    id: "va-002", slug: "relaxed-cotton-shirt", name: "Relaxed Cotton Shirt",
    category: "Clothing", price: 74, color: "Ivory", sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Minimal white shirt on a neutral background", description: "An easy everyday shirt designed to move between occasions.", badge: "New"
  },
  {
    id: "va-003", slug: "structured-tote", name: "Structured Everyday Tote",
    category: "Accessories", price: 58, color: "Espresso", sizes: ["One size"],
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Structured neutral everyday tote bag", description: "A clean-lined carryall for daily essentials."
  },
  {
    id: "va-004", slug: "essential-knit", name: "Essential Knit",
    category: "Clothing", price: 96, color: "Oatmeal", sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Soft neutral knitwear in an editorial setting", description: "A softly structured knit for effortless layering."
  },
  {
    id: "va-005", slug: "weekend-trouser", name: "Weekend Trouser",
    category: "Clothing", price: 92, color: "Charcoal", sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Tailored trousers with a relaxed modern fit", description: "A clean, comfortable silhouette for everyday wear."
  },
  {
    id: "va-006", slug: "everyday-sneaker", name: "Everyday Sneaker",
    category: "Accessories", price: 110, color: "Off-white", sizes: ["39", "40", "41", "42", "43", "44"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern everyday sneaker product photograph", description: "A minimal sneaker to finish your daily uniform."
  },
  {
    id: "va-007", slug: "utility-jacket", name: "Utility Jacket", category: "Clothing",
    price: 138, color: "Olive", sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Olive utility jacket in a fashion product photograph", description: "A practical outer layer with a clean, modern shape."
  },
  {
    id: "va-008", slug: "minimal-crossbody", name: "Minimal Crossbody", category: "Accessories",
    price: 66, color: "Black", sizes: ["One size"],
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Minimal black crossbody bag", description: "A compact essential for days on the move."
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(price);
}
