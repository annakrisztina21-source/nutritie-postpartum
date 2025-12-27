'use client';

import { Quote, Star, Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Testimonials() {
  return (
    <section id="testimoniale" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex mb-6">
            <div className="badge-modern shimmer">
              <Heart className="w-4 h-4 fill-current" />
              <span>Povești de succes</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Ce spun mamele cu care<br />am <span className="text-gradient">lucrat</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Feedback autentic de la femei care au parcurs această călătorie.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-3d group"
              style={{
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Quote className="text-white w-7 h-7" />
                </div>
              </div>

              <div className="pt-8 pb-6 px-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 leading-relaxed mb-6 italic min-h-[120px]">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {testimonial.context}
                  </p>
                </div>

                {/* Decorative gradient on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass-modern inline-block px-8 py-6 mb-6 shimmer">
            <p className="text-lg text-slate-900 font-medium flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-pink-600" />
              Vrei să fii următoarea poveste de succes?
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="btn-modern group"
            >
              <span className="relative z-10 flex items-center">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                {siteConfig.hero.ctaPrimary}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
