"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { useLang } from "@/components/LangProvider";

// Заглушка. Пользователь заменит текст на реальное согласие на обработку
// персональных данных позже — достаточно отредактировать этот файл через GitHub.
export default function ConsentPage() {
  const { t } = useLang();
  return (
    <>
      <Header />
      <section className="wrap legal-page">
        <h1>{t("consentPageTitle")}</h1>
        <p>{t("legalPlaceholder")}</p>
      </section>
      <Footer />
      <StickyCta />
    </>
  );
}
