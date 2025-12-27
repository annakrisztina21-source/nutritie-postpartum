'use client';

import { Cookie, BatteryLow, Scale, Baby, HeartCrack, Sparkles } from 'lucide-react';
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
    <section id="probleme" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white"></div>
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex mb-6">
            <div className="badge-modern shimmer">
              <HeartCrack className="w-4 h-4" />
              <span>Probleme frecvente</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Te recunoști în una<br />dintre aceste <span className="text-gradient">situații</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nu ești singură. Acestea sunt provocările cu care lucrăm împreună.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {siteConfig.problems.map((problem, index) => {
            const IconComponent = iconMap[problem.icon as keyof typeof iconMap] || Cookie;

            return (
              <div
                key={index}
                className="bento-card group hover:scale-[1.02] transition-all duration-300"
                style={{
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-pink-600" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold text-slate-900 leading-snug group-hover:text-gradient transition-all">
                  {problem.title}
                </h3>

                {/* Decorative shimmer on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            );
          })}
        </div>

        {/* Validation Text */}
        <div className="text-center">
          <div className="glass-modern inline-block px-10 py-6 max-w-3xl shimmer">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <p className="text-lg text-slate-900 font-medium leading-relaxed text-left">
                {siteConfig.problemsFooter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
