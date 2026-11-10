import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Infrastructure, CtaBand } from "@/components/site/sections";
export const Route = createFileRoute("/infrastructure")({
  head: () => ({ meta: [{ title: "Infrastructure — Savenora Surgical" }, { name: "description", content: "Manufacturing, supply and bulk distribution capabilities of Savenora Surgical." }, { property: "og:title", content: "Infrastructure — Savenora Surgical" }, { property: "og:description", content: "Manufacturing, supply and bulk distribution capabilities of Savenora Surgical." }] }),
  component: () => (<Layout><PageHero eyebrow="Infrastructure" title="Built to supply at institutional scale." /><Infrastructure /><CtaBand /></Layout>),
});
