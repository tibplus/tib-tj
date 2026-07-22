"use client";

import { useState } from "react";
import { useLang } from "@/components/LangProvider";

export default function FaqAccordion() {
  const { t } = useLang();
  const [open, setOpen] = useState(null);

  const items = [
    ["faqQ1", "faqA1"],
    ["faqQ2", "faqA2"],
    ["faqQ3", "faqA3"],
    ["faqQ4", "faqA4"],
  ];

  return (
    <div className="faq" style={{ marginTop: "36px" }}>
      {items.map(([qKey, aKey], i) => {
        const isOpen = open === i;
        return (
          <div className="faq-item" key={qKey} data-open={isOpen ? "true" : "false"}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{t(qKey)}</span>
              <span className="plus">+</span>
            </button>
            <div className="faq-a" style={{ maxHeight: isOpen ? "300px" : "0px" }}>
              <p>{t(aKey)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
