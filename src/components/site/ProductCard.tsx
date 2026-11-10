import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { Tilt } from "./motion";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Tilt className="group h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 group-hover:-translate-y-1 group-hover:border-smoke group-hover:shadow-lift">
        <Link to="/products/$slug" params={{ slug: p.slug }} className="relative block aspect-[4/3] overflow-hidden bg-smoke-gradient">
          <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium">{p.no}</span>
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <p className="eyebrow">{p.category}</p>
          <h3 className="mt-2 text-2xl leading-tight">{p.name}</h3>
          <p className="mt-3 text-sm text-muted-foreground">{p.short}</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-smoke-deep" />{f}</li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            <Link to="/products/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1 rounded-full border border-foreground/20 px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background">
              View Details <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" search={{ product: p.name }} className="rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5">
              Request a Quote
            </Link>
          </div>
        </div>
      </article>
    </Tilt>
  );
}
