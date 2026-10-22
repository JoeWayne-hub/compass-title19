import { photos } from "@/content/images";
import { SourcePage } from "@/components/source-copy";
export const metadata = { title: "Wisdom Wednesday Education" };
export default function Page() { return <SourcePage copyKey="education" eyebrow="WISDOM WEDNESDAY EDUCATION" description="Read the full Compass education center for Connecticut individuals, families, caregivers, and professionals." image={photos.education} supportImage={photos.sourceSections[6]} />; }
