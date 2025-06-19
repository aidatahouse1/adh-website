import CaseStudiesClientContent from '@/components/CaseStudiesClientContent';
import Script from 'next/script';

const caseStudiesStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Print Shop Automation Revolution",
    "description": "Implemented a comprehensive CRM system with automated scheduling, real-time tracking, and mobile access for QuickPrint Solutions.",
    "url": "https://aidatahouse.com/case-studies#print-shop-automation-revolution"
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Data-Driven Retail Transformation",
    "description": "Developed an integrated analytics platform with automated reporting and predictive insights for Urban Retail Group.",
    "url": "https://aidatahouse.com/case-studies#data-driven-retail-transformation"
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Healthcare Process Automation",
    "description": "Created an automated patient management system with AI-powered scheduling for MediCare Plus.",
    "url": "https://aidatahouse.com/case-studies#healthcare-process-automation"
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Financial Services Automation",
    "description": "Implemented automated reconciliation and compliance monitoring system for Global Finance Corp.",
    "url": "https://aidatahouse.com/case-studies#financial-services-automation"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Script id="case-studies-ld-json" type="application/ld+json">
        {JSON.stringify(caseStudiesStructuredData)}
      </Script>
      <><CaseStudiesClientContent /></>
    </>
  );
}

export const metadata = {
  title: "Case Studies | AI Data House",
  description: "See how AI Data House has transformed businesses with automation, analytics, integration, and AI/ML solutions. Read our success stories.",
  alternates: {
    canonical: "https://aidatahouse.com/case-studies"
  },
  openGraph: {
    title: "Case Studies | AI Data House",
    description: "See how AI Data House has transformed businesses with automation, analytics, integration, and AI/ML solutions. Read our success stories.",
    url: "https://aidatahouse.com/case-studies"
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | AI Data House",
    description: "See how AI Data House has transformed businesses with automation, analytics, integration, and AI/ML solutions. Read our success stories."
  }
};