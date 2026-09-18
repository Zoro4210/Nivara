"use client";

import { useState } from "react";
import type { Project } from "@/content/types";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", "Private residences", "Coastal villas", "Garden apartments", "Mountain residences"];

export function ProjectIndexClient({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.type === active);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects by type">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={active === filter ? "is-active" : ""}
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-index-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} index={projects.indexOf(project)} />
        ))}
      </div>
    </>
  );
}
