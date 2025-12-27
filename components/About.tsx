'use client';

import { siteConfig } from '@/lib/siteConfig';

export default function About() {
  return (
    <section id="despre" className="section-padding section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image container */}
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 to-purple-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-elegant">
                      <span className="text-5xl">👩‍⚕️</span>
                    </div>
                    <p className="text-[rgb(115,115,115)] text-sm">
                      Adaugă fotografia ta profesională
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-rose-200 -z-10"></div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-elegant">
                <div className="text-3xl font-medium text-[rgb(30,30,32)] mb-1">
                  {siteConfig.about.experience}
                </div>
                <div className="text-sm text-[rgb(115,115,115)]">experiență</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="badge-elegant mb-6 inline-block">Despre mine</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[rgb(30,30,32)] mb-6">
              Bine ai venit
            </h2>

            <div className="accent-line-h mb-8"></div>

            <p className="text-lg text-[rgb(115,115,115)] leading-relaxed mb-8">
              {siteConfig.about.text}
            </p>

            {/* Education */}
            <div className="mb-8">
              <h4 className="text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-3">
                Studii
              </h4>
              <p className="text-[rgb(115,115,115)]">{siteConfig.about.education}</p>
            </div>

            {/* Specializations */}
            <div className="mb-8">
              <h4 className="text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-4">
                Specializări
              </h4>
              <div className="flex flex-wrap gap-3">
                {siteConfig.about.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-sm text-[rgb(115,115,115)] border border-black/5"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="border-l-2 border-rose-300 pl-6">
              <h4 className="text-sm font-medium tracking-widest uppercase text-[rgb(30,30,32)] mb-3">
                Abordarea mea
              </h4>
              <p className="text-[rgb(115,115,115)] italic leading-relaxed">
                {siteConfig.about.approach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
