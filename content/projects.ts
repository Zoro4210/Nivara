import type { Project } from "./types";

const courtyardImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=82";
const mountainImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=82";
const interiorImage =
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=82";

export const projects: Project[] = [
  {
    slug: "aster-house",
    name: "Aster House",
    city: "Mumbai",
    region: "Maharashtra",
    coordinates: "19.0178° N, 72.8478° E",
    year: "2026",
    status: "Concept",
    type: "Private residences",
    tagline: "A vertical garden shaped by the Arabian Sea.",
    summary:
      "Generous shaded terraces, filtered light and a calm material palette bring the intimacy of a house to city living.",
    narrative: [
      "Aster House begins with one simple ambition: to make every home feel connected to air, landscape and the horizon. Its stepped terraces create deep shade while giving each residence a planted outdoor room.",
      "Limestone, bronze and warm timber weather gently against Mumbai's coastal light. Shared spaces are conceived as a sequence of quiet thresholds rather than a conventional lobby and clubhouse.",
    ],
    heroImage: {
      src: "/images/generated/nivara-hero.png",
      alt: "Conceptual warm modern residential building with planted curved balconies at sunset",
      credit: "Concept image generated for NIVĀRA",
      position: "58% center",
    },
    cardImage: {
      src: "/images/generated/aster-house-card-v2.png",
      alt: "Conceptual limestone and glass residence beneath mature woodland trees",
      credit: "Concept image generated for NIVĀRA",
      position: "center 52%",
    },
    gallery: [
      {
        src: "/images/generated/nivara-hero.png",
        alt: "Concept view of Aster House in warm evening light",
        credit: "Concept image generated for NIVĀRA",
      },
      {
        src: interiorImage,
        alt: "Warm minimal living room with natural stone and timber",
        credit: "Unsplash — illustrative stock image",
      },
    ],
    facts: [
      { label: "Residences", value: "42" },
      { label: "Home sizes", value: "2,800–5,200 sq ft" },
      { label: "Landscape", value: "2.4 acres" },
      { label: "Architecture", value: "NIVĀRA Studio" },
    ],
    amenities: ["Residents' salon", "Wellness floor", "Lap pool", "Private dining room", "Concierge", "EV-ready parking"],
    tone: "terracotta",
  },
  {
    slug: "casa-neru",
    name: "Casa Neru",
    city: "Goa",
    region: "Goa",
    coordinates: "15.4909° N, 73.8278° E",
    year: "2026",
    status: "Concept",
    type: "Coastal villas",
    tagline: "Courtyard homes tuned to shade, rain and sea air.",
    summary:
      "A collection of low, private villas where lime plaster, teak and garden courts frame a slower coastal rhythm.",
    narrative: [
      "Casa Neru is arranged around garden rooms and reflective pools. Broad roofs and deep verandas temper Goa's strong sun, while openings align to catch the monsoon breeze.",
      "The architecture draws from local climate intelligence without quoting a historic style. Materials are tactile, repairable and intended to become richer with age.",
    ],
    heroImage: {
      src: "/images/generated/casa-neru.png",
      alt: "Conceptual lime-plaster Goa villa opening onto a reflective courtyard pool",
      credit: "Concept image generated for NIVĀRA",
      position: "center 56%",
    },
    gallery: [
      {
        src: "/images/generated/casa-neru.png",
        alt: "Concept view of Casa Neru courtyard and pool",
        credit: "Concept image generated for NIVĀRA",
      },
      {
        src: courtyardImage,
        alt: "Contemporary home surrounded by mature planting",
        credit: "Unsplash — illustrative stock image",
      },
    ],
    facts: [
      { label: "Villas", value: "12" },
      { label: "Plots", value: "8,000–12,000 sq ft" },
      { label: "Private pools", value: "12" },
      { label: "Landscape", value: "Native coastal garden" },
    ],
    amenities: ["Private courtyard", "Pool pavilion", "House manager suite", "Community orchard", "Beach transfer", "Solar-ready roofs"],
    tone: "olive",
  },
  {
    slug: "courtyard-07",
    name: "Courtyard 07",
    city: "Bengaluru",
    region: "Karnataka",
    coordinates: "12.9716° N, 77.5946° E",
    year: "2025",
    status: "In development",
    type: "Garden apartments",
    tagline: "Seven garden courts, one connected neighbourhood.",
    summary:
      "Brick, stone and tree canopies turn a dense urban site into a layered community of shaded paths and homes.",
    narrative: [
      "Courtyard 07 replaces the singular residential tower with seven connected garden rooms. Each threshold moves through planting, shade and filtered daylight before arriving home.",
      "The landscape is infrastructure: it cools shared spaces, collects seasonal water and gives long-established trees the room to remain central to daily life.",
    ],
    heroImage: {
      src: courtyardImage,
      alt: "Contemporary house with dark framing and lush surrounding trees",
      credit: "Unsplash — illustrative stock image",
      position: "center",
    },
    gallery: [
      { src: courtyardImage, alt: "Green courtyard architecture", credit: "Unsplash — illustrative stock image" },
      { src: interiorImage, alt: "Calm natural-material interior", credit: "Unsplash — illustrative stock image" },
    ],
    facts: [
      { label: "Homes", value: "68" },
      { label: "Courtyards", value: "7" },
      { label: "Tree cover", value: "61%" },
      { label: "Completion", value: "Late 2027" },
    ],
    amenities: ["Courtyard library", "Garden studio", "Children's grove", "Guest suites", "Fitness room", "Rain garden"],
    tone: "sand",
  },
  {
    slug: "hima-house",
    name: "Hima House",
    city: "Kasauli",
    region: "Himachal Pradesh",
    coordinates: "30.9010° N, 76.9649° E",
    year: "2025",
    status: "Concept",
    type: "Mountain residences",
    tagline: "A quiet edge between cedar forest and open sky.",
    summary:
      "Stone plinths and timber rooms settle into the hillside, framing long views while keeping the forest close.",
    narrative: [
      "Hima House follows the contours rather than flattening them. Small clusters of residences step down the slope, preserving view corridors and the character of the cedar landscape.",
      "Heavy local stone anchors each home while lighter timber rooms open to distant ridgelines. Covered passages make arrival a slow transition from forest to shelter.",
    ],
    heroImage: {
      src: mountainImage,
      alt: "Modern timber and glass house viewed in soft mountain light",
      credit: "Unsplash — illustrative stock image",
      position: "center",
    },
    gallery: [
      { src: mountainImage, alt: "Contemporary mountain residence", credit: "Unsplash — illustrative stock image" },
      { src: interiorImage, alt: "Warm timber interior", credit: "Unsplash — illustrative stock image" },
    ],
    facts: [
      { label: "Residences", value: "18" },
      { label: "Elevation", value: "1,800 m" },
      { label: "Forest retained", value: "84%" },
      { label: "Material", value: "Stone + timber" },
    ],
    amenities: ["Forest room", "Fire terrace", "Trail network", "Housekeeping", "Equipment store", "Kitchen garden"],
    tone: "blue",
  },
];
