import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useState } from "react";
import { portals, portalDetails } from "@/data/setu";
import { PortalExplorer } from "@/components/PortalExplorer";
import { SetuArchitecture } from "@/components/SetuArchitecture";
import { DemoModal } from "@/components/DemoModal";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/products/setu-systems")({
  head: () => ({
    meta: [
      { title: "Setu Systems: One Intelligent Platform for Your Firm | 3ylabs" },
      {
        name: "description",
        content:
          "Setu Systems gives you a portal for every part of your operation: cases, billing, client inquiries, evidence and insight, all with AI woven through.",
      },
      { property: "og:title", content: "Setu Systems: One Intelligent Platform | 3ylabs" },
      {
        property: "og:description",
        content: "Start with one portal and add the rest as you grow.",
      },
      { property: "og:url", content: "https://lovable-site-link.lovable.app/products/setu-systems" },
      { property: "og:image", content: "https://lovable-site-link.lovable.app/og.png" },
      { name: "twitter:image", content: "https://lovable-site-link.lovable.app/og.png" },
    ],
    links: [{ rel: "canonical", href: "https://lovable-site-link.lovable.app/products/setu-systems" }],
  }),
  component: SetuPage,
});

function SetuPage() {
  const [demo, setDemo] = useState<string | null>(null);

  return (
    <main>
      <Breadcrumbs items={[{ label: "Products" }, { label: "Setu Systems" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Setu Systems</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Run your firm on one <span className="text-gradient-brand">intelligent platform.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Setu Systems gives you a portal for every part of your operation: cases, billing,
            client inquiries, evidence and insight, all with AI woven through.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Setu means "bridge" in Sanskrit: the bridge between business functions, and between
            people and intelligent systems. Built by the team at 3ylabs, proven in production with
            real legal-tech operations, and ready for any business that runs on documents,
            deadlines and trust.
          </p>
          <p className="mt-4 text-sm font-medium text-primary">
            Start with one portal and add the rest as you grow. 3ylabs provides implementation and
            customization for every portal.
          </p>

        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Six portals. One platform.</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Most firms start with Setu Vantage, then add Tickets and Finance. You do not have to buy
          the platform to start.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portals.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="surface-card flex scroll-mt-24 flex-col p-6 transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="label-mono">{p.label}</p>
                {portalDetails[p.id].recommended && (
                  <span className="shrink-0 rounded-full bg-[var(--tint)] px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-[var(--brand-deep)]">
                    Start here
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
              <p className="mt-4 text-sm font-medium text-[var(--brand-deep)]">
                For: {portalDetails[p.id].buyer}
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <Link
                  to="/products/setu-systems/$portal"
                  params={{ portal: p.id }}
                  className="cursor-pointer rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  See {p.name}
                </Link>
                <button
                  type="button"
                  onClick={() => setDemo(p.name)}
                  className="w-full cursor-pointer rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
                >
                  Request a Demo
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--tint)] py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Explore the platform</h2>
          <div className="mt-8">
            <PortalExplorer />
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Platform architecture</h2>
        <div className="mt-8">
          <SetuArchitecture />
        </div>
      </section>

      <CTASection />
      {demo && <DemoModal product={demo} onClose={() => setDemo(null)} />}
    </main>
  );
}
