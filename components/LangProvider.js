"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { t as translate } from "@/lib/i18n";

const LangContext = createContext({ lang: "ru", setLang: () => {}, t: (k) => k });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("tibtj_lang") : null;
    if (saved === "ru" || saved === "tg") setLang(saved);
  }, []);

  function changeLang(next) {
    setLang(next);
    if (typeof window !== "undefined") window.localStorage.setItem("tibtj_lang", next);
  }

  const value = {
    lang,
    setLang: changeLang,
    t: (key) => translate(lang, key),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
