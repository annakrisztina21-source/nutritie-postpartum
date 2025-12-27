import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Problems Section */}
      <Problems />

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Process Section */}
      <Process />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
