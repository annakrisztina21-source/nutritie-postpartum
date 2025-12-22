import { siteConfig } from "@/config/siteConfig";

export function Testimonials() {
  return (
    <section id="testimoniale" className="bg-white/70 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
            Testimoniale
          </p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--text)]">
            Experiente reale, fara presiune
          </h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">
            Mesajele primite de la mame care au ales sa lucreze bland si
            sustenabil.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/60 bg-white/90 p-6 shadow-sm"
            >
              <p className="text-sm text-[color:var(--text)]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
