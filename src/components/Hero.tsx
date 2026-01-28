'use client';

import { content } from '@/lib/content';
import Link from 'next/link';

export function Hero() {
    // Using optimized Unsplash image directly
    // To use local image later: add hero-background.jpg to public/images/hero/ and update this
    const backgroundImage = 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=85';

    return (
        <section className="relative overflow-hidden text-white min-h-[600px] md:min-h-[700px]">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.96), rgba(59, 130, 246, 0.7)), url("${backgroundImage}")`,
                }}
            >
                {/* Loading placeholder */}
                <div className="absolute inset-0 bg-gray-900 animate-pulse" />
            </div>
            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center">
                    <div className="animate-slideInLeft">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display leading-tight">
                            {content.home.hero.title}
                        </h1>
                    </div>
                    <div className="animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                        <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
                            {content.home.hero.subtitle}
                        </p>
                    </div>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <Link
                            href="/portfolio"
                            className="btn-primary inline-block text-lg px-8 py-4 animate-pulse-slow active:scale-95 relative overflow-hidden"
                        >
                            <span className="relative z-10">{content.home.hero.cta}</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden"
                        >
                            <span className="relative z-10">{content.home.hero.ctaSecondary}</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a 
                    href="#benefits" 
                    aria-label="Scroll to next section"
                    className="inline-block"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
