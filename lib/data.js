// MVP-данные. Структура специально повторяет будущие таблицы Supabase
// (см. supabase/schema.sql), чтобы позже просто заменить этот файл
// на запрос к базе данных без переделки компонентов.

export const specialties = [
  { id: "cardio", ru: "Кардиолог", tg: "Кардиолог" },
  { id: "neuro", ru: "Невролог", tg: "Невролог" },
  { id: "gastro", ru: "Гастроэнтеролог", tg: "Гастроэнтеролог" },
  { id: "gyneco", ru: "Гинеколог", tg: "Гинеколог" },
  { id: "pediatr", ru: "Педиатр", tg: "Педиатр" },
  { id: "radio", ru: "Диагностика (МРТ/КТ/УЗИ)", tg: "Ташхис (МРТ/КТ/УЗИ)" },
];

export const clinics = [
  {
    id: "clinic-1",
    name: "РКБ «Шифобахш»",
    city: "Душанбе",
    whatsapp: "992000000001",
  },
  {
    id: "clinic-2",
    name: "Медицинский центр (пример партнёра)",
    city: "Душанбе",
    whatsapp: "992000000002",
  },
];

export const doctors = [
  {
    id: "doc-1",
    name: "Др. Азиз Раҳимов",
    specialtyId: "cardio",
    clinicId: "clinic-1",
    city: "Душанбе",
    whatsapp: "992000000001",
  },
  {
    id: "doc-2",
    name: "Др. Нигора Саидова",
    specialtyId: "radio",
    clinicId: "clinic-1",
    city: "Душанбе",
    whatsapp: "992000000001",
  },
  {
    id: "doc-3",
    name: "Др. Фаридун Қосимов",
    specialtyId: "gastro",
    clinicId: "clinic-2",
    city: "Душанбе",
    whatsapp: "992000000002",
  },
  {
    id: "doc-4",
    name: "Др. Мадина Ҳакимова",
    specialtyId: "gyneco",
    clinicId: "clinic-2",
    city: "Душанбе",
    whatsapp: "992000000002",
  },
];

export function specialtyLabel(id, lang) {
  const s = specialties.find((x) => x.id === id);
  if (!s) return id;
  return lang === "tg" ? s.tg : s.ru;
}

export function clinicName(id) {
  return clinics.find((c) => c.id === id)?.name ?? "";
}
