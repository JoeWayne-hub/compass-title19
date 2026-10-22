"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const groups = [
  {
    label: "About",
    href: "/about",
    items: [["Our story & Akua", "/about"], ["Why Compass", "/about#why-compass"]],
  },
  {
    label: "Medicaid Planning",
    href: "/medicaid-planning",
    items: [
      ["Medicaid Waivers", "/medicaid-planning/medicaid-waivers"],
      ["Care Management Services", "/medicaid-planning/care-management"],
      ["Emergency Medicaid & Nursing Home", "/medicaid-planning/emergency-medicaid"],
    ],
  },
  {
    label: "Help",
    href: "/help",
    items: [
      ["Title 19 Help", "/help/title19-help"],
      ["Renewals & Redetermination", "/help/renewals"],
      ["Existing Application Help", "/help/existing-application"],
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      ["Resource Library", "/resources/library"],
      ["Wisdom Wednesday Education", "/resources/wisdom-wednesday-education"],
      ["Wisdom Wednesday Articles", "/resources/wisdom-wednesday-articles"],
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link className="brand" href="/" aria-label="Compass Title19 home">
          <Image className="brand-logo" src="/images/compass-mark.png" alt="" width={46} height={46} priority />
          <span className="brand-name"><b>COMPASS</b><small>TITLE19 CONSULTANTS LLC</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          {groups.map((group) => (
            <div className="nav-group" key={group.label}>
              <Link href={group.href} onClick={() => setOpen(false)}>{group.label}<span className="chevron">⌄</span></Link>
              <div className="nav-dropdown">
                {group.items.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
              </div>
            </div>
          ))}
          <Link href="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
          <Link href="/faqs" onClick={() => setOpen(false)}>FAQs</Link>
          <Link href="/contact" className="nav-contact" onClick={() => setOpen(false)}>Contact <span aria-hidden="true">↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
