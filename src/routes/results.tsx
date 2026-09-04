import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Database, GitBranch, Rocket } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { proofMetrics, anonymisedCases } from "@/data/proof";
import vantageUi from "@/assets/setu-vantage-ui.jpg";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results: Proof in Production | 3ylabs" },
      {
        name: "description",
        content:
          "How 3ylabs powers AscendHSI's immigration case operations end to end with Setu portals, AI in daily workflows and managed cloud infrastructure.",
      },
      { property: "og:title", content: "Results: Proof in Production | 3ylabs" },
      {
        property: "og:description",
        content: "AscendHSI runs case management, client ticketing and billing on Setu portals.",
      },
      { property: "og:url", content: "https://lovable-site-link.lovable.app/results" },
      { property: "og:image", content: "https://lovable-site-link.lovable.app/og.png" },
      { name: "twitter:image", content: "https://lovable-site-link.lovable.app/og.png" },
    ],
    links: [{ rel: "canonical", href: "https://lovable-site-link.lovable.app/results" }],
  }),
  component: ResultsPage,
});

const outcomes = [
  {
    icon: Database,
    title: "One source of truth",
    body: "For a distributed team.",
  },
  {
    icon: GitBranch,
    title: "Faster client response",
    body: "More connected operational workflows.",
  },
  {
    icon: Rocket,
    title: "Operations that scale",
    body: "A production backbone built for growth.",
  },
];

function ResultsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Company" }, { label: "Results" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Results</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Proof in <span className="text-gradient-brand">production.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Real operations, running every day on platforms we build and operate.
          </p>
        </div>
      </section>

      {proofMetrics.length > 0 && (
        <section className="border-b border-border bg-[var(--tint)] py-10">
          <div className="container-page grid gap-6 sm:grid-cols-3">
            {proofMetrics.map((m) => (
              <div key={m.label}>
                <p className="data-mono text-3xl font-semibold text-[var(--cyan)] sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{m.label}</p>
                {m.note && <p className="mt-1 text-xs text-muted-foreground">{m.note}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container-page py-12 sm:py-16">
        <figure className="mb-10 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-lift)]">
          <img
            src={vantageUi}
            alt="The Setu case workspace AscendHSI uses daily, showing matters, statuses and activity"
            width={1600}
            height={1008}
            loading="lazy"
            className="block w-full"
          />
        </figure>
        <div className="surface-card p-6 sm:p-10">
          <p className="label-mono">Featured client</p>
          <h2 className="mt-3 text-3xl font-bold">AscendHSI</h2>
          <p className="mt-2 text-sm text-muted-foreground">An immigration case operations firm.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <p className="text-base leading-relaxed text-foreground">
              3ylabs powers AscendHSI's operations end to end, replacing spreadsheets and
              disconnected trackers with Setu portals for case management, client ticketing and
              billing.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              AI is integrated into daily workflows with human review before anything reaches a
              customer.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              3ylabs operates the underlying cloud infrastructure.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["SETU VANTAGE", "SETU TICKETS", "SETU FINANCE", "MANAGED CLOUD"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-[var(--tint)] px-3 py-1.5 font-mono text-[10px] tracking-widest text-[var(--brand-deep)]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {outcomes.map((o) => (
            <article key={o.title} className="surface-card p-6 transition-shadow hover:shadow-[var(--shadow-lift)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tint)]">
                <o.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight">
                {o.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
            </article>
          ))}
        </div>
      </section>

      {anonymisedCases.length > 0 && (
        <section className="container-page pb-12 sm:pb-16">
          <h2 className="text-2xl font-bold sm:text-3xl">More engagements</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {anonymisedCases.map((c) => (
              <article key={c.sector} className="surface-card p-6">
                <p className="label-mono">{c.sector}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.challenge}</p>
                <p className="mt-3 text-sm font-medium text-foreground">{c.outcome}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </main>
  );
}
