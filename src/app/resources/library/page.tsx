import { photos } from "@/content/images";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { SourceBlocks } from "@/components/source-copy";
import siteCopy from "@/content/site-copy.json";
export const metadata = { title: "Website Resource Library" };
export default function Page() {
 const guides = siteCopy.resourceGuides;
 return <><PageHero eyebrow="WEBSITE RESOURCE LIBRARY" title="A deeper library for the questions families ask." description="Twelve complete evergreen guides for families, caregivers, and professionals navigating Connecticut Medicaid and long-term care." image={photos.resourceLibrary} />
 <section className="source-copy-section"><div className="wrap"><SourceBlocks blocks={siteCopy.resourceIntro.blocks} supportImage={photos.librarySection} photoAlt="A daughter and her older mother sharing time together" /></div></section>
 <section className="section article-section"><div className="wrap"><p className="eyebrow">12 COMPLETE RESOURCE GUIDES</p><h2>Explore the library</h2><div className="article-list">{guides.map((item,i)=><Link href={`/resources/library/guide-${String(i+1).padStart(2,"0")}`} className="article-row" key={item.title}><span>{String(i+1).padStart(2,"0")}</span><b>{item.title}</b><i>↗</i></Link>)}</div><p className="library-crosslink">The articles in Wisdom Wednesday are also listed in this library. <Link href="/resources/wisdom-wednesday-articles">Browse the Wisdom Wednesday series <span aria-hidden="true">↗</span></Link></p></div></section></>;
}
