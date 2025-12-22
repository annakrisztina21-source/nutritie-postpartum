import { siteConfig } from "@/config/siteConfig";

export function Process() {
  return (
    <section id="proces" className="py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
            Cum lucram impreuna
          </p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--text)]">
            Proces clar, adaptat vietii tale de mama
          </h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">
            Poti veni si doar cu "nu mai stiu ce sa mananc". E suficient ca sa
            incepem.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--secondary)] text-white">
                  {index + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold text-[color:var(--text)]">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-[color:var(--muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
