'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex mb-6">
            <div className="badge-modern shimmer">
              <HelpCircle className="w-4 h-4" />
              <span>Întrebări frecvente</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Răspunsuri la <span className="text-gradient">întrebările</span> tale
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cele mai comune întrebări pe care le primesc de la viitoarele mame.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {siteConfig.faq.map((item, index) => (
            <div
              key={item.id}
              className={`card-3d overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'ring-2 ring-pink-500/20' : ''
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-pink-500 to-purple-600'
                      : 'bg-slate-100 group-hover:bg-slate-200'
                  }`}>
                    <MessageCircle className={`w-5 h-5 ${
                      openIndex === index ? 'text-white' : 'text-slate-600'
                    }`} />
                  </div>
                  <span className="text-lg font-bold text-slate-900 pr-4 group-hover:text-gradient transition-all">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`flex-shrink-0 text-pink-600 transition-transform duration-300 ${
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
                <div className="px-6 pb-6">
                  <div className="pl-14 pr-10">
                    <div className="glass-modern px-6 py-4">
                      <p className="text-slate-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center">
          <div className="bento-card inline-block shimmer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-lg text-slate-900 font-medium mb-1">
                  Mai ai întrebări?
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
                  className="text-pink-600 font-bold hover:text-gradient transition-all flex items-center gap-2 group"
                >
                  Contactează-mă direct
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
