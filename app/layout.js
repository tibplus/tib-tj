import "./globals.css";
import { LangProvider } from "@/components/LangProvider";

// Шрифт подключаем через <link> (runtime), а не через next/font/google —
// так сборка проекта не зависит от доступа к fonts.googleapis.com в момент
// билда (важно для окружений с ограниченным сетевым доступом, например CI).

export const metadata = {
  title: "TIB.TJ — Navigatsiya. Ба духтур ва диагностика дуруст",
  description:
    "TIB.TJ — мустақил хизмати навигатсияи ташхис: пайдо кардани духтур ва клиникаи дурусти ба шумо лозим дар Тоҷикистон.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="font-sans bg-white text-slate-800 antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
