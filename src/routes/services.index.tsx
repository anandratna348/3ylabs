import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | 3ylabs AI Transformation and Engineering" },
      {
        name: "description",
        content:
          "Four core services and three extended services covering AI strategy, AI-native product engineering, legal-tech, cloud delivery, intelligence, automation and managed hosting.",
      },
      { property: "og:title", content: "Services | 3ylabs" },
      {
        property: "og:description",
        content: "AI strategy, product engineering, legal-tech and platform delivery from one accountable team.",
      },
      { property: "og:url", content: "https://lovable-site-link.lovable.app/services" },
      { property: "og:image", content: "https://lovable-site-link.lovable.app/og.png" },
      { name: "twitter:image", content: "https://lovable-site-link.lovable.app/og.png" },
    ],
    links: [{ rel: "canonical", href: "https://lovable-site-link.lovable.app/services" }],
  }),
  component: ServicesHub,
});

function ServicesHub() {
  const core = services.filter((s) => s.kind === "core");
  const extended = services.filter((s) => s.kind === "extended");

  return (
    <main>
      <Breadcrumbs items={[{ label: "Services" }]} />

      <section className="container-page py-14 sm:py-20">
        <Reveal>
          <p className="label-mono">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            Where AI becomes operational.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We advise on where AI creates value, build the systems that deliver it, and run them in
            production. Start anywhere in that arc.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-16">
        <ul className="divide-y divide-border border-y border-border">
          {core.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex cursor-pointer flex-col gap-2 py-7 transition-colors sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="font-mono text-xs tracking-widest text-[var(--brand)] sm:w-16">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-xl font-semibold transition-colors group-hover:text-[var(--brand)] sm:text-2xl">
                    {s.name}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {s.tagline}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-[var(--brand)] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14">
          <p className="label-mono">Extended services</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {extended.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group cursor-pointer rounded-2xl border border-border bg-[var(--tint)] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-card hover:shadow-[var(--shadow-lift)]"
              >
                <h2 className="font-display text-base font-semibold">{s.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection />
    </main>
  );
}
