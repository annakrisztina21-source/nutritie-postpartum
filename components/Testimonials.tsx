'use client';

import { siteConfig } from '@/lib/siteConfig';

export default function Testimonials() {
  return (
    <section id="testimoniale" className="section-padding section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-elegant mb-6 inline-block">Testimoniale</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[rgb(30,30,32)] mb-6">
            Ce spun mamele cu care am lucrat
          </h2>
          <div className="accent-line-h mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(115,115,115)] leading-relaxed">
            Feedback autentic de la femei care au parcurs această călătorie.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card-elegant p-8 lg:p-10 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Quote mark */}
              <div className="quote-mark mb-4">"</div>

              {/* Testimonial text */}
              <p className="text-lg lg:text-xl text-[rgb(30,30,32)] leading-relaxed mb-8 italic">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
                  <span className="text-rose-600 font-medium">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-[rgb(30,30,32)]">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[rgb(115,115,115)]">
                    {testimonial.context}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-[rgb(115,115,115)] mb-6">
            Vrei să fii următoarea poveste de succes?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-rose"
          >
            Începe acum
          </button>
        </div>
      </div>
    </section>
  );
}
