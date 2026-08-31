import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import coverImage from "@/assets/insight-cover.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights: Notes From Building AI Systems | 3ylabs" },
      {
        name: "description",
        content:
          "Practical notes from 3ylabs on AI readiness, agent design, evaluation loops and running AI in production.",
      },
      { property: "og:title", content: "Insights: Notes From Building AI Systems | 3ylabs" },
      {
        property: "og:description",
        content: "Field notes on AI readiness, agent design and production operations.",
      },
    ],
  }),
  component: InsightsPage,
});

const featured = {
  tag: "Readiness",
  title: "Most AI projects stall at the handover, not the model",
  body: "The gap is rarely capability. It is the moment a pilot has to become something an operations team owns, monitors and trusts. We plan that moment first, then work backwards into the build.",
  read: "6 min read",
};

const notes = [
  {
    tag: "Agents",
    title: "Give an agent a workflow, not a personality",
    body: "Scope, tools and a review step beat a clever prompt every time.",
    read: "4 min read",
  },
  {
    tag: "Evaluation",
    title: "Write the evaluation before the feature",
    body: "If you cannot describe a good answer, you cannot ship a reliable one.",
    read: "5 min read",
  },
  {
    tag: "Operations",
    title: "Production is a habit, not a launch date",
    body: "Monitoring, tuning and a clear rollback path keep AI useful past week two.",
    read: "4 min read",
  },
  {
    tag: "Data",
    title: "Start with the data people already trust",
    body: "The fastest path to value usually runs through the records your team already checks daily.",
    read: "3 min read",
  },
  {
    tag: "Governance",
    title: "Guardrails are a design surface",
    body: "Access, retention and review belong in the interface, not in an appendix.",
    read: "5 min read",
  },
];

function InsightsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Company" }, { label: "Insights" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Insights</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Notes from the <span className="text-gradient-brand">work.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            What we learn shipping AI into real operations, written for the people who have to run
            it afterwards.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <Reveal as="article" className="surface-card grid gap-8 overflow-hidden lg:grid-cols-2">
          <img
            src={coverImage}
            alt="Abstract cover artwork for the featured 3ylabs insight"
            loading="lazy"
            className="h-full min-h-64 w-full object-cover"
          />
          <div className="p-6 sm:p-10">
            <p className="label-mono">{featured.tag}</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">{featured.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.body}</p>
            <p className="mt-6 font-mono text-[11px] tracking-widest text-[var(--brand)]">
              {featured.read}
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="label-mono">More notes</p>
              <h2 className="mt-2 text-2xl font-bold">Short reads</h2>
            </div>
          </div>

          <Carousel opts={{ align: "start" }} className="mt-8">
            <CarouselContent className="-ml-4">
              {notes.map((n) => (
                <CarouselItem key={n.title} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-[var(--shadow-lift)]">
                    <p className="label-mono">{n.tag}</p>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight">
                      {n.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {n.body}
                    </p>
                    <p className="mt-5 font-mono text-[11px] tracking-widest text-[var(--brand)]">
                      {n.read}
                    </p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0 cursor-pointer" />
              <CarouselNext className="static translate-y-0 cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
