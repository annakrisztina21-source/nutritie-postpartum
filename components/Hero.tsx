'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center section-white">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-8">
              <span className="badge-elegant">
                Nutriție Postpartum
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[rgb(30,30,32)] mb-6 leading-[1.1]">
              Slăbește{' '}
              <span className="text-rose-gradient">sănătos</span>
              {' '}după naștere
            </h1>

            {/* Accent line */}
            <div className="accent-line-h mb-8"></div>

            {/* Subheadline */}
            <p className="text-lg text-[rgb(115,115,115)] mb-10 leading-relaxed">
              Program personalizat de nutriție postpartum, adaptat vieții tale de mamă.
              Fără diete drastice, fără restricții extreme — doar rezultate reale și sustenabile.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-rose group"
              >
                Începe Transformarea
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('servicii')}
                className="btn-outline"
              >
                Descoperă Serviciile
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-black/5">
              <div className="flex items-center gap-12">
                <div>
                  <div className="text-3xl font-medium text-[rgb(30,30,32)]">100+</div>
                  <div className="text-sm text-[rgb(115,115,115)] mt-1">Mame ajutate</div>
                </div>
                <div className="w-px h-12 bg-black/10"></div>
                <div>
                  <div className="text-3xl font-medium text-[rgb(30,30,32)]">4.9</div>
                  <div className="text-sm text-[rgb(115,115,115)] mt-1">Rating mediu</div>
                </div>
                <div className="w-px h-12 bg-black/10"></div>
                <div>
                  <div className="text-3xl font-medium text-[rgb(30,30,32)]">5+ ani</div>
                  <div className="text-sm text-[rgb(115,115,115)] mt-1">Experiență</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 to-purple-50 rounded-sm overflow-hidden image-frame">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/80 flex items-center justify-center">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                  <p className="text-[rgb(115,115,115)] text-sm">
                    Adaugă fotografia ta profesională
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-rose-200 rounded-sm -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
