'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Hero() {
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-textPrimary font-poppins leading-tight mb-6">
              {siteConfig.hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-textSecondary font-inter leading-relaxed mb-8">
              {siteConfig.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg flex items-center justify-center group"
              >
                {siteConfig.hero.ctaPrimary}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button
                onClick={() => scrollToSection('proces')}
                className="bg-white text-secondary px-8 py-4 rounded-full font-inter font-semibold hover:bg-secondary/10 transition-all border-2 border-secondary/20 hover:border-secondary/40 flex items-center justify-center"
              >
                {siteConfig.hero.ctaSecondary}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid sm:grid-cols-2 gap-4">
              {siteConfig.hero.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-sm text-textSecondary font-inter">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in hidden lg:block">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder pentru imagine */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <span className="text-4xl">👶</span>
                  </div>
                  <p className="text-textSecondary font-inter text-sm">
                    [Adaugă imaginea ta aici]
                    <br />
                    <span className="text-xs opacity-70">
                      Recomandare: fotografie profesională, lumină caldă, natural
                    </span>
                  </p>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full blur-xl opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/30 rounded-full blur-xl opacity-50"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <p className="text-xs text-textSecondary font-inter">Ghidare blândă</p>
                <p className="text-sm font-semibold text-textPrimary font-poppins">Rezultate sustenabile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
