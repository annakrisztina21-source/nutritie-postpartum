'use client';

import { GraduationCap, Award, Heart, Target, Sparkles, TrendingUp } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function About() {
  return (
    <section id="despre" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative perspective-1000">
              <div className="card-3d h-[600px] transform-3d group-hover:rotate-y-2 overflow-hidden">
                {/* Placeholder pentru imagine */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shimmer">
                      <span className="text-6xl">👩‍⚕️</span>
                    </div>
                    <div className="glass-modern inline-block px-6 py-3">
                      <p className="text-slate-700 font-medium text-sm">
                        Adaugă fotografia ta profesională aici
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Recomandare: fotografie caldă, naturală, autentică
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative floating badges */}
                <div className="absolute top-8 right-8">
                  <div className="badge-modern pulse-glow">
                    <Award className="w-4 h-4" />
                    <span>Certificat</span>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8">
                  <div className="glass-modern px-4 py-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-slate-900">100+ clienți</span>
                  </div>
                </div>
              </div>

              {/* Decorative orbs */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex mb-6">
              <div className="badge-modern shimmer">
                <Sparkles className="w-4 h-4" />
                <span>Nutriționist specializat</span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Despre <span className="text-gradient">mine</span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {siteConfig.about.text}
            </p>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bento-card group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GraduationCap className="text-pink-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Experiență</h4>
                </div>
                <p className="text-slate-600">{siteConfig.about.experience}</p>
              </div>

              <div className="bento-card group">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="text-purple-600 w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg">Studii</h4>
                </div>
                <p className="text-slate-600">{siteConfig.about.education}</p>
              </div>
            </div>

            {/* Specializations */}
            <div className="glass-modern p-6 mb-6 shimmer">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Target className="text-white w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg">Specializări</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.about.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="badge-modern"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="bento-card group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Heart className="text-white w-6 h-6 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Abordarea mea</h4>
                  <p className="text-slate-600 leading-relaxed">{siteConfig.about.approach}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
