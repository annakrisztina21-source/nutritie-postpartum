'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding section-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge-elegant mb-6 inline-block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[rgb(30,30,32)] mb-6">
            Întrebări frecvente
          </h2>
          <div className="accent-line-h mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(115,115,115)] leading-relaxed">
            Răspunsuri la cele mai comune întrebări pe care le primesc.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {siteConfig.faq.map((item, index) => (
            <div
              key={item.id}
              className="card-elegant overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="text-lg font-medium text-[rgb(30,30,32)] pr-8 group-hover:text-rose-600 transition-colors">
                  {item.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-rose-500" />
                  ) : (
                    <Plus className="w-4 h-4 text-rose-500" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-black/5 pt-6">
                    <p className="text-[rgb(115,115,115)] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-[rgb(115,115,115)]">
            Mai ai întrebări?{' '}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="link-underline text-[rgb(30,30,32)] font-medium"
            >
              Contactează-mă direct
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
