import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About", description: "The principles, process and people behind NIVĀRA Developments." };

const principles = [
  ["01", "Begin with climate", "Orientation, shade, water and air movement shape the plan before an aesthetic language is chosen."],
  ["02", "Protect the particular", "Existing trees, views, craft and patterns of use are treated as assets—not obstacles."],
  ["03", "Design for time", "Materials must weather honestly, systems must be maintainable and spaces must adapt to changing lives."],
  ["04", "Make community tangible", "Shared spaces are placed in the path of daily life, not isolated as decorative amenities."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About NIVĀRA" title="Development as a form of stewardship." copy="We bring design, landscape, construction and long-term operations together to create places that become more valuable with time." />
      <section className="about-image image-grade">
        <Image src="/images/generated/nivara-hero.png" alt="Conceptual planted residential building at dusk" fill sizes="100vw" />
        <span className="concept-label mono">Concept imagery</span>
      </section>
      <section className="about-belief section-shell">
        <p className="eyebrow">What we believe</p>
        <h2>A home can be quiet and memorable. Modern and deeply local. Generous without excess.</h2>
      </section>
      <section className="principles section-shell">
        {principles.map(([number, title, copy]) => (
          <article key={number}><span className="mono">{number}</span><h3>{title}</h3><p>{copy}</p></article>
        ))}
      </section>
      <section className="process-section section-shell">
        <div><p className="eyebrow">One table, early</p><h2>A more connected process.</h2></div>
        <div className="process-copy"><p>Architects, landscape designers, engineers, craftspeople and operators join the project before the broad moves are fixed.</p><p>This makes sustainability, maintenance and lived experience part of the architecture—not additions at the end.</p></div>
      </section>
      <section className="leadership section-shell">
        <p className="eyebrow">Working identity</p>
        <div><h2>People behind the places.</h2><p>Leadership profiles will be added when the final NIVĀRA team and brand identity are supplied. The section is intentionally ready for portrait, role, biography and social links.</p></div>
      </section>
    </>
  );
}
