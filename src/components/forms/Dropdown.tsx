"use client";

import { useEffect, useRef, useState, type KeyboardEvent, type Ref } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { easeOutExpo } from "@/components/motion/easing";
import { cn } from "@/lib/utils";

export interface DropdownOption {
  value: string;
  /** Text shown in the menu. */
  label: string;
  /** Secondary text, right-aligned in the menu (e.g. a dialling code). */
  meta?: string;
  /** Compact text shown on the trigger once selected (defaults to `label`). */
  display?: string;
}

interface DropdownProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  options: readonly DropdownOption[];
  placeholder?: string;
  invalid?: boolean;
  /** `field`: a full form field. `inline`: borderless, sits inside another control. */
  variant?: "field" | "inline";
  "aria-label"?: string;
  "aria-describedby"?: string;
  ref?: Ref<HTMLButtonElement>;
  className?: string;
}

/**
 * One dropdown for every form: a select-only combobox (WAI-ARIA APG pattern).
 * Focus stays on the trigger; the active option is announced via
 * aria-activedescendant. Supports arrows, Home/End, Enter/Space, Escape and
 * type-to-jump.
 */
export function Dropdown({
  id,
  value,
  onChange,
  onBlur,
  options,
  placeholder = "Select",
  invalid,
  variant = "field",
  className,
  ref,
  ...aria
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = `${id}-listbox`;
  const selectedIndex = options.findIndex((option) => option.value === value);
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined;

  const openMenu = (index = selectedIndex >= 0 ? selectedIndex : 0) => {
    setActive(index);
    setOpen(true);
  };
  const choose = (index: number) => {
    onChange(options[index].value);
    setOpen(false);
  };

  // Close when clicking anywhere outside.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  // Keep the active option visible while navigating a long list.
  useEffect(() => {
    if (open) document.getElementById(`${id}-option-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [open, active, id]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        openMenu();
      }
      return;
    }
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActive((index) => Math.min(last, index + 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActive((index) => Math.max(0, index - 1));
        break;
      case "Home":
        event.preventDefault();
        setActive(0);
        break;
      case "End":
        event.preventDefault();
        setActive(last);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        choose(active);
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        // Type-to-jump to the next option starting with the typed letter.
        if (event.key.length === 1 && /\S/.test(event.key)) {
          const letter = event.key.toLowerCase();
          const order = [...options.keys()].map((offset) => (active + 1 + offset) % options.length);
          const match = order.find((index) => options[index].label.toLowerCase().startsWith(letter));
          if (match !== undefined) setActive(match);
        }
    }
  };

  return (
    <div ref={rootRef} className={cn("relative", variant === "inline" && "h-full")}>
      <button
        ref={ref}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? `${id}-option-${active}` : undefined}
        aria-invalid={invalid || undefined}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        onBlur={() => {
          setOpen(false);
          onBlur?.();
        }}
        className={cn(
          "flex w-full cursor-pointer items-center justify-between gap-3 text-left text-[0.95rem] outline-none",
          variant === "field" &&
            "h-14 rounded-[10px] border bg-white px-4 pt-5 pb-1.5 transition-[border-color,box-shadow] duration-300 hover:border-navy-deep/35 focus:ring-4",
          variant === "field" &&
            (invalid
              ? "border-red-600/60 focus:border-red-600 focus:ring-red-600/10"
              : "border-line-strong/60 focus:border-navy-deep focus:ring-navy-deep/8"),
          variant === "inline" && "h-full rounded-l-[10px] bg-transparent pt-5 pr-2 pb-1.5 pl-4",
          className,
        )}
        {...aria}
      >
        <span className={cn("truncate", selected ? "text-navy-deep" : "text-slate/70")}>
          {selected ? (selected.display ?? selected.label) : placeholder}
        </span>
        <ChevronDown
          aria-hidden
          strokeWidth={1.5}
          className={cn("size-4 shrink-0 text-slate transition-transform duration-300 ease-premium", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            aria-labelledby={id}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: easeOutExpo }}
            className={cn(
              "absolute top-[calc(100%+6px)] left-0 z-30 max-h-64 overflow-y-auto rounded-[10px] border border-line bg-ivory p-1.5 shadow-[0_18px_40px_-22px_rgb(16_51_66/0.35)]",
              variant === "field" ? "w-full" : "w-72 max-w-[calc(100vw-3rem)]",
            )}
          >
            {options.map((option, index) => {
              const isSelected = option.value === value;
              return (
                <li
                  key={option.value}
                  id={`${id}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  // Keep focus on the trigger so blur doesn't close the menu first.
                  onPointerDown={(event) => event.preventDefault()}
                  onClick={() => choose(index)}
                  onMouseMove={() => active !== index && setActive(index)}
                  className={cn(
                    "relative flex cursor-pointer items-center gap-3 rounded-[8px] py-2.5 pr-3 pl-4 text-sm transition-colors duration-150",
                    index === active ? "bg-beige" : "bg-transparent",
                    isSelected ? "font-medium text-navy-deep" : "text-navy-deep/80",
                  )}
                >
                  {/* Orange edge marks the chosen option */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-2 bottom-2 left-1 w-0.5 rounded-full bg-orange transition-opacity duration-200",
                      isSelected ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span className="flex-1 truncate">{option.label}</span>
                  {option.meta && <span className="shrink-0 text-xs text-slate tabular-nums">{option.meta}</span>}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
