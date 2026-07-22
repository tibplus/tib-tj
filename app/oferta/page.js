"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { useLang } from "@/components/LangProvider";

// Заглушка. Пользователь заменит текст на реальную публичную оферту позже —
// достаточно отредактировать этот файл через GitHub.
export default function OfertaPage() {
  const { t } = useLang();
  return (
    <>
      <Header />
      <section className="wrap legal-page">
        <h1>{t("ofertaTitle")}</h1>
        <p>{t("legalPlaceholder")}</p>
      </section>
      <Footer />
      <StickyCta />
    </>
  );
}
