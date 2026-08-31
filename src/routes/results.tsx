import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Database, GitBranch, Rocket } from "lucide-react";
import { CTASection } from "@/components/CTASection";

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
    ],
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

      <section className="container-page py-16 sm:py-20">
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

      <CTASection />
    </main>
  );
}
