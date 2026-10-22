import Link from "next/link";
import PageHero from "@/components/page-hero";

export type Section = { id?: string; title: string; paragraphs?: string[]; bullets?: string[]; note?: string; links?: { label: string; href: string }[] };
export type ContentPageProps = { eyebrow: string; title: string; description: string; image?: string; sections: Section[] };

export default function ContentPage({ eyebrow, title, description, image, sections }: ContentPageProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} image={image} />
      {sections.map((section, index) => (
        <section id={section.id} className={index % 2 ? "content-section content-warm" : "content-section"} key={section.title}>
          <div className="wrap content-wrap"><div className="content-heading"><p className="eyebrow">{String(index + 1).padStart(2, "0")} / COMPASS GUIDANCE</p><h2>{section.title}</h2></div>
            <div className="content-copy">{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}{section.note && <aside className="content-note">{section.note}</aside>}{section.links && <div className="content-links">{section.links.map((link) => <Link key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>)}</div>}</div>
          </div>
        </section>
      ))}
    </>
  );
}
