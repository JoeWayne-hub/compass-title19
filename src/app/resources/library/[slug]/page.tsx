import { photos } from "@/content/images";
import { notFound } from "next/navigation";
import { CopyDocumentPage } from "@/components/source-copy";
import siteCopy from "@/content/site-copy.json";
export const generateStaticParams = () => siteCopy.resourceGuides.map((_, i) => ({ slug: `guide-${String(i+1).padStart(2,"0")}` }));
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params; const index = Number(slug.replace("guide-", "")) - 1; const item = siteCopy.resourceGuides[index];
 if (!item || !/^guide-\d{2}$/.test(slug)) notFound();
 return <CopyDocumentPage document={item} eyebrow={`RESOURCE LIBRARY · GUIDE ${String(index+1).padStart(2,"0")}`} description="A complete evergreen guide from the Compass Resource Library." image={photos.resourceGuides[index]} />;
}
