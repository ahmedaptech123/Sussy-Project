import { describe, expect, it } from "vitest";
import { checkoutContactSchema, contactSchema } from "../src/lib/validation";

describe("form validation schemas", () => {
  it("accepts a valid contact message", () => {
    expect(contactSchema.safeParse({ name: "Sam", email: "sam@example.com", topic: "Help", message: "I have a question." }).success).toBe(true);
  });

  it("rejects invalid email in contact form", () => {
    expect(contactSchema.safeParse({ name: "Sam", email: "not-an-email", topic: "Help", message: "I have a question." }).success).toBe(false);
  });

  it("requires a valid email and address for checkout contact", () => {
    expect(checkoutContactSchema.safeParse({ name: "Sam", email: "sam@example.com", address: "12 Main Street", city: "Karachi", postalCode: "74000" }).success).toBe(true);
  });
});
