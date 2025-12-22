import { siteConfig } from "@/config/siteConfig";

export function FAQ() {
  return (
    <section id="faq" className="bg-white/70 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--secondary)]">
            FAQ
          </p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-[color:var(--text)]">
            Intrebari frecvente
          </h2>
          <p className="mt-3 text-base text-[color:var(--muted)]">
            Raspunsuri simple, ca sa stii la ce sa te astepti.
          </p>
        </div>
        <div className="space-y-4">
          {siteConfig.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-3xl border border-white/70 bg-white/90 px-6 py-4 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-[color:var(--text)]">
                {item.question}
                <span className="ml-4 text-lg text-[color:var(--secondary)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
