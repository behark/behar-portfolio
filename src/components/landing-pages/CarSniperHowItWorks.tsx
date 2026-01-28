'use client';

import { FiSettings, FiSearch, FiBell, FiCheckCircle } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
    {
        number: '1',
        icon: <FiSettings className="w-6 h-6" />,
        title: 'Konfiguro Kërkesat',
        description: 'Përcaktoni markën, modelin, çmimin dhe karakteristikat e makinës që kërkoni.'
    },
    {
        number: '2',
        icon: <FiSearch className="w-6 h-6" />,
        title: 'Monitorim Automatik',
        description: 'Car Sniper skanon automatikisht të gjitha burimet e listave çdo 60 sekonda.'
    },
    {
        number: '3',
        icon: <FiBell className="w-6 h-6" />,
        title: 'Merrni Njoftime',
        description: 'Kur gjeni një përputhje, merrni njoftime në Telegram ose WhatsApp në çast.'
    },
    {
        number: '4',
        icon: <FiCheckCircle className="w-6 h-6" />,
        title: 'Vepro Shpejt',
        description: 'Jeni i pari që e dini, kështu që mund të kontaktoni menjëherë dhe të merrni avantazh.'
    }
];

export function CarSniperHowItWorks() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Si Funksionon?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        E thjeshtë dhe e shpejtë - konfiguroni dhe lejoni Car Sniper të bëjë punën
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                            <div className="relative">
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        {step.number}
                                    </div>
                                    <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 dark:bg-blue-700 transform -translate-y-1/2">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-blue-300 dark:border-l-blue-700 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
