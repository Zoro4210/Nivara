import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy", description: "NIVĀRA demonstration privacy notice." };

export default function PrivacyPage() {
  return (
    <article className="legal-page section-shell">
      <p className="eyebrow">Demonstration notice</p>
      <h1>Privacy</h1>
      <p>This website is a design demonstration for a temporary brand identity. The private-viewing form performs validation only in your browser and does not transmit, save or share personal information.</p>
      <h2>Production requirements</h2>
      <p>Before launch, this notice must be replaced with reviewed legal copy covering the final analytics, hosting, form processing, CRM, cookies and third-party services used by the completed site.</p>
      <h2>Imagery</h2>
      <p>Concept imagery and illustrative stock photography are clearly identified in the project content and should not be interpreted as evidence of a completed development.</p>
    </article>
  );
}
