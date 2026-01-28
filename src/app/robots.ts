import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    // For static export, use environment variable or fallback
    // Make sure to set NEXT_PUBLIC_SITE_URL in your .env.local or build environment
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                    'https://yourdomain.com';

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
