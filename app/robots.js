// Next.js сам рендерит этот файл в /robots.txt.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tib.tj/sitemap.xml",
  };
}
