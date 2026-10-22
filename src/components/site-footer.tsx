import Link from "next/link";
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <Link className="brand footer-brand" href="/">
          <Image className="brand-logo" src="/images/compass-mark.png" alt="" width={42} height={42} />
          <span className="brand-name"><b>COMPASS</b><small>TITLE19 CONSULTANTS LLC</small></span>
        </Link>
        <p>Guidance, clarity, and a steadier path through Connecticut Medicaid.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/medicaid-planning">Medicaid Planning</Link><Link href="/help">Get Help</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link><Link href="#website-disclaimer">Disclaimer</Link>
        </nav>
      </div>
      <div className="footer-legal wrap" id="website-disclaimer">
        <div className="footer-disclaimer-copy"><p className="eyebrow light">WEBSITE DISCLAIMER</p><p>Compass Title19 Consultants LLC is a Connecticut-based, non-attorney Medicaid consulting and non-clinical care management organization. Information provided on this website is for general educational purposes and does not constitute legal, tax, investment, financial, medical or nursing advice. Medicaid rules, program requirements and administrative procedures are subject to change, and individual circumstances vary. Eligibility, benefits, effective dates, service authorization and application decisions are determined by the Connecticut Department of Social Services and other applicable agencies. Compass does not guarantee Medicaid eligibility, approval, processing time, program enrollment, service availability or any particular outcome. Clients should consult an appropriate qualified professional when legal, tax, financial, clinical or other licensed professional advice is required.</p></div>
        <small>© {new Date().getFullYear()} Compass Title19 Consultants LLC</small>
      </div>
      <div className="photo-credits wrap">Care and family photography is sourced from Pexels.</div>
    </footer>
  );
}
