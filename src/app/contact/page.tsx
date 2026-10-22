import { photos } from "@/content/images";
import ContentPage from "@/components/content-page";
export const metadata = { title: "Contact Compass Title19" };
export default function Page() {
  return <ContentPage eyebrow="CONTACT COMPASS" title="Let’s find a clearer way forward." description="Tell us what’s happening. We’ll help you understand whether Compass may be the right support for your situation." sections={[{ title: "Serving families throughout Connecticut", paragraphs: ["Call or email Compass to begin a conversation."], links: [{ label: "Call 860.813.0020", href: "tel:+18608130020" }, { label: "Email medicaidhelp@cmctitle19.com", href: "mailto:medicaidhelp@cmctitle19.com" }] }, { title: "Hartford office", paragraphs: ["151 New Park Avenue, Hartford, CT 06106", "Office hours listed on the current Compass website: Monday through Friday, 9:00 a.m. to 5:00 p.m."], note: "The existing materials show different suite numbers. This draft leaves the suite number off until it is confirmed." }]} image={photos.contact} supportImage="https://images.pexels.com/photos/8441811/pexels-photo-8441811.jpeg?auto=compress&cs=tinysrgb&w=1200" />;
}
