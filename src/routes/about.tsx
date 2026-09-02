import { createFileRoute } from "@tanstack/react-router";
import { Compass, Layers, ShieldCheck, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import teamImage from "@/assets/team-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 3ylabs: One Accountable AI Team" },
      {
        name: "description",
        content:
          "3ylabs advises, builds and operates AI systems. Learn how one accountable team carries strategy through to production.",
      },
      { property: "og:title", content: "About 3ylabs: One Accountable AI Team" },
      {
        property: "og:description",
        content:
          "Who we are, how we work and why we run our own products alongside client platforms.",
      },
      { property: "og:url", content: "https://lovable-site-link.lovable.app/about" },
      { property: "og:image", content: "https://lovable-site-link.lovable.app/og.png" },
      { name: "twitter:image", content: "https://lovable-site-link.lovable.app/og.png" },
    ],
    links: [{ rel: "canonical", href: "https://lovable-site-link.lovable.app/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Compass,
    title: "Advice with a build behind it",
    body: "Every recommendation is something we are willing to ship and operate ourselves.",
  },
  {
    icon: Layers,
    title: "One accountable team",
    body: "Strategy, design, engineering and operations sit together, so nothing is lost in handover.",
  },
  {
    icon: ShieldCheck,
    title: "Human review by default",
    body: "AI output enters a workflow with review, evaluation and rollback paths already in place.",
  },
  {
    icon: Users,
    title: "Built for the people using it",
    body: "We design for the operator on a Tuesday afternoon, not for a demo stage.",
  },
];

const facts = [
  { k: "Own products in production", v: "Setu Systems" },
  { k: "Delivery model", v: "Discover to Optimize" },
  { k: "Operating focus", v: "AI-native operations" },
];

function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Company" }, { label: "About" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="label-mono">About</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
              We build the AI we <span className="text-gradient-brand">recommend.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              3ylabs is a small, senior team that takes AI from an opportunity map to a system your
              operation depends on. We advise, we build, and we run our own platforms in
              production.
            </p>
          </div>
          <Reveal className="relative">
            <img
              src={teamImage}
              alt="The 3ylabs team working together in a studio setting"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <p className="label-mono">How we work</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 70} className="surface-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tint)]">
                <p.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-lg font-semibold tracking-tight">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.k} className="bg-background p-6">
              <dt className="label-mono">{f.k}</dt>
              <dd className="mt-2 font-display text-xl font-semibold">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <CTASection />
    </main>
  );
}
