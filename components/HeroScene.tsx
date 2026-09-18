"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HeroScene() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=90%",
            scrub: 0.2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        })
          .to(".hero-image", { scale: 1.055, ease: "none", force3D: true }, 0)
          .to(".hero-shade", { opacity: 1, ease: "none" }, 0)
          .to(".hero-word--top", { xPercent: -13, yPercent: -22, ease: "none", force3D: true }, 0)
          .to(".hero-word--bottom", { xPercent: 12, yPercent: 28, ease: "none", force3D: true }, 0)
          .to(".hero-intro", { y: -40, opacity: 0, ease: "none", force3D: true }, 0)
          .to(".hero-reveal", { opacity: 1, y: 0, ease: "none", force3D: true }, 0.3);
      });
      return () => media.revert();
    }, root);
    return () => context.revert();
  }, []);

  return (
    <section ref={root} className="hero-scene" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/generated/nivara-hero.png"
        alt="Conceptual residential building with planted curved balconies in warm Mumbai light"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-shade" />
      <div className="hero-topline mono">
        <span>19.0178° N<br />72.8478° E</span>
        <span>Mumbai · India</span>
        <span>Est. 2026</span>
      </div>
      <h1 id="hero-title" className="hero-word hero-word--top">NIVĀ</h1>
      <h1 className="hero-word hero-word--bottom" aria-hidden="true">RA</h1>
      <div className="hero-intro">
        <p>Considered residences<br />across India.</p>
      </div>
      <div className="hero-reveal">
        <span className="eyebrow eyebrow--light">A quieter idea of luxury</span>
        <p>Shaped by landscape, light and the way people truly live.</p>
      </div>
      <div className="concept-label mono">Concept imagery</div>
    </section>
  );
}
