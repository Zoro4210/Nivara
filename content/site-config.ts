import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "NIVARA Developments",
  displayName: "NIVĀRA",
  description:
    "Considered residences across India, shaped by landscape, light and a quieter idea of luxury.",
  websiteUrl: "https://nivara.example",
  email: "hello@nivara.example",
  phone: "+91 22 4000 2026",
  offices: [
    { city: "Mumbai", address: "Worli Sea Face, Mumbai 400030" },
    { city: "Bengaluru", address: "Lavelle Road, Bengaluru 560001" },
  ],
  navigation: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
