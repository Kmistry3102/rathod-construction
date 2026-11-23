"use client";

import { useState } from "react";
import { useForm, type DefaultValues, type FieldValues, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { wait } from "@/lib/utils";

/**
 * React Hook Form + Zod wired for client-side validation, with a simulated
 * submission (frontend-only — there is no backend to send data to).
 */
export function useMockForm<TValues extends FieldValues>(
  schema: z.ZodType<TValues, TValues>,
  defaultValues: DefaultValues<TValues>,
) {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<TValues>({
    resolver: zodResolver(schema) as Resolver<TValues>,
    defaultValues,
    mode: "onTouched",
  });

  const onSubmit = form.handleSubmit(async () => {
    await wait(1200);
    setSubmitted(true);
    form.reset(defaultValues);
  });

  return {
    form,
    onSubmit,
    submitted,
    startOver: () => setSubmitted(false),
  };
}
