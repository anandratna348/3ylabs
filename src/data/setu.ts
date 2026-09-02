export type PortalId =
  | "vantage"
  | "finance"
  | "evidence"
  | "tickets"
  | "discover"
  | "assistant";

export interface Portal {
  id: PortalId;
  name: string;
  label: string;
  description: string;
  benefits: string[];
  short: string;
}

export const portals: Portal[] = [
  {
    id: "vantage",
    name: "Setu Vantage",
    label: "Case & Matter Management",
    short: "Clients, teams, tasks and documents in one workspace.",
    description:
      "Clients, teams, tasks, documents and status in one workspace, replacing spreadsheets and disconnected email trails.",
    benefits: [
      "One source of truth for every case",
      "Nothing falls through the cracks",
      "Leadership sees workload and progress in real time",
    ],
  },
  {
    id: "finance",
    name: "Setu Finance",
    label: "Billing & Financial Operations",
    short: "Engagements, invoices, payments and financial reporting.",
    description:
      "Billing and invoicing for professional-services firms with engagements, invoices, payment tracking and financial reporting.",
    benefits: ["Faster billing cycles", "Fewer missed payments", "Clean financial records"],
  },
  {
    id: "evidence",
    name: "Setu Evidence Studio",
    label: "Document & Evidence Intelligence",
    short: "A privacy-first assistant for evidence and structured drafting.",
    description:
      "A privacy-first document assistant that organizes evidence against defined criteria, tracks status and supports structured drafting.",
    benefits: [
      "Organized evidence portfolio",
      "Reviewable document workflows",
      "Sensitive files stay under customer control",
    ],
  },
  {
    id: "tickets",
    name: "Setu Tickets",
    label: "Client Inquiry Management",
    short: "A client-inquiry portal with lifecycle and service-level targets.",
    description:
      "A client-inquiry ticketing portal with a defined lifecycle and service-level targets, replacing shared inboxes.",
    benefits: [
      "Every question is tracked",
      "Every request is assigned",
      "Response quality becomes measurable",
    ],
  },
  {
    id: "discover",
    name: "Setu Discover",
    label: "AI Opportunity Discovery",
    short: "Surfaces where AI will create measurable value.",
    description: "Analyzes operations and surfaces where AI will create measurable value.",
    benefits: ["Prioritized AI opportunities", "ROI-ranked roadmap", "Reduced guesswork"],
  },
  {
    id: "assistant",
    name: "Setu AI Assistant",
    label: "Governed AI Assistant",
    short: "Role-aware, cited answers across your operation.",
    description:
      "Ask about a case, invoice or document and get a role-aware, cited answer.",
    benefits: [
      "Find answers in seconds",
      "Reduce time spent searching",
      "Accelerate employee onboarding",
    ],
  },
];

export interface PortalDetail {
  buyer: string;
  useCases: string[];
  capabilities: string[];
  pricing: string;
  recommended?: boolean;
}

export const portalDetails: Record<PortalId, PortalDetail> = {
  vantage: {
    buyer: "Operations lead or managing partner running a caseload across a distributed team.",
    recommended: true,
    useCases: [
      "Replace case spreadsheets and email trails with one workspace",
      "Give leadership a live view of workload and progress",
      "Standardize how work moves between team members",
    ],
    capabilities: [
      "Client, matter, task and document records in one place",
      "Stage-based workflows with owners and due dates",
      "Role-aware access for staff, partners and external collaborators",
      "Audit trail on every status change",
    ],
    pricing: "Implementation from a fixed-scope 4 week rollout, then per-seat monthly.",
  },
  finance: {
    buyer: "Finance or billing manager in a professional-services firm.",
    useCases: [
      "Shorten the gap between work delivered and invoice sent",
      "See outstanding and overdue balances without a spreadsheet",
      "Tie billing back to the matter it came from",
    ],
    capabilities: [
      "Engagements, rate cards and invoice generation",
      "Payment tracking with overdue signals",
      "Revenue and receivables reporting",
      "Connects to Setu Vantage matters",
    ],
    pricing: "Add-on to Setu Vantage, or standalone from a 3 week rollout.",
  },
  evidence: {
    buyer: "Case or document lead who has to assemble evidence against defined criteria.",
    useCases: [
      "Organize a document set against a checklist of criteria",
      "Answer questions about a file with a citation back to the page",
      "Draft from structured source material instead of a blank page",
    ],
    capabilities: [
      "Criteria-based evidence tracking with status",
      "Cited AI answers with page-level references",
      "Human review before anything leaves the system",
      "Customer-controlled storage for sensitive files",
    ],
    pricing: "Pilot on one document set, then per-seat monthly.",
  },
  tickets: {
    buyer: "Client-service lead replacing a shared inbox.",
    useCases: [
      "Make sure every client question has an owner",
      "Measure response time instead of guessing at it",
      "Give clients one place to ask and to check status",
    ],
    capabilities: [
      "Client-facing intake portal",
      "Defined ticket lifecycle and assignment rules",
      "Service-level targets with breach visibility",
      "Response quality reporting",
    ],
    pricing: "Fastest portal to launch, typically live in 2 weeks.",
  },
  discover: {
    buyer: "Executive sponsor deciding where to spend the AI budget.",
    useCases: [
      "Separate AI experiments from initiatives worth funding",
      "Rank opportunities by effort against return",
      "Agree a sequence before engineering starts",
    ],
    capabilities: [
      "Workflow and data readiness review",
      "Opportunity scoring against value and effort",
      "Sequenced roadmap with owners",
      "Governance constraints captured up front",
    ],
    pricing: "Delivered as a fixed-fee assessment, not a subscription.",
  },
  assistant: {
    buyer: "Any team that loses hours searching across cases, invoices and documents.",
    useCases: [
      "Ask a question in plain language and get a cited answer",
      "Cut onboarding time for new staff",
      "Stop re-reading files to find one detail",
    ],
    capabilities: [
      "Role-aware retrieval across connected portals",
      "Citations on every answer",
      "No answer without a source",
      "Usage and accuracy reporting",
    ],
    pricing: "Included with two or more portals, otherwise per-seat monthly.",
  },
};
