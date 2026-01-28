'use client';

import { FiBarChart2, FiBell, FiTrendingUp, FiShield, FiZap, FiActivity } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const features = [
    {
        icon: <FiBarChart2 className="w-8 h-8" />,
        title: 'Indikatorë të Avancuar',
        description: '50+ indikatorë profesionale përfshirë RSI, MACD, Bollinger Bands, dhe shumë të tjerë.'
    },
    {
        icon: <FiActivity className="w-8 h-8" />,
        title: 'Analizë në Kohë Reale',
        description: 'Të dhëna live për të gjitha çiftet kryesore të monedhave dhe aksioneve.'
    },
    {
        icon: <FiBell className="w-8 h-8" />,
        title: 'Sistemi i Alarmeve',
        description: 'Vendosni alarme për çmime, vëllime dhe indikatorë. Merrni njoftime në çast.'
    },
    {
        icon: <FiTrendingUp className="w-8 h-8" />,
        title: 'Backtesting',
        description: 'Testoni strategjitë tuaja me të dhëna historike për të optimizuar performancën.'
    },
    {
        icon: <FiShield className="w-8 h-8" />,
        title: 'Siguri e Lartë',
        description: 'Të dhënat tuaja janë të enkriptuara dhe të sigurta. Asnjë informacion personal nuk ndahet.'
    },
    {
        icon: <FiZap className="w-8 h-8" />,
        title: 'Performance Tracking',
        description: 'Ndjekni performancën tuaj me raporte të detajuara dhe statistika.'
    }
];

export function TradingDashboardFeatures() {
    return (
        <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Karakteristika Kryesore
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Platform e plotë për trading profesional me të gjitha mjetet që ju nevojiten
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
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
