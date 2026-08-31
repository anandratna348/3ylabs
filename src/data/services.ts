export interface Service {
  slug: string;
  name: string;
  kind: "core" | "extended";
  tagline: string;
  problem: string;
  offering: string;
  capabilities: string[];
  deliverables: string[];
  engagement: { name: string; detail: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "ai-strategy",
    name: "AI Transformation Services",
    kind: "core",
    tagline: "AI opportunity discovery, readiness assessments, enterprise roadmaps and responsible AI governance.",
    problem:
      "Leadership teams know AI matters, but every idea arrives without a business case, a data reality check or an owner. Pilots multiply, nothing reaches production, and confidence erodes.",
    offering:
      "We run a structured discovery across your operations, score the opportunities on value and feasibility, and hand you an enterprise roadmap with governance built in. This is the front door for most of our clients.",
    capabilities: [
      "AI opportunity discovery workshops",
      "AI readiness and data maturity assessment",
      "Enterprise AI roadmap and business case",
      "Responsible AI governance and policy",
      "Build vs. buy and platform selection",
    ],
    deliverables: [
      "Prioritized, ROI-ranked AI opportunity map",
      "Readiness scorecard across data, platform, people and risk",
      "12-month roadmap with sequenced initiatives",
      "Governance framework and review gates",
    ],
    engagement: [
      { name: "AI Readiness Assessment", detail: "2–3 weeks, fixed scope. The recommended starting point." },
      { name: "Roadmap Sprint", detail: "4–6 weeks. Deep discovery across a business unit with a costed roadmap." },
      { name: "Advisory Retainer", detail: "Ongoing. Fractional AI leadership alongside your team." },
    ],
    faqs: [
      {
        q: "What happens in an AI readiness assessment?",
        a: "We interview stakeholders, review workflows and data sources, score opportunities on value and feasibility, and deliver a prioritized roadmap with a clear first initiative.",
      },
      {
        q: "Do we need clean data before we start?",
        a: "No. Data readiness is part of what the assessment measures, and the roadmap sequences work so early initiatives succeed with the data you already have.",
      },
      {
        q: "Can you deliver the roadmap you recommend?",
        a: "Yes. The same team advises, builds and runs, so there is no handover gap between strategy and production.",
      },
    ],
  },
  {
    slug: "ai-product-engineering",
    name: "AI-Native Product Engineering",
    kind: "core",
    tagline: "Agentic applications, generative AI, copilots, RAG, custom SaaS and intelligent document processing.",
    problem:
      "Bolting a chat box onto an existing product does not make it AI-native. Teams need software designed around retrieval, reasoning, evaluation and human review from the first line of code.",
    offering:
      "We design and build AI-first software end to end, from product definition and architecture through evaluation harnesses, guardrails and production release. Setu Systems is the living example of this capability.",
    capabilities: [
      "Agentic applications and workflow automation",
      "Copilots and role-aware assistants",
      "Retrieval-augmented generation over private corpora",
      "Custom multi-tenant SaaS platforms",
      "Intelligent document processing and extraction",
      "Model evaluation, guardrails and observability",
    ],
    deliverables: [
      "Working production software, not a slide deck",
      "Evaluation suite with quality baselines",
      "Guardrails, audit trails and human-review checkpoints",
      "Deployment pipeline and runbooks",
    ],
    engagement: [
      { name: "Prototype", detail: "3–4 weeks. A working slice against your real data." },
      { name: "Product Build", detail: "8–16 weeks. A cross-functional squad to first production release." },
      { name: "Product Partnership", detail: "Ongoing. Continuous delivery on your roadmap." },
    ],
    faqs: [
      {
        q: "Do you build on our stack or yours?",
        a: "Yours where it exists. We are cloud-agnostic and model-agnostic, and we document every choice so your team can own the result.",
      },
      {
        q: "How do you keep AI output trustworthy?",
        a: "Every AI surface we ship has retrieval with citations, evaluation baselines and a human review step before output reaches a customer.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Client-commissioned work is delivered with full source and documentation.",
      },
    ],
  },
  {
    slug: "legal-tech",
    name: "Legal-Tech Solutions",
    kind: "core",
    tagline: "Case management, client intake and ticketing, billing, evidence intelligence and AI-assisted drafting.",
    problem:
      "Legal and immigration operations run on spreadsheets, shared inboxes and disconnected trackers. Deadlines depend on memory, and no one can see the true state of a matter without asking three people.",
    offering:
      "Our deepest specialization. We replace the patchwork with connected portals for cases, intake, billing and evidence, then weave AI through the workflow with human review before anything reaches a client.",
    capabilities: [
      "Case and matter management",
      "Client intake and ticketing with SLA targets",
      "Billing, invoicing and payment tracking",
      "Evidence and document intelligence",
      "AI-assisted drafting workflows",
      "Migration from spreadsheets and legacy trackers",
    ],
    deliverables: [
      "Configured Setu portals for your practice",
      "Migrated matters, clients and documents",
      "Role-based access model and audit logging",
      "Team training and adoption support",
    ],
    engagement: [
      { name: "Portal Pilot", detail: "4–6 weeks. One portal, one team, real matters." },
      { name: "Operations Rollout", detail: "3–6 months. Firm-wide rollout across portals." },
      { name: "Managed Operations", detail: "Ongoing. We run the platform and the cloud beneath it." },
    ],
    faqs: [
      {
        q: "Is client and case data kept confidential?",
        a: "Yes. Setu is multi-tenant with strict isolation, role-based access and audit trails, and sensitive documents stay under your control.",
      },
      {
        q: "Does AI make decisions on matters?",
        a: "No. AI organizes, drafts and surfaces, a person reviews and approves before anything reaches a client.",
      },
      {
        q: "Can you migrate our existing spreadsheets?",
        a: "Yes. Migration from spreadsheets, shared drives and legacy trackers is part of every rollout.",
      },
    ],
  },
  {
    slug: "platform-cloud-web",
    name: "Platform, Cloud & Web Delivery",
    kind: "core",
    tagline: "Websites, portals, cloud architecture, modernization, DevOps, MLOps, security and ongoing operations.",
    problem:
      "AI ambitions stall on the platform beneath them: manual deploys, unclear ownership, brittle infrastructure and a website nobody wants to touch.",
    offering:
      "We power our clients' digital presence end to end and run the infrastructure behind it. When a client's site or platform runs, it runs because we run it well.",
    capabilities: [
      "Marketing sites, portals and customer platforms",
      "Cloud architecture and modernization",
      "DevOps, CI/CD and infrastructure as code",
      "MLOps and model deployment pipelines",
      "Security hardening and access control",
      "24/7 production operations",
    ],
    deliverables: [
      "Reference architecture and environment setup",
      "Automated build, test and deploy pipelines",
      "Monitoring, alerting and incident runbooks",
      "Security review and remediation plan",
    ],
    engagement: [
      { name: "Platform Assessment", detail: "2 weeks. Architecture, security and delivery review." },
      { name: "Modernization Project", detail: "6–12 weeks. Migration or rebuild with zero-drama cutover." },
      { name: "Run & Operate", detail: "Ongoing. We hold the pager." },
    ],
    faqs: [
      {
        q: "Which cloud do you work with?",
        a: "All the major providers. We recommend based on your existing footprint, compliance needs and cost profile.",
      },
      {
        q: "Can you take over an existing platform?",
        a: "Yes. We start with an assessment, stabilize operations, then modernize incrementally.",
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes, through a Run & Operate agreement with defined response targets.",
      },
    ],
  },
  {
    slug: "enterprise-intelligence",
    name: "Enterprise Intelligence",
    kind: "extended",
    tagline: "Business analytics, executive dashboards, operational intelligence and decision support.",
    problem:
      "Reporting lives in exports and personal spreadsheets. Leadership debates whose number is right instead of what to do next.",
    offering:
      "We build a trusted metric layer and the dashboards on top of it, so operational and executive decisions run on the same numbers.",
    capabilities: [
      "Metric definitions and semantic layer",
      "Executive and operational dashboards",
      "Pipeline and data modeling",
      "Forecasting and decision support",
    ],
    deliverables: [
      "Defined KPI dictionary",
      "Executive dashboard suite",
      "Automated data refresh pipelines",
    ],
    engagement: [
      { name: "Insight Sprint", detail: "3–4 weeks. One decision area, end to end." },
      { name: "Analytics Build", detail: "6–10 weeks. Full metric layer and dashboards." },
    ],
    faqs: [
      {
        q: "Do we need a data warehouse first?",
        a: "Not necessarily. We start with the sources you have and introduce a warehouse only when the workload justifies it.",
      },
      {
        q: "Which BI tools do you support?",
        a: "We work with your existing tooling, or build lightweight dashboards directly into your product where that fits better.",
      },
    ],
  },
  {
    slug: "automation",
    name: "Business Solutions & Automation",
    kind: "extended",
    tagline: "Workflow automation, process digitization and AI integrated into existing business systems.",
    problem:
      "Skilled people spend their days copying data between systems. The processes work, but they are slow, manual and impossible to measure.",
    offering:
      "Targeted improvements for teams that need results now rather than full transformation. We digitize the process, automate the handoffs and integrate AI where it earns its place.",
    capabilities: [
      "Process mapping and automation design",
      "System and API integration",
      "Document and email workflow automation",
      "AI added to existing business systems",
    ],
    deliverables: [
      "Automated workflows in production",
      "Integration layer between core systems",
      "Before/after cycle-time measurement",
    ],
    engagement: [
      { name: "Automation Pilot", detail: "2–4 weeks. One high-friction process." },
      { name: "Automation Program", detail: "Rolling. A backlog of processes delivered continuously." },
    ],
    faqs: [
      {
        q: "Will this replace our team?",
        a: "No, that is the point of HEM. We remove the copy-paste work so your team spends its time on judgment.",
      },
      {
        q: "Can you automate without replacing our systems?",
        a: "Yes. Most engagements integrate with what you already run rather than replacing it.",
      },
    ],
  },
  {
    slug: "managed-hosting",
    name: "Website Powering & Managed Hosting",
    kind: "extended",
    tagline: "Design, build, hosting and care of client websites and portals, offered as an ongoing managed service.",
    problem:
      "A website is launched, then slowly rots: no owner, no updates, no monitoring, and a security posture nobody has checked in a year.",
    offering:
      "We design, build, host and care for your site or portal as a service, performance, security, content updates and uptime included.",
    capabilities: [
      "Design and build of sites and portals",
      "Global CDN hosting and performance tuning",
      "Security patching and monitoring",
      "Content updates and ongoing care",
    ],
    deliverables: [
      "Launched, fast, accessible site",
      "Uptime and performance monitoring",
      "Monthly care report",
    ],
    engagement: [
      { name: "Build & Launch", detail: "4–8 weeks depending on scope." },
      { name: "Managed Care", detail: "Monthly. Hosting, monitoring and updates." },
    ],
    faqs: [
      {
        q: "What is included in managed care?",
        a: "Hosting, CDN, monitoring, security patching, backups and a set allowance of content updates each month.",
      },
      {
        q: "Can you take over a site you did not build?",
        a: "Usually yes, after a short technical review.",
      },
    ],
  },
];

export const coreServices = services.filter((s) => s.kind === "core");
export const extendedServices = services.filter((s) => s.kind === "extended");
export const getService = (slug: string) => services.find((s) => s.slug === slug);
