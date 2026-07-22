"use client";

import { useLang } from "@/components/LangProvider";

// Формирует ссылку wa.me с предзаполненным сообщением — это основной канал
// конверсии проекта (см. философию TIB.TJ: без формы записи, сразу в WhatsApp).
export default function WhatsappButton({ phone, doctorName, specialtyName, clinicName, className }) {
  const { t, lang } = useLang();

  const messages = {
    ru: `Здравствуйте! Я нашёл(ла) вас через TIB.TJ.${doctorName ? ` Хочу записаться к ${doctorName}` : ""}${specialtyName ? ` (${specialtyName})` : ""}${clinicName ? `, ${clinicName}` : ""}.`,
    tg: `Салом! Ман шуморо тавассути TIB.TJ ёфтам.${doctorName ? ` Мехоҳам ба ${doctorName}` : ""}${specialtyName ? ` (${specialtyName})` : ""}${clinicName ? `, ${clinicName}` : ""} сабти ном шавам.`,
  };

  const text = encodeURIComponent(messages[lang] ?? messages.ru);
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-white font-medium hover:bg-brand-dark transition-colors"
      }
    >
      {t("bookBtn")}
    </a>
  );
}
