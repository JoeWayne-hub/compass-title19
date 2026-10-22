import { SourcePage } from "@/components/source-copy";
import { photos } from "@/content/images";
export const metadata = { title: "Connecticut Medicaid FAQs" };
export default function Page() { return <SourcePage copyKey="faq" eyebrow="CONNECTICUT MEDICAID · TITLE 19" description="Explore answers to the full set of questions in the Compass Connecticut Medicaid FAQ." image={photos.faqs} supportImage={photos.sourceSections[0]} />; }
