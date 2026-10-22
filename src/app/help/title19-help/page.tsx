import { photos } from "@/content/images";
import { SourcePage } from "@/components/source-copy";
export const metadata = { title: "Connecticut Title 19 Help" };
export default function Page() { return <SourcePage copyKey="title19" eyebrow="CONNECTICUT TITLE 19 HELP" description="Information and application support for Connecticut Medicaid, HUSKY C, and long-term services and supports." image={photos.title19} supportImage={photos.sourceSections[3]} />; }
