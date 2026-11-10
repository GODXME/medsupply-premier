import { useState, type FormEvent } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { products } from "@/lib/products";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  full_name: z.string().trim().min(1, "Required").max(120),
  company: z.string().trim().min(1, "Required").max(160),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  country: z.string().trim().max(80).optional(),
  product: z.string().max(120).optional(),
  quantity: z.string().trim().max(80).optional(),
  message: z.string().trim().max(2000).optional(),
});

const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-smoke-deep focus:ring-2 focus:ring-smoke/40";

export function EnquiryForm({ defaultProduct }: { defaultProduct?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setState("sending");
    const { error } = await supabase.from("enquiries").insert(parsed.data as never);
    setState(error ? "error" : "done");
  }

  if (state === "done")
    return (
      <div className="rounded-3xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-smoke-deep" />
        <h3 className="mt-4 text-3xl">Thank you — enquiry received.</h3>
        <p className="mt-2 text-sm text-muted-foreground">Our business team will get back to you.</p>
      </div>
    );

  const F = ({ name, label, type = "text", req }: { name: string; label: string; type?: string; req?: boolean }) => (
    // called as a function (not a component) so inputs keep their values across renders
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}{req && " *"}</span>
      <input name={name} type={type} className={field} required={req} />
      {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
    </label>
  );

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 sm:p-8" noValidate>
      {F({name: "full_name", label: "Full Name", req: true })}
      <F name="company" label="Company / Organization" req />
      {F({name: "email", label: "Business Email", type: "email", req: true })}
      {F({name: "phone", label: "Contact Number", type: "tel", })}
      {F({name: "country", label: "Country", })}
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Product Selection</span>
        <select name="product" defaultValue={defaultProduct ?? ""} className={field}>
          <option value="">Select a product</option>
          {products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
          <option value="Multiple products">Multiple products</option>
        </select>
      </label>
      <div className="sm:col-span-2">{F({name: "quantity", label: "Required Quantity", })}</div>
      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</span>
        <textarea name="message" rows={4} className={field} maxLength={2000} />
      </label>
      {state === "error" && <p className="text-sm text-destructive sm:col-span-2">Something went wrong. Please try again.</p>}
      <button disabled={state === "sending"} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-60 sm:col-span-2 sm:justify-self-start">
        {state === "sending" && <Loader2 className="h-4 w-4 animate-spin" />} Submit Enquiry
      </button>
    </form>
  );
}
