import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = ["", "/features", "/pricing"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
