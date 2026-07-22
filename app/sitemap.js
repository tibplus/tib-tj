import { seoPages } from "@/lib/seoPages";

// Next.js сам рендерит этот файл в /sitemap.xml — руками ничего собирать не
// нужно. При добавлении новой SEO-страницы в lib/seoPages.js она попадёт сюда
// автоматически.
const BASE_URL = "https://tib.tj";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/oferta", "/privacy", "/consent"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.4,
  }));

  const seoRoutes = seoPages.map((p) => ({
    url: `${BASE_URL}/uslugi/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...seoRoutes];
}
