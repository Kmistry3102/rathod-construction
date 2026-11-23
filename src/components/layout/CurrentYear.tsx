import { cacheLife } from "next/cache";

/**
 * Reading the clock during prerender is not allowed with Cache Components,
 * so the year is computed inside a cached scope that refreshes daily.
 */
export async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
