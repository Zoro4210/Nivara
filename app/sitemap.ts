import type { MetadataRoute } from "next";
import { getJournalPosts, getProjects } from "@/content/repository";
import { siteConfig } from "@/content/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getProjects(), getJournalPosts()]);
  const staticPages = ["", "/projects", "/about", "/journal", "/contact", "/privacy"];
  return [
    ...staticPages.map((path) => ({ url: `${siteConfig.websiteUrl}${path}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${siteConfig.websiteUrl}/projects/${project.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${siteConfig.websiteUrl}/journal/${post.slug}`, lastModified: new Date(post.date) })),
  ];
}
