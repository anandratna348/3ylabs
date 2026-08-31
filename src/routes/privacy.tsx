import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy | 3ylabs" },
      {
        name: "description",
        content: "How 3ylabs handles the information shared through this website and our engagements.",
      },
      { property: "og:title", content: "Privacy | 3ylabs" },
      { property: "og:description", content: "How 3ylabs handles your information." },
    ],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "What we collect",
    body: "Contact details you submit through our forms, plus basic analytics about how pages are used. We do not collect sensitive personal data through this site.",
  },
  {
    title: "How we use it",
    body: "To respond to your enquiry, to prepare an AI readiness assessment, and to improve the content we publish. We do not sell data to third parties.",
  },
  {
    title: "Client data in engagements",
    body: "Data handled during a project is governed by the contract and data processing agreement signed with that client, including retention limits and access controls.",
  },
  {
    title: "Your choices",
    body: "You can ask us to correct or delete the details you shared at any time by writing to hello@3ylabs.com.",
  },
];

function Privacy() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Privacy" }]} />
      <section className="container-page max-w-3xl py-14 sm:py-20">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy</h1>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          This prototype summarizes how 3ylabs intends to handle information. Final legal wording is
          issued with the production site.
        </p>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {sections.map((s) => (
            <div key={s.title} className="py-6">
              <h2 className="font-display text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
