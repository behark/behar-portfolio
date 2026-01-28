'use client';

import { FiUsers, FiMail, FiBarChart2, FiZap, FiShield, FiRefreshCw } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const features = [
    {
        icon: <FiUsers className="w-8 h-8" />,
        title: 'Gjenerim Automatik',
        description: 'Sistemi skanon automatikisht burime të ndryshme dhe gjeneron lead-e të cilësisë së lartë për biznesin tuaj.'
    },
    {
        icon: <FiMail className="w-8 h-8" />,
        title: 'Email Automation',
        description: 'Dërgoni email-e automatike për lead-et e reja, follow-up dhe nurturing për rritjen e konvertimit.'
    },
    {
        icon: <FiBarChart2 className="w-8 h-8" />,
        title: 'Analytics Dashboard',
        description: 'Ndjekni performancën me raporte të detajuara, konvertime dhe ROI për çdo kampanjë.'
    },
    {
        icon: <FiZap className="w-8 h-8" />,
        title: 'Integrim CRM',
        description: 'Integrohuni lehtësisht me CRM-et tuaja ekzistuese për menaxhim të plotë të lead-eve.'
    },
    {
        icon: <FiShield className="w-8 h-8" />,
        title: 'Siguri e Lartë',
        description: 'Të dhënat tuaja dhe të klientëve janë të sigurta dhe të enkriptuara me standarde të larta sigurie.'
    },
    {
        icon: <FiRefreshCw className="w-8 h-8" />,
        title: 'Përditësime Live',
        description: 'Lead-et e reja arrijnë në kohë reale, duke ju dhënë avantazh në konkurrencë.'
    }
];

export function LeadGeneratorFeatures() {
    return (
        <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Pse Lead Generator?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Automatizoni procesin e gjenerimit të lead-eve dhe rritni biznesin tuaj pa humbur kohë
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
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
