import { content } from '@/lib/content';
import Script from 'next/script';

export function StructuredData() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
    
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Behar Kabashi - Web Design Profesional",
        "description": "Web design profesional për bizneset lokale në Kosovë. Website-a moderne që sjellin rezultata reale.",
        "url": siteUrl,
        "telephone": content.contact.info.phone,
        "email": content.contact.info.email,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "XK",
            "addressLocality": content.contact.info.location
        },
        "areaServed": {
            "@type": "Country",
            "name": "Kosovo"
        },
        "priceRange": "€250-€1000",
        "image": `${siteUrl}/images/og/og-image.jpg`,
        "sameAs": []
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Web Design",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Behar Kabashi - Web Design Profesional"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Kosovo"
        },
        "description": "Web design profesional për bizneset lokale. Website-a moderne që sjellin rezultata reale.",
        "offers": [
            {
                "@type": "Offer",
                "name": "STARTER",
                "price": "250",
                "priceCurrency": "EUR"
            },
            {
                "@type": "Offer",
                "name": "PROFESSIONAL",
                "price": "500",
                "priceCurrency": "EUR"
            },
            {
                "@type": "Offer",
                "name": "PREMIUM",
                "price": "1000",
                "priceCurrency": "EUR"
            }
        ]
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    );
}
