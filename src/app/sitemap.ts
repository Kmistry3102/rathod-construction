import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { mainNav, quoteCta, siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [...mainNav, quoteCta].map((item) => ({
    url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
