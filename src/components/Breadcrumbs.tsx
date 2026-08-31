import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
  params?: Record<string, string>;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-[var(--tint)]">
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="cursor-pointer transition-colors hover:text-primary">
            Home
          </Link>
        </li>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden />
              {last || !c.to ? (
                <span aria-current="page" className="font-medium text-primary">
                  {c.label}
                </span>
              ) : (
                <Link
                  to={c.to as never}
                  params={c.params as never}
                  className="cursor-pointer transition-colors hover:text-primary"
                >
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
