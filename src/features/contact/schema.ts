import { z } from "zod";
import { defaultCountry } from "@/data/forms";
import { fields, mobileIssue } from "@/lib/validation";

export const contactSchema = z
  .object({
    name: fields.name,
    email: fields.email,
    countryCode: fields.countryCode,
    mobile: fields.mobile,
    projectType: fields.select("Please choose a project type."),
    message: fields.message(20),
  })
  .superRefine((values, ctx) => {
    const issue = mobileIssue(values.countryCode, values.mobile);
    if (issue) ctx.addIssue({ code: "custom", path: ["mobile"], message: issue });
  });

export type ContactFormValues = z.infer<typeof contactSchema>;

export const contactDefaults: ContactFormValues = {
  name: "",
  email: "",
  countryCode: defaultCountry.iso,
  mobile: "",
  projectType: "",
  message: "",
};
