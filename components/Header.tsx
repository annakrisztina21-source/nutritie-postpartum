'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
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
          ? 'glass-modern backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-xl md:text-2xl font-bold text-slate-900 hover:text-gradient transition-all"
              >
                {siteConfig.brandName}
              </button>
              <span className="text-xs text-slate-600 hidden sm:block">
                {siteConfig.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors font-medium text-sm group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-modern"
            >
              <span className="relative z-10">
                {siteConfig.hero.ctaPrimary}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="glass-modern p-4 rounded-2xl">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-slate-900 hover:text-gradient transition-all font-medium text-base text-left px-4 py-3 rounded-xl hover:bg-white/80"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-modern w-full mt-4"
                >
                  <span className="relative z-10">
                    {siteConfig.hero.ctaPrimary}
                  </span>
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
