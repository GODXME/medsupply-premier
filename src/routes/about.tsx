import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, About, WhyUs, CtaBand } from "@/components/site/sections";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About Us — Savenora Surgical" }, { name: "description", content: "Committed to quality and dedicated to healthcare: learn about Savenora Surgical." }, { property: "og:title", content: "About Us — Savenora Surgical" }, { property: "og:description", content: "Committed to quality and dedicated to healthcare: learn about Savenora Surgical." }] }),
  component: () => (<Layout><PageHero eyebrow="About Us" title="Committed to Quality. Dedicated to Healthcare." /><About /><WhyUs /><CtaBand /></Layout>),
});
