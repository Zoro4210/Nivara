"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { JournalPost } from "@/content/types";

gsap.registerPlugin(ScrollTrigger);

const cardTones = ["journal-flip--limestone", "journal-flip--olive", "journal-flip--terracotta"];
const cardOffsets = [-16, 20, -8];
const cardAngles = [-1.4, 1.2, -0.8];

function useStaticLayout() {
  const [staticLayout, setStaticLayout] = useState(false);

  useEffect(() => {
    const compactQuery = window.matchMedia("(max-width: 900px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setStaticLayout(compactQuery.matches || motionQuery.matches);
    update();
    compactQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);
    return () => {
      compactQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return staticLayout;
}

function StaticJournalCard({ post, index }: { post: JournalPost; index: number }) {
  return (
    <Link className={`journal-static-card ${cardTones[index]}`} href={`/journal/${post.slug}`}>
      <div className="journal-static-card__image image-grade">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes="100vw"
          style={{ objectPosition: post.image.position ?? "center" }}
        />
      </div>
      <div className="journal-static-card__content">
        <div className="journal-flip__meta mono"><span>0{index + 1}</span><span>{post.readTime}</span></div>
        <p className="eyebrow">{post.eyebrow}</p>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="journal-flip__read mono">Read story</span>
      </div>
    </Link>
  );
}

function FlipJournalCard({
  post,
  index,
}: {
  post: JournalPost;
  index: number;
}) {
  return (
    <article className="journal-flip">
      <Link
        className="journal-flip__link"
        href={`/journal/${post.slug}`}
        aria-label={`${post.title}. ${post.readTime} read.`}
      >
        <div className="journal-flip__inner">
          <div className="journal-flip__face journal-flip__front" aria-hidden="true">
            <Image
              src={post.image.src}
              alt=""
              fill
              sizes="33vw"
              style={{ objectPosition: post.image.position ?? "center" }}
            />
            <div className="journal-flip__front-shade" />
            <span className="journal-flip__number mono">0{index + 1}</span>
          </div>

          <div className={`journal-flip__face journal-flip__back ${cardTones[index]}`}>
            <div className="journal-flip__meta mono"><span>0{index + 1}</span><span>{post.readTime}</span></div>
            <p className="eyebrow">{post.eyebrow}</p>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <span className="journal-flip__read mono">Read story</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function JournalSplitCards({ posts }: { posts: JournalPost[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const staticLayout = useStaticLayout();

  useLayoutEffect(() => {
    if (!sectionRef.current || staticLayout) return;

    const context = gsap.context(() => {
      const stage = sectionRef.current?.querySelector<HTMLElement>(".journal-split__stage");
      const cards = gsap.utils.toArray<HTMLElement>(".journal-flip");
      if (!stage || cards.length === 0) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.18,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      timeline.to(stage, { gap: 20, scale: 0.94, duration: 0.18, ease: "none", force3D: true }, 0);
      cards.forEach((card, index) => {
        const inner = card.querySelector<HTMLElement>(".journal-flip__inner");
        const front = card.querySelector<HTMLElement>(".journal-flip__front");
        const back = card.querySelector<HTMLElement>(".journal-flip__back");
        const flipStart = 0.12 + index * 0.16;
        timeline.to(card, { y: cardOffsets[index], rotationZ: cardAngles[index], duration: 0.18, ease: "none", force3D: true }, 0);
        if (inner && front && back) {
          timeline
            .to(inner, { scaleX: 0.025, duration: 0.18, ease: "power1.in", force3D: true }, flipStart)
            .set(front, { opacity: 0 }, flipStart + 0.18)
            .set(back, { opacity: 1 }, flipStart + 0.18)
            .to(inner, { scaleX: 1, duration: 0.18, ease: "power1.out", force3D: true }, flipStart + 0.18);
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, [staticLayout]);

  return (
    <section ref={sectionRef} className={`journal-split ${staticLayout ? "journal-split--static" : ""}`}>
      <div className="journal-split__sticky section-shell">
        <div className="journal-split__heading">
          <div>
            <p className="eyebrow">Journal</p>
            <p className="journal-split__prompt">Three perspectives on how we build.</p>
          </div>
          <Link className="mono" href="/journal">View all</Link>
        </div>

        {staticLayout ? (
          <div className="journal-split__fallback">
            {posts.slice(0, 3).map((post, index) => (
              <StaticJournalCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="journal-split__stage">
            {posts.slice(0, 3).map((post, index) => (
              <FlipJournalCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
