"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import type { Project, ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "All";

interface ProjectFilterGridProps {
  projects: Project[];
  categories: ProjectCategory[];
}

export function ProjectFilterGrid({ projects, categories }: ProjectFilterGridProps) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...categories];
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  const countFor = (value: Filter) =>
    value === "All" ? projects.length : projects.filter((project) => project.category === value).length;

  return (
    <>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2.5">
        {filters.map((value) => {
          const active = value === filter;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(value)}
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-full border px-5 font-display text-sm font-semibold transition-all duration-300",
                active
                  ? "border-navy-deep bg-navy-deep text-white"
                  : "border-grey-soft bg-white text-navy-deep hover:border-navy-deep",
              )}
            >
              {value}
              <span className={cn("text-xs", active ? "text-white/60" : "text-slate")}>{countFor(value)}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <motion.ul layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
