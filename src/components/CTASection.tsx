import { Link } from "@tanstack/react-router";

export function CTASection() {
  return (
    <section className="container-page py-20">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)" }}
        />
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          Ready to move from AI curiosity to AI capability?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80">
          Tell us where you are today. We'll help identify where AI can create measurable value.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-lg bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
        >
          Book an AI Readiness Assessment
        </Link>
      </div>
    </section>
  );
}
