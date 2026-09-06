import { createFileRoute, notFound } from "@tanstack/react-router";
import { portals } from "@/data/setu";
import { PortalMockup } from "@/components/PortalMockup";

/**
 * Internal capture surface for product screenshots (IMG-02...07, IMG-15...19).
 * Renders one portal UI with synthetic seed data only, no navigation chrome.
 * Not linked, not in the sitemap, noindex.
 */
export const Route = createFileRoute("/shotlab/$portal")({
  loader: ({ params }) => {
    const portal = portals.find((p) => p.id === params.portal);
    if (!portal) throw notFound();
    return { portal };
  },
  head: () => ({
    meta: [{ title: "Capture surface" }, { name: "robots", content: "noindex, nofollow" }],
  }),
  component: ShotLab,
});

function ShotLab() {
  const { portal } = Route.useLoaderData();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-10">
      <div id="shot-target" className="w-[1200px]">
        <PortalMockup id={portal.id} />
      </div>
    </div>
  );
}
