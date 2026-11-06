import type { MetadataRoute } from 'next'
import { SITE_URL, ROUTES } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()
    return [
        { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
        { url: `${SITE_URL}${ROUTES.caraMandiri}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}${ROUTES.bidangPekerjaan}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}${ROUTES.blog}`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
    ]
}
