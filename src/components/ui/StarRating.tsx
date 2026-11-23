import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={cn("flex gap-1", className)} role="img" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          aria-hidden
          className={cn("size-4", index < rating ? "fill-orange text-orange" : "text-grey-soft")}
        />
      ))}
    </div>
  );
}
