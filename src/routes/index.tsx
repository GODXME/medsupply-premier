import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero, CategoryStrip, ProductGrid, About, WhyUs, Quality, Infrastructure, CtaBand, Contact } from "@/components/site/sections";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Savenora Surgical — Medical Consumables Supplier" }, { name: "description", content: "Cotton wool, bandages, plaster, incontinence pants, masks, caps and gloves for hospitals and distributors." }, { property: "og:title", content: "Savenora Surgical — Medical Consumables Supplier" }, { property: "og:description", content: "Cotton wool, bandages, plaster, incontinence pants, masks, caps and gloves for hospitals and distributors." }] }),
  component: () => (<Layout><Hero /><CategoryStrip /><ProductGrid limit={4} /><About /><WhyUs /><Quality /><Infrastructure /><CtaBand /><Contact /></Layout>),
});
