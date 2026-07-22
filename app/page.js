"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import BookingForm from "@/components/BookingForm";
import FaqAccordion from "@/components/FaqAccordion";
import { useLang } from "@/components/LangProvider";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <Header />

      <section className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="wrap">
          <div className="hero-inner">
            <div className="eyebrow">{t("heroKicker")}</div>
            <h1>
              {t("heroH1Pre")}
              <em>{t("heroH1Em")}</em>
            </h1>
            <p className="lead">{t("heroLead")}</p>
            <div className="hero-actions">
              <a className="btn-secondary" href="#booking-form">
                {t("heroCtaForm")} ↓
              </a>
              <span className="hero-note">{t("heroNote")}</span>
            </div>
          </div>
          <BookingForm />
        </div>
        <div className="hero-slice">TIB.TJ / NAVIGATION.SERVICE</div>
      </section>

      <div className="trust-strip">
        <div className="wrap">
          <ul>
            {["trust1", "trust2", "trust3", "trust4"].map((k) => (
              <li key={k}>
                <span className="check">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 12l5 5 11-11"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t("stepsEyebrow")}</div>
            <h2>{t("stepsH2")}</h2>
            <p>{t("stepsP")}</p>
          </div>
          <div className="steps">
            <div className="step">
              <span className="icon-blob">
                <svg viewBox="0 0 48 48">
                  <path
                    d="M24 8c9 0 16 6 16 13s-7 13-16 13c-1.7 0-3.3-.2-4.8-.6L11 38l1.5-8.4C9 27 8 23.7 8 21 8 14 15 8 24 8z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="step-tag mono">{t("step1Tag")}</span>
              <h3>{t("step1H3")}</h3>
              <p>{t("step1P")}</p>
            </div>
            <div className="step">
              <span className="icon-blob alt">
                <svg viewBox="0 0 48 48">
                  <path
                    d="M6 24c4-10 8-10 12 0s8 10 12 0 8-10 12 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="step-tag mono">{t("step2Tag")}</span>
              <h3>{t("step2H3")}</h3>
              <p>{t("step2P")}</p>
            </div>
            <div className="step">
              <span className="icon-blob alt2">
                <svg viewBox="0 0 48 48">
                  <path
                    d="M24 6c-10 0-18 7-18 16 0 4 1.6 7.6 4.3 10.4L8 40l8.4-2.7c2.3 1 4.9 1.7 7.6 1.7 10 0 18-7.6 18-17S34 6 24 6z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 24l5 5 11-11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="step-tag mono">{t("step3Tag")}</span>
              <h3>{t("step3H3")}</h3>
              <p>{t("step3P")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band-dark">
        <div className="orb orb-2" style={{ opacity: 0.2 }}></div>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t("whyEyebrow")}</div>
            <h2>{t("whyH2")}</h2>
            <p>{t("whyP")}</p>
          </div>
          <div className="compare">
            <div>
              <span className="label">{t("compareLeftLabel")}</span>
              <ul>
                <li>{t("compareLeft1")}</li>
                <li>{t("compareLeft2")}</li>
                <li>{t("compareLeft3")}</li>
              </ul>
            </div>
            <div className="yes">
              <span className="label">TIB.TJ</span>
              <ul>
                <li>{t("compareRight1")}</li>
                <li>{t("compareRight2")}</li>
                <li>{t("compareRight3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t("modEyebrow")}</div>
            <h2>{t("modH2")}</h2>
            <p>{t("modP")}</p>
          </div>
          <div className="modalities">
            <div className="mod-card">
              <span className="icon-blob">
                <svg viewBox="0 0 48 48">
                  <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.14" />
                  <circle cx="28" cy="20" r="12" fill="currentColor" opacity="0.14" />
                  <circle cx="24" cy="28" r="12" fill="currentColor" opacity="0.14" />
                  <circle cx="24" cy="24" r="5" fill="currentColor" />
                </svg>
              </span>
              <span className="mono">CT</span>
              <h3>{t("ctH3")}</h3>
              <p className="mod-price">{t("ctPrice")}</p>
              <p>{t("ctP")}</p>
            </div>
            <div className="mod-card">
              <span className="icon-blob alt">
                <svg viewBox="0 0 48 48">
                  <ellipse cx="24" cy="24" rx="20" ry="14" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="13"
                    ry="9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    opacity="0.6"
                  />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="6"
                    ry="4.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    opacity="0.35"
                  />
                </svg>
              </span>
              <span className="mono">MRI</span>
              <h3>{t("mriH3")}</h3>
              <p className="mod-price">{t("mriPrice")}</p>
              <p>{t("mriP")}</p>
            </div>
          </div>
          <p className="price-note">{t("priceNote")}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t("faqEyebrow")}</div>
            <h2>{t("faqH2")}</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      <Footer />
      <StickyCta />
    </>
  );
}
