import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Pricing() {
  return (
    <section id="preturi" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
            Preturi orientative
          </p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--text)]">
            Alege nivelul de sprijin care ti se potriveste
          </h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">
            Putem ajusta impreuna pachetul in functie de nevoile tale reale.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.pricing.map((plan) => (
            <div
              key={plan.name}
              className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-[color:var(--text)]">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {plan.description}
              </p>
              <p className="mt-4 text-2xl font-semibold text-[color:var(--secondary)]">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--text)]">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="mt-6 inline-flex w-fit rounded-full border border-[color:var(--secondary)] px-5 py-2 text-sm font-semibold text-[color:var(--secondary)] transition hover:bg-[color:var(--secondary)] hover:text-white"
              >
                Programeaza o consultatie
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
