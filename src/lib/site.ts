/**
 * Single source of truth for SDY Interior's business facts.
 * Everything here comes from the visiting card / blueprint. Fields marked
 * TODO must be confirmed by SDY before launch (see README "Before launch").
 */
export const site = {
  name: "SDY Interior",
  legalName: "SDY Interior",
  tagline: "Design Beyond Walls",
  url: "https://sdyinterior.com",
  domain: "sdyinterior.com",
  description:
    "SDY Interior is a Mumbai home interior design studio led by Interior Designer Dharamraj Yadav, creating thoughtfully planned full-home, kitchen, bedroom, living room and storage interiors.",
  designer: {
    name: "Dharamraj Yadav",
    displayName: "ID. Dharamraj Yadav",
    role: "Interior Designer",
  },
  phones: [
    { label: "+91 91679 55625", tel: "+919167955625" },
    { label: "+91 83690 03578", tel: "+918369003578" },
  ],
  // TODO: confirm which number is WhatsApp-enabled (blueprint, "Contact and conversion").
  whatsapp: "919167955625",
  whatsappMessage: "Hello SDY Interior, I would like to discuss my home interior project.",
  // TODO: add email, public studio address and opening hours once supplied. Do not invent them.
  email: null as string | null,
  address: null as null | { street: string; locality: string; region: string; postalCode: string },
  hours: null as string | null,
  primaryCity: "Mumbai",
  region: "Maharashtra",
  country: "IN",
  // TODO: add official social profile URLs (Instagram, Google Business Profile, etc.) for sameAs.
  sameAs: [] as string[],
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const mainNav: NavItem[] = [
  { label: "About", href: "/about/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Full Home Interiors", href: "/services/full-home-interiors/" },
      { label: "Residential Interiors", href: "/services/residential-interiors/" },
      { label: "Modular Kitchen", href: "/services/modular-kitchen/" },
      { label: "Bedroom Interiors", href: "/services/bedroom-interiors/" },
      { label: "Living Room Interiors", href: "/services/living-room-interiors/" },
      { label: "Wardrobes & Storage", href: "/services/wardrobes-storage/" },
    ],
  },
  { label: "Projects", href: "/projects/" },
  { label: "Process", href: "/our-process/" },
  { label: "Cost Guide", href: "/interior-design-cost/" },
  { label: "Journal", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Studio",
    links: [
      { label: "About SDY", href: "/about/" },
      { label: "Our Process", href: "/our-process/" },
      { label: "Projects", href: "/projects/" },
      { label: "Reviews", href: "/reviews/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Services",
    links: mainNav[1].children!,
  },
  {
    title: "Guides",
    links: [
      { label: "Interior Design Cost", href: "/interior-design-cost/" },
      { label: "Design Styles", href: "/interior-design-styles/" },
      { label: "Materials & Finishes", href: "/materials-finishes/" },
      { label: "Journal", href: "/blog/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Interior Designer in Mumbai", href: "/locations/mumbai/" },
    ],
  },
];
