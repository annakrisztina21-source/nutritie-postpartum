'use client';

import { Cookie, BatteryLow, Scale, Baby, HeartCrack } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const iconMap = {
  cookie: Cookie,
  'battery-low': BatteryLow,
  scale: Scale,
  baby: Baby,
  'heart-crack': HeartCrack,
};

export default function Problems() {
  return (
    <section id="probleme" className="section-padding section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-elegant mb-6 inline-block">Provocări</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[rgb(30,30,32)] mb-6">
            Te recunoști în una dintre aceste situații?
          </h2>
          <div className="accent-line-h mx-auto mb-6"></div>
          <p className="text-lg text-[rgb(115,115,115)] leading-relaxed">
            Nu ești singură. Acestea sunt provocările cu care lucrăm împreună.
          </p>
        </div>

        {/* Problems Grid - Elegant layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {siteConfig.problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap] || Cookie;

            return (
              <div
                key={index}
                className="flex gap-5 group"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                    <IconComponent className="w-5 h-5 text-rose-500" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-medium text-[rgb(30,30,32)] mb-2 group-hover:text-rose-600 transition-colors">
                    {problem.title}
                  </h3>
                  <div className="w-8 h-px bg-rose-200 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Validation Text */}
        <div className="mt-20 text-center">
          <div className="inline-block border-l-2 border-rose-300 pl-6 text-left max-w-2xl">
            <p className="text-lg text-[rgb(30,30,32)] leading-relaxed italic">
              {siteConfig.problemsFooter}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
