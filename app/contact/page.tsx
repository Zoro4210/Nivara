import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = { title: "Contact", description: "Contact NIVĀRA and request a private project viewing." };

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Begin a conversation." copy="Whether you are looking for a home or exploring a collaboration, our sample team would be glad to hear from you." />
      <section className="contact-grid section-shell">
        <div className="contact-details">
          <p className="eyebrow">Studios</p>
          {siteConfig.offices.map((office) => <div key={office.city}><h3>{office.city}</h3><p>{office.address}</p></div>)}
          <div><h3>Direct</h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a></div>
        </div>
        <div id="viewing"><p className="eyebrow">Private viewing</p><h2>Choose a project and preferred day.</h2><InquiryForm formId="contact-inquiry" /></div>
      </section>
    </>
  );
}
