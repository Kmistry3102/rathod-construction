import { services } from "@/data/services";
import type { SelectOption } from "@/types";

export const projectTypeOptions: SelectOption[] = [
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: "other", label: "Something else" },
];

export interface CountryCode {
  /** ISO 3166 alpha-2 code — the select's value. */
  iso: string;
  dial: string;
  name: string;
  /** National mobile number rule, applied to the digits only. */
  pattern: RegExp;
  /** Human-readable hint used in validation messages. */
  format: string;
  /** Sample number shown as the input placeholder. */
  example: string;
}

/** Supported dialling codes; India first as the default market. */
export const countryCodes: CountryCode[] = [
  { iso: "IN", dial: "+91", name: "India", pattern: /^[6-9]\d{9}$/, format: "10 digits starting with 6–9", example: "98765 43210" },
  { iso: "AE", dial: "+971", name: "United Arab Emirates", pattern: /^5\d{8}$/, format: "9 digits starting with 5", example: "50 123 4567" },
  { iso: "US", dial: "+1", name: "United States / Canada", pattern: /^[2-9]\d{9}$/, format: "10 digits", example: "201 555 0123" },
  { iso: "GB", dial: "+44", name: "United Kingdom", pattern: /^7\d{9}$/, format: "10 digits starting with 7", example: "7400 123456" },
  { iso: "AU", dial: "+61", name: "Australia", pattern: /^4\d{8}$/, format: "9 digits starting with 4", example: "412 345 678" },
  { iso: "SG", dial: "+65", name: "Singapore", pattern: /^[89]\d{7}$/, format: "8 digits starting with 8 or 9", example: "8123 4567" },
  { iso: "SA", dial: "+966", name: "Saudi Arabia", pattern: /^5\d{8}$/, format: "9 digits starting with 5", example: "50 123 4567" },
];

export const defaultCountry = countryCodes[0];
