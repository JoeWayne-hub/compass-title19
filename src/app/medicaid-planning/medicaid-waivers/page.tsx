import { SourcePage } from "@/components/source-copy";
import { photos } from "@/content/images";
export const metadata = { title: "Connecticut Medicaid Waivers & HCBS" };
export default function Page() { return <SourcePage copyKey="waivers" eyebrow="MEDICAID WAIVERS & HCBS" description="The full Compass guide to Connecticut Medicaid waivers and home and community-based services." image={photos.waivers} />; }
