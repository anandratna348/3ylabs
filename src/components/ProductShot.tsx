type Props = {
  /** Base name under /shots, e.g. "vantage" resolves to vantage-daylight.* and vantage-lab.* */
  name: string;
  /** Describes what the screenshot proves, not what it contains. */
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
};

function Sources({ name, theme }: { name: string; theme: "daylight" | "lab" }) {
  return (
    <>
      <source type="image/avif" srcSet={`/shots/${name}-${theme}.avif`} />
      <source type="image/webp" srcSet={`/shots/${name}-${theme}.webp`} />
    </>
  );
}

/**
 * Theme-keyed product screenshot, framed in the site window treatment.
 * Two real captures (one per theme) rather than a CSS-filtered light shot.
 */
export function ProductShot({ name, alt, width, height, priority, className }: Props) {
  const imgProps = {
    alt,
    width,
    height,
    className: "block w-full",
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    ...(priority ? { fetchPriority: "high" as const } : {}),
  };

  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-lift)] ${className ?? ""}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <picture className="shot-daylight">
        <Sources name={name} theme="daylight" />
        <img src={`/shots/${name}-daylight.webp`} {...imgProps} />
      </picture>
      <picture className="shot-lab">
        <Sources name={name} theme="lab" />
        <img src={`/shots/${name}-lab.webp`} {...imgProps} />
      </picture>
    </div>
  );
}
