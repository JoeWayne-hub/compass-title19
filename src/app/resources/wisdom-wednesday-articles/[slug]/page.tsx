import { photos } from "@/content/images";
import { notFound } from "next/navigation";
import { CopyDocumentPage } from "@/components/source-copy";
import siteCopy from "@/content/site-copy.json";
export const generateStaticParams = () => siteCopy.wisdomArticles.slice(1).map((_, i) => ({ slug: `article-${String(i+2).padStart(2,"0")}` }));
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params; const index = Number(slug.replace("article-", "")) - 1; const item = siteCopy.wisdomArticles[index];
 if (!item || index === 0 || !/^article-\d{2}$/.test(slug)) notFound();
 return <CopyDocumentPage document={item} eyebrow={`WISDOM WEDNESDAY · ARTICLE ${String(index+1).padStart(2,"0")}`} description="The complete Wisdom Wednesday article, with the full supplied section copy." image={photos.wisdomArticles[index]} supportImage={photos.wisdomArticleSections[index]} />;
}
