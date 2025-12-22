import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[color:var(--bg)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex flex-col leading-tight">
          <span className="font-heading text-lg font-semibold text-[color:var(--text)]">
            {siteConfig.brandShort}
          </span>
          <span className="text-xs text-[color:var(--muted)]">
            {siteConfig.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[color:var(--text)] md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[color:var(--secondary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex rounded-full border border-[color:var(--secondary)] px-4 py-2 text-xs font-semibold text-[color:var(--secondary)] md:hidden"
          >
            Programeaza
          </Link>
          <Link
            href="#contact"
            className="hidden rounded-full bg-[color:var(--primary)] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-[color:var(--primary-dark)] md:inline-flex"
          >
            Programeaza o consultatie
          </Link>
        </div>
      </div>
    </header>
  );
}
