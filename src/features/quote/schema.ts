import { z } from "zod";
import { fields } from "@/lib/validation";

export const quoteSchema = z.object({
  name: fields.name,
  email: fields.email,
  phone: fields.phone,
  company: z.string().trim().max(100, "Company name is too long."),
  projectType: fields.select("Please choose a project type."),
  location: z.string().trim().min(2, "Please enter the project location."),
  area: z.string().trim().max(40, "Please keep this brief."),
  budget: fields.select("Please choose an estimated budget."),
  timeline: fields.select("Please choose a timeline."),
  details: fields.message(30),
  consent: z.boolean().refine((value) => value, "Please agree so we can contact you about your project."),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;

export const quoteDefaults: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  location: "",
  area: "",
  budget: "",
  timeline: "",
  details: "",
  consent: false,
};
