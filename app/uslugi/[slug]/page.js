import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import { seoPages, getSeoPage } from "@/lib/seoPages";
import { waLink } from "@/lib/whatsapp";

// Один динамический роут на все 20 SEO-страниц (см. lib/seoPages.js).
// Чтобы отредактировать текст любой страницы или добавить новую — правь только
// lib/seoPages.js, этот файл менять не нужно.
//
// Важно: сама статья ниже всегда на русском (большинство поисковых запросов
// по КТ/МРТ в Таджикистане — на русском), а шапка/подвал остаются
// двуязычными, как на всём остальном сайте.

export function generateStaticParams() {
  return seoPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const page = getSeoPage(params.slug);
  if (!page) return {};
  return {
    title: `${page.title} — TIB.TJ`,
    description: page.description,
  };
}

export default function SeoPage({ params }) {
  const page = getSeoPage(params.slug);
  if (!page) return notFound();

  const message = `Здравствуйте! Хочу записаться: ${page.h1}.`;
  const related = seoPages.filter((p) => p.slug !== page.slug).slice(0, 4);

  return (
    <>
      <Header />
      <section className="wrap legal-page">
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>
        <a
          className="btn-primary"
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "24px" }}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.4 14.2c-.2.6-1.4 1.2-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.5l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.2.3 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 2.9 1.9.3.1.5.1.7-.1.2-.3 1-1.1 1.2-1.5.2-.3.5-.4.8-.2l2.1 1c.3.1.5.2.6.4.1.2.1.7-.1 1.2z" />
          </svg>
          <span>Написать в WhatsApp</span> →
        </a>

        <div style={{ marginTop: "56px" }}>
          <span className="booking-label">Похожие темы</span>
          <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {related.map((p) => (
              <li key={p.slug}>
                <a className="footer-link" href={`/uslugi/${p.slug}`}>{p.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
      <StickyCta />
    </>
  );
}
