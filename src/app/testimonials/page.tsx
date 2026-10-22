import ContentPage from "@/components/content-page"; import { photos } from "@/content/images";
export const metadata={title:"Testimonials"};
const quotes=[
  ["Marie T.","Avon, CT","I was completely overwhelmed when my mother needed nursing home care. Compass stepped in, explained everything in plain language, and handled the Medicaid process from start to finish."],
  ["Kevin D.","Farmington, CT","They helped us keep Dad at home, get him on the waiver program, and even found other benefits we didn’t know existed. Kind, thorough, and always a phone call away."],
  ["Sandra M.","Norwalk, CT","Compass treated us like family. They made a very stressful situation feel manageable and gave us peace of mind every step of the way."],
  ["Deborah A.","New Haven, CT","I was denied twice trying to apply for Medicaid on my own. Compass got it approved and helped protect my mother’s home. Worth every penny."],
];
export default function Page(){return <><ContentPage eyebrow="CLIENT FEEDBACK" title="Stories from families who found a steadier path." description="Client feedback currently featured on the Compass website." sections={[{title:"Kind words from Connecticut families",paragraphs:["Every family’s situation is unique. These statements describe individual client experiences and do not guarantee a particular result."]}]} image={photos.testimonials} /><section className="section quote-section"><div className="wrap quote-grid">{quotes.map(([name,location,quote])=><blockquote key={name}>“{quote}”<cite>{name}<small>{location}</small></cite></blockquote>)}</div></section></>}
