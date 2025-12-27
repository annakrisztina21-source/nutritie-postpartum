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
    { name: 'Proces', href: 'proces' },
    { name: 'Testimoniale', href: 'testimoniale' },
    { name: 'Contact', href: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex flex-col">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl md:text-2xl font-bold text-secondary font-poppins hover:text-primary transition-colors"
            >
              {siteConfig.brandName}
            </button>
            <span className="text-xs md:text-sm text-textSecondary font-inter hidden sm:block">
              {siteConfig.tagline}
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-textPrimary hover:text-primary transition-colors font-inter text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-md"
            >
              {siteConfig.hero.ctaPrimary}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-textPrimary hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-textPrimary hover:text-primary transition-colors font-inter text-base font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-primary/90 transition-all text-center mt-2"
              >
                {siteConfig.hero.ctaPrimary}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
