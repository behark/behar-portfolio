'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { FiTrendingUp, FiSearch, FiUsers, FiBarChart2, FiZap } from 'react-icons/fi';
import Link from 'next/link';

interface Tool {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    price: string;
    category: 'SaaS' | 'Tool' | 'Service';
    status: 'Available' | 'Coming Soon';
        link?: string;
    }

const tools: Tool[] = [
    {
        id: 'car-sniper',
        name: 'Car Sniper',
        description: 'AI-powered car listing monitor që ju njofton për makinat e reja që përputhen me kërkesat tuaja.',
        icon: <FiSearch className="w-8 h-8" />,
        features: [
            'Monitorim automatik i listave',
            'Njoftime në Telegram/WhatsApp',
            'Zbulim i çmimeve më të ulëta',
            'Dashboard për monitoring'
        ],
        price: '€29/muaj',
        category: 'SaaS',
        status: 'Available',
        link: '/car-sniper'
    },
    {
        id: 'trading-dashboard',
        name: 'Trading Dashboard',
        description: 'Dashboard profesional për trading me indikatorë të avancuar dhe analizë në kohë reale.',
        icon: <FiTrendingUp className="w-8 h-8" />,
        features: [
            'Indikatorë të avancuar',
            'Analizë në kohë reale',
            'Sistemi i alarmeve',
            'Backtesting'
        ],
        price: '€49/muaj',
        category: 'SaaS',
        status: 'Available',
        link: '/trading-dashboard'
    },
    {
        id: 'lead-generator',
        name: 'Lead Generator',
        description: 'Sistem automatik për gjenerimin e lead-eve për bizneset lokale.',
        icon: <FiUsers className="w-8 h-8" />,
        features: [
            'Gjenerim automatik i lead-eve',
            'Integrim me CRM',
            'Email automation',
            'Analytics dashboard'
        ],
        price: '€99/muaj',
        category: 'SaaS',
        status: 'Available',
        link: '/lead-generator'
    },
    {
        id: 'pine-scripts',
        name: 'Pine Scripts Collection',
        description: 'Koleksion i gjerë i indikatorëve TradingView për strategji trading.',
        icon: <FiBarChart2 className="w-8 h-8" />,
        features: [
            '50+ indikatorë profesionale',
            'Strategji trading',
            'Përditësime të vazhdueshme',
            'Mbështetje teknike'
        ],
        price: '€99 njëherë',
        category: 'Tool',
        status: 'Available',
        link: '/pine-scripts'
    }
];

export function ToolsServices() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Mjetet & Shërbimet Tona
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Përveç web design-it, ofrojmë edhe mjete profesionale SaaS që mund t&apos;i ndihmojnë biznesin tuaj të rritet.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {tools.map((tool, index) => (
                        <ScrollReveal key={tool.id} direction="up" delay={index * 0.1}>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200 dark:border-gray-700 group">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        {tool.icon}
                                    </div>
                                    {tool.status === 'Available' ? (
                                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                                            Disponueshëm
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full">
                                            Së Shpejti
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {tool.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 min-h-[3rem]">
                                    {tool.description}
                                </p>

                                <div className="mb-4">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                        {tool.price}
                                    </div>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {tool.category === 'SaaS' ? 'Abonim mujor' : 'Pagesë njëherë'}
                                    </span>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {tool.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <span className="text-green-500 dark:text-green-400 mr-2 mt-0.5">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {tool.status === 'Available' ? (
                                    <Link
                                        href={tool.link || '/contact'}
                                        className="block w-full bg-blue-600 dark:bg-blue-500 text-white py-2.5 px-4 rounded-lg font-semibold text-center hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 active:scale-95 transform transition-all duration-300"
                                    >
                                        Shihni Më Shumë
                                    </Link>
                                ) : (
                                    <button
                                        disabled
                                        className="w-full bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-2.5 px-4 rounded-lg font-semibold cursor-not-allowed"
                                    >
                                        Së Shpejti
                                    </button>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-6 py-4 rounded-xl border border-blue-200 dark:border-blue-800">
                        <FiZap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">Oferta Speciale:</span> Merrni të gjitha mjetet me{' '}
                            <span className="font-bold text-blue-600 dark:text-blue-400">€149/muaj</span> (kursim 40%)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
