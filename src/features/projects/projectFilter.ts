"use client";

import { useSyncExternalStore } from "react";
import type { ProjectStatus } from "@/types";

/**
 * Which projects the showcase shows. Shared module state so the header's
 * Projects dropdown can switch the section it scrolls to.
 */
let current: ProjectStatus = "ongoing";
const listeners = new Set<() => void>();

export function setProjectFilter(status: ProjectStatus) {
  if (status === current) return;
  current = status;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useProjectFilter(): ProjectStatus {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => "ongoing",
  );
}
