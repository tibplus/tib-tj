"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctorsList from "@/components/DoctorsList";
import { useLang } from "@/components/LangProvider";

export default function DoctorsPage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">{t("doctorsTitle")}</h1>
        <p className="text-slate-500 mb-8">{t("doctorsSubtitle")}</p>
        <Suspense fallback={null}>
          <DoctorsList />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
