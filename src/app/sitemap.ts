import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.autoalarmy-trencin.sk';

const ROUTES: Array<{
  path: string;
  changeFrequency: 'weekly' | 'monthly';
  priority: number;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/sofistikovane-zabezpecenie', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/pasivny-monitoring', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/parkovacie-senzory', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/kontakt', changeFrequency: 'monthly', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
