export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  displayName: string;
  description: string;
  websiteUrl: string;
  email: string;
  phone: string;
  offices: Array<{ city: string; address: string }>;
  navigation: NavigationItem[];
  socials: Array<{ label: string; href: string }>;
}

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  credit?: string;
  position?: string;
}

export interface Project {
  slug: string;
  name: string;
  city: string;
  region: string;
  coordinates: string;
  year: string;
  status: "Concept" | "In development" | "Completed";
  type: string;
  tagline: string;
  summary: string;
  narrative: string[];
  heroImage: ProjectImage;
  cardImage?: ProjectImage;
  gallery: ProjectImage[];
  facts: ProjectFact[];
  amenities: string[];
  tone: "sand" | "olive" | "terracotta" | "blue";
}

export interface JournalPost {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: ProjectImage;
  body: string[];
}

export interface InquiryFormValues {
  name: string;
  email: string;
  phone: string;
  project: string;
  preferredDate: string;
  message: string;
}
