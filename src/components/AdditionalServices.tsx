'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { FiCode, FiTrendingUp, FiSearch, FiBarChart2 } from 'react-icons/fi';
import Link from 'next/link';

interface Service {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    category: string;
}

const services: Service[] = [
    {
        id: 'car-sniper',
        name: 'Car Sniper',
        description: 'Monitor automatik për makinat e reja. Njoftime në Telegram/WhatsApp.',
        icon: <FiSearch className="w-6 h-6" />,
        link: '/car-sniper',
        category: 'Automation Tool'
    },
    {
        id: 'trading-dashboard',
        name: 'Trading Dashboard',
        description: 'Platform profesionale për trading me indikatorë të avancuar.',
        icon: <FiTrendingUp className="w-6 h-6" />,
        link: '/trading-dashboard',
        category: 'Trading Platform'
    },
    {
        id: 'lead-generator',
        name: 'Lead Generator',
        description: 'Sistem automatik për gjenerimin e lead-eve për biznesin tuaj.',
        icon: <FiCode className="w-6 h-6" />,
        link: '/lead-generator',
        category: 'Marketing Tool'
    },
    {
        id: 'pine-scripts',
        name: 'Pine Scripts',
        description: 'Koleksion i gjerë i indikatorëve TradingView për trading.',
        icon: <FiBarChart2 className="w-6 h-6" />,
        link: '/pine-scripts',
        category: 'Trading Tools'
    }
];

export function AdditionalServices() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Mjete & Aplikacione Shtesë
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Përveç web design-it, ofrojmë edhe mjete profesionale që mund t&apos;i ndihmojnë biznesin tuaj të rritet.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                            <Link
                                href={service.link}
                                className="block bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                            >
                                <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                    {service.category}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {service.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    {service.description}
                                </p>
                                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                                    Mëso më shumë →
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Kërkoni diçka tjetër? Ne krijojmë aplikacione të personalizuara për biznesin tuaj.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                    >
                        Kontaktoni për Konsulencë
                    </Link>
                </div>
            </div>
        </section>
    );
}
