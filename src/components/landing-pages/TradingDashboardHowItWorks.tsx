'use client';

import { FiLogIn, FiSettings, FiBarChart2, FiCheckCircle } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
    {
        number: '1',
        icon: <FiLogIn className="w-6 h-6" />,
        title: 'Regjistrohu',
        description: 'Krijoni llogarinë tuaj në pak minuta. Nuk kërkohet verifikim i komplikuar.'
    },
    {
        number: '2',
        icon: <FiSettings className="w-6 h-6" />,
        title: 'Konfiguro Dashboard',
        description: 'Zgjidhni indikatorët dhe çiftet që dëshironi të monitoroni.'
    },
    {
        number: '3',
        icon: <FiBarChart2 className="w-6 h-6" />,
        title: 'Analizo dhe Tregu',
        description: 'Përdorni indikatorët dhe analizat për të marrë vendime të informuara.'
    },
    {
        number: '4',
        icon: <FiCheckCircle className="w-6 h-6" />,
        title: 'Merr Rezultate',
        description: 'Ndjekni performancën dhe optimizoni strategjitë tuaja me kohë.'
    }
];

export function TradingDashboardHowItWorks() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Si Funksionon?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Platform e thjeshtë dhe e fuqishme për trading profesional
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                            <div className="relative">
                                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 dark:bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        {step.number}
                                    </div>
                                    <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
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
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-green-300 dark:bg-green-700 transform -translate-y-1/2">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-green-300 dark:border-l-green-700 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
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
