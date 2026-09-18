import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroScene } from "@/components/HeroScene";
import { InquiryForm } from "@/components/InquiryForm";
import { JournalSplitCards } from "@/components/JournalSplitCards";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectScenes } from "@/components/ProjectScenes";
import { Reveal } from "@/components/Reveal";
import { getJournalPosts, getProjects } from "@/content/repository";

export const metadata: Metadata = {
  title: "Considered residences across India",
  description: "Explore NIVĀRA's collection of thoughtful residences in Mumbai, Goa, Bengaluru and Kasauli.",
};

export default async function HomePage() {
  const [projects, posts] = await Promise.all([getProjects(), getJournalPosts()]);

  return (
    <>
      <HeroScene />

      <section className="manifesto section-shell">
        <Reveal className="manifesto-grid">
          <div className="manifesto-visual">
            <div className="manifesto-visual__image image-grade">
              <Image
                src="/images/generated/manifesto-translucent-building.png"
                alt="Conceptual limestone residence revealed behind translucent fluted glass"
                fill
                sizes="(max-width: 900px) 100vw, 52vw"
              />
              <div className="manifesto-visual__fade" />
              <span className="concept-label mono">Concept imagery</span>
            </div>
            <h2>MADE<br />OF PLACE.</h2>
          </div>
          <div className="manifesto-copy">
            <p className="manifesto-lead">We develop homes that feel inevitable to their setting—never simply placed upon it.</p>
            <figure className="manifesto-plan">
              <Image
                src="/images/generated/aster-plan-study.svg"
                alt="Conceptual Aster House apartment plan study"
                fill
                sizes="(max-width: 900px) 88vw, 430px"
              />
              <figcaption className="mono">Residence study · sample plan</figcaption>
            </figure>
            <div className="two-column-copy">
              <p>India asks architecture to respond to heat, monsoon, density, craft and remarkable landscape. We begin there.</p>
              <p>Every residence balances private retreat with a meaningful relationship to light, air and community.</p>
            </div>
            <Link className="text-link" href="/about">Our approach</Link>
          </div>
        </Reveal>
      </section>

      <section className="scene-intro section-shell">
        <h2>Four landscapes.<br />Four ways to live.</h2>
      </section>

      <ProjectScenes projects={projects} />

      <section className="project-index section-shell">
        <div className="section-heading-row">
          <h2>Current<br />projects</h2>
          <p>A portfolio in progress: urban residences, coastal villas, garden apartments and mountain homes.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </div>
        <Link className="button button--outline" href="/projects">View all projects</Link>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-media image-grade">
          <Image src="/images/generated/casa-neru.png" alt="Conceptual Goa courtyard villa surrounded by tropical planting" fill sizes="(max-width: 800px) 100vw, 50vw" />
          <span className="concept-label mono">Concept imagery</span>
        </div>
        <div className="philosophy-content">
          <p className="eyebrow">Built around living</p>
          <h2>Less spectacle.<br />More substance.</h2>
          <p>We measure luxury in natural light, generous thresholds, intelligent comfort and materials that grow richer with time.</p>
          <div className="stats-grid">
            <div><strong>04</strong><span>Distinct landscapes</span></div>
            <div><strong>61%</strong><span>Average open landscape</span></div>
            <div><strong>140</strong><span>Residences in development</span></div>
            <div><strong>01</strong><span>Long-term point of view</span></div>
          </div>
        </div>
      </section>

      <section className="about-preview section-shell">
        <Reveal className="about-preview__grid">
          <h2>Development<br />as stewardship.</h2>
          <div>
            <p className="large-copy">NIVĀRA brings architects, landscape designers, craftspeople and operators around one table from the beginning.</p>
            <p>We make fewer decisions in isolation, and more decisions that hold their value over decades.</p>
            <Link className="text-link" href="/about">Meet NIVĀRA</Link>
          </div>
        </Reveal>
      </section>

      <JournalSplitCards posts={posts} />

      <section className="viewing-section section-shell" id="viewing">
        <div className="viewing-grid">
          <div>
            <h2>Find your<br />place in it.</h2>
            <p>Request a private conversation about one of our sample residences.</p>
          </div>
          <InquiryForm formId="home-inquiry" />
        </div>
      </section>
    </>
  );
}
