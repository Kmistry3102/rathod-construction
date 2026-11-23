"use client";

import type { ReactNode } from "react";
import { LoaderCircle } from "lucide-react";
import { describedBy, Field, Input, Select, Textarea } from "@/components/forms/FormControls";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { useMockForm } from "@/components/forms/useMockForm";
import { Button } from "@/components/ui/Button";
import { budgetOptions, projectTypeOptions, timelineOptions } from "@/data/forms";
import { quoteDefaults, quoteSchema } from "@/features/quote/schema";

function Fieldset({ step, legend, children }: { step: string; legend: string; children: ReactNode }) {
  return (
    <fieldset className="grid gap-6 sm:grid-cols-2">
      <legend className="mb-6 flex items-center gap-3 font-display text-lg font-semibold text-navy-deep">
        <span className="inline-flex size-8 items-center justify-center rounded-full bg-navy-deep text-xs text-white">
          {step}
        </span>
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

export function QuoteForm() {
  const { form, onSubmit, submitted, startOver } = useMockForm(quoteSchema, quoteDefaults);
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  if (submitted) {
    return (
      <FormSuccess
        title="Your quote request is in."
        message="Thank you for considering Rathod Construction. A senior estimator will review your brief and contact you within two business days."
        onReset={startOver}
        resetLabel="Request another quote"
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-12">
      <Fieldset step="1" legend="Your details">
        <Field id="quote-name" label="Full name" required error={errors.name?.message}>
          <Input
            id="quote-name"
            autoComplete="name"
            placeholder="Your name"
            invalid={!!errors.name}
            {...describedBy("quote-name", errors.name?.message)}
            {...register("name")}
          />
        </Field>
        <Field id="quote-company" label="Company" hint="Optional" error={errors.company?.message}>
          <Input
            id="quote-company"
            autoComplete="organization"
            placeholder="Company or organisation"
            invalid={!!errors.company}
            {...describedBy("quote-company", errors.company?.message)}
            {...register("company")}
          />
        </Field>
        <Field id="quote-email" label="Email address" required error={errors.email?.message}>
          <Input
            id="quote-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            invalid={!!errors.email}
            {...describedBy("quote-email", errors.email?.message)}
            {...register("email")}
          />
        </Field>
        <Field id="quote-phone" label="Phone number" required error={errors.phone?.message}>
          <Input
            id="quote-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            invalid={!!errors.phone}
            {...describedBy("quote-phone", errors.phone?.message)}
            {...register("phone")}
          />
        </Field>
      </Fieldset>

      <Fieldset step="2" legend="Project details">
        <Field id="quote-type" label="Project type" required error={errors.projectType?.message}>
          <Select
            id="quote-type"
            placeholder="Select a service"
            options={projectTypeOptions}
            invalid={!!errors.projectType}
            {...describedBy("quote-type", errors.projectType?.message)}
            {...register("projectType")}
          />
        </Field>
        <Field id="quote-location" label="Project location" required error={errors.location?.message}>
          <Input
            id="quote-location"
            placeholder="City, State"
            invalid={!!errors.location}
            {...describedBy("quote-location", errors.location?.message)}
            {...register("location")}
          />
        </Field>
        <Field id="quote-budget" label="Estimated budget" required error={errors.budget?.message}>
          <Select
            id="quote-budget"
            placeholder="Select a range"
            options={budgetOptions}
            invalid={!!errors.budget}
            {...describedBy("quote-budget", errors.budget?.message)}
            {...register("budget")}
          />
        </Field>
        <Field id="quote-timeline" label="Desired start" required error={errors.timeline?.message}>
          <Select
            id="quote-timeline"
            placeholder="Select a timeline"
            options={timelineOptions}
            invalid={!!errors.timeline}
            {...describedBy("quote-timeline", errors.timeline?.message)}
            {...register("timeline")}
          />
        </Field>
        <Field id="quote-area" label="Approximate size" hint="Optional — e.g. 5,000 sq. ft." error={errors.area?.message} className="sm:col-span-2">
          <Input
            id="quote-area"
            placeholder="Built-up area or plot size"
            invalid={!!errors.area}
            {...describedBy("quote-area", errors.area?.message)}
            {...register("area")}
          />
        </Field>
        <Field id="quote-details" label="Tell us about your project" required error={errors.details?.message} className="sm:col-span-2">
          <Textarea
            id="quote-details"
            rows={6}
            placeholder="Describe your vision, site, requirements and anything else we should know."
            invalid={!!errors.details}
            {...describedBy("quote-details", errors.details?.message)}
            {...register("details")}
          />
        </Field>
      </Fieldset>

      <div className="space-y-8 border-t border-grey-soft pt-8">
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate">
            <input
              type="checkbox"
              className="mt-0.5 size-5 shrink-0 cursor-pointer rounded accent-orange"
              {...describedBy("quote-consent", errors.consent?.message)}
              {...register("consent")}
            />
            I agree to be contacted by Rathod Construction about this enquiry. My details will not be shared with third
            parties.
          </label>
          {errors.consent?.message && (
            <p id="quote-consent-error" role="alert" className="mt-2 text-xs font-medium text-red-600">
              {errors.consent.message}
            </p>
          )}
        </div>
        <Button type="submit" size="lg" withArrow={!isSubmitting} disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> Submitting…
            </span>
          ) : (
            "Request my quote"
          )}
        </Button>
      </div>
    </form>
  );
}
