import { ArrowRight, Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { portals, type PortalId } from "@/data/setu";
import { PortalMockup } from "./PortalMockup";
import { DemoModal } from "./DemoModal";

export function PortalExplorer() {
  const [active, setActive] = useState<PortalId>("vantage");
  const [demo, setDemo] = useState<string | null>(null);
  const portal = portals.find((p) => p.id === active)!;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Setu portals"
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:px-0"
      >
        {portals.map((p) => {
          const on = p.id === active;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={on}
              type="button"
              onClick={() => setActive(p.id)}
              className={`snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                on
                  ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "border-border bg-background text-muted-foreground hover:border-[var(--brand)] hover:text-primary"
              }`}
            >
              {p.name}
            </button>
          );
        })}
      </div>

      <div key={active} className="animate-fade-up mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="label-mono">{portal.label}</p>
          <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{portal.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {portal.description}
          </p>
          <ul className="mt-6 space-y-3">
            {portal.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--cyan)_20%,white)]">
                  <Check className="h-3 w-3 text-[var(--brand-deep)]" aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setDemo(portal.name)}
              className="cursor-pointer rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Request a Demo
            </button>
            <Link
              to="/products/setu-systems/$portal"
              params={{ portal: portal.id }}
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              {portal.name} details
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <PortalMockup id={portal.id} />
      </div>

      {demo && <DemoModal product={demo} onClose={() => setDemo(null)} />}
    </div>
  );
}
