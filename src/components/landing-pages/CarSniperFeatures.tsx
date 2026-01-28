'use client';

import { FiSearch, FiBell, FiTrendingDown, FiSmartphone, FiShield, FiZap } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const features = [
    {
        icon: <FiSearch className="w-8 h-8" />,
        title: 'Monitorim Multi-Burim',
        description: 'Kontrollon automatikisht Nettiauto, Merrjep, Huutokaupat dhe Facebook Marketplace për listat e reja.'
    },
    {
        icon: <FiBell className="w-8 h-8" />,
        title: 'Njoftime Instant',
        description: 'Merrni njoftime në Telegram dhe WhatsApp sapo gjeni makinën që përputhet me kërkesat tuaja.'
    },
    {
        icon: <FiTrendingDown className="w-8 h-8" />,
        title: 'Zbulim i Çmimeve',
        description: 'Njoftohemi automatikisht kur çmimi i një makine që ju intereson bie, kështu që mund të kurseni para.'
    },
    {
        icon: <FiSmartphone className="w-8 h-8" />,
        title: 'Dashboard Mobile',
        description: 'Monitoroni të gjitha listat dhe njoftimet tuaja nga çdo pajisje, në çdo kohë.'
    },
    {
        icon: <FiShield className="w-8 h-8" />,
        title: 'AI-Powered Parsing',
        description: 'Teknologji AI për të kuptuar automatikisht detajet e makinave edhe nga titulli i listës.'
    },
    {
        icon: <FiZap className="w-8 h-8" />,
        title: 'Reagim i Shpejtë',
        description: 'Jeni të parët që e dini për listat e reja, duke ju dhënë avantazh në negociata.'
    }
];

export function CarSniperFeatures() {
    return (
        <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Pse Car Sniper?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Teknologji e avancuar që ju ndihmon të gjeni makinën e përsosur pa humbur kohë
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
