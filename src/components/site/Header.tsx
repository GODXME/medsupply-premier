import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/savenora-logo.png.asset.json";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/quality", label: "Quality Assurance" },
  { to: "/infrastructure", label: "Infrastructure" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "glass shadow-soft" : "bg-transparent")}>
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Savenora Surgical home">
          <img src={logo.url} alt="Savenora Surgical" className="h-12 w-auto" />
        </Link>
        <nav className="hidden justify-center gap-8 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-3">
          <Link to="/contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift sm:inline-flex">
            Request a Quote
          </Link>
          <button className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="glass mx-4 mb-4 flex flex-col gap-1 rounded-2xl p-4 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm hover:bg-muted">{n.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm text-primary-foreground">Request a Quote</Link>
        </nav>
      )}
    </header>
  );
}
