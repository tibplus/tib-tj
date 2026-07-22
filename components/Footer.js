"use client";

import { useLang } from "@/components/LangProvider";
import WhatsappButton from "@/components/WhatsappButton";
import { PHONE_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  const { t } = useLang();
  const defaultMsg = `${t("msgGreeting")} КТ/МРТ.`;

  return (
    <footer>
      <div className="wrap footer-inner">
        <div>
          <div className="logo">
            <span className="logo-mark">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <g className="orbit-dot">
                  <circle cx="15" cy="9" r="2.4" fill="currentColor" />
                </g>
              </svg>
            </span>
            <span className="logo-text">
              tib<span className="dot">.</span>tj
            </span>
          </div>
          <p>{t("footerP")}</p>
          <ul className="footer-contacts">
            <li>{t("footerHours")}</li>
            <li>{t("footerAddress")}</li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
          <WhatsappButton text={defaultMsg} className="footer-cta">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.4 14.2c-.2.6-1.4 1.2-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.2.3 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 2.9 1.9.3.1.5.1.7-.1.2-.3 1-1.1 1.2-1.5.2-.3.5-.4.8-.2l2.1 1c.3.1.5.2.6.4.1.2.1.7-.1 1.2z" />
            </svg>
            WhatsApp: +992 78 888 0303 →
          </WhatsappButton>
          <a className="footer-cta" href={`tel:${PHONE_NUMBER}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4.9c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
            </svg>
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </footer>
  );
}
