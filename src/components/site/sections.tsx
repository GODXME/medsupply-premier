import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, Boxes, Factory, Globe2, Headset, Layers, PackageCheck, ShieldCheck, Truck, FlaskConical, ClipboardCheck, FileText, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import hero from "@/assets/hero-products.jpg";
import facility from "@/assets/facility.jpg";
import { products, contact } from "@/lib/products";
import { Particles } from "./Particles";
import { Reveal, SplitHeadline } from "./motion";
import { ProductCard } from "./ProductCard";
import { EnquiryForm } from "./EnquiryForm";
import type { ReactNode } from "react";

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{title}</h2>
      {intro && <p className="mt-5 text-base text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0), my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 60, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 60, damping: 20 });
  return (
    <section
      className="relative overflow-hidden bg-smoke-gradient pt-32 pb-20 lg:pt-36"
      onMouseMove={(e) => { if (reduce) return; mx.set(e.clientX / window.innerWidth - 0.5); my.set(e.clientY / window.innerHeight - 0.5); }}
    >
      <Particles />
      <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-mist opacity-60 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="eyebrow text-ink">
            Medical Consumables · Patient Care · Protection
          </motion.p>
          <SplitHeadline text="Advanced Medical Essentials. Trusted Healthcare Protection." className="mt-6 text-5xl leading-[1.02] text-ink sm:text-6xl xl:text-7xl" />
          <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-6 max-w-lg text-base text-ink/75 sm:text-lg">
            Delivering dependable medical consumables and patient-care solutions through quality, precision and commitment to better healthcare.
          </motion.p>
          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-10 flex flex-wrap gap-3">
            <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift">
              Explore Our Products <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="glass inline-flex items-center rounded-full px-7 py-4 text-sm font-medium text-ink transition-all hover:-translate-y-0.5">
              Request a Business Enquiry
            </Link>
          </motion.div>
        </div>
        <motion.div style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }} initial={reduce ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="animate-float overflow-hidden rounded-[2rem] shadow-lift">
            <img src={hero} alt="Savenora product range: cotton wool, bandages, plaster, incontinence pants, mask, bouffant cap and gloves" width={1600} height={1200} className="h-full w-full object-cover" />
          </div>
          <div className="glass absolute -bottom-6 left-6 rounded-2xl px-5 py-4 shadow-soft">
            <p className="font-display text-3xl text-ink">8</p>
            <p className="text-xs text-ink/70">Product categories</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CategoryStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6 py-6 text-sm text-muted-foreground">
        {products.map((p) => (
          <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="flex shrink-0 items-center gap-2 transition-colors hover:text-foreground">
            <span className="font-display text-lg text-smoke-deep">{p.no}</span>{p.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ProductGrid({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Product Catalogue" title="Eight essentials. One dependable supplier." intro="From wound care to protective wear — consumables built for hospitals, clinics and distributors." />
        {limit && <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">View full catalogue <ArrowRight className="h-4 w-4" /></Link>}
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p, i) => <Reveal key={p.slug} delay={(i % 4) * 0.08}><ProductCard p={p} /></Reveal>)}
      </div>
    </section>
  );
}

export function About() {
  const items = [
    ["Mission", "[Your mission statement — e.g. to make dependable medical consumables accessible to every care setting.]"],
    ["Vision", "[Your vision statement.]"],
    ["Quality commitment", "[Describe your quality philosophy and processes.]"],
    ["Manufacturing & sourcing", "[Describe your manufacturing and sourcing capabilities.]"],
    ["Distribution network", "[Regions and channels you serve.]"],
    ["Customer-first approach", "[How you support procurement teams.]"],
  ];
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={facility} alt="Medical textile production line" loading="lazy" width={1280} height={960} className="h-full min-h-[420px] w-full rounded-[2rem] object-cover shadow-soft" />
        </Reveal>
        <div>
          <SectionHead eyebrow="About Savenora" title="Committed to Quality. Dedicated to Healthcare." intro="Savenora Surgical is a supplier of medical consumables and healthcare essentials, serving hospitals, nursing homes, clinics, pharmacies and distributors with a focused, dependable product portfolio." />
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.05} className="border-t border-border pt-4">
                <dt className="font-display text-xl">{t}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const why = [
  [Award, "Quality-Focused Products", "Consumables selected and made with care for clinical environments."],
  [Truck, "Reliable Supply Chain", "Planned production and dispatch for steady replenishment."],
  [Layers, "Wide Product Portfolio", "Eight core categories from wound care to protective wear."],
  [ShieldCheck, "Consistent Product Standards", "Uniform specifications batch after batch."],
  [Boxes, "Bulk Order Capabilities", "Volumes sized for institutions and distributors."],
  [Headset, "Professional Customer Support", "A responsive team for quotes, samples and orders."],
] as const;

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHead center eyebrow="Why Choose Us" title="A partner procurement teams can rely on." />
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {why.map(([Icon, t, d], i) => (
          <Reveal key={t} delay={i * 0.06} className="group bg-background p-8 transition-colors hover:bg-card">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-smoke-gradient transition-transform duration-500 group-hover:-translate-y-1">
              <Icon className="h-5 w-5 text-ink" />
            </div>
            <h3 className="mt-6 text-2xl">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const qa = [
  [ClipboardCheck, "Quality management", "[Describe your quality management system.]"],
  [FlaskConical, "Product testing procedures", "[Outline in-process and final testing.]"],
  [Layers, "Material information", "[Raw material sourcing and specifications.]"],
  [FileText, "Applicable certifications", "[List only certifications you actually hold.]"],
  [Factory, "Manufacturing standards", "[Describe manufacturing standards followed.]"],
  [PackageCheck, "Packaging & quality checks", "[Describe packaging inspection steps.]"],
] as const;

export function Quality() {
  return (
    <section className="bg-ink-gradient text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-smoke">Quality Assurance</p>
          <h2 className="mt-4 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">Quality you can document.</h2>
          <p className="mt-5 opacity-70">Every product line is supported by defined checks. Details below are placeholders to be completed with verified company information.</p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qa.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-8 transition-colors hover:border-smoke/50">
              <Icon className="h-6 w-6 text-smoke" />
              <h3 className="mt-5 text-2xl">{t}</h3>
              <p className="mt-2 text-sm opacity-70">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Infrastructure() {
  const stats = [["[00,000+]", "Units per month capacity"], ["[00]", "Production lines"], ["[00]", "Countries served"], ["[00]", "Distribution partners"]];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Manufacturing & Supply" title="Built to supply at institutional scale." intro="[Describe your facilities, machinery, warehousing and logistics. Replace the figures with verified numbers.]" />
          <div className="mt-10 grid grid-cols-2 gap-6">
            {stats.map(([n, l]) => (
              <Reveal key={l} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-4xl">{n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="rounded-[2rem] bg-smoke-gradient p-10">
          <p className="eyebrow text-ink">Bulk Procurement & Distribution</p>
          <h3 className="mt-4 text-4xl text-ink">From tender to doorstep.</h3>
          <ul className="mt-8 space-y-5 text-ink">
            {[
              [Boxes, "Bulk & contract orders", "Volume pricing for hospitals, groups and tenders."],
              [PackageCheck, "Private label options", "[Confirm if available.]"],
              [Globe2, "Domestic & export supply", "[Regions / shipping terms.]"],
              [Truck, "Scheduled dispatch", "Planned deliveries to keep stock levels steady."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Boxes;
              return (
                <li key={t as string} className="flex gap-4">
                  <div className="glass grid h-10 w-10 shrink-0 place-items-center rounded-xl"><I className="h-5 w-5" /></div>
                  <div><p className="font-medium">{t as string}</p><p className="text-sm opacity-70">{d as string}</p></div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-6 pb-24">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink-gradient px-8 py-16 text-center text-ink-foreground sm:px-16">
        <p className="eyebrow text-smoke">Business Enquiries</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-4xl sm:text-5xl">Supplying a hospital, clinic or distribution network?</h2>
        <p className="mx-auto mt-4 max-w-xl opacity-70">Tell us the products and quantities you need — we'll prepare a tailored quotation.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded-full bg-mist px-7 py-4 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5">Request a Quote</Link>
          <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/30 px-7 py-4 text-sm"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
        </div>
      </Reveal>
    </section>
  );
}

function ContactRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 border-t border-border py-5">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-smoke-gradient text-ink">{icon}</div>
      <div><p className="eyebrow">{label}</p><div className="mt-1 text-sm">{children}</div></div>
    </div>
  );
}

export function Contact({ defaultProduct }: { defaultProduct?: string }) {
  return (
    <section id="enquiry" className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <SectionHead eyebrow="Contact Us" title="Request a quote." intro="Share your requirements and our business team will respond with pricing, specifications and lead times." />
        <div className="mt-10">
          <ContactRow icon={<Mail className="h-4 w-4" />} label="Email"><a href={contact.emailHref} className="hover:underline">{contact.email}</a></ContactRow>
          <ContactRow icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp"><a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">Chat with our team</a></ContactRow>
          <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone">{contact.phone}</ContactRow>
          <ContactRow icon={<MapPin className="h-4 w-4" />} label="Address">{contact.address}</ContactRow>
        </div>
      </div>
      <Reveal><EnquiryForm defaultProduct={defaultProduct} /></Reveal>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-smoke-gradient pt-40 pb-20">
      <Particles />
      <div className="relative mx-auto max-w-7xl px-6">
        <p className="eyebrow text-ink">{eyebrow}</p>
        <SplitHeadline text={title} className="mt-4 max-w-4xl text-5xl leading-[1.02] text-ink sm:text-7xl" />
        {intro && <p className="mt-6 max-w-xl text-ink/75">{intro}</p>}
      </div>
    </section>
  );
}
