import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { portals, portalDetails } from "@/data/setu";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import vantageUi from "@/assets/setu-vantage-ui.jpg";
import financeUi from "@/assets/setu-finance-ui.jpg";
import evidenceUi from "@/assets/setu-evidence-ui.jpg";

const shots: Record<string, string> = {
  vantage: vantageUi,
  finance: financeUi,
  evidence: evidenceUi,
  tickets: vantageUi,
  discover: financeUi,
  assistant: evidenceUi,
};

const BASE = "https://lovable-site-link.lovable.app";

export const Route = createFileRoute("/products/setu-systems/$portal")({
  loader: ({ params }) => {
    const portal = portals.find((p) => p.id === params.portal);
    if (!portal) throw notFound();
    return { portal, detail: portalDetails[portal.id] };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Portal not found | Setu Systems" }, { name: "robots", content: "noindex" }],
      };
    }
    const { portal } = loaderData;
    const url = `${BASE}/products/setu-systems/${portal.id}`;
    return {
      meta: [
        { title: `${portal.name}: ${portal.label} | Setu Systems` },
        { name: "description", content: portal.description },
        { property: "og:title", content: `${portal.name}: ${portal.label}` },
        { property: "og:description", content: portal.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${BASE}/og.png` },
        { name: "twitter:image", content: `${BASE}/og.png` },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: PortalDetailPage,
});

function PortalDetailPage() {
  const { portal, detail } = Route.useLoaderData();
  const others = portals.filter((p) => p.id !== portal.id).slice(0, 3);

  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Products" },
          { label: "Setu Systems", to: "/products/setu-systems" },
          { label: portal.name },
        ]}
      />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="label-mono">{portal.label}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{portal.name}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {portal.description}
            </p>
            {detail.recommended && (
              <p className="mt-5 inline-flex rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[var(--brand-deep)]">
                Recommended starting portal
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                style={{ background: "var(--gradient-accent)" }}
                className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:brightness-105"
              >
                Request a demo
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                to="/products/setu-systems"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                All portals
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <img
                src={shots[portal.id]}
                alt={`${portal.name} interface showing ${portal.label.toLowerCase()}`}
                width={1600}
                height={1008}
                className="block w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">Who it is for</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{detail.buyer}</p>
          <h3 className="mt-8 font-display text-lg font-semibold">What teams use it for</h3>
          <ul className="mt-4 space-y-3">
            {detail.useCases.map((u) => (
              <li key={u} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" aria-hidden />
                {u}
              </li>
            ))}
          </ul>
        </div>
        <div className="surface-card p-7">
          <h2 className="font-display text-xl font-semibold">Capabilities</h2>
          <ul className="mt-5 space-y-3">
            {detail.capabilities.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--cyan)]" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-xl border border-border bg-[var(--tint)] p-5">
            <p className="label-mono">Engagement and pricing</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">{detail.pricing}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--tint)] py-12 sm:py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold sm:text-3xl">Outcomes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {portal.benefits.map((b) => (
              <p
                key={b}
                className="rounded-xl border border-border bg-card px-5 py-5 text-sm font-medium text-foreground"
              >
                {b}
              </p>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-bold sm:text-3xl">Other portals</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.id}
                to="/products/setu-systems/$portal"
                params={{ portal: p.id }}
                className="surface-card block cursor-pointer p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <p className="label-mono">{p.label}</p>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
