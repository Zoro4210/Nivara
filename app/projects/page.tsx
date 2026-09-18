import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectIndexClient } from "@/components/ProjectIndexClient";
import { getProjects } from "@/content/repository";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore NIVĀRA residences across Mumbai, Goa, Bengaluru and Kasauli.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <>
      <PageHero eyebrow="Portfolio · India" title="Places with a point of view." copy="Four distinct responses to city, coast, garden and mountain—each shaped from the conditions of its place." />
      <section className="project-listing section-shell">
        <ProjectIndexClient projects={projects} />
      </section>
    </>
  );
}
