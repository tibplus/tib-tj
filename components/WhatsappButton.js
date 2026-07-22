"use client";

import { waLink } from "@/lib/whatsapp";

// Универсальная кнопка-ссылка на WhatsApp с готовым текстом сообщения.
// className задаёт визуальный стиль (см. globals.css: .btn-primary, .footer-cta, .icon-btn).
export default function WhatsappButton({ text, className, children }) {
  return (
    <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
