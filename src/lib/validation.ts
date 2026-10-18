import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  topic: z.string().trim().min(1).max(100),
  message: z.string().trim().min(10).max(5000)
});

export const checkoutContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  address: z.string().trim().min(1).max(300),
  city: z.string().trim().min(1).max(120),
  postalCode: z.string().trim().min(1).max(30)
});
