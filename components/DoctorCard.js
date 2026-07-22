"use client";

import { useLang } from "@/components/LangProvider";
import { specialtyLabel, clinicName } from "@/lib/data";
import WhatsappButton from "@/components/WhatsappButton";

export default function DoctorCard({ doctor }) {
  const { t, lang } = useLang();
  const spec = specialtyLabel(doctor.specialtyId, lang);
  const clinic = clinicName(doctor.clinicId);

  return (
    <div className="rounded-xl border border-slate-100 p-5 flex flex-col gap-2 hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">{doctor.name}</h3>
      <p className="text-brand font-medium text-sm">{spec}</p>
      <p className="text-slate-500 text-sm">{clinic}</p>
      <p className="text-slate-400 text-xs mb-2">
        {t("city")}: {doctor.city}
      </p>
      <WhatsappButton
        phone={doctor.whatsapp}
        doctorName={doctor.name}
        specialtyName={spec}
        clinicName={clinic}
      />
    </div>
  );
}
