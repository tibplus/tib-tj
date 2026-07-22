import { redirect } from "next/navigation";

// Next.js рендерит этот файл для любого несуществующего адреса
// (опечатка в URL, старая ссылка, случайный /uslugi/что-то-не-то и т.д.)
// redirect() сразу отправляет на главную вместо стандартной страницы 404.
export default function NotFound() {
  redirect("/");
}
