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
    <section id="probleme" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary font-poppins mb-4">
            Te recunoști în una dintre aceste situații?
          </h2>
          <p className="text-lg text-textSecondary font-inter max-w-3xl mx-auto">
            Nu ești singură. Acestea sunt provocările cu care lucrăm împreună.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap] || Cookie;

            return (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl border-2 border-secondary/10 hover:border-secondary/30 transition-all hover:shadow-lg group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <IconComponent className="text-secondary" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-textPrimary font-poppins mb-2">
                  {problem.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Validation Text */}
        <div className="text-center">
          <div className="inline-block bg-accent/20 px-8 py-4 rounded-2xl">
            <p className="text-base sm:text-lg text-textPrimary font-inter font-medium">
              {siteConfig.problemsFooter}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
