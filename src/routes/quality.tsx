import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Quality, CtaBand } from "@/components/site/sections";
export const Route = createFileRoute("/quality")({
  head: () => ({ meta: [{ title: "Quality Assurance — Savenora Surgical" }, { name: "description", content: "Quality management, testing, materials and packaging checks at Savenora Surgical." }, { property: "og:title", content: "Quality Assurance — Savenora Surgical" }, { property: "og:description", content: "Quality management, testing, materials and packaging checks at Savenora Surgical." }] }),
  component: () => (<Layout><PageHero eyebrow="Quality Assurance" title="Quality you can document." /><Quality /><div className="pt-24" /><CtaBand /></Layout>),
});
