'use client';

import { FiCode, FiTrendingUp, FiShield, FiRefreshCw, FiZap, FiCheckCircle } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const features = [
    {
        icon: <FiCode className="w-8 h-8" />,
        title: '50+ Indikatorë',
        description: 'Koleksion i gjerë i indikatorëve profesionale përfshirë RSI, MACD, Bollinger Bands, dhe shumë të tjerë.'
    },
    {
        icon: <FiTrendingUp className="w-8 h-8" />,
        title: 'Strategji Trading',
        description: 'Strategji të testuara dhe të optimizuara për performancë maksimale në tregje të ndryshme.'
    },
    {
        icon: <FiRefreshCw className="w-8 h-8" />,
        title: 'Përditësime',
        description: 'Përditësime të vazhdueshme me indikatorë të rinj dhe përmirësime të strategjive ekzistuese.'
    },
    {
        icon: <FiShield className="w-8 h-8" />,
        title: 'Mbështetje Teknike',
        description: 'Mbështetje teknike e plotë për instalim, konfigurim dhe optimizim të indikatorëve.'
    },
    {
        icon: <FiZap className="w-8 h-8" />,
        title: 'Lehtë për t\'u Përdorur',
        description: 'Instalim i thjeshtë në TradingView me udhëzime të detajuara për çdo indikator.'
    },
    {
        icon: <FiCheckCircle className="w-8 h-8" />,
        title: 'Testuar dhe i Sigurt',
        description: 'Të gjitha indikatorët janë testuar dhe të sigurta për përdorim në trading real.'
    }
];

export function PineScriptsFeatures() {
    return (
        <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Çfarë Përfshin?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Koleksion i plotë i indikatorëve dhe strategjive për trading profesional
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-lg flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
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
