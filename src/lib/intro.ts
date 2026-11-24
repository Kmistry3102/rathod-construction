"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny shared signal for the opening intro: above-the-fold entrance
 * animations wait until the loader has lifted, so they play in view.
 */
let done = false;
const listeners = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** True once the intro has finished or been skipped. Always false during server render. */
export function useIntroDone() {
  return useSyncExternalStore(
    subscribe,
    () => done,
    () => false,
  );
}
