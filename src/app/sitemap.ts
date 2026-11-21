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
  { path: '/certifikaty', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/z-praxe', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/kontakt', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/zabezpecenie-objektov', changeFrequency: 'monthly', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path || "/"}`,
    changeFrequency,
    priority,
  }));
}
