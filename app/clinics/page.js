"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import { useLang } from "@/components/LangProvider";
import { clinics } from "@/lib/data";

export default function ClinicsPage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{t("clinicsTitle")}</h1>
        <div className="grid sm:grid-cols-2 gap-5">
          {clinics.map((c) => (
            <div key={c.id} className="rounded-xl border border-slate-100 p-5 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{c.name}</h3>
              <p className="text-slate-400 text-xs mb-2">
                {t("city")}: {c.city}
              </p>
              <WhatsappButton phone={c.whatsapp} clinicName={c.name} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
