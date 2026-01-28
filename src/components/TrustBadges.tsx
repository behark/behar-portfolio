'use client';

import { FiAward, FiShield, FiClock, FiUsers, FiCheckCircle } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';

const badges = [
    {
        icon: <FiAward className="w-6 h-6" />,
        title: '50+ Projekte',
        description: 'Projekte të suksesshme'
    },
    {
        icon: <FiShield className="w-6 h-6" />,
        title: 'Garancia 30 Ditë',
        description: '100% kënaqësi e garantuar'
    },
    {
        icon: <FiClock className="w-6 h-6" />,
        title: '5-7 Ditë',
        description: 'Dërgim i shpejtë'
    },
    {
        icon: <FiUsers className="w-6 h-6" />,
        title: '50+ Klientë',
        description: 'Biznese të kënaqur'
    },
    {
        icon: <FiCheckCircle className="w-6 h-6" />,
        title: '100% Pronësi',
        description: 'Ju e zotëroni gjithçka'
    }
];

export function TrustBadges() {
    return (
        <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {badges.map((badge, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mb-3">
                                    {badge.icon}
                                </div>
                                <div className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                                    {badge.title}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {badge.description}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
