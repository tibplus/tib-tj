"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";

export default function Header() {
  const { t, lang, setLang } = useLang();

  return (
    <header className="border-b border-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand">
          {t("brand")}
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/doctors" className="text-sm font-medium text-slate-600 hover:text-brand">
            {t("doctorsTitle")}
          </Link>
          <Link href="/clinics" className="text-sm font-medium text-slate-600 hover:text-brand">
            {t("clinicsTitle")}
          </Link>
          <button
            onClick={() => setLang(lang === "ru" ? "tg" : "ru")}
            className="text-sm font-semibold border border-slate-200 rounded-full px-3 py-1 hover:border-brand hover:text-brand transition-colors"
          >
            {t("langSwitch")}
          </button>
        </nav>
      </div>
    </header>
  );
}
