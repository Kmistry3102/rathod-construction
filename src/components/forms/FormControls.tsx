import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Floating-label form controls. The label sits inside the field like a
 * placeholder and glides up into a small caption on focus or once filled —
 * pure CSS via `peer` + `:placeholder-shown`, so it works without JavaScript.
 * Controls take `ref` as a prop (React 19) and work with `register()`.
 * Dropdowns use the shared `Dropdown` component.
 */

type ControlKind = "input" | "textarea" | "select";

const controlBase =
  "peer w-full rounded-[10px] border bg-white px-4 text-[0.95rem] text-navy-deep outline-none transition-[border-color,box-shadow] duration-300 hover:border-navy-deep/35 focus:ring-4 focus-visible:outline-none";

function controlState(invalid: boolean) {
  return invalid
    ? "border-red-600/60 focus:border-red-600 focus:ring-red-600/10"
    : "border-line-strong/60 focus:border-navy-deep focus:ring-navy-deep/8";
}

/** Raised caption position, shared by every control. */
const labelRaised = "top-2 translate-y-0 text-[0.68rem] font-medium tracking-[0.04em]";

/** Resting position while an input/textarea is empty and unfocused. */
const labelResting: Record<Exclude<ControlKind, "select">, string> = {
  input:
    "peer-[:placeholder-shown:not(:focus)]:top-1/2 peer-[:placeholder-shown:not(:focus)]:-translate-y-1/2 peer-[:placeholder-shown:not(:focus)]:text-[0.95rem] peer-[:placeholder-shown:not(:focus)]:font-normal peer-[:placeholder-shown:not(:focus)]:tracking-normal",
  textarea:
    "peer-[:placeholder-shown:not(:focus)]:top-4 peer-[:placeholder-shown:not(:focus)]:text-[0.95rem] peer-[:placeholder-shown:not(:focus)]:font-normal peer-[:placeholder-shown:not(:focus)]:tracking-normal",
};

function RequiredMark() {
  return (
    <span aria-hidden className="ml-0.5 text-orange">
      *
    </span>
  );
}

function ErrorMessage({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} role="alert" className="px-1 text-xs text-red-700">
      {error}
    </p>
  );
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  /** Which control the field wraps — sets how the label floats. Dropdowns keep it raised. */
  control?: ControlKind;
  className?: string;
  children: ReactNode;
}

export function Field({ id, label, error, required, control = "input", className, children }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div className="relative">
        {children}
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute left-4 text-slate transition-all duration-300 ease-premium peer-focus:text-navy-deep",
            labelRaised,
            control !== "select" && labelResting[control],
          )}
        >
          {label}
          {required && <RequiredMark />}
        </label>
      </div>
      <ErrorMessage id={id} error={error} />
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

type InputProps = Omit<ComponentProps<"input">, "placeholder"> & { invalid?: boolean };

/** The blank placeholder lets CSS detect "empty" for the floating label. */
export function Input({ invalid = false, className, ...props }: InputProps) {
  return <input placeholder=" " className={cn(controlBase, "h-14 pt-5 pb-1.5", controlState(invalid), className)} {...props} />;
}

type TextareaProps = Omit<ComponentProps<"textarea">, "placeholder"> & { invalid?: boolean };

export function Textarea({ invalid = false, className, rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      placeholder=" "
      className={cn(controlBase, "min-h-36 resize-y pt-7 pb-3", controlState(invalid), className)}
      {...props}
    />
  );
}

interface PhoneFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  /** The country-code picker — an inline `Dropdown`. */
  country: ReactNode;
  /** Props for the national-number input (e.g. from `register("mobile")`). */
  numberProps: Omit<ComponentProps<"input">, "id" | "type">;
  placeholder?: string;
  className?: string;
}

/**
 * Mobile number with a country-code picker, presented as one field: the
 * caption stays raised, the code and number share a single rounded box.
 */
export function PhoneField({ id, label, required, error, country, numberProps, placeholder, className }: PhoneFieldProps) {
  const invalid = Boolean(error);
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <div
        role="group"
        aria-labelledby={`${id}-label`}
        className={cn(
          "relative flex h-14 rounded-[10px] border bg-white transition-[border-color,box-shadow] duration-300 hover:border-navy-deep/35 focus-within:ring-4",
          invalid
            ? "border-red-600/60 focus-within:border-red-600 focus-within:ring-red-600/10"
            : "border-line-strong/60 focus-within:border-navy-deep focus-within:ring-navy-deep/8",
        )}
      >
        <label
          id={`${id}-label`}
          htmlFor={id}
          className="pointer-events-none absolute top-2 left-4 z-10 text-[0.68rem] font-medium tracking-[0.04em] text-slate"
        >
          {label}
          {required && <RequiredMark />}
        </label>

        <div className="shrink-0">{country}</div>
        <span aria-hidden className="mt-6 mb-2.5 w-px bg-line-strong/60" />

        <input
          id={id}
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder={placeholder}
          aria-invalid={invalid || undefined}
          aria-describedby={invalid ? `${id}-error` : undefined}
          className="min-w-0 flex-1 rounded-r-[10px] bg-transparent pt-5 pr-3 pb-1.5 pl-3 text-[0.95rem] text-navy-deep outline-none placeholder:text-slate/45"
          {...numberProps}
        />
      </div>
      <ErrorMessage id={id} error={error} />
    </div>
  );
}
