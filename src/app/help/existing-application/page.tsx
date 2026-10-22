import { photos } from "@/content/images";
import { SourcePage } from "@/components/source-copy";
export const metadata = { title: "Existing Medicaid Application Help" };
export default function Page() { return <SourcePage copyKey="existingApplication" eyebrow="EXISTING APPLICATION HELP" description="Detailed guidance for families with an existing or stalled Connecticut Medicaid application." image={photos.existingApplication} supportImage={photos.sourceSections[1]} />; }
