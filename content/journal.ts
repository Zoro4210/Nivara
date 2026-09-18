import type { JournalPost } from "./types";

export const journalPosts: JournalPost[] = [
  {
    slug: "architecture-that-breathes",
    title: "Architecture that breathes",
    eyebrow: "Design notes · Climate",
    excerpt: "Why shade, cross-ventilation and planted thresholds are the first luxuries we design.",
    date: "2026-08-12",
    readTime: "6 min",
    image: {
      src: "/images/generated/casa-neru.png",
      alt: "Lime-plaster villa opening to a tropical courtyard",
      credit: "Concept image generated for NIVĀRA",
      position: "center 55%",
    },
    body: [
      "Comfort begins before a cooling system switches on. It begins with orientation, shade, air movement and the way a building meets its landscape.",
      "Across India, climate is never background information. It determines the depth of a veranda, the position of an opening and the material that feels right underfoot in August.",
      "We use simulation and local craft knowledge together. The result is not a signature style, but a family of places that feel naturally settled in their conditions.",
    ],
  },
  {
    slug: "the-new-indian-courtyard",
    title: "The new Indian courtyard",
    eyebrow: "Field notes · Community",
    excerpt: "An old spatial idea is becoming newly relevant to dense, contemporary living.",
    date: "2026-06-24",
    readTime: "5 min",
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=82",
      alt: "Contemporary garden residence",
      credit: "Unsplash — illustrative stock image",
    },
    body: [
      "The courtyard is both room and climate device. It gathers people, creates shade and brings daylight into the centre of a plan.",
      "In contemporary housing it can also soften density, giving neighbours a shared address without sacrificing the privacy of home.",
      "Our work explores courtyards at several scales: private garden rooms, small clusters and a larger landscape that belongs to the whole community.",
    ],
  },
  {
    slug: "materials-that-age-well",
    title: "Materials that age well",
    eyebrow: "Material library · Craft",
    excerpt: "Limestone, lime plaster, timber and bronze become more expressive with time—not less.",
    date: "2026-04-08",
    readTime: "4 min",
    image: {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=82",
      alt: "Warm natural materials in a contemporary interior",
      credit: "Unsplash — illustrative stock image",
    },
    body: [
      "A home should not feel most complete on the day it is photographed. Its materials should gather depth from touch, weather and daily use.",
      "We prefer finishes that can be repaired and renewed. Their small variations make large buildings feel human and give each residence a particular character.",
      "Material restraint also makes maintenance clearer: fewer systems, well understood, detailed to last.",
    ],
  },
];
