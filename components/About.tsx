'use client';

import { GraduationCap, Award, Heart, Target } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function About() {
  return (
    <section id="despre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder pentru imagine */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                  <p className="text-textSecondary font-inter text-sm">
                    [Adaugă fotografia ta profesională aici]
                    <br />
                    <span className="text-xs opacity-70">
                      Recomandare: fotografie caldă, naturală, autentică
                    </span>
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-secondary/30 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary font-poppins mb-6">
              Despre mine
            </h2>

            <p className="text-lg text-textSecondary font-inter leading-relaxed mb-8">
              {siteConfig.about.text}
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-background p-4 rounded-2xl border-2 border-secondary/10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <GraduationCap className="text-secondary" size={20} />
                  </div>
                  <h4 className="font-semibold text-textPrimary font-poppins">Experiență</h4>
                </div>
                <p className="text-sm text-textSecondary font-inter">{siteConfig.about.experience}</p>
              </div>

              <div className="bg-background p-4 rounded-2xl border-2 border-secondary/10">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Award className="text-secondary" size={20} />
                  </div>
                  <h4 className="font-semibold text-textPrimary font-poppins">Studii</h4>
                </div>
                <p className="text-sm text-textSecondary font-inter">{siteConfig.about.education}</p>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-accent/10 p-6 rounded-2xl mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="text-accent" size={24} />
                <h4 className="font-semibold text-textPrimary font-poppins">Specializări</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.about.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-sm text-textPrimary font-inter border border-accent/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="flex items-start space-x-4 bg-secondary/5 p-6 rounded-2xl">
              <Heart className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-semibold text-textPrimary font-poppins mb-2">Abordarea mea</h4>
                <p className="text-textSecondary font-inter">{siteConfig.about.approach}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
