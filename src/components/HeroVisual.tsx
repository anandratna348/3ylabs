import { Activity, Boxes, Cloud, FileSearch, Sparkles, Users } from "lucide-react";

const nodes = [
  { icon: Sparkles, title: "AI Opportunity", meta: "+42% potential" },
  { icon: FileSearch, title: "Document Intelligence", meta: "Active" },
  { icon: Users, title: "Client Operations", meta: "98% tracked" },
  { icon: Activity, title: "AI Assistant", meta: "Ready" },
  { icon: Cloud, title: "Cloud", meta: "Operational" },
];

export function HeroVisual() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem]"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 30%, color-mix(in oklab, var(--cyan) 22%, transparent), transparent 70%)",
        }}
      />
      <div className="surface-card p-5 sm:p-7">
        <div
          className="relative overflow-hidden rounded-2xl px-5 py-6"
          style={{ background: "var(--gradient-brand)" }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Boxes className="h-5 w-5 text-primary-foreground" aria-hidden />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70">
                Platform
              </p>
              <p className="font-display text-lg font-semibold text-primary-foreground">
                AI Operations
              </p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {["Advise", "Build", "Run"].map((s) => (
              <div key={s} className="rounded-lg bg-white/12 px-2 py-2 text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/85">
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div aria-hidden className="mx-auto h-6 w-px bg-border" />

        <div className="grid gap-2.5 sm:grid-cols-2">
          {nodes.map((n, i) => (
            <div
              key={n.title}
              className="animate-fade-up flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-3 transition-shadow hover:shadow-[var(--shadow-soft)]"
              style={{ animationDelay: `${120 * i}ms` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--tint)]">
                <n.icon className="h-4 w-4 text-[var(--brand)]" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{n.title}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--cyan)]">
                  {n.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
