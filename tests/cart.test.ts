import { describe, expect, it } from "vitest";
import { calculateSubtotal } from "../src/lib/cart";

describe("calculateSubtotal", () => {
  it("adds item prices multiplied by quantity", () => {
    expect(calculateSubtotal([{ price: 10, quantity: 2 }, { price: 7, quantity: 3 }])).toBe(41);
  });

  it("returns zero for an empty cart", () => {
    expect(calculateSubtotal([])).toBe(0);
  });
});
