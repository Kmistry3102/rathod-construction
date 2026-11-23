import type { Metadata } from "next";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: { src: string; alt: string };
}

/** Consistent per-page metadata: canonical URL, Open Graph and Twitter cards. */
export function createMetadata({ title, description, path, image = images.heroTowers }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: image.src, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [image.src],
    },
  };
}
