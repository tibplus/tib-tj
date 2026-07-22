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
              <rect x="2.2" y="2.2" width="19.6" height="19.6" rx="6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 7.2v9.6M7.2 12h9.6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
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
          <span className="lang-globe" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.4 2.5 3.8 5.5 3.8 9s-1.4 6.5-3.8 9c-2.4-2.5-3.8-5.5-3.8-9s1.4-6.5 3.8-9z" />
            </svg>
          </span>
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
