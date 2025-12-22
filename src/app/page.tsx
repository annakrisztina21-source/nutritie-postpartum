import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Problems } from "@/components/Problems";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/siteConfig";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Person", "LocalBusiness"],
  name: siteConfig.brandName,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address,
  },
  sameAs: [siteConfig.socialLinks.instagram, siteConfig.socialLinks.facebook],
  areaServed: "Romania",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
