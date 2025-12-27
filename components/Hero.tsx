'use client';

import { CheckCircle2, ArrowRight, Sparkles, Heart, Zap } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-mesh">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl blob"></div>
        <div className="absolute -bottom-20 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl blob" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-textPrimary">Nutriție modernă pentru mame</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-textPrimary font-poppins leading-tight mb-6">
              {siteConfig.hero.title.split(' ').map((word, i) => {
                const highlightWords = ['slăbești', 'naștere', 'drastice', 'vinovăție'];
                if (highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()))) {
                  return <span key={i} className="gradient-text">{word} </span>;
                }
                return <span key={i}>{word} </span>;
              })}
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-textSecondary font-inter leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {siteConfig.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <button onClick={() => scrollToSection('contact')} className="btn-gradient text-white px-8 py-4 rounded-full font-inter font-semibold shadow-glow-pink flex items-center justify-center group text-lg">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                {siteConfig.hero.ctaPrimary}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button onClick={() => scrollToSection('proces')} className="glass-card text-textPrimary px-8 py-4 rounded-full font-inter font-semibold hover:bg-white/90 transition-all border border-primary/20 flex items-center justify-center text-lg">
                <Zap className="w-5 h-5 mr-2 text-accent" />
                {siteConfig.hero.ctaSecondary}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
              {siteConfig.hero.badges.map((badge, index) => (
                <div key={index} className="glass-card p-3 lg:p-4 rounded-2xl shadow-soft hover:shadow-glow-pink transition-all animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                  <CheckCircle2 className="text-primary mb-2 mx-auto lg:mx-0" size={20} />
                  <span className="text-xs lg:text-sm text-textSecondary font-inter block">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-scale-in">
            <div className="relative aspect-square lg:h-[600px] rounded-[3rem] overflow-hidden modern-card">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                <svg className="w-full h-full p-12" viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="180" r="80" fill="url(#grad1)" opacity="0.8"/>
                  <ellipse cx="200" cy="300" rx="100" ry="120" fill="url(#grad2)" opacity="0.7"/>
                  <circle cx="300" cy="100" r="30" fill="#FF6B9D" opacity="0.3" className="floating"/>
                  <circle cx="100" cy="320" r="20" fill="#6366F1" opacity="0.3" className="floating" style={{animationDelay: '1s'}}/>
                  <circle cx="320" cy="280" r="25" fill="#F59E0B" opacity="0.3" className="floating" style={{animationDelay: '2s'}}/>
                  <path d="M 150,120 Q 140,110 130,120 Q 120,130 130,140 L 150,160 L 170,140 Q 180,130 170,120 Q 160,110 150,120 Z" fill="#FF6B9D" opacity="0.6"/>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#FFB4D6" stopOpacity="0.4"/>
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 lg:left-8 glass-card p-4 lg:p-6 rounded-3xl shadow-2xl max-w-[200px] sm:max-w-xs">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-glow-pink">
                  <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-current" />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl font-bold text-textPrimary font-poppins">100+</p>
                  <p className="text-xs lg:text-sm text-textSecondary font-inter">Mame fericite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
