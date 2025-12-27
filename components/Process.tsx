'use client';

import { MessageCircle, Target, FileText, TrendingUp } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const iconMap = [MessageCircle, Target, FileText, TrendingUp];

export default function Process() {
  return (
    <section id="proces" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary font-poppins mb-4">
            Cum lucrăm împreună
          </h2>
          <p className="text-lg text-textSecondary font-inter max-w-3xl mx-auto">
            Un proces simplu, structurat și adaptat nevoilor tale.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-primary to-accent transform -translate-x-1/2"></div>

          {/* Process Steps */}
          {siteConfig.process.map((step, index) => {
            const IconComponent = iconMap[index] || MessageCircle;
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.step}
                className={`relative mb-12 md:mb-16 animate-slide-up ${
                  isEven ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`md:w-1/2 ${
                    isEven ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'
                  }`}
                >
                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-secondary/10 hover:border-secondary/30 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="text-secondary" size={28} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-sm font-semibold text-accent font-inter">
                            Pasul {step.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-textPrimary font-poppins mb-2">
                          {step.title}
                        </h3>
                        <p className="text-textSecondary font-inter leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-secondary rounded-full transform -translate-x-1/2 border-4 border-background shadow-lg"></div>
              </div>
            );
          })}
        </div>

        {/* Validation Message */}
        <div className="text-center mt-12">
          <div className="inline-block bg-primary/10 px-8 py-6 rounded-2xl border-2 border-primary/20">
            <p className="text-lg text-textPrimary font-inter font-medium">
              {siteConfig.processValidation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
