export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

export function calculateSubtotal(items: Pick<CartItem, "price" | "quantity">[]) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
