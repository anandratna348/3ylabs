import type { PortalId } from "@/data/setu";
import { FileText, Quote, ShieldCheck, Sparkles } from "lucide-react";

function Chrome({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-2 border-b border-border bg-[var(--tint)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <p className="ml-2 truncate font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {title}
        </p>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "cyan" }) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
      <p
        className={`mt-1 font-display text-lg font-semibold ${tone === "cyan" ? "text-[var(--cyan)]" : "text-primary"}`}
      >
        {value}
      </p>
    </div>
  );
}

function Bar({ label, pct, value }: { label: string; pct: number; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <p className="w-24 shrink-0 truncate text-xs text-muted-foreground">{label}</p>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-[width] duration-700"
          style={{ width: `${pct}%`, background: "var(--gradient-brand)" }}
        />
      </div>
      <p className="w-12 shrink-0 text-right font-mono text-[11px] text-muted-foreground">{value}</p>
    </div>
  );
}

function Row({ cells, badge }: { cells: string[]; badge?: { text: string; tone: string } }) {
  return (
    <div className="grid grid-cols-[1.6fr_1fr_auto] items-center gap-3 border-t border-border px-1 py-2.5 text-xs">
      <p className="truncate font-medium text-foreground">{cells[0]}</p>
      <p className="truncate text-muted-foreground">{cells[1]}</p>
      {badge && (
        <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${badge.tone}`}>
          {badge.text}
        </span>
      )}
    </div>
  );
}

const ok = "bg-[color-mix(in_oklab,var(--cyan)_16%,white)] text-[var(--brand-deep)]";
const warn = "bg-secondary text-muted-foreground";

export function PortalMockup({ id }: { id: PortalId }) {
  if (id === "vantage")
    return (
      <Chrome title="Setu Vantage — Case Workspace">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Active cases" value="128" />
          <Stat label="Open tasks" value="46" />
          <Stat label="Deadlines 7d" value="9" tone="cyan" />
          <Stat label="Documents" value="1,204" />
        </div>
        <div className="mt-5">
          <p className="label-mono">Team workload</p>
          <div className="mt-3 space-y-2.5">
            <Bar label="A. Sharma" pct={78} value="18" />
            <Bar label="M. Iyer" pct={54} value="12" />
            <Bar label="J. Okafor" pct={36} value="8" />
          </div>
        </div>
        <div className="mt-5">
          <p className="label-mono">Recent cases</p>
          <div className="mt-2">
            <Row cells={["H-1B Transfer — Nexa", "Due in 3 days"]} badge={{ text: "IN REVIEW", tone: warn }} />
            <Row cells={["Green Card — Patel", "Filed"]} badge={{ text: "ON TRACK", tone: ok }} />
            <Row cells={["O-1 Petition — Lumen", "Evidence pending"]} badge={{ text: "ACTION", tone: warn }} />
          </div>
        </div>
      </Chrome>
    );

  if (id === "finance")
    return (
      <Chrome title="Setu Finance — Billing Overview">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Revenue MTD" value="—" />
          <Stat label="Invoices" value="86" />
          <Stat label="Outstanding" value="14" tone="cyan" />
          <Stat label="Payments" value="72" />
        </div>
        <div className="mt-5 flex items-end gap-2">
          {[42, 55, 38, 64, 72, 58, 80, 68, 90, 74, 84, 96].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md"
              style={{
                height: `${h}px`,
                background: i > 8 ? "var(--gradient-brand)" : "color-mix(in oklab, var(--brand) 18%, white)",
              }}
            />
          ))}
        </div>
        <div className="mt-5">
          <p className="label-mono">Recent transactions</p>
          <div className="mt-2">
            <Row cells={["INV-2041 — Nexa Corp", "Retainer"]} badge={{ text: "PAID", tone: ok }} />
            <Row cells={["INV-2042 — Lumen Ltd", "Milestone"]} badge={{ text: "SENT", tone: warn }} />
            <Row cells={["INV-2043 — Patel", "Hourly"]} badge={{ text: "OVERDUE", tone: warn }} />
          </div>
        </div>
      </Chrome>
    );

  if (id === "evidence")
    return (
      <Chrome title="Setu Evidence Studio — Portfolio">
        <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr]">
          <div className="rounded-xl border border-border bg-background p-3">
            <p className="label-mono">Documents</p>
            <ul className="mt-3 space-y-2">
              {["Employment letter.pdf", "Publication record.pdf", "Award citation.pdf", "Expert opinion.docx"].map(
                (d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-foreground">
                    <FileText className="h-3.5 w-3.5 text-[var(--brand)]" aria-hidden />
                    <span className="truncate">{d}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-background p-3">
            <p className="label-mono">Evidence criteria</p>
            <div className="mt-3 space-y-2.5">
              <Bar label="Original work" pct={82} value="9" />
              <Bar label="Judging" pct={60} value="5" />
              <Bar label="Recognition" pct={45} value="3" />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-border bg-[var(--tint)] p-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
            <p className="text-xs font-semibold text-primary">AI analysis</p>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            17 documents mapped to 3 criteria. 4 items flagged for human review before submission.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 font-mono text-[10px]">
            <span className={`rounded-full px-2 py-0.5 ${ok}`}>REVIEWED 13</span>
            <span className={`rounded-full px-2 py-0.5 ${warn}`}>PENDING 4</span>
          </div>
        </div>
      </Chrome>
    );

  if (id === "tickets")
    return (
      <Chrome title="Setu Tickets — Client Inquiries">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Open" value="37" />
          <Stat label="High priority" value="6" tone="cyan" />
          <Stat label="SLA met" value="On target" />
          <Stat label="Resolved 7d" value="54" />
        </div>
        <div className="mt-5">
          <p className="label-mono">Queue</p>
          <div className="mt-2">
            <Row cells={["Status of my filing?", "A. Sharma · SLA 4h"]} badge={{ text: "HIGH", tone: warn }} />
            <Row cells={["Invoice clarification", "M. Iyer · SLA 8h"]} badge={{ text: "OPEN", tone: ok }} />
            <Row cells={["Upload new passport", "J. Okafor · SLA 24h"]} badge={{ text: "WAITING", tone: warn }} />
            <Row cells={["Schedule consultation", "Unassigned"]} badge={{ text: "NEW", tone: ok }} />
          </div>
        </div>
      </Chrome>
    );

  if (id === "discover")
    return (
      <Chrome title="Setu Discover — AI Opportunity Map">
        <div className="grid grid-cols-3 gap-3">
          <Stat label="Opportunities" value="12" />
          <Stat label="Quick wins" value="4" tone="cyan" />
          <Stat label="In roadmap" value="7" />
        </div>
        <div className="mt-5 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-[1.6fr_repeat(3,0.7fr)] gap-2 bg-[var(--tint)] px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <p>AI opportunity</p>
            <p>Impact</p>
            <p>Effort</p>
            <p>ROI</p>
          </div>
          {[
            ["Intake triage automation", "High", "Low", "1"],
            ["Document classification", "High", "Med", "2"],
            ["Billing anomaly detection", "Med", "Low", "3"],
            ["Client response drafting", "Med", "Med", "4"],
          ].map((r) => (
            <div
              key={r[0]}
              className="grid grid-cols-[1.6fr_repeat(3,0.7fr)] items-center gap-2 border-t border-border px-3 py-2.5 text-xs"
            >
              <p className="truncate font-medium">{r[0]}</p>
              <p className="text-muted-foreground">{r[1]}</p>
              <p className="text-muted-foreground">{r[2]}</p>
              <p className="font-mono text-[var(--brand)]">P{r[3]}</p>
            </div>
          ))}
        </div>
      </Chrome>
    );

  return (
    <Chrome title="Setu AI Assistant — Governed Answers">
      <div className="rounded-xl border border-border bg-[var(--tint)] p-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          User question
        </p>
        <p className="mt-1.5 text-sm font-medium text-foreground">
          What's outstanding on the Nexa Corp matter before we can file?
        </p>
      </div>
      <div className="mt-3 rounded-xl border border-border bg-background p-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[var(--cyan)]" aria-hidden />
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            AI answer
          </p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          Two items remain: the signed employment letter and the updated expert opinion. Billing is
          current, and the case is assigned to A. Sharma with a review due in 3 days.
        </p>
        <div className="mt-3 space-y-2">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Sources
          </p>
          {[
            "Vantage · Case NEXA-118 · Task list",
            "Evidence Studio · Criteria checklist",
            "Finance · INV-2041",
          ].map((s, i) => (
            <div key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
              <Quote className="h-3 w-3 text-[var(--brand)]" aria-hidden />
              <span className="truncate">
                [{i + 1}] {s}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${ok}`}>
            CONFIDENCE HIGH
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            <ShieldCheck className="h-3 w-3" aria-hidden /> ROLE-AWARE
          </span>
        </div>
      </div>
    </Chrome>
  );
}
