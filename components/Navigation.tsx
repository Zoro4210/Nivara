"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site-config";

function openViewingDialog() {
  const dialog = document.getElementById("viewing-dialog") as HTMLDialogElement | null;
  dialog?.showModal();
}

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => setScrolled(window.scrollY > 48);
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const solid = pathname !== "/" || scrolled || menuOpen;

  return (
    <header className={`site-header ${solid ? "site-header--solid" : ""}`}>
      <Link className="brand-mark" href="/" aria-label="NIVĀRA home">
        {siteConfig.displayName}
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {siteConfig.navigation.map((item) => (
          <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
            {item.label}
          </Link>
        ))}
      </nav>

      <button className="header-cta" type="button" onClick={openViewingDialog}>
        Private viewing
      </button>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-label" aria-hidden="true">{menuOpen ? "Close" : "Menu"}</span>
        <span className="menu-icon" aria-hidden="true">＋</span>
      </button>

      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {siteConfig.navigation.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <span className="mono">0{index + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="button button--dark" onClick={openViewingDialog}>
          Book a private viewing
        </button>
      </div>
    </header>
  );
}
