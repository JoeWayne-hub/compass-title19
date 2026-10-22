import { photos } from "@/content/images";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import siteCopy from "@/content/site-copy.json";
export const metadata = { title: "Wisdom Wednesday Articles" };
export default function Page(){return <><PageHero eyebrow="WISDOM WEDNESDAY · 12 ARTICLES" title="One useful question at a time." description="The complete publishing series on Connecticut Medicaid, HUSKY C, LTSS, HCBS, applications, and renewals. Articles also appear in the Resource Library." image={photos.wisdomIndex} /><section className="section article-section"><div className="wrap"><p className="eyebrow">THE ARTICLE SERIES</p><h2>Read every article</h2><div className="article-list">{siteCopy.wisdomArticles.map((item,i)=><Link href={`/resources/wisdom-wednesday-articles/article-${String(i+1).padStart(2,"0")}`} className="article-row" key={item.title}><span>{String(i+1).padStart(2,"0")}</span><b>{item.title}</b><i>↗</i></Link>)}</div><p className="library-crosslink">Find these articles alongside the evergreen guides in the <Link href="/resources/library">Resource Library <span aria-hidden="true">↗</span></Link>.</p></div></section></>}
