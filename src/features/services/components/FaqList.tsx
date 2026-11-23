import { Plus } from "lucide-react";
import type { Faq } from "@/types";

/** Accessible accordion built on native <details>, so it needs no client JavaScript. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-grey-soft border-y border-grey-soft">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold text-navy-deep">
            {faq.question}
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-grey-soft transition-all duration-300 group-open:rotate-45 group-open:border-orange group-open:bg-orange group-open:text-white">
              <Plus aria-hidden className="size-4" />
            </span>
          </summary>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
