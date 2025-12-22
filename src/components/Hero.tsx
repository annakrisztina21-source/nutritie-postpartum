import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-20 pt-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(230,126,95,0.18),_transparent_55%)]" />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 motion-reduce:animate-none md:animate-[fade-up_800ms_ease-out]">
          <p className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--secondary)] shadow-sm">
            {siteConfig.brandName}
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-[color:var(--text)] md:text-5xl">
            Vrei sa slabesti dupa nastere, fara diete drastice si fara
            vinovatie?
          </h1>
          <p className="text-base leading-relaxed text-[color:var(--muted)] md:text-lg">
            Te ajut sa iti refaci echilibrul alimentar in postpartum cu un plan
            simplu, adaptat programului tau de mama (si, daca e cazul,
            alaptarii). Lucram cu pasi mici, clari, ca sa ai mai multa energie,
            sa reduci poftele si sa iti recastigi increderea in corpul tau,
            intr-un ritm realist.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(230,126,95,0.3)] transition hover:translate-y-[-1px] hover:bg-[color:var(--primary-dark)]"
            >
              Programeaza o consultatie
            </Link>
            <Link
              href="#proces"
              className="rounded-full border border-[color:var(--secondary)] px-6 py-3 text-sm font-semibold text-[color:var(--secondary)] transition hover:bg-[color:var(--secondary)] hover:text-white"
            >
              Vezi cum lucrez
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
            {siteConfig.heroBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 rounded-2xl bg-white/80 px-4 py-3 text-sm text-[color:var(--text)] shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative motion-reduce:animate-none md:animate-[float-in_900ms_ease-out]">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[color:var(--accent)]/50 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-[color:var(--secondary)]/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-4 shadow-xl">
            <Image
              src="/images/hero-mom.jpg"
              alt="Mama in perioada postpartum"
              width={520}
              height={620}
              className="h-full w-full rounded-[28px] object-cover"
              priority
            />
            <p className="mt-3 text-xs text-[color:var(--muted)]">
              Inlocuieste aceasta imagine cu o fotografie reala:
              /public/images/hero-mom.jpg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
