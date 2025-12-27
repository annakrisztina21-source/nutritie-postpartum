'use client';

import { ArrowRight, Sparkles, Heart, Star, TrendingUp, Users } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden noise-texture">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header Content */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex">
            <div className="badge-modern shimmer">
              <Sparkles className="w-4 h-4" />
              <span>Nutriție inteligentă pentru mame moderne</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight max-w-5xl mx-auto">
            Slăbește{' '}
            <span className="text-gradient">sănătos</span>
            {' '}după naștere,{' '}
            <span className="text-gradient">fără restricții</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Program personalizat de nutriție postpartum, adaptat vieții tale de mamă. Rezultate reale, fără diete drastice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-modern group relative z-10"
            >
              <span className="relative z-10 flex items-center">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Începe Transformarea
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToSection('servicii')}
              className="glass-modern px-8 py-4 rounded-full font-semibold text-slate-900 hover:bg-white/95 transition-all"
            >
              Vezi Serviciile
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {/* Large Feature Card */}
          <div className="md:col-span-2 md:row-span-2 bento-card group perspective-1000">
            <div className="transform-3d transition-transform duration-500 group-hover:rotate-y-2">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center pulse-glow">
                  <Heart className="w-6 h-6 text-white fill-current" />
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Plan Personalizat <span className="text-gradient">100%</span>
                </h3>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Fiecare mamă este unică. Primești un plan adaptat stilului tău de viață, preferințelor alimentare și obiectivelor tale.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/50 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-gradient mb-1">7-14 zile</div>
                    <div className="text-sm text-slate-600">Plan alimentar</div>
                  </div>
                  <div className="bg-white/50 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
                    <div className="text-sm text-slate-600">Suport online</div>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bento-card group">
            <div className="text-center">
              <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-slate-600">Mame transformate</div>
            </div>
          </div>

          {/* Rating Card */}
          <div className="bento-card group">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">4.9</div>
              <div className="text-slate-600">Rating mediu</div>
            </div>
          </div>

          {/* Results Card */}
          <div className="md:col-span-2 bento-card group">
            <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
            <h4 className="text-xl font-bold text-slate-900 mb-3">Rezultate Garantate</h4>
            <p className="text-slate-600">
              Abordare validată științific, bazată pe nutriție echilibrată și sustenabilitate pe termen lung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
