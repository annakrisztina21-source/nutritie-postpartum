import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Services() {
  return (
    <section id="servicii" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
              Servicii
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--text)]">
              Solutii simple, personalizate, pentru ritmul tau
            </h2>
            <p className="mt-3 text-base text-[color:var(--muted)]">
              Alegem impreuna varianta potrivita, in functie de cat sprijin iti
              doresti si ce ti se potriveste acum.
            </p>
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-[color:var(--primary-dark)]"
          >
            Programeaza o consultatie
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div
              key={service.name}
              className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-heading text-xl font-semibold text-[color:var(--text)]">
                {service.name}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {service.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="rounded-full bg-[color:var(--accent)]/25 px-3 py-1 text-[color:var(--text)]">
                  {service.duration}
                </span>
                <span className="font-semibold text-[color:var(--secondary)]">
                  {service.price}
                </span>
              </div>
              <div className="mt-6">
                <Link
                  href={service.ctaHref}
                  className="inline-flex rounded-full border border-[color:var(--secondary)] px-5 py-2 text-sm font-semibold text-[color:var(--secondary)] transition hover:bg-[color:var(--secondary)] hover:text-white"
                >
                  {service.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-[color:var(--muted)]">
          Recomandarile sunt personalizate si orientate spre sanatate si
          sustenabilitate. Nu promit rezultate garantate, ci un proces clar si
          realist.
        </p>
      </div>
    </section>
  );
}
