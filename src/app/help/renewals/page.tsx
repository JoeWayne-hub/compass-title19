import { SourcePage } from "@/components/source-copy";
import { photos } from "@/content/images";
export const metadata = { title: "Medicaid Renewals & Redeterminations" };
export default function Page() { return <SourcePage copyKey="renewals" eyebrow="RENEWALS & REDETERMINATIONS" description="Read the complete guidance for Connecticut Medicaid renewals, DSS notices, verification, and next steps." image={photos.renewals} supportImage={photos.sourceSections[2]} />; }
