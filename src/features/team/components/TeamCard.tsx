import Image from "next/image";
import type { TeamMember } from "@/types";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group h-full">
      <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-beige">
        <Image
          src={member.image.src}
          alt={member.image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale-[35%] transition-all duration-[1.2s] ease-premium group-hover:scale-105 group-hover:grayscale-0"
        />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 font-display text-xs font-semibold text-navy-deep">
          {member.experience}
        </span>
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-orange transition-transform duration-500 ease-premium group-hover:scale-x-100" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy-deep">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-navy">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate">{member.bio}</p>
    </article>
  );
}
