import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found | 3ylabs" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} | 3ylabs` },
        { name: "description", content: service.tagline },
        { property: "og:title", content: `${service.name} | 3ylabs` },
        { property: "og:description", content: service.tagline },
        { property: "og:url", content: `https://lovable-site-link.lovable.app/services/${service.slug}` },
        { property: "og:image", content: "https://lovable-site-link.lovable.app/og.png" },
        { name: "twitter:image", content: "https://lovable-site-link.lovable.app/og.png" },
      ],
      links: [
        { rel: "canonical", href: `https://lovable-site-link.lovable.app/services/${service.slug}` },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.name }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-14 sm:py-20">
          <Reveal>
            <p className="label-mono">{service.kind === "core" ? "Core service" : "Extended service"}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.tagline}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              Talk to us about this
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-2 sm:py-20">
        <Reveal>
          <p className="label-mono">The problem</p>
          <p className="mt-3 text-base leading-relaxed text-foreground">{service.problem}</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="label-mono">What we do</p>
          <p className="mt-3 text-base leading-relaxed text-foreground">{service.offering}</p>
        </Reveal>
      </section>

      <section className="border-y border-border bg-[var(--tint)] py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Capabilities</h2>
            <ul className="mt-6 space-y-3">
              {service.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl font-bold sm:text-3xl">What you get</h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan)]" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <Reveal>
          <p className="label-mono">Engagement models</p>
          <ol className="mt-6 divide-y divide-border border-t border-border">
            {service.engagement.map((e, i) => (
              <li
                key={e.name}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-xs tracking-widest text-[var(--brand)] sm:w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-base font-semibold text-foreground sm:w-52">
                  {e.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:flex-1">{e.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Questions we get asked</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {service.faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
                  {f.q}
                  <span className="text-[var(--brand)] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <p className="label-mono">Related services</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/services/$slug"
                params={{ slug: o.slug }}
                className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-[var(--brand)] hover:text-primary"
              >
                {o.name}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection />
    </main>
  );
}
