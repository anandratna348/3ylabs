const columns = ["Cases", "Finance", "Evidence", "Tickets", "Discover"];
const badges = ["MULTI-TENANT", "ROLE-BASED ACCESS", "API-FIRST", "CLOUD-NATIVE"];

export function SetuArchitecture() {
  return (
    <div className="surface-card p-6 sm:p-10">
      <div className="text-center">
        <span
          className="inline-flex rounded-xl px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          SETU SYSTEMS
        </span>
      </div>
      <div aria-hidden className="mx-auto h-8 w-px bg-border" />
      <div aria-hidden className="mx-auto hidden h-px w-[85%] bg-border sm:block" />
      <ul className="mt-0 grid grid-cols-2 gap-3 pt-6 sm:grid-cols-5">
        {columns.map((c) => (
          <li
            key={c}
            className="rounded-xl border border-border bg-[var(--tint)] px-3 py-4 text-center text-sm font-medium text-primary"
          >
            {c}
          </li>
        ))}
      </ul>
      <div aria-hidden className="mx-auto h-8 w-px bg-border" />
      <div className="text-center">
        <span className="inline-flex rounded-xl border border-[var(--cyan)] bg-[color-mix(in_oklab,var(--cyan)_10%,white)] px-5 py-3 font-mono text-xs uppercase tracking-widest text-[var(--brand-deep)]">
          AI Assistant
        </span>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {badges.map((b) => (
          <span
            key={b}
            className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] tracking-widest text-muted-foreground"
          >
            {b}
          </span>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        All portals share one secure platform and can be adopted individually.
      </p>
    </div>
  );
}
