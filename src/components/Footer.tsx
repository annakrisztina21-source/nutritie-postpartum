import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-[color:var(--text)]">
            {siteConfig.brandShort}
          </p>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Ghidare blanda si structurata pentru alimentatie in postpartum,
            adaptata vietii reale.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[color:var(--text)]">
          <Link href="#servicii" className="hover:text-[color:var(--secondary)]">
            Servicii
          </Link>
          <Link href="#despre" className="hover:text-[color:var(--secondary)]">
            Despre
          </Link>
          <Link href="#contact" className="hover:text-[color:var(--secondary)]">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-2 text-sm text-[color:var(--text)]">
          <div className="flex gap-3">
            <Link
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[color:var(--secondary)]"
            >
              Instagram
            </Link>
            <Link
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[color:var(--secondary)]"
            >
              Facebook
            </Link>
          </div>
          <div className="text-xs text-[color:var(--muted)]">
            Politica de confidentialitate - Termeni si conditii - GDPR
          </div>
          <div className="text-xs text-[color:var(--muted)]">
            (c) 2025 {siteConfig.brandShort}. Toate drepturile rezervate.
          </div>
        </div>
      </div>
    </footer>
  );
}
