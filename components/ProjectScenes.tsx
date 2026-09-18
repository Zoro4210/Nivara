"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import type { Project } from "@/content/types";

gsap.registerPlugin(ScrollTrigger);

export function ProjectScenes({ projects }: { projects: Project[] }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".project-scene").forEach((scene) => {
          const image = scene.querySelector(".project-scene__image");
          const content = scene.querySelector(".project-scene__content");
          gsap.timeline({
            scrollTrigger: {
              trigger: scene,
              start: "top top",
              end: "+=65%",
              scrub: 0.2,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              fastScrollEnd: true,
            },
          })
            .fromTo(image, { scale: 1.055 }, { scale: 1, ease: "none", force3D: true }, 0)
            .fromTo(content, { y: 48, opacity: 0.62 }, { y: -18, opacity: 1, ease: "none", force3D: true }, 0);
        });
      });
      return () => media.revert();
    }, root);
    return () => context.revert();
  }, []);

  return (
    <div ref={root} className="project-scenes">
      {projects.map((project, index) => (
        <article className={`project-scene project-scene--${project.tone}`} key={project.slug}>
          <Image
            className="project-scene__image"
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            sizes="100vw"
            style={{ objectPosition: project.heroImage.position ?? "center" }}
          />
          <div className="project-scene__shade" />
          <div className="project-scene__top mono">
            <span>0{index + 1} / 04</span>
            <span>{project.coordinates}</span>
            <span>{project.year}</span>
          </div>
          <div className="project-scene__content">
            <p className="eyebrow eyebrow--light">{project.city} · {project.type}</p>
            <h2>{project.name}</h2>
            <p>{project.tagline}</p>
            <Link href={`/projects/${project.slug}`}>Discover the residence</Link>
          </div>
          <span className="project-scene__status mono">{project.status}</span>
          {project.heroImage.credit?.includes("Concept") && <span className="concept-label mono">Concept imagery</span>}
        </article>
      ))}
    </div>
  );
}
