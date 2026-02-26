import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lux-charter.vercel.app';

  const locales = ['en', 'it'];
  const pages = ['', '/privacy', '/terms'];

  const urls: MetadataRoute.Sitemap = [];

  // Generate URLs for all locale/page combinations
  for (const locale of locales) {
    for (const page of pages) {
      urls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.5,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            it: `${baseUrl}/it${page}`,
          },
        },
      });
    }
  }

  return urls;
}
