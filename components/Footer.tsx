'use client';

import { Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-poppins mb-3">{siteConfig.brandName}</h3>
            <p className="text-white/80 font-inter text-sm mb-4 max-w-md">
              {siteConfig.footer.description}
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Linkuri rapide</h4>
            <ul className="space-y-2">
              {siteConfig.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-white/80 hover:text-white transition-colors font-inter text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Legal</h4>
            <ul className="space-y-2">
              {siteConfig.footer.legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors font-inter text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 font-inter text-sm text-center md:text-left">
              {siteConfig.footer.copyright}
            </p>

            <div className="flex items-center space-x-4 text-white/70 font-inter text-sm">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                {siteConfig.contact.email}
              </a>
              <span>|</span>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
