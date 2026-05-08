'use client';

import { useInView } from 'react-intersection-observer';
import { FiStar, FiZap, FiSmile, FiTarget, FiAward } from 'react-icons/fi';

export function SocialProof() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const badges = [
        { name: 'Projekte të realizuara', icon: FiTarget, count: '200+' },
        { name: 'Vite përvojë', icon: FiZap, count: '5+' },
        { name: 'Klientë të kënaqur', icon: FiSmile, count: '100%' },
        { name: 'Uptime i garantuar', icon: FiStar, count: '99.9%' },
    ];

    const clients = [
        'Hotel Parliament',
        'Kristal Optika',
        'Gelato Cake House',
        'Horse Club Ranch',
        'Fish & Mediterranean House',
        'Mangall Restaurant',
        'Best Western Hotel',
    ];

    return (
        <section ref={ref} className="section-base bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : ''}`}>
                    <h3 className="heading-md text-gray-900 dark:text-white mb-8">
                        Rezultate të dëshmuara
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {badges.map((badge, index) => {
                            const IconComponent = badge.icon;
                            return (
                                <div
                                    key={index}
                                    className={`text-center ${inView ? 'animate-fadeIn' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex justify-center mb-2">
                                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                                    </div>
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                        {badge.count}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                        {badge.name}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={`text-center ${inView ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.4s' }}>
                    <h3 className="heading-md text-gray-900 dark:text-white mb-6">
                        Klientët tanë
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                {client}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`text-center mt-12 ${inView ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: '0.6s' }}>
                    <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
                        <FiAward className="w-6 h-6 text-yellow-500 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            E regjistruar në ARBK — Kod aktiviteti: 62.01, 73.11, 74.10, 63.11
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
