"use client";

import { motion } from "framer-motion";
import { easeOutExpo } from "@/components/motion/easing";
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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="border-t border-line py-14"
    >
      <p className="font-display text-[0.7rem] font-semibold tracking-[0.3em] text-orange uppercase">Received</p>
      <h3 className="mt-6 font-display text-2xl font-normal tracking-[-0.02em] text-navy-deep sm:text-3xl">{title}</h3>
      <p className="mt-5 max-w-md leading-[1.8] text-slate">{message}</p>
      <Button variant="outline" className="mt-10" onClick={onReset}>
        {resetLabel}
      </Button>
    </motion.div>
  );
}
