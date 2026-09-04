import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container-page py-20">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12"
        style={{ background: "var(--brand-deep)" }}
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          Ready to move from AI curiosity to AI capability?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80">
          Tell us where you are today. We'll help identify where AI can create measurable value.
        </p>
        <Link
          to="/contact"
          className="group mt-8 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[var(--brand)] shadow-[var(--shadow-lift)] transition-all hover:-translate-y-0.5 hover:bg-white/95"
        >
          Book an AI Readiness Assessment
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
