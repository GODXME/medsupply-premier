import { Link } from "@tanstack/react-router";
import { products, contact } from "@/lib/products";

export function Footer() {
  return (
    <footer className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-3xl">Savenora Surgical</p>
          <p className="mt-2 text-xs tracking-[0.25em] text-smoke uppercase">Innovation · Precision · Better Care</p>
          <p className="mt-6 text-sm opacity-70">Medical consumables and patient-care essentials for hospitals, clinics, distributors and institutions.</p>
        </div>
        <div>
          <p className="eyebrow text-smoke">Products</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            {products.map((p) => (
              <li key={p.slug}><Link to="/products/$slug" params={{ slug: p.slug }} className="hover:opacity-100 hover:underline">{p.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-smoke">Company</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/quality">Quality Assurance</Link></li>
            <li><Link to="/infrastructure">Infrastructure</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-smoke">Contact</p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li><a href={contact.emailHref}>{contact.email}</a></li>
            <li>{contact.phone}</li>
            <li><a href={contact.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li>{contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Savenora Surgical. All rights reserved.
      </div>
    </footer>
  );
}
