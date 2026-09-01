import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an AI Readiness Assessment | 3ylabs" },
      {
        name: "description",
        content:
          "Tell us where you are today and 3ylabs will help identify where AI can create measurable value across your operation.",
      },
      { property: "og:title", content: "Book an AI Readiness Assessment | 3ylabs" },
      {
        property: "og:description",
        content: "From AI curiosity to AI capability, start with an AI readiness assessment.",
      },
    ],
  }),
  component: ContactPage,
});

const industries = [
  "Legal",
  "Healthcare",
  "Insurance",
  "Financial Services",
  "Manufacturing",
  "Professional Services",
  "Other",
];
const maturity = ["Exploring AI", "Early experimentation", "AI in production", "Scaling AI"];
const goals = [
  "Discover AI opportunities",
  "Build an AI product",
  "Modernize a platform",
  "Automate operations",
  "Improve document workflows",
  "Other",
];

function Field({
  id,
  label,
  type = "text",
}: {
  id: string;
  label: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--brand)]"
      />
    </div>
  );
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        name={id}
        required
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--brand)]"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  return (
    <main>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Ready to move from AI curiosity to{" "}
            <span className="text-gradient-brand">AI capability?</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tell us where you are today. We'll help identify where AI can create measurable value.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mx-auto max-w-xl surface-card p-6 sm:p-8">
          {state === "done" ? (
            <div className="animate-fade-up py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--cyan)]" aria-hidden />
              <h2 className="mt-5 text-xl font-semibold">Assessment request received</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks. Your information has been captured for this prototype.
              </p>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setState("loading");
                setTimeout(() => setState("done"), 1100);
              }}
            >
              <Field id="name" label="Name" />
              <Field id="email" label="Work Email" type="email" />
              <Field id="company" label="Company" />
              <SelectField id="industry" label="Industry" options={industries} />
              <SelectField id="maturity" label="AI Maturity" options={maturity} />
              <SelectField id="goal" label="Primary Goal" options={goals} />
              <button
                type="submit"
                disabled={state === "loading"}
                style={{ background: "var(--gradient-accent)" }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:brightness-100"
              >
                {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                Book an AI Readiness Assessment
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
