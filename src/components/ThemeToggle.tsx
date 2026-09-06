import { useEffect, useState } from "react";

type Theme = "daylight" | "lab";

const STORAGE_KEY = "3y-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "lab" : "daylight";
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "lab");
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("daylight");
  const [ready, setReady] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const explicit = stored === "lab" || stored === "daylight" ? (stored as Theme) : null;
    setTheme(explicit ?? systemTheme());
    setReady(true);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next = systemTheme();
      setTheme(next);
      applyTheme(next);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const select = (next: Theme) => {
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    setAnnouncement(next === "lab" ? "Lab theme on." : "Daylight theme on.");
  };

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={`inline-flex items-center gap-0.5 rounded-lg border border-border bg-background p-0.5 ${
        compact ? "" : "w-full"
      }`}
    >
      {(["daylight", "lab"] as Theme[]).map((id) => {
        const active = ready && theme === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => select(id)}
            aria-pressed={active}
            className={`inline-flex cursor-pointer items-center justify-center rounded-md px-2.5 py-1.5 font-medium transition-colors ${
              compact ? "text-xs" : "flex-1 text-sm"
            } ${
              active
                ? "bg-secondary text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-primary"
            }`}
          >
            {id === "daylight" ? "Daylight" : "Lab"}
          </button>
        );
      })}
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
