"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/components/LangProvider";
import { areasByModality, areaLabel } from "@/lib/examinations";
import { waLink } from "@/lib/whatsapp";

// Анкета перед WhatsApp: пациент отвечает на 3-4 коротких вопроса, и мы сами
// собираем осмысленное сообщение — вместо чистого чата, куда человек не знает,
// что писать первым.
export default function BookingForm() {
  const { t, lang } = useLang();
  const [modality, setModality] = useState(""); // "kt" | "mrt"
  const [area, setArea] = useState("");
  const [referral, setReferral] = useState(""); // "yes" | "no"
  const [time, setTime] = useState("");

  const areas = modality ? areasByModality[modality] ?? [] : [];

  function pickModality(next) {
    setModality(next);
    setArea(""); // сбрасываем область — список зависит от вида исследования
  }

  const message = useMemo(() => {
    const modalityLabel = modality === "kt" ? t("optKt") : modality === "mrt" ? t("optMrt") : "";
    const areaText = area ? areaLabel(modality, area, lang) : "";
    const referralText =
      referral === "yes" ? t("optYes") : referral === "no" ? t("optNo") : t("msgReferralFallback");
    const timeText = time.trim() || t("msgTimeFallback");

    const lines = [
      `${t("msgGreeting")} ${modalityLabel || "?"}.`,
      "",
      `${t("msgArea")}: ${areaText || "—"}`,
      `${t("msgReferral")}: ${referralText}`,
      `${t("msgTime")}: ${timeText}`,
    ];
    return lines.join("\n");
  }, [modality, area, referral, time, lang, t]);

  const canSend = Boolean(modality && area);

  return (
    <div className="booking-card" id="booking-form">
      <div className="booking-field">
        <span className="booking-label">{t("labelModality")}</span>
        <div className="chips">
          {["kt", "mrt"].map((m) => (
            <button
              key={m}
              type="button"
              className={`chip chip-select ${modality === m ? "chip-active" : ""}`}
              onClick={() => pickModality(m)}
            >
              {m === "kt" ? t("optKt") : t("optMrt")}
            </button>
          ))}
        </div>
      </div>

      {modality && (
        <div className="booking-field">
          <span className="booking-label">{t("labelArea")}</span>
          <div className="chips">
            {areas.map((a) => (
              <button
                key={a.id}
                type="button"
                className={`chip chip-select ${area === a.id ? "chip-active" : ""}`}
                onClick={() => setArea(a.id)}
              >
                {lang === "tg" ? a.tg : a.ru}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="booking-field">
        <span className="booking-label">{t("labelReferral")}</span>
        <div className="chips">
          <button
            type="button"
            className={`chip chip-select ${referral === "yes" ? "chip-active" : ""}`}
            onClick={() => setReferral("yes")}
          >
            {t("optYes")}
          </button>
          <button
            type="button"
            className={`chip chip-select ${referral === "no" ? "chip-active" : ""}`}
            onClick={() => setReferral("no")}
          >
            {t("optNo")}
          </button>
        </div>
      </div>

      <div className="booking-field">
        <label className="booking-label" htmlFor="booking-time">
          {t("labelTime")}
        </label>
        <input
          id="booking-time"
          type="text"
          className="booking-input"
          placeholder={t("timePlaceholder")}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="booking-preview">
        <span className="booking-label">{t("bookingPreviewLabel")}</span>
        <pre className="booking-preview-text">{message}</pre>
      </div>

      {canSend ? (
        <a
          className="btn-primary"
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.4 14.2c-.2.6-1.4 1.2-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.2.3 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 2.9 1.9.3.1.5.1.7-.1.2-.3 1-1.1 1.2-1.5.2-.3.5-.4.8-.2l2.1 1c.3.1.5.2.6.4.1.2.1.7-.1 1.2z" />
          </svg>
          <span>{t("heroCta")}</span> →
        </a>
      ) : (
        <p className="booking-hint">{t("bookingHint")}</p>
      )}
    </div>
  );
}
