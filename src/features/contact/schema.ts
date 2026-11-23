import { z } from "zod";
import { fields } from "@/lib/validation";

export const contactSchema = z.object({
  name: fields.name,
  email: fields.email,
  phone: fields.optionalPhone,
  subject: fields.select("Please choose a subject."),
  message: fields.message(20),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const contactDefaults: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
