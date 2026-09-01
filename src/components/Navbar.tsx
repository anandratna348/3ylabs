import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Wordmark";
import { services } from "@/data/services";
import { portals } from "@/data/setu";

interface NavItem {
  label: string;
  to: string;
  params?: Record<string, string>;
  desc?: string;
}

interface NavGroup {
  label: string;
  to?: string;
  items?: NavItem[];
  columns?: { title: string; items: NavItem[] }[];
}

const groups: NavGroup[] = [
  {
    label: "Services",
    to: "/services",
    columns: [
      {
        title: "Core services",
        items: services
          .filter((s) => s.kind === "core")
          .map((s) => ({ label: s.name, to: "/services/$slug", params: { slug: s.slug }, desc: s.tagline })),
      },
      {
        title: "Extended services",
        items: [
          ...services
            .filter((s) => s.kind === "extended")
            .map((s) => ({ label: s.name, to: "/services/$slug", params: { slug: s.slug }, desc: s.tagline })),
          { label: "All services", to: "/services", desc: "The full capability map." },
        ],
      },
    ],
  },
  {
    label: "Products",
    to: "/products/setu-systems",
    columns: [
      {
        title: "Setu Systems",
        items: [
          {
            label: "Platform overview",
            to: "/products/setu-systems",
            desc: "One intelligent platform for the whole operation.",
          },
          ...portals.slice(0, 3).map((p) => ({ label: p.name, to: "/products/setu-systems", desc: p.short })),
        ],
      },
      {
        title: "Portals",
        items: portals.slice(3).map((p) => ({ label: p.name, to: "/products/setu-systems", desc: p.short })),
      },
    ],
  },
  { label: "Industries", to: "/industries" },
  {
    label: "Company",
    columns: [
      {
        title: "About 3ylabs",
        items: [
          { label: "About", to: "/about", desc: "Who we are and how we think." },
          { label: "Approach", to: "/approach", desc: "Discover to Optimize, one accountable team." },
        ],
      },
      {
        title: "Proof",
        items: [
          { label: "Results", to: "/results", desc: "Client outcomes in production." },
          { label: "Insights", to: "/insights", desc: "Notes from the work." },
        ],
      },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setMobileGroup(null);
  }, [pathname]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(null), 140);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_24px_-10px_rgba(11,16,32,0.35)]" : ""
      }`}
      onKeyDown={(e) => {
        if (e.key === "Escape") setMenu(null);
      }}
    >
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="shrink-0 cursor-pointer" aria-label="3ylabs home">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {groups.map((g) => {
            const active = menu === g.label;
            if (!g.columns) {
              return (
                <li key={g.label}>
                  <Link
                    to={g.to as never}
                    onMouseEnter={() => setMenu(null)}
                    className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                  >
                    {g.label}
                  </Link>
                </li>
              );
            }
            return (
              <li
                key={g.label}
                className="relative"
                onMouseEnter={() => openMenu(g.label)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setMenu(active ? null : g.label)}
                  className={`inline-flex cursor-pointer items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {g.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${active ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                <div
                  className={`absolute left-1/2 top-full w-[42rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    active
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-background p-3 shadow-[var(--shadow-lift)]">
                    {g.columns.map((col) => (
                      <div key={col.title}>
                        <p className="label-mono px-3 pb-1 pt-2">{col.title}</p>
                        <ul>
                          {col.items.map((it) => (
                            <li key={it.label + it.to}>
                              <Link
                                to={it.to as never}
                                params={it.params as never}
                                onClick={() => setMenu(null)}
                                className="block cursor-pointer rounded-xl px-3 py-2.5 transition-colors hover:bg-[var(--tint)]"
                              >
                                <span className="block text-sm font-semibold text-foreground">
                                  {it.label}
                                </span>
                                {it.desc && (
                                  <span className="mt-0.5 block line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                    {it.desc}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            style={{ background: "var(--gradient-accent)" }}
            className="group inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:brightness-105"
          >
            Book an Assessment
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border text-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {groups.map((g) => {
              if (!g.columns) {
                return (
                  <li key={g.label}>
                    <Link
                      to={g.to as never}
                      className="block cursor-pointer rounded-md px-2 py-3 text-base font-medium text-foreground"
                    >
                      {g.label}
                    </Link>
                  </li>
                );
              }
              const expanded = mobileGroup === g.label;
              return (
                <li key={g.label} className="border-b border-border last:border-0">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileGroup(expanded ? null : g.label)}
                    className="flex w-full cursor-pointer items-center justify-between px-2 py-3 text-base font-medium text-foreground"
                  >
                    {g.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      aria-hidden
                    />
                  </button>
                  {expanded && (
                    <ul className="animate-fade-in pb-2">
                      {g.columns.flatMap((c) => c.items).map((it) => (
                        <li key={it.label + it.to}>
                          <Link
                            to={it.to as never}
                            params={it.params as never}
                            className="block cursor-pointer rounded-md px-4 py-2.5 text-sm text-muted-foreground"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            <li className="mt-3">
              <Link
                to="/contact"
                style={{ background: "var(--gradient-accent)" }}
                className="block cursor-pointer rounded-lg px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book an AI Readiness Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
