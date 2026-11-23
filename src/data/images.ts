import { unsplash } from "@/lib/utils";
import type { ImageAsset } from "@/types";

/**
 * Central image library. Every photograph used across the site is
 * declared once here so it can be swapped for real project photography.
 */
const photo = (id: string, alt: string): ImageAsset => ({ src: unsplash(id), alt });

export const images = {
  // Architecture & exteriors
  heroTowers: photo("1486406146926-c627a92ad1ab", "Glass towers rising against the sky"),
  whiteArchitecture: photo("1487958449943-2429e8be8625", "Sculptural white contemporary building"),
  modernHouseDusk: photo("1600585154340-be6161a56a0c", "Contemporary residence glowing at dusk"),
  villaPool: photo("1613490493576-7fde63acd811", "Modern villa with infinity pool"),
  timberHouse: photo("1600566753190-17f0baa2a6c3", "Timber-clad modern home"),
  linearHouse: photo("1600047509807-ba8f99d2cdde", "Modern home with timber and charcoal facade"),
  whiteVilla: photo("1600596542815-ffad4c1539a9", "White villa with poolside terrace"),
  whiteHouse: photo("1523217582562-09d0def993a6", "Minimal white residence"),
  officeTowers: photo("1582407947304-fd86f028f716", "Commercial office towers"),
  facadeLines: photo("1488972685288-c3fd157d7c7a", "Abstract architectural facade lines"),
  facadeUp: photo("1431576901776-e539bd916ba2", "Glass facade viewed from below"),
  apartmentBlock: photo("1545324418-cc1a3fa10c00", "Contemporary apartment block"),
  apartmentFacade: photo("1460317442991-0ec209397118", "Apartment facade with balconies"),
  stackedHouse: photo("1479839672679-a46483c0e7c8", "Stacked white modern building"),
  poolsideHouse: photo("1582268611958-ebfd161ef9cf", "Pavilion house with pool"),
  brickBuilding: photo("1448630360428-65456885c650", "Brick and glass building corner"),
  towersSky: photo("1577415124269-fc1140a69e91", "Facade perspective against the sky"),

  // Construction
  craneTowers: photo("1429497419816-9ca5cfb4571a", "Tower cranes over a rising structure"),
  towersUnderConstruction: photo("1565008447742-97f6f38c985c", "High-rise towers under construction"),
  siteAerial: photo("1541888946425-d81bb19240f5", "Aerial view of a construction site"),
  siteWorkers: photo("1504307651254-35680f356dfd", "Crew working on a structural slab"),
  structureFrame: photo("1508450859948-4e04fabaa4ea", "Building frame under construction"),
  earthworks: photo("1517089596392-fb9a9033e05b", "Excavators performing earthworks"),
  craneSunset: photo("1535732759880-bbd5c7265e3f", "Tower crane at sunset"),
  engineersOnSite: photo("1626885930974-4b69aa21bbf9", "Engineers reviewing progress on site"),
  electrician: photo("1621905251189-08b45d6a269e", "Technician installing services"),
  welding: photo("1504917595217-d4dc5ebe6122", "Metal fabrication sparks"),
  blueprint: photo("1503387762-592deb58ef4e", "Architect drafting construction drawings"),
  warehouse: photo("1586528116311-ad8dd3c8310d", "Large logistics warehouse interior"),
  industrialPlant: photo("1513828583688-c52646db42da", "Industrial plant piping and equipment"),

  // Interiors
  livingRoom: photo("1600607687939-ce8a6c25118c", "Bright open-plan living space"),
  livingWarm: photo("1618221195710-dd6b41faaea6", "Warm minimalist living room"),
  livingStyled: photo("1600210492486-724fe5c67fb0", "Styled lounge with natural light"),
  terraceInterior: photo("1600573472592-401b489a3cdc", "Indoor–outdoor living area"),
  kitchen: photo("1484154218962-a197022b5858", "Contemporary kitchen interior"),
  officeOpen: photo("1497366811353-6870744d04b2", "Open-plan office with glazing"),
  officeCorridor: photo("1497366216548-37526070297c", "Modern office corridor"),
  meeting: photo("1556761175-5973dc0f32e7", "Team presenting in a design studio"),

  // People
  portraitRajesh: photo("1560250097-0b93528c311a", "Portrait of Rajesh Rathod"),
  portraitAnanya: photo("1573496359142-b8d87734a5a2", "Portrait of Ananya Mehta"),
  portraitVikram: photo("1507003211169-0a1dd7228f2d", "Portrait of Vikram Shah"),
  portraitPriya: photo("1580489944761-15a19d654956", "Portrait of Priya Desai"),
  portraitArjun: photo("1500648767791-00dcc994a43e", "Portrait of Arjun Patel"),
  portraitMeera: photo("1544005313-94ddf0286df2", "Portrait of Meera Joshi"),
  portraitKaran: photo("1566492031773-4f4e44671857", "Portrait of Karan Malhotra"),
  portraitNisha: photo("1494790108377-be9c29b29330", "Portrait of Nisha Kapoor"),
  portraitDavid: photo("1472099645785-5658abf4ff4e", "Portrait of a client"),
  portraitSuit: photo("1519085360753-af0119f7cbe7", "Portrait of a client"),
  portraitSara: photo("1438761681033-6461ffad8d80", "Portrait of a client"),
} satisfies Record<string, ImageAsset>;
