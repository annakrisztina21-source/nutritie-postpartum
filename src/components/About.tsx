import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export function About() {
  return (
    <section id="despre" className="bg-white/70 py-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[color:var(--accent)]/50 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-lg">
            <Image
              src="/images/about-nutritionist.jpg"
              alt="Nutritionist postpartum"
              width={520}
              height={600}
              className="h-full w-full rounded-[28px] object-cover"
            />
            <p className="mt-3 text-xs text-[color:var(--muted)]">
              Inlocuieste aceasta imagine cu o fotografie reala:
              /public/images/about-nutritionist.jpg
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
            Despre mine
          </p>
          <h2 className="font-heading text-3xl font-semibold text-[color:var(--text)]">
            {siteConfig.about.name}
          </h2>
          <p className="text-base text-[color:var(--muted)]">
            {siteConfig.about.text}
          </p>
          <div className="grid gap-3 rounded-3xl border border-white/60 bg-white/80 p-5 text-sm text-[color:var(--text)] shadow-sm">
            <div>
              <span className="font-semibold">Experienta: </span>
              {siteConfig.about.experience}
            </div>
            <div>
              <span className="font-semibold">Studii/Certificari: </span>
              {siteConfig.about.studies}
            </div>
            <div>
              <span className="font-semibold">Specializari: </span>
              {siteConfig.about.specializations}
            </div>
            <div>
              <span className="font-semibold">Abordare: </span>
              {siteConfig.about.approach}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
