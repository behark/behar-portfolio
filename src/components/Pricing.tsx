'use client';

import { content } from '@/lib/content';
import { ScrollReveal } from '@/components/ScrollReveal';
import Link from 'next/link';
import { useState } from 'react';

export function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handlePlanSelect = (planName: string, price: string) => {
        setSelectedPlan(planName);
        // Create WhatsApp message with plan details
        const message = encodeURIComponent(
            `Përshëndetje! Jam i interesuar për planin ${planName} (${price}). Mund të bisedojmë më shumë?`
        );
        window.open(`https://wa.me/38349333019?text=${message}`, '_blank');
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    {content.pricing.title}
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
                    Zgjidhni planin që i përshtatet më mirë biznesit tuaj. Të gjitha çmimet përfshijnë hostim për vitin e parë.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {content.pricing.plans.map((plan, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                            <div
                                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${plan.popular ? 'border-2 border-blue-600 dark:border-blue-500 relative' : 'border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse-slow">
                                            {plan.popular}
                                        </span>
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {plan.name}
                                </h3>

                                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {plan.price}
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                    Pagesë njëherë
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <span className="text-green-500 dark:text-green-400 mr-2 hover:scale-125 transition-transform flex-shrink-0 mt-0.5">✓</span>
                                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-2">
                                    <button
                                        onClick={() => handlePlanSelect(plan.name, plan.price)}
                                        className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 hover:shadow-lg active:scale-95 transform transition-all duration-300 focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Bisedo në WhatsApp</span>
                                    </button>
                                    <Link
                                        href="/contact"
                                        className="block w-full text-center border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 py-2.5 px-6 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
                                    >
                                        Ose na kontaktoni
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Nuk jeni të sigurt se cili plan ju përshtatet?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        Kërko Konsulencë Falas
                    </Link>
                </div>
            </div>
        </section>
    );
}
