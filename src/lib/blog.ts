export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  readTime: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "build-a-versatile-wardrobe",
    title: "How to Build a Versatile Everyday Wardrobe",
    category: "Style Notes",
    excerpt: "A thoughtful wardrobe starts with pieces that work together, feel comfortable, and suit your everyday rhythm.",
    date: "2026-09-18",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Fashion editorial showing coordinated everyday outfits",
    readTime: "4 min read",
    body: [
      "A versatile wardrobe is less about owning more and more about understanding what you reach for. Begin with a small set of dependable pieces that suit your routine.",
      "Choose a palette that makes mixing and matching easy. Neutral foundations can be paired with one or two accent tones to keep outfits expressive without making daily choices complicated.",
      "Fit matters more than a trend cycle. Look for shapes that feel comfortable when sitting, walking, commuting, and spending time with friends.",
      "Care is part of a considered wardrobe. Follow garment labels, air pieces between wears when appropriate, and repair small issues before they grow."
    ]
  },
  {
    slug: "care-for-your-clothes",
    title: "Simple Ways to Care for Your Clothes",
    category: "Care Guide",
    excerpt: "A few mindful habits can help your favourite pieces stay in rotation for longer.",
    date: "2026-09-12",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Carefully arranged clothing in a wardrobe",
    readTime: "3 min read",
    body: [
      "Start by reading the care label before washing. Different fibres and finishes can need different temperatures, cycles, and drying methods.",
      "Wash only when needed and sort similar colours together. Gentle cycles and suitable detergents can reduce unnecessary wear on many garments.",
      "Store knitwear folded when possible, keep items dry, and use hangers that support the garment's shape.",
      "Small repairs, such as replacing a button, can keep a useful piece in service rather than sending it to the back of a drawer."
    ]
  },
  {
    slug: "understanding-fabric",
    title: "A Practical Guide to Everyday Fabrics",
    category: "Materials",
    excerpt: "Learn what to consider when choosing fabric for comfort, structure, and care.",
    date: "2026-09-05",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Clothing fabrics and textures in a fashion studio",
    readTime: "5 min read",
    body: [
      "Fabric affects how a garment feels, drapes, breathes, and responds to care. The best choice depends on the item and how you plan to wear it.",
      "Cotton is widely used in everyday clothing and can feel comfortable across many settings. Its weight and weave make a meaningful difference to the final garment.",
      "Knits often offer flexibility, while woven fabrics can provide a more structured shape. Neither is automatically better; construction and intended use matter.",
      "Check the fibre composition and care instructions on each product rather than relying on a fabric name alone."
    ]
  },
  {
    slug: "styling-essentials-for-any-day",
    title: "Styling Essentials for Any Day",
    category: "Outfit Ideas",
    excerpt: "Use proportion, layering, and a considered finishing touch to make everyday outfits feel intentional.",
    date: "2026-08-28",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Modern fashion styling in a neutral palette",
    readTime: "4 min read",
    body: [
      "Begin with the occasion and your comfort. A dependable base layer makes it easier to add a jacket, knit, or accessory as the day changes.",
      "Think about proportion: a relaxed top can work well with a cleaner trouser shape, while a more structured top can balance a wider leg.",
      "Repeat a colour in two places to make an outfit feel cohesive. This can be as simple as matching a bag to a belt or shoes.",
      "The most useful style rule is the one that helps you feel comfortable and like yourself."
    ]
  },
  {
    slug: "create-a-capsule-wardrobe",
    title: "A Calm Start to a Capsule Wardrobe",
    category: "Wardrobe Notes",
    excerpt: "Build a practical rotation by noticing what you wear, what you need, and what works together.",
    date: "2026-08-20",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Neutral wardrobe pieces arranged for an editorial",
    readTime: "5 min read",
    body: [
      "A capsule wardrobe is a useful planning approach, not a strict number of items. Start by reviewing the pieces you already wear often.",
      "Identify gaps based on real routines. If most days involve walking and commuting, prioritise comfortable footwear and adaptable layers.",
      "Try combinations before buying new pieces. A short list of outfits can reveal whether a new item will add flexibility or simply duplicate something you own.",
      "Keep the process personal. The aim is a wardrobe that supports your life rather than a set of rules to follow."
    ]
  }
];
