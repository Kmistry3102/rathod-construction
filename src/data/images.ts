import { unsplash } from "@/lib/utils";
import type { ImageAsset } from "@/types";

/**
 * Central image library. Every photograph on the site is declared once here
 * so it can be swapped for real project photography.
 */
const photo = (id: string, alt: string): ImageAsset => ({ src: unsplash(id), alt });

export const images = {
  studio: photo("1487958449943-2429e8be8625", "Sculptural white contemporary building"),
  villaPool: photo("1613490493576-7fde63acd811", "Modern villa with infinity pool"),
  officeTowers: photo("1582407947304-fd86f028f716", "Commercial office towers"),
  timberHouse: photo("1600566753190-17f0baa2a6c3", "Timber-clad modern home"),
  officeOpen: photo("1497366811353-6870744d04b2", "Open-plan office with glazing"),
  linearHouse: photo("1600047509807-ba8f99d2cdde", "Modern home with timber and charcoal facade"),
  warehouse: photo("1586528116311-ad8dd3c8310d", "Large logistics warehouse interior"),
  residenceDusk: photo("1600585154340-be6161a56a0c", "Contemporary residence glowing at dusk"),
  livingRoom: photo("1600607687939-ce8a6c25118c", "Bright open-plan living space"),
  blueprint: photo("1503387762-592deb58ef4e", "Architect drafting construction drawings"),
  engineersOnSite: photo("1626885930974-4b69aa21bbf9", "Engineers reviewing progress on site"),
  earthworks: photo("1517089596392-fb9a9033e05b", "Excavators preparing an industrial site"),
} satisfies Record<string, ImageAsset>;
