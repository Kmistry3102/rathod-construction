"use client";

import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormSuccessProps {
  title: string;
  message: string;
  onReset: () => void;
  resetLabel?: string;
}

export function FormSuccess({ title, message, onReset, resetLabel = "Send another message" }: FormSuccessProps) {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center py-12 text-center"
    >
      <span className="inline-flex size-16 items-center justify-center rounded-full bg-orange/12 text-orange">
        <CircleCheck aria-hidden className="size-8" strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 font-display text-2xl font-semibold text-navy-deep">{title}</h3>
      <p className="mt-3 max-w-md leading-relaxed text-slate">{message}</p>
      <Button variant="outline" className="mt-8" onClick={onReset}>
        {resetLabel}
      </Button>
    </motion.div>
  );
}
