'use client';

import { FiCheck } from 'react-icons/fi';
import { ScrollReveal } from '@/components/ScrollReveal';
import Link from 'next/link';

const plans = [
    {
        name: 'Starter',
        price: '€49',
        period: '/muaj',
        features: [
            '100 lead-e/muaj',
            'Email automation bazë',
            'Dashboard bazë',
            'Mbështetje email'
        ],
        popular: false
    },
    {
        name: 'Professional',
        price: '€99',
        period: '/muaj',
        features: [
            '500 lead-e/muaj',
            'Email automation i plotë',
            'Integrim CRM',
            'Analytics dashboard',
            'Mbështetje prioritare',
            'Përditësime live'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: '€199',
        period: '/muaj',
        features: [
            'Lead-e të pakufizuara',
            'Gjithçka në Professional',
            'API access',
            'Integrime të personalizuara',
            'Mbështetje 24/7',
            'Account manager dedikuar'
        ],
        popular: false
    }
];

export function LeadGeneratorPricing() {
    const handleGetStarted = (planName: string, price: string) => {
        const message = encodeURIComponent(
            `Përshëndetje! Jam i interesuar për planin ${planName} (${price}/muaj) të Lead Generator.`
        );
        window.open(`https://wa.me/38349333019?text=${message}`, '_blank');
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Çmime të Thjeshta
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Zgjidhni planin që ju përshtatet. Të gjitha planet përfshijnë provë falas 7 ditë.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                            <div
                                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                                    plan.popular
                                        ? 'border-2 border-purple-600 dark:border-purple-500 relative scale-105'
                                        : 'border border-gray-200 dark:border-gray-700'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-purple-600 dark:bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                            MË POPULLORI
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {plan.name}
                                </h3>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-400">
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <FiCheck className="w-5 h-5 text-purple-500 dark:text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleGetStarted(plan.name, plan.price)}
                                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                                        plan.popular
                                            ? 'bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600'
                                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                                    } hover:scale-105 active:scale-95 transform`}
                                >
                                    Fillo Tani
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Nuk jeni të sigurt? Provoni falas për 7 ditë, pa karta krediti.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                    >
                        Kontaktoni për më shumë informacion →
                    </Link>
                </div>
            </div>
        </section>
    );
}
