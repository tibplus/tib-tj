"use client";

import { useLang } from "@/components/LangProvider";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 mt-16">
      <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <span>© {year} TIB.TJ. {t("footerRights")}</span>
        <a
          href="https://wa.me/992000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand font-medium hover:text-brand-dark"
        >
          {t("footerContact")}
        </a>
      </div>
    </footer>
  );
}
