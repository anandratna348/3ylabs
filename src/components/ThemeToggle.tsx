import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

const modes: { id: Mode; label: string; icon: typeof Sun }[] = [
  { id: "light", label: "Daylight", icon: Sun },
  { id: "dark", label: "Lab", icon: Moon },
  { id: "system", label: "System", icon: Monitor },
];

export function applyTheme(mode: Mode) {
  const dark =
    mode === "dark" ||
    (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<Mode>("system");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Mode | null) ?? "system";
    setMode(stored);
    setReady(true);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem("theme") as Mode | null) ?? "system") applyTheme(stored);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const select = (next: Mode) => {
    setMode(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className={`inline-flex items-center gap-0.5 rounded-lg border border-border bg-background p-0.5 ${
        compact ? "" : "shadow-[var(--shadow-soft)]"
      }`}
    >
      {modes.map((m) => {
        const active = ready && mode === m.id;
        return (
          <button
            key={m.id}
            type="button"
            onClick={() => select(m.id)}
            aria-pressed={active}
            aria-label={`${m.label} theme`}
            title={`${m.label} theme`}
            className={`inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors ${
              active
                ? "bg-secondary text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-primary"
            }`}
          >
            <m.icon className="h-4 w-4" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
