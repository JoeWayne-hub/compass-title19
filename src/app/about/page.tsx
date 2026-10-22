import Image from "next/image";
import PageHero from "@/components/page-hero";
import { SourceBlocks } from "@/components/source-copy";
import siteCopy from "@/content/site-copy.json";
import { photos } from "@/content/images";

export const metadata = { title: "About Compass" };

export default function AboutPage() {
  const about = siteCopy.about;
  const founderStart = about.blocks.findIndex((block) => block.kind === "h2" && block.text.startsWith("Meet Akua"));
  const nextSection = about.blocks.findIndex((block, index) => index > founderStart && block.kind === "h2" && block.text.startsWith("Experience With the System"));
  const founderEnd = nextSection < 0 ? about.blocks.length : nextSection;

  return <>
    <PageHero eyebrow="ABOUT COMPASS" title={about.title} description="Learn about Compass, Founder Akua Achiaa Okyere, and the experience and values behind our work." image={photos.about} />
    <section className="source-copy-section about-intro"><div className="wrap"><SourceBlocks blocks={about.blocks.slice(0, founderStart)} /></div></section>
    <section className="profile-section about-founder" id="akua"><div className="wrap profile-grid">
      <Image src="/images/akua-portrait.jpg" alt="Akua Achiaa Okyere, Founder and CEO of Compass" width={620} height={775} className="profile-image" />
      <SourceBlocks blocks={about.blocks.slice(founderStart, founderEnd)} />
    </div></section>
    <section className="source-copy-section"><div className="wrap"><SourceBlocks blocks={about.blocks.slice(founderEnd)} /></div></section>
  </>;
}
