import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ??
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://yourdomain.com');

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/admin/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
