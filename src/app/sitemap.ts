import type { MetadataRoute } from 'next'
import { SITE_URL, ROUTES } from '@/lib/site'
import { POSTS } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    return [
        { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE_URL}${ROUTES.caraMandiri}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}${ROUTES.bidangPekerjaan}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}${ROUTES.blog}`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
        ...POSTS.map((p) => ({
            url: `${SITE_URL}${ROUTES.blog}/${p.slug}`,
            lastModified: new Date(p.updated ?? p.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ]
}
