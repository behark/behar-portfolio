import { content } from '@/lib/content';
import Link from 'next/link';

export function VideoHero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    {/* Fallback to gradient background if video doesn't load */}
                </video>
                {/* Gradient Overlay */}
                <div className="video-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="animate-fadeInUp">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
                        {content.home.hero.title}
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
                        {content.home.hero.subtitle}
                    </p>
                    <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <Link
                            href="/portfolio"
                            className="btn-primary inline-block text-lg px-8 py-4 animate-pulse-slow"
                        >
                            {content.home.hero.cta}
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
                        >
                            Na Kontaktoni
                        </Link>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
