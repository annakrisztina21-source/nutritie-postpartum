'use client';

import { Quote } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Testimonials() {
  return (
    <section id="testimoniale" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary font-poppins mb-4">
            Ce spun mamele cu care am lucrat
          </h2>
          <p className="text-lg text-textSecondary font-inter max-w-3xl mx-auto">
            Feedback autentic de la femei care au parcurs această călătorie.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-background p-6 rounded-2xl border-2 border-secondary/10 hover:border-secondary/30 transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                  <Quote className="text-accent" size={24} />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-textSecondary font-inter leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t-2 border-secondary/10 pt-4">
                <p className="font-semibold text-textPrimary font-poppins text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-textSecondary font-inter mt-1">
                  {testimonial.context}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-textSecondary font-inter mb-4">
            Vrei să fii următoarea poveste de succes?
          </p>
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
            className="bg-primary text-white px-8 py-4 rounded-full font-inter font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            {siteConfig.hero.ctaPrimary}
          </button>
        </div>
      </div>
    </section>
  );
}
