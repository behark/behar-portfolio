'use client';

import { content } from '@/lib/content';
import Link from 'next/link';

export function Hero() {
    const backgroundImage = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=85';

    return (
        <section className="relative overflow-hidden text-white min-h-[600px] md:min-h-[700px]">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.96), rgba(59, 130, 246, 0.7)), url("${backgroundImage}")`,
                }}
            />
            <div className="absolute inset-0">
                <div className="absolute top-16 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-28 animate-fadeIn">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="heading-xl mb-6 font-display">
                        {content.home.hero.title}
                    </h1>
                    <p className="body-lg mb-8 text-white/85 max-w-3xl mx-auto">
                        {content.home.hero.subtitle}
                    </p>
                    <div className="space-y-3 sm:space-y-0 sm:flex sm:justify-center sm:gap-4">
                        <Link
                            href="/portfolio"
                            className="btn-primary text-lg px-8 py-3"
                        >
                            {content.home.hero.cta}
                        </Link>
                        <Link
                            href="/contact"
                            className="btn-secondary btn-secondary-light text-lg px-8 py-3"
                        >
                            {content.home.hero.ctaSecondary}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
