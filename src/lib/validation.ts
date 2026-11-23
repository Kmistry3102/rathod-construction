import { z } from "zod";

/** Field schemas shared by every form, so messages and rules stay consistent. */
export const fields = {
  name: z.string().trim().min(2, "Please enter your full name.").max(80, "Name is too long."),
  email: z.string().trim().min(1, "Please enter your email address.").pipe(z.email("Please enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .regex(/^\+?[\d\s()-]{8,18}$/, "Please enter a valid phone number."),
  optionalPhone: z
    .string()
    .trim()
    .regex(/^(\+?[\d\s()-]{8,18})?$/, "Please enter a valid phone number."),
  select: (message: string) => z.string().min(1, message),
  message: (min: number) =>
    z
      .string()
      .trim()
      .min(min, `Please share a little more detail (at least ${min} characters).`)
      .max(2000, "Please keep your message under 2,000 characters."),
};
