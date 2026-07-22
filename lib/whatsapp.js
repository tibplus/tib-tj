// Единая точка настройки номера WhatsApp/телефона — меняешь один раз здесь,
// подхватывается везде на сайте.
export const WHATSAPP_NUMBER = "992788880303";
export const PHONE_NUMBER = "+992788880303";

export function waLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
