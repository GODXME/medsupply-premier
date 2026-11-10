import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Contact } from "@/components/site/sections";
import { getProduct } from "@/lib/products";
export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => { const p = getProduct(params.slug); if (!p) throw notFound(); return p; },
  head: ({ loaderData: p }) => ({ meta: p ? [{ title: `${p.name} — Savenora Surgical` }, { name: "description", content: p.short }, { property: "og:title", content: p.name }, { property: "og:description", content: p.short }] : [{ title: "Product not found" }, { name: "robots", content: "noindex" }] }),
  component: Page,
});
function Page() {
  const p = Route.useLoaderData();
  return (
    <Layout>
      <section className="bg-smoke-gradient pt-32 pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <img src={p.image} alt={p.name} width={1024} height={1024} className="w-full rounded-[2rem] shadow-lift" />
          <div>
            <Link to="/products" className="text-sm text-ink/70 hover:underline">← All products</Link>
            <p className="eyebrow mt-6 text-ink">{p.no} · {p.category}</p>
            <h1 className="mt-3 text-5xl text-ink sm:text-6xl">{p.name}</h1>
            <p className="mt-5 text-ink/75">{p.short}</p>
            <dl className="glass mt-8 divide-y divide-border rounded-2xl">
              {p.specs.map((s) => (<div key={s.label} className="grid grid-cols-2 gap-4 p-4 text-sm"><dt className="font-medium">{s.label}</dt><dd className="text-muted-foreground">{s.value}</dd></div>))}
              <div className="grid grid-cols-2 gap-4 p-4 text-sm"><dt className="font-medium">Packaging</dt><dd className="text-muted-foreground">{p.packaging}</dd></div>
            </dl>
            <a href="#enquiry" className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground">Request a Quote</a>
          </div>
        </div>
      </section>
      <Contact defaultProduct={p.name} />
    </Layout>
  );
}
