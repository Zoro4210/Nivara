import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getJournalPosts } from "@/content/repository";

export const metadata: Metadata = { title: "Journal", description: "Notes on architecture, climate, material and living from NIVĀRA." };

export default async function JournalPage() {
  const posts = await getJournalPosts();
  return (
    <>
      <PageHero eyebrow="Ideas · Field notes" title="A closer look at how places are made." copy="Notes from our design tables, material libraries and landscapes across India." />
      <section className="journal-list section-shell">
        {posts.map((post, index) => (
          <Link className={`journal-list__item journal-list__item--${index + 1}`} href={`/journal/${post.slug}`} key={post.slug}>
            <div className="journal-list__image image-grade"><Image src={post.image.src} alt={post.image.alt} fill sizes="(max-width: 800px) 100vw, 55vw" style={{ objectPosition: post.image.position ?? "center" }} /></div>
            <div><p className="eyebrow">{post.eyebrow}</p><h2>{post.title}</h2><p>{post.excerpt}</p><span className="mono">{post.readTime} · Read</span></div>
          </Link>
        ))}
      </section>
    </>
  );
}
