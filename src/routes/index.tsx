import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Building2,
  Cloud,
  Factory,
  Gavel,
  HeartPulse,
  Landmark,
  Layers,
  LineChart,
  Scale,
  Shield,
  Sparkles,
} from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { PortalExplorer } from "@/components/PortalExplorer";
import { SetuArchitecture } from "@/components/SetuArchitecture";
import { CTASection } from "@/components/CTASection";
import vantageUi from "@/assets/setu-vantage-ui.jpg";
import legalIndustry from "@/assets/legal-industry.jpg";
import teamAbout from "@/assets/team-about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3ylabs: From AI Curiosity to AI Capability" },
      {
        name: "description",
        content:
          "3ylabs helps organizations turn AI ambition into secure, scalable products and intelligent operations, from strategy through production.",
      },
      { property: "og:title", content: "3ylabs: From AI Curiosity to AI Capability" },
      {
        property: "og:description",
        content:
          "AI transformation services, AI-native product engineering, legal-tech solutions and cloud delivery.",
      },
      { property: "og:url", content: "https://lovable-site-link.lovable.app/" },
      { property: "og:image", content: "https://lovable-site-link.lovable.app/og.png" },
      { name: "twitter:image", content: "https://lovable-site-link.lovable.app/og.png" },
    ],
    links: [{ rel: "canonical", href: "https://lovable-site-link.lovable.app/" }],
  }),
  component: Home,
});

const abr = [
  {
    key: "Advise",
    icon: LineChart,
    body: "Identify where AI can create measurable business value.",
  },
  {
    key: "Build",
    icon: Layers,
    body: "Engineer AI-native products, agents, copilots and intelligent systems.",
  },
  {
    key: "Run",
    icon: Cloud,
    body: "Operate secure platforms, cloud infrastructure and AI systems in production.",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "AI Transformation Services",
    body: "AI opportunity discovery, readiness assessments, enterprise AI roadmaps and responsible AI governance.",
  },
  {
    icon: Brain,
    title: "AI-Native Product Engineering",
    body: "Agentic applications, generative AI, copilots, RAG, custom SaaS and intelligent document processing.",
  },
  {
    icon: Scale,
    title: "Legal-Tech Solutions",
    body: "Case management, client intake, ticketing, billing, evidence intelligence and AI-assisted drafting.",
  },
  {
    icon: Shield,
    title: "Platform, Cloud & Web Delivery",
    body: "Websites, portals, cloud architecture, modernization, DevOps, MLOps and security.",
  },
];

const extendedServices = [
  {
    title: "Enterprise Intelligence",
    body: "Business analytics, executive dashboards, operational intelligence and decision support.",
  },
  {
    title: "Business Solutions & Automation",
    body: "Workflow automation, process digitization and AI integrated into existing business systems.",
  },
  {
    title: "Website Powering & Managed Hosting",
    body: "Design, build, hosting and care of client websites and portals as an ongoing managed service.",
  },
];


const industries = [
  { icon: Gavel, name: "Legal", featured: true },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Shield, name: "Insurance" },
  { icon: Landmark, name: "Financial Services" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Building2, name: "Professional Services" },
];

const insights = [
  {
    category: "AI Transformation Playbooks",
    title: "Where AI Creates Real Enterprise Value",
    body: "A practical way to separate AI experiments from initiatives that change the operating model.",
  },
  {
    category: "Responsible AI",
    title: "Designing Responsible AI Workflows",
    body: "Human review, traceability and role-aware access as design constraints, not afterthoughts.",
  },
  {
    category: "Build Notes",
    title: "What We Learned Building AI-Native Operations",
    body: "Lessons from putting agents, document intelligence and copilots into daily production use.",
  },
];

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="label-mono">
              AI Transformation • AI-Native Products • Production
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
              From AI curiosity to <span className="text-gradient-brand">AI capability.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              3ylabs helps organizations turn AI ambition into secure, scalable products and
              intelligent operations, from strategy through production.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--brand-deep)]">
              We advise. We build. We run our own products.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              3ylabs is the studio, Setu Systems is the software platform we build and sell, and
              AscendHSI is the client whose operations run on it every day.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                style={{ background: "var(--gradient-accent)" }}
                className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:brightness-105"
              >
                Book an AI Readiness Assessment
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                to="/products/setu-systems"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Explore Setu Systems
              </Link>
            </div>
          </div>
          <div className="animate-fade-up lg:pl-6">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ADVISE BUILD RUN */}
      <section className="container-page py-12 sm:py-16">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] md:grid-cols-3">
          {abr.map((c, i) => (
            <div
              key={c.key}
              className={`group bg-card p-8 transition-colors hover:bg-[var(--tint)] ${
                i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tint)] transition-colors group-hover:bg-background">
                  <c.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                </span>
                <h2 className="font-display text-lg font-bold uppercase tracking-wide text-primary">
                  {c.key}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-page scroll-mt-20 py-12 sm:py-16">
        <p className="label-mono">Services</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Where AI becomes operational.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="surface-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--tint)]">
                <s.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="label-mono">Extended services</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {extendedServices.map((s) => (
              <article key={s.title} className="rounded-2xl border border-border bg-[var(--tint)] p-6">
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* SETU */}
      <section id="products" className="scroll-mt-20 bg-[var(--tint)] py-14 sm:py-20">
        <div className="container-page">
          <p className="label-mono">Setu Systems</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            One intelligent platform. Every part of the operation.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Setu means "bridge" in Sanskrit: the bridge between business functions, and between
            people and intelligent systems. Setu Systems gives you a portal for every part of your
            operation: cases, billing, client inquiries,
            evidence and insight, all with AI woven through.
          </p>
          <p className="mt-3 text-sm font-medium text-primary">
            Start with one portal. Add the rest as you grow, with implementation and customization
            from 3ylabs.
          </p>


          <figure className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
            <img
              src={vantageUi}
              alt="Setu Vantage case workspace showing a case list, statuses and an activity timeline"
              width={1600}
              height={1008}
              loading="lazy"
              className="block w-full"
            />
          </figure>

          <div className="mt-12">
            <PortalExplorer />
          </div>

          <div className="mt-16">
            <SetuArchitecture />
          </div>

          <div className="mt-10">
            <Link
              to="/products/setu-systems"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              See the full Setu Systems platform <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ASCENDHSI PROOF STRIP */}
      <section className="container-page py-12 sm:py-16">
        <div className="surface-card grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="label-mono">Proof in production · AscendHSI</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              We run the operations behind an immigration case operations firm.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              3ylabs powers AscendHSI's operations end to end with Setu portals for case management,
              client ticketing and billing, AI in daily workflows with human review, and the cloud
              infrastructure underneath.
            </p>
            <Link
              to="/results"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              Read the AscendHSI story <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              "One source of truth for a distributed team",
              "Faster client response times",
              "An operations backbone that scales",
            ].map((t) => (
              <li
                key={t}
                className="rounded-xl border border-border bg-[var(--tint)] px-4 py-4 text-sm font-medium text-primary"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* APPROACH PREVIEW */}
      <section className="container-page py-12 sm:py-16">
        <p className="label-mono">Approach</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          One accountable team, from strategy through production.
        </h2>
        <ol className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["01", "Discover", "Goals, workflows, data and AI opportunities."],
            ["02", "Design", "Experience, architecture and governance."],
            ["03", "Build", "Engineer the AI-native solution."],
            ["04", "Deploy", "Productionize securely."],
            ["05", "Optimize", "Measure, improve, keep innovating."],
          ].map(([n, name, body]) => (
            <li key={n} className="surface-card p-5">
              <span className="font-mono text-[11px] tracking-widest text-[var(--brand)]">{n}</span>
              <p className="mt-1 font-display font-semibold">{name}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
        <Link
          to="/approach"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
        >
          Explore the full approach <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>

        <div className="mt-14 border-t border-border pt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="label-mono">Insights</p>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              All insights <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul className="mt-5 divide-y divide-border">
            {insights.map((a) => (
              <li key={a.title} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="label-mono sm:w-56 sm:shrink-0">{a.category}</span>
                <span className="font-display text-base font-semibold">{a.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* INDUSTRIES */}
      <section id="industries" className="container-page scroll-mt-20 py-14 sm:py-20">
        <p className="label-mono">Industries</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          AI that fits the way your industry works.
        </h2>
        <figure className="mt-8 aspect-[21/9] overflow-hidden rounded-2xl border border-border">
          <img
            src={legalIndustry}
            alt="Legal team reviewing case documents in a modern office"
            loading="lazy"
            className="size-full object-cover"
          />
        </figure>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <article
              key={i.name}
              className={`rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                i.featured
                  ? "border-transparent text-primary-foreground shadow-[var(--shadow-lift)]"
                  : "border-border bg-card shadow-[var(--shadow-soft)]"
              }`}
              style={i.featured ? { background: "var(--gradient-brand)" } : undefined}
            >
              <i.icon
                className={`h-5 w-5 ${i.featured ? "text-primary-foreground" : "text-[var(--brand)]"}`}
                aria-hidden
              />
              <h3
                className={`mt-4 font-display text-lg font-semibold ${i.featured ? "text-primary-foreground" : ""}`}
              >
                {i.name}
              </h3>
              {i.featured && (
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/80">
                  Deepest domain focus
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* HEM */}
      <section id="about" className="scroll-mt-20 border-y border-border bg-[var(--tint)] py-14 sm:py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="label-mono">HEM / Hyper Enabled Minds</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              AI should amplify people, not replace them.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We believe artificial intelligence should amplify human capability, accelerate
              innovation and enable smarter decisions, not replace the people behind them.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <figure className="mb-6 aspect-[16/9] overflow-hidden rounded-2xl">
              <img
                src={teamAbout}
                alt="3ylabs team working together at a shared desk"
                loading="lazy"
                className="size-full object-cover"
              />
            </figure>
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--cyan) 35%, transparent), transparent 70%)",
              }}
            />
            <div className="relative grid gap-3 sm:grid-cols-2">
              {["Human judgment", "Machine speed", "Governed by design", "Measurable outcomes"].map(
                (t) => (
                  <div key={t} className="rounded-xl border border-border bg-background px-4 py-5">
                    <p className="font-display text-sm font-semibold text-primary">{t}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="container-page mt-14 grid gap-5 md:grid-cols-2">
          <article className="surface-card p-7">
            <p className="label-mono">Vision</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              To become the most trusted AI transformation partner, empowering organizations to
              build intelligent, secure and scalable digital enterprises.
            </p>
          </article>
          <article className="surface-card p-7">
            <p className="label-mono">Mission</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              To help organizations identify the right AI opportunities, engineer practical
              solutions, modernize their platforms and continuously innovate through intelligent
              automation, delivered by one accountable team from strategy through production.
            </p>
          </article>
        </div>
      </section>


      <CTASection />
    </main>
  );
}
