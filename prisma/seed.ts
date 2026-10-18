import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const clothing = await prisma.category.upsert({
    where: { slug: "clothing" },
    update: {},
    create: { slug: "clothing", name: "Clothing" }
  });
  const accessories = await prisma.category.upsert({
    where: { slug: "accessories" },
    update: {},
    create: { slug: "accessories", name: "Accessories" }
  });

  const sample = [
    { slug: "everyday-overshirt", name: "Everyday Overshirt", categoryId: clothing.id, description: "Demo seed product; replace with verified details.", sku: "VA-001-ST-M", price: "89.00" },
    { slug: "structured-tote", name: "Structured Everyday Tote", categoryId: accessories.id, description: "Demo seed product; replace with verified details.", sku: "VA-003-ES-OS", price: "58.00" }
  ];

  for (const item of sample) {
    const product = await prisma.product.upsert({
      where: { slug: item.slug },
      update: { name: item.name, categoryId: item.categoryId, description: item.description },
      create: { slug: item.slug, name: item.name, categoryId: item.categoryId, description: item.description }
    });
    await prisma.productVariant.upsert({
      where: { sku: item.sku },
      update: { price: item.price, stock: 10 },
      create: { productId: product.id, sku: item.sku, price: item.price, stock: 10, size: item.slug.includes("tote") ? "One size" : "M", color: item.slug.includes("tote") ? "Espresso" : "Stone" }
    });
  }
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (error) => { console.error(error); await prisma.$disconnect(); process.exit(1); });
