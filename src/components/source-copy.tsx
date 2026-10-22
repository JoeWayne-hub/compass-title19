import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import siteCopy from "@/content/site-copy.json";

type CopyBlock = { kind: string; text: string };
export type CopyDocument = { title: string; blocks: CopyBlock[]; tables?: string[][][] };
type CopyKey = "about" | "faq" | "title19" | "renewals" | "waivers" | "careManagement" | "existingApplication" | "education" | "article01";

function anchor(text: string) {
  if (text.toLowerCase().startsWith("why compass")) return "why-compass";
  return text.toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function SourceBlocks({ blocks, tables = [] }: { blocks: CopyBlock[]; tables?: string[][][] }) {
  const rendered: ReactNode[] = [];
  blocks.forEach((block, index) => {
      const key = `${index}-${block.text.slice(0, 24)}`;
      if (block.kind === "h2") rendered.push(<h2 id={anchor(block.text)} key={key}>{block.text}</h2>);
      else if (block.kind === "h3") rendered.push(<h3 id={anchor(block.text)} key={key}>{block.text}</h3>);
      else if (block.kind === "h4") rendered.push(<h4 key={key}>{block.text}</h4>);
      else if (block.kind === "li") rendered.push(<ul key={key}><li>{block.text}</li></ul>);
      else if (block.kind === "cta") rendered.push(<p className="source-cta" key={key}><Link className="button button-orange" href="/contact">{block.text} <span aria-hidden="true">↗</span></Link></p>);
      else rendered.push(<p key={key}>{block.text}</p>);
  });
  return <div className="source-copy">
    {rendered}
    {tables.map((table, index) => <div className="source-table-wrap" key={index}><table className="source-table"><tbody>{table.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => rowIndex === 0 ? <th key={cellIndex}>{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>)}
  </div>;
}

export function SourcePage({ copyKey, eyebrow, description, image }: { copyKey: CopyKey; eyebrow: string; description: string; image?: string }) {
  const document = siteCopy[copyKey] as CopyDocument;
  if (!document) notFound();
  return <><PageHero eyebrow={eyebrow} title={document.title} description={description} image={image} /><section className="source-copy-section"><div className="wrap"><SourceBlocks blocks={document.blocks} tables={document.tables} /></div></section></>;
}

export function CopyDocumentPage({ document, eyebrow, description, image }: { document: CopyDocument; eyebrow: string; description: string; image?: string }) {
  return <><PageHero eyebrow={eyebrow} title={document.title} description={description} image={image} /><section className="source-copy-section"><div className="wrap"><SourceBlocks blocks={document.blocks} tables={document.tables} /></div></section></>;
}

export default siteCopy;
