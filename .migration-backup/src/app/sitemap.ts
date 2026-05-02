import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    {
      url: base,
      lastModified: new Date('2026-05-02'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/privacy`,
      lastModified: new Date('2026-05-02'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified: new Date('2026-05-02'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}