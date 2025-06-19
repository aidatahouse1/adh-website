import ServicesClientContent from '@/components/ServicesClientContent';
import Script from 'next/script';

const serviceStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Automation",
    "description": "Streamline your business processes with powerful automation solutions using Make.com, Zapier, and n8n.",
    "provider": {
      "@type": "Organization",
      "name": "AI Data House",
      "url": "https://aidatahouse.com"
    },
    "url": "https://aidatahouse.com/services#business-automation"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Integration Services",
    "description": "Connect your business tools seamlessly with our expert integration services across multiple platforms.",
    "provider": {
      "@type": "Organization",
      "name": "AI Data House",
      "url": "https://aidatahouse.com"
    },
    "url": "https://aidatahouse.com/services#integration-services"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Data Analytics",
    "description": "Transform your raw data into actionable insights with our advanced analytics solutions.",
    "provider": {
      "@type": "Organization",
      "name": "AI Data House",
      "url": "https://aidatahouse.com"
    },
    "url": "https://aidatahouse.com/services#data-analytics"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Solutions",
    "description": "Create stunning, responsive web applications with modern technologies and best practices.",
    "provider": {
      "@type": "Organization",
      "name": "AI Data House",
      "url": "https://aidatahouse.com"
    },
    "url": "https://aidatahouse.com/services#web-solutions"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Microsoft Data Automation",
    "description": "Leverage Microsoft's powerful suite of tools for enterprise-grade data automation and management.",
    "provider": {
      "@type": "Organization",
      "name": "AI Data House",
      "url": "https://aidatahouse.com"
    },
    "url": "https://aidatahouse.com/services#microsoft-data-automation"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI & Machine Learning",
    "description": "Leverage the power of artificial intelligence to automate processes, predict trends, and make data-driven decisions.",
    "provider": {
      "@type": "Organization",
      "name": "AI Data House",
      "url": "https://aidatahouse.com"
    },
    "url": "https://aidatahouse.com/services#ai-machine-learning"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Script id="service-ld-json" type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </Script>
      <ServicesClientContent />
    </>
  );
}

export const metadata = {
  title: "Services | AI Data House",
  description: "Explore business automation, data analytics, integration, web solutions, Microsoft automation, and AI/ML services from AI Data House.",
  alternates: {
    canonical: "https://aidatahouse.com/services"
  },
  openGraph: {
    title: "Services | AI Data House",
    description: "Explore business automation, data analytics, integration, web solutions, Microsoft automation, and AI/ML services from AI Data House.",
    url: "https://aidatahouse.com/services"
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | AI Data House",
    description: "Explore business automation, data analytics, integration, web solutions, Microsoft automation, and AI/ML services from AI Data House."
  }
};