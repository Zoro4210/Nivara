import { journalPosts } from "./journal";
import { projects } from "./projects";

export async function getProjects() {
  return projects;
}

export async function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getJournalPosts() {
  return journalPosts;
}

export async function getJournalPostBySlug(slug: string) {
  return journalPosts.find((post) => post.slug === slug) ?? null;
}
