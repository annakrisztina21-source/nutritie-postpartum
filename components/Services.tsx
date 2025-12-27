'use client';

import { ArrowRight, Clock } from 'lucide-react';
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
    <section id="servicii" className="section-padding section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="badge-elegant mb-6 inline-block">Servicii</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[rgb(30,30,32)] mb-6">
            Cum te pot ajuta
          </h2>
          <div className="accent-line-h mb-6"></div>
          <p className="text-lg text-[rgb(115,115,115)] leading-relaxed">
            Alege varianta care se potrivește cel mai bine nevoilor tale în acest moment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className={`card-elegant p-8 flex flex-col ${
                service.featured ? 'ring-1 ring-rose-200' : ''
              }`}
            >
              {/* Featured indicator */}
              {service.featured && (
                <div className="mb-6">
                  <span className="text-xs font-medium tracking-widest uppercase text-rose-500">
                    Recomandat
                  </span>
                </div>
              )}

              {/* Service number */}
              <div className="step-number mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-[rgb(30,30,32)] mb-4">
                {service.name}
              </h3>

              <p className="text-[rgb(115,115,115)] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-[rgb(115,115,115)] mb-6">
                <Clock className="w-4 h-4" />
                <span>{service.duration}</span>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-2xl font-medium text-[rgb(30,30,32)]">
                  {service.price}
                </span>
              </div>

              {/* CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className={`group flex items-center justify-center gap-2 py-4 transition-all ${
                  service.featured
                    ? 'btn-rose'
                    : 'border border-[rgb(30,30,32)] text-[rgb(30,30,32)] hover:bg-[rgb(30,30,32)] hover:text-white'
                }`}
              >
                <span className="text-sm font-medium tracking-wide uppercase">
                  {service.ctaText}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[rgb(115,115,115)] italic max-w-2xl mx-auto">
            {siteConfig.servicesDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
