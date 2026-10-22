import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import NewsletterSignup from "@/components/newsletter-signup";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Compass Title19 Consultants | Connecticut Medicaid Guidance", template: "%s | Compass Title19" },
  description: "Connecticut-focused Medicaid and long-term-care guidance for individuals, families, and caregivers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><NewsletterSignup /><SiteFooter /></body></html>;
}
