import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Layout } from "@/components/site/Layout";
import { PageHero, Contact } from "@/components/site/sections";
export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ product: z.string().optional() }),
  head: () => ({ meta: [{ title: "Contact & Request a Quote — Savenora Surgical" }, { name: "description", content: "Send a business enquiry for medical consumables in bulk." }, { property: "og:title", content: "Contact & Request a Quote — Savenora Surgical" }, { property: "og:description", content: "Send a business enquiry for medical consumables in bulk." }] }),
  component: Page,
});
function Page() {
  const { product } = Route.useSearch();
  return (<Layout><PageHero eyebrow="Contact Us" title="Let's talk supply." /><Contact defaultProduct={product} /></Layout>);
}
