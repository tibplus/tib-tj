"use client";

import { useLang } from "@/components/LangProvider";
import { PHONE_NUMBER, waLink } from "@/lib/whatsapp";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const defaultMsg = `${t("msgGreeting")} КТ/МРТ.`;

  return (
    <header className="nav">
      <div className="nav-inner">
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
        <div className="nav-right">
          <a className="nav-phone" href={`tel:${PHONE_NUMBER}`}>
            {PHONE_NUMBER}
          </a>
          <div className="lang-toggle" role="group" aria-label="Забон / Язык">
            <button
              className={`lang-btn ${lang === "ru" ? "active" : ""}`}
              onClick={() => setLang("ru")}
            >
              RU
            </button>
            <button
              className={`lang-btn ${lang === "tg" ? "active" : ""}`}
              onClick={() => setLang("tg")}
            >
              TJ
            </button>
          </div>
          <a
            className="nav-cta"
            href={waLink(defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="nav-cta-dot" aria-hidden="true">
              <span className="nav-cta-dot-ping"></span>
            </span>
            {t("navWhatsapp")}
          </a>
        </div>
      </div>
    </header>
  );
}
