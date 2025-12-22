import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function WhatsAppButton() {
  return (
    <Link
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-white"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.4 0 .03 5.37.03 11.98c0 2.11.55 4.17 1.6 5.98L0 24l6.25-1.63a11.93 11.93 0 0 0 5.76 1.46h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.48-8.37Zm-8.5 18.32h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.87 9.87 0 0 1-1.53-5.24c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.9 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.45-7.44c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.89 1.23 3.1.15.2 2.14 3.28 5.2 4.6.73.31 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 rounded-full bg-black px-3 py-1 text-xs text-white shadow-md group-hover:block">
        Raspundem in max. 30 minute
      </span>
    </Link>
  );
}
