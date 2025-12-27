'use client';

import { Clock, DollarSign, Star, ArrowRight, Sparkles, Check } from 'lucide-react';
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
    <section id="servicii" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex mb-6">
            <div className="badge-modern shimmer">
              <Sparkles className="w-4 h-4" />
              <span>Servicii premium</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Cum te pot <span className="text-gradient">ajuta</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Alege varianta care se potrivește cel mai bine nevoilor tale în acest moment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="relative group perspective-1000"
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="badge-modern pulse-glow">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Recomandat</span>
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`card-3d h-full p-8 ${service.featured ? 'ring-2 ring-pink-500/20' : ''}`}>
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    service.featured
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600'
                      : 'bg-gradient-to-br from-slate-100 to-slate-200'
                  }`}>
                    <Check className={`w-7 h-7 ${service.featured ? 'text-white' : 'text-slate-700'}`} />
                  </div>
                  {service.featured && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                  {service.name}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 min-h-[80px]">
                  {service.description}
                </p>

                {/* Duration & Price */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-slate-600">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center mr-3">
                      <Clock className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center mr-3">
                      <DollarSign className="w-4 h-4 text-pink-600" />
                    </div>
                    <span className="text-2xl font-bold text-gradient">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full group/btn relative overflow-hidden ${
                    service.featured
                      ? 'btn-modern'
                      : 'glass-modern px-6 py-3 rounded-full font-semibold text-slate-900 hover:bg-white transition-all'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {service.ctaText}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </button>

                {/* Decorative gradient */}
                {service.featured && (
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-center">
          <div className="glass-modern inline-block px-8 py-5 max-w-3xl">
            <p className="text-sm text-slate-600 leading-relaxed">
              {siteConfig.servicesDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
