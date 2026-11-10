import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, ProductGrid, CtaBand } from "@/components/site/sections";
export const Route = createFileRoute("/products/")({
  head: () => ({ meta: [{ title: "Products — Savenora Surgical" }, { name: "description", content: "Eight categories of medical consumables, wound care and protective products for bulk buyers." }, { property: "og:title", content: "Products — Savenora Surgical" }, { property: "og:description", content: "Eight categories of medical consumables, wound care and protective products for bulk buyers." }] }),
  component: () => (<Layout><PageHero eyebrow="Products" title="The complete catalogue." /><ProductGrid /><CtaBand /></Layout>),
});
