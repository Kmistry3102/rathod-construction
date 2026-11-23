import { services } from "@/data/services";
import type { SelectOption } from "@/types";

export const contactSubjects: SelectOption[] = [
  { value: "new-project", label: "New project enquiry" },
  { value: "existing-project", label: "Existing project" },
  { value: "partnership", label: "Partnership / supplier" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Something else" },
];

export const projectTypeOptions: SelectOption[] = services.map((service) => ({
  value: service.slug,
  label: service.title,
}));

export const budgetOptions: SelectOption[] = [
  { value: "under-1cr", label: "Under ₹1 Cr" },
  { value: "1-5cr", label: "₹1 – 5 Cr" },
  { value: "5-25cr", label: "₹5 – 25 Cr" },
  { value: "25-100cr", label: "₹25 – 100 Cr" },
  { value: "100cr-plus", label: "₹100 Cr +" },
];

export const timelineOptions: SelectOption[] = [
  { value: "asap", label: "As soon as possible" },
  { value: "3-months", label: "Within 3 months" },
  { value: "6-months", label: "Within 6 months" },
  { value: "12-months", label: "Within 12 months" },
  { value: "exploring", label: "Just exploring" },
];
