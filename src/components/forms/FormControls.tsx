import type { ComponentProps, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SelectOption } from "@/types";

/**
 * Presentational form controls shared by every form. They are plain
 * forwardRef-free components (React 19 passes `ref` as a prop), so they work
 * directly with React Hook Form's `register()`.
 */

const controlBase =
  "w-full rounded-2xl border bg-white px-4 text-[0.95rem] text-navy-deep placeholder:text-slate/60 transition-colors duration-300 outline-none focus:border-navy focus:ring-4 focus:ring-navy/8";

function controlState(invalid: boolean) {
  return invalid ? "border-red-500/70 focus:border-red-600 focus:ring-red-500/10" : "border-grey-soft hover:border-slate/40";
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
}

export function Field({ id, label, error, required, hint, className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="font-display text-sm font-semibold text-navy-deep">
        {label}
        {required && (
          <span aria-hidden className="ml-0.5 text-orange">
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs font-medium text-red-600">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="text-xs text-slate">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

/** ARIA props linking a control to its error message. */
export function describedBy(id: string, error?: string) {
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  } as const;
}

type InputProps = ComponentProps<"input"> & { invalid?: boolean };

export function Input({ invalid = false, className, ...props }: InputProps) {
  return <input className={cn(controlBase, "h-13", controlState(invalid), className)} {...props} />;
}

type TextareaProps = ComponentProps<"textarea"> & { invalid?: boolean };

export function Textarea({ invalid = false, className, rows = 5, ...props }: TextareaProps) {
  return <textarea rows={rows} className={cn(controlBase, "resize-y py-3.5", controlState(invalid), className)} {...props} />;
}

type SelectProps = ComponentProps<"select"> & {
  invalid?: boolean;
  options: readonly SelectOption[];
  placeholder: string;
};

export function Select({ invalid = false, options, placeholder, className, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select className={cn(controlBase, "h-13 appearance-none pr-11", controlState(invalid), className)} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-slate" />
    </div>
  );
}
