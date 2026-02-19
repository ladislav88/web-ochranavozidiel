import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/sofistikovane-zabezpecenie',
    '/pasivny-monitoring',
    '/parkovacie-senzory',
    '/kontakt',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }));
}
