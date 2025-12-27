'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { name: 'Servicii', href: 'servicii' },
    { name: 'Despre', href: 'despre' },
    { name: 'Testimoniale', href: 'testimoniale' },
    { name: 'FAQ', href: 'faq' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group"
          >
            <span className="text-lg font-medium tracking-wide text-[rgb(30,30,32)] group-hover:text-rose-500 transition-colors">
              {siteConfig.brandName}
            </span>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="link-underline text-sm text-[rgb(115,115,115)] hover:text-[rgb(30,30,32)] transition-colors tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium tracking-wide text-[rgb(30,30,32)] hover:text-rose-500 transition-colors"
            >
              Programează Consultație
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[rgb(30,30,32)]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-black/5">
            <nav className="flex flex-col pt-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[rgb(115,115,115)] hover:text-[rgb(30,30,32)] transition-colors text-sm tracking-wide text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-black/5">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-rose w-full text-center"
                >
                  Programează Consultație
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
