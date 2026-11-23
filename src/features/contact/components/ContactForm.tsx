"use client";

import { Controller, useWatch } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { Dropdown, type DropdownOption } from "@/components/forms/Dropdown";
import { describedBy, Field, Input, PhoneField, Textarea } from "@/components/forms/FormControls";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { useMockForm } from "@/components/forms/useMockForm";
import { Button } from "@/components/ui/Button";
import { countryCodes, defaultCountry, projectTypeOptions } from "@/data/forms";
import { contactDefaults, contactSchema } from "@/features/contact/schema";

const countryOptions: DropdownOption[] = countryCodes.map((country) => ({
  value: country.iso,
  label: country.name,
  meta: country.dial,
  display: `${country.iso} ${country.dial}`,
}));

/** Enquiry and quote request form — validated in the browser, submission simulated. */
export function ContactForm() {
  const { form, onSubmit, submitted, startOver } = useMockForm(contactSchema, contactDefaults);
  const {
    register,
    control,
    getValues,
    trigger,
    formState: { errors, isSubmitting },
  } = form;
  const countryIso = useWatch({ control, name: "countryCode" });
  const selectedCountry = countryCodes.find((country) => country.iso === countryIso) ?? defaultCountry;

  if (submitted) {
    return (
      <FormSuccess
        title="Thank you — we'll be in touch."
        message="A member of our team will respond within one business day with next steps for your project."
        onReset={startOver}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
      <Field id="contact-name" label="Full name" required error={errors.name?.message}>
        <Input
          id="contact-name"
          autoComplete="name"
          invalid={!!errors.name}
          {...describedBy("contact-name", errors.name?.message)}
          {...register("name")}
        />
      </Field>

      <Field id="contact-email" label="Email address" required error={errors.email?.message}>
        <Input
          id="contact-email"
          type="email"
          autoComplete="email"
          invalid={!!errors.email}
          {...describedBy("contact-email", errors.email?.message)}
          {...register("email")}
        />
      </Field>

      <PhoneField
        id="contact-mobile"
        label="Mobile number"
        required
        error={errors.mobile?.message ?? errors.countryCode?.message}
        placeholder={selectedCountry.example}
        numberProps={register("mobile")}
        country={
          <Controller
            control={control}
            name="countryCode"
            render={({ field }) => (
              <Dropdown
                id="contact-country"
                variant="inline"
                aria-label="Country code"
                options={countryOptions}
                value={field.value}
                ref={field.ref}
                onBlur={field.onBlur}
                onChange={(value) => {
                  field.onChange(value);
                  // Re-check an entered number against the new country's rule.
                  if (getValues("mobile")) void trigger("mobile");
                }}
              />
            )}
          />
        }
      />

      <Field id="contact-type" label="Project type" control="select" required error={errors.projectType?.message}>
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <Dropdown
              id="contact-type"
              placeholder="Select a service"
              options={projectTypeOptions}
              value={field.value}
              ref={field.ref}
              onBlur={field.onBlur}
              onChange={field.onChange}
              invalid={!!errors.projectType}
              {...describedBy("contact-type", errors.projectType?.message)}
            />
          )}
        />
      </Field>

      <Field
        id="contact-message"
        label="About your project"
        control="textarea"
        required
        error={errors.message?.message}
        className="sm:col-span-2"
      >
        <Textarea
          id="contact-message"
          invalid={!!errors.message}
          {...describedBy("contact-message", errors.message?.message)}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-col gap-5 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate">We respect your privacy and never share your details.</p>
        <Button type="submit" size="lg" withArrow={!isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> Sending…
            </>
          ) : (
            "Send enquiry"
          )}
        </Button>
      </div>
    </form>
  );
}
