import AboutClientContent from '@/components/AboutClientContent';

export const metadata = {
  title: "About Us | AI Data House",
  description: "Learn about AI Data House, our mission to democratize data and automation, and how we help businesses grow with innovative solutions.",
  alternates: {
    canonical: "https://aidatahouse.com/about"
  },
  openGraph: {
    title: "About Us | AI Data House",
    description: "Learn about AI Data House, our mission to democratize data and automation, and how we help businesses grow with innovative solutions.",
    url: "https://aidatahouse.com/about"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | AI Data House",
    description: "Learn about AI Data House, our mission to democratize data and automation, and how we help businesses grow with innovative solutions."
  }
};

export default function AboutPage() {
  return <><AboutClientContent /></>;
}