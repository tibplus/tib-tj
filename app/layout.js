import "./globals.css";
import { LangProvider } from "@/components/LangProvider";

// Шрифт подключаем через <link> (runtime), а не через next/font/google —
// так сборка проекта не зависит от доступа к fonts.googleapis.com в момент
// билда (важно для окружений с ограниченным сетевым доступом, например CI).

export const metadata = {
  title: "Запись на КТ и МРТ в Душанбе — TIB.TJ",
  description:
    "Бесплатно подберём ближайшее время для КТ и МРТ в клиниках Душанбе. Запись через WhatsApp. Быстро, удобно и без лишних звонков.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
