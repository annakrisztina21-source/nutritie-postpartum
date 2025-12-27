'use client';

import { Clock, DollarSign, Star, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Services() {
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
    <section id="servicii" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary font-poppins mb-4">
            Cum te pot ajuta
          </h2>
          <p className="text-lg text-textSecondary font-inter max-w-3xl mx-auto">
            Alege varianta care se potrivește cel mai bine nevoilor tale în acest moment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-xl animate-slide-up ${
                service.featured
                  ? 'border-secondary shadow-lg scale-105 relative'
                  : 'border-secondary/20 hover:border-secondary/40'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-textPrimary px-4 py-2 rounded-full font-inter font-semibold text-sm flex items-center space-x-1 shadow-md">
                    <Star size={16} className="fill-current" />
                    <span>Recomandat</span>
                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-textPrimary font-poppins mb-4 leading-tight">
                  {service.name}
                </h3>
                <p className="text-textSecondary font-inter leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Duration & Price */}
                <div className="space-y-3">
                  <div className="flex items-center text-textSecondary">
                    <Clock size={18} className="mr-2 text-secondary" />
                    <span className="text-sm font-inter">{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign size={18} className="mr-2 text-secondary" />
                    <span className="text-lg font-semibold text-primary font-poppins">
                      {service.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full py-3 px-6 rounded-full font-inter font-semibold transition-all flex items-center justify-center group ${
                  service.featured
                    ? 'bg-secondary text-white hover:bg-secondary/90 shadow-md'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {service.ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <div className="inline-block bg-white/60 px-6 py-4 rounded-2xl border border-secondary/20">
            <p className="text-sm text-textSecondary font-inter italic max-w-2xl">
              {siteConfig.servicesDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
