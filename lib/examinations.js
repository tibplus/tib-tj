// Области обследования для анкеты перед WhatsApp — отдельно для КТ и МРТ,
// т.к. набор направлений разный. Расширяй по мере появления запросов.

export const ctAreas = [
  { id: "head", ru: "головы", tg: "сар" },
  { id: "lungs", ru: "лёгких", tg: "шуш" },
  { id: "spine", ru: "позвоночника", tg: "сутунмуҳра" },
  { id: "joints", ru: "суставов", tg: "буғумҳо" },
  { id: "abdomen", ru: "брюшной полости", tg: "ковокии шикам" },
  { id: "pelvis", ru: "малого таза", tg: "коси хурд" },
];

export const mriAreas = [
  { id: "brain", ru: "головного мозга", tg: "майнаи сар" },
  { id: "spine", ru: "позвоночника", tg: "сутунмуҳра" },
  { id: "knee", ru: "коленного сустава", tg: "буғуми зону" },
  { id: "shoulder", ru: "плечевого сустава", tg: "буғуми китф" },
  { id: "pelvis", ru: "малого таза", tg: "коси хурд" },
  { id: "softtissue", ru: "мягких тканей", tg: "бофтаҳои нарм" },
];

export const areasByModality = { kt: ctAreas, mrt: mriAreas };

export function areaLabel(modality, id, lang) {
  const list = areasByModality[modality] ?? [];
  const item = list.find((a) => a.id === id);
  if (!item) return "";
  return lang === "tg" ? item.tg : item.ru;
}
