import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach: From Opportunity to Production | 3ylabs" },
      {
        name: "description",
        content:
          "Discover, Design, Build, Deploy and Optimize — how 3ylabs takes AI from opportunity map to production operations.",
      },
      { property: "og:title", content: "Our Approach: From Opportunity to Production | 3ylabs" },
      {
        property: "og:description",
        content: "The five-stage 3ylabs delivery model for AI-native products and operations.",
      },
    ],
  }),
  component: ApproachPage,
});

const stages = [
  {
    n: "01",
    name: "Discover",
    summary: "Identify business goals, workflows, data and AI opportunities.",
    deliverables: ["AI opportunity map", "Readiness assessment", "Prioritized roadmap"],
  },
  {
    n: "02",
    name: "Design",
    summary: "Design the experience, architecture and governance.",
    deliverables: ["Experience design", "Solution architecture", "Responsible AI guardrails"],
  },
  {
    n: "03",
    name: "Build",
    summary: "Engineer the AI-native solution.",
    deliverables: ["Working product increments", "Agents, copilots and pipelines", "Test and evaluation loops"],
  },
  {
    n: "04",
    name: "Deploy",
    summary: "Productionize securely.",
    deliverables: ["Cloud and DevOps setup", "Security and access controls", "Release and rollback plans"],
  },
  {
    n: "05",
    name: "Optimize",
    summary: "Measure, improve and continuously innovate.",
    deliverables: ["Operational monitoring", "Model and workflow tuning", "Continuous improvement backlog"],
  },
];

function ApproachPage() {
  const [active, setActive] = useState(0);
  const stage = stages[active]!;

  return (
    <main>
      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Approach</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            From opportunity to <span className="text-gradient-brand">production.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            A five-stage delivery model that moves AI ambition into secure, measurable operations.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <ol className="flex snap-x gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {stages.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.n} className="min-w-[9.5rem] flex-1 snap-start">
                <button
                  type="button"
                  aria-current={on}
                  onClick={() => setActive(i)}
                  className={`w-full rounded-xl border px-4 py-4 text-left transition-all ${
                    on
                      ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "border-border bg-background hover:border-[var(--brand)]"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-widest ${on ? "text-primary-foreground/70" : "text-[var(--brand)]"}`}
                  >
                    {s.n}
                  </span>
                  <p className="mt-1 font-display font-semibold">{s.name}</p>
                </button>
                <div
                  aria-hidden
                  className={`mt-3 h-1 rounded-full transition-colors ${on ? "bg-[var(--cyan)]" : "bg-border"}`}
                />
              </li>
            );
          })}
        </ol>

        <div key={stage.n} className="animate-fade-up mt-10 grid gap-8 surface-card p-6 sm:p-10 lg:grid-cols-2">
          <div>
            <p className="label-mono">Stage {stage.n}</p>
            <h2 className="mt-3 text-3xl font-bold">{stage.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{stage.summary}</p>
          </div>
          <div className="rounded-2xl border border-border bg-[var(--tint)] p-5">
            <p className="label-mono">Deliverables</p>
            <ul className="mt-4 space-y-3">
              {stage.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cyan)]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
