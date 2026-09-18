import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPostBySlug, getJournalPosts } from "@/content/repository";

export async function generateStaticParams() {
  const posts = await getJournalPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getJournalPostBySlug((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function JournalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getJournalPostBySlug((await params).slug);
  if (!post) notFound();
  return (
    <article className="article-page">
      <header className="article-header section-shell">
        <Link className="mono back-link" href="/journal">Journal</Link>
        <p className="eyebrow">{post.eyebrow}</p>
        <h1>{post.title}</h1>
        <div className="article-meta mono"><time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}</time><span>{post.readTime}</span></div>
      </header>
      <figure className="article-image image-grade"><Image src={post.image.src} alt={post.image.alt} fill priority sizes="100vw" style={{ objectPosition: post.image.position ?? "center" }} /><figcaption className="mono">{post.image.credit}</figcaption></figure>
      <div className="article-body section-shell">{post.body.map((paragraph, index) => index === 0 ? <p className="article-lead" key={paragraph}>{paragraph}</p> : <p key={paragraph}>{paragraph}</p>)}</div>
    </article>
  );
}
