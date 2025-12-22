import { siteConfig } from "@/config/siteConfig";

export function Problems() {
  return (
    <section id="probleme" className="bg-white/70 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
            Pentru cine sunt
          </p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--text)]">
            Problemele pe care le rezolv impreuna cu tine
          </h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">
            E normal sa nu ai timp si sa te simti coplesita. Incepem cu ce se
            poate, nu cu ce ar trebui.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-3xl border border-white/70 bg-[color:var(--bg)] px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-heading text-lg font-semibold text-[color:var(--text)]">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
