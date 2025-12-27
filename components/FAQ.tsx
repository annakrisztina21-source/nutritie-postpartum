'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary font-poppins mb-4">
            Întrebări frecvente
          </h2>
          <p className="text-lg text-textSecondary font-inter max-w-2xl mx-auto">
            Răspunsuri la cele mai comune întrebări pe care le primesc.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {siteConfig.faq.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-2 border-secondary/10 overflow-hidden transition-all hover:border-secondary/30 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-background/50"
              >
                <span className="text-lg font-semibold text-textPrimary font-poppins pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 text-secondary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {/* Answer Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 border-t border-secondary/10">
                  <p className="text-textSecondary font-inter leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-textSecondary font-inter">
            Mai ai întrebări?{' '}
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
              className="text-primary font-semibold hover:underline"
            >
              Contactează-mă direct
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
