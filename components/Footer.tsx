'use client';

import { Instagram, Facebook, Heart, ArrowUp, Sparkles } from 'lucide-react';
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{siteConfig.brandName}</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-md leading-relaxed">
              {siteConfig.footer.description}
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-slate-400 group-hover:text-pink-500 transition-colors" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full"></div>
              Linkuri rapide
            </h4>
            <ul className="space-y-3">
              {siteConfig.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-slate-400 hover:text-white transition-colors text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-4 transition-all"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-600 rounded-full"></div>
              Legal
            </h4>
            <ul className="space-y-3">
              {siteConfig.footer.legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-600 group-hover:w-4 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left flex items-center gap-2">
              {siteConfig.footer.copyright}
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 inline animate-pulse" />
            </p>

            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-gradient transition-all">
                {siteConfig.contact.email}
              </a>
              <span className="text-slate-700">|</span>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-gradient transition-all">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all group z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
