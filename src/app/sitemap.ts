import type { MetadataRoute } from 'next'
import { SITE_URL, ROUTES } from '@/lib/site'
import { POSTS } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    return [
        {
            url: SITE_URL,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}${ROUTES.bidangPekerjaan}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}${ROUTES.caraMandiri}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}${ROUTES.blog}`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.8,
        },
        ...POSTS.map((post) => ({
            url: `${SITE_URL}${ROUTES.blog}/${post.slug}`,
            lastModified: new Date(post.updated ?? post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
    ]
}
