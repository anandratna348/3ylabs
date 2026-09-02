import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/data/services";
import { portals } from "@/data/setu";

const BASE_URL = "https://lovable-site-link.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          ...services.map((s) => ({
            path: `/services/${encodeURIComponent(s.slug)}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/products/setu-systems", changefreq: "monthly", priority: "0.9" },
          ...portals.map((p) => ({
            path: `/products/setu-systems/${encodeURIComponent(p.id)}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/industries", changefreq: "monthly", priority: "0.7" },
          { path: "/approach", changefreq: "monthly", priority: "0.7" },
          { path: "/results", changefreq: "monthly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/insights", changefreq: "weekly", priority: "0.6" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
