import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Data House | Data, Automation & AI Solutions",
    template: "%s | AI Data House"
  },
  description: "AI Data House offers business automation, data analytics, integration, web solutions, Microsoft automation, and AI/ML services to help your business thrive.",
  keywords: [
    "AI Data House", "business automation", "data analytics", "integration services", "web development", "Microsoft automation", "AI", "machine learning", "data solutions", "automation"
  ],
  metadataBase: new URL("https://aidatahouse.com"),
  openGraph: {
    title: "AI Data House | Data, Automation & AI Solutions",
    description: "Transform your business with automation, analytics, integration, web, Microsoft, and AI/ML services from AI Data House.",
    url: "https://aidatahouse.com",
    siteName: "AI Data House",
    images: [
      {
        url: "https://aidatahouse.com/logo.png",
        width: 1200,
        height: 630,
        alt: "AI Data House Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@aidatahouse",
    title: "AI Data House | Data, Automation & AI Solutions",
    description: "Transform your business with automation, analytics, integration, web, Microsoft, and AI/ML services from AI Data House.",
    images: ["https://aidatahouse.com/logo.png"]
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://aidatahouse.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src *; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Data House",
              "url": "https://aidatahouse.com",
              "logo": "https://aidatahouse.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/aidatahouse",
                "https://www.linkedin.com/company/aidatahouse"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
