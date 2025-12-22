import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
              Contact si programari
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--text)]">
              Hai sa gasim impreuna varianta potrivita
            </h2>
            <p className="mt-3 text-base text-[color:var(--muted)]">
              Iti raspund in maxim 24 ore. Daca nu stii de unde sa incepi,
              scrie-mi 2-3 randuri despre situatia ta si alegem impreuna cea mai
              potrivita varianta.
            </p>
            <form className="mt-8 grid gap-4 rounded-3xl border border-white/60 bg-white/90 p-6 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-[color:var(--text)]">
                  Nume
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none transition focus:border-[color:var(--secondary)]"
                    placeholder="Numele tau"
                  />
                </label>
                <label className="text-sm text-[color:var(--text)]">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none transition focus:border-[color:var(--secondary)]"
                    placeholder="email@exemplu.ro"
                  />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-[color:var(--text)]">
                  Telefon
                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none transition focus:border-[color:var(--secondary)]"
                    placeholder="07XX XXX XXX"
                  />
                </label>
                <label className="text-sm text-[color:var(--text)]">
                  Serviciu dorit
                  <select
                    name="service"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none transition focus:border-[color:var(--secondary)]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Alege un serviciu
                    </option>
                    {siteConfig.services.map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                    <option value="Nu stiu inca">Nu stiu inca</option>
                  </select>
                </label>
              </div>
              <label className="text-sm text-[color:var(--text)]">
                Mesaj
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm outline-none transition focus:border-[color:var(--secondary)]"
                  placeholder="Scrie pe scurt cu ce te pot ajuta."
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-fit rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-[color:var(--primary-dark)]"
              >
                Programeaza o consultatie
              </button>
            </form>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
                Informatii
              </p>
              <p className="mt-2 text-sm text-[color:var(--text)]">
                {siteConfig.address}
              </p>
              <p className="text-sm text-[color:var(--text)]">
                Telefon: {siteConfig.phone}
              </p>
              <p className="text-sm text-[color:var(--text)]">
                Email: {siteConfig.email}
              </p>
              <p className="text-sm text-[color:var(--text)]">
                Program: {siteConfig.schedule}
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--secondary)]/30 bg-white px-4 py-4 text-sm text-[color:var(--muted)]">
              Poti programa direct o consultatie prin linkul de mai jos, daca
              preferi.
            </div>
            <Link
              href={siteConfig.calendlyLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-[color:var(--secondary)] px-5 py-2 text-sm font-semibold text-[color:var(--secondary)] transition hover:bg-[color:var(--secondary)] hover:text-white"
            >
              Programare online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
