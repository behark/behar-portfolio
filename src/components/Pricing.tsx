'use client';

import { content } from '@/lib/content';
import { ScrollReveal } from '@/components/ScrollReveal';
import Link from 'next/link';

export function Pricing() {
    const handlePlanSelect = (planName: string, price: string) => {
        // Create WhatsApp message with plan details
        const message = encodeURIComponent(
            `Përshëndetje! Jam i interesuar për planin ${planName} (${price}). Mund të bisedojmë më shumë?`
        );
        window.open(`https://wa.me/38349333019?text=${message}`, '_blank');
    };

    return (
        <section className="section-base bg-white dark:bg-gray-900 transition-colors">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="heading-lg text-center text-gray-900 dark:text-white mb-4">
                    {content.pricing.title}
                </h2>
                <p className="body-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
                    Zgjidhni planin që i përshtatet më mirë biznesit tuaj. Të gjitha çmimet përfshijnë hostim për vitin e parë.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {content.pricing.plans.map((plan, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                            <div
                                className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm card-hover p-8 ${plan.popular ? 'border-2 border-blue-600 dark:border-blue-500 relative' : 'border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                            {plan.popular}
                                        </span>
                                    </div>
                                )}

                                <h3 className="heading-md text-gray-900 dark:text-white mb-4">
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
                                            <span className="text-green-500 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5">✓</span>
                                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-2">
                                    <button
                                        onClick={() => handlePlanSelect(plan.name, plan.price)}
                                        className="btn-primary w-full"
                                    >
                                        Bisedo në WhatsApp
                                    </button>
                                    <Link
                                        href="/contact"
                                        className="btn-secondary w-full"
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
                        className="btn-secondary"
                    >
                        Kërko Konsulencë Falas
                    </Link>
                </div>
            </div>
        </section>
    );
}
