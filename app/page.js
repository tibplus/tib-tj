"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LangProvider";
import { specialties } from "@/lib/data";

export default function Home() {
  const { t, lang } = useLang();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4">
        {/* Hero */}
        <section className="py-16 sm:py-24 text-center">
          <p className="text-brand font-semibold mb-3">{t("tagline")}</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            {t("heroTitle")}
          </h1>
          <p className="max-w-xl mx-auto text-slate-500 mb-8">{t("heroSubtitle")}</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/doctors"
              className="rounded-lg bg-brand px-6 py-3 text-white font-medium hover:bg-brand-dark transition-colors"
            >
              {t("ctaFind")}
            </Link>
            <a href="#how" className="text-slate-600 font-medium hover:text-brand">
              {t("ctaHow")}
            </a>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-12 border-t border-slate-100">
          <h2 className="text-2xl font-bold text-center mb-10">{t("howTitle")}</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              [t("step1Title"), t("step1Text")],
              [t("step2Title"), t("step2Text")],
              [t("step3Title"), t("step3Text")],
            ].map(([title, text], i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 rounded-full bg-brand-light text-brand font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialties */}
        <section className="py-12 border-t border-slate-100">
          <h2 className="text-2xl font-bold text-center mb-10">{t("specialtiesTitle")}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((s) => (
              <Link
                key={s.id}
                href={`/doctors?specialty=${s.id}`}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
              >
                {lang === "tg" ? s.tg : s.ru}
              </Link>
            ))}
          </div>
        </section>

        {/* Neutrality */}
        <section className="py-16 border-t border-slate-100 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t("neutralityTitle")}</h2>
          <p className="text-slate-500">{t("neutralityText")}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
