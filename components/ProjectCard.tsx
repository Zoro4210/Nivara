import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const image = project.cardImage ?? project.heroImage;

  return (
    <Link className="project-card" href={`/projects/${project.slug}`}>
      <div className="project-card__image image-grade">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 800px) 100vw, 50vw"
          style={{ objectPosition: image.position ?? "center" }}
        />
        <span className="project-card__number mono">0{index + 1}</span>
      </div>
      <div className="project-card__meta">
        <h3>{project.name}</h3>
        <span>{project.city}</span>
        <span className="mono">{project.status}</span>
      </div>
    </Link>
  );
}
