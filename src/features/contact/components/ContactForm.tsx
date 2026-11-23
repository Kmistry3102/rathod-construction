"use client";

import { LoaderCircle } from "lucide-react";
import { describedBy, Field, Input, Select, Textarea } from "@/components/forms/FormControls";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { useMockForm } from "@/components/forms/useMockForm";
import { Button } from "@/components/ui/Button";
import { contactSubjects } from "@/data/forms";
import { contactDefaults, contactSchema } from "@/features/contact/schema";

export function ContactForm() {
  const { form, onSubmit, submitted, startOver } = useMockForm(contactSchema, contactDefaults);
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  if (submitted) {
    return (
      <FormSuccess
        title="Thank you — message received."
        message="A member of our team will get back to you within one business day."
        onReset={startOver}
      />
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <Field id="contact-name" label="Full name" required error={errors.name?.message}>
        <Input
          id="contact-name"
          autoComplete="name"
          placeholder="Your name"
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
          placeholder="you@example.com"
          invalid={!!errors.email}
          {...describedBy("contact-email", errors.email?.message)}
          {...register("email")}
        />
      </Field>
      <Field id="contact-phone" label="Phone number" error={errors.phone?.message}>
        <Input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          invalid={!!errors.phone}
          {...describedBy("contact-phone", errors.phone?.message)}
          {...register("phone")}
        />
      </Field>
      <Field id="contact-subject" label="Subject" required error={errors.subject?.message}>
        <Select
          id="contact-subject"
          placeholder="Select a subject"
          options={contactSubjects}
          invalid={!!errors.subject}
          {...describedBy("contact-subject", errors.subject?.message)}
          {...register("subject")}
        />
      </Field>
      <Field id="contact-message" label="Message" required error={errors.message?.message} className="sm:col-span-2">
        <Textarea
          id="contact-message"
          placeholder="How can we help?"
          invalid={!!errors.message}
          {...describedBy("contact-message", errors.message?.message)}
          {...register("message")}
        />
      </Field>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate">We respect your privacy and never share your details.</p>
        <Button type="submit" size="lg" withArrow={!isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle aria-hidden className="size-4 animate-spin" /> Sending…
            </span>
          ) : (
            "Send message"
          )}
        </Button>
      </div>
    </form>
  );
}
