"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { useLang } from "@/components/LangProvider";

// Страница-заглушка "О нас". Реальный текст пользователь допишет позже сам —
// через GitHub достаточно отредактировать этот файл (или добавить свои поля
// в lib/i18n.js под ключами aboutTitle/aboutPlaceholder).
export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <Header />
      <section className="wrap legal-page">
        <h1>{t("aboutTitle")}</h1>
        <p>{t("aboutPlaceholder")}</p>
      </section>
      <Footer />
      <StickyCta />
    </>
  );
}
