import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: string;
  home?: boolean;
};

export default function PageHero({ eyebrow, title, description, image, home = false }: PageHeroProps) {
  const backgroundImage = image
    ? `linear-gradient(90deg, rgba(20, 35, 68, .84) 0%, rgba(35, 53, 91, .68) 49%, rgba(35, 53, 91, .2) 100%), url("${image}")`
    : "linear-gradient(120deg, #324d84, #26365d 72%, #cb753b)";
  return (
    <section className={home ? "page-hero home-hero" : "page-hero"} style={{ backgroundImage }}>
      <div className="wrap hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-description">{description}</p><a className="button button-orange" href="/contact">Let’s talk about your situation <span aria-hidden="true">↗</span></a></div>
      {image && <span className="hero-credit">Photo: Pexels</span>}
    </section>
  );
}
