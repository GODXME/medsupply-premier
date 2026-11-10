import cotton from "@/assets/p-cotton-wool.jpg";
import crepe from "@/assets/p-crepe-bandage.jpg";
import elastic from "@/assets/p-elastic-bandage.jpg";
import zinc from "@/assets/p-zinc-plaster.jpg";
import pants from "@/assets/p-incontinence.jpg";
import mask from "@/assets/p-face-mask.jpg";
import cap from "@/assets/p-bouffant.jpg";
import gloves from "@/assets/p-gloves.jpg";

export type Product = {
  slug: string;
  no: string;
  name: string;
  category: string;
  image: string;
  short: string;
  features: string[];
  specs: { label: string; value: string }[];
  packaging: string;
};

// Values in [brackets] are editable placeholders — replace with company-verified details.
export const products: Product[] = [
  {
    slug: "absorbent-cotton-wool", no: "01", name: "Absorbent Cotton Wool", category: "Wound Care",
    image: cotton,
    short: "High-quality absorbent cotton wool designed for medical, wound-care, hygiene and healthcare applications.",
    features: ["Soft, uniform fibre texture", "Roll and pleat formats", "Hospital & retail packs"],
    specs: [
      { label: "Available weights", value: "[e.g. 50 g / 100 g / 200 g / 500 g]" },
      { label: "Format", value: "[Roll / Pleated / Balls]" },
      { label: "Material", value: "[Material composition]" },
    ],
    packaging: "[Packaging options — individual wrap, carton quantity]",
  },
  {
    slug: "cotton-crepe-bandage", no: "02", name: "Cotton Crepe Bandage", category: "Support & Dressing",
    image: crepe,
    short: "Flexible cotton crepe bandage designed to provide support, compression and secure dressing applications.",
    features: ["Crinkled woven fabric", "Conforms to body contours", "Multiple widths"],
    specs: [
      { label: "Widths", value: "[e.g. 5 cm / 7.5 cm / 10 cm / 15 cm]" },
      { label: "Length", value: "[Stretched length]" },
      { label: "Material", value: "[Material specification]" },
    ],
    packaging: "[Individually wrapped / box quantity]",
  },
  {
    slug: "elastic-bandage", no: "03", name: "Cotton/Rubber Elastic Bandage", category: "Compression",
    image: elastic,
    short: "Elastic support bandage designed for compression, support and stabilization applications.",
    features: ["Elastic woven construction", "Reusable support", "Clip or self-fastening"],
    specs: [
      { label: "Sizes", value: "[Widths × lengths]" },
      { label: "Composition", value: "[Cotton % / Rubber %]" },
      { label: "Fastening", value: "[Clips / Velcro]" },
    ],
    packaging: "[Packaging details]",
  },
  {
    slug: "zinc-oxide-plaster", no: "04", name: "Zinc Oxide Adhesive Plaster", category: "Fixation",
    image: zinc,
    short: "Adhesive plaster designed for securing dressings and providing reliable medical fixation.",
    features: ["Spool roll presentation", "Tear-by-hand backing", "Range of widths"],
    specs: [
      { label: "Widths", value: "[e.g. 1.25 cm / 2.5 cm / 5 cm / 7.5 cm]" },
      { label: "Lengths", value: "[e.g. 5 m / 9.1 m]" },
      { label: "Backing / adhesive", value: "[Backing material / adhesive type]" },
    ],
    packaging: "[Spool with cover / tin / box quantity]",
  },
  {
    slug: "adult-incontinence-pants", no: "05", name: "Adult Incontinence Pants", category: "Patient Care",
    image: pants,
    short: "Disposable adult incontinence pants designed to support comfort, discretion and everyday personal care.",
    features: ["Soft non-woven outer", "Elastic waistband", "Pull-up design"],
    specs: [
      { label: "Sizes", value: "[M / L / XL]" },
      { label: "Absorbency", value: "[Absorbency specification]" },
      { label: "Materials", value: "[Top sheet / core / back sheet]" },
    ],
    packaging: "[Pieces per pack / packs per carton]",
  },
  {
    slug: "disposable-face-mask", no: "06", name: "Disposable Face Mask", category: "Protection",
    image: mask,
    short: "Disposable protective face masks designed for hygiene and everyday healthcare environments.",
    features: ["Pleated 3D structure", "Soft ear loops", "Nose-fit strip"],
    specs: [
      { label: "Layers", value: "[e.g. 3-ply]" },
      { label: "Material", value: "[Layer materials]" },
      { label: "Size", value: "[Dimensions]" },
    ],
    packaging: "[Masks per box / boxes per carton]",
  },
  {
    slug: "bouffant-cap", no: "07", name: "Disposable Head Cover (Bouffant Cap)", category: "Protection",
    image: cap,
    short: "Disposable bouffant caps designed to support hygiene requirements in medical and controlled environments.",
    features: ["Pleated construction", "Elastic opening", "Lightweight non-woven"],
    specs: [
      { label: "Sizes", value: "[e.g. 18\" / 21\" / 24\"]" },
      { label: "Colours", value: "[White / Blue / Green]" },
      { label: "Material", value: "[Material & GSM]" },
    ],
    packaging: "[Pieces per pack / carton]",
  },
  {
    slug: "examination-gloves", no: "08", name: "Non-Sterile Examination Gloves", category: "Protection",
    image: gloves,
    short: "Non-sterile examination gloves designed for routine examination, healthcare and general protective applications.",
    features: ["Ambidextrous fit", "Beaded cuff", "Powder-free or powdered"],
    specs: [
      { label: "Materials", value: "[Latex / Nitrile / Vinyl]" },
      { label: "Sizes", value: "[XS / S / M / L / XL]" },
      { label: "Powder", value: "[Powder-free / Powdered]" },
    ],
    packaging: "[Gloves per box / boxes per carton]",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

// Replace with real company contact details.
export const contact = {
  email: "[enquiries@yourcompany.com]",
  emailHref: "mailto:enquiries@example.com",
  phone: "[+91 00000 00000]",
  whatsappHref: "https://wa.me/910000000000",
  address: "[Company address, City, Country]",
};
