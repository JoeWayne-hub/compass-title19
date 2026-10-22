import { photos } from "@/content/images";
import { SourcePage } from "@/components/source-copy";
export const metadata = { title: "Non-Clinical Care Management" };
export default function Page() { return <SourcePage copyKey="careManagement" eyebrow="CARE MANAGEMENT SERVICES" description="The full guide to Compass non-clinical care management and family care navigation." image={photos.careManagement} supportImage={photos.sourceSections[4]} />; }
