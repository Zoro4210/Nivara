import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/content/repository";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = await getProjectBySlug((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.summary, openGraph: { images: [project.heroImage.src] } };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const [project, projects] = await Promise.all([getProjectBySlug(slug), getProjects()]);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const projectData = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.name,
    description: project.summary,
    address: { "@type": "PostalAddress", addressLocality: project.city, addressRegion: project.region, addressCountry: "IN" },
  };

  return (
    <article className="project-detail">
      <header className="project-detail__hero">
        <Image src={project.heroImage.src} alt={project.heroImage.alt} fill priority sizes="100vw" style={{ objectPosition: project.heroImage.position ?? "center" }} />
        <div className="project-detail__shade" />
        <div className="project-detail__meta mono"><span>{project.coordinates}</span><span>{project.year}</span><span>{project.status}</span></div>
        <div className="project-detail__title"><p className="eyebrow eyebrow--light">{project.city} · {project.type}</p><h1>{project.name}</h1><p>{project.tagline}</p></div>
        {project.heroImage.credit?.includes("Concept") && <span className="concept-label mono">Concept imagery</span>}
      </header>

      <section className="project-intro section-shell">
        <p className="eyebrow">The residence</p>
        <h2>{project.summary}</h2>
        <div className="project-narrative">{project.narrative.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>

      <section className="project-facts section-shell">
        {project.facts.map((fact) => <div key={fact.label}><span className="mono">{fact.label}</span><strong>{fact.value}</strong></div>)}
      </section>

      <section className="project-gallery section-shell">
        {project.gallery.map((image, index) => (
          <figure className={`project-gallery__item project-gallery__item--${index + 1}`} key={`${image.src}-${index}`}>
            <div className="image-grade"><Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "100vw" : "70vw"} style={{ objectPosition: image.position ?? "center" }} /></div>
            <figcaption className="mono">{image.credit}</figcaption>
          </figure>
        ))}
      </section>

      <section className="amenities section-shell">
        <div><p className="eyebrow">Everyday rituals</p><h2>Made for living,<br />not just arrival.</h2></div>
        <ol>{project.amenities.map((amenity, index) => <li key={amenity}><span className="mono">0{index + 1}</span>{amenity}</li>)}</ol>
      </section>

      <section className="project-cta">
        <p className="eyebrow eyebrow--light">Continue the journey</p>
        <p>Next residence</p>
        <Link href={`/projects/${nextProject.slug}`}>{nextProject.name}</Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectData) }} />
    </article>
  );
}
