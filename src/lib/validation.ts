import { z } from "zod";
import { countryCodes } from "@/data/forms";

/** Field schemas shared by forms, so messages and rules stay consistent. */
export const fields = {
  name: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .min(2, "Your name looks too short.")
    .max(80, "Please keep your name under 80 characters.")
    .regex(/^[\p{L}][\p{L}\s.'-]*$/u, "Please use letters only."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(120, "Please keep your email under 120 characters.")
    .pipe(z.email("Please enter a valid email address, e.g. name@example.com.")),
  countryCode: z.string().refine((iso) => countryCodes.some((country) => country.iso === iso), "Please choose a country code."),
  /** National number; spaces and dashes are allowed and ignored. Checked per country in the form schema. */
  mobile: z
    .string()
    .trim()
    .min(1, "Please enter your mobile number.")
    .regex(/^[\d\s-]+$/, "Please use digits only."),
  select: (message: string) => z.string().min(1, message),
  message: (min: number) =>
    z
      .string()
      .trim()
      .min(1, "Please tell us a little about your project.")
      .min(min, `Please add a little more detail (at least ${min} characters).`)
      .max(2000, "Please keep your message under 2,000 characters."),
};

/** Validates a national mobile number against the chosen country's rule. */
export function mobileIssue(iso: string, value: string): string | null {
  const country = countryCodes.find((item) => item.iso === iso);
  if (!country) return null;
  const digits = value.replace(/[\s-]/g, "");
  if (!/^\d+$/.test(digits)) return null; // the field schema already reports this
  return country.pattern.test(digits) ? null : `Please enter a valid ${country.name} mobile number (${country.format}).`;
}
