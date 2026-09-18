import Link from "next/link";
import { siteConfig } from "@/content/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="eyebrow eyebrow--light">NIVĀRA Developments</p>
        <p className="footer-statement">Places that<br />belong.</p>
      </div>
      <div className="footer-grid">
        <div>
          <p className="footer-label">Explore</p>
          {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <p className="footer-label">Visit</p>
          {siteConfig.offices.map((office) => (
            <p key={office.city}><strong>{office.city}</strong><br />{office.address}</p>
          ))}
        </div>
        <div>
          <p className="footer-label">Follow</p>
          {siteConfig.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}
        </div>
        <div>
          <p className="footer-label">Talk to us</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
        </div>
      </div>
      <div className="footer-bottom mono">
        <span>© {new Date().getFullYear()} NIVĀRA</span>
        <span>Temporary demonstration identity</span>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
}
