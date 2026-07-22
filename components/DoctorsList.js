"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/components/LangProvider";
import { doctors, specialties } from "@/lib/data";
import DoctorCard from "@/components/DoctorCard";

export default function DoctorsList() {
  const { t, lang } = useLang();
  const searchParams = useSearchParams();
  const initial = searchParams.get("specialty") ?? "all";
  const [filter, setFilter] = useState(initial);

  const filtered = useMemo(
    () => (filter === "all" ? doctors : doctors.filter((d) => d.specialtyId === filter)),
    [filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
            filter === "all" ? "bg-brand text-white border-brand" : "border-slate-200 hover:border-brand"
          }`}
        >
          {t("filterAll")}
        </button>
        {specialties.map((s) => (
          <button
            key={s.id}
            onClick={() => setFilter(s.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
              filter === s.id ? "bg-brand text-white border-brand" : "border-slate-200 hover:border-brand"
            }`}
          >
            {lang === "tg" ? s.tg : s.ru}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-500">{t("noResults")}</p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map((d) => (
            <DoctorCard key={d.id} doctor={d} />
          ))}
        </div>
      )}
    </div>
  );
}
