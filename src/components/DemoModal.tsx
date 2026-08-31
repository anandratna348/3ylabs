import { CheckCircle2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function DemoModal({
  product,
  onClose,
}: {
  product: string;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    ref.current?.querySelector<HTMLElement>("input,button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[oklch(0.19_0.03_268/0.5)] p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request a demo"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={ref}
        className="animate-fade-up max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:max-w-md sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="label-mono">Request a Demo</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {sent ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--cyan)]" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold">Demo request received</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thanks, we'll be in touch to arrange your walkthrough.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            className="mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="rounded-lg border border-border bg-[var(--tint)] px-3 py-2.5">
              <p className="text-xs text-muted-foreground">Selected product</p>
              <p className="font-display text-sm font-semibold text-primary">{product}</p>
            </div>
            {[
              { id: "demo-name", label: "Name", type: "text" },
              { id: "demo-email", label: "Work Email", type: "email" },
              { id: "demo-company", label: "Company", type: "text" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-sm font-medium">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--brand)]"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Request Demo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
