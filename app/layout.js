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
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='9' fill='none' stroke='%233FCFC0' stroke-width='1.8'/%3E%3Ccircle cx='15' cy='9' r='2.6' fill='%233FCFC0'/%3E%3C/svg%3E"
        />
        <link
          rel="apple-touch-icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='6' fill='%230A1E2E'/%3E%3Ccircle cx='12' cy='12' r='7.5' fill='none' stroke='%233FCFC0' stroke-width='1.8'/%3E%3Ccircle cx='14.5' cy='9.5' r='2.2' fill='%233FCFC0'/%3E%3C/svg%3E"
        />
        <meta name="theme-color" content="#0A1E2E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
